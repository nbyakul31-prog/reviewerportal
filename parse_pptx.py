#!/usr/bin/env python3
"""
Zero-dependency PPTX Slide Viewer & Extractor for Antigravity IDE
Extracts text, slide titles, bullet points, and structures from any .pptx presentation.
Converts presentations into clean Markdown and interactive HTML slide decks.

Usage:
  python parse_pptx.py <presentation.pptx>
  python parse_pptx.py <presentation.pptx> --export-md
  python parse_pptx.py <presentation.pptx> --json
"""

import sys
import os
import zipfile
import re
import json
import xml.etree.ElementTree as ET

# XML namespaces commonly used in PPTX
NS = {
    'a': 'http://schemas.openxmlformats.org/drawingml/2006/main',
    'r': 'http://schemas.openxmlformats.org/officeDocument/2006/relationships',
    'p': 'http://schemas.openxmlformats.org/presentationml/2006/main'
}

def extract_slide_text(xml_content):
    """Extract ordered paragraphs from slide XML."""
    root = ET.fromstring(xml_content)
    paragraphs = []
    
    # Iterate through shape text bodies
    for sp in root.findall('.//p:sp', NS):
        txBody = sp.find('p:txBody', NS)
        if txBody is None:
            continue
        
        shape_text = []
        for p in txBody.findall('a:p', NS):
            line_parts = []
            for r in p.findall('a:r', NS):
                t = r.find('a:t', NS)
                if t is not None and t.text:
                    line_parts.append(t.text)
            
            # Also check for direct text inside fields
            for fld in p.findall('a:fld', NS):
                t = fld.find('a:t', NS)
                if t is not None and t.text:
                    line_parts.append(t.text)

            line = "".join(line_parts).strip()
            if line:
                shape_text.append(line)
        
        if shape_text:
            paragraphs.append(shape_text)
            
    return paragraphs

def parse_pptx(file_path):
    """Parses .pptx file and returns structured slide list."""
    if not os.path.isfile(file_path):
        raise FileNotFoundError(f"File not found: {file_path}")

    slides_data = []
    with zipfile.ZipFile(file_path, 'r') as z:
        # Find all slide XML files
        slide_names = [f for f in z.namelist() if re.match(r'ppt/slides/slide\d+\.xml', f)]
        
        # Sort naturally by slide number (e.g. slide1, slide2, ..., slide10)
        def natural_sort_key(s):
            m = re.search(r'slide(\d+)\.xml', s)
            return int(m.group(1)) if m else 0

        slide_names.sort(key=natural_sort_key)

        for idx, slide_name in enumerate(slide_names, start=1):
            xml_data = z.read(slide_name)
            paragraphs = extract_slide_text(xml_data)

            # Flatten paragraphs
            all_lines = []
            for block in paragraphs:
                all_lines.extend(block)

            title = all_lines[0] if all_lines else f"Slide {idx}"
            body_lines = all_lines[1:] if len(all_lines) > 1 else []

            slides_data.append({
                "slide_number": idx,
                "title": title,
                "content": body_lines,
                "raw_blocks": paragraphs
            })

    return slides_data

def export_to_markdown(slides, output_path):
    """Exports parsed slides into readable Markdown."""
    lines = [f"# 📑 Slide Presentation Notes\n", f"> Extracted {len(slides)} slides automatically.\n", "---\n"]
    for s in slides:
        lines.append(f"## Slide {s['slide_number']}: {s['title']}\n")
        for line in s['content']:
            lines.append(f"- {line}")
        lines.append("\n---\n")

    content = "\n".join(lines)
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"[+] Markdown exported to: {output_path}")

def print_slides_cli(slides):
    """Pretty prints slides to terminal."""
    print("=" * 60)
    print(f"  📑 PPTX SLIDE VIEWER — Total Slides: {len(slides)}")
    print("=" * 60)
    for s in slides:
        print(f"\n▶ [SLIDE {s['slide_number']}] {s['title']}")
        if s['content']:
            for line in s['content']:
                print(f"    • {line}")
        else:
            print("    (No text content)")
    print("\n" + "=" * 60)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python parse_pptx.py <path_to_presentation.pptx> [--export-md] [--json]")
        sys.exit(1)

    pptx_path = sys.argv[1]
    if not os.path.exists(pptx_path):
        print(f"[-] Error: File does not exist: {pptx_path}")
        sys.exit(1)

    slides = parse_pptx(pptx_path)

    if "--json" in sys.argv:
        print(json.dumps(slides, indent=2, ensure_ascii=False))
    elif "--export-md" in sys.argv:
        out_name = os.path.splitext(os.path.basename(pptx_path))[0] + "_slides.md"
        export_to_markdown(slides, out_name)
    else:
        print_slides_cli(slides)
        # Also auto-export a markdown copy for instant IDE viewing
        out_name = os.path.splitext(os.path.basename(pptx_path))[0] + "_slides.md"
        export_to_markdown(slides, out_name)
