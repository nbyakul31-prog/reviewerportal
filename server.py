#!/usr/bin/env python3
"""
QCU BSIT Reviewer Portal - Local Companion Server
Serves the web application locally with zero external pip dependencies.
Student: Luigi Emanuel Britania (3rd Year - SBIT3G) | QCU
"""

import http.server
import socketserver
import webbrowser
import os
import sys

DEFAULT_PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class ReviewerHTTPHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # Enable CORS and disable aggressive caching for live development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()

def run_server(port=DEFAULT_PORT):
    handler = ReviewerHTTPHandler
    # Allow port reuse
    socketserver.TCPServer.allow_reuse_address = True

    chosen_port = port
    server = None
    for attempt in range(5):
        try:
            server = socketserver.TCPServer(("", chosen_port), handler)
            break
        except OSError:
            chosen_port += 1

    if not server:
        print(f"[-] Could not bind server to ports {port}-{chosen_port}.")
        sys.exit(1)

    url = f"http://localhost:{chosen_port}"
    print("=" * 65)
    print("  🚀 QCU BSIT REVIEWER PORTAL LOCAL SERVER")
    print(f"  📍 Local Address: {url}")
    print(f"  📂 Serving Path : {DIRECTORY}")
    print("  👤 Student      : Luigi Emanuel Britania (SBIT3G)")
    print("=" * 65)
    print("  Press Ctrl+C to stop server.\n")

    # Optionally open browser if interactive
    if "--no-browser" not in sys.argv:
        try:
            webbrowser.open(url)
        except Exception:
            pass

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\n[*] Shutting down server gracefully...")
        server.server_close()
        print("[+] Done.")

if __name__ == "__main__":
    port_arg = DEFAULT_PORT
    if len(sys.argv) > 1 and sys.argv[1].isdigit():
        port_arg = int(sys.argv[1])
    run_server(port_arg)
