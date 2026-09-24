# 📱 QCU BSIT Reviewer Portal (Mobile-First)

> **Interactive, Zero-Signup Study & Exam Prep Hub for Quezon City University BSIT Students.**  
> Built for **Luigi Emanuel Britania** (3rd Year, Section `SBIT3G`, AY 2026–2027 1st Semester).

🌐 **Live Web App (GitHub Pages):**  
👉 **[https://nbyakul31-prog.github.io/reviewerportal/](https://nbyakul31-prog.github.io/reviewerportal/)**

---

## 🚀 Key Features

- **📱 Mobile-First Thumb Experience**: Optimized for mobile phones with bottom navigation, swipeable touch flashcards, and zero lag.
- **⚡ Zero Signup & Zero Database**: Everything runs 100% in-browser. Quiz scores, mastered flashcards, streak counter, and checkpoint badges persist locally in `localStorage`.
- **📖 Chronological Digest (No Skimming Needed)**: High-yield bullet point summaries, key terms, real Philippine legal doctrines, and "Exam Trap Warnings".
- **🗂️ Interactive 3D Flashcards**: Flip cards to reveal answers, track mastery, with touch swipe support (Swipe Left = Review Again, Swipe Right = Mastered).
- **🎯 Checkpoint Quizzes**: Scenario-based questions mirroring typical QCU professor test items with immediate explanations for every option.
- **⏱️ Chess-Style Blitz Cram Mode**: Dynamic time controls (1m+5s Blitz, 30s+3s Bullet, 3m+2s Rapid, 5m, 10m, Zen) with time increments (+5s) on correct answers and low-time alarms.
- **🔢 Custom Quiz Length**: Selectable question amounts (10, 20, 30, 50, or All) with automated subject-wide question pooling.
- **🔊 Built-In Web Audio & Haptics**: Synthesized audio feedback (correct chime, error tone, flip click) and subtle vibration feedback without needing external MP3 downloads.
- **📂 Full Semester Subjects Hub**: Enrolled course schedule table ready with slots for all 7 subjects.

---

## 📚 Enrolled Subjects & Modules (AY 2026–2027)

| Code | Subject Title | Schedule | Status | Checkpoints |
| :--- | :--- | :--- | :---: | :---: |
| **SPI101** | **Social and Professional Issues 1** | **Fri 2:30PM - 5:30PM** | 🟢 **ACTIVE** | **3 Checkpoints Ready** |
| **MS101** | **Discrete Mathematics** | **Mon 6:00PM - 9:00PM** | 🟢 **ACTIVE** | **3 Checkpoints Ready** |
| **IPT102** | **Integrative Programming & Tech 2** | **Tue 2:30PM-5:30PM & 7PM-9PM** | 🟢 **ACTIVE** | **7 Checkpoints Ready** |
| **AR101** | **Architecture and Organization** | **Thu 2:30PM-5:30PM & 7PM-9PM** | 🟢 **ACTIVE** | **6 Checkpoints Ready** |
| **SIA101** | **Systems Integration & Architecture 1** | **Wed 12:30PM-2:30PM & 4:30PM-7:30PM** | 🟢 **ACTIVE** | **5 Checkpoints Ready** |
| **SOCSCI3** | The Contemporary World | Fri 6:00PM - 9:00PM | ⚪ Slot Ready | Planned |
| **RIZAL** | The Life and Works of Rizal | Fri 2:30PM - 5:30PM | ⚪ Slot Ready | Planned |

---

## 🏛️ AR101: Computer Architecture and Organization Breakdown

### Checkpoint 1: Week 2 — Intro to Computer Architecture & Organization
- **Digital Computer**: Fast electronic calculating machine accepting digitized input, processing via stored program, producing output.
- **5 Functional Units**: Input, Memory (Primary Storage), Arithmetic & Logic Unit (ALU), Control Unit (CU), Output. CPU is 10x faster than Main Memory.
- **4 Main Memory Divisions**: Input Storage Area, Working Storage Space, Output Storage Area, Program Storage Area.
- **Von-Neumann Architecture**: Stored Program / Fetch-Decode-Execute Architecture with unified memory.
- **Language Generations**: High-level (easy to learn, predefined functions, portability) vs Low-level (compact code, speed, flexibility).

### Checkpoint 2: Week 3 — Main Memory & Central Processing Unit (CPU)
- **CPU Registers**: PC (Program Counter), MAR (Memory Address Register), MDR (Memory Data Register), IR (Instruction Register), General Purpose Registers R0 to R(n-1).
- **Read & Write Cycles**: Non-destructive Read vs destructive overwrite Write.
- **Trace of `ADD LOCA, R0`**: 6-step cycle showing MAR, MDR, PC+1, and ALU sum execution.
- **Instruction Address Formats**: 0-Address (implicit Stack/ACC), 1-Address (implicit ACC), 2-Address (`ADD A, B`), 3-Address (`ADD A, B, C`).
- **Bus Structures**: Data, Address, and Control Buses; Single-Bus bottleneck vs Two-Bus configurations 1 & 2.

### Checkpoint 3: Week 4 — Intel Microprocessors, Logical & Physical Memory
- **Intel Milestones**: 4004 (1971, 4-bit, 2KB), 8008 (1972, 8-bit, 16KB), 8080 (1973), 8085 (1978), 8086 (1978, 16-bit, 1MB), 8088 (1979, 8-bit external bus).
- **Physical Memory Organization**: Even Bank (A_0 = 0, D_0-D_7) and Odd Bank (BHE# = 0, D_8-D_15).
- **EU vs BIU**: Execution Unit (ALU, CU, Registers, Flags) vs Bus Interface Unit (Segment Regs, IP, 6-byte/4-byte prefetch queue).
- **PSW / Flags**: 6 Status Flags (CF, PF, AF, ZF, SF, OF) and 3 Control Flags (TF, IF, DF).
- **Physical Address Formula**: PA = (Segment Base  ×  10H) + Offset.

### Checkpoint 4: Week 5 — Memory Segments, Stack Operations & 7 Addressing Modes
- **64KB Segments**: CS, DS, SS, ES (65,536 bytes each).
- **LIFO Stack**: Grows downward toward lower memory; SP initialized to `FFFFH`.
- **PUSH & POP Traces**: `PUSH` decrements SP by 2 (high byte at SP+1, low byte at SP); `POP` increments SP by 2.
- **The 7 Data Addressing Modes**: Register, Immediate, Direct, Register Indirect, Register Relative, Base-Plus-Index, Base-Relative-Plus-Index.
- **Default Segment Rules**: `BX`, `SI`, `DI` use `DS`; `BP` uses `SS`.

### Checkpoint 5: Week 6 — Data Transfer Instructions & Tracing
- **Rule of Flags**: Data transfer instructions (`MOV`, `PUSH`, `POP`, `XCHG`, `LEA`) DO NOT affect flags (except `POPF` and `SAHF`).
- **11 Instructions**: `MOV`, `PUSH`, `POP`, `PUSHA`, `POPA`, `XCHG`, `IN`, `OUT`, `XLAT`, `LAHF`, `SAHF`, `PUSHF`, `POPF`.
- **Restrictions**: No memory-to-memory with MOV; CS cannot be destination; no immediate into segment register directly; XCHG cannot use immediate or segment registers.
- **`LEA` vs `MOV`**: `MOV` loads memory data; `LEA` loads the 16-bit offset address.

### Checkpoint 6: Week 7 — The Arithmetic Unit (Part 1)
- **ALU Fundamentals**: Addition and subtraction form the basis of all digital computation.
- **Signed Numbers**: Sign-Magnitude (dual zeros: +0, -0), 1's Complement (dual zeros), 2's Complement (single zero, range -2^n-1  to  +2^n-1-1).
- **Full Adder Equations**: Sum s_i = x_i  XOR  y_i  XOR  c_i, Carry c_i+1 = x_i y_i + (x_i + y_i) c_i.
- **Ripple-Carry Delay**: (n-1)  ×  1 ns + 1.5 ns (32-bit = 32.5 ns).
- **Carry-Lookahead Adder (CLA)**: Generate G_i = x_i y_i, Propagate P_i = x_i + y_i; all carries generated in 3 gate delays.
- **Gate Fan-In Constraint**: i+2 inputs to largest AND/OR gate (fan-in of 9 for 8-bit CLA); solved via Block/Hierarchical CLAs.
- **Logic Gates Master Graphical Reference**: Schematic symbols and complete truth tables for all 8 standard digital gates (Buffer, Inverter, AND, NAND, OR, NOR, XOR, XNOR).
- **Half Adder & Full Adder Architectures**: Single-bit Half Adder ($S = A \oplus B, C = AB$), modular Full Adder via Two Half Adders and one OR gate ($C_{out} = AB + (A \oplus B)C_{in}$), and 2-level high-speed combinational ALU circuits.

---

## 🌐 SIA101: Systems Integration & Architecture 1 Breakdown

### Checkpoint 1: Week 2 — SIA Requirements & Fundamentals
- **System Integration vs Architecture**: Integration combines sub-systems to ensure functionality; Architecture provides the conceptual model and formal representation.
- **Integration Types**: Enterprise Application Integration (EAI), Data Integration, and Electronic Data Interchange (EDI).
- **EDI Messaging Standards**: UN/EDIFACT (3 components: Event, Reference Data, Control Info), XML (W3C standard, XML/EDI, XSL stylesheets), SWIFT (banking messaging).
- **UML Messages**: 2 parts: Event and Information.
- **10 Requirement Elicitation Methodologies**: Brainstorming, Document Analysis, Focus Group, Interface Analysis, Observation (Job Shadowing), Interview, Prototyping (Rapid Throwaway, Evolutionary, Incremental, Extreme), Requirements Workshop, Reverse Engineering, Surveying.
- **Surveying Best Practices**: 8 core guidelines (communicating purpose, audience awareness, short length, clear content, avoiding negative/complex/defensive questions, eliciting actionable details).

### Checkpoint 2: Week 3 — Use Case & Business Process Modeling (BPM)
- **Use Case Model**: Standardized in UML; shows how external actors interact with the system to solve problems.
- **5 Purposes of Use Case Diagrams**: Specifying context, capturing requirements, validating architecture, implementing/generating test cases, bridging technical and business teams.
- **10 BPM Techniques**: BPMN (Flow objects, Connecting objects, Swimlanes, Artifacts), UML Diagrams, Flowchart Technique, Data Flow Diagrams (DFD), Role Activity Diagrams (RAD), Role Interaction Diagrams (RID: Sequence & Collaboration), Gantt Charts, Integrated Definition (IDEF0 ICOM: Input, Control, Output, Mechanism), Coloured Petri Nets (CPN), Object-Oriented Methods.
- **Business Analysis Tools**: 5 reasons BAs need tools; 3 categories: Requirement-related, Modelling, Collaboration.

### Checkpoint 3: Week 4 — Project Management Life Cycle (PMLC)
- **PMI 5-Phase PMLC**: 1. Conception & Initiation (Project Charter, Business Case), 2. Definition & Planning (Scope, WBS, Schedule, Risk), 3. Launch & Execution (Deliverables development), 4. Performance & Control (KPIs, quality, budget burn), 5. Project Close (Deliverable handover, contract termination, retrospectives).
- **Goal Setting**: SMART (Specific, Measurable, Actionable, Realistic, Timebound) vs CLEAR (Collaborative, Limited, Emotional, Appreciable, Refinable).
- **Planning Documents**: Scope Statement, Work Breakdown Structure (WBS), Milestones (zero duration), Gantt Charts, Stakeholder Communication Plan.
- **Risk Severity Matrix**: 5 severity levels evaluated across Technical Performance, Cost (up to > 20M), and Schedule (up to > 3 months delay).
- **4 Monitoring KPIs & 5 Closure Steps**: Tracking Objectives, Quality Deliverables, Cost/Effort, Performance; handover, contracts, retrospective, disbanding, and documenting learnings.

### Checkpoint 4: Week 5 — Organizational Context & IT Environments
- **Business Processes**: Definition, 6 importance pillars, and 7-Step Lifecycle (Define goals ➔ Plan & map ➔ Set actions & stakeholders ➔ Test ➔ Implement ➔ Monitor ➔ Repeat).
- **Business Process Integration (BPI)**: Automates processes, integrates services, enables secure data sharing across apps; 7 strategic benefits.
- **IT Environment**: Integrated collection of computing components serving user and owner needs. 3 Components: Computing Platforms, Applications/Apps, Connectivity (Wireless, Wired, Personal, Local, Distance/DSL).
- **IT Environment Triad**: Needs (functionality, cost, reliability), Rules (laws and owner regulations), Choices (balancing needs, rules, affordable technology).
- **Organizational Structures**: Centralized (hierarchical, uniform) vs Decentralized (democratic, adaptable); 4 Types: Functional (centralized departments), Divisional/Multidivisional (subsidiaries under same brand), Flatarchy (startups, flat hierarchy, high autonomy), Matrix (dual reporting managers, solid & dotted lines).

### Checkpoint 5: Week 6 — Acquisition, Sourcing & Procurement
- **Procurement Workflow**: Purchase Requisition Order submitted to procurement unit; Sourcing assesses suppliers; Acquisition executes 3 stages: Requirements Analysis ➔ RFP ➔ Vendor Selection.
- **Market Survey**: 5 factors (Quantities available, Quality, Pricing, Source & origin, Technical specifications).
- **The First Principle of Sourcing**: Always source commodities locally and in-country, as close to the field as possible to minimize transport time and cost. International sourcing options when local capacity is insufficient.
- **Sole vs Single Sourcing**: Sole Source = ONLY ONE supplier exists in the market (e.g. water utility); Single Source = MULTIPLE suppliers exist, but buyer purposely contracts with one.
- **RFQ & Sealed Bids**: Bidding thresholds, Tracking Sheet for Sealed Bids, independent bid committees.
- **3-Pillar Vendor Screening**: Vendor questionnaire, reference checks (preferably NGOs), anti-terrorism & debarred list screening.
- **In-Sourcing Trade-Offs**: Advantages (Competitive advantage, trade secrets, culture, cost control, direction & control) vs Disadvantages (overhead cost, capabilities limitation, loss of core focus).

---

## ⚡ IPT102: Integrative Programming & Technologies 2 Breakdown

### Checkpoint 1: Week 1–2 — Introduction to Basic Python Programming
- Origins: Created by Guido van Rossum (1985–1990), published under GNU GPL.
- Guido van Rossum: BDFL until July 12, 2018; Steering Council through 2019.
- Language nature: Interpreted, interactive, dynamically-typed, garbage-collected, OOP & functional.
- Cross-platform reach: Unix, Windows, Mac, DOS, OS/2, PalmOS, Nokia, QNX, VxWorks, Jython, IronPython.
- IDEs: IDLE (first Unix IDE) and PythonWin (first Windows GUI IDE).

### Checkpoint 2: Week 3–4 — Python Data Types, Numbers & Strings
- Syntax & Indentation: 4 spaces standard (at least 1 required); replaces braces as block delimiter.
- Variables: No declaration keyword; dynamic typing; case-sensitive; CamelCase vs PascalCase vs SnakeCase.
- Assignment: Multi-variable assignment, collection unpacking (`fruits = [...] ; x, y, z = fruits`).
- Output: `print()` with commas (handles mixed types) vs `+` (fails with `TypeError` on str + int).
- Scope: Global vs local shadowing; the `global` keyword for inside-function rebinding.
- 8 Built-in Types: `str`, numeric (`int`, `float`, `complex`), sequence (`list`, `tuple`, `range`), `dict`, set, `bool`, binary (`bytes`), `NoneType`.
- Numbers: `int` unlimited precision, `float` (scientific `e`), `complex` (`j` imaginary; cannot convert to other types). Random module `random.randrange(1, 10)`.
- Strings: Array of unicode bytes, 0-indexed, no character type, slicing `b[2:5]`, membership `in`/`not in`.
- Immutability: String methods return **new string copies**; never mutate in place (`upper`, `lower`, `strip`, `replace`, `split`).
- Formatting: `format()` method, `{0}` positional index placeholders, escape characters (`\`).

### Checkpoint 3: Week 2 (Web) — ASP.NET Core 9.0 & Visual Studio Setup
- Framework Flavors: ASP.NET Core (cross-platform, open source, .NET 9.0) vs ASP.NET .NET Framework (legacy Windows).
- VS Installer Workload: ASP.NET and web development component.
- 3 Web Templates: Razor Pages (page-focused), MVC (SoC architecture), Web API (backend services).
- Core Tools: Solution Explorer, Razor Editor, Hot Reload, and Built-in Debugger.
- Hands-on Lab (`MyCoreApp`): Solution tour (`wwwroot` static files, `Pages`, `.cshtml.cs` code-behind, `appsettings.json`, `Program.cs`).
- Code Changes: Quick Actions light bulb to Remove Unnecessary Usings, `DateTime.ToString("d", new CultureInfo("en-US"))`, `ViewData["TimeStamp"]`. F5 (debug) vs Ctrl+F5 (run without debug) vs Shift+F5 (stop).
- Web Forms & Page Event Lifecycle: `.aspx`, `runat="server"`, 5 web control types, and 7 lifecycle steps.

### Checkpoints 4–7: Weeks 3–6 (Web) — ASP.NET MVC 5 & Razor
- Week 3: MVC Pattern, Separation of Concerns, Request Lifecycle, Routing Engine (`{controller}/{action}/{id}`).
- Week 4: Controllers, Action Method rules (public, non-overloaded, non-static), `ActionResult` types, and action selectors.
- Week 5: Razor View Engine (`@{ ... }`, `@`, loops, conditionals, server execution pipeline).
- Week 6: Standard HTML Helpers (`@Html.TextBox`, `@Html.DropDownList`, strongly vs loosely typed).

---

## 📐 MS101: Discrete Mathematics Content Breakdown

### Checkpoint 1: Weeks 2–4 — Logic and Sets
- Propositional Logic: Propositions vs Non-propositions (questions, exclamations, open variables).
- 5 Connectives & Precedence: NOT (~) > AND (∧) > OR (∨) > IF-THEN (→) > IFF (↔).
- Truth Tables (R = 2^n): Tautology (always T), Contradiction (always F), Contingency (mixed).
- Predicates and Quantifiers: Universal (∀x) vs Existential (∃x).
- Set Theory: Roster vs Rule method, Cardinality, Empty Set (emptyset), Power Set (|P(A)| = 2^|A|), Union, Intersection, Difference, Complement, Venn Diagrams.

### Checkpoint 2: Week 5 — Applications of Number Theory
- Divisibility Rules: 2, 3, 4, 5, 6, 8, 9, 10 without full division.
- Divisibility Theorems: Linear combinations and transitivity (a mid b land a mid c → a mid (b+c)).
- Primes vs Composites: 0 and 1 are **neither prime nor composite**!
- Euclid's Division Algorithm: a = dq + r, where 0 ≤ r < d.
- Greatest Common Divisor (GCD) & LCM: Identity gcd(a, b)  ×  lcm(a, b) = a  ×  b.

### Checkpoint 3: Week 6 — Mathematical Theory & Proofs
- Terminologies: Axiom, Proof, Theorem, Lemma (helper), Corollary, Conjecture.
- Methods of Proof: Direct proof (p → q), Indirect proof by contrapositive (p → q equiv neg q → neg p).
- Mathematical Induction: Basis step, inductive step, and limitation (proves, cannot discover theorems).

---

## 🎯 SPI101 Course Content Breakdown

### Checkpoint 1: Week 2 — Common Ethical Theories
- Relativism: Subjective Relativism (*"What's right for you may not be right for me"*) vs Cultural Relativism.
- Divine Command Theory: Founded on **OBEDIENCE, NOT REASON**.
- Ethical Egoism: Self-interest focus; counter-examples (mother's bread sacrifice, father overtime, sibling drop-out).
- Consequentialism & Utilitarianism: Jeremy Bentham (*"Greatest happiness for the greatest number"*).
- Kantianism (Deontology): Immanuel Kant, obligation, pure reason, duty over consequences.
- Philippine Congress vs Political Dynasties: Article II/III Section 26 non-self-executing provision.
- Persuasive Power of Law vs Ethics: Siesta stranger vs BIR tax letter, loan contracts, civil vs natural support obligations, Love Bug (2000) & E-Commerce Law (RA 8792).

### Checkpoint 2: Week 3–4 — Computer Ethics
- 4 Benefits of a Professional Code of Ethics.
- Filipino IT Code of Ethics (10 Canons) & AITP Code (6 Obligations).
- ACM/IEEE-CS Software Engineering 8 Principles & 10 Commandments of Computer Ethics.
- The Hacking Community's Constitution (14 points / Bill of Rights, Open Source stance).
- James Moor's 3 Properties (Logical Malleability, Impact on Society, Invisibility Factor).
- 3 Kinds of Invisibility (Invisible Abuse, Invisible Programming Values, Invisible Complex Calculation).
- 3 Levels of Computer Ethics (Pop, Para, Theoretical).
- Philippines as Social Media Capital (53 hrs/week vs 42 hrs global).
- Photo Consent Rules & 3 Exemptions (News of day, General public welfare, Public figures in public).

### Checkpoint 3: Week 5–6 — Technologies' Impact on Privacy & Due Process
- 1987 Constitution Article III Section 3: Word "PRIVACY" mentioned once; Exclusionary Rule.
- 3 Exceptions: Lawful Court Order (Search Warrant under Art III Sec 2), Public Order/Safety (MRT checks), Express Provision of Law (AMLA ₱300,000 threshold).
- The Rational Relationship Test & RA 3019 (SALN requirement valid).
- Reasonable Expectation of Privacy (Erap voting booth, Anti-Wiretapping Act RA 4200 all-party consent).
- Spousal Privacy: Marriage does not permit ransacking cabinets for infidelity evidence.
- Detainees/Prisoners: Diminished expectation of privacy under RA 7438.
- Data Privacy Act of 2012 (RA 10173): Section 11 Principles & PIC accountability.
- Due Process Clause (Article III Section 1) applied in Software Engineering: Confirmation dialogs before destructive file changes give users the right to be heard.

---

## 💻 How to Run Locally (Desktop)

You can launch the companion Python server locally with zero external installations:

```bash
# Clone the repository
git clone https://github.com/nbyakul31-prog/reviewerportal.git
cd reviewerportal

# Run the local server (auto-opens in your default browser)
python server.py
```
Or open `index.html` directly in any web browser!

---

## 📱 How to Add to Phone Home Screen (PWA)

1. Open **[https://nbyakul31-prog.github.io/reviewerportal/](https://nbyakul31-prog.github.io/reviewerportal/)** in Chrome or Safari on your phone.
2. Tap the **Share** (iOS) or **Three Dots** (Android) menu.
3. Select **"Add to Home Screen"**.
4. The reviewer portal icon will appear on your phone screen and launch like a native full-screen app!
