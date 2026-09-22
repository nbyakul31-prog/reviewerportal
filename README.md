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
- **⏱️ 60-Second Cram Mode**: Rapid-fire drill to test instant recall right before an exam.
- **🔊 Built-In Web Audio & Haptics**: Synthesized audio feedback (correct chime, error tone, flip click) and subtle vibration feedback without needing external MP3 downloads.
- **📂 Full Semester Subjects Hub**: Enrolled course schedule table ready with slots for all 7 subjects.

---

## 📚 Enrolled Subjects & Modules (AY 2026–2027)

| Code | Subject Title | Schedule | Status | Checkpoints |
| :--- | :--- | :--- | :---: | :---: |
| **SPI101** | **Social and Professional Issues 1** | **Fri 2:30PM - 5:30PM** | 🟢 **ACTIVE** | **3 Checkpoints Ready** |
| **MS101** | **Discrete Mathematics** | **Mon 6:00PM - 9:00PM** | 🟢 **ACTIVE** | **3 Checkpoints Ready** |
| **IPT102** | **Integrative Programming & Tech 2** | **Tue 2:30PM-5:30PM & 7PM-9PM** | 🟢 **ACTIVE** | **7 Checkpoints Ready** |
| **AR101** | Architecture and Organization | Thu 2:30PM-5:30PM & 7PM-9PM | ⚪ Slot Ready | Planned |
| **SIA101** | Systems Integration and Architecture 1 | Wed 12:30PM-2:30PM & 4:30PM-7:30PM | ⚪ Slot Ready | Planned |
| **SOCSCI3** | The Contemporary World | Fri 6:00PM - 9:00PM | ⚪ Slot Ready | Planned |
| **RIZAL** | The Life and Works of Rizal | Fri 2:30PM - 5:30PM | ⚪ Slot Ready | Planned |

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
- Truth Tables ($R = 2^n$): Tautology (always T), Contradiction (always F), Contingency (mixed).
- Predicates and Quantifiers: Universal (∀x) vs Existential (∃x).
- Set Theory: Roster vs Rule method, Cardinality, Empty Set ($\emptyset$), Power Set ($|P(A)| = 2^{|A|}$), Union, Intersection, Difference, Complement, Venn Diagrams.

### Checkpoint 2: Week 5 — Applications of Number Theory
- Divisibility Rules: 2, 3, 4, 5, 6, 8, 9, 10 without full division.
- Divisibility Theorems: Linear combinations and transitivity ($a \mid b \land a \mid c \implies a \mid (b+c)$).
- Primes vs Composites: 0 and 1 are **neither prime nor composite**!
- Euclid's Division Algorithm: $a = dq + r$, where $0 \le r < d$.
- Greatest Common Divisor (GCD) & LCM: Identity $\gcd(a, b) \times \text{lcm}(a, b) = a \times b$.

### Checkpoint 3: Week 6 — Mathematical Theory & Proofs
- Terminologies: Axiom, Proof, Theorem, Lemma (helper), Corollary, Conjecture.
- Methods of Proof: Direct proof ($p \implies q$), Indirect proof by contrapositive ($p \to q \equiv \neg q \to \neg p$).
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
