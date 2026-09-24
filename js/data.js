// ==============================================================================
// QCU BSIT REVIEWER PORTAL - MULTI-SUBJECT STUDY REPOSITORY
// Maintained for: Luigi Emanuel Britania (3rd Year - SBIT3G) | QCU
// Features: Dynamic Checkpoints, Chronological Exam Digests, Shuffled Quizzes, 3D Flashcards, Tabular Glossaries & Circuits
// ==============================================================================

const REVIEWER_DATA = {
  "student": {
    "name": "Luigi Emanuel Britania",
    "course": "BSIT",
    "yearSection": "3rdYr - SBIT3G",
    "campus": "San Bartolome",
    "term": "AY 2026-2027 SEM: 1ST"
  },
  "subjects": [
    {
      "code": "SPI101",
      "title": "Social and Professional Issues 1",
      "schedule": "Friday 2:30PM - 5:30PM",
      "units": 3,
      "status": "active",
      "color": "emerald",
      "badge": "Current Materials Ready",
      "checkpointsCount": 3,
      "questionsCount": 45,
      "flashcardsCount": 40
    },
    {
      "code": "MS101",
      "title": "Discrete Mathematics",
      "schedule": "Monday 6:00PM - 9:00PM",
      "units": 3,
      "status": "active",
      "color": "blue",
      "badge": "Current Materials Ready",
      "checkpointsCount": 3,
      "questionsCount": 15,
      "flashcardsCount": 15
    },
    {
      "code": "IPT102",
      "title": "Integrative Programming and Tech 2",
      "schedule": "Tue 2:30PM - 5:30PM & 7:00PM - 9:00PM",
      "units": 3,
      "status": "active",
      "color": "purple",
      "badge": "Current Materials Ready",
      "checkpointsCount": 7,
      "questionsCount": 74,
      "flashcardsCount": 64
    },
    {
      "code": "AR101",
      "title": "Architecture and Organization",
      "schedule": "Thursday 2:30PM - 5:30PM & 7:00PM - 9:00PM",
      "units": 3,
      "status": "active",
      "color": "amber",
      "badge": "Current Materials Ready",
      "checkpointsCount": 6,
      "questionsCount": 68,
      "flashcardsCount": 62
    },
    {
      "code": "SIA101",
      "title": "Systems Integration and Architecture 1",
      "schedule": "Wednesday 12:30PM - 2:30PM & 4:30PM - 7:30PM",
      "units": 3,
      "status": "active",
      "color": "cyan",
      "badge": "Current Materials Ready",
      "checkpointsCount": 5,
      "questionsCount": 50,
      "flashcardsCount": 50
    },
    {
      "code": "SOCSCI3",
      "title": "The Contemporary World",
      "schedule": "Friday 6:00PM - 9:00PM",
      "units": 3,
      "status": "active",
      "color": "rose",
      "badge": "Current Materials Ready",
      "checkpointsCount": 4,
      "questionsCount": 40,
      "flashcardsCount": 45
    },
    {
      "code": "RIZAL",
      "title": "The Life and Works of Rizal",
      "schedule": "Friday 2:30PM - 5:30PM",
      "units": 3,
      "status": "active",
      "color": "orange",
      "badge": "Current Materials Ready",
      "checkpointsCount": 4,
      "questionsCount": 40,
      "flashcardsCount": 45
    }
  ],
  "checkpoints": [
    {
      "id": "cp1",
      "subject": "SPI101",
      "week": "Week 2",
      "title": "Common Ethical Theories",
      "badge": "Checkpoint 1",
      "description": "Moral frameworks, Relativism, Divine Command, Egoism, Bentham's Utilitarianism, Kantian Deontology, and the Law vs Ethics power dynamic.",
      "digest": [
        {
          "heading": "1. What is Ethics & Moral Theory?",
          "points": [
            "**Ethics** describes the way we look and understand life in terms of good/bad or right/wrong.",
            "Deals with moral principles answering: *'What should I do in this situation?'* and *'What is right or wrong for me?'*",
            "Principal academic references: Douglas Birsch (2002) *Ethical Insights* and James Rachels (2003) *The Elements of Moral Philosophy*."
          ]
        },
        {
          "heading": "2. Relativism (No Universal Norm)",
          "points": [
            "**Core Premise**: There is NO universal moral norm of right and wrong.",
            "**1.1 Subjective Relativism**: Each individual decides morality for themselves. Catchphrase: *'What is right for you may not be right for me.'*",
            "**1.2 Cultural Relativism**: Right and wrong rest strictly on a society's prevailing moral customs. Moral standards vary from place to place and era to era."
          ],
          "trap": "Exam Trap: Saying 'Society dictates truth' is Cultural Relativism, NOT Subjective. Subjective is individual-only!"
        },
        {
          "heading": "3. Divine Command Theory",
          "points": [
            "Good actions = aligned with God's will; Bad actions = contrary to God's will.",
            "Holy Books serve as moral decision-making manuals (e.g., honor thy parents).",
            "**Key Characteristic**: Based strictly on **OBEDIENCE**, NOT on reason."
          ],
          "tldr": "Divine Command = Obedience to holy decree, not rational human calculation."
        },
        {
          "heading": "4. Ethical Egoism (Self-Interest)",
          "points": [
            "Philosophy that every person should focus **exclusively on their own self-interest**.",
            "Morally right action = the one producing the **maximum long-term benefit** for the actor.",
            "Does NOT prohibit helping others, but altruism is done strictly to serve one's own long-term interests.",
            "**Acts that Defy Egoism (Counter-examples)**: 1) Starving mother giving the only bread to her child; 2) Father tirelessly working overtime for family; 3) Sibling dropping out of school so other siblings can study."
          ]
        },
        {
          "heading": "5. Consequentialism & Utilitarianism",
          "points": [
            "Catchphrase: **'The end will justify the means.'**",
            "The consequence of an act determines whether the means taken were morally acceptable.",
            "**Utilitarianism (Jeremy Bentham)**: Dominant consequentialist school. Principle: **'The greatest happiness for the greatest number.'** The broader the beneficiary pool, the higher the moral good."
          ]
        },
        {
          "heading": "6. Kantianism / Deontology (Duty & Reason)",
          "points": [
            "Author: **Immanuel Kant** (18th-century philosopher). Obligation-based morality.",
            "Emphasizes the **type/nature of the action**, NOT the consequences.",
            "Moral decisions must be anchored on one's **duties and the rights of others**.",
            "Morality is rooted in **pure reason**; humans have innate rationality and must act morally regardless of desire.",
            "Golden maxim: **'Act morally regardless of the consequences.'**"
          ]
        },
        {
          "heading": "7. Philippine Context: Congress & Kantian Duty",
          "points": [
            "**1987 Constitution Art. II / III Sec. 26**: State mandates equal access to public service and prohibits political dynasties as defined by law.",
            "**Non-Self-Executing Provision**: Cannot take effect without an enabling law passed by Congress.",
            "**Kantian Paradox**: Congressmen have a moral duty under the Constitution to ban dynasties, yet for over 28+ years (1987–2015+), zero anti-dynasty bills were passed because of personal political self-interest!"
          ]
        },
        {
          "heading": "8. Persuasive Power: Ethics vs Law",
          "points": [
            "The persuasive power of ethics is **weak** compared to the coercive power of the law.",
            "**Siesta Illustration**: 9 out of 10 people will ignore a bleeding woman knocking for help (weak moral persuasion). But receiving a BIR deficiency letter threatening imprisonment compels immediate tax payment (law carries criminal compulsion).",
            "**Contracts & Checks**: When lending P1,000,000, lender demands a P1.1M post-dated check because legal liability guarantees repayment, whereas moral conscience alone cannot be relied upon.",
            "**Civil vs Natural Obligation**: Parents are legally bound to support minor children (civil obligation, enforceable in court). Children supporting elderly parents is a **natural obligation** (moral, no current law allows parents to sue children for support, though bills are proposed).",
            "**Love Bug (2000) Case**: Author maliciously released ILOVEYOU virus knowing it was unethical. However, no cyber law penalized it in May 2000. Once RA 8792 (E-Commerce Act) passed, copycats stopped out of fear of criminal imprisonment."
          ]
        }
      ]
    },
    {
      "id": "cp2",
      "subject": "SPI101",
      "week": "Week 3-4",
      "title": "Computer Ethics & Professional Codes",
      "badge": "Checkpoint 2",
      "description": "Filipino IT Code of Ethics, AITP, Software Engineering 8 Principles, 10 Commandments, Hacker Constitution, James Moor's Properties, and Photo Consent rules.",
      "digest": [
        {
          "heading": "1. Professional Code of Ethics & 4 Benefits",
          "points": [
            "Set of guidelines designed to govern acceptable conduct of members of a profession.",
            "**4 Concrete Benefits**:",
            "1. **Ethical Decision Making** - guides dilemmas.",
            "2. **High Standards of Practice & Ethical Behavior**.",
            "3. **Trust & Respect from General Public**.",
            "4. **Evaluation Benchmark** - provides standard against which performance is measured."
          ]
        },
        {
          "heading": "2. Code of Ethics of Filipino IT Professionals",
          "points": [
            "1. Promote public understanding and appreciation of IT.",
            "2. Consider general welfare, public welfare, and public good in all work.",
            "3. Advertise goods/services in clear and truthful manner.",
            "4. Comply and strictly abide by intellectual property (IP) and patent laws.",
            "5. Accept full responsibility for work and execute with competence.",
            "6. Make truthful representations regarding skills, competence, and product capabilities.",
            "7. Protect confidential client data; never disclose without consent unless mandated by law.",
            "8. Strive to attain highest quality in products and services.",
            "9. Knowingly participate in the development of IT.",
            "10. Continuously uphold and enhance IT professional standards through continuing education."
          ]
        },
        {
          "heading": "3. AITP Code & Software Engineering Principles",
          "points": [
            "**AITP 6 Obligations**: 1) Management, 2) Fellow Members, 3) Society, 4) College/University, 5) Employer, 6) Country.",
            "**Software Engineering 8 Principles (ACM / IEEE-CS)**: 1) Public, 2) Client & Employer, 3) Product, 4) Judgment, 5) Management, 6) Profession, 7) Colleagues, 8) Self."
          ]
        },
        {
          "heading": "4. Ten Commandments of Computer Ethics",
          "points": [
            "Formulated by Computer Ethics Institute. Key prohibitions:",
            "1. Don't harm others with a computer.",
            "2. Don't interfere with others' computer work.",
            "3. Don't snoop in others' computer files.",
            "4. Don't use a computer to steal.",
            "5. Don't bear false witness.",
            "6. Don't copy/pirate proprietary software you haven't paid for.",
            "7. Don't use other people's computer resources without authorization.",
            "8. Don't appropriate others' intellectual output.",
            "9. Always consider the social consequences of your software system.",
            "10. Always use computers with consideration and respect for fellow humans."
          ]
        },
        {
          "heading": "5. The Hacking Community's Constitution",
          "points": [
            "Acts like a 'Bill of Rights' to be read in relation to the Ten Commandments.",
            "Key Tenets: Free speech in cyberspace; freedom from oppressive state control; cyberspace democracy; hacking as a tool to audit and test network integrity; punishment of undemocratic regimes; art/music/politics in cyberspace.",
            "**3 Crucial Goals of Hacking/Cracking/Phreaking**: a) Direct democracy in cyberspace; b) Information should be free to all; c) Testing and exposing vulnerabilities in data storage systems.",
            "Champion of the **Open Source Movement**: Governments should never mandate proprietary commercial software."
          ]
        },
        {
          "heading": "6. James Moor: Problem in Computer Ethics",
          "points": [
            "James Moor argues computer ethics is unique because computers possess **3 Special Properties**:",
            "1. **Logical Malleability**: Computers can be shaped and molded to perform any activity characterized by inputs, outputs, and logical operations.",
            "2. **Impact on Society**: Deep pervasive reach into modern life.",
            "3. **Invisibility Factor**: Operations are invisible to the eye.",
            "**3 Kinds of Invisibility**:",
            "• *Invisible Abuse*: Intentional secret misuse (e.g., hidden backdoors, logic bombs, silent eavesdropping).",
            "• *Invisible Programming Values*: Hidden biases, values, and design shortcuts embedded by programmers.",
            "• *Invisible Complex Calculation*: Complex algorithms that are impossible for human inspection to manually verify."
          ]
        },
        {
          "heading": "7. Three Levels of Computer Ethics",
          "points": [
            "1. **Pop Level**: Sensitizing the general public via TV news, magazines, newspapers.",
            "2. **Para Level**: Collecting cases, spotting similarities/differences, reading case law, attending events.",
            "3. **Theoretical Level**: Applying classical philosophical theories to computer concepts."
          ]
        },
        {
          "heading": "8. Social Media Capital & Photo Consent Rules",
          "points": [
            "**Philippines Fact**: Still the **Social Media Capital of the World** (Filipinos use platforms **53 hours/week**, 11 hours higher than the **42 hours/week** global average).",
            "**Photo Upload Rules**: Never post pictures offensive to people in the picture. Joining a selfie = implied consent to post.",
            "**Unauthorized Photos of Private Persons**: General rule = improper to publish without consent.",
            "**3 Exemptions Where Unauthorized Photos/Videos Are Permissible**:",
            "1. **News of the Day**: Press items (e.g. video of man jumping from EDSA bridge).",
            "2. **General Public Welfare**: Exposing public wrongdoing (e.g. viral video of abusive traffic enforcer threatening truck driver, leading to suspension by Manila Vice Mayor Isko Moreno).",
            "3. **Public Personalities in Public**: Taking photos of celebrities/politicians in public spaces (e.g. Manny Pacquiao in public is legal; taking photos in a comfort room/restroom is strictly illegal!)."
          ]
        }
      ]
    },
    {
      "id": "cp3",
      "subject": "SPI101",
      "week": "Week 5-6",
      "title": "Technologies' Impact on Privacy & Due Process",
      "badge": "Checkpoint 3",
      "description": "1987 Constitution Art. III Sec. 3, AMLA, Search Warrants, Rational Relationship Test, Spousal Privacy, Data Privacy Act (RA 10173), and Due Process in Software Design.",
      "digest": [
        {
          "heading": "1. Constitutional Right to Privacy (Art. III Sec. 3)",
          "points": [
            "The word **'PRIVACY'** is mentioned only **ONCE** in the 1987 Philippine Constitution (Art. III Sec. 3):",
            "*(1) The privacy of communication and correspondence shall be inviolable except upon lawful order of the court, or when public safety or order requires otherwise as prescribed by law.*",
            "*(2) Any evidence obtained in violation of this shall be inadmissible for any purpose in any proceeding (Exclusionary Rule / Fruit of the Poisonous Tree).*",
            "**Crucial Rule**: Right to privacy is **NOT absolute**—it admits of valid exceptions."
          ]
        },
        {
          "heading": "2. The 3 Constitutional Exceptions to Privacy",
          "points": [
            "**Exception 1: Lawful Court Order (Search Warrant)**: Under Art. III Sec. 2, issued only upon **probable cause** determined personally by a judge under oath, specifically describing the place to be searched and persons/things to be seized.",
            "**Exception 2: Public Order or Safety**: Common in public transit/malls. E.g., LRT/MRT security guards compelling bag checks to deter terrorist attacks.",
            "**Exception 3: Express Provision of the Law**: Explicit statutory surrender. E.g., **Anti-Money Laundering Act (AMLA)** requires banks to report individual single-transaction deposits of **₱300,000 or more** to the AMLC."
          ]
        },
        {
          "heading": "3. The Rational Relationship Test",
          "points": [
            "Supreme Court standard to determine constitutionality of privacy-limiting laws:",
            "1. Does the policy have a **reasonable purpose / rational basis**? (Deemed 'legitimate').",
            "2. Is the policy **reasonably related** to attaining that legitimate end?",
            "**Landmark Case**: R.A. 3019 (**Anti-Graft and Corrupt Practices Act**). Compelling public officers to file annual SALN (assets, liabilities, income) does NOT violate privacy because it curtails corruption and maintains public service integrity."
          ]
        },
        {
          "heading": "4. Reasonable Expectation of Privacy & Anti-Wiretapping",
          "points": [
            "Example: Former Pres. Joseph 'Erap' Estrada inside a voting booth in 2010 had reasonable expectancy of privacy.",
            "**RA 4200 (Anti-Wiretapping Act)**: Expressly requires authorization of **ALL parties** to a private conversation. The Supreme Court cannot substitute 'consent of one party' because Congress's political wisdom governs.",
            "**Privacy Between Spouses**: Marriage does **NOT** give a spouse the right to ransack locked drawers, cabinets, or phones for infidelity evidence. Constitutional privacy protects each spouse individually. Marital communication is legally privileged.",
            "**Detainees & Prisoners**: Under RA 7438, incarcerated persons have a **diminished expectation of privacy** inherent to lawful imprisonment."
          ]
        },
        {
          "heading": "5. Data Privacy Act of 2012 (RA 10173)",
          "points": [
            "Regulates processing of personal information in both government and private sectors.",
            "Ensures individuals hold the right to control disclosure and use of personal data.",
            "**Section 11 Core Principles of Personal Information Processing**:",
            "• **(a) Specified & Legitimate Purpose**: Declared prior to or at time of collection.",
            "• **(b) Processed Fairly & Lawfully**.",
            "• **(c) Accurate, Relevant & Up-to-Date**: Inaccurate data must be rectified/destroyed.",
            "• **(d) Adequate & Not Excessive**: Data minimization.",
            "• **(e) Retained Only as Long as Necessary**: For intended purpose or legal claims.",
            "• **(f) Identifiable Form Limit**: Kept in identifiable format no longer than necessary.",
            "The **Personal Information Controller (PIC)** is held legally accountable."
          ]
        },
        {
          "heading": "6. Due Process Clause & Software Engineering",
          "points": [
            "**Article III Section 1**: *'No person shall be deprived of life, liberty, or property without due process of law, nor shall any person be denied the equal protection of the laws.'*",
            "**Origin**: Concept dates back to the Garden of Eden—God gave Adam a chance to explain before passing judgment.",
            "**Definition in Jurisprudence**: *'A law which hears before it condemns; which proceeds upon inquiry, and renders judgment only after trial.'*",
            "**Applied in Software Engineering**: Programmers implement due process by granting users the **right to be heard** before irreversible/destructive actions.",
            "**Example**: Microsoft Word warning dialog: *'Do you want to save the changes to complete.doc? [Yes] [No] [Cancel]'*. Prevent catastrophic accidental data loss by hearing the user's intent first!"
          ]
        }
      ]
    },
    {
      "id": "ms-cp1",
      "subject": "MS101",
      "week": "Week 2-4",
      "title": "Logic and Sets",
      "badge": "Checkpoint 1",
      "description": "Propositional logic, logical connectives, truth tables, tautologies, predicates, quantifiers, and set theory operations.",
      "digest": [
        {
          "heading": "1. What is Discrete Mathematics & Logic?",
          "points": [
            "**Discrete Mathematics**: Deals with mathematical objects that take on only distinct, separated values using algebra and arithmetic.",
            "**Logic**: The study of consequences and the art and science of reasoning.",
            "**Arguments**: Formed by Premises + Conclusion. A valid argument guarantees a true conclusion whenever all premises are true."
          ]
        },
        {
          "heading": "2. Propositional Logic (PL)",
          "points": [
            "**Proposition**: A declarative sentence that is either True (T) or False (F), but **not both**.",
            "**Examples of Propositions**: *'Manila is the capital of the Philippines'* (T); *'1 + 1 = 2'* (T).",
            "**Non-Propositions**: Questions (*'What time is it?'*), exclamations (*'Wow!'*), or open equations with unbound variables (*'x is an integer'*)."
          ],
          "trap": "Exam Trap: 'x + 2 = 5' is a PREDICATE, NOT a proposition, until x is assigned a specific value!"
        },
        {
          "heading": "3. The 5 Logical Connectives & Precedence",
          "points": [
            "1. **Negation / NOT (~, ¬)**: Inverts truth value (~T = F, ~F = T).",
            "2. **Conjunction / AND (∧)**: True **only** when both p and q are true.",
            "3. **Disjunction / OR (∨)**: True when at least one proposition is true.",
            "4. **Implication / Conditional (→)**: 'If p, then q'. False **only** when p is True and q is False (T → F is False; all other combinations are True!).",
            "5. **Biconditional / IFF (↔)**: 'p if and only if q'. True when both have the **same truth value** (T ↔ T is True, F ↔ F is True).",
            "**Operator Precedence Hierarchy**: NOT (Highest) > AND > OR > IF-THEN > IFF (Lowest)."
          ],
          "tldr": "Implication p → q is only FALSE when a true hypothesis leads to a false conclusion (T → F = F)."
        },
        {
          "heading": "4. Truth Tables & Sentence Classification",
          "points": [
            "**Number of Rows Formula**: R = 2^n, where n is the number of propositional variables (e.g. 3 variables = 2^3 = 8 rows).",
            "**Tautology (Valid)**: A compound statement that is True for **every** interpretation.",
            "**Contradiction (Absurdity / Unsatisfiable)**: A statement that is False for **every** interpretation.",
            "**Contingency (Satisfiable)**: A statement that is True for some interpretations and False for others."
          ]
        },
        {
          "heading": "5. Predicates and Quantifiers",
          "points": [
            "**Predicate**: A statement containing variables whose value is not specified (e.g. P(x): x > 6).",
            "**Universal Quantifier (∀x)**: 'For all x', 'for every x'. True only if every single item in the universe satisfies the predicate.",
            "**Existential Quantifier (∃x)**: 'For some x', 'there exists at least one x'. True if at least one item satisfies the predicate."
          ]
        },
        {
          "heading": "6. Set Theory Essentials",
          "points": [
            "**Set**: An unordered collection of distinct objects (elements). Notation: enclosed in curly braces {}.",
            "**Representation Methods**: Roster Method ({a, e, i, o, u}) vs Rule Method ({x | x is an English vowel}).",
            "**Empty / Null Set**: Denoted by ∅ or {}. (Note: {∅} is NOT empty; it has cardinality 1!).",
            "**Cardinality (|A|)**: The number of elements in a set. Example: |{1, {2, 3}, ∅}| = 3.",
            "**Power Set (P(A))**: The set of all subsets. Size formula: |P(A)| = 2^|A|. If A = {1, 2}, P(A) = {∅, {1}, {2}, {1, 2}}.",
            "**Operations**: Union (A ∪ B), Intersection (A ∩ B), Difference (A - B), Complement (A')."
          ]
        }
      ]
    },
    {
      "id": "ms-cp2",
      "subject": "MS101",
      "week": "Week 5",
      "title": "Applications of Number Theory",
      "badge": "Checkpoint 2",
      "description": "Natural numbers, divisibility rules, division algorithm, prime factorization, GCD, and LCM.",
      "digest": [
        {
          "heading": "1. What is Number Theory & Divisibility?",
          "points": [
            "**Number Theory**: The branch of mathematics that studies the natural numbers, especially their divisibility properties.",
            "**Divisibility**: Shorthand way to check if an integer is divisible by a fixed divisor without full division, by inspecting digits."
          ]
        },
        {
          "heading": "2. Essential Divisibility Rules",
          "points": [
            "• **2**: Last digit is even (0, 2, 4, 6, 8).",
            "• **3**: Sum of digits is divisible by 3.",
            "• **4**: Last two digits form a number divisible by 4.",
            "• **5**: Last digit is 0 or 5.",
            "• **6**: Divisible by **both 2 and 3**.",
            "• **8**: Last three digits form a number divisible by 8.",
            "• **9**: Sum of digits is divisible by 9.",
            "• **10**: Last digit is 0."
          ]
        },
        {
          "heading": "3. Divisibility Theorems",
          "points": [
            "1. If a | b and a | c, then **a | (b + c)**. (e.g. 3 | 6 and 3 | 9 => 3 | 15).",
            "2. If a | b, then **a | bc** for all integers c. (e.g. 5 | 10 => 5 | 50).",
            "3. If a | b and b | c, then **a | c** (Transitivity. e.g. 4 | 8 and 8 | 24 => 4 | 24)."
          ]
        },
        {
          "heading": "4. Primes vs Composites",
          "points": [
            "**Prime Number**: An integer greater than 1 whose only factors are 1 and itself (e.g. 2, 3, 5, 7, 11).",
            "**Composite Number**: An integer greater than 1 that has positive divisors other than 1 and itself.",
            "**Critical Convention**: The numbers **0 and 1 are NEITHER prime nor composite**!"
          ],
          "trap": "Exam Trap: 1 is NOT a prime number! Prime numbers start at 2."
        },
        {
          "heading": "5. The Division Algorithm (Euclid)",
          "points": [
            "For integer dividend **a** and positive integer divisor **d**, there exist **unique** quotient **q** and remainder **r** such that:",
            "**a = dq + r**, where **0 ≤ r < d**.",
            "Example: 101 divided by 4 => 101 = 4(25) + 1. (q = 25, r = 1)."
          ]
        },
        {
          "heading": "6. GCD and LCM",
          "points": [
            "**Greatest Common Divisor (GCD)**: The largest positive integer dividing both integers. Example: gcd(48, 72) = 24.",
            "**Least Common Multiple (LCM)**: The smallest positive integer divisible by both integers.",
            "**Fundamental Identity**: **gcd(a, b) × lcm(a, b) = a × b**."
          ]
        }
      ]
    },
    {
      "id": "ms-cp3",
      "subject": "MS101",
      "week": "Week 6",
      "title": "Mathematical Theory & Proofs",
      "badge": "Checkpoint 3",
      "description": "Axioms, theorems, lemmas, corollaries, direct proofs, indirect proofs (contrapositive), and mathematical induction.",
      "digest": [
        {
          "heading": "1. Key Mathematical Terminologies",
          "points": [
            "**Axiom**: A foundational assumption about mathematical structures accepted without proof.",
            "**Proof**: A logical sequence of statements forming an argument demonstrating that a statement is true.",
            "**Theorem**: A statement that has been proven to be true.",
            "**Lemma**: A simple 'helper' theorem used as an intermediate step to prove another theorem.",
            "**Corollary**: A proposition that follows directly from a proven theorem.",
            "**Conjecture**: A statement whose truth value is unknown; becomes a theorem once proven."
          ]
        },
        {
          "heading": "2. Methods of Proof",
          "points": [
            "**A. Direct Proof**: To prove p → q, assume p is True and demonstrate through algebraic definitions that q must be True. (e.g. if n is odd, n^2 is odd).",
            "**B. Indirect Proof (Contrapositive)**: Uses the equivalence p → q ≡ ~q → ~p. Assume the conclusion is False (~q) and show the hypothesis must be False (~p).",
            "**C. Proof by Contradiction**: Assume the statement is false and derive an impossible logical contradiction."
          ]
        },
        {
          "heading": "3. Principle of Mathematical Induction",
          "points": [
            "A tool for proving that a predicate P(n) is true for all natural numbers n ∈ ℕ.",
            "**Step 1: Basis Step**: Show that P(0) or P(1) is true.",
            "**Step 2: Inductive Step**: Show that if P(k) is true (inductive hypothesis), then P(k + 1) must also be true.",
            "**Step 3: Conclusion**: P(n) is true for all natural numbers.",
            "**Crucial Rule**: Mathematical induction **cannot be used to discover theorems**, only to prove them!"
          ],
          "trap": "Exam Trap: Mathematical induction is a method of proof, NOT discovery!"
        }
      ]
    },
    {
      "id": "ipt-py1",
      "subject": "IPT102",
      "week": "Week 1-2",
      "title": "Introduction to Basic Python Programming",
      "badge": "Checkpoint 1 (Python)",
      "description": "Origins, Guido van Rossum (BDFL), dynamic typing, automatic garbage collection, wide OS support, career opportunities, and IDE setups (IDLE & PythonWin).",
      "digest": [
        {
          "heading": "1. What is Python? & Core Definitions",
          "points": [
            "**Python** is a widely popular, general-purpose, interpreted, interactive, object-oriented, and high-level programming language.",
            "**Dynamically-Typed**: Variable types are bound dynamically at runtime without explicit type declarations.",
            "**Garbage-Collected**: Automatic memory allocation and reclamation prevent resource leaks.",
            "**Origins & License**: Created by Dutch programmer **Guido van Rossum** during 1985–1990; released under the **GNU General Public License (GPL)**, making it completely open-source and free of cost."
          ],
          "tldr": "Python is a high-level, dynamically-typed, interpreted language licensed under GNU GPL."
        },
        {
          "heading": "2. Guido van Rossum & The BDFL Role",
          "points": [
            "**Guido van Rossum** (born 31 January 1956) is a Dutch programmer best known as the creator of Python.",
            "Served as the **'Benevolent Dictator For Life' (BDFL)** until stepping down from the leadership position on **12 July 2018**.",
            "Remained a member of the **Python Steering Council through 2019**, and voluntarily withdrew from nominations for the 2020 election."
          ],
          "trap": "Exam Trap: Guido van Rossum stepped down as BDFL on July 12, 2018 (NOT 2020)! In 2020, he withdrew from the Steering Council."
        },
        {
          "heading": "3. Industry Demand & Career Paths",
          "points": [
            "**High Market Demand**: Major global tech enterprises look for Python programmers to engineer web applications, automation pipelines, Data Science, AI, and ML.",
            "**Companies Using Python**: Google, Intel, NASA, PayPal, Facebook (Meta), IBM, Amazon, Netflix, Pinterest, Uber, and countless others.",
            "**Careers with Python**: Game Developer, Web Designer/Developer, Python Developer, Full-Stack Developer, Machine Learning Engineer, Data Scientist, Data Analyst, Data Engineer, DevOps Engineer, Software Engineer."
          ]
        },
        {
          "heading": "4. Why Learn Python? (Key Advantages)",
          "points": [
            "**Open Source**: Available free of cost with complete source code transparency.",
            "**Simple & Easy to Learn**: Few keywords, minimal syntax clutter, and high code visibility.",
            "**Versatile**: Capable of producing everything from simple shell utilities to enterprise web backends and complex scientific models.",
            "**Powerful Libraries**: Extensive ecosystems for AI, ML, numerical processing, and cloud services.",
            "**Interpreted**: Processed at runtime by the interpreter without requiring pre-compilation into machine binaries (similar to Perl and PHP).",
            "**Interactive**: Developers can type directly into the interactive REPL prompt (`>>>`) for immediate evaluation.",
            "**Object-Oriented**: Fully encapsulates state and behavior cleanly within objects."
          ],
          "tldr": "Interpreted, interactive, object-oriented, and beginner-friendly with extensive AI/ML libraries."
        },
        {
          "heading": "5. Characteristics & Applications of Python",
          "points": [
            "Supports **functional**, **structured**, and **object-oriented (OOP)** programming paradigms.",
            "Can function as a scripting language or be compiled into **bytecode** for building massive, high-throughput applications.",
            "**Broad Standard Library**: Highly portable and cross-platform compatible across UNIX, Windows, and Macintosh.",
            "**Extendable**: Programmers can add low-level C and C++ modules directly to the interpreter for high-performance computing.",
            "**Commercial Databases**: Provides native interfaces to all major commercial DBMS (MySQL, PostgreSQL, Oracle, SQL Server).",
            "**GUI Programming**: Supports building desktop GUIs across Windows MFC, Macintosh, and the X Window System of Unix."
          ]
        },
        {
          "heading": "6. Platform Compatibility & Environment Setup",
          "points": [
            "**Verification**: Run `python` in a terminal window to check if installed and verify the version.",
            "**Official Portals**: Official source and binaries available at `https://www.python.org/` with documentation at `https://www.python.org/doc/`.",
            "**Unmatched Cross-Platform Portability**: Supported across modern and legacy platforms alike."
          ],
          "table": {
            "headers": [
              "Platform Category",
              "Supported Operating Systems & Environments"
            ],
            "rows": [
              [
                "Mainstream Desktop",
                "Unix (Linux, Solaris, FreeBSD, AIX, SunOS), Windows (9x/NT/2000/XP/10/11), Mac (Intel, Apple Silicon, PPC)"
              ],
              [
                "Legacy & Embedded",
                "OS/2, DOS, PalmOS, Nokia mobile phones (Symbian), Windows CE, Acorn/RISC OS, BeOS, Amiga"
              ],
              [
                "Real-Time & Telephony",
                "VMS/OpenVMS, QNX, VxWorks, Psion"
              ],
              [
                "Virtual Machines",
                "Java Virtual Machine (Jython) and .NET Virtual Machine (IronPython)"
              ]
            ]
          }
        },
        {
          "heading": "7. Integrated Development Environments (IDEs)",
          "points": [
            "**IDLE**: The very first Unix IDE developed for Python, now included across Unix, Mac, and Windows installations.",
            "**PythonWin**: The first dedicated Windows interface and graphical IDE for Python.",
            "**Online Interpreters**: Tools like TutorialsPoint CodingGround enable direct browser-based bytecode execution without local setup."
          ],
          "trap": "Exam Trap: IDLE was the very first Unix IDE for Python, while PythonWin was the first Windows GUI IDE!"
        }
      ]
    },
    {
      "id": "ipt-py2",
      "subject": "IPT102",
      "week": "Week 3-4",
      "title": "Python Data Types, Numbers & Strings",
      "badge": "Checkpoint 2 (Python)",
      "description": "Syntax, 4-space indentation rules, comments, variables, naming styles, multiple assignments, unpacking, global scope, 8 built-in types, number conversions, random numbers, string slicing, and methods.",
      "digest": [
        {
          "heading": "1. Python Syntax & Execution Modes",
          "points": [
            "**Command Line Interactive Execution**: Executed directly at the terminal prompt (`>>> print('Hello, World!')`).",
            "**Script File Execution**: Created in text editor with `.py` extension and executed by interpreter: `python myfile.py`."
          ]
        },
        {
          "heading": "2. Python Indentation (Block Structure)",
          "points": [
            "**Definition**: Leading whitespace (spaces or tabs) at the beginning of a code line.",
            "Unlike other languages where indentation is for cosmetic readability, **in Python indentation indicates a code block**.",
            "Skipping indentation where required triggers an immediate **`IndentationError`**.",
            "Standard convention is **4 spaces**, but must be **at least 1 space**.",
            "You **must use the exact same number of spaces** in the same block of code, otherwise Python will throw an error."
          ],
          "trap": "Exam Trap: Indentation is NOT optional in Python! It replaces curly braces {} as the structural block delimiter."
        },
        {
          "heading": "3. Comments in Python",
          "points": [
            "Starts with the `#` symbol. Python ignores everything following `#` on that line.",
            "**Purposes**: Explaining code logic, increasing readability, and preventing execution of code lines during testing.",
            "Can be placed as standalone lines or inline at the end of a statement: `print('Hello') # greeting`."
          ]
        },
        {
          "heading": "4. Python Variables & Dynamic Typing",
          "points": [
            "**Variables are Containers**: Used for storing data values.",
            "**No Declaration Keyword**: Python has no command for declaring variables (no `var`, `int`, or `dim`). A variable is created the moment you first assign a value to it (`x = 5`).",
            "**Dynamic Typing**: Variables do not need to be declared with any particular type and can even change type after being set (`x = 4` then `x = 'Sally'`).",
            "**Type Inspection**: Get data type using `type(x)` (e.g., `print(type(x))` outputs `<class 'int'>`).",
            "**Quotes**: String literals can be declared with either single (`'John'`) or double (`\"John\"`) quotes.",
            "**Case Sensitivity**: Variable names are case-sensitive (`a = 4` and `A = 'Sally'` are two different variables; `A` will not overwrite `a`)."
          ]
        },
        {
          "heading": "5. Variable Naming Rules & Multi-Word Styles",
          "points": [
            "**3 Strict Rules**:",
            "1. A variable name must start with a **letter** or the **underscore** character (`_`).",
            "2. A variable name **cannot start with a number** (e.g., `2myvar` is illegal!).",
            "3. Can only contain alphanumeric characters and underscores (`A-z`, `0-9`, and `_`).",
            "**Multi-Word Naming Conventions**:",
            "- **Camel Case**: Each word, except the first, starts with a capital letter (`myVariableName = 'John'`).",
            "- **Pascal Case**: Each word starts with a capital letter (`MyVariableName = 'John'`).",
            "- **Snake Case**: Each word is separated by an underscore (`my_variable_name = 'John'`)."
          ]
        },
        {
          "heading": "6. Multiple Values Assignment & Collection Unpacking",
          "points": [
            "**Many Values to Multiple Variables**: `x, y, z = 'Orange', 'Banana', 'Cherry'` (number of variables must strictly match number of values, else `ValueError`).",
            "**One Value to Multiple Variables**: `x = y = z = 'Orange'` (assigns identical value to all).",
            "**Unpack a Collection**: Extract values from a list or tuple directly into distinct variables:",
            "```python\nfruits = ['apple', 'banana', 'cherry']\nx, y, z = fruits\n```"
          ]
        },
        {
          "heading": "7. Outputting Variables: Commas vs Plus Operator",
          "points": [
            "**Comma Separation**: `print(x, y)` separates outputs with spaces automatically and safely supports **different data types** (`int` and `str` together).",
            "**Plus Operator (`+`)**: Works as a concatenation operator for strings and mathematical addition for numbers.",
            "**Fatal Exam Trap**: Combining a string and a number with `+` raises a fatal **`TypeError`** (`print(5 + 'John')` crashes!). Use commas or explicit `str()` casting."
          ],
          "trap": "Exam Trap: print(5 + 'John') causes a TypeError! Python will never implicitly cast int to str during + concatenation."
        },
        {
          "heading": "8. Variable Scope & The `global` Keyword",
          "points": [
            "**Global Variables**: Variables created outside of a function. Can be read by everyone, both inside and outside functions.",
            "**Local Variable Shadowing**: Creating a variable with the same name inside a function creates a local copy. The global variable remains unchanged with its original value.",
            "**The `global` Keyword**:",
            "- To create a global variable inside a function, prefix it with `global` (`global x`).",
            "- To **change the value of an existing global variable** inside a function, you must refer to it using `global x` before reassigning."
          ]
        },
        {
          "heading": "9. Python's 8 Built-in Data Types",
          "table": {
            "headers": [
              "Category",
              "Type",
              "Example Constructor / Literal"
            ],
            "rows": [
              [
                "Text Type",
                "`str`",
                "`x = 'Hello World'` or `str(20)`"
              ],
              [
                "Numeric Types",
                "`int`, `float`, `complex`",
                "`20`, `20.5`, `1j` or `3+5j`"
              ],
              [
                "Sequence Types",
                "`list`, `tuple`, `range`",
                "`['a','b']`, `('a','b')`, `range(6)`"
              ],
              [
                "Mapping Type",
                "`dict`",
                "`{'name': 'John', 'age': 36}`"
              ],
              [
                "Set Types",
                "`set`, `frozenset`",
                "`{'apple', 'banana'}`, `frozenset({'apple'})`"
              ],
              [
                "Boolean Type",
                "`bool`",
                "`True`, `False` or `bool(5)`"
              ],
              [
                "Binary Types",
                "`bytes`, `bytearray`, `memoryview`",
                "`b'Hello'`, `bytearray(5)`, `memoryview(bytes(5))`"
              ],
              [
                "None Type",
                "`NoneType`",
                "`x = None`"
              ]
            ]
          }
        },
        {
          "heading": "10. Numbers, Casting & Random Values",
          "points": [
            "**`int`**: Whole number, positive or negative, without decimals, of **unlimited length**.",
            "**`float`**: Number containing one or more decimals, or scientific notation with `e` (`35e3` = 35000.0).",
            "**`complex`**: Written with a `j` as the imaginary part (`x = 3+5j`).",
            "**Type Conversion**: Convert with `int()`, `float()`, and `complex()`. **Exam Trap: You CANNOT convert complex numbers into another number type!**",
            "**Random Numbers**: Python has no standalone `random()` function; must `import random` and use `random.randrange(1, 10)` (returns random integer between 1 and 9)."
          ],
          "trap": "Exam Trap: int(3+5j) throws a TypeError! Complex numbers cannot be converted to int or float."
        },
        {
          "heading": "11. Python Strings in Depth & Slicing",
          "points": [
            "**Multiline Strings**: Enclosed with three quotes (`\"\"\"...\"\"\"` or `'''...'''`); line breaks are inserted at the exact same positions as in source code.",
            "**Strings are Arrays**: Python has **no character data type**; a single character is simply a string with a length of 1. Access characters using 0-indexed square brackets: `a[1]`.",
            "**Looping**: Loop through characters with `for x in 'banana': print(x)`.",
            "**Length**: `len(a)` returns total string length.",
            "**Membership (`in` / `not in`)**: Check if substring is present (`if 'free' in txt:`, `if 'expensive' not in txt:`).",
            "**Slicing (`[start:end]`)**:",
            "- `b[2:5]`: Characters from index 2 to 5 (not included / up to 4).",
            "- `b[:5]`: Slice from start up to index 4.",
            "- `b[2:]`: Slice from index 2 all the way to the end."
          ]
        },
        {
          "heading": "12. String Modification Methods & Immutability",
          "points": [
            "**IMMUTABILITY RULE**: **All string methods return NEW values. They NEVER change the original string.**",
            "**`upper()`**: Returns string in uppercase.",
            "**`lower()`**: Returns string in lowercase.",
            "**`strip()`**: Removes whitespace from beginning and end.",
            "**`replace(old, new)`**: Replaces occurrences of a substring (`a.replace('H', 'J')`).",
            "**`split(separator)`**: Splits string into substrings list (`a.split(',')`)."
          ],
          "tldr": "Strings are immutable. Methods like upper(), lower(), and strip() return new string copies."
        },
        {
          "heading": "13. String Formatting & Escape Characters",
          "points": [
            "**`format()` Method**: Combines strings and numbers safely by placing arguments into `{}` placeholders.",
            "Takes unlimited arguments: `myorder.format(quantity, itemno, price)`.",
            "Positional Indexing: Can use index numbers `{0}`, `{1}`, `{2}` to ensure arguments land in precise placeholders.",
            "**Escape Characters (`\\`)**: Inserts illegal characters into strings (e.g., `\\\"` for quotes).",
            "Common escapes: `\\'` (single quote), `\\\\` (backslash), `\\n` (newline), `\\r` (carriage return), `\\t` (tab), `\\b` (backspace), `\\f` (form feed), `\\ooo` (octal), `\\xhh` (hex)."
          ]
        },
        {
          "heading": "14. Comprehensive String Methods Reference",
          "table": {
            "headers": [
              "Method",
              "Description & Return Value"
            ],
            "rows": [
              [
                "`capitalize()`",
                "Converts the first character to upper case"
              ],
              [
                "`casefold()`",
                "Converts string into aggressive lowercase for caseless matching"
              ],
              [
                "`center(w)`",
                "Returns a centered string padded to width w"
              ],
              [
                "`count(sub)`",
                "Returns the number of times a specified value occurs in a string"
              ],
              [
                "`endswith(val)`",
                "Returns True if the string ends with the specified value"
              ],
              [
                "`find(sub)`",
                "Searches string for value and returns position (-1 if not found)"
              ],
              [
                "`index(sub)`",
                "Searches string for value and returns position (raises ValueError if not found)"
              ],
              [
                "`isalnum()`",
                "Returns True if all characters in the string are alphanumeric"
              ],
              [
                "`isalpha()`",
                "Returns True if all characters in the string are in the alphabet"
              ],
              [
                "`isdigit()`",
                "Returns True if all characters in the string are digits"
              ],
              [
                "`islower()` / `isupper()`",
                "Returns True if all characters are lower case / upper case"
              ],
              [
                "`isspace()`",
                "Returns True if all characters in the string are whitespaces"
              ],
              [
                "`join(iterable)`",
                "Joins the elements of an iterable to the end of the string"
              ],
              [
                "`splitlines()`",
                "Splits the string at line breaks and returns a list"
              ],
              [
                "`startswith(val)`",
                "Returns True if the string starts with the specified value"
              ],
              [
                "`strip()`",
                "Returns a trimmed version of the string"
              ],
              [
                "`swapcase()`",
                "Swaps cases: lower case becomes upper case and vice versa"
              ],
              [
                "`title()`",
                "Converts the first character of each word to upper case"
              ],
              [
                "`zfill(len)`",
                "Fills string with specified number of leading 0 values"
              ]
            ]
          }
        }
      ]
    },
    {
      "id": "ipt-cp1",
      "subject": "IPT102",
      "week": "Week 2 (Web)",
      "title": "ASP.NET Core 9.0 & Visual Studio Setup",
      "badge": "Checkpoint 3 (Web)",
      "description": "Dynamic websites, ASP.NET Core vs .NET Framework, VS Installer workloads, 3 templates, core dev tools, MyCoreApp Razor Pages lab tour, wwwroot, CultureInfo formatting, and Page Event Lifecycle.",
      "digest": [
        {
          "heading": "1. Dynamic Websites vs Static Pages",
          "points": [
            "**Dynamic Website**: Displays unique, customized content tailored to visitor demographics, time of day, location, and language settings.",
            "**Static Pages**: Require manual file editing and redeployment before content changes.",
            "**Under the Hood**: Synergy between **client-side scripting** (browser execution, UI responsiveness) and **server-side scripting** (database access, authentication, session state).",
            "**Synergy Value**: Adapts browsing experience to each user while simultaneously reducing server processing load."
          ],
          "tldr": "Dynamic sites adapt on the fly using both client-side and server-side code."
        },
        {
          "heading": "2. Elements & Real-World Benefits of Dynamic Web",
          "points": [
            "**5 Key Elements**: Responsive layout based on screen viewport, localized language detection, personalized content recommendations, social media/offsite integrations, and dynamic visuals/animations.",
            "**5 Major Benefits**: More personalized browsing, easier site maintenance, superior UX, elevated professional aesthetic, and alignment with modern web standards."
          ]
        },
        {
          "heading": "3. ASP.NET Page Syntax & Directives",
          "points": [
            "Any standard HTML page can be turned into an ASP.NET Web Form simply by renaming the extension to `.aspx`."
          ],
          "table": {
            "headers": [
              "Syntax Element",
              "Example Syntax",
              "Purpose & Execution Scope"
            ],
            "rows": [
              [
                "Directives",
                "`<%@ Page Language=\"C#\" %>`",
                "Configures compiler and page environment"
              ],
              [
                "Server Controls",
                "`<asp:Button ID=\"btn1\" runat=\"server\" />`",
                "Server-managed interactive UI controls"
              ],
              [
                "Code Blocks",
                "`<script runat=\"server\">...</script>`",
                "Server-side event handling and business logic"
              ],
              [
                "Data Binding",
                "`<%# Eval(\"Title\") %>`",
                "Binds data sources to server controls"
              ],
              [
                "Server Comments",
                "`<%-- Server-side comment --%>`",
                "Stripped before transmitting HTML to client browser"
              ],
              [
                "Render Code",
                "`<%= expression %>` and `<% code %>`",
                "Inline server execution (discouraged in favor of code-behind)"
              ]
            ]
          },
          "trap": "Exam Trap: Direct inline render blocks (<%= %>) are discouraged. Always prefer event handlers with server controls!"
        },
        {
          "heading": "4. Server Controls & the 5 Types of Web Controls",
          "points": [
            "**Definition**: Small building blocks of graphical user interfaces (text boxes, buttons, check boxes, list boxes, labels).",
            "Adding `runat=\"server\"` transforms any HTML tag into a server control accessible in backend C# code (e.g., `<input type=\"text\" id=\"t2\" runat=\"server\" />` -> accessed in C# as `t2.Value`)."
          ],
          "table": {
            "headers": [
              "Web Control Type",
              "Syntax / Implementation Pattern",
              "Key Behavior & Execution Scope"
            ],
            "rows": [
              [
                "HTML Controls",
                "`<input type=\"text\" id=\"txt1\">`",
                "Standard HTML tags; client-side only; invisible to web server"
              ],
              [
                "HTML Server Controls",
                "`<input type=\"text\" id=\"txt2\" runat=\"server\">`",
                "Standard HTML decorated with `runat=\"server\"`; accessible in C# backend as `txt2.Value`"
              ],
              [
                "ASP.NET Server Controls",
                "`<asp:TextBox ID=\"txt3\" runat=\"server\" />`",
                "ASP-prefixed controls with rich properties and automatic ViewState"
              ],
              [
                "ASP.NET AJAX Controls",
                "`<asp:UpdatePanel runat=\"server\">`",
                "Supports partial-page asynchronous updates without full reload"
              ],
              [
                "User & Custom Controls",
                "`<uc:MyWidget runat=\"server\" />`",
                "Modular reusable UI components composed via `.ascx` or compiled code"
              ]
            ]
          }
        },
        {
          "heading": "5. Properties of Server Controls",
          "points": [
            "Tag attributes map directly to server control properties in C# backend.",
            "Tags and attributes in ASP.NET are **case-insensitive**.",
            "Control properties can be set programmatically in C# at runtime: e.g., `c1.Text = \"Foo\"; c2.Rows = 5;`."
          ]
        },
        {
          "heading": "6. ASP.NET Page Event Lifecycle",
          "points": [
            "The strict sequence of page execution in ASP.NET Web Forms:"
          ],
          "table": {
            "headers": [
              "Order #",
              "Stage Name",
              "Event Handler",
              "Description & Processing Role"
            ],
            "rows": [
              [
                "1",
                "Initialize",
                "`Page_Init`",
                "Initializes control hierarchy and applies themes"
              ],
              [
                "2",
                "Restore Control State",
                "LoadViewState",
                "Restores persisted state of controls across postbacks"
              ],
              [
                "3",
                "Load Page",
                "`Page_Load`",
                "Performs page-level setup; evaluates `IsPostBack` flag"
              ],
              [
                "4",
                "Control Events",
                "Change & Action",
                "Fires user-triggered events like `TextChanged` and `Click`"
              ],
              [
                "5",
                "Save Control State",
                "SaveViewState",
                "Saves control states to hidden `__VIEWSTATE` field"
              ],
              [
                "6",
                "Render",
                "Page_Render",
                "Converts server controls into standard client HTML"
              ],
              [
                "7",
                "Unload Page",
                "`Page_Unload`",
                "Cleanup tasks, closes open database streams and resources"
              ]
            ]
          },
          "tldr": "Lifecycle Order: Init -> Restore State -> Load -> Control Events (Change/Action) -> Save State -> Render -> Unload."
        },
        {
          "heading": "7. HTML Controls vs HTML Server Controls",
          "points": [
            "Comparing pure client browser controls with server-bound controls:"
          ],
          "table": {
            "headers": [
              "Comparison Aspect",
              "HTML Controls",
              "HTML Server Controls"
            ],
            "rows": [
              [
                "Tag Syntax",
                "`<input type=\"text\" id=\"t1\">`",
                "`<input type=\"text\" id=\"t1\" runat=\"server\">`"
              ],
              [
                "Server Visibility",
                "Client browser only; completely invisible to server",
                "Directly addressable as C# object via ID"
              ],
              [
                "State Management",
                "No server-side state tracking",
                "Automatic ViewState management across postbacks"
              ],
              [
                "Event Model",
                "Client JavaScript events only (`onclick`, `onchange`)",
                "Server-side event binding (`onserverclick`)"
              ],
              [
                "Performance",
                "Fastest raw client performance",
                "Rich server abstractions with slight overhead"
              ]
            ]
          }
        },
        {
          "heading": "8. Categories of Server Controls",
          "points": [
            "ASP.NET organizes server controls into 4 main operational categories:"
          ],
          "table": {
            "headers": [
              "Category",
              "Representative Controls",
              "Functional Purpose"
            ],
            "rows": [
              [
                "Basic Controls",
                "`<asp:Button>`, `<asp:TextBox>`, `<asp:CheckBox>`, `<asp:HyperLink>`",
                "Fundamental UI entry, buttons, check toggles, and labels"
              ],
              [
                "List Controls",
                "`<asp:DropDownList>`, `<asp:ListBox>`, `<asp:RadioButtonList>`",
                "Data item collections, repetition, and single/multiple selections"
              ],
              [
                "Rich Controls",
                "`<asp:Calendar>`, `<asp:FileUpload>`",
                "Advanced interactive widgets with rich presentation logic"
              ],
              [
                "Validation Controls",
                "`<asp:RequiredFieldValidator>`, `<asp:RangeValidator>`",
                "Declarative client and server validation preventing form spoofing"
              ]
            ]
          }
        },
        {
          "heading": "8. Modern ASP.NET Core vs Legacy ASP.NET (.NET Framework)",
          "points": [
            "When building web applications in Visual Studio, developers choose between two framework architectures:",
            "**ASP.NET Core**: The modern, cross-platform, open-source framework. **Highly recommended for all new applications**.",
            "**ASP.NET (.NET Framework)**: The legacy, Windows-only framework. Choose this option only if you are maintaining older applications like Web Forms or MVC 5."
          ],
          "table": {
            "headers": [
              "Comparison Factor",
              "ASP.NET Core (Modern)",
              "ASP.NET (.NET Framework - Legacy)"
            ],
            "rows": [
              [
                "Platform Support",
                "Cross-platform (Windows, Linux, macOS)",
                "Windows-only (tied to IIS)"
              ],
              [
                "Licensing & Source",
                "100% Open Source (.NET Foundation on GitHub)",
                "Proprietary Windows components"
              ],
              [
                "Target Runtime",
                ".NET 8.0 / .NET 9.0 unified runtime",
                ".NET Framework 4.x legacy runtime"
              ],
              [
                "Performance",
                "Top-tier benchmark throughput & low memory",
                "Heavier memory overhead"
              ],
              [
                "Application Use",
                "Modern microservices, APIs, cloud apps",
                "Legacy Web Forms & MVC 5 maintenance"
              ]
            ]
          }
        },
        {
          "heading": "9. Visual Studio Workload Setup & 3 Web Templates",
          "points": [
            "**Prerequisites**: Open Visual Studio Installer -> Click **Modify** -> Check **ASP.NET and web development** -> Click Modify.",
            "**3 Project Templates** in the Create New Project dialog (Filtered by C#, Windows, Web):",
            "1. **ASP.NET Core Web App (Razor Pages)**: Best for simple, page-focused sites.",
            "2. **ASP.NET Core Web App (Model-View-Controller)**: Best for larger architectures requiring strict Separation of Concerns.",
            "3. **ASP.NET Core Web API**: Best for headless backend-only microservices and RESTful API endpoints."
          ]
        },
        {
          "heading": "10. Core Development Tools in Visual Studio",
          "points": [
            "**Solution Explorer**: The tool window pane used to manage your pages, backend files, configurations, dependencies, and static assets.",
            "**Razor Editor**: Provides rich syntax highlighting, HTML/C# tag helpers, and IntelliSense code-completion when mixing HTML markup with C# code.",
            "**Hot Reload**: Allows you to apply modifications to your code and UI while the app is actively running without needing to manually pause or rebuild the project.",
            "**Built-in Debugging**: Set breakpoints directly in your backend C# files to pause execution and inspect runtime variables."
          ]
        },
        {
          "heading": "11. Hands-on Lab: `MyCoreApp` Project Tour & Architecture",
          "points": [
            "**Creation Settings**: Project Name `MyCoreApp`, Framework `.NET 9.0`, Authentication Type `None`, Enable container support unchecked.",
            "**Razor Page Design Pattern**: Streamlined to include the **model and controller code within the Razor Page itself**, unlike MVC which splits them into separate Controller and View folders.",
            "**Key Directories & Files**:",
            "- `wwwroot`: The **root for your website static content**. Place CSS, images, JavaScript libraries, and `favicon.ico` directly here.",
            "- `Pages`: Contains `.cshtml` markup files paired with `.cshtml.cs` code-behind files (e.g., `Index.cshtml.cs`, `Privacy.cshtml.cs`).",
            "- `appsettings.json` & `appsettings.Development.json`: Application configuration files managing settings at runtime."
          ]
        },
        {
          "heading": "12. Code Modifications: Quick Actions, CultureInfo, and Shortcuts",
          "points": [
            "**Quick Actions Light Bulb**: Hover over a greyed-out `using` directive -> click light bulb -> select **Remove unnecessary usings** -> Preview -> Apply.",
            "**Date Formatting with CultureInfo**:",
            "```csharp\nstring dateTime = DateTime.Now.ToString(\"d\", new CultureInfo(\"en-US\"));\nViewData[\"TimeStamp\"] = dateTime;\n```",
            "- Specifier `\"d\"`: Formats date to the short date format (e.g., `11/19/2025`).",
            "- `CultureInfo`: Determines the culture/region for language and separator formatting (`/` vs `-`). Auto-adds `using System.Globalization;`.",
            "**Essential Execution Shortcuts**:",
            "- **F5** or green https button: Build and run in debug mode.",
            "- **Ctrl + F5**: Run without debugging (faster, ideal for Hot Reload).",
            "- **Shift + F5**: Stop debugging and terminate the web server process."
          ]
        }
      ]
    },
    {
      "id": "ipt-cp2",
      "subject": "IPT102",
      "week": "Week 3 (Web)",
      "title": "Understanding MVC Architecture and Routing",
      "badge": "Checkpoint 4 (Web)",
      "description": "ASP.NET MVC 5 architecture, Model-View-Controller roles, HTTP request flow, default folder structure (App_Data, Controllers, Views, etc.), configuration files, and Routing URL patterns.",
      "digest": [
        {
          "heading": "1. What is ASP.NET MVC 5?",
          "points": [
            "**ASP.NET**: Free web framework for building websites and applications on the .NET Framework using HTML, CSS, and JavaScript.",
            "**ASP.NET MVC 5**: Web framework based on the **Model-View-Controller (MVC)** architectural pattern.",
            "**Core Value**: Enables a clean **Separation of Concerns (SoC)**, rapid development, and is **TDD (Test-Driven Development) friendly**."
          ]
        },
        {
          "heading": "2. Model, View, and Controller Responsibilities",
          "points": [
            "The core architectural trio dividing application responsibilities:"
          ],
          "table": {
            "headers": [
              "Component",
              "Motto",
              "Primary Responsibilities",
              "File Locations"
            ],
            "rows": [
              [
                "Model",
                "Model represents the data",
                "Defines business entities, data schemas, validation rules, and database queries",
                "C# classes (`.cs` in `Models/`)"
              ],
              [
                "View",
                "View is the User Interface",
                "Renders dynamic HTML using Razor syntax; captures user input elements",
                "Razor views (`.cshtml` in `Views/`)"
              ],
              [
                "Controller",
                "Controller is the request handler",
                "Handles incoming HTTP requests, coordinates with Models, returns View responses",
                "C# classes (`.cs` in `Controllers/`)"
              ]
            ]
          },
          "tldr": "Model = Data. View = User Interface. Controller = Request Handler."
        },
        {
          "heading": "3. MVC Request Flow",
          "points": [
            "1. User enters a URL in browser (e.g. `http://mydomain.com/home/about`).",
            "2. The request hits the web server (IIS) and is inspected by the **Routing Engine**.",
            "3. The request is dispatched to the matching **Controller** (`HomeController`).",
            "4. The Controller executes the action method, coordinates with the **Model**, and selects the **View**.",
            "5. The rendered HTML response is returned across the network to the browser."
          ]
        },
        {
          "heading": "4. MVC Solution Folder Structure Explained",
          "points": [
            "Standard folder organization created by the ASP.NET MVC project template:"
          ],
          "table": {
            "headers": [
              "Folder Name",
              "Contents & Purpose",
              "Key Rules & Security"
            ],
            "rows": [
              [
                "App_Data",
                "Local database files (`.mdf`), XML files, and local schemas",
                "**IIS will NEVER serve App_Data files directly** to web clients (Security rule)"
              ],
              [
                "App_Start",
                "Application startup configuration logic (`RouteConfig.cs`, `BundleConfig.cs`)",
                "Executes once during `Application_Start()` in `Global.asax`"
              ],
              [
                "Controllers",
                "C# class files that handle incoming requests",
                "**Mandate: Controller class names MUST end with 'Controller'** (e.g., `StudentController.cs`)"
              ],
              [
                "Fonts",
                "Font assets (e.g., Glyphicons, TTF, WOFF)",
                "Serves typography and icon fonts to the client"
              ],
              [
                "Models",
                "C# classes representing business entities and view models",
                "Contains public properties with getters and setters"
              ],
              [
                "Scripts",
                "JavaScript libraries and client scripts (jQuery, Bootstrap, Modernizr)",
                "Static script files loaded by browser for client interactivity"
              ],
              [
                "Views",
                "Razor view templates (`.cshtml`)",
                "Organized into subfolders matched to each Controller name + `Shared/`"
              ]
            ]
          },
          "trap": "Exam Trap: Controller class names MUST end with 'Controller'. Also, IIS will NEVER serve files from App_Data directly!"
        },
        {
          "heading": "5. Essential Configuration Files",
          "points": [
            "Key application configuration files and their specific responsibilities:"
          ],
          "table": {
            "headers": [
              "Configuration File",
              "File Format",
              "Key Responsibilities"
            ],
            "rows": [
              [
                "`Global.asax`",
                "C# / ASP.NET",
                "Handles application-level lifecycle events (`Application_Start`, `Application_Error`, `Session_Start`)"
              ],
              [
                "`Packages.config`",
                "XML",
                "Managed by NuGet package manager to track installed library dependencies and versions"
              ],
              [
                "`Web.config`",
                "XML",
                "Stores core application-level settings (connection strings, authentication, compilation)"
              ]
            ]
          }
        },
        {
          "heading": "6. Routing in MVC & Route Configuration",
          "points": [
            "**Routing**: Maps incoming URLs to physical Controller classes and Action Methods, rather than physical files on disk.",
            "All configured routes are stored in the **RouteTable** and evaluated by the **Routing Engine**.",
            "Every MVC application registers default routes in `RouteConfig.cs` inside the `App_Start` folder.",
            "Registered via `RouteConfig.RegisterRoutes(RouteTable.Routes)` inside `Application_Start()` in `Global.asax.cs`."
          ]
        },
        {
          "heading": "7. URL Pattern Matching: {controller}/{action}/{id}",
          "points": [
            "Default route pattern: `{controller}/{action}/{id}` with defaults `{ controller = \"Home\", action = \"Index\", id = UrlParameter.Optional }`:"
          ],
          "table": {
            "headers": [
              "Sample URL Request",
              "Controller Resolved",
              "Action Method Invoked",
              "id Parameter Value"
            ],
            "rows": [
              [
                "`/home`",
                "`HomeController`",
                "`Index()`",
                "`null` (Default)"
              ],
              [
                "`/home/index/123`",
                "`HomeController`",
                "`Index()`",
                "`\"123\"`"
              ],
              [
                "`/home/about`",
                "`HomeController`",
                "`About()`",
                "`null`"
              ],
              [
                "`/student`",
                "`StudentController`",
                "`Index()`",
                "`null` (Default)"
              ],
              [
                "`/student/edit/100`",
                "`StudentController`",
                "`Edit()`",
                "`\"100\"`"
              ]
            ]
          }
        }
      ]
    },
    {
      "id": "ipt-cp3",
      "subject": "IPT102",
      "week": "Week 4 (Web)",
      "title": "Developing Controllers & Action Results",
      "badge": "Checkpoint 5 (Web)",
      "description": "Controller class inheritance, Action Method restrictions, default Index() action, ActionResult classes, and Action Selectors (ActionName, NonAction, ActionVerbs).",
      "digest": [
        {
          "heading": "1. Controllers in ASP.NET MVC",
          "points": [
            "A Controller handles any incoming URL request matching its route.",
            "Inherits from the base class: `System.Web.Mvc.Controller`.",
            "Contains public methods called **Action Methods**.",
            "Convention mandate: The class name must end with `Controller` (e.g. `StudentController`).",
            "Must be located in the `Controllers` folder of the solution."
          ]
        },
        {
          "heading": "2. Adding Controllers & Scaffolding",
          "points": [
            "In Visual Studio: Right-click `Controllers` folder > **Add** > **Controller**.",
            "Select **MVC 5 Controller - Empty** template in the Scaffold dialog.",
            "**Scaffolding**: An automatic code generation framework for ASP.NET web apps that reduces boilerplate time. Can be customized using T4 templates."
          ]
        },
        {
          "heading": "3. The 3 Strict Rules for Action Methods",
          "points": [
            "All public methods in a controller class are considered Action Methods by default:"
          ],
          "table": {
            "headers": [
              "Restriction Rule",
              "Requirement Mandate",
              "Technical Rationale"
            ],
            "rows": [
              [
                "Rule 1: Access Modifier",
                "**Must be `public`**",
                "Private and protected methods cannot be accessed or routed via URL requests"
              ],
              [
                "Rule 2: Overloading",
                "**Cannot be overloaded**",
                "Routing engine cannot differentiate methods with identical names without explicit selectors"
              ],
              [
                "Rule 3: Method Type",
                "**Cannot be `static`**",
                "Must be instance methods to access controller context, `Request`, `Response`, and `ViewData`"
              ]
            ]
          },
          "trap": "Exam Trap: An action method CANNOT be static, CANNOT be private/protected, and CANNOT be overloaded!"
        },
        {
          "heading": "4. Action Results & Controller Helper Methods",
          "points": [
            "**Default Action**: The `Index()` method is the default action method configured in `RouteConfig`.",
            "**ActionResult**: The base abstract class for all action return types."
          ],
          "table": {
            "headers": [
              "Action Result Class",
              "Controller Helper",
              "Rendered Output / Behavior",
              "Typical Use Case"
            ],
            "rows": [
              [
                "`ViewResult`",
                "`View()`",
                "Renders standard HTML view page",
                "Standard page view rendering"
              ],
              [
                "`PartialViewResult`",
                "`PartialView()`",
                "Renders HTML fragment without layout",
                "AJAX page refreshes and modal dialogs"
              ],
              [
                "`ContentResult`",
                "`Content(\"text\")`",
                "Returns raw string literal text",
                "Plain text or custom XML strings"
              ],
              [
                "`EmptyResult`",
                "`null`",
                "Returns empty 200 HTTP response",
                "Void operations requiring no response body"
              ],
              [
                "`FileResult`",
                "`File(...)`",
                "Binary file content, path, or stream",
                "File downloads, PDF reports, image streams"
              ],
              [
                "`JavaScriptResult`",
                "`JavaScript(...)`",
                "Returns executable JavaScript code",
                "Client-side script execution"
              ],
              [
                "`JsonResult`",
                "`Json(...)`",
                "Serialized JSON data payload",
                "AJAX endpoints and single-page apps"
              ],
              [
                "`RedirectResult`",
                "`Redirect(url)`",
                "HTTP 302 redirect to external/internal URL",
                "Redirecting to external websites or URLs"
              ],
              [
                "`RedirectToRouteResult`",
                "`RedirectToAction(...)`",
                "Redirects to another Controller action",
                "Post-Redirect-Get pattern after form save"
              ],
              [
                "`HttpUnauthorizedResult`",
                "`HttpUnauthorized()`",
                "Returns HTTP 401 / 403 status code",
                "Restricting access for unauthorized users"
              ]
            ]
          }
        },
        {
          "heading": "5. Action Selectors: [ActionName] and [NonAction]",
          "points": [
            "**Action Selectors**: Attributes applied above action methods that influence routing engine dispatch decisions:"
          ],
          "table": {
            "headers": [
              "Action Selector",
              "Syntax Example",
              "Routing Behavior & Effect"
            ],
            "rows": [
              [
                "`[ActionName]`",
                "`[ActionName(\"find\")] public ActionResult GetById(int id)`",
                "Aliases public URL name to `/student/find/1` instead of method name `GetById`"
              ],
              [
                "`[NonAction]`",
                "`[NonAction] public void SendInternalEmail()`",
                "Instructs routing engine that the public method is NOT an invokable web action"
              ]
            ]
          }
        },
        {
          "heading": "6. Action Verbs: [HttpGet], [HttpPost], [HttpPut]",
          "points": [
            "Restricts an action method to handling specific HTTP request methods:"
          ],
          "table": {
            "headers": [
              "Action Verb Attribute",
              "HTTP Verb Handled",
              "Default Behavior & Role"
            ],
            "rows": [
              [
                "`[HttpGet]`",
                "GET",
                "**Default behavior**: Used if no verb is specified. Retrieves data (params in URL)"
              ],
              [
                "`[HttpPost]`",
                "POST",
                "Handles form submissions, database inserts, and secure state updates"
              ],
              [
                "`[HttpPut]`",
                "PUT",
                "Handles full resource updates in RESTful services"
              ],
              [
                "`[HttpDelete]`",
                "DELETE",
                "Handles resource removal operations"
              ],
              [
                "`[AcceptVerbs]`",
                "Multiple Verbs",
                "`[AcceptVerbs(HttpVerbs.Post | HttpVerbs.Get)]`: Allows multiple verbs on one method"
              ]
            ]
          }
        }
      ]
    },
    {
      "id": "ipt-cp4",
      "subject": "IPT102",
      "week": "Week 5 (Web)",
      "title": "Developing Views & Razor Syntax",
      "badge": "Checkpoint 6 (Web)",
      "description": "Razor view engine, .cshtml rules, server-side processing flow, inline expressions, multi-statement code blocks, variable declaration, loops, and reading user input with Request and IsPost.",
      "digest": [
        {
          "heading": "1. Razor View Engine Overview",
          "points": [
            "Razor is a view engine introduced in ASP.NET MVC 3 allowing a seamless mix of HTML and server-side code.",
            "**File Extensions**: C# syntax uses `.cshtml`, while Visual Basic uses `.vbhtml`."
          ]
        },
        {
          "heading": "2. Main Razor Syntax Rules for C#",
          "points": [
            "Fundamental syntax rules governing C# Razor views:"
          ],
          "table": {
            "headers": [
              "Rule Aspect",
              "C# Razor Requirement",
              "Example Syntax"
            ],
            "rows": [
              [
                "Code Blocks",
                "Enclosed in `@{ ... }`",
                "`@{ var total = 100; }`"
              ],
              [
                "Inline Expressions",
                "Begins with single `@` symbol",
                "`<h2>Date: @DateTime.Now</h2>`"
              ],
              [
                "Statement Terminator",
                "Each statement must end with semicolon (`;`)",
                "`var title = \"Reviewer\";`"
              ],
              [
                "Variable Declaration",
                "Use `var` keyword or explicit C# type",
                "`var count = 5; string name = \"Luigi\";`"
              ],
              [
                "String Literals",
                "Enclosed in double quotation marks (`\"...\"`)",
                "`var msg = \"Hello World\";`"
              ],
              [
                "Case Sensitivity",
                "**Strictly case-sensitive**",
                "`@name != @Name`; `Request != request`"
              ],
              [
                "File Extension",
                "Must use `.cshtml` extension",
                "`Index.cshtml`"
              ]
            ]
          },
          "tldr": "Rules: Enclosed in @{ }, inline uses @, statements end in ;, C# is case-sensitive, extension is .cshtml."
        },
        {
          "heading": "3. How Razor Works on the Server",
          "points": [
            "Razor pages contain two kinds of content: HTML markup and server-side Razor code.",
            "When the server processes the page, it runs the **Razor code FIRST** before generating HTML.",
            "The server code accesses databases, runs loops, and outputs static HTML markup dynamically.",
            "The client browser only ever receives standard HTML, CSS, and JS; the browser **never sees the server-side `@` code**."
          ]
        },
        {
          "heading": "4. Razor Code Patterns & Syntax Examples",
          "points": [
            "Common C# Razor syntax patterns formatted for clear reference:"
          ],
          "table": {
            "headers": [
              "Pattern Name",
              "Razor Syntax Example (.cshtml)",
              "Purpose & Execution Output"
            ],
            "rows": [
              [
                "Inline Expression",
                "`<h1>Razor</h1><h2>@DateTime.Now.ToShortDateString()</h2>`",
                "Dynamically evaluates C# expression and prints directly into HTML markup"
              ],
              [
                "Multi-Statement Block",
                "`@{ var date = DateTime.Now; var msg = \"Hello\"; } <h3>@msg</h3>`",
                "Executes multiple C# statements and variable definitions prior to rendering"
              ],
              [
                "Conditional If-Else",
                "`@{ var txt = DateTime.Now.Hour > 12 ? \"Good PM\" : \"Good AM\"; }`",
                "Conditionally branches rendered output based on server logic"
              ],
              [
                "For Loop",
                "`<ul>@for (int i = 0; i < 5; i++) { <li>Item @i</li> }</ul>`",
                "Dynamically outputs repeated HTML tags and index values"
              ],
              [
                "Reading Form Input",
                "`if (IsPost) { var val = Request[\"text1\"]; var n = val.AsInt(); }`",
                "Reads submitted form control values and converts types using `.AsInt()`"
              ]
            ]
          }
        }
      ]
    },
    {
      "id": "ipt-cp5",
      "subject": "IPT102",
      "week": "Week 6",
      "title": "Developing Views – HTML Helpers",
      "badge": "Checkpoint 5",
      "description": "Standard HTML Helpers, @Html syntax, loosely vs strongly typed methods, helper mapping table, and form control code patterns (TextBox, DropDownList, RadioButton, etc.).",
      "digest": [
        {
          "heading": "1. What are Standard HTML Helpers?",
          "points": [
            "**Standard HTML Helpers**: Extension methods of the `HtmlHelper` class used in Razor views to render standard HTML controls.",
            "Always start with `@Html.` and are accessed via the `Html` property included in the `WebViewPage` base class of `System.Web.Mvc`.",
            "Reduces repetitive boilerplate HTML, maintains state automatically, and binds directly to model properties."
          ]
        },
        {
          "heading": "2. Loosely Typed vs Strongly Typed Helpers",
          "points": [
            "HTML Helpers come in two distinct architectural variations:"
          ],
          "table": {
            "headers": [
              "Category",
              "Syntax Pattern",
              "Example",
              "Key Benefits & Characteristics"
            ],
            "rows": [
              [
                "Loosely Typed",
                "`@Html.ControlName(\"stringName\")`",
                "`@Html.TextBox(\"FirstName\")`",
                "Accepts control name as string literal; flexible but lacks compile-time validation"
              ],
              [
                "Strongly Typed",
                "`@Html.ControlNameFor(m => m.Property)`",
                "`@Html.TextBoxFor(m => m.FirstName)`",
                "Uses lambda expressions bound directly to Model; provides IntelliSense and compile-time checking"
              ]
            ]
          },
          "tldr": "TextBox() = loosely typed (string name). TextBoxFor() = strongly typed (model expression)."
        },
        {
          "heading": "3. Master Standard HTML Helper & Control Mapping Table",
          "points": [
            "Complete reference mapping every standard HTML Helper to its rendered HTML element:"
          ],
          "table": {
            "headers": [
              "HTML Helper Method",
              "Generated HTML Control",
              "Control Type",
              "Purpose & Behavior"
            ],
            "rows": [
              [
                "`@Html.ActionLink()`",
                "`<a href=\"...\">Link</a>`",
                "Anchor Hyperlink",
                "Generates hyperlink linking to controller action method"
              ],
              [
                "`@Html.TextBox()`",
                "`<input type=\"text\" />`",
                "Text Input",
                "Standard single-line text input field"
              ],
              [
                "`@Html.TextArea()`",
                "`<textarea>...</textarea>`",
                "Multi-line Input",
                "Multi-line text entry for comments, descriptions, or addresses"
              ],
              [
                "`@Html.Password()`",
                "`<input type=\"password\" />`",
                "Password Input",
                "Text input masked with asterisk/bullet characters"
              ],
              [
                "`@Html.CheckBox()`",
                "`<input type=\"checkbox\" />`",
                "Checkbox",
                "Boolean toggle selection (true/false)"
              ],
              [
                "`@Html.RadioButton()`",
                "`<input type=\"radio\" />`",
                "Radio Button",
                "Mutually exclusive single option in a selection group"
              ],
              [
                "`@Html.DropDownList()`",
                "`<select><option>...</select>`",
                "Dropdown Selector",
                "Non-editable dropdown list forcing single item selection"
              ],
              [
                "`@Html.ListBox()`",
                "`<select multiple>...</select>`",
                "List Box",
                "Multi-selection scrollable list box"
              ],
              [
                "`@Html.Hidden()`",
                "`<input type=\"hidden\" />`",
                "Hidden Input",
                "Carries form state and IDs invisible to the client browser"
              ],
              [
                "`@Html.Label()`",
                "`<label>...</label>`",
                "Form Label",
                "Accessible caption label associated with an input element"
              ],
              [
                "`@Html.Editor()`",
                "Dynamic HTML Control",
                "Dynamic Generator",
                "Inspects model data type to automatically render appropriate control"
              ],
              [
                "`@Html.Display()`",
                "Plain HTML text string",
                "Display Helper",
                "Renders model property value directly as read-only text"
              ]
            ]
          }
        },
        {
          "heading": "4. Form Input Helpers in Action",
          "points": [
            "Syntax examples for standard form text and password controls:"
          ],
          "table": {
            "headers": [
              "Control Name",
              "Razor Helper Code Example",
              "Rendered HTML Markup"
            ],
            "rows": [
              [
                "Label",
                "`@Html.Label(\"User Name\")`",
                "`<label for=\"User_Name\">User Name</label>`"
              ],
              [
                "TextBox",
                "`@Html.TextBox(\"txtUsername\")`",
                "`<input type=\"text\" id=\"txtUsername\" name=\"txtUsername\" />`"
              ],
              [
                "Password",
                "`@Html.Password(\"userPassword\")`",
                "`<input type=\"password\" id=\"userPassword\" name=\"userPassword\" />`"
              ]
            ]
          }
        },
        {
          "heading": "5. Selection Helpers: RadioButton, TextArea, CheckBox",
          "points": [
            "Signatures and code examples for selection and multi-line controls:"
          ],
          "table": {
            "headers": [
              "Selection Control",
              "Method Signature",
              "Razor Example Code"
            ],
            "rows": [
              [
                "RadioButton",
                "`RadioButton(name, value, isChecked, htmlAttributes)`",
                "`@Html.RadioButton(\"Gender\", \"Male\", true, new { id = \"male\" }) Male`"
              ],
              [
                "TextArea",
                "`TextArea(name, value, rows, columns, htmlAttributes)`",
                "`@Html.TextArea(\"Address\", \"\", 5, 40, null)`"
              ],
              [
                "CheckBox",
                "`CheckBox(name, isChecked, htmlAttributes)`",
                "`@Html.CheckBox(\"AgreeTerms\", false) I accept the terms`"
              ]
            ]
          }
        },
        {
          "heading": "6. DropDownList Helper & SelectList",
          "points": [
            "DropDownList displays items and forces single-item selection from an `IEnumerable` collection:"
          ],
          "table": {
            "headers": [
              "Parameter / Component",
              "Role & Usage",
              "Implementation Code Example"
            ],
            "rows": [
              [
                "Control Name",
                "Form field identifier",
                "`\"ddlCourses\"`"
              ],
              [
                "SelectList",
                "Wraps `IEnumerable` data collection",
                "`new SelectList(new List<string> { \"BSCS\", \"BSIT\", \"BSBA\" })`"
              ],
              [
                "Option Label",
                "Default placeholder item",
                "`\"Select Course\"`"
              ],
              [
                "Full Helper Call",
                "Complete DropDownList syntax",
                "`@Html.DropDownList(\"ddlCourses\", new SelectList(strCourses), \"Select Course\")`"
              ]
            ]
          }
        }
      ]
    },
    {
      "id": "sia-cp1",
      "subject": "SIA101",
      "week": "Week 2",
      "title": "SIA Requirements & Fundamentals",
      "badge": "Checkpoint 1 (SIA)",
      "description": "Systems Integration, System Architecture, EAI, Data Integration, EDI (UN/EDIFACT, XML, SWIFT), UML Messages, and the 10 Requirement Elicitation Methodologies & Surveying rules.",
      "digest": [
        {
          "heading": "1. System Integration vs. System Architecture",
          "points": [
            "**System Integration**: The engineering discipline of combining different sub-system components into one unified, cohesive large system, ensuring continuous functionality, data interoperability, and coordinated service delivery across disparate IT assets.",
            "**System Architecture**: A conceptual model and formal description/representation that defines the structural layout, component boundaries, communication protocols, and behavioral rules of an entire system.",
            "**Core Integration Forms**: 1) *Enterprise Application Integration (EAI)*; 2) *Data Integration*; 3) *Electronic Data Interchange (EDI)*."
          ],
          "diagramHtml": "\n<div class=\"diagram-header\">\n  <span class=\"diagram-title\">🌐 Enterprise System Integration & Architecture Network</span>\n  <span class=\"diagram-badge\">Hub-and-Spoke Topology</span>\n</div>\n<div class=\"arch-network\">\n  <div class=\"arch-node hub\">\n    <div class=\"arch-node-icon\">🔀</div>\n    <div class=\"arch-node-title\">Enterprise Integration Backbone (EAI / Middleware / Internet)</div>\n    <div class=\"arch-node-meta\">Secure Message Broker • EDI Exchange • Protocol Adapters</div>\n  </div>\n  <div class=\"arch-node\">\n    <div class=\"arch-node-icon\">👤</div>\n    <div class=\"arch-node-title\">Customer Web App</div>\n    <div class=\"arch-node-meta\">Order Placement & Tracking</div>\n  </div>\n  <div class=\"arch-node\">\n    <div class=\"arch-node-icon\">👥</div>\n    <div class=\"arch-node-title\">Buyer's Community</div>\n    <div class=\"arch-node-meta\">Catalog & Quotations</div>\n  </div>\n  <div class=\"arch-node\">\n    <div class=\"arch-node-icon\">🏭</div>\n    <div class=\"arch-node-title\">Seller ERP & CRM</div>\n    <div class=\"arch-node-meta\">Inventory & Order Fulfillment</div>\n  </div>\n  <div class=\"arch-node\">\n    <div class=\"arch-node-icon\">💳</div>\n    <div class=\"arch-node-title\">Payment Clearinghouse</div>\n    <div class=\"arch-node-meta\">SWIFT / Gateway Validation</div>\n  </div>\n  <div class=\"arch-node\">\n    <div class=\"arch-node-icon\">🚚</div>\n    <div class=\"arch-node-title\">Logistics Service</div>\n    <div class=\"arch-node-meta\">Dispatch, Shipping & Delivery</div>\n  </div>\n</div>\n",
          "table": {
            "headers": [
              "Architectural Concept",
              "Formal Definition",
              "Primary Operational Role",
              "Real-World SIA Scenario"
            ],
            "rows": [
              [
                "System Integration",
                "Combining disparate sub-systems to form a unified large-scale system",
                "Ensures end-to-end functionality, automated data synchronization, and eliminates information silos",
                "Connecting an e-commerce website with backend ERP, warehouse barcode scanners, and payment gateways"
              ],
              [
                "System Architecture",
                "A conceptual model and formal representation defining system structure and behavior",
                "Provides the foundational technical blueprint and constraints for integration design",
                "Designing a microservices architecture communicating via REST APIs and Kafka message queues"
              ],
              [
                "Enterprise Application Integration (EAI)",
                "Methods, concepts, and tools for the classification, connection, and coordination of internal apps",
                "Unifies legacy enterprise applications without rewriting underlying database schemas",
                "Integrating SAP ERP, Salesforce CRM, and custom accounting databases via an Enterprise Service Bus (ESB)"
              ],
              [
                "Electronic Data Interchange (EDI)",
                "Computer-to-computer structured exchange of standard electronic business documents",
                "Automates B2B transactions without human manual data re-entry",
                "Supermarkets dispatching electronic purchase orders directly to FMCG suppliers using UN/EDIFACT"
              ]
            ]
          },
          "tldr": "System Integration connects the pieces; System Architecture defines the blueprint. EAI coordinates internal enterprise apps, while EDI enables automated B2B document transactions."
        },
        {
          "heading": "2. EDI Standards: UN/EDIFACT, XML, and UML Messages",
          "points": [
            "**UN/EDIFACT**: *United Nations Electronic Data Interchange for Administration, Commerce, and Transport*. The global international standard for electronic data exchange across international borders.",
            "**3 Message Components in UN/EDIFACT**: Every transfer unit contains: 1) **Event** (the triggering transaction, e.g. Purchase Order Created); 2) **Reference Data** (the business catalog/master data referenced); 3) **Control Information** (headers, routing, validation, and batch metadata).",
            "**XML (eXtensible Markup Language)**: Open data format standard published by the **W3C**. Powers XML/EDI and incorporates auxiliary standards such as **XSL** (eXtensible Stylesheet Language) for document transformation and styling.",
            "**SWIFT**: Standardized international financial messaging protocol connecting global banks.",
            "**Messages in UML**: Represents communication between objects/lifelines; consists of **two (2) components**: 1) **Event** (the dispatch trigger); 2) **Information** (the data payload/arguments)."
          ],
          "table": {
            "headers": [
              "Standard / Technology",
              "Governing Body / Type",
              "Core Components / Structure",
              "Key Advantage"
            ],
            "rows": [
              [
                "UN/EDIFACT",
                "United Nations (UN / CEFACT)",
                "Contains 3 components: 1. Event, 2. Reference Data, 3. Control Information",
                "Globally standardized syntax for international maritime, customs, and commercial transport"
              ],
              [
                "XML / XML-EDI",
                "World Wide Web Consortium (W3C)",
                "Human-readable hierarchical markup with extensible custom tags and XSL stylesheets",
                "Highly flexible, universally supported by modern web platforms, self-describing schemas"
              ],
              [
                "SWIFT",
                "SWIFT Financial Messaging",
                "Strict banking format MT/ISO 20022 message envelopes",
                "Extremely secure, tamper-evident global financial settlement network"
              ],
              [
                "UML Messages",
                "Object Management Group (OMG)",
                "Contains 2 components: 1. Event (trigger), 2. Information (parameters)",
                "Directly models object-to-object interaction in sequence and collaboration diagrams"
              ]
            ]
          },
          "trap": "Exam Trap: UN/EDIFACT contains THREE (3) message components (Event, Reference Data, Control Information). UML messages contain only TWO (2) components (Event, Information)!"
        },
        {
          "heading": "3. Requirement Elicitation (The 10 Methodologies)",
          "points": [
            "**Requirement Elicitation**: Also known as *'Requirement gathering and specification'*. The active process of researching, discovering, uncovering, and validating stakeholder needs for an IT system.",
            "The lecture identifies **10 distinct requirement elicitation methodologies** used by systems analysts."
          ],
          "table": {
            "headers": [
              "#",
              "Methodology",
              "Definition & How It Works",
              "When to Use / Best Application"
            ],
            "rows": [
              [
                "1",
                "Brainstorming",
                "Unconstrained group creativity session to generate a broad volume of innovative ideas without immediate criticism or filtering",
                "Early conceptual phase when exploring novel features or solving ambiguous problems"
              ],
              [
                "2",
                "Document Analysis",
                "Reviewing existing system documentation, process logs, regulatory laws, contracts, and manuals to uncover functional rules",
                "Replacing legacy systems or when subject matter experts are unavailable"
              ],
              [
                "3",
                "Focus Group",
                "Moderated discussion with a representative group of end-users to gauge feelings, attitudes, and reactions",
                "Evaluating user sentiment, product UI desirability, or testing acceptance of planned workflow shifts"
              ],
              [
                "4",
                "Interface Analysis",
                "Examining touchpoints and boundary conditions between systems, hardware devices, external APIs, and human users",
                "Integration projects involving legacy databases, third-party APIs, payment gateways, or POS hardware"
              ],
              [
                "5",
                "Observation (Shadowing)",
                "Directly watching end-users execute their day-to-day tasks in their authentic working environment",
                "Uncovering tacit knowledge, unspoken habits, operational bottlenecks, and manual workarounds"
              ],
              [
                "6",
                "Interview",
                "Structured or semi-structured one-on-one dialogues between analysts and key stakeholders",
                "Extracting deep qualitative requirements, strategic goals, and confidential domain insights"
              ],
              [
                "7",
                "Prototyping",
                "Constructing operational models or mockups to let stakeholders visualize and experience requirements",
                "Complex interactive UIs where stakeholders cannot clearly describe what they want in text"
              ],
              [
                "8",
                "Requirements Workshop",
                "Structured, intensive working session uniting cross-functional stakeholders (facilitator, architect, users, managers)",
                "High-priority projects requiring rapid alignment and immediate resolution of conflicting stakeholder priorities"
              ],
              [
                "9",
                "Reverse Engineering",
                "Deconstructing an existing legacy software system or competitor product to deduce its underlying logic, schema, and rules",
                "Migrating undocumented, mission-critical legacy applications whose original developers have left"
              ],
              [
                "10",
                "Surveying",
                "Administering structured questionnaires to a large, geographically dispersed population of respondents",
                "Collecting statistically significant quantitative feedback and prioritizing feature backlogs"
              ]
            ]
          },
          "tldr": "Requirement Elicitation uncovers the true needs of stakeholders using 10 specialized techniques ranging from one-on-one interviews and observation to prototyping and surveying."
        },
        {
          "heading": "4. The 4 Types of Prototyping & Surveying Best Practices",
          "points": [
            "**4 Types of Prototyping**:",
            "• **Rapid Throwaway Prototype**: Built quickly with mock data solely to clarify requirements, and then discarded.",
            "• **Evolutionary Prototype**: Starts as a solid architectural core and iteratively expands into the final production system.",
            "• **Incremental Prototype**: System is decomposed into functional modules built in parallel as prototypes before final assembly.",
            "• **Extreme Prototype**: Widely used in web development; structured into 3 successive stages: static HTML wireframes ➔ data simulation services ➔ backend integration.",
            "**Surveying Best Practices**: 8 essential rules to guarantee valid, high-integrity survey data."
          ],
          "table": {
            "headers": [
              "Surveying Guideline",
              "Rule Explanation",
              "Why It Matters for Analysts (Exam Focus)"
            ],
            "rows": [
              [
                "Communicate responses & objective",
                "Clearly explain the purpose of the survey and how data will be utilized",
                "Increases stakeholder trust, response willingness, and survey completion rate"
              ],
              [
                "Be aware of survey population & characteristics",
                "Tailor language, terminology, and length to the demographic profile of the audience",
                "Prevents misinterpretations and ensures questions align with respondent technical competence"
              ],
              [
                "Keep survey short",
                "Limit question count to the absolute minimum necessary",
                "Prevents survey fatigue, rushed answers, and mid-survey dropouts"
              ],
              [
                "Ensure survey content is clear",
                "Use plain, unambiguous phrasing that leaves zero room for double meanings",
                "Eliminates ambiguous data points that skew statistical analysis"
              ],
              [
                "Avoid negative questions",
                "Do not use confusing negatives (e.g. 'Which features do you not find unhelpful?')",
                "Negative syntax causes cognitive confusion and inverted, erroneous responses"
              ],
              [
                "Avoid complex concepts",
                "Steer clear of convoluted technical jargon or academic theory",
                "Enables non-technical users to answer quickly and accurately"
              ],
              [
                "Elicit more details",
                "Include focused qualitative open-ended follow-ups where appropriate",
                "Yields actionable context behind purely quantitative rating numbers"
              ],
              [
                "Avoid questions putting respondent on defensive",
                "Never ask accusatory or intimidating questions (e.g. 'Why did you fail to follow policy?')",
                "Defensive questions trigger dishonest, protective responses that hide root problems"
              ]
            ]
          },
          "trap": "Exam Trap: Rapid Throwaway prototypes are DISCARDED after requirements are validated. Evolutionary prototypes EVOLVE into the actual working production system!"
        }
      ]
    },
    {
      "id": "sia-cp2",
      "subject": "SIA101",
      "week": "Week 3",
      "title": "Modeling & Testing Tools (BPM & Use Case)",
      "badge": "Checkpoint 2 (SIA)",
      "description": "Use Case Model (actors, boundaries, relationships, 5 purposes), 10 Business Process Modeling (BPM) Techniques (BPMN, UML, DFD, RAD, RID, Gantt, IDEF, CPN, OO), and Business Analysis Tools.",
      "digest": [
        {
          "heading": "1. Use Case Model & Its 5 Purposes",
          "points": [
            "**Use Case Model**: A behavioral architectural model that depicts how different types of external actors interact with a system to solve specific business problems.",
            "**Unified Modeling Language (UML)**: The standardized modeling notation for use cases.",
            "**Core Building Blocks**: 1) *Actors* (stick figures representing external roles, services, or devices); 2) *System Boundary* (box defining system perimeter); 3) *Use Cases* (horizontal ovals representing discrete system functions); 4) *Relationships* (associations, include, extend).",
            "**5 Core Purposes of Use Case Diagrams**:",
            "• a. *Specifying the context of a system.*",
            "• b. *Capturing system requirements.*",
            "• c. *Validating system architecture.*",
            "• d. *Implementing and generating test cases.*",
            "• e. *Developed by analysts and other experts to bridge business and engineering teams.*"
          ],
          "table": {
            "headers": [
              "Use Case Element",
              "Graphical Symbol",
              "Architectural Meaning",
              "Concrete Airline / SIA Example"
            ],
            "rows": [
              [
                "Actor",
                "Stick Figure",
                "External entity (human role, external IT system, or hardware) interacting with system",
                "Passenger, Check-In Representative, Destination Airport Customs"
              ],
              [
                "System Boundary",
                "Outer Rectangle",
                "Demarcates what is inside the system scope versus the external world",
                "Passenger Service System perimeter"
              ],
              [
                "Use Case",
                "Horizontal Oval",
                "A complete sequence of actions yielding observable value to an actor",
                "Check-In, Automated Check-In, Boarding, Requesting Passenger List"
              ],
              [
                "Relationship / Association",
                "Solid or Dashed Arrow",
                "Communication path connecting an actor to a use case, or use case dependencies",
                "Passenger initiates Check-In; Automated Check-In <<extends>> Check-In"
              ]
            ]
          },
          "tldr": "A Use Case Diagram captures system context, documents functional requirements, validates architecture, and acts as the direct basis for generating QA test cases."
        },
        {
          "heading": "2. Business Process Modelling (BPM) & Master 10 Techniques",
          "points": [
            "**Business Process Modelling (BPM)**: A discipline used primarily to map, document, and analyze workflows, enabling organizations to visualize processes and make better, data-driven decisions.",
            "The lecture outlines **10 core techniques** utilized in business process modeling."
          ],
          "table": {
            "headers": [
              "#",
              "BPM Technique",
              "Primary Focus & Description",
              "Key Elements & Notation"
            ],
            "rows": [
              [
                "1",
                "BPMN (Business Process Model and Notation)",
                "Standard graphical representation of business workflows using standard visual objects",
                "Flow objects (events, tasks, gateways), Connecting objects, Swimlanes (pools/lanes), Artifacts"
              ],
              [
                "2",
                "UML Diagrams",
                "Modern, powerful, and flexible approach to modeling and documenting business & system processes",
                "Activity diagrams, State machine diagrams, Sequence diagrams, and Component diagrams"
              ],
              [
                "3",
                "Flowchart Technique",
                "The most popular and universally recognized diagram for sequential workflows",
                "Basic geometric shapes (rectangles for steps, diamonds for decisions, ovals for start/end) and directional arrows"
              ],
              [
                "4",
                "Data Flow Diagram (DFD)",
                "Shows the flow of data or information from one entity or processing point to another",
                "Processes (circles/rounded rects), Data Stores (open rectangles), External Entities (rectangles), Data Flows (arrows)"
              ],
              [
                "5",
                "Role Activity Diagram (RAD)",
                "Maps out the intangible roles, states, and desired behavior patterns within an organization",
                "Focuses on role responsibilities, actions, and social interaction states"
              ],
              [
                "6",
                "Role Interaction Diagram (RID)",
                "Illustrates the exact interaction sequences between various processes within a system",
                "Comprises Sequence Diagrams (time-ordered message exchanges) and Collaboration Diagrams (structural object networks)"
              ],
              [
                "7",
                "Gantt Charts",
                "Relates a list of activities directly to a calendar time scale",
                "Horizontal task bars showing start/end dates, project timeline, critical path, and milestones"
              ],
              [
                "8",
                "Integrated Definition for Function Modelling (IDEF)",
                "A family of modeling methods addressing enterprise functional modeling needs (e.g. IDEF0)",
                "Function box bounded by ICOM: Input (Left), Control (Top), Output (Right), Mechanism/Resources (Bottom)"
              ],
              [
                "9",
                "Coloured Petri Nets (CPN)",
                "Graphically oriented formal language for design, specification, simulation, and verification of concurrent systems",
                "Places, Transitions, Arcs, and colored Tokens representing discrete state dynamics and concurrency"
              ],
              [
                "10",
                "Object-Oriented Methods",
                "Encapsulates workflow data and processing into reusable objects with message-passing logic",
                "Encapsulation, Message-Passing, Inheritance (class to subclass), and Polymorphism"
              ]
            ]
          },
          "diagramHtml": "\n<div class=\"diagram-header\">\n  <span class=\"diagram-title\">📐 IDEF Function Box (ICOM Architecture)</span>\n  <span class=\"diagram-badge\">IDEF0 Standard</span>\n</div>\n<div style=\"max-width: 440px; margin: 0 auto; text-align: center;\">\n  <div style=\"background: rgba(99, 102, 241, 0.15); border: 1px dashed var(--accent-indigo); padding: 6px; border-radius: 6px; margin-bottom: 8px; font-size: 0.75rem; color: #a5b4fc;\">\n    ⬇️ <strong>CONTROL</strong> (Policies, Standards, Constraints)\n  </div>\n  <div style=\"display: flex; align-items: center; justify-content: space-between; gap: 8px;\">\n    <div style=\"flex: 1; background: rgba(6, 182, 212, 0.15); border: 1px dashed var(--accent-cyan); padding: 8px 4px; border-radius: 6px; font-size: 0.72rem; color: #67e8f9;\">\n      ➡️ <strong>INPUT</strong><br>(Raw Data, Materials)\n    </div>\n    <div style=\"flex: 2; background: linear-gradient(135deg, #1e293b, #0f172a); border: 2px solid var(--accent-cyan); padding: 14px 8px; border-radius: 8px; font-weight: 700; font-size: 0.85rem;\">\n      ⚙️ FUNCTION NAME<br><span style=\"font-size: 0.7rem; font-weight: normal; color: var(--text-muted);\">Activity / Process #</span>\n    </div>\n    <div style=\"flex: 1; background: rgba(16, 185, 129, 0.15); border: 1px dashed var(--accent-emerald); padding: 8px 4px; border-radius: 6px; font-size: 0.72rem; color: #34d399;\">\n      ➡️ <strong>OUTPUT</strong><br>(Results, Deliverables)\n    </div>\n  </div>\n  <div style=\"background: rgba(245, 158, 11, 0.15); border: 1px dashed var(--accent-amber); padding: 6px; border-radius: 6px; margin-top: 8px; font-size: 0.75rem; color: #fcd34d;\">\n    ⬆️ <strong>MECHANISM</strong> (Personnel, IT Systems, Equipment, Resources)\n  </div>\n</div>\n",
          "trap": "Exam Trap: IDEF uses the ICOM model: Input enters on the LEFT, Control enters on TOP, Output exits on the RIGHT, and Mechanism/Resources enter at the BOTTOM!"
        },
        {
          "heading": "3. Business Analysis Tools & 3 Core Tool Categories",
          "points": [
            "**Why Business Analysts (BAs) Need the Best Tools (5 Key Reasons)**:",
            "1. To **track requirements** throughout the software engineering lifecycle.",
            "2. To **manage requirements** when scope changes occur.",
            "3. To **describe requirements in detail** with zero ambiguity.",
            "4. To **model requirements diagrammatically** for enhanced stakeholder comprehension.",
            "5. To **collaborate with teams and stakeholders** across remote and hybrid organizational units."
          ],
          "table": {
            "headers": [
              "Tool Category",
              "Primary Purpose & Operational Scope",
              "Standard Industry Tool Examples"
            ],
            "rows": [
              [
                "1. Requirement-Related Tools",
                "Managing requirement trees, trace matrices, scope baselines, user stories, and acceptance criteria",
                "JIRA, Confluence, Modern Requirements, IBM DOORS, Azure DevOps"
              ],
              [
                "2. Modelling Tools",
                "Constructing formal architectural models, BPMN workflows, DFDs, UML diagrams, and wireframes",
                "Enterprise Architect, Lucidchart, Microsoft Visio, Camunda BPM, Draw.io"
              ],
              [
                "3. Collaboration Tools",
                "Facilitating synchronous and asynchronous communication, sprint reviews, and stakeholder alignment",
                "Slack, Microsoft Teams, Trello, Miro, Zoom, Google Workspace"
              ]
            ]
          },
          "tldr": "Business Analysis tools fall into 3 clear categories: Requirement-related (tracking/management), Modelling (diagramming/architecting), and Collaboration (cross-team communication)."
        }
      ]
    },
    {
      "id": "sia-cp3",
      "subject": "SIA101",
      "week": "Week 4",
      "title": "Project Management Life Cycle (PMLC)",
      "badge": "Checkpoint 3 (SIA)",
      "description": "PMI 5-Phase Project Management Life Cycle, SMART vs CLEAR goal setting, Scope Statement, WBS, Milestones, Gantt Charts, Communication Plan, 5x3 Risk Severity Matrix, Execution tasks, 4 KPIs, and Project Closure.",
      "digest": [
        {
          "heading": "1. PMI 5-Phase Project Management Life Cycle",
          "points": [
            "Developed by the prestigious **Project Management Institute (PMI)**.",
            "Standard project progression flows through **five (5) discrete, sequential phases**:",
            "1. **Conception & Initiation**: Feasibility analysis and formal chartering.",
            "2. **Definition & Planning**: Scope definition, WBS, scheduling, and risk planning.",
            "3. **Launch or Execution**: Team development, resource assignment, and deliverable creation.",
            "4. **Performance / Monitoring**: Real-time KPI tracking, budget audits, and quality control.",
            "5. **Project Close**: Contract sign-offs, retrospectives, deliverable handover, and archiving."
          ],
          "diagramHtml": "\n<div class=\"diagram-header\">\n  <span class=\"diagram-title\">🚀 PMI 5-Phase Project Management Life Cycle Pipeline</span>\n  <span class=\"diagram-badge\">Sequential Gate Flow</span>\n</div>\n<div class=\"diagram-pipeline\">\n  <div class=\"pipe-step\">\n    <div class=\"pipe-step-num\">1</div>\n    <div class=\"pipe-step-title\">Initiation</div>\n    <div class=\"pipe-step-desc\">Project Charter<br>Business Case<br>Feasibility Study</div>\n  </div>\n  <div class=\"pipe-arrow\">➔</div>\n  <div class=\"pipe-step\">\n    <div class=\"pipe-step-num\">2</div>\n    <div class=\"pipe-step-title\">Planning</div>\n    <div class=\"pipe-step-desc\">Scope Statement<br>WBS & Gantt<br>Risk & Comms Plan</div>\n  </div>\n  <div class=\"pipe-arrow\">➔</div>\n  <div class=\"pipe-step\">\n    <div class=\"pipe-step-num\">3</div>\n    <div class=\"pipe-step-title\">Execution</div>\n    <div class=\"pipe-step-desc\">Team Assignment<br>Resource Allocation<br>Building Deliverables</div>\n  </div>\n  <div class=\"pipe-arrow\">➔</div>\n  <div class=\"pipe-step\">\n    <div class=\"pipe-step-num\">4</div>\n    <div class=\"pipe-step-title\">Monitoring</div>\n    <div class=\"pipe-step-desc\">4 Project KPIs<br>Cost Tracking<br>Quality & Schedule</div>\n  </div>\n  <div class=\"pipe-arrow\">➔</div>\n  <div class=\"pipe-step\">\n    <div class=\"pipe-step-num\">5</div>\n    <div class=\"pipe-step-title\">Closure</div>\n    <div class=\"pipe-step-desc\">Deliverable Handover<br>Contracts Closed<br>Post-Mortem Review</div>\n  </div>\n</div>\n",
          "table": {
            "headers": [
              "PMI Phase",
              "Phase Focus",
              "Key Core Deliverables & Artifacts",
              "Primary Objective"
            ],
            "rows": [
              [
                "Phase 1: Initiation",
                "Conception and business validation",
                "Business Case, Feasibility Study, Project Charter, Project Team & Office",
                "Formally authorize project existence and prove business viability"
              ],
              [
                "Phase 2: Planning",
                "Developing a roadmap that everyone will follow",
                "Scope Statement, Work Breakdown Structure (WBS), Gantt Chart, Communication Plan, Risk Plan",
                "Establish baseline boundaries, schedules, budget, and risk mitigation strategies"
              ],
              [
                "Phase 3: Execution",
                "Developing and completing deliverables",
                "Deliverables developed, Resource assignments executed, Status meetings, Procurement",
                "Build actual software/hardware deliverables as directed by the Project Manager"
              ],
              [
                "Phase 4: Monitoring",
                "Measuring progression and performance against plan",
                "KPI Reports, Quality Deliverable inspections, Effort & Cost burn reports, Change requests",
                "Ensure execution strictly aligns with the project management plan and baseline"
              ],
              [
                "Phase 5: Closure",
                "Formal recognition of project completion",
                "Deliverable Handover, Completed Contracts, Retrospective Meeting, Learnings Document",
                "Orderly project termination, client acceptance, and organizational learning retention"
              ]
            ]
          },
          "trap": "Exam Trap: The PROJECT CHARTER is generated in Phase 1 (Initiation), NOT in Phase 2 (Planning)! Planning begins ONLY AFTER the charter authorizes the project."
        },
        {
          "heading": "2. Goal Setting: SMART vs. CLEAR Methods",
          "points": [
            "During **Phase 2 (Project Planning)**, two primary goal-setting frameworks are used:",
            "• **SMART**: Traditional, structured goal setting emphasizing precision, realism, and time bounds.",
            "• **CLEAR**: Modern, agile-friendly goal setting emphasizing collaboration, emotional engagement, and adaptability."
          ],
          "table": {
            "headers": [
              "Framework",
              "Letter",
              "Keyword",
              "Practical Planning Definition",
              "Integration Scenario Example"
            ],
            "rows": [
              [
                "SMART",
                "S",
                "Specific",
                "Be clear and specific so goals are easier to achieve; team knows where to begin",
                "'Integrate the payment gateway with the core billing engine via REST API'"
              ],
              [
                "SMART",
                "M",
                "Measurable",
                "Measurable goals allow progress tracking and declare exactly when a goal is complete",
                "'Achieve 99.9% successful automated payment response within 1.5 seconds'"
              ],
              [
                "SMART",
                "A",
                "Actionable",
                "Actionable goals ensure the required implementation steps are within team control",
                "'Provision API keys, configure webhook listeners, and execute 50 unit tests'"
              ],
              [
                "SMART",
                "R",
                "Realistic",
                "Avoids overwhelm and stress by ensuring goals are feasible with available resources",
                "'Deploy integration on sandbox staging environment before production rollout'"
              ],
              [
                "SMART",
                "T",
                "Timebound",
                "A date keeps the team focused, motivated, and working toward an explicit target",
                "'Complete gateway certification and live production deployment by October 15'"
              ],
              [
                "CLEAR",
                "C",
                "Collaborative",
                "Is everyone involved? Promotes cross-functional teamwork and shared buy-in",
                "DevOps, backend developers, and finance analysts collaborate on API schemas"
              ],
              [
                "CLEAR",
                "L",
                "Limited",
                "Have you set clear time and financial boundaries?",
                "Strict 4-week sprint timebox with a maximum integration budget of 15,000"
              ],
              [
                "CLEAR",
                "E",
                "Emotional",
                "Does your goal engage all team members with meaning and pride?",
                "Eliminating manual billing errors to improve customer satisfaction and trust"
              ],
              [
                "CLEAR",
                "A",
                "Appreciable",
                "Is your goal broken down into manageable, measurable micro-deliverables?",
                "Sub-tasks: Auth token generator, webhook handler, retry queue, audit logger"
              ],
              [
                "CLEAR",
                "R",
                "Refinable",
                "Can the goal be adjusted if conditions or business requirements change?",
                "Ability to pivot to an alternative payment provider if gateway fees increase"
              ]
            ]
          },
          "tldr": "SMART = Specific, Measurable, Actionable, Realistic, Timebound. CLEAR = Collaborative, Limited, Emotional, Appreciable, Refinable."
        },
        {
          "heading": "3. Essential Planning Documents & Risk Severity Matrix",
          "points": [
            "**Scope Statement**: Defines business need, project benefits, objectives, deliverables, and key milestones.",
            "**Work Breakdown Structure (WBS)**: Hierarchical and incremental decomposition of the total project scope into phases, deliverables, and work packages.",
            "**Milestones**: Specific zero-duration points in time used to measure progress toward the ultimate objective.",
            "**Gantt Chart**: Relates activities to a calendar timeline to estimate durations and task sequencing.",
            "**Communication Plan**: Policy-driven matrix specifying *Description*, *Frequency*, *Method*, *Audience*, and *Owner*.",
            "**Risk Management Plan**: Evaluates risk events across **5 severity levels** against 3 critical project dimensions:"
          ],
          "diagramHtml": "\n<div class=\"diagram-header\">\n  <span class=\"diagram-title\">⚠️ Risk Severity Evaluation Matrix</span>\n  <span class=\"diagram-badge\">5 Levels × 3 Impact Dimensions</span>\n</div>\n<div class=\"risk-matrix-grid\">\n  <div class=\"risk-row\" style=\"font-weight: 700; color: var(--text-muted);\">\n    <div>Level</div>\n    <div>Tech Performance</div>\n    <div>Program Cost</div>\n    <div>Schedule Slip</div>\n  </div>\n  <div class=\"risk-row\">\n    <div class=\"risk-pill sev-5\">5 Severe</div>\n    <div class=\"risk-cell\">Unacceptable; misses Key Parameters</div>\n    <div class=\"risk-cell\">Budget impacted &gt; 20 Million</div>\n    <div class=\"risk-cell\">Milestone delayed &gt; 3 Months</div>\n  </div>\n  <div class=\"risk-row\">\n    <div class=\"risk-pill sev-4\">4 Significant</div>\n    <div class=\"risk-cell\">Significant changes; misses threshold</div>\n    <div class=\"risk-cell\">Budget impacted 10M – 20M</div>\n    <div class=\"risk-cell\">Critical path delayed 2–3 Months</div>\n  </div>\n  <div class=\"risk-row\">\n    <div class=\"risk-pill sev-3\">3 Moderate</div>\n    <div class=\"risk-cell\">Moderate changes required</div>\n    <div class=\"risk-cell\">Budget impacted 2M – 10M</div>\n    <div class=\"risk-cell\">Schedule slips 1–2 Months</div>\n  </div>\n  <div class=\"risk-row\">\n    <div class=\"risk-pill sev-2\">2 Minor</div>\n    <div class=\"risk-cell\">Minor changes within objective</div>\n    <div class=\"risk-cell\">Budget impacted &lt; 2M (&lt; 5%)</div>\n    <div class=\"risk-cell\">Non-critical slips; critical &lt; 1 Mo</div>\n  </div>\n  <div class=\"risk-row\">\n    <div class=\"risk-pill sev-1\">1 Minimal</div>\n    <div class=\"risk-cell\">Minor trades; zero program impact</div>\n    <div class=\"risk-cell\">Budget absorbed within plan</div>\n    <div class=\"risk-cell\">Schedule unaffected; float absorbs</div>\n  </div>\n</div>\n",
          "table": {
            "headers": [
              "Document / Artifact",
              "Core Focus",
              "Primary Deliverable Format",
              "Who Maintains It?"
            ],
            "rows": [
              [
                "Scope Statement",
                "Defines business need, benefits, objectives, deliverables, and key milestones",
                "Formal narrative agreement document signed by sponsor and client",
                "Project Manager & Business Analyst"
              ],
              [
                "Work Breakdown Structure (WBS)",
                "Hierarchical decomposition of project into phases, deliverables, and work packages",
                "Tree diagram or indented hierarchy breakdown structure",
                "Project Manager & Technical Leads"
              ],
              [
                "Gantt Chart",
                "Relates tasks against calendar timeline, resources, and task dependencies",
                "Horizontal bar chart with critical path indicators",
                "Project Manager / Scheduler"
              ],
              [
                "Milestones",
                "Key milestone points within project lifecycle used to measure progress",
                "Flag markers indicating completion of major deliverable stages (0 duration)",
                "Project Board / PM / Stakeholders"
              ],
              [
                "Communication Plan",
                "Policy-driven approach to providing stakeholders with timely information",
                "Matrix table: Description, Frequency, Method, Audience, Owner",
                "Project Manager / Comms Lead"
              ],
              [
                "Risk Management Plan",
                "Details organization's risk management process and threshold mitigation",
                "Risk register and 5-level severity matrix (Performance, Cost, Schedule)",
                "Project Manager & Risk Officer"
              ]
            ]
          },
          "trap": "Exam Trap: In the Risk Severity Matrix, Severity 5 (Severe) means budget impact > 20M and schedule delay > 3 months. Severity 1 (Minimal) causes NO schedule change because float absorbs variations!"
        },
        {
          "heading": "4. Monitoring KPIs & The 5 Steps of Project Closure",
          "points": [
            "**4 Key Performance Indicators (KPIs) in Monitoring**:",
            "1. **Project Objectives**: Measuring adherence to schedule and budget baselines.",
            "2. **Quality Deliverables**: Determining whether deliverables meet engineering quality criteria.",
            "3. **Effort and Cost Tracking**: Informing whether a project will meet its scheduled date of completion within cost tolerances.",
            "4. **Project Performance**: Monitoring and controlling scope change requests throughout the project.",
            "**Phase 5: Project Closure Steps** (Formal recognition of completion — everyone agrees it is completed):",
            "• Step a: **Transfer all deliverables** to the operational client.",
            "• Step b: **Complete and close all contracts** with external suppliers and partners.",
            "• Step c: **Have a retrospective meeting** (post-mortem session).",
            "• Step d: **Disband the team** and reassign personnel to new ventures.",
            "• Step e: **Document all learnings** and archive project repository assets."
          ],
          "table": {
            "headers": [
              "Project Closure Step",
              "Action Taken",
              "Why It Is Mandatory"
            ],
            "rows": [
              [
                "1. Transfer all deliverables",
                "Handover of software code, servers, licenses, and documentation to operations",
                "Ensures client takes official ownership and operational responsibility"
              ],
              [
                "2. Complete contracts",
                "Settle all outstanding invoices, audit deliverables, and terminate vendor contracts",
                "Eliminates legal liabilities, financial disputes, and unexpected recurring charges"
              ],
              [
                "3. Have retrospective meeting",
                "Conduct post-mortem review with project team and key stakeholders",
                "Identifies what went well, what failed, and prevents repeating errors"
              ],
              [
                "4. Disband the team",
                "Release project team members back to functional departments or new projects",
                "Prevents idle resource costs and enables personnel career reallocation"
              ],
              [
                "5. Document all learnings",
                "Compile project archives, metrics, risk lessons, and post-implementation review",
                "Builds institutional knowledge and enriches organizational process assets"
              ]
            ]
          },
          "tldr": "Monitoring tracks 4 KPIs (Objectives, Quality, Cost/Effort, Performance). Closure completes 5 actions: Deliverables Handover ➔ Contracts Closed ➔ Retrospective ➔ Disband Team ➔ Document Learnings."
        }
      ]
    },
    {
      "id": "sia-cp4",
      "subject": "SIA101",
      "week": "Week 5",
      "title": "SIA Organizational Context & IT Environments",
      "badge": "Checkpoint 4 (SIA)",
      "description": "Business Processes definition, 6 reasons for importance, 7-Step Business Process Lifecycle, Business Process Integration (BPI), IT Environment 3 components & drivers (Needs, Rules, Choices), Centralized vs Decentralized structures, and 4 Organizational Structure types (Functional, Divisional, Flatarchy, Matrix).",
      "digest": [
        {
          "heading": "1. Business Processes & The 7-Step Lifecycle",
          "points": [
            "**Business Process**: A series of steps performed by a group of stakeholders to achieve a concrete organizational goal; a collection of linked tasks culminating in the delivery of a service or product to a client.",
            "**6 Reasons Why Business Processes Are Important**:",
            "1. To **identify important tasks**.",
            "2. To **improve operational efficiency**.",
            "3. To **streamline communications**.",
            "4. To **set formal governance approvals**.",
            "5. To **prevent chaos**.",
            "6. To **standardize procedures** across the enterprise."
          ],
          "diagramHtml": "\n<div class=\"diagram-header\">\n  <span class=\"diagram-title\">🔄 7 Steps of the Business Process Lifecycle</span>\n  <span class=\"diagram-badge\">Continuous Improvement Cycle</span>\n</div>\n<div class=\"diagram-pipeline\">\n  <div class=\"pipe-step\">\n    <div class=\"pipe-step-num\">1</div>\n    <div class=\"pipe-step-title\">Define Goals</div>\n    <div class=\"pipe-step-desc\">Know process purpose & target</div>\n  </div>\n  <div class=\"pipe-arrow\">➔</div>\n  <div class=\"pipe-step\">\n    <div class=\"pipe-step-num\">2</div>\n    <div class=\"pipe-step-title\">Plan & Map</div>\n    <div class=\"pipe-step-desc\">Determine strategies & workflows</div>\n  </div>\n  <div class=\"pipe-arrow\">➔</div>\n  <div class=\"pipe-step\">\n    <div class=\"pipe-step-num\">3</div>\n    <div class=\"pipe-step-title\">Set Actions</div>\n    <div class=\"pipe-step-desc\">Assign to people & machines</div>\n  </div>\n  <div class=\"pipe-arrow\">➔</div>\n  <div class=\"pipe-step\">\n    <div class=\"pipe-step-num\">4</div>\n    <div class=\"pipe-step-title\">Test Process</div>\n    <div class=\"pipe-step-desc\">Small-scale test environment</div>\n  </div>\n  <div class=\"pipe-arrow\">➔</div>\n  <div class=\"pipe-step\">\n    <div class=\"pipe-step-num\">5</div>\n    <div class=\"pipe-step-title\">Implement</div>\n    <div class=\"pipe-step-desc\">Live production deployment</div>\n  </div>\n  <div class=\"pipe-arrow\">➔</div>\n  <div class=\"pipe-step\">\n    <div class=\"pipe-step-num\">6</div>\n    <div class=\"pipe-step-title\">Monitor</div>\n    <div class=\"pipe-step-desc\">Review & analyze metrics</div>\n  </div>\n  <div class=\"pipe-arrow\">➔</div>\n  <div class=\"pipe-step\">\n    <div class=\"pipe-step-num\">7</div>\n    <div class=\"pipe-step-title\">Repeat</div>\n    <div class=\"pipe-step-desc\">Replicate & optimize standard</div>\n  </div>\n</div>\n",
          "table": {
            "headers": [
              "Step #",
              "Lifecycle Step Name",
              "Core Activity",
              "Exam Rationale"
            ],
            "rows": [
              [
                "Step 1",
                "Define your goals",
                "Establish the core reason and outcome expected from the process",
                "Clarifies the business purpose before committing resources"
              ],
              [
                "Step 2",
                "Plan and map your process",
                "Determine the detailed architectural strategies and flowchart steps needed",
                "Visualizes the complete operational workflow from start to finish"
              ],
              [
                "Step 3",
                "Set actions and assign stakeholders",
                "Distribute individual tasks to specific team members and automated machines",
                "Ensures strict role accountability for each process activity"
              ],
              [
                "Step 4",
                "Test the process",
                "Run the process on a small-scale, sandboxed environment and measure performance",
                "Uncovers bugs, bottlenecks, and workflow friction before live user exposure"
              ],
              [
                "Step 5",
                "Implement the process",
                "Deploy the tested process into the live enterprise operational environment",
                "Transition to full-scale, active business execution"
              ],
              [
                "Step 6",
                "Monitor the results",
                "Review, analyze, and benchmark real-time performance against baseline goals",
                "Verifies whether process targets and efficiencies are actually achieved"
              ],
              [
                "Step 7",
                "Repeat",
                "Replicate, standardize, and iteratively optimize the process across teams",
                "Drives enterprise-wide scalability and continuous business improvement"
              ]
            ]
          },
          "tldr": "A business process links tasks to deliver a service/product. Its lifecycle follows 7 steps: Define Goals ➔ Plan/Map ➔ Set Actions ➔ Test ➔ Implement ➔ Monitor ➔ Repeat."
        },
        {
          "heading": "2. Business Process Integration (BPI) & IT Environments",
          "points": [
            "**Business Process Integration (BPI)**: Allows for the automation of business processes, integration of systems and services, and secure sharing of data across numerous enterprise applications. Connects systems and information efficiently.",
            "**7 Core Benefits of BPI**: 1) *Services Integration*, 2) *Simplify Operations*, 3) *Lower Operating Costs*, 4) *Improve Output Quality*, 5) *Enhance Employee Productivity*, 6) *Standardize Workflows*, 7) *Smart Services Delivery*.",
            "**IT Environment**: An integrated collection of technology components that serves the needs of its users and the owner of the resulting system.",
            "**3 Components of an IT Environment**:",
            "• 1. **Computing Platforms**: Server hardware, cloud instances, OS, virtualization.",
            "• 2. **Applications / Apps**: Web applications, CRM, ERP, backend databases.",
            "• 3. **Connectivity (Networking)**: Wireless (WiFi, 3G/4G/5G, Bluetooth), Wired (Twisted copper pair, Fiber optic), Personal (Bluetooth), Local (Ethernet), Distance/Wide-area (DSL, fiber backbones).",
            "**IT Environment Decision Triad (Purposes)**:",
            "• **Needs**: Functionality must address purpose; Cost must be affordable; Reliability must be reasonable.",
            "• **Rules**: Government laws and regulations; Internal policies imposed by system owners.",
            "• **Choices**: Balancing owner's needs, mandatory compliance rules, and available affordable technology."
          ],
          "table": {
            "headers": [
              "IT Environment Triad",
              "Guiding Principle",
              "Key Considerations for System Integration"
            ],
            "rows": [
              [
                "Needs",
                "Environment must functionally solve the business problem reliably and affordably",
                "Must balance performance benchmarks against budget constraints and uptime guarantees (SLA)"
              ],
              [
                "Rules",
                "External laws and owner regulations govern how the IT environment operates",
                "Compliance with Data Privacy Act, industry cybersecurity mandates, and internal audit policies"
              ],
              [
                "Choices",
                "Selecting technology based on intersection of Needs, Rules, and Cost",
                "Choosing between on-premise servers vs cloud SaaS, proprietary software vs open source"
              ]
            ]
          },
          "trap": "Exam Trap: IT Environment Connectivity includes Personal (Bluetooth), Local (Ethernet), and Distance (DSL/Wide-Area), wired through copper/fiber or wireless through WiFi/cellular."
        },
        {
          "heading": "3. Organizational Structures (Centralized vs. Decentralized & 4 Types)",
          "points": [
            "**Organizational Structure**: A system outlining how certain activities (rules, roles, responsibilities) are directed in order to achieve the goals of an organization; determines how information flows between organizational levels.",
            "**Centralized vs. Decentralized**:",
            "• **Centralized**: Hierarchical decision-making; different branches follow identical, uniform processes; typical of large, established corporations.",
            "• **Decentralized**: Democratic decision-making; different branches adapt to their specific localized needs; typical of small, agile organizations.",
            "**4 Core Types of Organizational Structures**:"
          ],
          "table": {
            "headers": [
              "Structure Type",
              "Defining Characteristics",
              "Key Advantages",
              "Key Disadvantages"
            ],
            "rows": [
              [
                "1. Functional Structure",
                "Bureaucratic structure dividing the firm into specialized departments (Finance, Marketing, HR, Admin) to ensure uniformity; highly centralized",
                "• Deep employee specialization & experience\n• High operational standardization\n• Clear communication & economies of scale",
                "• Lack of variety and job enrichment\n• Heavy bureaucracy and paperwork\n• Siloed departments compromise cross-functional needs"
              ],
              [
                "2. Divisional / Multidivisional",
                "Common in large enterprises; parent organization owns semi-autonomous subsidiaries/divisions operating under the same brand",
                "• Senior management time freed up for strategy\n• Greater localized market knowledge\n• Faster divisional decision speed",
                "• Costly duplication of services and staff\n• Coordination between divisions is difficult\n• Lack of central specialization"
              ],
              [
                "3. Flatarchy Structure",
                "Widely used among tech startups; flattens the hierarchy and chain of command, granting employees great autonomy",
                "• Eliminates bureaucratic red tape\n• Extremely fast communication and agile pivots\n• Fosters high innovation and employee ownership",
                "• Lack of supervision and structure\n• Role confusion and overlapping work\n• Can descend into organizational chaos as company scales"
              ],
              [
                "4. Matrix Structure",
                "Grid organizational layout where employees report to more than one manager (dual reporting; solid vs dotted line)",
                "• Highly flexible sharing of specialized personnel\n• Bridges functional expertise with project delivery",
                "• Conflict between competing project & department managers\n• Blurred accountability and communication confusion\n• Higher meeting overhead"
              ]
            ]
          },
          "tldr": "Functional is departmental and centralized; Divisional decentralizes subsidiaries under one brand; Flatarchy flattens startup hierarchy; Matrix uses dual reporting managers."
        }
      ]
    },
    {
      "id": "sia-cp5",
      "subject": "SIA101",
      "week": "Week 6",
      "title": "SIA Acquisition & Sourcing",
      "badge": "Checkpoint 5 (SIA)",
      "description": "Procurement, Sourcing, and Acquisition Process, Hardware & Software Acquisition stages, Sourcing Requirements & Market Survey, Determining Source of Supply (Local, National, International), Sole vs Single Sourcing, RFQ & Sealed Bidding, Vendor Screening, and In-Sourcing advantages & disadvantages.",
      "digest": [
        {
          "heading": "1. Procurement Sourcing & Acquisition Process",
          "points": [
            "**Procurement Process Flow**: Requests for procurement are formalized in a **Purchase Requisition Order** and submitted to the procurement unit to be executed under strict organizational guidelines.",
            "**Sourcing**: Activities aimed at identifying, evaluating, assessing, selecting, and engaging with the best suppliers.",
            "**Hardware & Software Acquisition Workflow** encompasses 3 core stages:",
            "1. **Requirements Analysis**: Technical sizing, user stories, hardware compatibility.",
            "2. **Request for Proposal (RFP) / Request for Quotation (RFQ)**: Formal solicitation sent to vetted vendors.",
            "3. **Vendor Selection & Award**: Bid evaluation, scoring, reference verification, and contracting."
          ],
          "diagramHtml": "\n<div class=\"diagram-header\">\n  <span class=\"diagram-title\">📦 Sourcing & Procurement Decision Flowchart</span>\n  <span class=\"diagram-badge\">Policy-Driven Sourcing</span>\n</div>\n<div class=\"diagram-pipeline\">\n  <div class=\"pipe-step\">\n    <div class=\"pipe-step-num\">1</div>\n    <div class=\"pipe-step-title\">Purchase Requisition</div>\n    <div class=\"pipe-step-desc\">Formal request submitted to procurement unit</div>\n  </div>\n  <div class=\"pipe-arrow\">➔</div>\n  <div class=\"pipe-step\">\n    <div class=\"pipe-step-num\">2</div>\n    <div class=\"pipe-step-title\">Market Survey</div>\n    <div class=\"pipe-step-desc\">Assess quantities, quality, pricing & specs</div>\n  </div>\n  <div class=\"pipe-arrow\">➔</div>\n  <div class=\"pipe-step\">\n    <div class=\"pipe-step-num\">3</div>\n    <div class=\"pipe-step-title\">Source of Supply</div>\n    <div class=\"pipe-step-desc\">First Principle: Source locally/in-country first</div>\n  </div>\n  <div class=\"pipe-arrow\">➔</div>\n  <div class=\"pipe-step\">\n    <div class=\"pipe-step-num\">4</div>\n    <div class=\"pipe-step-title\">Tender & RFQ</div>\n    <div class=\"pipe-step-desc\">Sole/Single Sourcing or Sealed Bidding</div>\n  </div>\n  <div class=\"pipe-arrow\">➔</div>\n  <div class=\"pipe-step\">\n    <div class=\"pipe-step-num\">5</div>\n    <div class=\"pipe-step-title\">Vendor Screening</div>\n    <div class=\"pipe-step-desc\">Questionnaire, References & Anti-Terrorism checks</div>\n  </div>\n</div>\n",
          "table": {
            "headers": [
              "Acquisition Stage",
              "Core Responsibilities",
              "Primary Output Document"
            ],
            "rows": [
              [
                "1. Requirements Analysis",
                "Determine functional workload, concurrent users, OS compatibility, network bandwidth, and SLA needs",
                "Detailed Software / Hardware Specifications Document"
              ],
              [
                "2. Request for Proposal (RFP)",
                "Issue formal tender documents inviting vendors to submit technical architectures, timelines, and pricing",
                "RFP / RFQ Tender Package"
              ],
              [
                "3. Vendor Selection",
                "Score bids against criteria, check references, conduct compliance checks, negotiate contract",
                "Vendor Selection Matrix & Final Executed Supply Contract"
              ]
            ]
          },
          "tldr": "Procurement starts with a Purchase Requisition Order, advances through Sourcing (evaluating suppliers), and completes Acquisition across 3 stages: Requirements Analysis ➔ RFP ➔ Vendor Selection."
        },
        {
          "heading": "2. Market Survey & Determining Source of Supply",
          "points": [
            "**Market Survey**: Essential due-diligence research conducted before purchasing to establish realistic market parameters.",
            "**5 Core Elements Evaluated in a Market Survey**:",
            "1. **Quantities Available** (can the market fulfill needed volume?)",
            "2. **Quality Standards** (do items meet engineering durability and compliance thresholds?)",
            "3. **Pricing** (market cost benchmark to prevent inflated contractor bids)",
            "4. **Source and Origin of Items** (provenance, counterfeit risk, supply chain reliability)",
            "5. **Technical Specifications** (compatibility with existing SIA infrastructure).",
            "**Determining Source of Supply (The Golden First Principle)**:",
            "> *'The first principle should be to source all commodities **locally and in-country**, as close to the field as possible to reduce transport time and cost.'*",
            "**Sourcing Internationally**: Used when materials are unavailable locally or nationally in the quantities required. Options: Pre-positioned emergency stocks (e.g. CARE International), known international suppliers, pre-supply corporate agreements, or benchmarking peer NGOs."
          ],
          "table": {
            "headers": [
              "Supply Tier",
              "Geographic Scope",
              "When to Select",
              "Strategic Benefit"
            ],
            "rows": [
              [
                "1. Local Sourcing",
                "City or immediate operational region",
                "Always first choice whenever local capacity exists (The First Principle)",
                "Minimizes transport time, reduces freight costs, and supports local economy"
              ],
              [
                "2. National Sourcing",
                "Within the domestic national borders",
                "When local regional vendors cannot supply required volumes or technical standards",
                "Reliable domestic shipping, simpler legal jurisdiction, and no import tariffs"
              ],
              [
                "3. International Sourcing",
                "Overseas manufacturers and global suppliers",
                "Only when commodities are unavailable locally or nationally in needed quantities",
                "Access to specialized global technologies, bulk volume discounts, and pre-positioned agreements"
              ]
            ]
          },
          "trap": "Exam Trap: Always remember the FIRST PRINCIPLE of sourcing: Source commodities LOCALLY and IN-COUNTRY as close to the field as possible to reduce transport time and cost!"
        },
        {
          "heading": "3. Vendor Selection: Sole vs. Single Sourcing & Screening",
          "points": [
            "**Methods for Vendor Selection**:",
            "• **Sole Sourcing**: ONLY ONE source is available in the entire market (e.g., local municipal water utility company, patented sole-supplier).",
            "• **Single Sourcing**: MULTIPLE suppliers are available in the market, but the organization deliberately selects only ONE preferred supplier (e.g. standardizing on Dell servers for volume discounts).",
            "• **Request for Quotations (RFQ) & Sealed Bidding Process**: Governed by strict bidding thresholds (e.g., CARE CI Harmonization Procurement Policy). Uses a *Tracking Sheet for Sealed Bids* and independent bid evaluation committees.",
            "**Vendor Screening (3 Mandatory Hurdles Before Awarding Contract)**:",
            "1. Request potential suppliers to complete a comprehensive **Vendor Questionnaire**.",
            "2. Check **References**, preferably from other reputable NGOs or corporate peers.",
            "3. Screen all potential vendors against **Anti-Terrorism and Debarred Listings** for both individuals and corporate organizations."
          ],
          "table": {
            "headers": [
              "Procurement Method",
              "Suppliers Available in Market",
              "Mechanism & Governing Rules",
              "Typical Use Case"
            ],
            "rows": [
              [
                "Sole Sourcing",
                "Exactly ONE (1)",
                "Direct negotiation; no competition exists in the open market",
                "Public utilities (water concessionaire, power grid) or patented proprietary hardware"
              ],
              [
                "Single Sourcing",
                "Multiple (> 1)",
                "Buyer selects one preferred vendor to achieve volume pricing or technical consistency",
                "Selecting Cisco as sole network switch provider across all campus branches"
              ],
              [
                "Request for Quotations (RFQ)",
                "Multiple (> 1)",
                "Standard RFQ issued; responses tracked on Tracking Sheet for Sealed Bids",
                "Standard commercial procurement within threshold policies"
              ],
              [
                "Sealed Bidding",
                "Multiple (> 1)",
                "Confidential bids submitted and opened simultaneously by a formal bid committee",
                "High-value public infrastructure, government systems, and large enterprise ERP contracts"
              ]
            ]
          },
          "tldr": "Sole Sourcing = Only 1 supplier exists in the market. Single Sourcing = Multiple exist, but organization chooses only 1. Preferred vendors must pass questionnaire, references, and anti-terrorism screening."
        },
        {
          "heading": "4. In-Sourcing: Trade-Off Analysis (Pros & Cons)",
          "points": [
            "**In-Sourcing Definition**: The assignment of a project or service to a person or department **within the company**, rather than hiring a third-party external vendor or contractor.",
            "Deciding between In-sourcing vs Outsourcing is an essential architectural and governance decision."
          ],
          "table": {
            "headers": [
              "In-Sourcing Advantages",
              "Detailed Business Impact",
              "In-Sourcing Disadvantages",
              "Detailed Business Impact"
            ],
            "rows": [
              [
                "Competitive Advantage",
                "Retains intellectual property and internal skills that differentiate company from rivals",
                "High Overhead Cost",
                "Must maintain permanent salaries, benefits, office space, hardware, and ongoing training"
              ],
              [
                "Trade Secrets",
                "Proprietary code, customer data, and trade formulas remain strictly within internal walls",
                "Capabilities Limitations",
                "Internal employees may lack cutting-edge specialized expertise available from specialized vendors"
              ],
              [
                "Organization Culture",
                "Internal staff share company values, loyalty, and intimate familiarity with company culture",
                "Loss of Core Focus",
                "Managing internal IT operations distracts executive leadership from the core business mission"
              ],
              [
                "Long-Term Cost Control",
                "Eliminates high external agency consulting rates and contractor markups on routine tasks",
                "Scalability Friction",
                "Difficult to rapidly scale internal headcount up or down based on short-term project demands"
              ],
              [
                "Direct Command & Control",
                "Complete managerial authority over task prioritization, timelines, and technical standards",
                "Technological Stagnation",
                "Internal teams can fall behind emerging industry best practices without outside exposure"
              ]
            ]
          },
          "trap": "Exam Trap: Note that COST is listed under BOTH advantages (long-term elimination of vendor markups) AND disadvantages (high permanent payroll and infrastructure overhead) of in-sourcing!"
        }
      ]
    },
    {
      "id": "ar-cp1",
      "subject": "AR101",
      "week": "Week 2",
      "title": "Introduction to Computer Architecture & Organization",
      "badge": "Checkpoint 1",
      "description": "Functional units, Von-Neumann Stored Program Architecture, 4 main memory divisions, word addressing, and low vs. high-level language trade-offs.",
      "digest": [
        {
          "heading": "1. What is a Digital Computer?",
          "points": [
            "A fast electronic calculating machine that **accepts digitized input information**, processes it according to internally stored instructions (**program**), and produces resulting **output information**.",
            "Fundamental operational cycle: **Input -> Storage / Processing -> Output**, with all activities orchestrated by the **Control Unit (CU)**."
          ]
        },
        {
          "heading": "2. Types of Computers & Workload Profiles",
          "points": [
            "**Personal Computers (PCs)**: Everyday computing for individual users (laptops, desktop systems).",
            "**Workstations**: High-performance single-user engineering machines with advanced graphics, large memory, and specialized computational capabilities.",
            "**Mainframes**: Enterprise-level multi-user systems built for massive transaction throughput, heavy batch processing, and 24/7 mission-critical reliability.",
            "**Supercomputers**: Ultra-high-speed clusters engineered for massive parallel mathematical calculations (weather modeling, aerodynamics, nuclear simulations, cryptography)."
          ]
        },
        {
          "heading": "3. The 5 Functional Units of a Computer",
          "points": [
            "**1. Input Unit**: Accepts coded information from humans or external devices (keyboard, mouse, touch screen, scanner, barcode reader, microphone, disks).",
            "**2. Memory Unit / Primary Storage**: Holds active programs and data; operates at high electronic speeds.",
            "**3. Processor / CPU**: Operates roughly **10 times faster** than main memory. Divided into the **ALU (Arithmetic & Logic Unit)** and **Control Unit (CU)**.",
            "**4. Output Unit**: Sends processed data to the outside world (screens, printers, plotters, audio synthesizers).",
            "**5. I/O & Interconnections**: System buses linking CPU, memory, and peripherals."
          ],
          "tldr": "Processor (ALU + CU) executes instructions 10x faster than memory access speeds."
        },
        {
          "heading": "4. Memory Unit Divisions & Word Addressing",
          "points": [
            "Information in Main Memory is organized into fixed-size groups of bits called **WORDS**.",
            "Each word has a distinct numerical **Address** (e.g., location 0, 1, 2, ... 4,194,303).",
            "**4 Main Memory Functional Divisions**:",
            "  • **Input Storage Area**: Buffers raw input data arriving from input devices.",
            "  • **Working Storage Space**: Holds intermediate data and variable values during calculations.",
            "  • **Output Storage Area**: Holds completed results formatted for transfer to output devices.",
            "  • **Program Storage Area**: Stores the actual machine instructions being executed.",
            "**Secondary / Auxiliary Storage**: Non-volatile storage (hard disks, optical media) used for permanent, bulk data accessed less frequently."
          ],
          "trap": "Exam Trap: Do not confuse Working Storage Space (intermediate calculation values) with Program Storage Area (which holds the instructions themselves)!"
        },
        {
          "heading": "5. Von-Neumann Architecture & Basic Operations",
          "points": [
            "**Von-Neumann Architecture**: Also known as **Stored Program Architecture** or **Fetch-Decode-Execute Architecture**.",
            "Core premise: Instructions and data share the **same unified memory space** and are accessed via common buses.",
            "4 Basic Operations: 1) Accepts information; 2) Information fetched into ALU and processed; 3) Processed info leaves via Output Unit; 4) Control Unit directs all internal machine operations."
          ]
        },
        {
          "heading": "6. Programming Language Generations & Trade-offs",
          "points": [
            "**Hierarchy**: Machine Language (pure binary) -> Assembly Language (mnemonics, 1-to-1) -> High-Level Language (C, C++, Java, Python) -> 4GL (SQL, declarative).",
            "**Advantages of High-Level over Low-Level**:",
            "  • **Easy to Learn**: Human-readable syntax, structured flow.",
            "  • **Predefined Functions**: Vast built-in libraries.",
            "  • **Portability**: Recompiles across different hardware architectures.",
            "**Advantages of Low-Level over High-Level**:",
            "  • **Compact Code**: Minimal binary footprint, no runtime overhead.",
            "  • **Speed**: Blazing-fast direct hardware execution.",
            "  • **Flexible**: Direct register, memory address, and flag manipulation."
          ]
        }
      ]
    },
    {
      "id": "ar-cp2",
      "subject": "AR101",
      "week": "Week 3",
      "title": "Main Memory & Central Processing Unit (CPU)",
      "badge": "Checkpoint 2",
      "description": "Internal registers (MAR, MDR, PC, IR), Read/Write cycles, step-by-step trace of ADD LOCA, R0, instruction address formats (0, 1, 2, 3-address), and bus structures.",
      "digest": [
        {
          "heading": "1. Internal CPU Registers & Interconnections",
          "points": [
            "**PC (Program Counter)**: Holds the memory address of the next instruction to be fetched and executed. Automatically incremented during fetch.",
            "**MAR (Memory Address Register)**: Holds the address sent to the memory address bus for read/write operations.",
            "**MDR (Memory Data Register)**: Holds the data word read from memory or staged to be written into memory.",
            "**IR (Instruction Register)**: Holds the machine instruction currently being decoded and executed by the Control Unit.",
            "**General Purpose Registers (R0, R1, ... R(n-1))**: High-speed internal registers for intermediate operands."
          ]
        },
        {
          "heading": "2. Main Memory Read and Write Operations",
          "points": [
            "**Fetch / Read Operation (Memory -> CPU)**:",
            "  1. CPU sends target address from PC or register into **MAR**.",
            "  2. CPU issues **READ** signal to memory.",
            "  3. Addressed WORD is read into **MDR**.",
            "  4. Contents of Main Memory remain **unchanged (non-destructive read)**.",
            "**Store / Write Operation (CPU -> Memory)**:",
            "  1. CPU sends destination address into **MAR**.",
            "  2. CPU places data word into **MDR** and sends **WRITE** signal.",
            "  3. Data in MDR is written to memory, **destroying / overwriting** old content."
          ]
        },
        {
          "heading": "3. Complete Step-by-Step Trace: ADD LOCA, R0",
          "points": [
            "Suppose instruction is at memory address `INSTR` and `PC` initially holds `INSTR`:",
            "  • **Step 1**: `MAR <- [PC]` (Load instruction address into MAR)",
            "  • **Step 2**: Issue READ signal. `MDR <- [Memory]`, `PC <- [PC] + 1` (Fetch instruction word and increment PC)",
            "  • **Step 3**: `IR <- [MDR]` (Transfer instruction into IR for decoding)",
            "  • **Step 4**: `MAR <- [LOCA]` (Extract operand address LOCA from IR and load into MAR)",
            "  • **Step 5**: Issue READ signal. `MDR <- [Memory]` (Read operand value into MDR)",
            "  • **Step 6**: `R0 <- [R0] + [MDR]` (ALU computes sum and stores result in R0)"
          ],
          "tldr": "Execution requires two memory reads: first to fetch the instruction word into IR, second to fetch the operand at LOCA into MDR."
        },
        {
          "heading": "4. The 7 Universal CPU Operating Steps",
          "points": [
            "1. Fetching the instruction from memory.",
            "2. Incrementing the Program Counter (PC).",
            "3. Decoding the instruction in the IR.",
            "4. Determining the location of data in memory (effective address calculation).",
            "5. Fetching required operand data into an internal CPU register.",
            "6. Executing the instruction via ALU / CU.",
            "7. Return to step 1 (repeat cycle for next instruction)."
          ]
        },
        {
          "heading": "5. Instruction Address Notations (0, 1, 2, 3 Addresses)",
          "points": [
            "An instruction consists of an **Op-code field** (e.g. 8 bits) and **Addressing Information** (e.g. 24 bits).",
            "**0-Address Instruction**: Operands are defined implicitly (e.g., Stack instructions or Accumulator operations like `INC`, `DEC`).",
            "**1-Address Instruction**: Uses an implicit **Accumulator (ACC)** register. Example: `LOAD A` (ACC <- [A]), `ADD B` (ACC <- [B] + [ACC]), `STORE C` ([C] <- ACC).",
            "**2-Address Instruction**: `ADD A, B` -> `A <- [A] + [B]`. Register/memory `A` serves as both source and destination (overwrites original A).",
            "**3-Address Instruction**: `ADD A, B, C` -> `A <- [B] + [C]`. `B` and `C` are pure sources; `A` is pure destination. Source contents are preserved!"
          ],
          "trap": "Exam Trap: In 2-address instructions (ADD A, B), operand A is overwritten. In 3-address instructions (ADD A, B, C), both source operands B and C remain untouched!"
        },
        {
          "heading": "6. Bus Structures: Single-Bus vs Two-Bus Systems",
          "points": [
            "**Bus**: A set of electrical wires transmitting data, addresses, and control signals.",
            "**3 Main Bus Groups**: 1) Data Bus (bidirectional data); 2) Address Bus (unidirectional memory/port address); 3) Control Bus (READ, WRITE, timing, interrupts).",
            "**Single-Bus Structure**: All units (CPU, Memory, I/O) share a single common bus. Simple and cost-effective, but causes bottleneck as only one transfer can occur at any instant.",
            "**Two-Bus Structure**:",
            "  • *Configuration 1*: Memory Bus connects CPU <-> Memory; separate I/O Bus connects CPU <-> I/O devices.",
            "  • *Configuration 2*: I/O Bus connects I/O <-> Memory; separate Memory Bus connects Memory <-> CPU."
          ]
        }
      ]
    },
    {
      "id": "ar-cp3",
      "subject": "AR101",
      "week": "Week 4",
      "title": "Intel Microprocessors, Logical & Physical Memory",
      "badge": "Checkpoint 3",
      "description": "History (4004 to 8086/8088), EU vs BIU architecture, 8086 Even/Odd memory banks, register set, 6 status flags + 3 control flags, and physical address calculation.",
      "digest": [
        {
          "heading": "1. Chronological History of Intel Microprocessors",
          "points": [
            "**1971 - Intel 4004**: World's first single-chip microprocessor. **4-bit** CPU, addressed up to 4,096 4-bit locations (2,048 bytes / 2 KB).",
            "**1972 - Intel 8008**: **8-bit** CPU, 16,384 bytes (16 KB) memory capacity, 48 instructions.",
            "**1973 - Intel 8080**: 8-bit CPU, 64 KB memory, used in the historic Altair 8800 microcomputer.",
            "**1978 - Intel 8085**: 8-bit CPU, 64 KB memory, simplified +5V single power supply.",
            "**1978 - Intel 8086**: Landmark **16-bit** CPU, 20-bit address bus (addresses **1 MB** of RAM), 16-bit data bus, instruction execution in as little as 14 ns, hardware multiply & divide.",
            "**1979 - Intel 8088**: Same internal 16-bit architecture as 8086, but with an **8-bit external data bus**. Selected by IBM for the original IBM PC (Model 5150) to reduce manufacturing costs."
          ]
        },
        {
          "heading": "2. Logical vs Physical Memory & 8086 Bank Organization",
          "points": [
            "**Logical Memory**: The conceptual 1 MB linear address space (`00000H` to `FFFFFH`) recognized by the OS.",
            "**Physical Memory**: The physical RAM chips installed on the motherboard.",
            "**8086 Odd and Even Memory Banks**:",
            "  • The 1 MB physical memory is partitioned into two **512 KB banks**:",
            "  • **Even Bank (Lower Bank)**: Addresses `00000H, 00002H, ... FFFFEH`. Activated when address line A_0 = 0. Connected to lower data lines D_0-D_7.",
            "  • **Odd Bank (Upper Bank)**: Addresses `00001H, 00003H, ... FFFFFH`. Activated when \\overline{\\text{BHE}} = 0 (Bus High Enable). Connected to higher data lines D_8-D_{15}.",
            "  • Aligned 16-bit words at an even address are read in **one memory cycle**; misaligned words require **two cycles**."
          ],
          "tldr": "Even bank: A0 = 0 (D0-D7). Odd bank: BHE# = 0 (D8-D15). Enables 16-bit transfers in 1 cycle."
        },
        {
          "heading": "3. 8086 Internal Architecture: EU vs BIU",
          "points": [
            "The 8086/8088 is split into two independent asynchronous processing units:",
            "**1. BIU (Bus Interface Unit)**:",
            "  • Manages external bus transfers (instruction fetch, data read/write).",
            "  • Contains Segment Registers (`CS, DS, SS, ES`), Instruction Pointer (`IP`), and bus control logic.",
            "  • Computes 20-bit Physical Addresses.",
            "  • Holds the **Instruction Prefetch Queue**: **6 bytes** in 8086, **4 bytes** in 8088.",
            "**2. EU (Execution Unit)**:",
            "  • Decodes and executes instructions received from the prefetch queue.",
            "  • Contains the 16-bit ALU, Control Unit, 8 General Purpose Registers, and the Flag Register (PSW)."
          ]
        },
        {
          "heading": "4. 8086 Register Architecture Model",
          "points": [
            "**General Purpose Data Registers (16-bit, split into 8-bit High/Low)**:",
            "  • `AX` (`AH`/`AL`): Accumulator (arithmetic, logic, I/O).",
            "  • `BX` (`BH`/`BL`): Base Register (can serve as memory base address pointer).",
            "  • `CX` (`CH`/`CL`): Count Register (loop counter, shift/rotate count).",
            "  • `DX` (`DH`/`DL`): Data Register (multiplication overflow, 16-bit port addresses).",
            "**Pointer & Index Registers (16-bit)**:",
            "  • `SP` (Stack Pointer): Offset from SS to top of stack.",
            "  • `BP` (Base Pointer): Offset from SS for stack frame parameter access.",
            "  • `SI` (Source Index): Offset from DS for source data strings.",
            "  • `DI` (Destination Index): Offset from ES for destination data strings.",
            "**Segment Registers**: `CS` (Code), `DS` (Data), `SS` (Stack), `ES` (Extra).",
            "**IP (Instruction Pointer)**: Holds offset of next instruction in CS."
          ]
        },
        {
          "heading": "5. Processor Status Word (PSW): 6 Status + 3 Control Flags",
          "points": [
            "16-bit register containing 9 active 1-bit flags (7 bits are unused):",
            "**6 Conditional / Status Flags** (updated by arithmetic/logic results):",
            "  • **CF (Carry Flag, bit 0)**: 1 if carry out or borrow occurs at MSB.",
            "  • **PF (Parity Flag, bit 2)**: 1 if lower 8 bits of result contain an **EVEN number of 1s**.",
            "  • **AF (Auxiliary Flag, bit 4)**: 1 if carry out occurs from bit 3 to bit 4 (BCD half-carry).",
            "  • **ZF (Zero Flag, bit 6)**: 1 if result is zero (0000\\text{H}).",
            "  • **SF (Sign Flag, bit 7)**: 1 if MSB of result is 1 (negative signed value).",
            "  • **OF (Overflow Flag, bit 11)**: 1 if signed arithmetic produces out-of-range overflow.",
            "**3 Control Flags** (set by instructions to control CPU operations):",
            "  • **TF (Trap Flag, bit 8)**: Enables single-step debugging mode.",
            "  • **IF (Interrupt Enable, bit 9)**: Enables (1) or disables (0) maskable hardware interrupts.",
            "  • **DF (Direction Flag, bit 10)**: 0 = auto-increment (forward), 1 = auto-decrement (backward) for string instructions."
          ]
        },
        {
          "heading": "6. Generating Physical Addresses: Formula & Worked Examples",
          "points": [
            "**The Master Formula**:",
            "\\text{Physical Address (PA)} = (\\text{Segment Base Address} x 10\\text{H}) + \\text{Offset Address}",
            "*(Multiplying by 10\\text{H} shifts the base left by 1 hexadecimal digit / 4 binary bits)*.",
            "**Example 1**: Base = `1234H`, Offset = `0022H`",
            "  • `1234H x 10H = 12340H`",
            "  • `12340H + 0022H = 12362H`",
            "**Example 2**: Base = `123AH`, Offset = `341BH`",
            "  • `123AH x 10H = 123A0H`",
            "  • `123A0H + 341BH = 157BBH`",
            "**Lecture Practice Exercises**:",
            "  1. Base = `4321H`, Offset = `1266H` -> `43210H + 1266H = 44476H`",
            "  2. Base = `ABCDH`, Offset = `3623H` -> `ABCD0H + 3623H = AF303H`",
            "  3. Base = `AE6DH`, Offset = `43A1H` -> `AE6D0H + 43A1H = B2A71H`"
          ]
        }
      ]
    },
    {
      "id": "ar-cp4",
      "subject": "AR101",
      "week": "Week 5",
      "title": "Memory Segments, Stack Operations & 7 Addressing Modes",
      "badge": "Checkpoint 4",
      "description": "64KB segmentation, 8086 LIFO stack mechanics, PUSH/POP address trace, the 7 data addressing modes with segment selection rules and exercises.",
      "digest": [
        {
          "heading": "1. 64KB Memory Segmentation Principles",
          "points": [
            "Main memory is logically partitioned into segments of **64 KB (65,536 bytes)**.",
            "Each segment represents an independently addressable unit of 64K consecutive byte locations.",
            "**4 Primary Segments**:",
            "  • **Code Segment (CS)**: Contains executable program instructions.",
            "  • **Data Segment (DS)**: Contains program variables and static data.",
            "  • **Stack Segment (SS)**: Contains the LIFO runtime stack.",
            "  • **Extra Segment (ES)**: Secondary data segment commonly used for string transfers."
          ]
        },
        {
          "heading": "2. 8086 LIFO Stack Mechanics",
          "points": [
            "**LIFO Principle**: Last In, First Out.",
            "**Stack Size**: 64 KB (organized as 32,768 16-bit words).",
            "**Growth Direction**: The stack **grows downward toward lower memory addresses**!",
            "**Bottom of Stack**: `SS x 10H + FFFFH` (highest address in stack segment).",
            "**Top of Stack (TOS)**: `SS x 10H + SP` (current lowest occupied address).",
            "Upon microcomputer start-up, `SP` is initialized to `FFFFH`."
          ],
          "tldr": "Stack grows downward (toward lower addresses). PUSH decrements SP by 2; POP increments SP by 2."
        },
        {
          "heading": "3. Step-by-Step PUSH and POP Tracing",
          "points": [
            "**PUSH Instruction**: `PUSH Source`",
            "  1. Decrement SP by 2: `New SP = SP - 2`",
            "  2. Store High byte at physical address `(SS x 10H) + New SP + 1`",
            "  3. Store Low byte at physical address `(SS x 10H) + New SP`",
            "  *Lecture Example*: `BX = 1234H`, `SS = 1800H`, `SP = 3A74H`",
            "  Initial TOS = `18000H + 3A74H = 1BA74H`",
            "  After `PUSH BX`: `New SP = 3A72H`. `BH (12H)` placed at `1BA73H`, `BL (34H)` placed at `1BA72H`. New TOS = `1BA72H`.",
            "**POP Instruction**: `POP Destination`",
            "  1. Load Low byte from physical address `(SS x 10H) + SP`",
            "  2. Load High byte from physical address `(SS x 10H) + SP + 1`",
            "  3. Increment SP by 2: `New SP = SP + 2`",
            "  *Lecture Example*: `SS = 1234H`, `SP = 281AH`",
            "  Initial TOS = `14B5AH`. After `POP CX`: `CL` loaded from `14B5AH`, `CH` loaded from `14B5BH`, `New SP = 281CH`. New TOS = `14B5CH`."
          ]
        },
        {
          "heading": "4. The 7 Data Addressing Modes of 8086",
          "points": [
            "**1. Register Addressing**: Operand is held directly inside an internal register (e.g. `MOV AX, CX`). No memory access required.",
            "**2. Immediate Addressing**: Operand is a constant value embedded directly in the instruction code (e.g. `MOV AL, 15H`, `MOV AX, 1A3FH`).",
            "**3. Direct Addressing**: Instruction contains the 16-bit Effective Address (offset) directly. Default segment is DS. (e.g. `MOV AX, BETA` where `BETA = 1234H` -> `PA = DS x 10H + 1234H`).",
            "**4. Register Indirect Addressing**: EA resides in a base register (`BX, BP`) or index register (`SI, DI`). (e.g. `MOV AX, [BX]` uses DS; `MOV CX, [BP]` uses SS!).",
            "**5. Register Relative Addressing (Base Addressing)**: EA = Base/Index register + displacement. (e.g. `MOV AX, [BX + 1000H]`, `MOV DI, SET[BX]`).",
            "**6. Base-Plus-Index Addressing**: EA = Base register (`BX` or `BP`) + Index register (`SI` or `DI`). (e.g. `MOV AX, [BX + SI]`).",
            "**7. Base-Relative-Plus-Index Addressing**: EA = Base register + Index register + displacement. (e.g. `MOV AX, [BX + SI + 0100H]`, `MOV AX, FILE[BX + DI]`)."
          ]
        },
        {
          "heading": "5. Default Segment Selection Rules & Exam Drills",
          "points": [
            "**Crucial Segment Rule**:",
            "  • If `BX`, `SI`, or `DI` is used as a pointer, the default segment is **DS**.",
            "  • If `BP` is used as a base pointer, the default segment is **SS**!",
            "**Lecture Addressing Mode Identification Answers**:",
            "  1. `ADD AX, FADEH` -> **Immediate Addressing** (constant data).",
            "  2. `CMP FADE, AX` -> **Direct Addressing** (direct memory address/variable).",
            "  3. `INC DH` -> **Register Addressing** (register operand).",
            "  4. `ADC [BP+1800H], BX` -> **Register Relative Addressing** (base BP + displacement).",
            "  5. `AND AGAIN[BP+SI], DS` -> **Base-Relative-Plus-Index Addressing** (BP + SI + displacement AGAIN).",
            "  6. `OR DX, [DI]` -> **Register Indirect Addressing** (index pointer).",
            "  7. `ADC AX, [BP+SI]` -> **Base-Plus-Index Addressing** (base BP + index SI)."
          ]
        }
      ]
    },
    {
      "id": "ar-cp5",
      "subject": "AR101",
      "week": "Week 6",
      "title": "Data Transfer Instructions & Register Tracing",
      "badge": "Checkpoint 5",
      "description": "Master table of 11 data transfer instructions, flags non-affectation rule, MOV and XCHG constraints, LEA vs MOV, and multi-step register execution traces.",
      "digest": [
        {
          "heading": "1. Nature of Data Transfer Instructions",
          "points": [
            "Data transfer instructions move byte or word data between registers, memory, and I/O ports.",
            "**CRITICAL EXAM AXIOM**: Data transfer instructions **DO NOT affect CPU flags**!",
            "*(Only `POPF` and `SAHF` affect flags, because their explicit sole purpose is updating the flag register)*."
          ],
          "trap": "Exam Trap: If asked what flags are affected by 'MOV AX, 0000H', the correct answer is NONE! Zero flag is NOT set by MOV!"
        },
        {
          "heading": "2. Master Table of 11 Data Transfer Instructions",
          "points": [
            "• **`MOV D, S`**: Copies Source to Destination (D ← S).",
            "• **`PUSH S`**: Pushes word S to Top of Stack (SP ← SP - 2).",
            "• **`POP D`**: Pops word from stack into D (SP ← SP + 2).",
            "• **`PUSHA`**: Pushes all 8 general registers onto stack in order (`AX, CX, DX, BX, SP, BP, SI, DI`).",
            "• **`POPA`**: Pops words from stack into all 8 general registers in reverse order.",
            "• **`XCHG D, S`**: Swaps contents of D and S ([D] \\leftrightarrow [S]).",
            "• **`IN D, S`**: Reads byte/word from I/O port into Accumulator (`AL` or `AX`).",
            "• **`OUT D, S`**: Writes byte/word from Accumulator (`AL` or `AX`) to I/O port.",
            "• **`XLAT`**: Translates byte in `AL` using lookup table in memory at `[BX + AL]` (`AL <- [BX + AL]`).",
            "• **`LAHF`**: Load `AH` with lower byte of flags register (`SF, ZF, AF, PF, CF`).",
            "• **`SAHF`**: Store `AH` into lower byte of flags register.",
            "• **`PUSHF`**: Pushes 16-bit Flag register (PSW) to stack.",
            "• **`POPF`**: Pops top stack word into Flag register (PSW)."
          ]
        },
        {
          "heading": "3. The 8 Classifications of 8086 Instructions",
          "points": [
            "1. Data Transfer Instructions (`MOV, PUSH, POP, XCHG, LEA`)",
            "2. Arithmetic Instructions (`ADD, SUB, MUL, DIV, INC, DEC`)",
            "3. Logic Instructions (`AND, OR, NOT, XOR, TEST`)",
            "4. Shift Instructions (`SHL, SHR, SAL, SAR`)",
            "5. Rotate Instructions (`ROL, ROR, RCL, RCR`)",
            "6. Flag Control Instructions (`CLC, STC, CMC, CLD, STD, CLI, STI`)",
            "7. Jump Instructions (`JMP, JZ, JNZ, JC, JNC, LOOP`)",
            "8. String Instructions (`MOVS, CMPS, SCAS, LODS, STOS`)"
          ]
        },
        {
          "heading": "4. Strict Rules & Restrictions for MOV and XCHG",
          "points": [
            "**MOV Rules**:",
            "  • **NO Memory-to-Memory**: Cannot do `MOV [LOC1], [LOC2]`. Must use a temporary register.",
            "  • **CS CANNOT be Destination**: `MOV CS, AX` is illegal (would corrupt instruction stream).",
            "  • **NO Immediate to Segment Register**: Cannot do `MOV DS, 1000H`. Must load into general register first: `MOV AX, 1000H` then `MOV DS, AX`.",
            "  • **Operand sizes must match**: `MOV AL, BX` is illegal (8-bit dest, 16-bit src).",
            "**XCHG Rules**:",
            "  • Neither operand can be **Immediate** (`XCHG AX, 1234H` is illegal).",
            "  • Neither operand can be a **Segment Register** (`XCHG DS, AX` is illegal).",
            "  • Memory-to-memory exchange is illegal (`XCHG [BX], [DI]` is illegal)."
          ]
        },
        {
          "heading": "5. LEA (Load Effective Address) vs MOV",
          "points": [
            "**Format**: `LEA Destination, Source`",
            "**Crucial Distinction**:",
            "  • `MOV AX, LIST` loads the **data stored inside memory** at location `LIST` into `AX`.",
            "  • `LEA AX, LIST` loads the **16-bit offset address itself** (`LIST`) into `AX`!",
            "**Lecture Example**:",
            "  • Given: `DS = 5000H`, `LIST = 1800H`, memory at `51800H` contains `22H`.",
            "  • `MOV AX, LIST` results in `AX` getting the value `22H`.",
            "  • `LEA BX, LIST` results in `BX` getting the address `1800H`."
          ]
        }
      ]
    },
    {
      "id": "ar-cp6",
      "subject": "AR101",
      "week": "Week 7",
      "title": "The Arithmetic Unit & Fast Adder Design",
      "badge": "Checkpoint 6",
      "description": "Sign-magnitude, 1's and 2's complement representations, Full Adder logic circuit, N-bit Ripple-Carry delay analysis, and Carry-Lookahead Adder (CLA) design.",
      "digest": [
        {
          "heading": "1. The Arithmetic & Logic Unit (ALU)",
          "points": [
            "The ALU is the digital circuitry inside the CPU that performs all arithmetic and logic operations.",
            "Basic operation in all digital computers is **addition and subtraction** of two numbers.",
            "All operations occur at the machine instruction level using basic logic functions: **AND, OR, NOT, and XOR**."
          ],
          "diagramHtml": "<div class=\"digest-ref-graphic-box\"><div class=\"digest-ref-graphic-header\"><span>⚡</span><strong>AR101 Logic Gates Graphical Reference & Truth Tables</strong><span class=\"week-pill\">Week 7</span></div><div class=\"digest-ref-img-wrapper\" onclick=\"window.reviewerApp.openImageModal('assets/logic_gates_reference.jpg', 'AR101 Logic Gates Graphical Reference')\"><img src=\"assets/logic_gates_reference.jpg\" alt=\"AR101 Logic Gates Graphical Reference\" class=\"digest-ref-img\"/><div class=\"digest-ref-hint\">🔍 Tap / Click to enlarge high-resolution schematic reference & truth tables</div></div></div>"
        },
        {
          "heading": "2. Signed Integer Representations: 3 Systems",
          "points": [
            "**1. Sign and Magnitude**:",
            "  • MSB represents the sign (0 = \\text{positive}, 1 = \\text{negative}). Remaining bits represent magnitude.",
            "  • Example: +5 = 0101_2, -5 = 1101_2.",
            "  • Drawback: Has two representations of zero (+0 = 0000_2 and -0 = 1000_2).",
            "**2. 1's Complement**:",
            "  • Negative values obtained by inverting each bit (0 \\to 1, 1 \\to 0).",
            "  • Example: +3 = 0011_2 \\implies -3 = 1100_2.",
            "  • Drawback: Still has two zeros (+0 = 0000_2 and -0 = 1111_2).",
            "**3. 2's Complement (Universal Hardware Standard)**:",
            "  • Obtained by subtracting positive number from 2^n, or by **adding 1 to 1's complement**.",
            "  • Example: +3 = 0011_2 \\to \\text{1's comp} = 1100_2 \\to +1 = 1101_2 (-3).",
            "  • **Key Advantages**: Only **one unique zero** (0000_2). Extra negative number (-8 in 4-bit, range: -2^{n-1} \\text{ to } +2^{n-1}-1). Subtraction performed via simple addition!"
          ],
          "tldr": "2's complement eliminates dual zero (+0 and -0) and provides range -2^(n-1) to +2^(n-1)-1."
        },
        {
          "heading": "3. Half Adder (HA) & Full Adder (FA) Architectures",
          "points": [
            "**Half Adder (HA)**: Adds two 1-bit inputs (A, B). Sum: S = A ⊕ B, Carry: C = A · B. Limitation: NO carry-in terminal, so it cannot cascade for multi-bit addition.",
            "**Full Adder using Two Half Adders and One OR Gate (Figure 3.1)**:",
            "  • Stage 1 (HA1): Computes intermediate sum S1 = A ⊕ B and carry C1 = AB.",
            "  • Stage 2 (HA2): Adds S1 and incoming carry Cin, yielding final Sum S = (A ⊕ B) ⊕ Cin and carry C2 = (A ⊕ B)Cin.",
            "  • Carry Combiner: OR gate produces Cout = C1 + C2 = AB + (A ⊕ B)Cin ≡ AB + BCin + ACin.",
            "  • Component Count: 2 XOR gates + 2 AND gates + 1 OR gate (5 total gates).",
            "  • Propagation Delay: Sum S = 2 * t_XOR; Carry-out Cout = t_XOR + t_AND + t_OR.",
            "**2-Level Combinational AND-OR Full Adder (Week 7 Slide 12)**:",
            "  • Flattened standard for ALU adders: s_i = x_i ⊕ y_i ⊕ c_i, c_{i+1} = x_i*y_i + (x_i + y_i)*c_i.",
            "  • Optimizes Carry-out delay down to just **2 gate levels** (1.0 ns), essential for high-speed ripple and lookahead adders."
          ],
          "diagramHtml": "<div class=\"digest-ref-graphic-box\"><div class=\"digest-ref-graphic-header\"><span>⚡</span><strong>Figure 3.1: Full Adder Logic Diagram using Two Half Adders & OR Gate</strong><span class=\"week-pill\">Week 7</span></div><div class=\"digest-ref-img-wrapper\" onclick=\"window.reviewerApp.openImageModal('assets/full_adder_using_half_adders.jpg', 'Logic Diagram of Full Adder using Half Adder')\"><img src=\"assets/full_adder_using_half_adders.jpg\" alt=\"Full Adder using Half Adder\" class=\"digest-ref-img\"/><div class=\"digest-ref-hint\">🔍 Tap / Click to enlarge full-resolution Half Adder & Full Adder schematic</div></div></div>",
          "trap": "Exam Trap: Can intermediate carries C1 = AB and C2 = (A⊕B)Cin ever be 1 at the same time? NO! They are strictly mutually exclusive. Because C1·C2 = 0, the carry combiner OR gate can be replaced with an XOR gate without changing functionality!",
          "tldr": "1 Full Adder = 2 Half Adders + 1 OR Gate (or XOR Gate). HA cannot cascade; FA handles Cin to enable n-bit ripple cascades."
        },
        {
          "heading": "4. N-bit Ripple-Carry Adder & Delay Analysis",
          "points": [
            "An n-bit adder is formed by cascading n full adder blocks. The carry-out c_i ripples into carry-in c_{i+1}.",
            "**Propagation Delay Problem**:",
            "  • Suppose delay from c_i to c_{i+1} is 1\\text{ ns} (2 gate levels at 0.5\\text{ ns} each).",
            "  • Final sum generation requires 1.5\\text{ ns}.",
            "  • **Formula**: \\text{Total Delay} = (n - 1) x 1\\text{ ns} + 1.5\\text{ ns}",
            "  • For an **8-bit ripple adder**: (7 x 1\\text{ ns}) + 1.5\\text{ ns} = \\mathbf{8.5\\text{ ns}}.",
            "  • For a **32-bit ripple adder**: (31 x 1\\text{ ns}) + 1.5\\text{ ns} = \\mathbf{32.5\\text{ ns}}! Far too slow for gigahertz CPUs."
          ]
        },
        {
          "heading": "5. Carry-Lookahead Adder (CLA) & 3-Gate Delay",
          "points": [
            "Overcomes ripple delay by generating all carries simultaneously directly from input operands:",
            "**Generate Function (G_i)**: G_i = x_i y_i (carry generated internally if both inputs are 1).",
            "**Propagate Function (P_i)**: P_i = x_i + y_i (carry propagated if either input is 1).",
            "**Recursive Carry Equation**: c_{i+1} = G_i + P_i c_i",
            "**Expanded Carry Equations**:",
            "  • c_1 = G_0 + P_0 c_0",
            "  • c_2 = G_1 + P_1 G_0 + P_1 P_0 c_0",
            "  • c_3 = G_2 + P_2 G_1 + P_2 P_1 G_0 + P_2 P_1 P_0 c_0",
            "  • c_4 = G_3 + P_3 G_2 + P_3 P_2 G_1 + P_3 P_2 P_1 G_0 + P_3 P_2 P_1 P_0 c_0",
            "**Performance Advantage**: All carries are developed in just **3 logic gate delays** (1 gate delay for P_i, G_i + 2 gate delays for AND-OR carry logic) regardless of word length!"
          ]
        },
        {
          "heading": "6. Practical Gate Fan-in Constraints",
          "points": [
            "**The Engineering Limitation**:",
            "  • In the CLA, the Boolean expression for c_{i+1} requires **i + 2 inputs** to the largest AND gate, and **i + 2 inputs** to the OR gate.",
            "  • For an 8-bit carry-lookahead adder, total time is reduced from 8.5\\text{ ns} down to 3\\text{ ns}, but requires a **gate fan-in of nine (9)** for the basic gates!",
            "  • Large fan-in causes significant physical capacitance, slower switching, and manufacturing layout issues.",
            "  • Solution: Modern processors build **Hierarchical / Block Carry-Lookahead Adders** (e.g. 4-bit CLA blocks combined via group generate/propagate logic)."
          ]
        }
      ]
    },
    {
      "id": "rizal-cp1",
      "subject": "RIZAL",
      "week": "Module 1",
      "title": "RA 1425 (The Rizal Law) & The Selection of National Hero",
      "badge": "Checkpoint 1",
      "description": "Legislative battle of Senate Bill 438, Recto vs Catholic Opposition, Laurel's compromise amendment, statutory provisions of RA 1425, and the 1901 Taft Commission criteria.",
      "digest": [
        {
          "heading": "1. Post-WWII Context & Need for Nationalism",
          "points": [
            "Following World War II and the 1946 grant of independence, the Philippines was marked by pervasive economic, military, and political dependence on the United States.",
            "Filipino youth were increasingly alienated from national identity and seduced by foreign culture and colonial mentality.",
            "Nationalist leaders believed that studying the sacrifices of Filipino patriots—specifically Dr. José Rizal—was essential to revive civic pride, moral discipline, and patriotism."
          ],
          "tldr": "Post-war foreign domination catalyzed the push for a statutory mandate to teach Rizal's life and ideals."
        },
        {
          "heading": "2. The Legislative Battle: Recto & Laurel vs. Catholic Opposition",
          "points": [
            "**Senate Bill No. 438** was filed on **April 17, 1956** by **Senator Jose P. Laurel** (Chairman of the Senate Committee on Education), but its original author was the staunch nationalist **Senator Claro M. Recto**.",
            "Original text mandated the **compulsory reading** of the unexpurgated editions of *Noli Me Tangere* and *El Filibusterismo* in all public and private colleges and universities.",
            "**Conservative Catholic Opposition:** Led by Senators **Decoroso Rosales**, **Mariano Cuenco**, and **Francisco Rodrigo**.",
            "**Catholic Action of Manila (CAM):** Converted its newspaper, *The Sentinel*, into a daily release urging Catholics to petition lawmakers to reject the bill.",
            "**Fr. Jesus Cavanna:** Alleged at a CAM symposium that out of 333 pages in the *Noli*, only **25 pages** were patriotic, while **120 pages** were anti-Catholic attacks.",
            "**Senator Francisco Rodrigo:** Famously stated on the floor: *'I cannot allow my son who is now 16 to read the Noli Me Tangere and the El Filibusterismo lest he lose his faith.'*",
            "**Radio Commentators:** Jesus Paredes claimed Catholics had a right to refuse reading heresy to save their souls; Narciso Pimentel Jr. claimed the bill was Recto's political revenge for his poor showing in the 1955 elections."
          ],
          "trap": "Exam Trap: Sen. Claro M. Recto was the ORIGINAL AUTHOR, while Sen. Jose P. Laurel was the COMMITTEE SPONSOR/CHAIRMAN who presented and defended it."
        },
        {
          "heading": "3. The Church's Ultimatum & Recto's Counter-Strike",
          "points": [
            "Catholic authorities issued an ultimatum threatening to close down all Catholic educational institutions across the Philippines if the bill became law.",
            "Recto fiercely countered that a shutdown would be a blessing, allowing the State to **nationalize all private schools** to advance genuine Filipino education.",
            "Recto dismissed the closure threat as a bluff: *'They [the Catholic Church] are making too much profit which they can ill-afford to give up.'*",
            "Recto clarified: *'Rizal did not pretend to teach religion or theology... He aimed at inculcating civic consciousness in the Filipinos, national dignity, personal pride, and PATRIOTISM.'*"
          ]
        },
        {
          "heading": "4. Laurel's Compromise & Enactment of RA 1425",
          "points": [
            "To break a bitter two-week deadlock, Sen. Jose P. Laurel drafted a substitute compromise bill:",
            "1. Removed the explicit term **'compulsory'** in general contexts.",
            "2. Mandated that collegiate courses use the original or unexpurgated editions (or English translations) as basic texts.",
            "3. Created a **Religious Exemption Clause**: Students objecting on religious grounds can request exemption from reading the unexpurgated novels by submitting a **sworn written statement**.",
            "⚠️ **CRITICAL EXAM POINT**: The exemption excuses the student **ONLY from reading the novels**, NOT from taking the collegiate Rizal course itself!",
            "Approved by Senate (23 in favor) and House (71 for, 9 against, 2 abstentions on HB 5564).",
            "Signed into law by President **Ramon Magsaysay** on **June 12, 1956** as **Republic Act No. 1425** (The Rizal Law)."
          ],
          "trap": "Exam Trap: Religious objection only exempts a student from reading the unexpurgated novels, NEVER from enrolling in or passing the Rizal course!"
        },
        {
          "heading": "5. Legal Provisions of RA 1425 (Sections 1–6)",
          "points": [
            "**Section 1**: Compulsory inclusion of courses on the life, works, and writings of Jose Rizal, particularly *Noli* and *Fili*, in all public and private schools, colleges, and universities. Unexpurgated collegiate text requirement with sworn exemption mechanism.",
            "**Section 2**: Obligatory maintenance of adequate unexpurgated copies in school libraries, determined by the Board of National Education according to enrollment.",
            "**Section 3**: Directs translation of *Noli* and *Fili* into English, Tagalog, and principal dialects; printing of cheap popular editions; free distribution via *Purok* organizations and Barrio Councils.",
            "**Section 4**: Clarifies no repeal of Section 927 of the Administrative Code (prohibiting public school teachers from discussing religious doctrines).",
            "**Section 5**: Authorizes an appropriation of **₱300,000** from the National Treasury.",
            "**Section 6**: Immediate effectivity upon approval on June 12, 1956."
          ]
        },
        {
          "heading": "6. 1990s Reinforcements: FVR Memo Order 246 & CHED Memos",
          "points": [
            "**Memorandum Order No. 246 (Dec 26, 1994)**: Issued by President **Fidel V. Ramos**, ordering DECS and CHED to strictly monitor and enforce RA 1425.",
            "**CHED Memo No. 3 (1995) & CHED Memo No. 6 (1996)**: Re-enforced RA 1425 as a mandatory 3-unit prerequisite course for all collegiate undergraduate programs in the Philippines."
          ]
        },
        {
          "heading": "7. The Taft Commission (1901) & National Hero Selection",
          "points": [
            "In 1901, Civil Governor **William Howard Taft** convened a commission to select a National Hero as a model for the Filipino citizenry.",
            "**Commission Members**: Taft, Morgan Shuster, Bernard Moses, Dean Worcester, Henry Clay Ide, Trinidad Pardo H. de Tavera, Gregorio Araneta, Cayetano Arellano, and Jose Luzurriaga.",
            "**4 Rigorous Criteria**:",
            "1. **Isang Pilipino** (Must be a Filipino).",
            "2. **Yumao na** (Must be deceased—avoiding ongoing political biases).",
            "3. **May matayog na pagmamahal sa bayan** (Must have possessed towering patriotism).",
            "4. **May mahinahong damdamin** (Must have possessed a calm, peaceful, restrained temperament)."
          ]
        },
        {
          "heading": "8. Candidates & Why Rizal was Chosen",
          "points": [
            "**Nominees Considered**:",
            "- **Graciano Lopez-Jaena**: Orator, founder of *La Solidaridad*; rejected due to erratic habits.",
            "- **Marcelo H. del Pilar**: Satirist and editor of *La Solidaridad*; held radical anti-friar and armed revolution leanings.",
            "- **Antonio Luna**: Brilliant general; disqualified due to fierce temper.",
            "- **Emilio Jacinto**: *Brain of the Katipunan*; purely military/revolutionary operative.",
            "- **Dr. José Rizal**: Selected as the National Hero.",
            "**Reasons for Choosing Rizal**:",
            "1. He was the first to unify the entire archipelago in opposition to colonial Spain through his writings.",
            "2. He was a model of peace and non-violent reform through education.",
            "3. His tragic martyrdom touched the sentimental nature (*maramdaming damdamin*) of the Filipino people."
          ]
        }
      ]
    },
    {
      "id": "rizal-cp2",
      "subject": "RIZAL",
      "week": "Module 2",
      "title": "The 19th Century Global & Philippine Context",
      "badge": "Checkpoint 2",
      "description": "Three Great Global Revolutions, Age of Enlightenment, Suez Canal inauguration, Gov-Gen De la Torre's liberal regime, 1872 Cavite Mutiny & GOMBURZA, and the 11 Colonial Evils.",
      "digest": [
        {
          "heading": "1. The Three Great Global Revolutions",
          "points": [
            "**1. Industrial Revolution (England & Europe)**: Replaced agrarian feudalism with industrial capitalism. Introduction of steam engines and factories shifted rural populations to urban industrial centers. Created a wealthy commercial bourgeoisie and modernized global shipping.",
            "**2. French Revolution (1789–1799)**: Overthrew absolute divine-right monarchy. Proclaimed the egalitarian motto: **Freedom, Fairness, and Fraternity** (*Liberté, Égalité, Fraternité*). Exported liberal ideas across Europe and directly inspired political agitation in Spain.",
            "**3. American Revolution (1776)**: Established the first modern anti-colonial democratic republic. Popularized political treatises by Montesquieu, Rousseau, Locke, and Jefferson regarding human rights and constitutional checks on power."
          ],
          "tldr": "Global revolutions shattered feudalism and divine monarchy, transmitting democratic concepts to colonies."
        },
        {
          "heading": "2. Age of Enlightenment & Rise of Social Sciences",
          "points": [
            "The emergence of Sociology, Anthropology, and modern History shifted intellectual inquiry toward **human reason and empirical science**.",
            "Debunked medieval superstitions and authoritarian church dogmas.",
            "**Michel de Montaigne** and Enlightenment thinkers emphasized human reason as an instrument to combat ignorance, autocracy, and inherited class privilege.",
            "**Anti-Clericalism in Europe & Spain**: Spanish liberals fought to strip Catholic friars of political, judicial, and educational monopolies, considering the Church an enemy of modernization."
          ]
        },
        {
          "heading": "3. Opening of the Suez Canal (November 17, 1869)",
          "points": [
            "Constructed by French diplomat-engineer **Ferdinand de Lesseps**; 103 miles long linking the Mediterranean Sea to the Gulf of Suez and Red Sea.",
            "**Dramatic Travel Compression**: Before 1869, steamers had to sail around the Cape of Good Hope (Africa), taking **more than 3 months** (90–120 days). The canal shortened travel to **only 32 days**!",
            "Accelerated trade, brought Europe closer to Manila, and unleashed a massive influx of liberal literature (Rousseau's *Social Contract*, Locke's *Treatises of Government*, Paine's *Common Sense*).",
            "Permitted affluent Filipino families to send their sons (*Ilustrados*) to study in European universities."
          ],
          "trap": "Exam Trap: Travel time between Barcelona and Manila was reduced from over 3 months to 32 days, NOT 3 months to 2 weeks!"
        },
        {
          "heading": "4. Democratic Rule of Gov. Gen. Carlos María de la Torre (1869–1871)",
          "points": [
            "Appointed following the Spanish liberal revolution of 1868.",
            "Avoided luxury; lived simply, walked without military escorts, and entertained native Filipinos in Malacañang.",
            "**Abolished press censorship** and recognized freedom of speech and peaceful assembly.",
            "Gave Filipinos a memorable **foretaste of democratic rule**.",
            "Encouraged the Filipino secularization movement led by **Fr. José Burgos**, which sought to replace Spanish friars with native Filipino secular priests."
          ]
        },
        {
          "heading": "5. The Cavite Mutiny (1872) & Martyrdom of GOMBURZA",
          "points": [
            "Reactionary governor **Rafael de Izquierdo** revoked traditional tax exemptions and forced labor privileges of arsenal workers at Fort San Felipe, Cavite.",
            "On **January 20, 1872**, Sgt. Lamadrid led around 200 soldiers and workers in mutiny.",
            "Colonial authorities used the mutiny to arrest prominent secular priests: **Fathers Mariano Gomez, José Burgos, and Jacinto Zamora** (**GOMBURZA**).",
            "Executed by **garrote** at Bagumbayan on **February 17, 1872** on fabricated charges.",
            "**Impact on Rizal**: Paciano Rizal was a student and boarder of Fr. Burgos. He witnessed the execution and inspired 11-year-old José Rizal to dedicate his life to the patriotic cause. Rizal later dedicated his second masterpiece, *El Filibusterismo*, to GOMBURZA."
          ],
          "trap": "Exam Trap: Rizal dedicated NOLI ME TANGERE to the Fatherland (Inang Bayan), and EL FILIBUSTERISMO to GOMBURZA!"
        },
        {
          "heading": "6. Discontent with Spanish Institutions: Polo, Tributo & Monopolies",
          "points": [
            "**Polo y servicio**: Compulsory 40-day manual labor imposed on native males (16–60 years old) on public roads and bridges without compensation.",
            "**Tributo & Bandala**: Heavy direct personal tributes, income taxes, and forced requisitioning of agricultural products (*bandala*) paid with IOUs.",
            "**Monopolies (*Rentas estancadas*)**: State monopolies over tobacco, betel nut, spirituous liquors, explosives, and opium heavily enriched the Spanish crown while impoverishing native farmers."
          ]
        },
        {
          "heading": "7. Abuses of Friars & The 11 Evils of 19th-Century Spanish Rule",
          "points": [
            "**Frailocracy (*Frailocracia*)**: Friars held total hegemony over town politics, parish registries, education, and civil censorship. Satirized by Graciano Lopez-Jaena as *Fray Botod* (the fat, abusive friar).",
            "**The 11 Evils Cited by Historians**:",
            "1. Instability of colonial administration (Madrid political chaos)",
            "2. Corrupt colonial officials",
            "3. Denial of Philippine representation in the Spanish Cortes (revoked 1837)",
            "4. Denial of basic human rights (speech, press, assembly)",
            "5. No equality before the law",
            "6. Maladministration of justice (glacial, venal courts)",
            "7. Racial discrimination (branding brown natives as *Indios*)",
            "8. Frailocracy",
            "9. Forced labor (*polo y servicio*)",
            "10. Friar-owned agrarian haciendas",
            "11. Abusive *Guardia Civil* (feared constabulary notorious for brutality)"
          ]
        },
        {
          "heading": "8. 19th-Century Social Stratification",
          "points": [
            "**Peninsulares**: Pure Spaniards born in the Iberian Peninsula (Spain); held highest political and church posts.",
            "**Insulares**: Pure Spaniards born in the Philippine islands (derisively called *Filipinos* in the 19th century).",
            "**Mestizos**: Mixed Spanish-Filipino or Chinese-Filipino parentage; economically prosperous merchant class.",
            "**Principalia**: Educated, land-owning native nobility, municipal elites, and town mayors/cabezas (Rizal's family belonged to this class).",
            "**Indios**: Native Austronesian Filipinos; majority population, disenfranchised, burdened by tributes and forced labor."
          ]
        }
      ]
    },
    {
      "id": "rizal-cp3",
      "subject": "RIZAL",
      "week": "Module 3",
      "title": "Secret Mission, Early Travels & Madrid Academic Life (1882–1885)",
      "badge": "Checkpoint 3",
      "description": "Secret departure aboard SS Salvadora under Jose Mercado alias, travel route through Singapore, Ceylon, Suez, Naples, Marseilles to Barcelona, Amor Patrio, and Madrid university honors.",
      "digest": [
        {
          "heading": "1. Rizal's Secret Mission & Departure (May 3, 1882)",
          "points": [
            "**Disillusionment with UST**: Rizal felt constrained by the obsolete, discriminatory scholastic teaching methods of Dominican professors.",
            "**The Secret Mission**: To keen observe the culture, life, languages, customs, industries, and governments of European nations to prepare himself to liberate his oppressed motherland.",
            "**Absolute Secrecy**: Concealed from Spanish authorities, friars, and his own parents. Known only to brother Paciano, uncle Antonio Rivera, and sisters Saturnina and Lucia.",
            "**Departure**: May 3, 1882. Boarded Spanish steamer **SS Salvadora** bound for Singapore using a passport in the name of **José Mercado**."
          ],
          "trap": "Exam Trap: José Mercado was the passport alias used for departure; Laong Laan was his literary pen-name; Dimasalang was his Masonic name."
        },
        {
          "heading": "2. Voyage Across Asia & Middle East (May 1882)",
          "points": [
            "**May 9, 1882 — Singapore**: SS Salvadora docked. Rizal stayed at the **Hotel de la Paz** for 2 days.",
            "**May 11, 1882 — Djemnah**: Transferred to the French passenger steamer **Djemnah** sailing for Europe. Practiced conversational French.",
            "**May 17, 1882 — Punta de Gales (Point Galle, Ceylon)**: Recorded in his travel diary: *'The general appearance of Point Galle is picturesque but lonely and quiet and at the same time sad.'*",
            "**May 18, 1882 — Colombo (Ceylon)**: Resumed journey after afternoon arrival; admired its boulevards.",
            "**May 27, 1882 — Aden (Yemen)**: Landed at 8:30 AM. Rizal observed that Aden was **'a city hotter than Manila'** and was amused to see camels for the first time in his life."
          ]
        },
        {
          "heading": "3. The Suez Canal & First European Soil (June 1882)",
          "points": [
            "**June 2, 1882 — City of Suez**: Red Sea terminal of the Suez Canal. Impressed by the romantic moonlight over the Gulf of Suez, which reminded him of Calamba.",
            "Traversed the 103-mile canal to **Port Said** (Mediterranean terminal).",
            "**June 11, 1882 — Naples, Italy**: Disembarked and toured the city with a guide for one hour. **This was the very first European ground Rizal ever set foot upon!** Praised its business vitality and lively people.",
            "**June 12, 1882 — Marseilles, France**: Djemnah docked at 10 PM. Rizal stayed 2.5 days. Visited the famous **Château d'If**, where Edmond Dantès (*Count of Monte Cristo*) was imprisoned.",
            "**June 15, 1882 — Port Bou**: Left Marseilles by train, crossed the Pyrenees mountains, and stopped at the frontier town of Port Bou for passport inspection.",
            "**June 16, 1882 (12:00 Noon) — Barcelona**: Arrived and lodged at **Fonda de España** on Calle San Pablo. Initial impression was unfavorable, but he soon embraced its liberal freedom."
          ],
          "trap": "Exam Trap: Naples was Rizal's first European ground visited (June 11, 1882), NOT Marseilles or Barcelona!"
        },
        {
          "heading": "4. Life in Barcelona: Debut of Amor Patrio (1882)",
          "points": [
            "***Amor Patrio* (Love of Country)**: First nationalistic essay written on Spanish soil.",
            "Penned under the pen-name **Laong Laan** (*Ever Prepared*).",
            "Published on **August 20, 1882** in the bilingual Manila paper ***Diarong Tagalog*** (founded by Basilio Teodoro Moran).",
            "Published in two versions: original Spanish by Rizal, and Tagalog translation by **Marcelo H. del Pilar**.",
            "Subsequent articles: *Los Viajes* (Travels) and *Revista de Madrid* (returned unpublished due to lack of funds)."
          ]
        },
        {
          "heading": "5. Universidad Central de Madrid (1882–1885)",
          "points": [
            "On **November 3, 1882**, Rizal formally enrolled at the **Universidad Central de Madrid** in two concurrent degree courses: **Medicine** and **Philosophy and Letters**.",
            "Also studied painting and sculpture at the **Academy of Fine Arts of San Fernando**.",
            "Took private lessons in French, German, and English.",
            "Practiced fencing and shooting at the **Hall of Arms of Sanz y Carbonell**.",
            "Lived an austere, disciplined student life, budgeting every centavo for second-hand textbooks."
          ]
        },
        {
          "heading": "6. Círculo Hispano-Filipino & 'Me Piden Versos'",
          "points": [
            "Joined the **Círculo Hispano-Filipino**, an association of progressive Filipino students and Spanish liberals in Madrid.",
            "Wrote the poem ***Me Piden Versos* (They Ask Me For Verses)** upon request of member compatriots.",
            "Declaimed it in person during the New Year's Eve reception of Madrid Filipinos on **December 31, 1882**."
          ]
        },
        {
          "heading": "7. Freemasonry: Lodge Acacia & Lodge Solidaridad",
          "points": [
            "**March 1883**: Joined Masonic Lodge **Acacia** in Madrid. Core motivation: to secure the international backing of Freemasonry in the Filipino struggle against friar tyranny.",
            "**November 1883**: Transferred to **Lodge Solidaridad No. 53**, where he later rose to become a **Master Mason**."
          ]
        },
        {
          "heading": "8. Academic Degrees & Graduation Honors",
          "points": [
            "**June 1884**: Conferred the degree of **Licentiate in Medicine** (*Licenciado en Medicina*).",
            "Passed all subjects for the Doctor of Medicine degree (1884–1885); only received his Doctor's Diploma in **1887** after paying the corresponding graduation fees (*derechos de grado*).",
            "**June 1885**: Conferred the degree of **Licentiate in Philosophy and Letters** (*Licenciado en Filosofia y Letras*) by Universidad Central de Madrid with the highest academic rating of **'Sobresaliente' (Excellent)**."
          ],
          "trap": "Exam Trap: Rizal achieved the rating of 'Sobresaliente' (Excellent) in Philosophy and Letters, NOT in Medicine!"
        }
      ]
    },
    {
      "id": "rizal-cp4",
      "subject": "RIZAL",
      "week": "Module 4",
      "title": "Ophthalmology Specialization, Publishing Noli & Grand Tour (1885–1887)",
      "badge": "Checkpoint 4",
      "description": "Clinical training in Paris and Heidelberg, darkest winter of 1886 in Berlin, Maximo Viola's loan, publication of Noli Me Tangere, and the Grand Tour across Europe.",
      "digest": [
        {
          "heading": "1. Ophthalmology Specialization: Paris & Dr. Louis de Weckert",
          "points": [
            "Rizal chose to specialize in **ophthalmology** specifically to **cure the failing eyesight / cataract of his mother (Doña Teodora)**.",
            "In Paris (October 1885 – February 1886), worked as a clinical assistant to **Dr. Louis de Weckert** (1832–1904), the leading French ophthalmologist.",
            "Gained master-level surgical skills in ophthalmic operations.",
            "Socialized with the Pardo de Tavera family (Trinidad, Felix, and Paz) and painter **Juan Luna**."
          ]
        },
        {
          "heading": "2. Modeling for Juan Luna & Sojourn in Heidelberg",
          "points": [
            "**Posed for Juan Luna's historic canvases**:",
            "- In ***The Blood Compact* (El Pacto de Sangre)**: Posed as chieftain **Sikatuna** (Trinidad Pardo de Tavera posed as Legazpi).",
            "- In ***The Death of Cleopatra***: Posed dressed as an ancient Egyptian priest.",
            "**Heidelberg, Germany (Feb 3, 1886)**: Worked at the **University Eye Hospital** under distinguished German ophthalmologist **Dr. Otto Becker**.",
            "Penned the lyrical poem *A Las Flores de Heidelberg* on April 22, 1886."
          ]
        },
        {
          "heading": "3. Letter to Sister Trinidad: German Womanhood (March 11, 1886)",
          "points": [
            "Rizal wrote a celebrated letter to his sister **Trinidad** expressing immense admiration for **German womanhood**.",
            "Observed that German women are: **serious, diligent, educated, and friendly—not gossipy, frivolous, or quarrelsome**.",
            "Urged Filipino women to combine intellectual diligence and moral fortitude with traditional sweetness."
          ]
        },
        {
          "heading": "4. Berlin Sojourn & Induction into Scientific Circles (Nov 1886)",
          "points": [
            "Arrived in Berlin in **November 1886**; enchanted by its scientific atmosphere and complete absence of racial prejudice.",
            "Met **Dr. Feodor Jagor**, author of *Travels in the Philippines*, a book Rizal admired as a youth.",
            "Met **Dr. Rudolf Virchow** (famous German anthropologist/pathologist), his son **Dr. Hans Virchow** (professor of anatomy), and **Dr. W. Joest** (geographer).",
            "**5 Reasons for Staying in Berlin**:",
            "1. Gain advanced ophthalmology knowledge.",
            "2. Further scientific and linguistic studies.",
            "3. Observe economic and political conditions of the German nation.",
            "4. Associate with famous German scholars.",
            "5. **Publish his masterpiece novel, *Noli Me Tangere*!**"
          ]
        },
        {
          "heading": "5. The Bleak Winter of 1886 & Pawned Ring",
          "points": [
            "The bleak winter of 1886 in Berlin was Rizal's **darkest winter**.",
            "No funds arrived from Calamba; Rizal was flat broke, shivering in unheated quarters, and starving on one meal a day.",
            "Pawned the **diamond ring** given to him by his eldest sister, **Saturnina**, to survive.",
            "Inspired to write a novel exposing colonial agony after reading Harriet Beecher Stowe's ***Uncle Tom's Cabin***."
          ]
        },
        {
          "heading": "6. Dr. Máximo Viola: Savior of the Noli",
          "points": [
            "**Dr. Máximo Viola**, a wealthy medical friend from San Miguel, Bulacan, arrived in Berlin at the peak of Rizal's despondency.",
            "Viola loaned Rizal the necessary living expenses and printing funds to publish the novel, earning the historic title **'Savior of the Noli'**.",
            "Manuscript finished: **February 21, 1887**."
          ],
          "trap": "Exam Trap: Dr. Máximo Viola was the savior of Noli Me Tangere; Valentin Ventura was the savior who financed El Filibusterismo!"
        },
        {
          "heading": "7. Berliner Buchdruckerei & Release of Noli Me Tangere (March 21, 1887)",
          "points": [
            "Printed at ***Berliner Buchdruckerei-Actien-Gesellschaft***, which offered the lowest rate of **₱300 for 2,000 copies**.",
            "**March 21, 1887**: *Noli Me Tangere* came off the press!",
            "Title is a Latin phrase meaning **'Touch Me Not'**, taken from the Bible (Gospel of St. John 20:13–17).",
            "Rizal gratefully gifted Viola the novel's original galley proofs and pen."
          ]
        },
        {
          "heading": "8. The Grand European Tour with Viola (May–June 1887)",
          "points": [
            "**May 11, 1887**: Left Berlin by train with Viola.",
            "**Dresden**: Admired the painting *Prometheus Bound*; visited Teschen (Děčín).",
            "**Leitmeritz, Bohemia (May 13–16, 1887)**: Met **Prof. Ferdinand Blumentritt** in person for the first time. Met town Burgomaster, spoke fluent German at the Tourist's Club, met Dr. Carlos Czepelak and Prof. Robert Klutschak.",
            "**Prague**: Visited Dr. Willkomm (Viola noted 'nothing of importance happened').",
            "**Vienna (May 20, 1887)**: 'Queen of the Danube'; met novelist Norfentals; stayed at Hotel Metropole where Rizal recovered his **lost diamond stickpin**.",
            "**Danubian Voyage to Linz (May 24)**: Observed paper napkins used during boat meals (Viola: 'more hygienic and economical').",
            "**Munich, Nuremberg & Ulm**: Savoring Munich beer; admiring tallest Cathedral of Ulm; Rheinfall ('most beautiful waterfall in Europe').",
            "**Switzerland (Geneva)**: Celebrated his **26th birthday (June 19, 1887)** with a blow-out. Outraged by the Madrid Exposition displaying native Igorots of Northern Luzon.",
            "**June 23, 1887**: Viola returned to Barcelona; Rizal proceeded to Italy.",
            "**Rome & The Vatican (June 27–29, 1887)**: Visited Rome ('Eternal City', wrote to Blumentritt: *'I am tired as a dog, but I will sleep as a God'*). Visited Vatican City on the Feast of St. Peter and Paul (June 29). Prepared to return home to the Philippines."
          ]
        }
      ]
    },
    {
      "id": "contempo-cp1",
      "subject": "SOCSCI3",
      "week": "Module 1",
      "title": "Introduction & Structure of Globalization: Metaphors, Flows, and Scapes",
      "badge": "Checkpoint 1",
      "description": "Foundational definitions (Steger, Robertson, Giddens), Four Dimensions, Epochal Metaphors (Solidity, Liquidity, Gaseousness), Arjun Appadurai's 5 Scapes, and Global Friction.",
      "digest": [
        {
          "heading": "1. Defining Globalization: Conceptual Foundations",
          "points": [
            "**Globalization** is the multidimensional set of social processes that create, multiply, stretch, and intensify worldwide social interdependencies and exchanges.",
            "**Manfred Steger's Triad**: Distinguishes **Globality** (the social condition of global interconnectedness), **Globalization** (the dynamic set of processes that transform nationality into globality), and the **Global Imaginary** (growing consciousness of global belonging).",
            "**Anthony Giddens (Time-Space Distanciation)**: The intensification of worldwide social relations which link distant localities such that local happenings are shaped by events miles away and vice versa.",
            "**David Harvey (Time-Space Compression)**: Technological acceleration shrinking geographical distance and reducing the time required for capital, information, and people to traverse the globe.",
            "**Roland Robertson**: *'The compression of the world and the intensification of consciousness of the world as a whole.'*"
          ],
          "tldr": "Globalization compresses time and space, intertwining distant local events with global planetary networks."
        },
        {
          "heading": "2. The Four Core Dimensions of Globalization",
          "points": [
            "**1. Economic**: Free trade, transnational supply chains, multinational corporate dominance, foreign direct investment (FDI), and hyper-speed digital capital.",
            "**2. Cultural**: Global flows of ideas, cinema, gastronomy, lifestyle trends, and languages; tension between cultural homogenization and glocalization.",
            "**3. Political**: Multilateral governance, intergovernmental bodies (UN, WTO, EU, ASEAN), transnational NGOs, and the restructuring of sovereign state authority.",
            "**4. Technological**: Planetary telecommunications, subsea fiber-optic cables, satellite arrays, microelectronics, and algorithmic platforms that eliminate latency."
          ]
        },
        {
          "heading": "3. Epochs of Globalization: The Great Metaphorical Shift",
          "points": [
            "Sociologists rely on **physical metaphors of matter** to categorize abstract historical epochs:",
            "**A. SOLIDITY (Pre-Modern Era)**: Heavy physical barriers, fixed geographic territories, strict border checkpoints, high travel friction, and rigid state sovereignty.",
            "**B. LIQUIDITY (Modern Era - Zygmunt Bauman)**: Fluidity, adaptability, high velocity, bypassing containers, digital financial capital, viral information, and remote work.",
            "**C. GASEOUSNESS (Contemporary Era)**: Hyper-mobility, weightlessness, near-zero friction, cloud storage, ambient wireless spectrums, and airborne transboundary hazards."
          ],
          "trap": "Exam Trap: Zygmunt Bauman authored 'Liquid Modernity'. Liquid phenomena do NOT keep their shape—they flow around boundaries!"
        },
        {
          "heading": "4. Metaphor 1: Solidity (The Heavy World)",
          "points": [
            "Solids are characterized by permanence, fixed locations, and hard boundaries.",
            "**Physical Fortifications**: The Great Wall of China, the Berlin Wall, castle moats, and fortified national fences.",
            "**Heavy Infrastructure**: Steel mills, coal-fired power plants, locomotive roundhouses, and physical bank vaults.",
            "**State Controls**: Strict paper passport requirements, quarantine manifests, and physical customs inspection stations.",
            "**Print Media**: Physical libraries, newspapers, and localized book distribution."
          ]
        },
        {
          "heading": "5. Metaphor 2: Liquidity (The Fluid World — Bauman)",
          "points": [
            "Formulated by Polish sociologist **Zygmunt Bauman** in *Liquid Modernity* (2000).",
            "**Fluidity & Adaptability**: Liquid phenomena take the shape of whatever container they enter and cannot be easily held or halted.",
            "**High Velocity**: Financial capital, cultural trends, and data move around the world in fractions of a second.",
            "**Transience**: Relationships, careers, and cultural norms become flexible, precarious, and short-lived.",
            "**Examples**: Digital capital (EFT, crypto), viral memes, streaming media (Netflix, Spotify), and remote freelance labor."
          ]
        },
        {
          "heading": "6. Arjun Appadurai's 5 Dimensions of Global Flows ('Scapes')",
          "points": [
            "Formulated by **Arjun Appadurai** (1990, *Disjuncture and Difference in the Global Cultural Economy*):",
            "**1. Ethnoscapes (Flow of People)**: Shifting landscapes of tourists, immigrants, refugees, guest workers, and **Overseas Filipino Workers (OFWs)** moving across borders.",
            "**2. Technoscapes (Flow of Technology)**: Mechanical, high-tech, and informational technologies moving rapidly across national boundaries.",
            "**3. Financescapes (Flow of Capital)**: Rapid transit of megabucks through currency markets, stock exchanges, cryptocurrency, and cross-border remittances.",
            "**4. Mediascapes (Flow of Images)**: Distribution of electronic capabilities to produce and circulate images and narratives (Hollywood, K-Dramas, BBC/CNN, streaming platforms).",
            "**5. Ideoscapes (Flow of Ideologies)**: Political images, values, and ideologies (democracy, sovereignty, universal human rights, environmentalism).",
            "⚠️ **Concept of Disjuncture**: These 5 scapes do **not** move at the same speed or in the same direction (e.g., financescapes move instantly, while ethnoscapes face strict walls)."
          ],
          "trap": "Exam Trap: There is NO 'Econoscape' in Appadurai's 5 scapes! The 5 scapes are Ethnoscapes, Technoscapes, Financescapes, Mediascapes, and Ideoscapes."
        },
        {
          "heading": "7. Structural Support: Heavy vs. Light Globalization",
          "points": [
            "**Heavy Structures (Physical Hardware)**: Mega-container ports, transcontinental railways, deep-water canals (Suez, Panama), and cargo air transport creating physical channels for goods.",
            "**Light Structures (Digital Infrastructure)**: Subsea fiber-optic cables carrying 99% of global data, satellite arrays, server farms, cloud operating systems, and banking protocols (SWIFT)."
          ]
        },
        {
          "heading": "8. Barriers & Friction: The Limits of Liquidity",
          "points": [
            "**Anna Tsing's Concept of Friction**: Globalization is not a smooth, frictionless plane. **Friction** refers to the obstacles, resistance, and sticky institutions that slow down, redirect, or halt global flows.",
            "**Inequality of Mobility**: The global elite enjoys visa-free travel and priority lanes, while refugees and undocumented migrants face razor-wire walls and detention camps.",
            "**Re-Solidification**: When liquid flows threaten state sovereignty, governments re-impose solid structures (e.g., the Great Firewall of China, trade tariffs, tech export sanctions, and border militarization)."
          ]
        }
      ]
    },
    {
      "id": "contempo-cp2",
      "subject": "SOCSCI3",
      "week": "Module 2",
      "title": "History of Modern Global Economy & The Fourth Industrial Revolution (4IR)",
      "badge": "Checkpoint 2",
      "description": "Evolution from Silk Road & Galleon Trade to Industrial Revolutions 1-3, Bretton Woods System, Neoliberalism, and the 4IR (Cyber-Physical Systems, AI, Platform Economy, and Global Value Chains).",
      "digest": [
        {
          "heading": "1. Pre-Industrial Origins: Silk Road & The Galleon Trade",
          "points": [
            "**The Silk Road (130 BCE – 1453 CE)**: Overland trade network linking China, Central Asia, India, and the Mediterranean; ended with the Ottoman fall of Constantinople.",
            "**The Manila-Acapulco Galleon Trade (1565–1815)**: Inaugurated under Andrés de Urdaneta and Miguel López de Legazpi. Spanish galleons linked Manila (Asian silk, porcelain, and spices) with Acapulco, Mexico (New World silver).",
            "🌟 **Historical Landmark**: Recognized by economic historians as the **birth of the first truly planetary, continuous global economy**, directly linking Asia, the Americas, and Europe across the Pacific."
          ],
          "tldr": "The Manila-Acapulco Galleon Trade was the first continuous planetary trade system spanning across the Pacific Ocean."
        },
        {
          "heading": "2. The First Three Industrial Revolutions",
          "points": [
            "**1st Industrial Revolution (1IR, ~1784)**: Powered by the **steam engine** (James Watt) and water power. Mechanized textile factories, metallurgy, coal mining, and early railways.",
            "**2nd Industrial Revolution (2IR, ~1870)**: Powered by **electricity**, the internal combustion engine, steel, chemicals, and the **assembly line** (*Fordism*). Mass manufacturing of consumer goods.",
            "**3rd Industrial Revolution (3IR / Digital Revolution, ~1969)**: Powered by **electronics, semiconductors**, mainframe computers, personal computing, automated logic, and the birth of the Internet."
          ]
        },
        {
          "heading": "3. The Fourth Industrial Revolution (4IR / FIRe)",
          "points": [
            "Coined by **Professor Klaus Schwab**, Founder and Executive Chairman of the **World Economic Forum (WEF)** in 2016.",
            "**Core Definition**: A **fusion of technologies** that blurs the boundaries between the **physical, digital, and biological spheres**.",
            "**Key Characteristics**: Characterized by exponential velocity, unprecedented scope across industries, and total systems transformation.",
            "**Technological Pillars**: Cyber-Physical Systems (CPS), Artificial Intelligence (AI/ML), Internet of Things (IoT), Big Data Analytics, Cloud Computing, Autonomous Robotics, 3D Additive Printing, Gene Editing (CRISPR), and Blockchain."
          ],
          "trap": "Exam Trap: 3IR was the Digital Revolution (computers and internet). 4IR is the FUSION of digital, biological, and physical systems!"
        },
        {
          "heading": "4. 4IR Economic Realities: Platform Capitalism & Labor",
          "points": [
            "**The Platform Economy**: Dominance of multisided digital platforms (Uber, Grab, Airbnb, Amazon, Shopee) that extract value from data and network externalities without owning physical assets.",
            "**The Gig Economy & Algorithmic Labor**: Flexible but precarious employment where tasks are matched, supervised, and evaluated by algorithms with minimal worker protections.",
            "**Labor Polarization**: Surging rewards for high-skilled technical/creative workers; stagnation, de-skilling, and displacement for routine cognitive and manual jobs.",
            "**The New Digital Divide**: Global inequality between nations possessing AI compute/IP (US, China) and peripheral nations performing low-margin data annotation and assembly."
          ]
        },
        {
          "heading": "5. Modern Global Financial Architecture: Gold Standard to Bretton Woods",
          "points": [
            "**Classical Gold Standard (1870–1914)**: Currencies pegged to gold at fixed exchange rates; collapsed during WWI due to inflationary war spending.",
            "**Interwar Chaos & 1929 Great Depression**: Stock market collapse; beggar-thy-neighbor protectionist tariffs (US Smoot-Hawley Tariff Act); competitive currency devaluations.",
            "**The Bretton Woods Conference (July 1944)**: 44 Allied nations met in New Hampshire. Established the **International Monetary Fund (IMF)** and the **World Bank (IBRD)**.",
            "**Gold-Dollar Peg**: US Dollar became the global reserve currency, pegged to gold at **$35 per ounce**; other currencies pegged to the Dollar."
          ]
        },
        {
          "heading": "6. From GATT (1947) to the WTO (1995)",
          "points": [
            "**General Agreement on Tariffs and Trade (GATT, 1947)**: Multilateral agreement focused on reducing tariff barriers on manufactured goods.",
            "**Uruguay Round (1986–1994)**: Led to the signing of the Marrakesh Agreement, establishing the **World Trade Organization (WTO)** on **January 1, 1995**.",
            "**WTO Advancements**: Permanent institutional body with binding dispute settlement mechanisms, covering services (GATS) and intellectual property (TRIPS)."
          ],
          "trap": "Exam Trap: The WTO was NOT created at Bretton Woods in 1944! Bretton Woods created the IMF and World Bank. The WTO was created on Jan 1, 1995 to replace GATT."
        },
        {
          "heading": "7. The Nixon Shock (1971) & The Neoliberal Turn",
          "points": [
            "**The Nixon Shock (August 15, 1971)**: US President Richard Nixon unilaterally terminated the convertibility of the US Dollar into gold, ending the Bretton Woods monetary system.",
            "Ushered in the modern era of **fiat floating currencies** and speculative foreign exchange markets.",
            "**The Neoliberal Turn (1980s)**: Championed by Ronald Reagan and Margaret Thatcher. Shifted focus from Keynesian state intervention to market fundamentalism.",
            "**The Washington Consensus (John Williamson, 1989)**: 10 economic policy prescriptions imposed on developing nations: fiscal discipline, tax reform, trade liberalization, privatization of state enterprises, deregulation, and property rights."
          ]
        },
        {
          "heading": "8. Global Value Chains (GVCs)",
          "points": [
            "**GVC Reality**: Products are no longer made in a single country; about **80% of all international trade** occurs through Global Value Chains.",
            "Manufacturing is fragmented across multiple nations based on comparative advantage.",
            "**Smartphone Supply Chain Example**: Designed in California (US), advanced microchips fabricated in Taiwan (TSMC), camera sensors from Japan (Sony), OLED screens from South Korea (Samsung), assembled in China/Vietnam (Foxconn), and distributed globally."
          ]
        }
      ]
    },
    {
      "id": "contempo-cp3",
      "subject": "SOCSCI3",
      "week": "Module 3",
      "title": "Theories of Globalization: Macro-Paradigms & Cultural Dynamics",
      "badge": "Checkpoint 3",
      "description": "The Three Schools of Thought (Hyperglobalists, Skeptics, Transformationalists), World-Systems Theory (Wallerstein), Modernization vs Dependency Theory, and Cultural Dynamics (McDonaldization, Glocalization).",
      "digest": [
        {
          "heading": "1. The Three Great Schools of Thought (Held & McGrew)",
          "points": [
            "Formulated by political scientists **David Held and Anthony McGrew** (*Global Transformations*, 1999):",
            "**1. HYPERGLOBALIST / GLOBALIST SCHOOL (Kenichi Ohmae, Thomas Friedman)**:",
            "- Argues we live in a borderless world ('The World is Flat') driven by unstoppable economic and technological forces.",
            "- **Decline of the Nation-State**: National governments have become obsolete, powerless transmission belts for transnational capital.",
            "- Triumphant spread of global capitalism, free markets, and cosmopolitan culture."
          ],
          "tldr": "Hyperglobalists believe the nation-state is dying in a borderless global market."
        },
        {
          "heading": "2. The Skeptical School (Hirst & Thompson)",
          "points": [
            "**2. SKEPTICAL SCHOOL (Paul Hirst & Grahame Thompson, 'Globalization in Question')**:",
            "- Argues that globalization is largely an ideological myth and exaggerated.",
            "- Current economic integration is not unprecedented (comparable to the 1870–1914 Gold Standard era).",
            "- What exists is **Regionalization**, not true globalization; trade is concentrated within three regional blocs (North America, Europe, East Asia).",
            "- **Nation-States Remain Central**: Governments maintain monopoly on armed force, control borders, and protect their home corporations."
          ]
        },
        {
          "heading": "3. The Transformationalist School (Held, Giddens, Rosenau)",
          "points": [
            "**3. TRANSFORMATIONALIST SCHOOL (David Held, Anthony Giddens)**:",
            "- Rejects both hyperglobalist dogmatism and skeptical cynicism.",
            "- Globalization is an unprecedented, powerful driving force transforming modern societies, but with **no predetermined end-state**.",
            "- Complex, non-linear, and contradictory: simultaneously integrates and fragments societies.",
            "- **State Transformation**: The power of the nation-state is being **recast, restructured, and recalibrated**, not abolished."
          ],
          "trap": "Exam Trap: Transformationalists believe states are being RESTRUCTURED, not eliminated (Hyperglobalists) or unchanged (Skeptics)."
        },
        {
          "heading": "4. Immanuel Wallerstein's World-Systems Theory",
          "points": [
            "Formulated by American sociologist **Immanuel Wallerstein** (1974, 2004).",
            "The modern world is a single capitalist world-economy with an unequal global division of labor across three structural tiers:",
            "**1. The Core**: High-income, industrialized nations with advanced capital-intensive production, military hegemony, and high wages (US, Western Europe, Japan). Exploits periphery.",
            "**2. The Semi-Periphery**: Intermediate, industrializing economies (Brazil, Russia, India, China, South Africa / BRICS; Mexico). Acts as a geopolitical buffer zone.",
            "**3. The Periphery**: Low-income, agrarian, raw-material-exporting nations with low wages and weak state institutions (sub-Saharan Africa, parts of Latin America and Asia)."
          ]
        },
        {
          "heading": "5. Modernization Theory vs. Dependency Theory",
          "points": [
            "**Modernization Theory (Walt Rostow, 1960)**: Proposes that all societies progress through 5 linear stages: Traditional Society -> Preconditions for Takeoff -> Takeoff -> Drive to Maturity -> Age of High Mass Consumption. Blames underdevelopment on internal traditional cultural deficiencies.",
            "**Dependency Theory (Raúl Prebisch, Andre Gunder Frank)**: Direct critique of Modernization Theory. Argues underdevelopment is caused by external exploitation (**'The Development of Underdevelopment'**). Resources flow from the periphery to the core through unequal terms of trade, keeping the periphery permanently impoverished."
          ]
        },
        {
          "heading": "6. Neoliberalism & The Washington Consensus",
          "points": [
            "**Neoliberalism**: Free-market ideology asserting that individual liberty and economic prosperity are best advanced through unfettered markets, privatization, and minimal state intervention.",
            "**Structural Adjustment Programs (SAPs)**: Austerity measures enforced by the IMF and World Bank on debt-distressed developing countries as conditions for bailout loans.",
            "**Joseph Stiglitz's Critique**: Nobel laureate economist Stiglitz argued in *Globalization and Its Discontents* (2002) that IMF market fundamentalism devastated developing nations by dismantling social safety nets."
          ]
        },
        {
          "heading": "7. Cultural Theory 1: Cultural Differentialism (The Clash of Civilizations)",
          "points": [
            "Formulated by political scientist **Samuel Huntington** (1993, 1996).",
            "Argues that cultural and religious identities are enduring and impervious to global assimilation.",
            "Post-Cold War conflicts occur along **civilizational fault lines** (Western, Islamic, Sinic, Orthodox civilizations) rather than ideological or economic lines."
          ]
        },
        {
          "heading": "8. Cultural Theory 2 & 3: McDonaldization vs. Glocalization",
          "points": [
            "**Cultural Homogenization / McDonaldization (George Ritzer, 1993)**: The process by which the principles of fast-food restaurants come to dominate society. 4 Pillars: **Efficiency**, **Calculability** (quantity over quality), **Predictability**, and **Control** (substituting technology for humans).",
            "**Cultural Heterogenization / Glocalization (Roland Robertson)**: The blending of the **global** and the **local** to create unique hybrid cultural forms.",
            "**Real-World Examples**: Jollibee serving Filipino sweet-style spaghetti globally; McDonald's offering McRice and McSpaghetti in the Philippines, and Teriyaki burgers in Japan."
          ]
        }
      ]
    },
    {
      "id": "contempo-cp4",
      "subject": "SOCSCI3",
      "week": "Module 4",
      "title": "Facilitators, Drivers, and Governance of the Contemporary World",
      "badge": "Checkpoint 4",
      "description": "Triad of facilitators (Transportation & Containerization, Technology & Digital Networks, Policies & Institutional Frameworks), TNCs/MNEs, Labor Migration & OFWs, and Deglobalization.",
      "digest": [
        {
          "heading": "1. The Triad of Facilitators",
          "points": [
            "Globalization is actively accelerated through the dynamic synergy between three structural pillars:",
            "**1. Transportation**: The physical infrastructure moving goods and people across continents.",
            "**2. Technology**: The communication, algorithmic, and production tools enabling real-time global coordination.",
            "**3. Policies**: The legal, institutional, and regulatory frameworks standardizing and liberalizing cross-border trade."
          ],
          "tldr": "Transportation provides the vessels, technology provides the coordination, and policies provide the legal framework."
        },
        {
          "heading": "2. Transportation: The Container Revolution (Malcolm McLean)",
          "points": [
            "In 1956, American transport innovator **Malcolm McLean** patented the standardized intermodal shipping container.",
            "Before 1956, cargo was handled piece by piece (**break-bulk shipping**), taking weeks in port and consuming up to 50% of shipping costs.",
            "Standardized 20-foot and 40-foot containers (TEUs) enabled automated crane transfer between ships, trains, and trucks without opening cargo.",
            "🌟 **Economic Impact**: Slashed freight handling costs by **over 90%**, laying the logistical groundwork for global supply chains."
          ],
          "trap": "Exam Trap: Malcolm McLean is the Father of Containerization (1956), which reduced freight costs by over 90%!"
        },
        {
          "heading": "3. Technological Facilitators: Subsea Cables & Digital Protocols",
          "points": [
            "**Subsea Fiber-Optic Cables**: Over 550 submarine cables spanning 1.4 million kilometers carry **99% of all transoceanic internet traffic** (satellites carry less than 1%).",
            "**Global Information Protocols**: TCP/IP, the World Wide Web (Tim Berners-Lee), and real-time electronic fund networks (**SWIFT**).",
            "**FinTech Platforms**: Mobile financial services, e-commerce payment gateways, and blockchain consensus mechanisms facilitating frictionless micro-transactions."
          ]
        },
        {
          "heading": "4. Policy Facilitators: Liberalization, SEZs, and Trading Blocs",
          "points": [
            "**Trade Liberalization**: Bilateral and multilateral agreements removing protective tariffs, quotas, and customs red tape under WTO oversight.",
            "**Special Economic Zones (SEZs)**: Industrial parks offering tax holidays, duty-free imports, and accelerated customs to attract Foreign Direct Investment (e.g., PEZA zones in the Philippines).",
            "**Regional Trading Blocs**: ASEAN Economic Community (AEC), Regional Comprehensive Economic Partnership (RCEP), and the European Union (EU single market)."
          ]
        },
        {
          "heading": "5. Corporate Drivers: TNCs, MNEs, and the Philippine IT-BPM Industry",
          "points": [
            "**Transnational Corporations (TNCs)**: Enterprises commanding international production chains with revenues frequently surpassing the GDP of sovereign nations.",
            "**Offshore Outsourcing**: Relocating business functions to countries with competitive, educated labor forces.",
            "**The Philippine IT-BPM / BPO Sector**: Employs over 1.7 million direct workers and generates over **$35 billion annually**, making the Philippines a premier global capital for customer contact and IT services alongside India."
          ]
        },
        {
          "heading": "6. Socio-Demographic Drivers: The OFW Phenomenon & Remittances",
          "points": [
            "**Overseas Filipino Workers (OFWs)**: Over 2.3 million Filipinos deployed worldwide as seafarers, healthcare workers, domestic professionals, and engineers.",
            "**Macroeconomic Anchor**: Annual cash remittances exceed **$37 billion** (accounting for ~9% of Philippine GDP).",
            "Remittances stimulate domestic consumer spending, finance education and housing, and provide essential foreign currency reserves protecting the Philippine Peso."
          ]
        },
        {
          "heading": "7. Global Governance & The 'Democratic Deficit'",
          "points": [
            "**The Democratic Deficit**: International economic bodies (IMF, World Bank, WTO, WEF) make far-reaching planetary policy decisions without direct electoral accountability to national populations.",
            "**Transboundary Crises ('Problems Without Passports')**: Challenges exceeding the capacity of any single state: anthropogenic climate change, oceanic pollution, pandemics (COVID-19), and international tax evasion via offshore secrecy havens."
          ]
        },
        {
          "heading": "8. The Counter-Current: Deglobalization & Rising Nationalism",
          "points": [
            "**Deglobalization / Slowbalization**: The deceleration of global economic integration observed following the 2008 financial crisis and the COVID-19 pandemic.",
            "**US-China Economic Decoupling**: Geopolitical tensions leading to technology export controls (semiconductors) and national security blacklists.",
            "**Reshoring & Nearshoring ('Friendshoring')**: Corporations pulling manufacturing closer to home territory to insulate supply chains against external shocks.",
            "**Rise of Economic Nationalism**: Populist political movements enacting protectionist tariffs, tightening immigration quotas, and rejecting multilateral global agreements."
          ]
        }
      ]
    }
  ],
  "flashcards": [
    {
      "id": "fc-w2-1",
      "checkpointId": "cp1",
      "subject": "SPI101",
      "week": "Week 2",
      "question": "What is Subjective Relativism?",
      "answer": "The theory holding that each individual person decides right or wrong for themselves. Captured in: 'What's right for you may not be right for me.'",
      "tag": "Ethical Theory"
    },
    {
      "id": "fc-w2-2",
      "checkpointId": "cp1",
      "subject": "SPI101",
      "week": "Week 2",
      "question": "How does Cultural Relativism differ from Subjective Relativism?",
      "answer": "Cultural Relativism grounds right and wrong in society's collective customs and moral guidelines, whereas Subjective Relativism grounds morality entirely in individual opinion.",
      "tag": "Ethical Theory"
    },
    {
      "id": "fc-w2-3",
      "checkpointId": "cp1",
      "subject": "SPI101",
      "week": "Week 2",
      "question": "What is Divine Command Theory based on?",
      "answer": "It is based on OBEDIENCE to God's will and holy texts, NOT on human reason or calculation.",
      "tag": "Ethical Theory"
    },
    {
      "id": "fc-w2-4",
      "checkpointId": "cp1",
      "subject": "SPI101",
      "week": "Week 2",
      "question": "What is the core principle of Ethical Egoism?",
      "answer": "Each person should focus exclusively on their own self-interest; the morally right act provides the individual with maximum long-term benefit.",
      "tag": "Ethical Theory"
    },
    {
      "id": "fc-w2-5",
      "checkpointId": "cp1",
      "subject": "SPI101",
      "week": "Week 2",
      "question": "Give 3 classic counter-examples that defy Ethical Egoism.",
      "answer": "1) Mother starving herself to give bread to her child. 2) Father working overtime for family needs. 3) Sibling dropping out so others can study.",
      "tag": "Scenario / Application"
    },
    {
      "id": "fc-w2-6",
      "checkpointId": "cp1",
      "subject": "SPI101",
      "week": "Week 2",
      "question": "What is Consequentialism and what is Jeremy Bentham's Utilitarian motto?",
      "answer": "Consequentialism: 'The end justifies the means.' Bentham's Utilitarianism: 'The greatest happiness for the greatest number.'",
      "tag": "Ethical Theory"
    },
    {
      "id": "fc-w2-7",
      "checkpointId": "cp1",
      "subject": "SPI101",
      "week": "Week 2",
      "question": "What is Kantianism (Deontology) and its primary author?",
      "answer": "Authored by 18th-century philosopher Immanuel Kant. It is obligation-based, focusing on duty and pure reason: 'Act morally regardless of the consequences.'",
      "tag": "Ethical Theory"
    },
    {
      "id": "fc-w2-8",
      "checkpointId": "cp1",
      "subject": "SPI101",
      "week": "Week 2",
      "question": "Why is the Anti-Political Dynasty provision in the 1987 PH Constitution non-self-executing?",
      "answer": "It requires an enabling law enacted by Congress. Because passing it conflicts with lawmakers' self-interest, it remained unpassed for decades, violating Kantian duty.",
      "tag": "Philippine Law & Ethics"
    },
    {
      "id": "fc-w2-9",
      "checkpointId": "cp1",
      "subject": "SPI101",
      "week": "Week 2",
      "question": "Why is the persuasive power of law stronger than ethics?",
      "answer": "Law enforces compliance through legal compulsion, sanctions, and imprisonment (e.g. BIR criminal tax summons), whereas ethics relies only on voluntary conscience.",
      "tag": "Law vs Ethics"
    },
    {
      "id": "fc-w2-10",
      "checkpointId": "cp1",
      "subject": "SPI101",
      "week": "Week 2",
      "question": "Differentiate Civil Obligation from Natural Obligation regarding family support.",
      "answer": "Civil: Parents are legally mandated to support minor children (court action available). Natural: Children supporting elderly parents is moral; parents cannot legally compel them under current law.",
      "tag": "Legal Concepts"
    },
    {
      "id": "fc-w2-11",
      "checkpointId": "cp1",
      "subject": "SPI101",
      "week": "Week 2",
      "question": "Why did no one copycat the 2000 LOVE BUG virus after 2000?",
      "answer": "The enactment of RA 8792 (E-Commerce Act) established criminal penalties and prison terms, deterring copycats through legal consequences.",
      "tag": "IT Case Study"
    },
    {
      "id": "fc-w3-1",
      "checkpointId": "cp2",
      "subject": "SPI101",
      "week": "Week 3-4",
      "question": "What are the 4 benefits of following a Professional Code of Ethics?",
      "answer": "1. Ethical Decision Making\n2. High Standards of Practice & Ethical Behavior\n3. Trust and Respect from the General Public\n4. Evaluation Benchmark",
      "tag": "Professional Ethics"
    },
    {
      "id": "fc-w3-2",
      "checkpointId": "cp2",
      "subject": "SPI101",
      "week": "Week 3-4",
      "question": "What does Canon 4 of the Filipino IT Code of Ethics mandate?",
      "answer": "Comply and strictly abide by intellectual property laws, patent laws, and other related laws in respect of Information Technology.",
      "tag": "Filipino IT Code"
    },
    {
      "id": "fc-w3-3",
      "checkpointId": "cp2",
      "subject": "SPI101",
      "week": "Week 3-4",
      "question": "What are the 6 obligations recognized in the AITP Code of Ethics?",
      "answer": "1) Management, 2) Fellow Members, 3) Society, 4) College/University, 5) Employer, and 6) Country.",
      "tag": "Professional Ethics"
    },
    {
      "id": "fc-w3-4",
      "checkpointId": "cp2",
      "subject": "SPI101",
      "week": "Week 3-4",
      "question": "List the 8 Principles of the Software Engineering Code (ACM/IEEE-CS).",
      "answer": "1. Public, 2. Client and Employer, 3. Product, 4. Judgment, 5. Management, 6. Profession, 7. Colleagues, 8. Self.",
      "tag": "ACM / IEEE Principles"
    },
    {
      "id": "fc-w3-5",
      "checkpointId": "cp2",
      "subject": "SPI101",
      "week": "Week 3-4",
      "question": "What are the three properties that make computers unique according to James Moor?",
      "answer": "1. Logical Malleability\n2. Impact on Society\n3. Invisibility Factor",
      "tag": "Computer Ethics Theory"
    },
    {
      "id": "fc-w3-6",
      "checkpointId": "cp2",
      "subject": "SPI101",
      "week": "Week 3-4",
      "question": "What are the 3 kinds of invisibility identified by James Moor?",
      "answer": "1. Invisible Abuse (e.g. backdoors, theft)\n2. Invisible Programming Values (embedded biases/shortcuts)\n3. Invisible Complex Calculation (algorithms humans cannot manually verify)",
      "tag": "Computer Ethics Theory"
    },
    {
      "id": "fc-w3-7",
      "checkpointId": "cp2",
      "subject": "SPI101",
      "week": "Week 3-4",
      "question": "Explain the three 'Levels' of Computer Ethics.",
      "answer": "• Pop: Sensitizing the public via media & TV.\n• Para: Case collection and scenario analysis.\n• Theoretical: Applying scholarly philosophical theories.",
      "tag": "Computer Ethics Levels"
    },
    {
      "id": "fc-w3-8",
      "checkpointId": "cp2",
      "subject": "SPI101",
      "week": "Week 3-4",
      "question": "How many hours a week do Filipinos spend on social media compared to global average?",
      "answer": "Filipinos average 53 hours a week, which is 11 hours higher than the global average of 42 hours a week (Philippines = Social Media Capital).",
      "tag": "Philippine Context"
    },
    {
      "id": "fc-w3-9",
      "checkpointId": "cp2",
      "subject": "SPI101",
      "week": "Week 3-4",
      "question": "What are the 3 exemptions where taking/posting unauthorized media of a person is allowed?",
      "answer": "1. News of the day / press items.\n2. General public welfare (e.g. viral abusive traffic enforcer).\n3. Public personalities in public places (e.g. Pacquiao in public, never in restroom).",
      "tag": "Photo Ethics & Law"
    },
    {
      "id": "fc-w3-10",
      "checkpointId": "cp2",
      "subject": "SPI101",
      "week": "Week 3-4",
      "question": "What are the 3 crucial goals of the Hacking Community according to its constitution?",
      "answer": "a) Direct Democracy in cyberspace.\nb) Belief that information should be free to all.\nc) Testing and exposing vulnerabilities of data storage systems.",
      "tag": "Hacker Ethics"
    },
    {
      "id": "fc-w5-1",
      "checkpointId": "cp3",
      "subject": "SPI101",
      "week": "Week 5-6",
      "question": "How many times is the word 'PRIVACY' mentioned in the 1987 PH Constitution and where?",
      "answer": "Only ONCE, in Article III, Section 3 ('The privacy of communication and correspondence shall be inviolable...').",
      "tag": "Constitutional Law"
    },
    {
      "id": "fc-w5-2",
      "checkpointId": "cp3",
      "subject": "SPI101",
      "week": "Week 5-6",
      "question": "What is the consequence of evidence seized in violation of privacy under Art. III Sec. 3?",
      "answer": "It is inadmissible for any purpose in any proceeding (The Exclusionary Rule / Fruit of the Poisonous Tree).",
      "tag": "Constitutional Law"
    },
    {
      "id": "fc-w5-3",
      "checkpointId": "cp3",
      "subject": "SPI101",
      "week": "Week 5-6",
      "question": "What are the 3 lawful exceptions where privacy can be breached?",
      "answer": "1. Lawful Court Order (Search Warrant issued on Probable Cause).\n2. Public Order or Safety (e.g. MRT/LRT bag searches).\n3. Express provision of the law (e.g. AMLA bank reports >= P300,000).",
      "tag": "Constitutional Law"
    },
    {
      "id": "fc-w5-4",
      "checkpointId": "cp3",
      "subject": "SPI101",
      "week": "Week 5-6",
      "question": "What is the two-step Rational Relationship Test used by the Supreme Court?",
      "answer": "1. Determine if the policy has a reasonable purpose/rational basis (legitimate end).\n2. Determine if the policy is reasonably related to achieving that legitimate end.",
      "tag": "Judicial Doctrine"
    },
    {
      "id": "fc-w5-5",
      "checkpointId": "cp3",
      "subject": "SPI101",
      "week": "Week 5-6",
      "question": "Why did the Supreme Court uphold the SALN requirement under RA 3019?",
      "answer": "It satisfies the rational relationship test: minimizing official corruption and maintaining honesty in public service outweighs individual privacy claims.",
      "tag": "Landmark Case"
    },
    {
      "id": "fc-w5-6",
      "checkpointId": "cp3",
      "subject": "SPI101",
      "week": "Week 5-6",
      "question": "What does the Anti-Wiretapping Act (RA 4200) require for private recording?",
      "answer": "It requires authorization/consent from ALL parties involved in the private conversation.",
      "tag": "Philippine Law"
    },
    {
      "id": "fc-w5-7",
      "checkpointId": "cp3",
      "subject": "SPI101",
      "week": "Week 5-6",
      "question": "Can a wife break into her husband's private cabinet to search for proof of adultery?",
      "answer": "NO. The Supreme Court ruled marriage does not strip an individual of their right to privacy; ransacking for infidelity evidence is unlawful.",
      "tag": "Spousal Privacy"
    },
    {
      "id": "fc-w5-8",
      "checkpointId": "cp3",
      "subject": "SPI101",
      "week": "Week 5-6",
      "question": "What is the privacy expectation of convicted prisoners and detainees?",
      "answer": "They have a diminished expectation of privacy rights inherent to lawful detention and security under RA 7438.",
      "tag": "Prisoner Rights"
    },
    {
      "id": "fc-w5-9",
      "checkpointId": "cp3",
      "subject": "SPI101",
      "week": "Week 5-6",
      "question": "What law is RA 10173 and what are its key processing principles?",
      "answer": "The Data Privacy Act of 2012. Section 11 Principles: Specified/legitimate purpose, fairly/lawfully processed, accurate/updated, adequate & not excessive, retained only as needed, identifiable form limited.",
      "tag": "Data Privacy Act"
    },
    {
      "id": "fc-w5-10",
      "checkpointId": "cp3",
      "subject": "SPI101",
      "week": "Week 5-6",
      "question": "What is Due Process of Law and where did it originate conceptually?",
      "answer": "Definition: 'A law which hears before it condemns; which proceeds upon inquiry, and renders judgment only after trial.' Originates conceptually from the Garden of Eden.",
      "tag": "Due Process"
    },
    {
      "id": "fc-w5-11",
      "checkpointId": "cp3",
      "subject": "SPI101",
      "week": "Week 5-6",
      "question": "How do software engineers apply the Due Process Clause in application design?",
      "answer": "By creating confirmation prompts before destructive actions (e.g. 'Do you want to save changes to document.doc? [Yes] [No] [Cancel]'), granting the user a right to be heard before loss of data.",
      "tag": "Software Engineering & Law"
    },
    {
      "id": "fc-ms-1",
      "checkpointId": "ms-cp1",
      "subject": "MS101",
      "week": "Week 2-4",
      "question": "What is the formal definition of a Proposition in Discrete Mathematics?",
      "answer": "A proposition is a declarative sentence that is either true or false, but not both.",
      "tag": "Propositional Logic"
    },
    {
      "id": "fc-ms-2",
      "checkpointId": "ms-cp1",
      "subject": "MS101",
      "week": "Week 2-4",
      "question": "Why is 'What time is it?' NOT a proposition?",
      "answer": "Because it is a question and has no truth value (cannot be judged as true or false).",
      "tag": "Propositional Logic"
    },
    {
      "id": "fc-ms-3",
      "checkpointId": "ms-cp1",
      "subject": "MS101",
      "week": "Week 2-4",
      "question": "Under what condition is the implication p → q FALSE?",
      "answer": "p → q is FALSE only when p is True and q is False (T → F = F). In all other 3 combinations, it is True.",
      "tag": "Truth Values"
    },
    {
      "id": "fc-ms-4",
      "checkpointId": "ms-cp1",
      "subject": "MS101",
      "week": "Week 2-4",
      "question": "What is the precedence order of the 5 basic logical connectives?",
      "answer": "1. NOT (~)\n2. AND (∧)\n3. OR (∨)\n4. IF-THEN (→)\n5. IF AND ONLY IF (↔)",
      "tag": "Connectives"
    },
    {
      "id": "fc-ms-5",
      "checkpointId": "ms-cp1",
      "subject": "MS101",
      "week": "Week 2-4",
      "question": "How many rows are in a truth table for 4 propositional variables (p, q, r, s)?",
      "answer": "2^n = 2^4 = 16 rows.",
      "tag": "Truth Tables"
    },
    {
      "id": "fc-ms-6",
      "checkpointId": "ms-cp1",
      "subject": "MS101",
      "week": "Week 2-4",
      "question": "Differentiate a Tautology, Contradiction, and Contingency.",
      "answer": "• Tautology: Always True under every interpretation.\n• Contradiction: Always False under every interpretation.\n• Contingency: True for some, False for others.",
      "tag": "Sentence Properties"
    },
    {
      "id": "fc-ms-7",
      "checkpointId": "ms-cp1",
      "subject": "MS101",
      "week": "Week 2-4",
      "question": "What is the difference between Universal (∀) and Existential (∃) Quantifiers?",
      "answer": "∀x claims the predicate holds for ALL elements in the domain.\n∃x claims the predicate holds for AT LEAST ONE element in the domain.",
      "tag": "Quantifiers"
    },
    {
      "id": "fc-ms-8",
      "checkpointId": "ms-cp1",
      "subject": "MS101",
      "week": "Week 2-4",
      "question": "What is the cardinality of set B = {1, {2, 3, 4}, ∅}?",
      "answer": "Cardinality |B| = 3. (The elements are: 1, the inner set {2,3,4}, and the empty set ∅).",
      "tag": "Set Theory"
    },
    {
      "id": "fc-ms-9",
      "checkpointId": "ms-cp1",
      "subject": "MS101",
      "week": "Week 2-4",
      "question": "What is a Power Set P(A) and what is its formula for size?",
      "answer": "The set of all subsets of A. Formula: |P(A)| = 2^|A|.",
      "tag": "Power Set"
    },
    {
      "id": "fc-ms-10",
      "checkpointId": "ms-cp2",
      "subject": "MS101",
      "week": "Week 5",
      "question": "Are the numbers 0 and 1 considered prime or composite?",
      "answer": "Neither! By mathematical convention, 0 and 1 are NEITHER prime nor composite.",
      "tag": "Number Theory"
    },
    {
      "id": "fc-ms-11",
      "checkpointId": "ms-cp2",
      "subject": "MS101",
      "week": "Week 5",
      "question": "State the Division Algorithm formula and bounds.",
      "answer": "a = dq + r, where 0 ≤ r < d (a = dividend, d = divisor, q = quotient, r = remainder).",
      "tag": "Number Theory"
    },
    {
      "id": "fc-ms-12",
      "checkpointId": "ms-cp2",
      "subject": "MS101",
      "week": "Week 5",
      "question": "What is the relationship between GCD, LCM, and two positive integers a and b?",
      "answer": "gcd(a, b) × lcm(a, b) = a × b.",
      "tag": "GCD / LCM"
    },
    {
      "id": "fc-ms-13",
      "checkpointId": "ms-cp3",
      "subject": "MS101",
      "week": "Week 6",
      "question": "What is the difference between an Axiom and a Theorem?",
      "answer": "An Axiom is accepted as true without proof. A Theorem is a statement that must be logically proven to be true.",
      "tag": "Mathematical Logic"
    },
    {
      "id": "fc-ms-14",
      "checkpointId": "ms-cp3",
      "subject": "MS101",
      "week": "Week 6",
      "question": "What is the contrapositive of the implication p → q?",
      "answer": "¬q → ¬p (which is logically equivalent to p → q).",
      "tag": "Proofs"
    },
    {
      "id": "fc-ms-15",
      "checkpointId": "ms-cp3",
      "subject": "MS101",
      "week": "Week 6",
      "question": "Can Mathematical Induction be used to discover new theorems?",
      "answer": "NO. Mathematical induction cannot be used to discover theorems, only to prove them.",
      "tag": "Induction"
    },
    {
      "id": "fc-py1-1",
      "checkpointId": "ipt-py1",
      "subject": "IPT102",
      "week": "Week 1-2",
      "question": "Who created the Python programming language, and when?",
      "answer": "Guido van Rossum created Python between 1985 and 1990. Source code is licensed under the GNU General Public License (GPL).",
      "tag": "Python History"
    },
    {
      "id": "fc-py1-2",
      "checkpointId": "ipt-py1",
      "subject": "IPT102",
      "week": "Week 1-2",
      "question": "What title did Guido van Rossum hold until stepping down on July 12, 2018?",
      "answer": "Benevolent Dictator For Life (BDFL). He later served on the Python Steering Council through 2019.",
      "tag": "Python History"
    },
    {
      "id": "fc-py1-3",
      "checkpointId": "ipt-py1",
      "subject": "IPT102",
      "week": "Week 1-2",
      "question": "What does it mean that Python is dynamically typed and garbage collected?",
      "answer": "Dynamically typed means variable data types do not need explicit declaration and are bound at runtime. Garbage collected means memory allocation and cleanup occur automatically.",
      "tag": "Core Concepts"
    },
    {
      "id": "fc-py1-4",
      "checkpointId": "ipt-py1",
      "subject": "IPT102",
      "week": "Week 1-2",
      "question": "Why is Python classified as an interpreted language?",
      "answer": "Python source code is processed at runtime by the interpreter line-by-line; programs do not need to be compiled into machine binaries before execution.",
      "tag": "Execution"
    },
    {
      "id": "fc-py1-5",
      "checkpointId": "ipt-py1",
      "subject": "IPT102",
      "week": "Week 1-2",
      "question": "What was the very first Unix IDE developed for Python?",
      "answer": "IDLE. It is bundled across Unix, Macintosh, and Windows systems.",
      "tag": "IDEs"
    },
    {
      "id": "fc-py1-6",
      "checkpointId": "ipt-py1",
      "subject": "IPT102",
      "week": "Week 1-2",
      "question": "What was the first dedicated Windows GUI interface and IDE for Python?",
      "answer": "PythonWin.",
      "tag": "IDEs"
    },
    {
      "id": "fc-py1-7",
      "checkpointId": "ipt-py1",
      "subject": "IPT102",
      "week": "Week 1-2",
      "question": "Can Python be integrated with languages like C, C++, and Java?",
      "answer": "Yes. Python can be easily integrated with C, C++, COM, ActiveX, CORBA, and Java (via Jython).",
      "tag": "Integration"
    },
    {
      "id": "fc-py1-8",
      "checkpointId": "ipt-py1",
      "subject": "IPT102",
      "week": "Week 1-2",
      "question": "What programming paradigms does Python support?",
      "answer": "Python supports functional, structured, and object-oriented programming (OOP) paradigms.",
      "tag": "Paradigms"
    },
    {
      "id": "fc-py2-1",
      "checkpointId": "ipt-py2",
      "subject": "IPT102",
      "week": "Week 3-4",
      "question": "How does Python delimit blocks of code such as if-statements and loops?",
      "answer": "Python uses indentation (leading whitespace) to define code blocks. The standard convention is 4 spaces (at least 1 is required). Skipping indentation causes an IndentationError.",
      "tag": "Indentation"
    },
    {
      "id": "fc-py2-2",
      "checkpointId": "ipt-py2",
      "subject": "IPT102",
      "week": "Week 3-4",
      "question": "What symbol is used for writing comments in Python?",
      "answer": "The hash symbol (#). Python renders the remainder of the line as a comment.",
      "tag": "Comments"
    },
    {
      "id": "fc-py2-3",
      "checkpointId": "ipt-py2",
      "subject": "IPT102",
      "week": "Week 3-4",
      "question": "What are the rules for legal Python variable names?",
      "answer": "Must start with a letter or underscore (_); cannot start with a number; can only contain alphanumeric characters and underscores (A-z, 0-9, _); strictly case-sensitive.",
      "tag": "Variables"
    },
    {
      "id": "fc-py2-4",
      "checkpointId": "ipt-py2",
      "subject": "IPT102",
      "week": "Week 3-4",
      "question": "How does collection unpacking work in Python?",
      "answer": "Extracts values from a list or tuple into individual variables in one line: fruits = ['apple', 'banana', 'cherry']; x, y, z = fruits.",
      "tag": "Unpacking"
    },
    {
      "id": "fc-py2-5",
      "checkpointId": "ipt-py2",
      "subject": "IPT102",
      "week": "Week 3-4",
      "question": "What happens if you combine a string and an integer with the + operator in Python?",
      "answer": "Python raises a TypeError. Unlike JavaScript, Python does not automatically coerce integers to strings during + operations. Use print(x, y) or str(5).",
      "tag": "Output"
    },
    {
      "id": "fc-py2-6",
      "checkpointId": "ipt-py2",
      "subject": "IPT102",
      "week": "Week 3-4",
      "question": "What is the purpose of the 'global' keyword inside a function?",
      "answer": "It allows a function to bind to and modify a variable in the global scope, or create a new global variable from within the function.",
      "tag": "Scope"
    },
    {
      "id": "fc-py2-7",
      "checkpointId": "ipt-py2",
      "subject": "IPT102",
      "week": "Week 3-4",
      "question": "What are the three built-in numeric types in Python?",
      "answer": "int (integers of unlimited length), float (floating-point decimals or scientific notation e), and complex (numbers with imaginary part j, e.g. 3+5j).",
      "tag": "Data Types"
    },
    {
      "id": "fc-py2-8",
      "checkpointId": "ipt-py2",
      "subject": "IPT102",
      "week": "Week 3-4",
      "question": "Can complex numbers be converted into int or float?",
      "answer": "No. Python strictly prohibits converting complex numbers into another number type.",
      "tag": "Numbers"
    },
    {
      "id": "fc-py2-9",
      "checkpointId": "ipt-py2",
      "subject": "IPT102",
      "week": "Week 3-4",
      "question": "Does Python have a character data type?",
      "answer": "No. Python does not have a character data type; a single character is simply a string with a length of 1.",
      "tag": "Strings"
    },
    {
      "id": "fc-py2-10",
      "checkpointId": "ipt-py2",
      "subject": "IPT102",
      "week": "Week 3-4",
      "question": "What is the result of b = 'Hello, World!'; print(b[2:5])?",
      "answer": "'llo' (characters from index 2 up to index 4; the end index 5 is not included).",
      "tag": "Slicing"
    },
    {
      "id": "fc-py2-11",
      "checkpointId": "ipt-py2",
      "subject": "IPT102",
      "week": "Week 3-4",
      "question": "Do string methods in Python modify the original string in place?",
      "answer": "No. Strings in Python are immutable. All string methods (upper, lower, strip, replace, split) return new string values.",
      "tag": "Immutability"
    },
    {
      "id": "fc-py2-12",
      "checkpointId": "ipt-py2",
      "subject": "IPT102",
      "week": "Week 3-4",
      "question": "How do you generate a random integer between 1 and 9 in Python?",
      "answer": "import random; random.randrange(1, 10). Note that 10 is excluded.",
      "tag": "Random"
    },
    {
      "id": "fc-ipt1-9",
      "checkpointId": "ipt-cp1",
      "subject": "IPT102",
      "week": "Week 2 (Web)",
      "question": "Why is ASP.NET Core recommended over legacy ASP.NET (.NET Framework)?",
      "answer": "ASP.NET Core is modern, 100% open source, cross-platform (Windows, Linux, macOS), and delivers superior performance on .NET 8/9. Legacy ASP.NET is Windows-only and restricted to maintenance.",
      "tag": "ASP.NET Core"
    },
    {
      "id": "fc-ipt1-10",
      "checkpointId": "ipt-cp1",
      "subject": "IPT102",
      "week": "Week 2 (Web)",
      "question": "What is the key architectural difference between Razor Pages and MVC in ASP.NET Core?",
      "answer": "Razor Pages is page-focused, streamlining model and controller code directly within the Razor Page (.cshtml and .cshtml.cs). MVC separates concerns into distinct Controller, Model, and View folders.",
      "tag": "Razor Pages"
    },
    {
      "id": "fc-ipt1-11",
      "checkpointId": "ipt-cp1",
      "subject": "IPT102",
      "week": "Week 2 (Web)",
      "question": "What is the purpose of the 'wwwroot' folder in an ASP.NET Core project?",
      "answer": "It is the root directory for static website assets (CSS, images, JavaScript, and favicon.ico) served directly to browser clients.",
      "tag": "Project Anatomy"
    },
    {
      "id": "fc-ipt1-12",
      "checkpointId": "ipt-cp1",
      "subject": "IPT102",
      "week": "Week 2 (Web)",
      "question": "What does the Hot Reload feature in Visual Studio do?",
      "answer": "Hot Reload allows developers to edit code, markup, and styles while the application is running without having to manually pause or rebuild the project.",
      "tag": "Visual Studio"
    },
    {
      "id": "fc-ipt1-13",
      "checkpointId": "ipt-cp1",
      "subject": "IPT102",
      "week": "Week 2 (Web)",
      "question": "How do you remove unused using statements in Visual Studio using a shortcut?",
      "answer": "Select or hover over a greyed-out using directive, click the Quick Actions light bulb, and select 'Remove unnecessary usings'.",
      "tag": "Visual Studio"
    },
    {
      "id": "fc-ipt1-1",
      "checkpointId": "ipt-cp1",
      "subject": "IPT102",
      "week": "Week 2",
      "question": "What is the primary difference between a static page and a dynamic website?",
      "answer": "Static pages require manual editing to change content. Dynamic websites offer unique, customized content to visitors each time based on demographics, time of day, location, and scripting.",
      "tag": "Web Concepts"
    },
    {
      "id": "fc-ipt1-2",
      "checkpointId": "ipt-cp1",
      "subject": "IPT102",
      "week": "Week 2",
      "question": "Differentiate Client-side Scripting from Server-side Scripting.",
      "answer": "Client-side scripting (like JavaScript) executes in the browser responding to user actions (clicks, keypresses). Server-side scripting executes on the server before sending HTML to the browser (authentication, shopping carts, database access).",
      "tag": "Scripting"
    },
    {
      "id": "fc-ipt1-3",
      "checkpointId": "ipt-cp1",
      "subject": "IPT102",
      "week": "Week 2",
      "question": "How can an ordinary HTML page be converted into an ASP.NET page?",
      "answer": "Any standard HTML page can be renamed with the .aspx file extension.",
      "tag": "ASP.NET Syntax"
    },
    {
      "id": "fc-ipt1-4",
      "checkpointId": "ipt-cp1",
      "subject": "IPT102",
      "week": "Week 2",
      "question": "What directive attribute is required to access an HTML element in server-side C# code?",
      "answer": "The `runat=\"server\"` attribute (e.g. `<input type=\"text\" id=\"txt\" runat=\"server\">`).",
      "tag": "Server Controls"
    },
    {
      "id": "fc-ipt1-5",
      "checkpointId": "ipt-cp1",
      "subject": "IPT102",
      "week": "Week 2",
      "question": "List the 5 types of web controls used in ASP.NET.",
      "answer": "1. HTML controls\n2. HTML Server controls\n3. ASP.NET Server controls\n4. ASP.NET Ajax Server controls\n5. User controls and custom controls.",
      "tag": "Web Controls"
    },
    {
      "id": "fc-ipt1-6",
      "checkpointId": "ipt-cp1",
      "subject": "IPT102",
      "week": "Week 2",
      "question": "What is the exact execution sequence in the ASP.NET Page Event Lifecycle?",
      "answer": "1. Initialize (Page_Init)\n2. Restore Control State\n3. Load Page (Page_Load)\n4. Control Events (Change & Action)\n5. Save Control State\n6. Render\n7. Unload Page (Page_Unload)",
      "tag": "Page Lifecycle"
    },
    {
      "id": "fc-ipt1-7",
      "checkpointId": "ipt-cp1",
      "subject": "IPT102",
      "week": "Week 2",
      "question": "What are the 4 categories of Web/HTML Server Controls in ASP.NET?",
      "answer": "1. Basic controls (`<asp:button>`, `<asp:textbox>`)\n2. List controls (`<asp:dropdownlist>`, `<asp:listbox>`)\n3. Rich controls (`<asp:calendar>`)\n4. Validation controls",
      "tag": "Control Types"
    },
    {
      "id": "fc-ipt1-8",
      "checkpointId": "ipt-cp1",
      "subject": "IPT102",
      "week": "Week 2",
      "question": "Why does ASP.NET discourage the use of render code blocks (`<%= %>` and `<% %>`)?",
      "answer": "Render blocks mix presentation and logic. ASP.NET encourages `<script runat=\"server\">` with event-driven code in code-behind instead.",
      "tag": "Best Practices"
    },
    {
      "id": "fc-ipt2-1",
      "checkpointId": "ipt-cp2",
      "subject": "IPT102",
      "week": "Week 3",
      "question": "What do the letters M, V, and C stand for in ASP.NET MVC?",
      "answer": "Model (represents the data), View (is the user interface), and Controller (is the request handler).",
      "tag": "MVC Architecture"
    },
    {
      "id": "fc-ipt2-2",
      "checkpointId": "ipt-cp2",
      "subject": "IPT102",
      "week": "Week 3",
      "question": "What is the primary role of the Model in MVC?",
      "answer": "The Model represents the shape of the data. C# classes describe models, and model objects store and manipulate data retrieved from databases.",
      "tag": "Model"
    },
    {
      "id": "fc-ipt2-3",
      "checkpointId": "ipt-cp2",
      "subject": "IPT102",
      "week": "Week 3",
      "question": "Why will IIS never serve files directly from the App_Data folder?",
      "answer": "For security reasons. App_Data contains internal application database files (.mdf, LocalDB, XML) that should never be publicly downloadable.",
      "tag": "Folder Structure"
    },
    {
      "id": "fc-ipt2-4",
      "checkpointId": "ipt-cp2",
      "subject": "IPT102",
      "week": "Week 3",
      "question": "What strict naming convention must all controller class files follow in ASP.NET MVC?",
      "answer": "Every controller class name and file must end with the word 'Controller' (e.g. HomeController, StudentController).",
      "tag": "Controllers"
    },
    {
      "id": "fc-ipt2-5",
      "checkpointId": "ipt-cp2",
      "subject": "IPT102",
      "week": "Week 3",
      "question": "What is the purpose of the Global.asax file?",
      "answer": "It allows you to write code that runs in response to application-level lifecycle events (Application_Start, Application_BeginRequest, Application_Error, Session_Start, Session_End).",
      "tag": "Configuration"
    },
    {
      "id": "fc-ipt2-6",
      "checkpointId": "ipt-cp2",
      "subject": "IPT102",
      "week": "Week 3",
      "question": "What is the default URL pattern configured in RouteConfig.cs?",
      "answer": "{controller}/{action}/{id} with defaults { controller = \"Home\", action = \"Index\", id = UrlParameter.Optional }.",
      "tag": "Routing"
    },
    {
      "id": "fc-ipt2-7",
      "checkpointId": "ipt-cp2",
      "subject": "IPT102",
      "week": "Week 3",
      "question": "Where is the route registration method called in an ASP.NET MVC project?",
      "answer": "Inside the Application_Start() event handler in Global.asax.cs.",
      "tag": "Routing"
    },
    {
      "id": "fc-ipt2-8",
      "checkpointId": "ipt-cp2",
      "subject": "IPT102",
      "week": "Week 3",
      "question": "For the URL 'http://localhost:1234/student/edit/100', what are the Controller, Action, and ID?",
      "answer": "Controller: StudentController, Action: Edit(), ID parameter: 100.",
      "tag": "Routing"
    },
    {
      "id": "fc-ipt3-1",
      "checkpointId": "ipt-cp3",
      "subject": "IPT102",
      "week": "Week 4",
      "question": "From which base class must every ASP.NET MVC controller inherit?",
      "answer": "System.Web.Mvc.Controller.",
      "tag": "Controllers"
    },
    {
      "id": "fc-ipt3-2",
      "checkpointId": "ipt-cp3",
      "subject": "IPT102",
      "week": "Week 4",
      "question": "What are the 3 strict restrictions on Action Methods in a Controller?",
      "answer": "1. Must be public (cannot be private or protected)\n2. Cannot be overloaded\n3. Cannot be a static method.",
      "tag": "Action Methods"
    },
    {
      "id": "fc-ipt3-3",
      "checkpointId": "ipt-cp3",
      "subject": "IPT102",
      "week": "Week 4",
      "question": "What is Scaffolding in ASP.NET MVC?",
      "answer": "An automatic code generation framework that reduces development time by creating controllers, views, and templates based on data models.",
      "tag": "Scaffolding"
    },
    {
      "id": "fc-ipt3-4",
      "checkpointId": "ipt-cp3",
      "subject": "IPT102",
      "week": "Week 4",
      "question": "What does the ViewResult class represent and which controller helper method returns it?",
      "answer": "Represents rendered HTML markup; returned by the View() helper method.",
      "tag": "ActionResult"
    },
    {
      "id": "fc-ipt3-5",
      "checkpointId": "ipt-cp3",
      "subject": "IPT102",
      "week": "Week 4",
      "question": "Which ActionResult class returns raw JSON data for AJAX calls?",
      "answer": "JsonResult (returned by the Json() helper method).",
      "tag": "ActionResult"
    },
    {
      "id": "fc-ipt3-6",
      "checkpointId": "ipt-cp3",
      "subject": "IPT102",
      "week": "Week 4",
      "question": "What is the purpose of the [ActionName] attribute?",
      "answer": "It specifies an alternative public action name in the URL rather than the underlying C# method name (e.g. [ActionName(\"find\")] for GetById()).",
      "tag": "Action Selectors"
    },
    {
      "id": "fc-ipt3-7",
      "checkpointId": "ipt-cp3",
      "subject": "IPT102",
      "week": "Week 4",
      "question": "When should you apply the [NonAction] attribute?",
      "answer": "When you want a public method in a Controller class that should NOT be treated as an invokable HTTP action method.",
      "tag": "Action Selectors"
    },
    {
      "id": "fc-ipt3-8",
      "checkpointId": "ipt-cp3",
      "subject": "IPT102",
      "week": "Week 4",
      "question": "If no ActionVerb is specified on an action method, which HTTP verb does it handle by default?",
      "answer": "HttpGet by default.",
      "tag": "Action Verbs"
    },
    {
      "id": "fc-ipt4-1",
      "checkpointId": "ipt-cp4",
      "subject": "IPT102",
      "week": "Week 5",
      "question": "What file extension is used for C# Razor views versus Visual Basic Razor views?",
      "answer": "C# Razor views use .cshtml; Visual Basic Razor views use .vbhtml.",
      "tag": "Razor Engine"
    },
    {
      "id": "fc-ipt4-2",
      "checkpointId": "ipt-cp4",
      "subject": "IPT102",
      "week": "Week 5",
      "question": "How are Razor multi-statement code blocks enclosed?",
      "answer": "Enclosed in @{ ... } and each statement must end with a semicolon (;).",
      "tag": "Razor Syntax"
    },
    {
      "id": "fc-ipt4-3",
      "checkpointId": "ipt-cp4",
      "subject": "IPT102",
      "week": "Week 5",
      "question": "How does the web server execute a Razor page before sending it to the client?",
      "answer": "The server runs the Razor code first to generate pure HTML on the fly. The browser only receives and renders static HTML.",
      "tag": "Execution Pipeline"
    },
    {
      "id": "fc-ipt4-4",
      "checkpointId": "ipt-cp4",
      "subject": "IPT102",
      "week": "Week 5",
      "question": "How do you output an inline variable or C# expression in Razor?",
      "answer": "Prefix the variable or expression with the @ symbol (e.g. @DateTime.Now.ToShortDateString()).",
      "tag": "Razor Syntax"
    },
    {
      "id": "fc-ipt4-5",
      "checkpointId": "ipt-cp4",
      "subject": "IPT102",
      "week": "Week 5",
      "question": "Write the Razor syntax for an if-else statement checking if Hour > 12.",
      "answer": "@{ var txt = \"\"; if(DateTime.Now.Hour > 12) { txt = \"Good Evening\"; } else { txt = \"Good Morning\"; } }",
      "tag": "Control Flow"
    },
    {
      "id": "fc-ipt4-6",
      "checkpointId": "ipt-cp4",
      "subject": "IPT102",
      "week": "Week 5",
      "question": "How do you read posted user input in Razor views and convert it to an integer?",
      "answer": "Using Request[\"fieldName\"] and calling the .AsInt() method (e.g. var num = Request[\"text1\"].AsInt();).",
      "tag": "Form Processing"
    },
    {
      "id": "fc-ipt4-7",
      "checkpointId": "ipt-cp4",
      "subject": "IPT102",
      "week": "Week 5",
      "question": "What condition in Razor is used to test if a page was requested via HTTP POST?",
      "answer": "if (IsPost) { ... }.",
      "tag": "Form Processing"
    },
    {
      "id": "fc-ipt5-1",
      "checkpointId": "ipt-cp5",
      "subject": "IPT102",
      "week": "Week 6",
      "question": "What is an HTML Helper in ASP.NET MVC?",
      "answer": "An extension method of the HtmlHelper class used to generate HTML markup (form elements, labels, links) dynamically in Razor views.",
      "tag": "HTML Helpers"
    },
    {
      "id": "fc-ipt5-2",
      "checkpointId": "ipt-cp5",
      "subject": "IPT102",
      "week": "Week 6",
      "question": "What prefix is always used to invoke HTML helpers in a Razor view?",
      "answer": "@Html (e.g. @Html.TextBox(\"name\")).",
      "tag": "Helper Syntax"
    },
    {
      "id": "fc-ipt5-3",
      "checkpointId": "ipt-cp5",
      "subject": "IPT102",
      "week": "Week 6",
      "question": "What is the key difference between @Html.TextBox() and @Html.TextBoxFor()?",
      "answer": "@Html.TextBox() is loosely typed (takes string names). @Html.TextBoxFor() is strongly typed (takes lambda expressions bound to model properties).",
      "tag": "Typed Helpers"
    },
    {
      "id": "fc-ipt5-4",
      "checkpointId": "ipt-cp5",
      "subject": "IPT102",
      "week": "Week 6",
      "question": "Which HTML control is rendered by @Html.Password(\"Password\")?",
      "answer": "`<input type=\"password\">`, which masks user input with asterisks (*).",
      "tag": "Helpers"
    },
    {
      "id": "fc-ipt5-5",
      "checkpointId": "ipt-cp5",
      "subject": "IPT102",
      "week": "Week 6",
      "question": "Write the helper syntax to generate a RadioButton for Male that is checked by default.",
      "answer": "@Html.RadioButton(\"Gender\", \"Male\", true, new { id = \"male\" }) Male",
      "tag": "Helpers"
    },
    {
      "id": "fc-ipt5-6",
      "checkpointId": "ipt-cp5",
      "subject": "IPT102",
      "week": "Week 6",
      "question": "Which HTML Helper creates a multi-line text input (`<textarea>`)?",
      "answer": "@Html.TextArea() or @Html.TextAreaFor().",
      "tag": "Helpers"
    },
    {
      "id": "fc-ipt5-7",
      "checkpointId": "ipt-cp5",
      "subject": "IPT102",
      "week": "Week 6",
      "question": "How is a DropDownList populated from a list of courses in Razor?",
      "answer": "@Html.DropDownList(\"ddlCourses\", new SelectList(strCourses), \"Select Course\")",
      "tag": "DropDownList"
    },
    {
      "id": "fc-ipt5-8",
      "checkpointId": "ipt-cp5",
      "subject": "IPT102",
      "week": "Week 6",
      "question": "Which HTML Helper renders an anchor tag (`<a>`)?",
      "answer": "@Html.ActionLink().",
      "tag": "Helpers"
    },
    {
      "id": "fc-sia-1",
      "checkpointId": "sia-cp1",
      "subject": "SIA101",
      "week": "Week 2",
      "question": "What is System Integration?",
      "answer": "Combining different sub-system components into a unified, cohesive large system to ensure continuous functionality and data interoperability.",
      "tag": "SIA Fundamentals"
    },
    {
      "id": "fc-sia-2",
      "checkpointId": "sia-cp1",
      "subject": "SIA101",
      "week": "Week 2",
      "question": "What is System Architecture?",
      "answer": "A conceptual model and formal description/representation that defines the structure, behavior, and more views of a system.",
      "tag": "SIA Fundamentals"
    },
    {
      "id": "fc-sia-3",
      "checkpointId": "sia-cp1",
      "subject": "SIA101",
      "week": "Week 2",
      "question": "What does Enterprise Application Integration (EAI) incorporate?",
      "answer": "It incorporates methods, concepts, and tools for the classification, connection, and coordination of applications within organizations.",
      "tag": "Integration Types"
    },
    {
      "id": "fc-sia-4",
      "checkpointId": "sia-cp1",
      "subject": "SIA101",
      "week": "Week 2",
      "question": "What are the three (3) message components in a UN/EDIFACT transfer unit?",
      "answer": "1. Event (trigger/action)\n2. Reference Data (catalog/master context)\n3. Control Information (headers, routing, metadata).",
      "tag": "EDI Standards"
    },
    {
      "id": "fc-sia-5",
      "checkpointId": "sia-cp1",
      "subject": "SIA101",
      "week": "Week 2",
      "question": "What are the two (2) parts of a message in UML?",
      "answer": "1. Event (the dispatch trigger)\n2. Information (the arguments/data payload).",
      "tag": "UML Modeling"
    },
    {
      "id": "fc-sia-6",
      "checkpointId": "sia-cp1",
      "subject": "SIA101",
      "week": "Week 2",
      "question": "What organization publishes the XML standard, and what styling standard does it include?",
      "answer": "Published by the W3C (World Wide Web Consortium); includes complementary standards like XSL (eXtensible Stylesheet Language).",
      "tag": "Data Standards"
    },
    {
      "id": "fc-sia-7",
      "checkpointId": "sia-cp1",
      "subject": "SIA101",
      "week": "Week 2",
      "question": "What are the four (4) types of prototyping in requirement elicitation?",
      "answer": "a. Rapid Throwaway Prototype\nb. Evolutionary Prototype\nc. Incremental Prototype\nd. Extreme Prototype.",
      "tag": "Prototyping"
    },
    {
      "id": "fc-sia-8",
      "checkpointId": "sia-cp1",
      "subject": "SIA101",
      "week": "Week 2",
      "question": "What is Reverse Engineering in requirement elicitation?",
      "answer": "Deconstructing an existing legacy system or competitor solution to extract its architectural rules, data schemas, and functional behavior.",
      "tag": "Elicitation"
    },
    {
      "id": "fc-sia-9",
      "checkpointId": "sia-cp1",
      "subject": "SIA101",
      "week": "Week 2",
      "question": "Why should negative questions be avoided in stakeholder surveys?",
      "answer": "Negative questions cause cognitive confusion and double-negative misunderstandings, resulting in inverted or erroneous respondent answers.",
      "tag": "Survey Rules"
    },
    {
      "id": "fc-sia-10",
      "checkpointId": "sia-cp1",
      "subject": "SIA101",
      "week": "Week 2",
      "question": "What is the primary difference between a Focus Group and an Interview?",
      "answer": "A Focus Group is a moderated group discussion assessing collective user perceptions and attitudes, while an Interview is a one-on-one structured dialogue.",
      "tag": "Elicitation"
    },
    {
      "id": "fc-sia-11",
      "checkpointId": "sia-cp2",
      "subject": "SIA101",
      "week": "Week 3",
      "question": "What is a Use Case Model?",
      "answer": "A behavioral model showing how different types of users interact with the system to solve a problem, formalized in UML as system requirements.",
      "tag": "Use Case"
    },
    {
      "id": "fc-sia-12",
      "checkpointId": "sia-cp2",
      "subject": "SIA101",
      "week": "Week 3",
      "question": "Name the 5 core purposes of a Use Case Diagram.",
      "answer": "a. Specifying system context\nb. Capturing requirements\nc. Validating architecture\nd. Implementing and generating test cases\ne. Developed by analysts/experts.",
      "tag": "Use Case"
    },
    {
      "id": "fc-sia-13",
      "checkpointId": "sia-cp2",
      "subject": "SIA101",
      "week": "Week 3",
      "question": "What is Business Process Modelling (BPM)?",
      "answer": "The practice of mapping workflows to visualize processes and make better, data-driven operational decisions.",
      "tag": "BPM"
    },
    {
      "id": "fc-sia-14",
      "checkpointId": "sia-cp2",
      "subject": "SIA101",
      "week": "Week 3",
      "question": "What are the four (4) basic building blocks of BPMN?",
      "answer": "1. Flow objects (events, activities, gateways)\n2. Connecting objects (sequence/message flows)\n3. Swimlanes (pools & lanes)\n4. Artifacts (data objects, groups).",
      "tag": "BPMN"
    },
    {
      "id": "fc-sia-15",
      "checkpointId": "sia-cp2",
      "subject": "SIA101",
      "week": "Week 3",
      "question": "What does a Data Flow Diagram (DFD) show?",
      "answer": "Shows the flow of data or information from one place to another through processes, data stores, and external entities.",
      "tag": "DFD"
    },
    {
      "id": "fc-sia-16",
      "checkpointId": "sia-cp2",
      "subject": "SIA101",
      "week": "Week 3",
      "question": "What is a Role Activity Diagram (RAD) used for?",
      "answer": "Used to map out the intangible roles, states, or ideas of behavior desired within an organization.",
      "tag": "RAD"
    },
    {
      "id": "fc-sia-17",
      "checkpointId": "sia-cp2",
      "subject": "SIA101",
      "week": "Week 3",
      "question": "What are the two common diagram types under Role Interaction Diagrams (RID)?",
      "answer": "Sequence Diagrams (time-ordered interactions) and Collaboration Diagrams (structural object connections).",
      "tag": "RID"
    },
    {
      "id": "fc-sia-18",
      "checkpointId": "sia-cp2",
      "subject": "SIA101",
      "week": "Week 3",
      "question": "What does IDEF stand for and what is its four-sided ICOM model?",
      "answer": "Integrated Definition for Function Modelling. Box bounded by ICOM: Input (Left), Control (Top), Output (Right), Mechanism (Bottom).",
      "tag": "IDEF"
    },
    {
      "id": "fc-sia-19",
      "checkpointId": "sia-cp2",
      "subject": "SIA101",
      "week": "Week 3",
      "question": "What are Coloured Petri Nets (CPN)?",
      "answer": "A graphically oriented language for the design, specification, simulation, and verification of concurrent, distributed systems.",
      "tag": "CPN"
    },
    {
      "id": "fc-sia-20",
      "checkpointId": "sia-cp2",
      "subject": "SIA101",
      "week": "Week 3",
      "question": "What are the three (3) different types of business analysis tools?",
      "answer": "1. Requirement-related tools\n2. Modelling tools\n3. Collaboration tools.",
      "tag": "BA Tools"
    },
    {
      "id": "fc-sia-21",
      "checkpointId": "sia-cp3",
      "subject": "SIA101",
      "week": "Week 4",
      "question": "What are the five (5) phases of the PMI Project Management Life Cycle?",
      "answer": "1. Initiation\n2. Planning\n3. Execution\n4. Performance / Monitoring\n5. Project Close.",
      "tag": "PMLC"
    },
    {
      "id": "fc-sia-22",
      "checkpointId": "sia-cp3",
      "subject": "SIA101",
      "week": "Week 4",
      "question": "In which PMI lifecycle phase is the Project Charter created?",
      "answer": "Phase 1: Project Initiation (Conception & Initiation), NOT in Planning!",
      "tag": "PMLC"
    },
    {
      "id": "fc-sia-23",
      "checkpointId": "sia-cp3",
      "subject": "SIA101",
      "week": "Week 4",
      "question": "What does the SMART acronym stand for in project planning?",
      "answer": "Specific, Measurable, Actionable, Realistic, Timebound.",
      "tag": "SMART Goals"
    },
    {
      "id": "fc-sia-24",
      "checkpointId": "sia-cp3",
      "subject": "SIA101",
      "week": "Week 4",
      "question": "What does the CLEAR acronym stand for in agile goal setting?",
      "answer": "Collaborative, Limited, Emotional, Appreciable, Refinable.",
      "tag": "CLEAR Goals"
    },
    {
      "id": "fc-sia-25",
      "checkpointId": "sia-cp3",
      "subject": "SIA101",
      "week": "Week 4",
      "question": "What is a Scope Statement?",
      "answer": "A document defining the business need, benefits of the project, objectives, deliverables, and key milestones.",
      "tag": "Scope"
    },
    {
      "id": "fc-sia-26",
      "checkpointId": "sia-cp3",
      "subject": "SIA101",
      "week": "Week 4",
      "question": "What is a Work Breakdown Structure (WBS)?",
      "answer": "The hierarchical and incremental decomposition of the total project scope into phases, deliverables, and work packages.",
      "tag": "WBS"
    },
    {
      "id": "fc-sia-27",
      "checkpointId": "sia-cp3",
      "subject": "SIA101",
      "week": "Week 4",
      "question": "What is a Milestone in project management?",
      "answer": "A specific zero-duration point within a project's life cycle used to measure progress toward the ultimate goal.",
      "tag": "Milestones"
    },
    {
      "id": "fc-sia-28",
      "checkpointId": "sia-cp3",
      "subject": "SIA101",
      "week": "Week 4",
      "question": "What are the 5 columns in a Project Stakeholder Communication Plan?",
      "answer": "1. Description (name of comms)\n2. Frequency (how often)\n3. Method (channel)\n4. Audience (who receives)\n5. Owner (who is responsible).",
      "tag": "Communication Plan"
    },
    {
      "id": "fc-sia-29",
      "checkpointId": "sia-cp3",
      "subject": "SIA101",
      "week": "Week 4",
      "question": "What are the four (4) Key Performance Indicators (KPIs) in Phase 4 Monitoring?",
      "answer": "1. Project Objectives (schedule & budget)\n2. Quality Deliverables\n3. Effort and Cost Tracking\n4. Project Performance (change tracking).",
      "tag": "KPIs"
    },
    {
      "id": "fc-sia-30",
      "checkpointId": "sia-cp3",
      "subject": "SIA101",
      "week": "Week 4",
      "question": "What are the five (5) steps to the Project Closure Process?",
      "answer": "1. Transfer all deliverables\n2. Complete the contracts\n3. Have a retrospective meeting\n4. Disband the team\n5. Document all learnings.",
      "tag": "Closure"
    },
    {
      "id": "fc-sia-31",
      "checkpointId": "sia-cp4",
      "subject": "SIA101",
      "week": "Week 5",
      "question": "What is a Business Process?",
      "answer": "A series of steps performed by stakeholders to achieve a concrete goal; a collection of linked tasks delivering a service or product to a client.",
      "tag": "Business Process"
    },
    {
      "id": "fc-sia-32",
      "checkpointId": "sia-cp4",
      "subject": "SIA101",
      "week": "Week 5",
      "question": "Name four (4) reasons why Business Processes are important.",
      "answer": "1. Identify important tasks\n2. Improve efficiency\n3. Streamline communications\n4. Set approvals / Prevent chaos / Standardize procedures.",
      "tag": "Business Process"
    },
    {
      "id": "fc-sia-33",
      "checkpointId": "sia-cp4",
      "subject": "SIA101",
      "week": "Week 5",
      "question": "List the 7 steps of the Business Process Lifecycle in order.",
      "answer": "1. Define goals\n2. Plan & map\n3. Set actions & assign stakeholders\n4. Test process\n5. Implement process\n6. Monitor results\n7. Repeat.",
      "tag": "Process Lifecycle"
    },
    {
      "id": "fc-sia-34",
      "checkpointId": "sia-cp4",
      "subject": "SIA101",
      "week": "Week 5",
      "question": "What is Business Process Integration (BPI)?",
      "answer": "Automates business processes, integrates systems/services, and enables secure data sharing across applications to connect systems efficiently.",
      "tag": "BPI"
    },
    {
      "id": "fc-sia-35",
      "checkpointId": "sia-cp4",
      "subject": "SIA101",
      "week": "Week 5",
      "question": "What are the three (3) main components of an IT Environment?",
      "answer": "1. Computing Platforms\n2. Applications / Apps\n3. Connectivity (Networking: Wireless, Wired, Personal, Local, Distance).",
      "tag": "IT Environment"
    },
    {
      "id": "fc-sia-36",
      "checkpointId": "sia-cp4",
      "subject": "SIA101",
      "week": "Week 5",
      "question": "What is the IT Environment decision triad (Purposes)?",
      "answer": "NEEDS (functionality, affordable cost, reliability); RULES (laws & owner regulations); CHOICES (balance of needs, rules, affordable technology).",
      "tag": "IT Environment"
    },
    {
      "id": "fc-sia-37",
      "checkpointId": "sia-cp4",
      "subject": "SIA101",
      "week": "Week 5",
      "question": "How does a Centralized organizational structure differ from a Decentralized structure?",
      "answer": "Centralized uses hierarchical decision-making and uniform processes (large orgs); Decentralized uses democratic decision-making adapted locally (small orgs).",
      "tag": "Org Structure"
    },
    {
      "id": "fc-sia-38",
      "checkpointId": "sia-cp4",
      "subject": "SIA101",
      "week": "Week 5",
      "question": "What is a Functional organizational structure and what is its main drawback?",
      "answer": "A bureaucratic structure divided into specialized departments (HR, Finance, Marketing). Drawback: Bureaucracy, lack of variety, departmental silos.",
      "tag": "Org Structure"
    },
    {
      "id": "fc-sia-39",
      "checkpointId": "sia-cp4",
      "subject": "SIA101",
      "week": "Week 5",
      "question": "What is a Flatarchy organizational structure?",
      "answer": "A structure popular in startups that flattens hierarchy and the chain of command, giving employees great autonomy.",
      "tag": "Org Structure"
    },
    {
      "id": "fc-sia-40",
      "checkpointId": "sia-cp4",
      "subject": "SIA101",
      "week": "Week 5",
      "question": "What defines a Matrix organizational structure?",
      "answer": "Employees have more than one line of reporting managers (e.g. functional manager and project manager), using solid and dotted line reporting.",
      "tag": "Org Structure"
    },
    {
      "id": "fc-sia-41",
      "checkpointId": "sia-cp5",
      "subject": "SIA101",
      "week": "Week 6",
      "question": "What is the crucial difference between Sole Sourcing and Single Sourcing?",
      "answer": "Sole Sourcing = Only ONE supplier exists in the market (e.g. water utility). Single Sourcing = MULTIPLE suppliers exist, but buyer chooses ONE.",
      "tag": "Sourcing"
    },
    {
      "id": "fc-sia-42",
      "checkpointId": "sia-cp5",
      "subject": "SIA101",
      "week": "Week 6",
      "question": "What is the 'First Principle' when determining the source of supply?",
      "answer": "Source all commodities LOCALLY and IN-COUNTRY, as close to the field as possible to reduce transport time and cost.",
      "tag": "Sourcing Principle"
    },
    {
      "id": "fc-sia-43",
      "checkpointId": "sia-cp5",
      "subject": "SIA101",
      "week": "Week 6",
      "question": "What five (5) factors are evaluated during a Procurement Market Survey?",
      "answer": "1. Quantities Available\n2. Quality\n3. Pricing\n4. Source and origin of items\n5. Technical Specifications.",
      "tag": "Market Survey"
    },
    {
      "id": "fc-sia-44",
      "checkpointId": "sia-cp5",
      "subject": "SIA101",
      "week": "Week 6",
      "question": "When is an organization justified in sourcing supply internationally?",
      "answer": "When required materials are unavailable locally or nationally in the quantities or technical specifications required.",
      "tag": "Sourcing"
    },
    {
      "id": "fc-sia-45",
      "checkpointId": "sia-cp5",
      "subject": "SIA101",
      "week": "Week 6",
      "question": "What tool tracks RFQs and vendor tenders in sealed bidding?",
      "answer": "Tracking Sheet for Sealed Bids.",
      "tag": "Procurement"
    },
    {
      "id": "fc-sia-46",
      "checkpointId": "sia-cp5",
      "subject": "SIA101",
      "week": "Week 6",
      "question": "What three (3) screening steps must be completed before confirming an order with a vendor?",
      "answer": "1. Request completion of vendor questionnaire\n2. Check references (preferably peer NGOs)\n3. Screen against anti-terrorism and debarred lists.",
      "tag": "Vendor Screening"
    },
    {
      "id": "fc-sia-47",
      "checkpointId": "sia-cp5",
      "subject": "SIA101",
      "week": "Week 6",
      "question": "What is In-Sourcing?",
      "answer": "The assignment of a project to a person or department within the company rather than hiring a third-party contractor.",
      "tag": "Insourcing"
    },
    {
      "id": "fc-sia-48",
      "checkpointId": "sia-cp5",
      "subject": "SIA101",
      "week": "Week 6",
      "question": "Name three (3) major advantages of In-Sourcing.",
      "answer": "Competitive advantage, Trade secrets protection, Organizational culture alignment, Cost control, Direct direction & control.",
      "tag": "Insourcing"
    },
    {
      "id": "fc-sia-49",
      "checkpointId": "sia-cp5",
      "subject": "SIA101",
      "week": "Week 6",
      "question": "What are the three (3) main disadvantages of In-Sourcing?",
      "answer": "1. High overhead Cost\n2. Internal Capabilities limitations\n3. Loss of core business Focus.",
      "tag": "Insourcing"
    },
    {
      "id": "fc-sia-50",
      "checkpointId": "sia-cp5",
      "subject": "SIA101",
      "week": "Week 6",
      "question": "What are the three (3) stages in Hardware and Software Acquisition?",
      "answer": "1. Requirements Analysis\n2. Request for Proposal (RFP)\n3. Vendor Selection.",
      "tag": "Acquisition"
    },
    {
      "id": "ar-fc-1",
      "checkpointId": "ar-cp1",
      "subject": "AR101",
      "week": "Week 2",
      "question": "What is the technical definition of a Digital Computer?",
      "answer": "A fast electronic calculating machine that accepts digitized input information, processes it according to internally stored instructions (programs), and produces output information.",
      "tag": "Basics"
    },
    {
      "id": "ar-fc-2",
      "checkpointId": "ar-cp1",
      "subject": "AR101",
      "week": "Week 2",
      "question": "What are the 5 functional units of a computer system?",
      "answer": "1. Input Unit\n2. Memory Unit (Primary Storage)\n3. Arithmetic and Logic Unit (ALU)\n4. Control Unit (CU)\n5. Output Unit.",
      "tag": "Architecture"
    },
    {
      "id": "ar-fc-3",
      "checkpointId": "ar-cp1",
      "subject": "AR101",
      "week": "Week 2",
      "question": "How much faster does the Central Processing Unit (CPU) operate compared to Main Memory?",
      "answer": "The CPU operates approximately 10 times faster than Main Memory.",
      "tag": "Performance"
    },
    {
      "id": "ar-fc-4",
      "checkpointId": "ar-cp1",
      "subject": "AR101",
      "week": "Week 2",
      "question": "What are the 4 functional divisions of Main Memory?",
      "answer": "1. Input Storage Area (raw input buffer)\n2. Working Storage Space (intermediate calculations)\n3. Output Storage Area (formatted output)\n4. Program Storage Area (active machine instructions).",
      "tag": "Memory"
    },
    {
      "id": "ar-fc-5",
      "checkpointId": "ar-cp1",
      "subject": "AR101",
      "week": "Week 2",
      "question": "What is Von-Neumann Architecture also known as?",
      "answer": "Stored Program Architecture or Fetch-Decode-Execute Architecture, where data and instructions share the same unified memory space.",
      "tag": "Architecture"
    },
    {
      "id": "ar-fc-6",
      "checkpointId": "ar-cp1",
      "subject": "AR101",
      "week": "Week 2",
      "question": "What are the three key advantages of High-Level Languages over Low-Level Languages?",
      "answer": "1. Easy to Learn (human-readable syntax)\n2. Predefined Functions (standard libraries)\n3. Portability (runs across different hardware with recompilation).",
      "tag": "Programming"
    },
    {
      "id": "ar-fc-7",
      "checkpointId": "ar-cp1",
      "subject": "AR101",
      "week": "Week 2",
      "question": "What are the three key advantages of Low-Level Languages over High-Level Languages?",
      "answer": "1. Compact Code (minimal binary footprint)\n2. Speed (direct hardware execution)\n3. Flexible (direct register, memory address, and flag control).",
      "tag": "Programming"
    },
    {
      "id": "ar-fc-8",
      "checkpointId": "ar-cp1",
      "subject": "AR101",
      "week": "Week 2",
      "question": "What is the primary role of the Control Unit (CU)?",
      "answer": "The Control Unit directs, coordinates, and supervises all activities and data transfers within the computer system.",
      "tag": "CPU"
    },
    {
      "id": "ar-fc-9",
      "checkpointId": "ar-cp1",
      "subject": "AR101",
      "week": "Week 2",
      "question": "How are data items structured and located in Main Memory?",
      "answer": "Data is grouped into fixed-size units called WORDS, each identified by a unique successive numerical address (e.g. 0, 1, 2, ...).",
      "tag": "Memory"
    },
    {
      "id": "ar-fc-10",
      "checkpointId": "ar-cp1",
      "subject": "AR101",
      "week": "Week 2",
      "question": "What distinguishes Workstations from Personal Computers?",
      "answer": "Workstations are high-performance single-user computers specifically engineered for intensive technical, mathematical, graphic, and engineering calculations.",
      "tag": "Hardware"
    },
    {
      "id": "ar-fc-11",
      "checkpointId": "ar-cp2",
      "subject": "AR101",
      "week": "Week 3",
      "question": "What is the purpose of the Program Counter (PC)?",
      "answer": "Holds the memory address of the next instruction to be fetched and executed. It increments automatically after the instruction is fetched.",
      "tag": "Registers"
    },
    {
      "id": "ar-fc-12",
      "checkpointId": "ar-cp2",
      "subject": "AR101",
      "week": "Week 3",
      "question": "What is the difference between MAR and MDR?",
      "answer": "MAR (Memory Address Register) holds the memory address to be accessed, while MDR (Memory Data Register) holds the actual data word read from or to be written into memory.",
      "tag": "Registers"
    },
    {
      "id": "ar-fc-13",
      "checkpointId": "ar-cp2",
      "subject": "AR101",
      "week": "Week 3",
      "question": "What is the function of the Instruction Register (IR)?",
      "answer": "Holds the instruction word currently being decoded and executed by the Control Unit.",
      "tag": "Registers"
    },
    {
      "id": "ar-fc-14",
      "checkpointId": "ar-cp2",
      "subject": "AR101",
      "week": "Week 3",
      "question": "Why is a Memory Read operation called 'non-destructive' while Write is 'destructive'?",
      "answer": "A Read operation copies data to MDR while leaving the word in memory unchanged. A Write operation overwrites the memory location, destroying whatever was previously stored.",
      "tag": "Memory"
    },
    {
      "id": "ar-fc-15",
      "checkpointId": "ar-cp2",
      "subject": "AR101",
      "week": "Week 3",
      "question": "What are the 7 universal CPU instruction execution steps?",
      "answer": "1. Fetch instruction\n2. Increment PC\n3. Decode instruction\n4. Determine data address\n5. Fetch required operand\n6. Execute instruction\n7. Return to step 1.",
      "tag": "Execution"
    },
    {
      "id": "ar-fc-16",
      "checkpointId": "ar-cp2",
      "subject": "AR101",
      "week": "Week 3",
      "question": "What are the two standard components of a machine instruction?",
      "answer": "1. Op-code field (specifies the operation to perform, e.g. 8 bits)\n2. Addressing Information (specifies operand locations, e.g. 24 bits).",
      "tag": "Instructions"
    },
    {
      "id": "ar-fc-17",
      "checkpointId": "ar-cp2",
      "subject": "AR101",
      "week": "Week 3",
      "question": "What register is used implicitly in 1-Address instruction format?",
      "answer": "The Accumulator (ACC) register (e.g. LOAD A -> ACC <- [A]; ADD B -> ACC <- [B] + [ACC]).",
      "tag": "Instructions"
    },
    {
      "id": "ar-fc-18",
      "checkpointId": "ar-cp2",
      "subject": "AR101",
      "week": "Week 3",
      "question": "How does a 2-Address instruction differ from a 3-Address instruction?",
      "answer": "In 2-Address (ADD A, B), A is both source and destination (A is overwritten). In 3-Address (ADD A, B, C), B and C are source operands and remain unchanged while A is the pure destination.",
      "tag": "Instructions"
    },
    {
      "id": "ar-fc-19",
      "checkpointId": "ar-cp2",
      "subject": "AR101",
      "week": "Week 3",
      "question": "What are the 3 main groupings of bus lines?",
      "answer": "1. Data Bus (carries bidirectional data)\n2. Address Bus (carries unidirectional memory/port address)\n3. Control Bus (coordinates timing, Read/Write, interrupts).",
      "tag": "Buses"
    },
    {
      "id": "ar-fc-20",
      "checkpointId": "ar-cp2",
      "subject": "AR101",
      "week": "Week 3",
      "question": "What is the primary drawback of a Single-Bus Structure?",
      "answer": "Bus contention / throughput bottleneck: all units share the single bus, meaning only one data transfer can take place at any given instant.",
      "tag": "Buses"
    },
    {
      "id": "ar-fc-21",
      "checkpointId": "ar-cp3",
      "subject": "AR101",
      "week": "Week 4",
      "question": "What was the world's first commercial microprocessor and when was it released?",
      "answer": "The Intel 4004, released in 1971. It was a 4-bit microprocessor capable of addressing 4,096 4-bit locations (2,048 bytes).",
      "tag": "Intel History"
    },
    {
      "id": "ar-fc-22",
      "checkpointId": "ar-cp3",
      "subject": "AR101",
      "week": "Week 4",
      "question": "What is the key architectural difference between Intel 8086 and 8088?",
      "answer": "Both have internal 16-bit architecture and 20-bit address bus (1MB RAM), but the 8086 has a 16-bit external data bus while the 8088 has an 8-bit external data bus (and 4-byte prefetch queue vs 6-byte).",
      "tag": "Intel History"
    },
    {
      "id": "ar-fc-23",
      "checkpointId": "ar-cp3",
      "subject": "AR101",
      "week": "Week 4",
      "question": "How are the 8086 physical memory banks activated?",
      "answer": "Even Bank (512KB, D0-D7) is activated by A0 = 0.\nOdd Bank (512KB, D8-D15) is activated by BHE# = 0 (Bus High Enable).",
      "tag": "Memory Banks"
    },
    {
      "id": "ar-fc-24",
      "checkpointId": "ar-cp3",
      "subject": "AR101",
      "week": "Week 4",
      "question": "What are the two main processing sections inside the Intel 8086?",
      "answer": "1. BIU (Bus Interface Unit) - fetches instructions, computes 20-bit physical addresses, manages prefetch queue.\n2. EU (Execution Unit) - decodes and executes instructions via ALU and registers.",
      "tag": "Architecture"
    },
    {
      "id": "ar-fc-25",
      "checkpointId": "ar-cp3",
      "subject": "AR101",
      "week": "Week 4",
      "question": "Name the 4 general-purpose data registers in the 8086 and their 8-bit halves.",
      "answer": "AX (AH/AL - Accumulator), BX (BH/BL - Base), CX (CH/CL - Count), DX (DH/DL - Data).",
      "tag": "Registers"
    },
    {
      "id": "ar-fc-26",
      "checkpointId": "ar-cp3",
      "subject": "AR101",
      "week": "Week 4",
      "question": "What are the 6 conditional status flags in the 8086 Flags register (PSW)?",
      "answer": "CF (Carry, b0), PF (Parity, b2), AF (Auxiliary Carry, b4), ZF (Zero, b6), SF (Sign, b7), OF (Overflow, b11).",
      "tag": "Flags"
    },
    {
      "id": "ar-fc-27",
      "checkpointId": "ar-cp3",
      "subject": "AR101",
      "week": "Week 4",
      "question": "What are the 3 control flags in the 8086 Flags register?",
      "answer": "TF (Trap Flag, b8 - single step), IF (Interrupt Enable, b9), DF (Direction Flag, b10 - string auto increment/decrement).",
      "tag": "Flags"
    },
    {
      "id": "ar-fc-28",
      "checkpointId": "ar-cp3",
      "subject": "AR101",
      "week": "Week 4",
      "question": "When is the Parity Flag (PF) set to 1 in the 8086?",
      "answer": "When the lower 8 bits of an arithmetic or logic result contain an EVEN number of 1s (Even Parity).",
      "tag": "Flags"
    },
    {
      "id": "ar-fc-29",
      "checkpointId": "ar-cp3",
      "subject": "AR101",
      "week": "Week 4",
      "question": "What is the formula to compute a 20-bit Physical Address in the 8086?",
      "answer": "Physical Address (PA) = (Segment Base Address x 10H) + Offset Address.",
      "tag": "Calculations"
    },
    {
      "id": "ar-fc-30",
      "checkpointId": "ar-cp3",
      "subject": "AR101",
      "week": "Week 4",
      "question": "What is the Physical Address for Segment Base = 1234H and Offset = 0022H?",
      "answer": "1234H x 10H = 12340H. 12340H + 0022H = 12362H.",
      "tag": "Calculations"
    },
    {
      "id": "ar-fc-31",
      "checkpointId": "ar-cp4",
      "subject": "AR101",
      "week": "Week 5",
      "question": "What is the maximum size of a single memory segment in the 8086?",
      "answer": "64 KB (65,536 bytes), addressable by a 16-bit offset.",
      "tag": "Segmentation"
    },
    {
      "id": "ar-fc-32",
      "checkpointId": "ar-cp4",
      "subject": "AR101",
      "week": "Week 5",
      "question": "What are the 4 dedicated segment registers in the 8086?",
      "answer": "CS (Code Segment), DS (Data Segment), SS (Stack Segment), ES (Extra Segment).",
      "tag": "Segmentation"
    },
    {
      "id": "ar-fc-33",
      "checkpointId": "ar-cp4",
      "subject": "AR101",
      "week": "Week 5",
      "question": "In what direction does the 8086 stack grow in memory?",
      "answer": "The stack grows DOWNWARD toward lower memory addresses (from higher memory to lower memory).",
      "tag": "Stack"
    },
    {
      "id": "ar-fc-34",
      "checkpointId": "ar-cp4",
      "subject": "AR101",
      "week": "Week 5",
      "question": "What is the initial value of the Stack Pointer (SP) upon microcomputer start-up?",
      "answer": "SP is initialized to FFFFH (pointing to the top boundary of the 64KB stack segment).",
      "tag": "Stack"
    },
    {
      "id": "ar-fc-35",
      "checkpointId": "ar-cp4",
      "subject": "AR101",
      "week": "Week 5",
      "question": "What two operations occur to SP and memory when 'PUSH BX' executes?",
      "answer": "1. SP is decremented by 2 (New SP = SP - 2).\n2. High byte (BH) is stored at SS:SP+1; Low byte (BL) is stored at SS:SP.",
      "tag": "Stack"
    },
    {
      "id": "ar-fc-36",
      "checkpointId": "ar-cp4",
      "subject": "AR101",
      "week": "Week 5",
      "question": "What two operations occur to SP and memory when 'POP CX' executes?",
      "answer": "1. Low byte (CL) is loaded from SS:SP; High byte (CH) is loaded from SS:SP+1.\n2. SP is incremented by 2 (New SP = SP + 2).",
      "tag": "Stack"
    },
    {
      "id": "ar-fc-37",
      "checkpointId": "ar-cp4",
      "subject": "AR101",
      "week": "Week 5",
      "question": "What addressing mode is used in 'MOV AL, 15H'?",
      "answer": "Immediate Addressing (the operand 15H is a constant value included directly in the instruction code).",
      "tag": "Addressing"
    },
    {
      "id": "ar-fc-38",
      "checkpointId": "ar-cp4",
      "subject": "AR101",
      "week": "Week 5",
      "question": "What is the default segment register used when BP is enclosed in brackets, e.g. MOV AX, [BP]?",
      "answer": "The Stack Segment (SS) register! (Unlike BX, SI, DI which default to DS).",
      "tag": "Addressing"
    },
    {
      "id": "ar-fc-39",
      "checkpointId": "ar-cp4",
      "subject": "AR101",
      "week": "Week 5",
      "question": "Identify the addressing mode: 'MOV AX, [BX + SI]'.",
      "answer": "Base-Plus-Index Addressing (effective address is the sum of base register BX and index register SI).",
      "tag": "Addressing"
    },
    {
      "id": "ar-fc-40",
      "checkpointId": "ar-cp4",
      "subject": "AR101",
      "week": "Week 5",
      "question": "Identify the addressing mode: 'MOV AX, FILE[BX + DI]'.",
      "answer": "Base-Relative-Plus-Index Addressing (sum of base BX, index DI, and displacement FILE).",
      "tag": "Addressing"
    },
    {
      "id": "ar-fc-41",
      "checkpointId": "ar-cp5",
      "subject": "AR101",
      "week": "Week 6",
      "question": "Do standard data transfer instructions (MOV, PUSH, POP, XCHG) affect CPU flags?",
      "answer": "NO! Standard data transfer instructions NEVER alter CPU flags (with the sole exceptions of SAHF and POPF).",
      "tag": "Instructions"
    },
    {
      "id": "ar-fc-42",
      "checkpointId": "ar-cp5",
      "subject": "AR101",
      "week": "Week 6",
      "question": "Can memory-to-memory data transfers be performed directly with a single MOV instruction?",
      "answer": "NO. Memory-to-memory transfers are illegal in 8086 assembly. Data must pass through an intermediate CPU register.",
      "tag": "Rules"
    },
    {
      "id": "ar-fc-43",
      "checkpointId": "ar-cp5",
      "subject": "AR101",
      "week": "Week 6",
      "question": "Can the Code Segment (CS) register be the destination of a MOV instruction?",
      "answer": "NO. MOV CS, AX is strictly illegal because altering CS directly would corrupt the program execution stream.",
      "tag": "Rules"
    },
    {
      "id": "ar-fc-44",
      "checkpointId": "ar-cp5",
      "subject": "AR101",
      "week": "Week 6",
      "question": "What is the crucial difference between 'MOV AX, LIST' and 'LEA AX, LIST'?",
      "answer": "MOV AX, LIST transfers the DATA stored in memory at location LIST into AX. LEA AX, LIST loads the 16-bit OFFSET ADDRESS itself into AX.",
      "tag": "Instructions"
    },
    {
      "id": "ar-fc-45",
      "checkpointId": "ar-cp5",
      "subject": "AR101",
      "week": "Week 6",
      "question": "What does the PUSHA instruction do?",
      "answer": "Pushes all 8 general registers onto the stack in sequence: AX, CX, DX, BX, original SP, BP, SI, DI.",
      "tag": "Instructions"
    },
    {
      "id": "ar-fc-46",
      "checkpointId": "ar-cp5",
      "subject": "AR101",
      "week": "Week 6",
      "question": "What are the restrictions on the operands of the XCHG instruction?",
      "answer": "1. Neither operand can be an Immediate value\n2. Neither operand can be a Segment Register\n3. Both operands cannot be memory locations simultaneously.",
      "tag": "Rules"
    },
    {
      "id": "ar-fc-47",
      "checkpointId": "ar-cp5",
      "subject": "AR101",
      "week": "Week 6",
      "question": "What does the XLAT instruction do?",
      "answer": "Translates a byte in AL using a lookup table in memory pointed to by BX: AL <- [BX + AL].",
      "tag": "Instructions"
    },
    {
      "id": "ar-fc-48",
      "checkpointId": "ar-cp5",
      "subject": "AR101",
      "week": "Week 6",
      "question": "What is the function of LAHF and SAHF?",
      "answer": "LAHF loads AH with the lower byte of the Flags register (SF, ZF, AF, PF, CF). SAHF stores AH into the lower byte of the Flags register.",
      "tag": "Flags"
    },
    {
      "id": "ar-fc-49",
      "checkpointId": "ar-cp5",
      "subject": "AR101",
      "week": "Week 6",
      "question": "Which registers must be used with the IN and OUT instructions?",
      "answer": "The Accumulator (AL for byte, AX for word) for data, and DX (or an 8-bit immediate) for the I/O port address.",
      "tag": "I/O"
    },
    {
      "id": "ar-fc-50",
      "checkpointId": "ar-cp5",
      "subject": "AR101",
      "week": "Week 6",
      "question": "Why is 'MOV DS, 1000H' an illegal instruction in 8086 assembly?",
      "answer": "Immediate values cannot be loaded directly into segment registers. You must load into a general register first: MOV AX, 1000H then MOV DS, AX.",
      "tag": "Rules"
    },
    {
      "id": "ar-fc-51",
      "checkpointId": "ar-cp6",
      "subject": "AR101",
      "week": "Week 7",
      "question": "What are the two basic arithmetic operations upon which all computer calculations are built?",
      "answer": "Addition and Subtraction (multiplication is repeated addition; division is repeated subtraction).",
      "tag": "ALU"
    },
    {
      "id": "ar-fc-52",
      "checkpointId": "ar-cp6",
      "subject": "AR101",
      "week": "Week 7",
      "question": "What is the primary drawback of Sign-and-Magnitude and 1's Complement number systems?",
      "answer": "Both systems have TWO representations of zero (+0 and -0), which complicates arithmetic hardware and comparisons.",
      "tag": "Number Systems"
    },
    {
      "id": "ar-fc-53",
      "checkpointId": "ar-cp6",
      "subject": "AR101",
      "week": "Week 7",
      "question": "How is a negative number represented in 2's Complement?",
      "answer": "By taking the 1's complement (inverting all bits) and adding 1 to the result: 2's Comp = 1's Comp + 1.",
      "tag": "Number Systems"
    },
    {
      "id": "ar-fc-54",
      "checkpointId": "ar-cp6",
      "subject": "AR101",
      "week": "Week 7",
      "question": "What is the representation of -8 in 4-bit 2's complement?",
      "answer": "1000 in binary. (In 4-bit 2's complement, range is -8 to +7).",
      "tag": "Number Systems"
    },
    {
      "id": "ar-fc-55",
      "checkpointId": "ar-cp6",
      "subject": "AR101",
      "week": "Week 7",
      "question": "What are the Boolean logic equations for a Full Adder's Sum (s_i) and Carry-out (c_{i+1})?",
      "answer": "Sum: s_i = x_i XOR y_i XOR c_i\nCarry-out: c_{i+1} = x_i*y_i + (x_i + y_i)*c_i.",
      "tag": "Adders"
    },
    {
      "id": "ar-fc-56",
      "checkpointId": "ar-cp6",
      "subject": "AR101",
      "week": "Week 7",
      "question": "What is the propagation delay formula for an n-bit Ripple-Carry Adder?",
      "answer": "Total Delay = (n - 1) x 1 ns + 1.5 ns (assuming 1 ns carry delay per stage and 1.5 ns final sum delay).",
      "tag": "Adders"
    },
    {
      "id": "ar-fc-57",
      "checkpointId": "ar-cp6",
      "subject": "AR101",
      "week": "Week 7",
      "question": "What is the total addition time for a 32-bit Ripple-Carry Adder?",
      "answer": "(31 x 1 ns) + 1.5 ns = 32.5 ns.",
      "tag": "Adders"
    },
    {
      "id": "ar-fc-58",
      "checkpointId": "ar-cp6",
      "subject": "AR101",
      "week": "Week 7",
      "question": "In a Carry-Lookahead Adder (CLA), what are the Generate (G_i) and Propagate (P_i) functions?",
      "answer": "Generate: G_i = x_i * y_i\nPropagate: P_i = x_i + y_i (or x_i XOR y_i).",
      "tag": "Fast Adders"
    },
    {
      "id": "ar-fc-59",
      "checkpointId": "ar-cp6",
      "subject": "AR101",
      "week": "Week 7",
      "question": "How many logic gate delays are required to generate ALL carries in a Carry-Lookahead Adder?",
      "answer": "Only 3 logic gate delays: 1 gate delay for G_i and P_i, plus 2 gate delays for the AND-OR carry network.",
      "tag": "Fast Adders"
    },
    {
      "id": "ar-fc-60",
      "checkpointId": "ar-cp6",
      "subject": "AR101",
      "week": "Week 7",
      "question": "What is the practical hardware constraint that limits the size of Carry-Lookahead Adders?",
      "answer": "Gate Fan-In constraints: the carry equation requires i + 2 inputs to the largest AND/OR gates (e.g. an 8-bit CLA requires a fan-in of 9), which causes electrical degradation.",
      "tag": "Fast Adders"
    },
    {
      "id": "ar-fc-61",
      "checkpointId": "ar-cp6",
      "subject": "AR101",
      "week": "Week 7",
      "question": "How is a 1-bit Full Adder constructed using Half Adders?",
      "answer": "Using TWO Half Adders (HA1 and HA2) and ONE OR Gate (or XOR Gate).\n• HA1 computes S1 = A ⊕ B and C1 = AB\n• HA2 computes final Sum S = (A ⊕ B) ⊕ Cin and C2 = (A ⊕ B)Cin\n• OR gate combines carries: Cout = C1 + C2 = AB + (A ⊕ B)Cin.",
      "tag": "Adders"
    },
    {
      "id": "ar-fc-62",
      "checkpointId": "ar-cp6",
      "subject": "AR101",
      "week": "Week 7",
      "question": "Why can the carry combiner OR gate in a Full Adder built with two Half Adders be replaced by an XOR gate?",
      "answer": "Because the stage carries C1 = AB and C2 = (A ⊕ B)Cin are mutually exclusive; they can NEVER both be 1 simultaneously (C1 · C2 = 0). Thus, C1 + C2 ≡ C1 ⊕ C2.",
      "tag": "Adders"
    },
    {
      "id": "fc-rz-1",
      "checkpointId": "rizal-cp1",
      "subject": "RIZAL",
      "week": "Module 1",
      "question": "Who was the original author of the Rizal Bill (Senate Bill 438)?",
      "answer": "Senator Claro M. Recto (Sen. Jose P. Laurel was the Senate Committee Chairman who formally sponsored it).",
      "tag": "RA 1425"
    },
    {
      "id": "fc-rz-2",
      "checkpointId": "rizal-cp1",
      "subject": "RIZAL",
      "week": "Module 1",
      "question": "On what date was Republic Act No. 1425 signed into law by President Ramon Magsaysay?",
      "answer": "June 12, 1956 (Philippine Independence Day).",
      "tag": "RA 1425"
    },
    {
      "id": "fc-rz-3",
      "checkpointId": "rizal-cp1",
      "subject": "RIZAL",
      "week": "Module 1",
      "question": "Does the religious belief exemption in RA 1425 excuse a student from enrolling in the Rizal course?",
      "answer": "NO. It only exempts the student from reading the unexpurgated editions of Noli and Fili, NEVER from taking the course itself.",
      "tag": "Exam Trap"
    },
    {
      "id": "fc-rz-4",
      "checkpointId": "rizal-cp1",
      "subject": "RIZAL",
      "week": "Module 1",
      "question": "How much was authorized to be appropriated from the National Treasury under Section 5 of RA 1425?",
      "answer": "₱300,000 (Three hundred thousand pesos).",
      "tag": "RA 1425"
    },
    {
      "id": "fc-rz-5",
      "checkpointId": "rizal-cp1",
      "subject": "RIZAL",
      "week": "Module 1",
      "question": "What claim did Fr. Jesus Cavanna make regarding the patriotism of Noli Me Tangere?",
      "answer": "That out of 333 pages, only 25 pages were patriotic, while 120 pages were devoted to anti-Catholic attacks.",
      "tag": "Opposition Arguments"
    },
    {
      "id": "fc-rz-6",
      "checkpointId": "rizal-cp1",
      "subject": "RIZAL",
      "week": "Module 1",
      "question": "What official newspaper of the Catholic Action of Manila (CAM) campaigned daily against the Rizal Bill?",
      "answer": "The Sentinel.",
      "tag": "Opposition Organs"
    },
    {
      "id": "fc-rz-7",
      "checkpointId": "rizal-cp1",
      "subject": "RIZAL",
      "week": "Module 1",
      "question": "What 1994 executive directive was issued by President Fidel V. Ramos to enforce RA 1425?",
      "answer": "Memorandum Order No. 246 (issued December 26, 1994).",
      "tag": "Post-Enactment"
    },
    {
      "id": "fc-rz-8",
      "checkpointId": "rizal-cp1",
      "subject": "RIZAL",
      "week": "Module 1",
      "question": "What were the 4 criteria established by the 1901 Taft Commission for choosing the National Hero?",
      "answer": "1) A Filipino; 2) Deceased; 3) Towering patriotism; 4) Calm and peaceful temperament (mahinahong damdamin).",
      "tag": "Taft Commission"
    },
    {
      "id": "fc-rz-9",
      "checkpointId": "rizal-cp1",
      "subject": "RIZAL",
      "week": "Module 1",
      "question": "Why was Marcelo H. del Pilar not selected as National Hero by the Taft Commission?",
      "answer": "Due to his militant anti-friar stance and revolutionary leanings, whereas Rizal advocated peaceful reform through education.",
      "tag": "Taft Commission"
    },
    {
      "id": "fc-rz-10",
      "checkpointId": "rizal-cp1",
      "subject": "RIZAL",
      "week": "Module 1",
      "question": "Who was known as the 'Brain of the Katipunan' considered by the Taft Commission?",
      "answer": "Emilio Jacinto (author of the Kartilya ng Katipunan).",
      "tag": "Taft Commission"
    },
    {
      "id": "fc-rz-11",
      "checkpointId": "rizal-cp1",
      "subject": "RIZAL",
      "week": "Module 1",
      "question": "Which House Bill merged with Senate Bill 438 to become Republic Act 1425?",
      "answer": "House Bill No. 5564 (passed 71 in favor, 9 against, 2 abstentions).",
      "tag": "Legislative History"
    },
    {
      "id": "fc-rz-12",
      "checkpointId": "rizal-cp2",
      "subject": "RIZAL",
      "week": "Module 2",
      "question": "What was the egalitarian motto of the French Revolution that influenced 19th-century Europe?",
      "answer": "Freedom, Fairness, and Fraternity (Liberté, Égalité, Fraternité).",
      "tag": "Global Context"
    },
    {
      "id": "fc-rz-13",
      "checkpointId": "rizal-cp2",
      "subject": "RIZAL",
      "week": "Module 2",
      "question": "On what exact date was the Suez Canal inaugurated, and who designed it?",
      "answer": "November 17, 1869; constructed by French diplomat-engineer Ferdinand de Lesseps.",
      "tag": "Suez Canal"
    },
    {
      "id": "fc-rz-14",
      "checkpointId": "rizal-cp2",
      "subject": "RIZAL",
      "week": "Module 2",
      "question": "How many days did the journey between Barcelona and Manila take after the opening of the Suez Canal?",
      "answer": "Only 32 days (shortened from more than 3 months around the Cape of Good Hope).",
      "tag": "Suez Canal"
    },
    {
      "id": "fc-rz-15",
      "checkpointId": "rizal-cp2",
      "subject": "RIZAL",
      "week": "Module 2",
      "question": "Who was the first liberal Governor-General who gave Filipinos a foretaste of democratic governance?",
      "answer": "Carlos María de la Torre (1869–1871; lived simply, abolished censorship).",
      "tag": "Spanish Rule"
    },
    {
      "id": "fc-rz-16",
      "checkpointId": "rizal-cp2",
      "subject": "RIZAL",
      "week": "Module 2",
      "question": "When did the Cavite Mutiny take place, and who led it?",
      "answer": "January 20, 1872; led by Sergeant Lamadrid at Fort San Felipe.",
      "tag": "Cavite Mutiny"
    },
    {
      "id": "fc-rz-17",
      "checkpointId": "rizal-cp2",
      "subject": "RIZAL",
      "week": "Module 2",
      "question": "On what date were Fathers Gomez, Burgos, and Zamora (GOMBURZA) executed at Bagumbayan?",
      "answer": "February 17, 1872 (executed by garrote).",
      "tag": "GOMBURZA"
    },
    {
      "id": "fc-rz-18",
      "checkpointId": "rizal-cp2",
      "subject": "RIZAL",
      "week": "Module 2",
      "question": "Which brother of José Rizal personally witnessed the GOMBURZA execution and was a student of Fr. Burgos?",
      "answer": "Paciano Rizal.",
      "tag": "Rizal Biography"
    },
    {
      "id": "fc-rz-19",
      "checkpointId": "rizal-cp2",
      "subject": "RIZAL",
      "week": "Module 2",
      "question": "To whom did José Rizal dedicate his second novel, El Filibusterismo (1891)?",
      "answer": "GOMBURZA (Fathers Mariano Gomez, José Burgos, and Jacinto Zamora).",
      "tag": "Exam Trap"
    },
    {
      "id": "fc-rz-20",
      "checkpointId": "rizal-cp2",
      "subject": "RIZAL",
      "week": "Module 2",
      "question": "What was 'Polo y servicio' in Spanish colonial society?",
      "answer": "Compulsory forced manual labor of 40 days per year required of native males aged 16–60.",
      "tag": "Colonial Evils"
    },
    {
      "id": "fc-rz-21",
      "checkpointId": "rizal-cp2",
      "subject": "RIZAL",
      "week": "Module 2",
      "question": "What is the term for Spanish friars' excessive political, judicial, and educational control?",
      "answer": "Frailocracy (Frailocracia).",
      "tag": "Colonial Evils"
    },
    {
      "id": "fc-rz-22",
      "checkpointId": "rizal-cp2",
      "subject": "RIZAL",
      "week": "Module 2",
      "question": "What social class did pure Spaniards born in Spain belong to?",
      "answer": "Peninsulares (highest social hierarchy).",
      "tag": "Social Stratification"
    },
    {
      "id": "fc-rz-23",
      "checkpointId": "rizal-cp2",
      "subject": "RIZAL",
      "week": "Module 2",
      "question": "To which social stratum did José Rizal's affluent, educated land-owning family belong?",
      "answer": "Principalia (the native town aristocracy and elite).",
      "tag": "Social Stratification"
    },
    {
      "id": "fc-rz-24",
      "checkpointId": "rizal-cp3",
      "subject": "RIZAL",
      "week": "Module 3",
      "question": "On what date did Rizal depart Manila for his secret mission to Spain?",
      "answer": "May 3, 1882.",
      "tag": "First Travel Abroad"
    },
    {
      "id": "fc-rz-25",
      "checkpointId": "rizal-cp3",
      "subject": "RIZAL",
      "week": "Module 3",
      "question": "What ship did Rizal board departing Manila, and what passport alias did he use?",
      "answer": "SS Salvadora, using the passport name José Mercado.",
      "tag": "First Travel Abroad"
    },
    {
      "id": "fc-rz-26",
      "checkpointId": "rizal-cp3",
      "subject": "RIZAL",
      "week": "Module 3",
      "question": "What French passenger streamer did Rizal transfer to in Singapore on May 11, 1882?",
      "answer": "Djemnah.",
      "tag": "First Travel Abroad"
    },
    {
      "id": "fc-rz-27",
      "checkpointId": "rizal-cp3",
      "subject": "RIZAL",
      "week": "Module 3",
      "question": "What city in Yemen did Rizal observe was 'hotter than Manila' where he saw camels for the first time?",
      "answer": "Aden (May 27, 1882).",
      "tag": "First Travel Abroad"
    },
    {
      "id": "fc-rz-28",
      "checkpointId": "rizal-cp3",
      "subject": "RIZAL",
      "week": "Module 3",
      "question": "What was the very first European soil José Rizal ever set foot upon?",
      "answer": "Naples, Italy on June 11, 1882 (where he disembarked for an hour tour).",
      "tag": "Exam Trap"
    },
    {
      "id": "fc-rz-29",
      "checkpointId": "rizal-cp3",
      "subject": "RIZAL",
      "week": "Module 3",
      "question": "What famous island fortress prison did Rizal visit in Marseilles, France?",
      "answer": "Château d'If (where Edmond Dantès, hero of The Count of Monte Cristo, was imprisoned).",
      "tag": "First Travel Abroad"
    },
    {
      "id": "fc-rz-30",
      "checkpointId": "rizal-cp3",
      "subject": "RIZAL",
      "week": "Module 3",
      "question": "What was the first nationalistic article written by Rizal on Spanish soil?",
      "answer": "Amor Patrio (Love of Country), published in Diarong Tagalog under pen-name Laong Laan.",
      "tag": "Literary Works"
    },
    {
      "id": "fc-rz-31",
      "checkpointId": "rizal-cp3",
      "subject": "RIZAL",
      "week": "Module 3",
      "question": "Who translated Rizal's Spanish essay Amor Patrio into Tagalog for Diarong Tagalog?",
      "answer": "Marcelo H. del Pilar (published August 20, 1882).",
      "tag": "Literary Works"
    },
    {
      "id": "fc-rz-32",
      "checkpointId": "rizal-cp3",
      "subject": "RIZAL",
      "week": "Module 3",
      "question": "In what two concurrent degrees did Rizal enroll at Universidad Central de Madrid on Nov 3, 1882?",
      "answer": "Medicine and Philosophy & Letters.",
      "tag": "Madrid Life"
    },
    {
      "id": "fc-rz-33",
      "checkpointId": "rizal-cp3",
      "subject": "RIZAL",
      "week": "Module 3",
      "question": "What poem did Rizal declaim at the Círculo Hispano-Filipino on New Year's Eve 1882?",
      "answer": "Me Piden Versos (They Ask Me For Verses).",
      "tag": "Madrid Life"
    },
    {
      "id": "fc-rz-34",
      "checkpointId": "rizal-cp3",
      "subject": "RIZAL",
      "week": "Module 3",
      "question": "Why did Rizal join Masonic Lodge Acacia in Madrid in March 1883?",
      "answer": "To secure Freemasonry's international aid in the fight against Spanish friar tyranny.",
      "tag": "Freemasonry"
    },
    {
      "id": "fc-rz-35",
      "checkpointId": "rizal-cp3",
      "subject": "RIZAL",
      "week": "Module 3",
      "question": "In which academic degree was Rizal awarded the highest rating of 'Sobresaliente' (Excellent)?",
      "answer": "Licentiate in Philosophy and Letters (conferred June 1885 by Universidad Central de Madrid).",
      "tag": "Academic Honors"
    },
    {
      "id": "fc-rz-36",
      "checkpointId": "rizal-cp4",
      "subject": "RIZAL",
      "week": "Module 4",
      "question": "Why did Rizal specifically choose to specialize in ophthalmology?",
      "answer": "To operate on and cure his mother's (Doña Teodora Alonso) failing eyesight and cataracts.",
      "tag": "Ophthalmology"
    },
    {
      "id": "fc-rz-37",
      "checkpointId": "rizal-cp4",
      "subject": "RIZAL",
      "week": "Module 4",
      "question": "Who was the leading French ophthalmologist Rizal served as clinical assistant to in Paris?",
      "answer": "Dr. Louis de Weckert.",
      "tag": "Ophthalmology"
    },
    {
      "id": "fc-rz-38",
      "checkpointId": "rizal-cp4",
      "subject": "RIZAL",
      "week": "Module 4",
      "question": "In Juan Luna's canvas 'The Blood Compact' (El Pacto de Sangre), what character did Rizal pose as?",
      "answer": "Chieftain Sikatuna (Trinidad Pardo de Tavera posed as Legazpi).",
      "tag": "Juan Luna"
    },
    {
      "id": "fc-rz-39",
      "checkpointId": "rizal-cp4",
      "subject": "RIZAL",
      "week": "Module 4",
      "question": "Under which German ophthalmologist did Rizal work at the University Eye Hospital in Heidelberg?",
      "answer": "Dr. Otto Becker.",
      "tag": "Heidelberg"
    },
    {
      "id": "fc-rz-40",
      "checkpointId": "rizal-cp4",
      "subject": "RIZAL",
      "week": "Module 4",
      "question": "How did Rizal describe German women in his March 11, 1886 letter to his sister Trinidad?",
      "answer": "Serious, diligent, educated, and friendly; not gossipy, frivolous, or quarrelsome.",
      "tag": "Letters"
    },
    {
      "id": "fc-rz-41",
      "checkpointId": "rizal-cp4",
      "subject": "RIZAL",
      "week": "Module 4",
      "question": "What novel by Harriet Beecher Stowe inspired Rizal to depict the miseries of his people?",
      "answer": "Uncle Tom's Cabin.",
      "tag": "Noli Me Tangere"
    },
    {
      "id": "fc-rz-42",
      "checkpointId": "rizal-cp4",
      "subject": "RIZAL",
      "week": "Module 4",
      "question": "Who is heralded as the 'Savior of the Noli' for loaning Rizal the funds to print his novel?",
      "answer": "Dr. Máximo Viola (from San Miguel, Bulacan).",
      "tag": "Noli Me Tangere"
    },
    {
      "id": "fc-rz-43",
      "checkpointId": "rizal-cp4",
      "subject": "RIZAL",
      "week": "Module 4",
      "question": "What printing shop produced the first 2,000 copies of Noli Me Tangere for 300 pesos?",
      "answer": "Berliner Buchdruckerei-Actien-Gesellschaft (came off press March 21, 1887).",
      "tag": "Noli Me Tangere"
    },
    {
      "id": "fc-rz-44",
      "checkpointId": "rizal-cp4",
      "subject": "RIZAL",
      "week": "Module 4",
      "question": "In what city did Rizal and Ferdinand Blumentritt meet in person for the very first time?",
      "answer": "Leitmeritz, Bohemia on May 13, 1887 at 1:30 PM.",
      "tag": "Grand Tour"
    },
    {
      "id": "fc-rz-45",
      "checkpointId": "rizal-cp4",
      "subject": "RIZAL",
      "week": "Module 4",
      "question": "What event at the Madrid Exposition in 1887 deeply outraged Rizal during his Geneva stay?",
      "answer": "The deplorable exhibition and mistreatment of native Igorots from Northern Luzon.",
      "tag": "Geneva Tour"
    },
    {
      "id": "fc-ct-1",
      "checkpointId": "contempo-cp1",
      "subject": "SOCSCI3",
      "week": "Module 1",
      "question": "What is Manfred Steger's term for the social condition characterized by thick global connections?",
      "answer": "Globality (distinguished from Globalization, which refers to the dynamic processes leading to globality).",
      "tag": "Core Definitions"
    },
    {
      "id": "fc-ct-2",
      "checkpointId": "contempo-cp1",
      "subject": "SOCSCI3",
      "week": "Module 1",
      "question": "Which sociologist coined the term 'Liquid Modernity' to describe modern fluid globalization?",
      "answer": "Zygmunt Bauman (2000).",
      "tag": "Metaphors"
    },
    {
      "id": "fc-ct-3",
      "checkpointId": "contempo-cp1",
      "subject": "SOCSCI3",
      "week": "Module 1",
      "question": "What are the 3 metaphorical states of matter used to explain epochs of globalization?",
      "answer": "Solidity (Pre-Modern), Liquidity (Modern), and Gaseousness (Contemporary).",
      "tag": "Metaphors"
    },
    {
      "id": "fc-ct-4",
      "checkpointId": "contempo-cp1",
      "subject": "SOCSCI3",
      "week": "Module 1",
      "question": "Name the 5 dimensions of global cultural flows ('Scapes') formulated by Arjun Appadurai.",
      "answer": "Ethnoscapes, Technoscapes, Financescapes, Mediascapes, and Ideoscapes.",
      "tag": "Global Scapes"
    },
    {
      "id": "fc-ct-5",
      "checkpointId": "contempo-cp1",
      "subject": "SOCSCI3",
      "week": "Module 1",
      "question": "What does Arjun Appadurai mean by the concept of 'Disjuncture' between global scapes?",
      "answer": "The 5 scapes do not move at the same speed or in the same direction (e.g., capital moves instantly while human migration is blocked).",
      "tag": "Global Scapes"
    },
    {
      "id": "fc-ct-6",
      "checkpointId": "contempo-cp1",
      "subject": "SOCSCI3",
      "week": "Module 1",
      "question": "What is Anna Tsing's concept of 'Friction' in globalization?",
      "answer": "The obstacles, resistance, tariffs, and sticky institutional borders that slow down, divert, or halt global flows.",
      "tag": "Global Limits"
    },
    {
      "id": "fc-ct-7",
      "checkpointId": "contempo-cp1",
      "subject": "SOCSCI3",
      "week": "Module 1",
      "question": "Give two examples of 'Heavy Structures' and two examples of 'Light Structures' in globalization.",
      "answer": "Heavy: Container ports, railways, airports. Light: Subsea fiber cables, cloud software, SWIFT protocol.",
      "tag": "Structures"
    },
    {
      "id": "fc-ct-8",
      "checkpointId": "contempo-cp1",
      "subject": "SOCSCI3",
      "week": "Module 1",
      "question": "What is David Harvey's term for the shrinking of distance and time caused by technology?",
      "answer": "Time-Space Compression.",
      "tag": "Core Definitions"
    },
    {
      "id": "fc-ct-9",
      "checkpointId": "contempo-cp1",
      "subject": "SOCSCI3",
      "week": "Module 1",
      "question": "What is Anthony Giddens' concept of 'Time-Space Distanciation'?",
      "answer": "The stretching of social relations so local events are shaped by happenings thousands of miles away and vice versa.",
      "tag": "Core Definitions"
    },
    {
      "id": "fc-ct-10",
      "checkpointId": "contempo-cp1",
      "subject": "SOCSCI3",
      "week": "Module 1",
      "question": "What is the distinction between Ethnoscapes and Technoscapes?",
      "answer": "Ethnoscapes are the movement of persons (migrants, tourists, OFWs); Technoscapes are the movement of mechanical and digital technology.",
      "tag": "Global Scapes"
    },
    {
      "id": "fc-ct-11",
      "checkpointId": "contempo-cp1",
      "subject": "SOCSCI3",
      "week": "Module 1",
      "question": "What phenomenon occurs when governments re-impose hard physical structures against fluid flows?",
      "answer": "Re-solidification (e.g., border walls, national digital firewalls, export bans).",
      "tag": "Metaphors"
    },
    {
      "id": "fc-ct-12",
      "checkpointId": "contempo-cp2",
      "subject": "SOCSCI3",
      "week": "Module 2",
      "question": "Which trade route (1565–1815) is hailed as the birth of the first truly planetary, continuous global economy?",
      "answer": "The Manila-Acapulco Galleon Trade (connecting Asia, the Americas, and Europe).",
      "tag": "Economic History"
    },
    {
      "id": "fc-ct-13",
      "checkpointId": "contempo-cp2",
      "subject": "SOCSCI3",
      "week": "Module 2",
      "question": "Who coined and popularized 'The Fourth Industrial Revolution' (4IR) at the World Economic Forum in 2016?",
      "answer": "Professor Klaus Schwab.",
      "tag": "4IR"
    },
    {
      "id": "fc-ct-14",
      "checkpointId": "contempo-cp2",
      "subject": "SOCSCI3",
      "week": "Module 2",
      "question": "What is the core definition of the Fourth Industrial Revolution (4IR)?",
      "answer": "The fusion of technologies blurring the lines between the physical, digital, and biological spheres.",
      "tag": "4IR"
    },
    {
      "id": "fc-ct-15",
      "checkpointId": "contempo-cp2",
      "subject": "SOCSCI3",
      "week": "Module 2",
      "question": "What were the primary energy sources and key inventions of 1IR and 2IR?",
      "answer": "1IR (~1784): Steam engine and water power. 2IR (~1870): Electricity, steel, chemicals, and the assembly line.",
      "tag": "Industrial History"
    },
    {
      "id": "fc-ct-16",
      "checkpointId": "contempo-cp2",
      "subject": "SOCSCI3",
      "week": "Module 2",
      "question": "What two Bretton Woods institutions were created in July 1944 in New Hampshire?",
      "answer": "The International Monetary Fund (IMF) and the World Bank (IBRD).",
      "tag": "Financial Architecture"
    },
    {
      "id": "fc-ct-17",
      "checkpointId": "contempo-cp2",
      "subject": "SOCSCI3",
      "week": "Module 2",
      "question": "Under the Bretton Woods system, what was the fixed peg between the US Dollar and gold?",
      "answer": "$35 per ounce of gold.",
      "tag": "Financial Architecture"
    },
    {
      "id": "fc-ct-18",
      "checkpointId": "contempo-cp2",
      "subject": "SOCSCI3",
      "week": "Module 2",
      "question": "What historic event occurred on August 15, 1971 that dismantled the Bretton Woods monetary system?",
      "answer": "The Nixon Shock (President Richard Nixon ended the convertibility of the US dollar into gold).",
      "tag": "Exam Trap"
    },
    {
      "id": "fc-ct-19",
      "checkpointId": "contempo-cp2",
      "subject": "SOCSCI3",
      "week": "Module 2",
      "question": "On what date did the World Trade Organization (WTO) officially replace GATT?",
      "answer": "January 1, 1995 (following the Uruguay Round and Marrakesh Agreement).",
      "tag": "WTO"
    },
    {
      "id": "fc-ct-20",
      "checkpointId": "contempo-cp2",
      "subject": "SOCSCI3",
      "week": "Module 2",
      "question": "Who formulated the 'Washington Consensus' in 1989, and what did it prescribe?",
      "answer": "Economist John Williamson; prescribed 10 neoliberal policies: fiscal austerity, privatization, deregulation, and free trade.",
      "tag": "Neoliberalism"
    },
    {
      "id": "fc-ct-21",
      "checkpointId": "contempo-cp2",
      "subject": "SOCSCI3",
      "week": "Module 2",
      "question": "What percentage of international trade is estimated to take place within Global Value Chains (GVCs)?",
      "answer": "Approximately 80% of all international trade.",
      "tag": "GVCs"
    },
    {
      "id": "fc-ct-22",
      "checkpointId": "contempo-cp2",
      "subject": "SOCSCI3",
      "week": "Module 2",
      "question": "What is 'Platform Capitalism' in the context of the Fourth Industrial Revolution?",
      "answer": "Business models (Uber, Airbnb, Shopee) that extract value from digital data and network matchmaking without owning physical production assets.",
      "tag": "4IR Economy"
    },
    {
      "id": "fc-ct-23",
      "checkpointId": "contempo-cp3",
      "subject": "SOCSCI3",
      "week": "Module 3",
      "question": "What is the primary argument of the Hyperglobalist (Globalist) school of globalization?",
      "answer": "We live in a borderless world ('The World is Flat'); market forces dominate and the nation-state is becoming obsolete.",
      "tag": "Theories"
    },
    {
      "id": "fc-ct-24",
      "checkpointId": "contempo-cp3",
      "subject": "SOCSCI3",
      "week": "Module 3",
      "question": "What do scholars of the Skeptical school (Hirst & Thompson) argue about globalization?",
      "answer": "Globalization is an exaggerated myth; economic integration is primarily regional (trade blocs), and nation-states remain as powerful as ever.",
      "tag": "Theories"
    },
    {
      "id": "fc-ct-25",
      "checkpointId": "contempo-cp3",
      "subject": "SOCSCI3",
      "week": "Module 3",
      "question": "How do Transformationalists (Held & Giddens) view the effect of globalization on the nation-state?",
      "answer": "The state is neither dead nor unchanged; state power is being transformed, restructured, and recalibrated in response to global forces.",
      "tag": "Theories"
    },
    {
      "id": "fc-ct-26",
      "checkpointId": "contempo-cp3",
      "subject": "SOCSCI3",
      "week": "Module 3",
      "question": "Name the three structural strata of Immanuel Wallerstein's World-Systems Theory.",
      "answer": "1) The Core (exploiter), 2) The Semi-Periphery (buffer zone), 3) The Periphery (exploited).",
      "tag": "World-Systems"
    },
    {
      "id": "fc-ct-27",
      "checkpointId": "contempo-cp3",
      "subject": "SOCSCI3",
      "week": "Module 3",
      "question": "What role does the 'Semi-Periphery' play in Wallerstein's World-Systems Theory?",
      "answer": "It serves as an economic and geopolitical buffer zone that prevents direct polarization and conflict between core and periphery.",
      "tag": "World-Systems"
    },
    {
      "id": "fc-ct-28",
      "checkpointId": "contempo-cp3",
      "subject": "SOCSCI3",
      "week": "Module 3",
      "question": "What is the core difference between Modernization Theory and Dependency Theory?",
      "answer": "Modernization blames internal cultural backwardness; Dependency argues underdevelopment is actively caused by core exploitation and unequal trade.",
      "tag": "Macro Theories"
    },
    {
      "id": "fc-ct-29",
      "checkpointId": "contempo-cp3",
      "subject": "SOCSCI3",
      "week": "Module 3",
      "question": "Who authored the 5 stages of economic growth in Modernization Theory?",
      "answer": "Walt Rostow (1960).",
      "tag": "Macro Theories"
    },
    {
      "id": "fc-ct-30",
      "checkpointId": "contempo-cp3",
      "subject": "SOCSCI3",
      "week": "Module 3",
      "question": "What are the 4 dimensions of George Ritzer's concept of 'McDonaldization'?",
      "answer": "1) Efficiency, 2) Calculability, 3) Predictability, 4) Control (via non-human technology).",
      "tag": "Cultural Theories"
    },
    {
      "id": "fc-ct-31",
      "checkpointId": "contempo-cp3",
      "subject": "SOCSCI3",
      "week": "Module 3",
      "question": "Who coined the term 'Glocalization' to describe the blending of global and local cultures?",
      "answer": "Roland Robertson.",
      "tag": "Cultural Theories"
    },
    {
      "id": "fc-ct-32",
      "checkpointId": "contempo-cp3",
      "subject": "SOCSCI3",
      "week": "Module 3",
      "question": "What thesis did Samuel Huntington propose in 'The Clash of Civilizations'?",
      "answer": "Cultural and religious identities are enduring and will be the primary source of conflict in the post-Cold War world.",
      "tag": "Cultural Theories"
    },
    {
      "id": "fc-ct-33",
      "checkpointId": "contempo-cp3",
      "subject": "SOCSCI3",
      "week": "Module 3",
      "question": "Which Nobel laureate economist wrote 'Globalization and Its Discontents' (2002) critiquing IMF market fundamentalism?",
      "answer": "Joseph Stiglitz.",
      "tag": "Critiques"
    },
    {
      "id": "fc-ct-34",
      "checkpointId": "contempo-cp4",
      "subject": "SOCSCI3",
      "week": "Module 4",
      "question": "Who is heralded as the 'Father of Containerization', and in what year did he introduce it?",
      "answer": "Malcolm McLean in 1956 (with the container ship Ideal X).",
      "tag": "Transportation"
    },
    {
      "id": "fc-ct-35",
      "checkpointId": "contempo-cp4",
      "subject": "SOCSCI3",
      "week": "Module 4",
      "question": "By approximately what percentage did standardized container shipping slash freight handling costs?",
      "answer": "By over 90% (drastically reducing the cost of shipping manufactured goods globally).",
      "tag": "Transportation"
    },
    {
      "id": "fc-ct-36",
      "checkpointId": "contempo-cp4",
      "subject": "SOCSCI3",
      "week": "Module 4",
      "question": "What carries 99% of all international internet and telecommunications traffic across oceans?",
      "answer": "Subsea fiber-optic cables (satellites carry less than 1%).",
      "tag": "Technology"
    },
    {
      "id": "fc-ct-37",
      "checkpointId": "contempo-cp4",
      "subject": "SOCSCI3",
      "week": "Module 4",
      "question": "What does SWIFT stand for in the context of international banking?",
      "answer": "Society for Worldwide Interbank Financial Telecommunication.",
      "tag": "Finance"
    },
    {
      "id": "fc-ct-38",
      "checkpointId": "contempo-cp4",
      "subject": "SOCSCI3",
      "week": "Module 4",
      "question": "What is the difference between a Multinational Enterprise (MNE) and a Transnational Corporation (TNC)?",
      "answer": "MNEs maintain a clear home national base; TNCs transcend national borders with decentralized global operations.",
      "tag": "Corporate Drivers"
    },
    {
      "id": "fc-ct-39",
      "checkpointId": "contempo-cp4",
      "subject": "SOCSCI3",
      "week": "Module 4",
      "question": "How much annual revenue does the Philippine IT-BPM (BPO) industry generate?",
      "answer": "Over $35 billion annually (employing over 1.7 million direct Filipino professionals).",
      "tag": "Philippine Context"
    },
    {
      "id": "fc-ct-40",
      "checkpointId": "contempo-cp4",
      "subject": "SOCSCI3",
      "week": "Module 4",
      "question": "What is the macroeconomic significance of Overseas Filipino Worker (OFW) remittances to the Philippines?",
      "answer": "Over $37 billion annually, contributing approximately 9% of Philippine GDP and stabilizing foreign reserves.",
      "tag": "Philippine Context"
    },
    {
      "id": "fc-ct-41",
      "checkpointId": "contempo-cp4",
      "subject": "SOCSCI3",
      "week": "Module 4",
      "question": "What is the 'Democratic Deficit' in global governance?",
      "answer": "The criticism that global institutions (IMF, WTO, World Bank) make far-reaching decisions without direct electoral accountability to citizens.",
      "tag": "Global Governance"
    },
    {
      "id": "fc-ct-42",
      "checkpointId": "contempo-cp4",
      "subject": "SOCSCI3",
      "week": "Module 4",
      "question": "Give 3 examples of 'Problems Without Passports' (transboundary crises).",
      "answer": "Climate change, global viral pandemics (COVID-19), and international cyberwarfare.",
      "tag": "Global Governance"
    },
    {
      "id": "fc-ct-43",
      "checkpointId": "contempo-cp4",
      "subject": "SOCSCI3",
      "week": "Module 4",
      "question": "What term describes the post-2008 slowdown and retreat of global economic integration?",
      "answer": "Deglobalization (or 'Slowbalization').",
      "tag": "Deglobalization"
    },
    {
      "id": "fc-ct-44",
      "checkpointId": "contempo-cp4",
      "subject": "SOCSCI3",
      "week": "Module 4",
      "question": "What is the difference between 'Reshoring' and 'Nearshoring' / 'Friendshoring'?",
      "answer": "Reshoring returns manufacturing to the domestic homeland; nearshoring/friendshoring moves it to geographically proximate or politically allied nations.",
      "tag": "Supply Chains"
    },
    {
      "id": "fc-ct-45",
      "checkpointId": "contempo-cp4",
      "subject": "SOCSCI3",
      "week": "Module 4",
      "question": "What is the world's largest Free Trade Agreement covering 30% of global GDP across Asia-Pacific?",
      "answer": "RCEP (Regional Comprehensive Economic Partnership).",
      "tag": "Trade Agreements"
    }
  ],
  "quizzes": [
    {
      "checkpointId": "cp1",
      "subject": "SPI101",
      "week": "Week 2",
      "questions": [
        {
          "id": "q-w2-1",
          "type": "multiple",
          "question": "Which ethical theory is characterized by the popular saying: 'What's right for you may not be right for me'?",
          "options": [
            "Cultural Relativism",
            "Subjective Relativism",
            "Kantianism",
            "Ethical Egoism"
          ],
          "correct": 1,
          "explanation": "Subjective Relativism asserts that every single person decides morality for themselves, encapsulated in 'What's right for you may not be right for me'."
        },
        {
          "id": "q-w2-2",
          "type": "multiple",
          "question": "Divine Command Theory is fundamentally grounded on which of the following?",
          "options": [
            "Human logic and philosophical debate",
            "Cost-benefit consequence calculation",
            "Obedience to God's will, not reason",
            "Consensus of the majority"
          ],
          "correct": 2,
          "explanation": "As stated in the lecture: 'The divine command theory is based on OBEDIENCE, not REASON.'"
        },
        {
          "id": "q-w2-3",
          "type": "multiple",
          "question": "A student drops out of college so that their younger siblings can afford tuition. Which ethical theory is this action a DIRECT counter-example against?",
          "options": [
            "Kantian Deontology",
            "Ethical Egoism",
            "Utilitarianism",
            "Divine Command Theory"
          ],
          "correct": 1,
          "explanation": "Ethical Egoism claims humans exclusively act for their own maximum long-term self-interest. Sacrificing one's education for siblings directly contradicts this claim."
        },
        {
          "id": "q-w2-4",
          "type": "multiple",
          "question": "Jeremy Bentham is the influential pioneer of which consequentialist principle?",
          "options": [
            "Categorical Imperative",
            "The greatest happiness for the greatest number",
            "Frictionless capitalism",
            "Pure reason independent of consequences"
          ],
          "correct": 1,
          "explanation": "Jeremy Bentham advocated Utilitarianism, which measures morality by 'the greatest happiness for the greatest number'."
        },
        {
          "id": "q-w2-5",
          "type": "multiple",
          "question": "Immanuel Kant's deontological philosophy emphasizes which core maxim?",
          "options": [
            "'The end justifies the means'",
            "'Act morally regardless of the consequences'",
            "'Follow society's moral custom'",
            "'Maximize long-term personal gain'"
          ],
          "correct": 1,
          "explanation": "Kantianism teaches that actions are duty-based and grounded in pure reason: 'Act morally regardless of the consequences.'"
        },
        {
          "id": "q-w2-6",
          "type": "multiple",
          "question": "Why has Article II/III Section 26 of the Philippine Constitution (prohibiting political dynasties) remained unenacted by Congress for over 28 years?",
          "options": [
            "The Supreme Court declared it unconstitutional",
            "It is a non-self-executing provision requiring an enabling law, and lawmakers act out of self-interest rather than Kantian duty",
            "The President vetoed all anti-dynasty laws",
            "It expired after the 1987 transition period"
          ],
          "correct": 1,
          "explanation": "It is not self-executing and requires an enabling law. Lawmakers prioritize self-interest/preservation over their constitutional moral obligation."
        },
        {
          "id": "q-w2-7",
          "type": "multiple",
          "question": "Why do 9 out of 10 people ignore a bleeding stranger at their door, but immediately pay taxes when receiving a BIR audit letter?",
          "options": [
            "Taxes are cheaper than first aid",
            "The persuasive power of ethics is weak, while the legal obligation carries coercive power and threat of criminal prosecution",
            "Filipinos prioritize charity over legal obligations",
            "Hospital care is illegal without police approval"
          ],
          "correct": 1,
          "explanation": "The slide explicitly illustrates that moral compulsion is weak, whereas legal compulsion carries criminal prosecution and imprisonment."
        },
        {
          "id": "q-w2-8",
          "type": "multiple",
          "question": "In Philippine law, what kind of obligation is it for adult children to provide financial support to their elderly parents?",
          "options": [
            "Civil Obligation (enforceable with lawsuit)",
            "Criminal Obligation (punishable by jail)",
            "Natural Obligation (moral duty, no current law allows parents to sue children for support)",
            "Constitutional Guarantee"
          ],
          "correct": 2,
          "explanation": "While parents have a civil legal obligation to support minor children, children supporting elderly parents is currently only a natural (moral) obligation."
        },
        {
          "id": "q-w2-9",
          "type": "multiple",
          "question": "What law put an end to copycats of the 2000 'LOVE BUG' virus in the Philippines?",
          "options": [
            "The Cybercrime Prevention Act of 2012",
            "The Electronic Commerce Act of 2000 (RA 8792)",
            "The Data Privacy Act of 2012",
            "The Revised Penal Code of 1932"
          ],
          "correct": 1,
          "explanation": "The slide notes that after the enactment of the E-Commerce Law, fear of legal consequences prevented copycats of the Love Bug."
        },
        {
          "id": "q-w2-10",
          "type": "multiple",
          "question": "Which of the following books is cited in Week 2 as a principal source for moral philosophy?",
          "options": [
            "Clean Code by Robert C. Martin",
            "The Elements of Moral Philosophy by James Rachels",
            "The Mythical Man-Month by Fred Brooks",
            "Computer Ethics by Deborah Douglas"
          ],
          "correct": 1,
          "explanation": "The slide cites Douglas Birsch (2002) and James Rachels (2003) *The Elements of Moral Philosophy*."
        }
      ]
    },
    {
      "checkpointId": "cp2",
      "subject": "SPI101",
      "week": "Week 3-4",
      "questions": [
        {
          "id": "q-w3-1",
          "type": "multiple",
          "question": "Which of the following is NOT one of the 4 stated benefits of following a Professional Code of Ethics?",
          "options": [
            "Ethical Decision Making",
            "Guaranteed 100% Bug-Free Software",
            "Trust and Respect from the General Public",
            "Evaluation Benchmark"
          ],
          "correct": 1,
          "explanation": "The 4 benefits are: Ethical Decision Making, High Standards of Practice, Trust & Respect from Public, and Evaluation Benchmark."
        },
        {
          "id": "q-w3-2",
          "type": "multiple",
          "question": "According to the Filipino IT Code of Ethics, when may confidential client information be disclosed?",
          "options": [
            "Whenever the developer leaves the company",
            "When the developer receives a higher salary offer",
            "Only with consent of concerned parties or when required by law",
            "Whenever posted on social media for public awareness"
          ],
          "correct": 2,
          "explanation": "Canon 7 states: 'I will not disclose or use any confidential information... without consent... except when required by the laws.'"
        },
        {
          "id": "q-w3-3",
          "type": "multiple",
          "question": "How many hours per week do Filipinos spend on social media, earning the title 'Social Media Capital of the World'?",
          "options": [
            "35 hours (global average)",
            "42 hours (global average)",
            "53 hours (11 hours higher than global average)",
            "70 hours (highest recorded)"
          ],
          "correct": 2,
          "explanation": "The slides state Filipinos spend 53 hours a week on social media platforms, 11 hours higher than the global average of 42 hours."
        },
        {
          "id": "q-w3-4",
          "type": "multiple",
          "question": "According to James Moor, what are the three properties that make computer ethics unique?",
          "options": [
            "Speed, Storage, and Bandwidth",
            "Logical Malleability, Impact on Society, and Invisibility Factor",
            "Privacy, Piracy, and Intellectual Property",
            "Hardware, Software, and Peopleware"
          ],
          "correct": 1,
          "explanation": "James Moor identifies: 1) Logical Malleability, 2) Impact on Society, and 3) Invisibility Factor."
        },
        {
          "id": "q-w3-5",
          "type": "multiple",
          "question": "Which type of invisibility describes programmers embedding their own subjective biases or shortcuts into code?",
          "options": [
            "Invisible Abuse",
            "Invisible Programming Values",
            "Invisible Complex Calculation",
            "Invisible Logic Glitch"
          ],
          "correct": 1,
          "explanation": "Invisible Programming Values refers to moral values, biases, and assumptions silently baked into code by software developers."
        },
        {
          "id": "q-w3-6",
          "type": "multiple",
          "question": "In what scenario is recording or uploading a video of a person without their consent EXEMPT from being improper?",
          "options": [
            "When recording an ex-partner in their bedroom",
            "When videotaping for general public welfare, such as an abusive traffic enforcer threatening a driver",
            "When recording a student failing an exam to entertain Facebook users",
            "When filming a customer inside a bank teller booth"
          ],
          "correct": 1,
          "explanation": "The slide cites the viral video of an abusive traffic enforcer threatening a truck driver (general public welfare) as a valid exemption."
        },
        {
          "id": "q-w3-7",
          "type": "multiple",
          "question": "Taking a picture of Manny Pacquiao is legally permissible in public, but NEVER in which area?",
          "options": [
            "Inside an arena during a fight",
            "In a public press conference",
            "Inside a private comfort room / restroom",
            "At a campaign rally"
          ],
          "correct": 2,
          "explanation": "The slide specifically notes: 'If Manny Pacquiao went to the comfort room, never take his picture or video!'"
        },
        {
          "id": "q-w3-8",
          "type": "multiple",
          "question": "A person who collects real-world computer ethics case studies, attends symposiums, and compares scenarios operates at which level?",
          "options": [
            "Pop Computer Ethics",
            "Para Computer Ethics",
            "Theoretical Computer Ethics",
            "Academic Computer Ethics"
          ],
          "correct": 1,
          "explanation": "Para computer ethics is the level where someone collects examples, clarifies them, looks for similarities, and reads related works."
        },
        {
          "id": "q-w3-9",
          "type": "multiple",
          "question": "What position does the Hacking Community's Constitution take regarding commercial proprietary software for governments?",
          "options": [
            "Governments must use only paid proprietary software for security",
            "Governments should never adopt commercial/priced software, fully endorsing the open-source movement",
            "Governments should outlaw open source",
            "Governments should create their own closed OS"
          ],
          "correct": 1,
          "explanation": "Point 12 states they believe in the open source movement fully; governments adopting commercial software biases the market and slows smaller company innovation."
        },
        {
          "id": "q-w3-10",
          "type": "multiple",
          "question": "Which of the following is Commandment #1 of the Ten Commandments of Computer Ethics?",
          "options": [
            "Thou shalt not copy proprietary software",
            "Thou shalt not snoop around in other people's computer files",
            "Thou shalt not use a computer to harm other people",
            "Thou shalt not use a computer to steal"
          ],
          "correct": 2,
          "explanation": "Commandment 1: 'Thou shalt not use a computer to harm other people.'"
        }
      ]
    },
    {
      "checkpointId": "cp3",
      "subject": "SPI101",
      "week": "Week 5-6",
      "questions": [
        {
          "id": "q-w5-1",
          "type": "multiple",
          "question": "How many times does the word 'PRIVACY' appear in the 1987 Philippine Constitution?",
          "options": [
            "Once (in Article III, Section 3)",
            "Ten times across the Bill of Rights",
            "Zero times (it is merely implied)",
            "Five times"
          ],
          "correct": 0,
          "explanation": "As stated in the slides, the word 'PRIVACY' is mentioned only ONCE in the 1987 Constitution: Article III, Section 3."
        },
        {
          "id": "q-w5-2",
          "type": "multiple",
          "question": "Under the Anti-Money Laundering Act (AMLA), banks must report single-transaction deposits of at least what amount?",
          "options": [
            "₱100,000",
            "₱300,000",
            "₱500,000",
            "₱1,000,000"
          ],
          "correct": 1,
          "explanation": "Under AMLA, an individual deposit of at least Three Hundred Thousand Pesos (₱300,000) in a single transaction triggers mandatory reporting to AMLC."
        },
        {
          "id": "q-w5-3",
          "type": "multiple",
          "question": "Pedro enters an LRT station with a sealed wedding gift. Security guards demand he open it. What legal exception applies?",
          "options": [
            "Lawful search warrant from a judge",
            "Public order or safety requirement",
            "Anti-Wiretapping Law",
            "Exclusionary rule"
          ],
          "correct": 1,
          "explanation": "Public order or safety in crowded transit hubs authorizes security personnel to inspect bags to protect public safety against terrorism."
        },
        {
          "id": "q-w5-4",
          "type": "multiple",
          "question": "What did the Supreme Court hold regarding the constitutionality of SALN disclosure under RA 3019?",
          "options": [
            "It is unconstitutional because it breaches the privacy of public officers",
            "It is constitutional because it passes the Rational Relationship Test to curb corruption and promote honesty",
            "It only applies to the President",
            "It requires a search warrant for each public officer"
          ],
          "correct": 1,
          "explanation": "The Supreme Court declared RA 3019 valid under police power and the rational relationship test to maintain public service integrity."
        },
        {
          "id": "q-w5-5",
          "type": "multiple",
          "question": "Under RA 4200 (The Anti-Wiretapping Act), whose consent is required to legally record a private conversation?",
          "options": [
            "The consent of at least one party",
            "The authorization of all parties to the conversation",
            "Consent of any listening bystander",
            "Verbal consent of the phone provider"
          ],
          "correct": 1,
          "explanation": "RA 4200 explicitly requires authorization given by ALL parties to the private conversation."
        },
        {
          "id": "q-w5-6",
          "type": "multiple",
          "question": "Can a spouse break open their partner's locked cabinet to obtain proof of marital infidelity?",
          "options": [
            "Yes, marriage removes all individual privacy rights",
            "No, the Supreme Court declared marriage does not shed a person's individual integrity or constitutional right to privacy",
            "Yes, if they suspect immediate adultery",
            "Only if they have a notarized affidavit"
          ],
          "correct": 1,
          "explanation": "The SC ruled that intimacy between spouses does not justify ransacking locked drawers; a person retains their constitutional privacy rights."
        },
        {
          "id": "q-w5-7",
          "type": "multiple",
          "question": "What is the privacy right status of convicted prisoners and detained individuals?",
          "options": [
            "They possess absolute privacy in their prison cells",
            "They have a diminished expectation of privacy rights inherent to lawful detention under RA 7438",
            "They lose all human rights completely",
            "Their privacy rights are identical to private citizens at home"
          ],
          "correct": 1,
          "explanation": "By the very fact of detention or imprisonment, detainees have a diminished expectation of privacy rights."
        },
        {
          "id": "q-w5-8",
          "type": "multiple",
          "question": "Which of the following is NOT one of the Data Privacy Principles under Section 11 of RA 10173?",
          "options": [
            "Collected for specified and legitimate purposes",
            "Adequate and not excessive (data minimization)",
            "Retained indefinitely forever for future unannounced marketing",
            "Processed fairly and lawfully"
          ],
          "correct": 2,
          "explanation": "Under RA 10173, data must be retained ONLY for as long as necessary for the fulfillment of the declared purpose."
        },
        {
          "id": "q-w5-9",
          "type": "multiple",
          "question": "What is the classic legal definition of 'due process of law'?",
          "options": [
            "'A law that acts immediately without warning'",
            "'A law which hears before it condemns, which proceeds upon inquiry, and renders judgment only after trial'",
            "'A regulation issued exclusively by the military'",
            "'Any law published in an official gazette'"
          ],
          "correct": 1,
          "explanation": "The jurisprudence defines due process as: 'A law which hears before it condemns; which proceeds upon inquiry, and renders judgment only after trial.'"
        },
        {
          "id": "q-w5-10",
          "type": "multiple",
          "question": "In software engineering, what common feature directly embodies the Due Process Clause?",
          "options": [
            "A dark mode toggle button",
            "A confirmation dialog ('Do you want to save changes to file.doc? [Yes] [No] [Cancel]') before destructive file operations",
            "Minified JavaScript code",
            "Database indexing"
          ],
          "correct": 1,
          "explanation": "The slide explains that prompt confirmation dialogs give users the 'right to be heard' when a clear danger of accidental file loss occurs."
        }
      ]
    },
    {
      "checkpointId": "ms-cp1",
      "subject": "MS101",
      "week": "Week 2-4",
      "questions": [
        {
          "id": "q-ms1-1",
          "type": "multiple",
          "question": "Which of the following is a VALID proposition in propositional logic?",
          "options": [
            "x + 5 = 12",
            "Close the door immediately!",
            "Quezon City is in Metro Manila",
            "Where is the campus?"
          ],
          "correct": 2,
          "explanation": "'Quezon City is in Metro Manila' is a declarative statement that is strictly True. The others are commands, questions, or open expressions."
        },
        {
          "id": "q-ms1-2",
          "type": "multiple",
          "question": "Given hypothesis p is False and conclusion q is False. What is the truth value of the implication p → q?",
          "options": [
            "True",
            "False",
            "Undefined",
            "Contradiction"
          ],
          "correct": 0,
          "explanation": "An implication p → q is only False when T → F. When p is False (F → F), the conditional is vacuously TRUE."
        },
        {
          "id": "q-ms1-3",
          "type": "multiple",
          "question": "How many rows are required in a complete truth table for the formula: (p ∧ q) → (r ∨ s)?",
          "options": [
            "4 rows",
            "8 rows",
            "16 rows",
            "32 rows"
          ],
          "correct": 2,
          "explanation": "Formula is R = 2^n. There are 4 variables (p, q, r, s), so 2^4 = 16 rows."
        },
        {
          "id": "q-ms1-4",
          "type": "multiple",
          "question": "A compound sentence that is True under EVERY possible interpretation is termed a:",
          "options": [
            "Contingency",
            "Contradiction",
            "Tautology",
            "Predicate"
          ],
          "correct": 2,
          "explanation": "A statement that evaluates to True in every row of its truth table is a Tautology (or Valid sentence)."
        },
        {
          "id": "q-ms1-5",
          "type": "multiple",
          "question": "If set A = {1, 2, 3}, what is the total number of elements in its power set P(A)?",
          "options": [
            "3",
            "6",
            "8",
            "9"
          ],
          "correct": 2,
          "explanation": "Power set size formula is |P(A)| = 2^|A| = 2^3 = 8 subsets."
        },
        {
          "id": "q-ms1-6",
          "type": "multiple",
          "question": "Which logical connective has the HIGHEST priority in order of operations?",
          "options": [
            "Implication (→)",
            "Disjunction (∨)",
            "Conjunction (∧)",
            "Negation (~)"
          ],
          "correct": 3,
          "explanation": "Precedence order: NOT (~) has the highest priority, followed by AND, OR, IF-THEN, and finally IFF."
        },
        {
          "id": "q-ms1-7",
          "type": "multiple",
          "question": "What is the cardinality of the set A = {23, 24, ..., 38}?",
          "options": [
            "15",
            "16",
            "17",
            "38"
          ],
          "correct": 1,
          "explanation": "38 - 23 + 1 = 16 elements (you must add 1 because 23 is inclusive)."
        },
        {
          "id": "q-ms1-8",
          "type": "multiple",
          "question": "Which quantifier translates to 'there is at least one value in the universe which satisfies P(x)'?",
          "options": [
            "Universal Quantifier (∀)",
            "Existential Quantifier (∃)",
            "Tautology Quantifier",
            "Negation Quantifier"
          ],
          "correct": 1,
          "explanation": "The existential quantifier (∃x) means 'there exists' or 'for at least one x'."
        }
      ]
    },
    {
      "checkpointId": "ms-cp2",
      "subject": "MS101",
      "week": "Week 5",
      "questions": [
        {
          "id": "q-ms2-1",
          "type": "multiple",
          "question": "What is the greatest common divisor (GCD) of 48 and 72?",
          "options": [
            "12",
            "16",
            "24",
            "144"
          ],
          "correct": 2,
          "explanation": "The positive common divisors of 48 and 72 are 1, 2, 3, 4, 6, 8, 12, 16, 24. The greatest is 24."
        },
        {
          "id": "q-ms2-2",
          "type": "multiple",
          "question": "According to Euclid's Division Algorithm, what are the quotient q and remainder r when 101 is divided by 4?",
          "options": [
            "q = 25, r = 1",
            "q = 24, r = 5",
            "q = 25, r = 0",
            "q = 26, r = -3"
          ],
          "correct": 0,
          "explanation": "101 = 4(25) + 1, where 0 ≤ 1 < 4. Hence q = 25 and r = 1."
        },
        {
          "id": "q-ms2-3",
          "type": "multiple",
          "question": "Which of the following numbers is NEITHER prime nor composite?",
          "options": [
            "2",
            "1",
            "3",
            "9"
          ],
          "correct": 1,
          "explanation": "By mathematical definition, 0 and 1 are neither prime nor composite."
        },
        {
          "id": "q-ms2-4",
          "type": "multiple",
          "question": "If a | b and a | c, which theorem is guaranteed to be true?",
          "options": [
            "a | (b + c)",
            "b | c",
            "c | b",
            "a = b + c"
          ],
          "correct": 0,
          "explanation": "The linear combination theorem states: If a | b and a | c, then a | (b + c)."
        }
      ]
    },
    {
      "checkpointId": "ms-cp3",
      "subject": "MS101",
      "week": "Week 6",
      "questions": [
        {
          "id": "q-ms3-1",
          "type": "multiple",
          "question": "What is a simple theorem used as an intermediate result in proving another theorem called?",
          "options": [
            "Axiom",
            "Corollary",
            "Lemma",
            "Conjecture"
          ],
          "correct": 2,
          "explanation": "A Lemma is a helper theorem used as an intermediate stepping stone in proof."
        },
        {
          "id": "q-ms3-2",
          "type": "multiple",
          "question": "To prove p → q by contrapositive, which implication do you prove instead?",
          "options": [
            "~p → ~q",
            "~q → ~p",
            "q → p",
            "p ∧ ~q"
          ],
          "correct": 1,
          "explanation": "The contrapositive of p → q is ~q → ~p, which has the identical truth table."
        },
        {
          "id": "q-ms3-3",
          "type": "multiple",
          "question": "What is the primary role of the Principle of Mathematical Induction?",
          "options": [
            "To discover brand new mathematical formulas",
            "To prove that a predicate is true for all natural numbers",
            "To calculate derivatives",
            "To invert matrices"
          ],
          "correct": 1,
          "explanation": "Mathematical induction proves a predicate holds for all natural numbers. It cannot discover theorems."
        }
      ]
    },
    {
      "checkpointId": "ipt-py1",
      "subject": "IPT102",
      "week": "Week 1-2",
      "questions": [
        {
          "id": "q-py1-1",
          "type": "multiple",
          "question": "Who created the Python programming language between 1985 and 1990?",
          "options": [
            "James Gosling",
            "Guido van Rossum",
            "Bjarne Stroustrup",
            "Brendan Eich"
          ],
          "correct": 1,
          "explanation": "Guido van Rossum, a Dutch computer scientist, created Python between 1985 and 1990."
        },
        {
          "id": "q-py1-2",
          "type": "multiple",
          "question": "Under what open-source license is Python published?",
          "options": [
            "Apache 2.0 License",
            "MIT License",
            "GNU General Public License (GPL)",
            "BSD 3-Clause License"
          ],
          "correct": 2,
          "explanation": "Like Perl, Python source code is published under the GNU General Public License (GPL)."
        },
        {
          "id": "q-py1-3",
          "type": "multiple",
          "question": "What title was Guido van Rossum known by until he stepped down on July 12, 2018?",
          "options": [
            "Chief Software Architect (CSA)",
            "Benevolent Dictator For Life (BDFL)",
            "President Emeritus",
            "Supreme Commander of Code"
          ],
          "correct": 1,
          "explanation": "Guido van Rossum was designated Python's 'Benevolent Dictator For Life' (BDFL) until July 12, 2018."
        },
        {
          "id": "q-py1-4",
          "type": "multiple",
          "question": "Why does Python not require pre-compilation before execution?",
          "options": [
            "It compiles straight into hardware microcode",
            "It is an interpreted language processed at runtime by the interpreter",
            "It only executes inside a web browser",
            "It requires a C compiler to run in the background"
          ],
          "correct": 1,
          "explanation": "Python is an interpreted language; the interpreter reads and processes instructions at runtime without pre-compiling."
        },
        {
          "id": "q-py1-5",
          "type": "multiple",
          "question": "What was the very first Unix IDE created specifically for Python?",
          "options": [
            "PyCharm",
            "IDLE",
            "PythonWin",
            "Eclipse PyDev"
          ],
          "correct": 1,
          "explanation": "IDLE was the very first Unix IDE for Python (and is bundled with Python distributions)."
        },
        {
          "id": "q-py1-6",
          "type": "multiple",
          "question": "What was the first dedicated Windows interface and graphical IDE for Python?",
          "options": [
            "Visual Studio Code",
            "PythonWin",
            "Spyder",
            "Thonny"
          ],
          "correct": 1,
          "explanation": "PythonWin was the first Windows graphical interface and IDE for Python."
        },
        {
          "id": "q-py1-7",
          "type": "multiple",
          "question": "Which of the following is NOT one of Python's core characteristics?",
          "options": [
            "Dynamic type checking",
            "Automatic garbage collection",
            "Mandatory manual memory pointers",
            "Support for OOP, structured, and functional programming"
          ],
          "correct": 2,
          "explanation": "Python features automatic garbage collection; manual pointer management does not exist in Python."
        },
        {
          "id": "q-py1-8",
          "type": "multiple",
          "question": "Which technology allows Python programs to run natively on the Java Virtual Machine?",
          "options": [
            "IronPython",
            "Jython",
            "PyPy",
            "Cython"
          ],
          "correct": 1,
          "explanation": "Jython is the Python implementation running on the Java Virtual Machine (JVM), while IronPython targets .NET."
        },
        {
          "id": "q-py1-9",
          "type": "multiple",
          "question": "Which command is typed in a terminal window to check if Python is installed?",
          "options": [
            "pyrun",
            "python",
            "exec-python",
            "runpy"
          ],
          "correct": 1,
          "explanation": "Typing 'python' in a terminal checks for installation and opens the interactive interpreter."
        },
        {
          "id": "q-py1-10",
          "type": "multiple",
          "question": "Which major company is explicitly cited as using Python for high-performance operations?",
          "options": [
            "NASA",
            "Google",
            "Netflix",
            "All of the above"
          ],
          "correct": 3,
          "explanation": "NASA, Google, Netflix, Intel, PayPal, Amazon, and Uber all use Python extensively."
        }
      ]
    },
    {
      "checkpointId": "ipt-py2",
      "subject": "IPT102",
      "week": "Week 3-4",
      "questions": [
        {
          "id": "q-py2-1",
          "type": "multiple",
          "question": "How does Python indicate a block of code inside functions and conditional statements?",
          "options": [
            "Curly braces { }",
            "BEGIN and END tags",
            "Indentation (spaces at beginning of line)",
            "Semicolons ;"
          ],
          "correct": 2,
          "explanation": "Python uses indentation to denote code blocks. Curly braces are used for dictionaries/sets, not blocks."
        },
        {
          "id": "q-py2-2",
          "type": "multiple",
          "question": "What is the PEP 8 standard convention for Python indentation?",
          "options": [
            "1 tab or 8 spaces",
            "4 spaces (at least 1 is required)",
            "2 spaces strictly",
            "Indentation depth does not matter"
          ],
          "correct": 1,
          "explanation": "The most common and standard convention is 4 spaces, but it must be at least 1 space and consistent throughout the block."
        },
        {
          "id": "q-py2-3",
          "type": "multiple",
          "question": "Which of the following is an ILLEGAL variable name in Python?",
          "options": [
            "my_var",
            "_myvar",
            "2myvar",
            "myVar2"
          ],
          "correct": 2,
          "explanation": "Variable names cannot start with a number (e.g., '2myvar' is illegal)."
        },
        {
          "id": "q-py2-4",
          "type": "multiple",
          "question": "What happens when executing: fruits = ['apple', 'banana']; x, y, z = fruits?",
          "options": [
            "z defaults to None",
            "ValueError (not enough values to unpack)",
            "x becomes a list containing both fruits",
            "SyntaxError: invalid assignment"
          ],
          "correct": 1,
          "explanation": "Python unpacking requires the number of variables to exactly match the collection length; otherwise, a ValueError is raised."
        },
        {
          "id": "q-py2-5",
          "type": "multiple",
          "question": "What error occurs if you run: x = 5; y = 'John'; print(x + y)?",
          "options": [
            "SyntaxError",
            "TypeError (cannot concatenate int and str)",
            "ValueError",
            "Outputs '5John' automatically"
          ],
          "correct": 1,
          "explanation": "The + operator cannot combine int and str; Python throws a TypeError. Use print(x, y) instead."
        },
        {
          "id": "q-py2-6",
          "type": "multiple",
          "question": "Which keyword allows a programmer to modify a global variable from inside a function?",
          "options": [
            "extern",
            "global",
            "static",
            "override"
          ],
          "correct": 1,
          "explanation": "The 'global' keyword binds a local statement to the module-level global variable."
        },
        {
          "id": "q-py2-7",
          "type": "multiple",
          "question": "What is the imaginary part symbol used for complex numbers in Python?",
          "options": [
            "i (e.g. 3+5i)",
            "j (e.g. 3+5j)",
            "c (e.g. 3+5c)",
            "img (e.g. 3+5img)"
          ],
          "correct": 1,
          "explanation": "Complex numbers in Python use 'j' or 'J' to indicate the imaginary component."
        },
        {
          "id": "q-py2-8",
          "type": "multiple",
          "question": "Which method call generates a random integer from 1 up to 9?",
          "options": [
            "random.random(1, 9)",
            "random.randrange(1, 10)",
            "random.int(1, 9)",
            "random.generate(1, 10)"
          ],
          "correct": 1,
          "explanation": "import random; random.randrange(1, 10) returns an integer from 1 to 9 (10 is excluded)."
        },
        {
          "id": "q-py2-9",
          "type": "multiple",
          "question": "What will print('Hello, World!'[2:5]) output?",
          "options": [
            "'Hel'",
            "'llo'",
            "'ello'",
            "'llo,'"
          ],
          "correct": 1,
          "explanation": "Index 2 is 'l', index 3 is 'l', and index 4 is 'o'. Index 5 is excluded, yielding 'llo'."
        },
        {
          "id": "q-py2-10",
          "type": "multiple",
          "question": "Why does s.upper() NOT modify the original string 's'?",
          "options": [
            "Strings in Python are immutable; methods return new string objects",
            "upper() only works on single characters",
            "Python strings can only be edited using pointers",
            "The method requires an exclamation mark: s.upper!()"
          ],
          "correct": 0,
          "explanation": "Python strings are immutable. All string modification methods return a new string rather than modifying in place."
        }
      ]
    },
    {
      "checkpointId": "ipt-cp1",
      "subject": "IPT102",
      "week": "Week 2",
      "questions": [
        {
          "id": "q-ipt1-1",
          "type": "multiple",
          "question": "What is the defining characteristic of a dynamic website?",
          "options": [
            "It is written strictly in raw HTML without any CSS",
            "It displays different content every time a user views it based on demographics, time, and scripting",
            "It never connects to a database",
            "It only loads images when the browser is resized"
          ],
          "correct": 1,
          "explanation": "A dynamic website generates unique content tailored to the visitor using client-side and server-side scripting."
        },
        {
          "id": "q-ipt1-2",
          "type": "multiple",
          "question": "Which scripting model executes inside the client's browser to respond to mouse clicks and keystrokes?",
          "options": [
            "Server-side scripting",
            "Client-side scripting (e.g., JavaScript)",
            "Database-side scripting",
            "Firmware scripting"
          ],
          "correct": 1,
          "explanation": "Client-side scripting runs in the user's browser (e.g. JavaScript) to immediately handle UI events like clicks."
        },
        {
          "id": "q-ipt1-3",
          "type": "multiple",
          "question": "To enable server-side access for an ordinary HTML tag in an ASP.NET Web Form, which attribute must be included?",
          "options": [
            "`asp-for=\"true\"`",
            "`runat=\"server\"`",
            "`mode=\"backend\"`",
            "`server=\"active\"`"
          ],
          "correct": 1,
          "explanation": "The `runat=\"server\"` attribute tells ASP.NET to process the element as a server control."
        },
        {
          "id": "q-ipt1-4",
          "type": "multiple",
          "question": "Which of the following is NOT one of the 5 types of ASP.NET web controls?",
          "options": [
            "HTML controls",
            "HTML Server controls",
            "ASP.NET Server controls",
            "ActiveX Desktop controls"
          ],
          "correct": 3,
          "explanation": "The 5 types are HTML controls, HTML Server controls, ASP.NET Server controls, ASP.NET Ajax Server controls, and User/custom controls."
        },
        {
          "id": "q-ipt1-5",
          "type": "multiple",
          "question": "What is the first event triggered in the ASP.NET Page Event Lifecycle?",
          "options": [
            "Page_Load",
            "Page_Init",
            "Page_Unload",
            "Button_Click"
          ],
          "correct": 1,
          "explanation": "The page lifecycle begins with Page_Init (Initialize), followed by control state restoration, then Page_Load."
        },
        {
          "id": "q-ipt1-6",
          "type": "multiple",
          "question": "Which category of server controls includes `<asp:dropdownlist>` and `<asp:listbox>`?",
          "options": [
            "Basic controls",
            "Validation controls",
            "List controls",
            "Rich controls"
          ],
          "correct": 2,
          "explanation": "List controls handle repetition and option groups, including dropdownlist, listbox, and radiobuttonlist."
        },
        {
          "id": "q-ipt1-7",
          "type": "multiple",
          "question": "What is the primary benefit of ASP.NET Validation Controls running on BOTH client and server?",
          "options": [
            "It prevents users from spoofing Web Forms while avoiding unnecessary server roundtrips when valid",
            "It converts ASPX files into pure PDF documents",
            "It encrypts all client-side JavaScript files",
            "It eliminates the need for database storage"
          ],
          "correct": 0,
          "explanation": "Client-side validation avoids roundtrips for speed, while server-side validation guarantees security against form spoofing."
        },
        {
          "id": "q-ipt1-8",
          "type": "multiple",
          "question": "Which server tag syntax corresponds to an HTML server button that submits a form?",
          "options": [
            "`<input type=\"submit\" runat=\"server\">`",
            "`<button type=\"ajax\">`",
            "`<form action=\"post\" runat=\"client\">`",
            "`<asp:redirect runat=\"server\">`"
          ],
          "correct": 0,
          "explanation": "`<input type=\"submit\" runat=\"server\">` automatically POSTs form data to the server."
        },
        {
          "id": "q-ipt1-9",
          "type": "multiple",
          "question": "In ASP.NET page syntax, what does the expression `<%# ... %>` denote?",
          "options": [
            "Server-side comment",
            "Page directive",
            "Data binding expression",
            "HTML comment"
          ],
          "correct": 2,
          "explanation": "`<%# %>` is the ASP.NET data binding expression syntax."
        },
        {
          "id": "q-ipt1-10",
          "type": "multiple",
          "question": "Are tag names and attributes case-sensitive or case-insensitive in ASP.NET server controls?",
          "options": [
            "Strictly case-sensitive",
            "Case-insensitive",
            "Case-sensitive only on Windows",
            "Case-sensitive only for IDs"
          ],
          "correct": 1,
          "explanation": "As stated in the slides: 'Tags and attributes are case-insensitive'."
        },
        {
          "id": "q-ipt1-11",
          "type": "multiple",
          "question": "What is the primary architectural difference between ASP.NET Core and legacy ASP.NET (.NET Framework)?",
          "options": [
            "ASP.NET Core is cross-platform, open source, and runs on .NET 8/9, while .NET Framework is Windows-only",
            "ASP.NET Core only supports Visual Basic",
            "ASP.NET Core requires Apache and cannot run on Windows",
            "Legacy .NET Framework is faster and cross-platform"
          ],
          "correct": 0,
          "explanation": "ASP.NET Core is modern, cross-platform (Windows, Linux, macOS), open source, and high-performance."
        },
        {
          "id": "q-ipt1-12",
          "type": "multiple",
          "question": "In the ASP.NET Core project structure, what is the role of the 'wwwroot' folder?",
          "options": [
            "Stores database connection strings securely",
            "Acts as the root directory for serving static site content (CSS, images, JS, favicon)",
            "Holds server-side C# controller classes",
            "Contains NuGet package binaries"
          ],
          "correct": 1,
          "explanation": "The wwwroot directory holds all static website assets accessible directly by the client browser."
        },
        {
          "id": "q-ipt1-13",
          "type": "multiple",
          "question": "Which Visual Studio feature allows code and markup modifications to take effect while running without rebuilding?",
          "options": [
            "Live Share",
            "Hot Reload",
            "IntelliCode",
            "CodeLens"
          ],
          "correct": 1,
          "explanation": "Hot Reload applies code and UI changes to a running web application without pausing or rebuilding."
        },
        {
          "id": "q-ipt1-14",
          "type": "multiple",
          "question": "What keyboard shortcut in Visual Studio stops an active debugging session?",
          "options": [
            "F5",
            "Ctrl + F5",
            "Shift + F5",
            "Alt + F4"
          ],
          "correct": 2,
          "explanation": "Shift + F5 terminates the active debugging session and shuts down the running web server process."
        }
      ]
    },
    {
      "checkpointId": "ipt-cp2",
      "subject": "IPT102",
      "week": "Week 3",
      "questions": [
        {
          "id": "q-ipt2-1",
          "type": "multiple",
          "question": "What core software engineering architectural pattern is ASP.NET MVC 5 built upon?",
          "options": [
            "Monolithic Web Forms",
            "Model-View-Controller (MVC)",
            "Microservices Gateway Pattern",
            "Entity-Component-System"
          ],
          "correct": 1,
          "explanation": "ASP.NET MVC 5 is explicitly based on the Model-View-Controller pattern."
        },
        {
          "id": "q-ipt2-2",
          "type": "multiple",
          "question": "In MVC architecture, which component represents the data and business rules?",
          "options": [
            "Controller",
            "Model",
            "View",
            "Router"
          ],
          "correct": 1,
          "explanation": "The slide explicitly highlights: 'Model represents the data'."
        },
        {
          "id": "q-ipt2-3",
          "type": "multiple",
          "question": "Which component in MVC is responsible for handling user HTTP requests and returning views?",
          "options": [
            "Model",
            "Controller",
            "View",
            "App_Data"
          ],
          "correct": 1,
          "explanation": "The slide explicitly highlights: 'Controller is the request handler'."
        },
        {
          "id": "q-ipt2-4",
          "type": "multiple",
          "question": "Why will IIS never serve files stored inside the App_Data folder?",
          "options": [
            "IIS does not support XML files",
            "To protect sensitive data files like LocalDB, .mdf, and internal schemas from public web download",
            "Because App_Data files are automatically deleted on reboot",
            "Because only Linux servers support App_Data"
          ],
          "correct": 1,
          "explanation": "IIS blocks public web requests to App_Data to safeguard local databases and data files."
        },
        {
          "id": "q-ipt2-5",
          "type": "multiple",
          "question": "According to MVC naming conventions, every controller class name MUST end with which suffix?",
          "options": [
            "Handler",
            "Service",
            "Controller",
            "Route"
          ],
          "correct": 2,
          "explanation": "ASP.NET MVC requires all controller classes to end with 'Controller' (e.g. HomeController)."
        },
        {
          "id": "q-ipt2-6",
          "type": "multiple",
          "question": "Which file allows writing code that runs in response to application lifecycle events like Application_Start?",
          "options": [
            "Packages.config",
            "Web.config",
            "Global.asax",
            "RouteConfig.cs"
          ],
          "correct": 2,
          "explanation": "Global.asax handles Application_Start, Application_BeginRequest, Session_Start, etc."
        },
        {
          "id": "q-ipt2-7",
          "type": "multiple",
          "question": "Where is the default route registration method defined in an ASP.NET MVC application?",
          "options": [
            "RouteConfig class under the App_Start folder",
            "HomeController inside the Controllers folder",
            "Packages.config in the root directory",
            "Web.config under system.webServer"
          ],
          "correct": 0,
          "explanation": "Routes are registered in RouteConfig.cs located in the App_Start folder."
        },
        {
          "id": "q-ipt2-8",
          "type": "multiple",
          "question": "For the incoming URL 'http://localhost/student/index/123', which action method and ID will handle it?",
          "options": [
            "Controller: StudentController, Action: Index(), Id: 123",
            "Controller: HomeController, Action: Student(), Id: null",
            "Controller: IndexController, Action: Student(), Id: 123",
            "Controller: RouteController, Action: Edit(), Id: 123"
          ],
          "correct": 0,
          "explanation": "Under {controller}/{action}/{id}, 'student' is the controller, 'index' is the action, and '123' is the id."
        },
        {
          "id": "q-ipt2-9",
          "type": "multiple",
          "question": "What is the primary difference between Web Forms routing and MVC routing?",
          "options": [
            "Web Forms does not use URLs",
            "In Web Forms every URL typically matches a physical .aspx file, while MVC routing maps to a controller class",
            "MVC routing only works for static images",
            "MVC routing requires Apache webserver"
          ],
          "correct": 1,
          "explanation": "MVC maps clean URLs directly to Controller classes, decoupling URLs from physical disk files."
        },
        {
          "id": "q-ipt2-10",
          "type": "multiple",
          "question": "Which package manager tool manages the Packages.config file in ASP.NET MVC?",
          "options": [
            "npm",
            "NuGet",
            "pip",
            "composer"
          ],
          "correct": 1,
          "explanation": "Packages.config is managed by NuGet to track installed packages and dependencies."
        }
      ]
    },
    {
      "checkpointId": "ipt-cp3",
      "subject": "IPT102",
      "week": "Week 4",
      "questions": [
        {
          "id": "q-ipt3-1",
          "type": "multiple",
          "question": "What base class does every ASP.NET MVC Controller derive from?",
          "options": [
            "System.Web.UI.Page",
            "System.Web.Mvc.Controller",
            "System.Web.Routing.RouteBase",
            "System.Net.Http.ApiController"
          ],
          "correct": 1,
          "explanation": "Every MVC controller inherits from System.Web.Mvc.Controller."
        },
        {
          "id": "q-ipt3-2",
          "type": "multiple",
          "question": "Which of the following is a strict restriction on Action Methods in MVC?",
          "options": [
            "Action methods must be static",
            "Action methods must be private",
            "Action methods cannot be overloaded",
            "Action methods must return an integer"
          ],
          "correct": 2,
          "explanation": "Action methods cannot be overloaded, cannot be static, and MUST be public."
        },
        {
          "id": "q-ipt3-3",
          "type": "multiple",
          "question": "By default, what is the default action method invoked if none is specified in the URL?",
          "options": [
            "Start()",
            "Index()",
            "Home()",
            "Default()"
          ],
          "correct": 1,
          "explanation": "The default action method configured in RouteConfig is Index()."
        },
        {
          "id": "q-ipt3-4",
          "type": "multiple",
          "question": "Which ActionResult class represents HTML and markup returned to the browser?",
          "options": [
            "ContentResult",
            "JsonResult",
            "ViewResult",
            "EmptyResult"
          ],
          "correct": 2,
          "explanation": "ViewResult represents HTML and markup, generated via the View() helper method."
        },
        {
          "id": "q-ipt3-5",
          "type": "multiple",
          "question": "Which controller helper method returns a string literal response?",
          "options": [
            "View()",
            "Content()",
            "File()",
            "Json()"
          ],
          "correct": 1,
          "explanation": "Content() returns a ContentResult containing a string literal."
        },
        {
          "id": "q-ipt3-6",
          "type": "multiple",
          "question": "What attribute should be applied to a public method in a Controller so that routing IGNORES it?",
          "options": [
            "[IgnoreRoute]",
            "[NonAction]",
            "[HiddenMethod]",
            "[PrivateAction]"
          ],
          "correct": 1,
          "explanation": "The [NonAction] attribute tells the routing engine that a public method is NOT an action method."
        },
        {
          "id": "q-ipt3-7",
          "type": "multiple",
          "question": "How can you make a method named GetById() respond to the URL '/student/find/1'?",
          "options": [
            "Apply [ActionName(\"find\")] above GetById()",
            "Rename the controller to FindController",
            "Add [Route(\"ignore\")]",
            "Action names can never differ from method names"
          ],
          "correct": 0,
          "explanation": "[ActionName(\"find\")] sets the public action name to 'find' regardless of the C# method identifier."
        },
        {
          "id": "q-ipt3-8",
          "type": "multiple",
          "question": "If no action verb attribute is applied to an action method, which HTTP verb does it handle by default?",
          "options": [
            "HttpPost",
            "HttpGet",
            "HttpPut",
            "HttpDelete"
          ],
          "correct": 1,
          "explanation": "If no verb is specified, the action method handles HttpGet by default."
        },
        {
          "id": "q-ipt3-9",
          "type": "multiple",
          "question": "What is the role of Scaffolding in ASP.NET MVC?",
          "options": [
            "Automated code generation framework that speeds up controller and view development",
            "A tool for scanning viruses in uploaded files",
            "A database compression utility",
            "A hardware emulator for mobile testing"
          ],
          "correct": 0,
          "explanation": "Scaffolding automatically creates boilerplate controller and view code based on templates (T4)."
        },
        {
          "id": "q-ipt3-10",
          "type": "multiple",
          "question": "How can an action method accept both GET and POST requests simultaneously?",
          "options": [
            "Overload the method with identical parameters",
            "Use [AcceptVerbs(HttpVerbs.Post | HttpVerbs.Get)]",
            "Make the method static",
            "Declare the method private"
          ],
          "correct": 1,
          "explanation": "The AcceptVerbs attribute allows multiple HTTP verbs to be bound to a single action method."
        }
      ]
    },
    {
      "checkpointId": "ipt-cp4",
      "subject": "IPT102",
      "week": "Week 5",
      "questions": [
        {
          "id": "q-ipt4-1",
          "type": "multiple",
          "question": "What is the file extension for Razor views written with C# syntax?",
          "options": [
            ".vbhtml",
            ".aspx",
            ".cshtml",
            ".html5"
          ],
          "correct": 2,
          "explanation": "C# Razor views use the .cshtml file extension, while VB uses .vbhtml."
        },
        {
          "id": "q-ipt4-2",
          "type": "multiple",
          "question": "How are multi-statement Razor code blocks enclosed in a view?",
          "options": [
            "`<% ... %>`",
            "`@{ ... }`",
            "`<?php ... ?>`",
            "`{{ ... }}`"
          ],
          "correct": 1,
          "explanation": "Razor code blocks are enclosed in `@{ ... }`."
        },
        {
          "id": "q-ipt4-3",
          "type": "multiple",
          "question": "When does the web server execute the Razor code in a .cshtml page?",
          "options": [
            "After the HTML is rendered in the browser",
            "Before sending the HTML page to the browser",
            "Only when the user clicks a button",
            "Razor code is executed client-side by V8"
          ],
          "correct": 1,
          "explanation": "The server runs the Razor code first, creates dynamic HTML on the fly, and sends pure HTML to the browser."
        },
        {
          "id": "q-ipt4-4",
          "type": "multiple",
          "question": "Which symbol is used to transition from HTML markup into an inline Razor expression?",
          "options": [
            "`#`",
            "``",
            "`@`",
            "`&`"
          ],
          "correct": 2,
          "explanation": "Inline expressions in Razor start with the `@` symbol (e.g. `@DateTime.Now`)."
        },
        {
          "id": "q-ipt4-5",
          "type": "multiple",
          "question": "What is required at the end of each C# statement inside a Razor @{ ... } block?",
          "options": [
            "A colon (:)",
            "A semicolon (;)",
            "A comma (,)",
            "No punctuation is required"
          ],
          "correct": 1,
          "explanation": "Just like standard C#, every statement inside a Razor block must end with a semicolon."
        },
        {
          "id": "q-ipt4-6",
          "type": "multiple",
          "question": "Is C# code inside a Razor view case-sensitive or case-insensitive?",
          "options": [
            "Case-insensitive",
            "Case-sensitive",
            "Case-insensitive only for HTML tags",
            "Only variable names are sensitive"
          ],
          "correct": 1,
          "explanation": "C# code in Razor is strictly case-sensitive."
        },
        {
          "id": "q-ipt4-7",
          "type": "multiple",
          "question": "How do you check in a Razor view whether the current request is an HTTP POST submission?",
          "options": [
            "`if (Request.Method == \"SEND\")`",
            "`if (IsPost)`",
            "`if (Form.Submitted)`",
            "`if (PostBack == true)`"
          ],
          "correct": 1,
          "explanation": "Razor provides the built-in boolean condition `if (IsPost)` to check for POST submissions."
        },
        {
          "id": "q-ipt4-8",
          "type": "multiple",
          "question": "Which method converts an input string from Request[\"num\"] into an integer in Razor?",
          "options": [
            "`.ToInt32()`",
            "`.AsInt()`",
            "`.ParseInt()`",
            "`.CastToNumber()`"
          ],
          "correct": 1,
          "explanation": "Razor provides the `.AsInt()` extension method on string inputs (e.g. `num1.AsInt()`)."
        },
        {
          "id": "q-ipt4-9",
          "type": "multiple",
          "question": "What will `@DateTime.Now.ToShortDateString()` output in a Razor view?",
          "options": [
            "The current time in milliseconds",
            "The current date formatted as a short string",
            "The server's IP address",
            "A compiler warning"
          ],
          "correct": 1,
          "explanation": "It prints the current date (e.g. '09/22/2026')."
        },
        {
          "id": "q-ipt4-10",
          "type": "multiple",
          "question": "What keyword is typically used to declare local variables with inferred types inside @{ ... }?",
          "options": [
            "let",
            "dim",
            "var",
            "val"
          ],
          "correct": 2,
          "explanation": "Variables are declared with the 'var' keyword or explicit C# types."
        }
      ]
    },
    {
      "checkpointId": "ipt-cp5",
      "subject": "IPT102",
      "week": "Week 6",
      "questions": [
        {
          "id": "q-ipt5-1",
          "type": "multiple",
          "question": "What are Standard HTML Helpers in ASP.NET MVC?",
          "options": [
            "JavaScript libraries that validate forms on the client",
            "Extension methods of the HtmlHelper class that render standard HTML controls",
            "CSS stylesheets that format tables",
            "Server hardware accelerators"
          ],
          "correct": 1,
          "explanation": "HTML Helpers are extension methods of HtmlHelper used to generate HTML markup dynamically."
        },
        {
          "id": "q-ipt5-2",
          "type": "multiple",
          "question": "What prefix is used in Razor to access HTML helper methods?",
          "options": [
            "`#Html.`",
            "`@Html.`",
            "`Form.`",
            "`%Helper.`"
          ],
          "correct": 1,
          "explanation": "Html helpers are accessed using the `@Html.` prefix in Razor views."
        },
        {
          "id": "q-ipt5-3",
          "type": "multiple",
          "question": "What is the primary difference between `@Html.TextBox()` and `@Html.TextBoxFor()`?",
          "options": [
            "`@Html.TextBox()` renders an image, while `TextBoxFor()` renders text",
            "`@Html.TextBox()` is loosely typed (string name), while `TextBoxFor()` is strongly typed (lambda model expression)",
            "`@Html.TextBoxFor()` only works in Web Forms",
            "There is no difference"
          ],
          "correct": 1,
          "explanation": "TextBox() is loosely typed with string parameters; TextBoxFor() is strongly typed with compile-time model properties."
        },
        {
          "id": "q-ipt5-4",
          "type": "multiple",
          "question": "Which HTML control is generated by the helper call `@Html.Password(\"userPass\")`?",
          "options": [
            "`<input type=\"text\">`",
            "`<input type=\"password\">`",
            "`<input type=\"hidden\">`",
            "`<textarea>`"
          ],
          "correct": 1,
          "explanation": "`Html.Password` renders an `<input type=\"password\">` that masks entered characters."
        },
        {
          "id": "q-ipt5-5",
          "type": "multiple",
          "question": "Which HTML Helper is used to generate a multi-line text input field?",
          "options": [
            "`@Html.TextBox()`",
            "`@Html.TextArea()`",
            "`@Html.MultiInput()`",
            "`@Html.ListBox()`"
          ],
          "correct": 1,
          "explanation": "`@Html.TextArea()` renders a `<textarea>` element supporting multiple rows and columns."
        },
        {
          "id": "q-ipt5-6",
          "type": "multiple",
          "question": "Which helper generates a non-editable dropdown selection control (`<select><option>`)?",
          "options": [
            "`@Html.ListBox()`",
            "`@Html.DropDownList()`",
            "`@Html.ComboBox()`",
            "`@Html.OptionPicker()`"
          ],
          "correct": 1,
          "explanation": "`@Html.DropDownList()` creates a `<select>` element that restricts the user to choosing one item."
        },
        {
          "id": "q-ipt5-7",
          "type": "multiple",
          "question": "What class is commonly passed into `@Html.DropDownList` to wrap an `IEnumerable` collection of options?",
          "options": [
            "`ArrayList`",
            "`SelectList`",
            "`DataCollection`",
            "`OptionGroup`"
          ],
          "correct": 1,
          "explanation": "`new SelectList(strCourses)` is passed to DropDownList to populate items."
        },
        {
          "id": "q-ipt5-8",
          "type": "multiple",
          "question": "Which HTML Helper renders an anchor tag hyperlink (`<a>`) in ASP.NET MVC?",
          "options": [
            "`@Html.HyperLink()`",
            "`@Html.ActionLink()`",
            "`@Html.Anchor()`",
            "`@Html.UrlLink()`"
          ],
          "correct": 1,
          "explanation": "`@Html.ActionLink()` generates an `<a>` anchor tag pointing to a controller action."
        },
        {
          "id": "q-ipt5-9",
          "type": "multiple",
          "question": "In `@Html.RadioButton(\"Gender\", \"Male\", true, new { id = \"male\" })`, what does the third parameter (`true`) specify?",
          "options": [
            "Whether the control is visible",
            "Whether the radio button is initially checked (selected)",
            "Whether the control is disabled",
            "Whether it requires client validation"
          ],
          "correct": 1,
          "explanation": "The boolean isChecked parameter sets whether the radio option is selected by default."
        },
        {
          "id": "q-ipt5-9-alt",
          "type": "multiple",
          "question": "Which HTML helper dynamically renders a form control based on the model property's data type?",
          "options": [
            "`@Html.Editor()` or `@Html.EditorFor()`",
            "`@Html.Display()`",
            "`@Html.Label()`",
            "`@Html.ActionLink()`"
          ],
          "correct": 0,
          "explanation": "Editor() inspects metadata and data types to dynamically output appropriate form controls (e.g. numeric input, date picker, text)."
        }
      ]
    },
    {
      "checkpointId": "sia-cp1",
      "subject": "SIA101",
      "week": "Week 2",
      "questions": [
        {
          "id": "q-sia-1",
          "type": "multiple",
          "question": "Which of the following best defines System Integration?",
          "options": [
            "Writing code from scratch to replace all legacy applications",
            "Combining different sub-system components to form a large unified system ensuring functionality",
            "Designing the visual graphic user interface for an operating system",
            "Purchasing off-the-shelf software packages to eliminate database storage"
          ],
          "correct": 1,
          "explanation": "System Integration is explicitly defined as combining different sub-system components to form a large system that ensures the functionality of all sub-systems."
        },
        {
          "id": "q-sia-2",
          "type": "multiple",
          "question": "What is System Architecture?",
          "options": [
            "The physical wiring connecting server racks in a data center",
            "A conceptual model and formal description/representation that defines a system",
            "A business contract specifying software license payment terms",
            "A method of formatting SQL queries for high throughput"
          ],
          "correct": 1,
          "explanation": "System Architecture is a conceptual model that defines a system and serves as a formal description and representation of that system."
        },
        {
          "id": "q-sia-3",
          "type": "multiple",
          "question": "What are the three (3) components of a message in a single UN/EDIFACT transfer unit?",
          "options": [
            "Header, Body, and Footer",
            "Event, Reference Data, and Control Information",
            "Client, Server, and Gateway",
            "Input, Process, and Output"
          ],
          "correct": 1,
          "explanation": "UN/EDIFACT contains all three components in one transfer unit: 1. Event, 2. Reference Data, and 3. Control Information."
        },
        {
          "id": "q-sia-4",
          "type": "multiple",
          "question": "In UML interaction modeling, how many parts does a message contain?",
          "options": [
            "Four (Sender, Receiver, Data, Timestamp)",
            "Three (Event, Reference Data, Control Information)",
            "Two (Event and Information)",
            "One (Operation Name only)"
          ],
          "correct": 2,
          "explanation": "In UML, messages are structured into two (2) parts: 1. Event and 2. Information."
        },
        {
          "id": "q-sia-5",
          "type": "multiple",
          "question": "Which requirement elicitation technique is designed to generate a large volume of creative ideas without immediate criticism?",
          "options": [
            "Brainstorming",
            "Reverse Engineering",
            "Document Analysis",
            "Interface Analysis"
          ],
          "correct": 0,
          "explanation": "Brainstorming is a group creativity technique focused on rapidly generating diverse ideas without premature evaluation or criticism."
        },
        {
          "id": "q-sia-6",
          "type": "multiple",
          "question": "An engineering team builds an initial lightweight system core and iteratively refines and expands it into the final production application. Which prototype type is this?",
          "options": [
            "Rapid Throwaway Prototype",
            "Evolutionary Prototype",
            "Extreme Prototype",
            "Reverse Prototype"
          ],
          "correct": 1,
          "explanation": "An Evolutionary Prototype starts with an initial working concept and iteratively evolves directly into the final production system."
        },
        {
          "id": "q-sia-7",
          "type": "multiple",
          "question": "Which of the following is a recognized guideline when designing stakeholder surveys?",
          "options": [
            "Include multiple negative questions to test respondent alertness",
            "Make the survey as long as possible to capture every possible detail",
            "Avoid questions that may put the respondent on the defensive",
            "Use complex theoretical concepts to ensure academic rigor"
          ],
          "correct": 2,
          "explanation": "Survey best practices explicitly instruct analysts to avoid questions that put respondents on the defensive, avoid negative questions, and keep surveys short and clear."
        },
        {
          "id": "q-sia-8",
          "type": "multiple",
          "question": "Which organization publishes the XML standard used in modern electronic data interchange?",
          "options": [
            "IEEE",
            "ISO / IEC",
            "W3C (World Wide Web Consortium)",
            "PMI"
          ],
          "correct": 2,
          "explanation": "XML (eXtensible Markup Language) is published by the W3C and is often bundled with standards like XSL."
        },
        {
          "id": "q-sia-9",
          "type": "multiple",
          "question": "Deconstructing an existing legacy application or competitor software to extract its business rules and data models is known as:",
          "options": [
            "Interface Analysis",
            "Job Shadowing",
            "Reverse Engineering",
            "Requirements Workshop"
          ],
          "correct": 2,
          "explanation": "Reverse Engineering is the methodology of analyzing an existing system to deduce its internal specifications, business rules, and design."
        },
        {
          "id": "q-sia-10",
          "type": "multiple",
          "question": "Enterprise Application Integration (EAI) incorporates methods, concepts, and tools specifically for:",
          "options": [
            "Replacing internal database schemas with public blockchain ledgers",
            "The classification, connection, and coordination of applications within organizations",
            "Enforcing employee attendance using biometric hardware",
            "Outsourcing IT support to offshore third-party call centers"
          ],
          "correct": 1,
          "explanation": "The lecture defines EAI as incorporating methods, concepts, and tools for the classification, connection, and coordination of applications within organizations."
        }
      ]
    },
    {
      "checkpointId": "sia-cp2",
      "subject": "SIA101",
      "week": "Week 3",
      "questions": [
        {
          "id": "q-sia-11",
          "type": "multiple",
          "question": "What is the primary role of a Use Case Model in software engineering?",
          "options": [
            "To estimate the financial return on investment (ROI) of database licenses",
            "To show how different types of users interact with the system to solve a problem",
            "To compile source code into executable binary machine instructions",
            "To format network packets transmitted across switches"
          ],
          "correct": 1,
          "explanation": "A Use Case Model shows how different types of users interact with the system to solve a problem and serves as functional system requirements."
        },
        {
          "id": "q-sia-12",
          "type": "multiple",
          "question": "Which of the following is NOT one of the 5 stated purposes of a Use Case Diagram?",
          "options": [
            "Specifying the context of a system",
            "Capturing system requirements",
            "Generating and implementing test cases",
            "Automatically generating SQL database tables and triggers"
          ],
          "correct": 3,
          "explanation": "The 5 purposes are: specifying context, capturing requirements, validating architecture, implementing/generating test cases, and development by analysts/experts. SQL generation is not one of them."
        },
        {
          "id": "q-sia-13",
          "type": "multiple",
          "question": "What are the four (4) basic building blocks of Business Process Model and Notation (BPMN)?",
          "options": [
            "Entities, Attributes, Tables, and Relations",
            "Flow objects, Connecting objects, Swimlanes, and Artifacts",
            "Inputs, Processes, Storage, and Displays",
            "Actors, Use cases, Boundaries, and Associations"
          ],
          "correct": 1,
          "explanation": "BPMN standard building blocks are: 1. Flow objects, 2. Connecting objects, 3. Swimlanes, and 4. Artifacts."
        },
        {
          "id": "q-sia-14",
          "type": "multiple",
          "question": "Which process modeling technique is specifically described as being used to map out the intangible roles or ideas of behavior desired within a company?",
          "options": [
            "Data Flow Diagram (DFD)",
            "Flowchart Technique",
            "Role Activity Diagram (RAD)",
            "Gantt Chart"
          ],
          "correct": 2,
          "explanation": "A Role Activity Diagram (RAD) is specifically defined as being used to map out intangible roles or ideas of behavior desired within the company."
        },
        {
          "id": "q-sia-15",
          "type": "multiple",
          "question": "Which diagram technique illustrates the interaction of various processes with each other using Sequence and Collaboration diagrams?",
          "options": [
            "Data Flow Diagram (DFD)",
            "Role Interaction Diagram (RID)",
            "Coloured Petri Nets (CPN)",
            "Flowchart Technique"
          ],
          "correct": 1,
          "explanation": "Role Interaction Diagrams (RID) illustrate process-to-process interactions, encompassing Sequence Diagrams and Collaboration Diagrams."
        },
        {
          "id": "q-sia-16",
          "type": "multiple",
          "question": "What is the primary function of a Gantt Chart in business process and project modeling?",
          "options": [
            "To relate a list of activities directly to a time scale (project timeline)",
            "To prove mathematical correctness of asynchronous algorithms",
            "To define inheritance hierarchies between software classes",
            "To trace network packets across routers"
          ],
          "correct": 0,
          "explanation": "Gantt Charts relate a list of activities to a time scale to represent a project's timeline and task dependencies."
        },
        {
          "id": "q-sia-17",
          "type": "multiple",
          "question": "In the IDEF (Integrated Definition) function modeling box, what does the arrow entering from the TOP represent?",
          "options": [
            "Input",
            "Control",
            "Output",
            "Mechanism / Resources"
          ],
          "correct": 1,
          "explanation": "Under the standard IDEF ICOM framework: Input enters on Left, Control enters on Top, Output exits on Right, and Mechanism enters from Bottom."
        },
        {
          "id": "q-sia-18",
          "type": "multiple",
          "question": "Coloured Petri Nets (CPN) are a graphically oriented language designed for which set of engineering purposes?",
          "options": [
            "Design, specification, simulation, and verification of systems",
            "Customer relationship tracking, lead conversion, and invoicing",
            "Compiling Python source code into bytecode",
            "Encrypting credit card numbers in compliance with PCI-DSS"
          ],
          "correct": 0,
          "explanation": "CPN is explicitly defined as a graphically oriented language for the design, specification, simulation, and verification of systems."
        },
        {
          "id": "q-sia-19",
          "type": "multiple",
          "question": "Which modeling paradigm encompasses message-passing, encapsulation, inheritance from class to subclass, and polymorphism?",
          "options": [
            "Flowchart Technique",
            "Object-Oriented Methods",
            "Data Flow Diagrams (DFD)",
            "Integrated Definition (IDEF)"
          ],
          "correct": 1,
          "explanation": "Object-Oriented Methods are more than just modeling with objects; they embody message-passing, encapsulation, inheritance, and polymorphism."
        },
        {
          "id": "q-sia-20",
          "type": "multiple",
          "question": "What are the three (3) main types of Business Analysis tools identified in the lecture?",
          "options": [
            "Compilers, Interpreters, and Debuggers",
            "Requirement-related tools, Modelling tools, and Collaboration tools",
            "Spreadsheets, Word Processors, and Presentation Decks",
            "LAN, WAN, and VPN tools"
          ],
          "correct": 1,
          "explanation": "The 3 types of BA tools are: 1. Requirement-related tools, 2. Modelling tools, and 3. Collaboration tools."
        }
      ]
    },
    {
      "checkpointId": "sia-cp3",
      "subject": "SIA101",
      "week": "Week 4",
      "questions": [
        {
          "id": "q-sia-21",
          "type": "multiple",
          "question": "Which organization formulated the Project Management Life Cycle (PMLC) taught in the course?",
          "options": [
            "W3C",
            "PMI (Project Management Institute)",
            "ACM / IEEE",
            "ISO"
          ],
          "correct": 1,
          "explanation": "The Project Management Life Cycle taught is developed by the Project Management Institute (PMI)."
        },
        {
          "id": "q-sia-22",
          "type": "multiple",
          "question": "What are the five (5) phases of the PMI Project Management Life Cycle in correct chronological sequence?",
          "options": [
            "Requirements, Design, Coding, Testing, Maintenance",
            "Initiation, Planning, Execution, Performance Monitoring/Controlling, Project Close",
            "Conception, Financing, Hiring, Building, Selling",
            "Analysis, Architecture, Development, Staging, Production"
          ],
          "correct": 1,
          "explanation": "The 5 PMI phases are: 1. Initiation, 2. Planning, 3. Execution, 4. Performance Monitoring/Controlling, and 5. Project Close."
        },
        {
          "id": "q-sia-23",
          "type": "multiple",
          "question": "In the SMART goal-setting methodology, what does the letter 'A' represent?",
          "options": [
            "Affordable",
            "Actionable",
            "Appreciable",
            "Asynchronous"
          ],
          "correct": 1,
          "explanation": "In SMART: S = Specific, M = Measurable, A = Actionable, R = Realistic, T = Timebound."
        },
        {
          "id": "q-sia-24",
          "type": "multiple",
          "question": "In the CLEAR goal-setting methodology, what does the letter 'E' represent?",
          "options": [
            "Economical",
            "Emotional",
            "Extensible",
            "Evolutionary"
          ],
          "correct": 1,
          "explanation": "In CLEAR: C = Collaborative, L = Limited, E = Emotional, A = Appreciable, R = Refinable."
        },
        {
          "id": "q-sia-25",
          "type": "multiple",
          "question": "Which document is defined as the hierarchical and incremental decomposition of the project into phases, deliverables, and work packages?",
          "options": [
            "Scope Statement",
            "Work Breakdown Structure (WBS)",
            "Gantt Chart",
            "Communication Plan"
          ],
          "correct": 1,
          "explanation": "The Work Breakdown Structure (WBS) is defined as the hierarchical and incremental decomposition of the project into phases, deliverables, and work packages."
        },
        {
          "id": "q-sia-26",
          "type": "multiple",
          "question": "In a project life cycle, what is the defining characteristic of a Milestone?",
          "options": [
            "It is a task that takes at least 3 months of engineering effort",
            "It is a specific point used to measure progress toward the ultimate goal",
            "It is a financial penalty paid to contractors for late delivery",
            "It represents the total lines of code written in a sprint"
          ],
          "correct": 1,
          "explanation": "A Milestone is a specific point within a project's life cycle used to measure progress toward the ultimate goal."
        },
        {
          "id": "q-sia-27",
          "type": "multiple",
          "question": "According to the Risk Management Severity Matrix, a risk with Severity Level 5 (Severe) has what cost and schedule impact?",
          "options": [
            "Budget impacted > 20 Million, schedule delayed > 3 Months",
            "Budget impacted < 2 Million, schedule delayed < 1 Month",
            "Budget not affected, schedule float absorbs variations",
            "Budget impacted 2M - 10M, schedule delayed 1 - 2 Months"
          ],
          "correct": 0,
          "explanation": "Severity 5 (Severe) is defined by performance unacceptable, budget impacted by > 20M, and key milestone delayed by > 3 months."
        },
        {
          "id": "q-sia-28",
          "type": "multiple",
          "question": "Which of the following is NOT one of the 4 Key Performance Indicators (KPIs) tracked in Phase 4 Monitoring?",
          "options": [
            "Project Objectives",
            "Quality Deliverables",
            "Effort and Cost Tracking",
            "Social Media Impressions"
          ],
          "correct": 3,
          "explanation": "The 4 KPIs are: 1. Project Objectives, 2. Quality Deliverables, 3. Effort and Cost Tracking, and 4. Project Performance."
        },
        {
          "id": "q-sia-29",
          "type": "multiple",
          "question": "Which of the following tasks is executed during Phase 5 (Project Closure)?",
          "options": [
            "Developing the Project Charter and Business Case",
            "Formulating SMART and CLEAR goals",
            "Having a retrospective meeting and documenting all learnings",
            "Setting up the WBS and Gantt scheduling baseline"
          ],
          "correct": 2,
          "explanation": "Project Closure tasks include: transfer deliverables, complete contracts, hold retrospective meeting, disband team, and document all learnings."
        },
        {
          "id": "q-sia-30",
          "type": "multiple",
          "question": "What is the primary function of a Stakeholder Communication Plan in project planning?",
          "options": [
            "To provide a policy-driven approach to providing stakeholders with information",
            "To filter spam emails from external vendors",
            "To automatically write user documentation from source code",
            "To calculate salary bonuses for developers based on lines of code"
          ],
          "correct": 0,
          "explanation": "A Communication Plan is defined as a policy-driven approach to providing stakeholders with necessary, timely information."
        }
      ]
    },
    {
      "checkpointId": "sia-cp4",
      "subject": "SIA101",
      "week": "Week 5",
      "questions": [
        {
          "id": "q-sia-31",
          "type": "multiple",
          "question": "Which of the following best defines a Business Process?",
          "options": [
            "A spreadsheet containing employee bank account numbers",
            "A series of steps performed by stakeholders to achieve a concrete goal, culminating in delivery of a service/product",
            "A legal lawsuit filed against an IT vendor for contract breach",
            "A hardware specification for purchasing server racks"
          ],
          "correct": 1,
          "explanation": "A Business Process is a series of steps performed by stakeholders to achieve a concrete goal, and a collection of linked tasks delivering a service or product to a client."
        },
        {
          "id": "q-sia-32",
          "type": "multiple",
          "question": "Which of the following is Step 4 in the 7 Steps of the Business Process Lifecycle?",
          "options": [
            "Define your goals",
            "Set actions and assign stakeholders",
            "Test the process on a small scale environment",
            "Repeat the process"
          ],
          "correct": 2,
          "explanation": "The 7 steps are: 1. Define goals, 2. Plan/map, 3. Set actions/stakeholders, 4. Test the process, 5. Implement, 6. Monitor, 7. Repeat."
        },
        {
          "id": "q-sia-33",
          "type": "multiple",
          "question": "What is Business Process Integration (BPI)?",
          "options": [
            "A technique that allows automation of business processes, system/service integration, and secure data sharing across applications",
            "A strategy to replace all human workers with artificial intelligence models",
            "A method of selling business processes to external consulting firms",
            "A government tax imposed on software corporations"
          ],
          "correct": 0,
          "explanation": "BPI allows automation of business processes, integration of systems and services, and secure sharing of data across numerous applications."
        },
        {
          "id": "q-sia-34",
          "type": "multiple",
          "question": "What are the three (3) main components that comprise an IT Environment?",
          "options": [
            "CPU, RAM, and Hard Drive",
            "Computing Platforms, Applications/Apps, and Connectivity (Networking)",
            "HTML, CSS, and JavaScript",
            "Finance, Marketing, and Human Resources"
          ],
          "correct": 1,
          "explanation": "The 3 components of an IT Environment are Computing Platforms, Applications/Apps, and Connectivity (Networking)."
        },
        {
          "id": "q-sia-35",
          "type": "multiple",
          "question": "In IT Environment decision-making, what are the three (3) dimensions of the Purpose Triad?",
          "options": [
            "Input, Process, Output",
            "Needs, Rules, and Choices",
            "Hardware, Software, Peopleware",
            "Local, National, International"
          ],
          "correct": 1,
          "explanation": "The lecture breaks IT Environment purposes into: 1. NEEDS (functionality, cost, reliability), 2. RULES (laws, regulations, owner policies), and 3. CHOICES (balancing needs, rules, affordable technology)."
        },
        {
          "id": "q-sia-36",
          "type": "multiple",
          "question": "How is a Centralized Organizational Structure characterized compared to a Decentralized structure?",
          "options": [
            "Democratic decision-making adapted to small organizations",
            "Hierarchical decision-making where different branches have similar processes, common in large organizations",
            "Elimination of all managerial positions",
            "Each employee reports to multiple competing project managers"
          ],
          "correct": 1,
          "explanation": "A Centralized structure has hierarchical decision-making where branches follow similar uniform processes, common in large organizations."
        },
        {
          "id": "q-sia-37",
          "type": "multiple",
          "question": "Which type of organizational structure divides the firm into distinct departments (e.g. Finance, Marketing, HR) to enforce uniformity?",
          "options": [
            "Flatarchy Structure",
            "Functional Structure",
            "Matrix Structure",
            "Divisional Structure"
          ],
          "correct": 1,
          "explanation": "A Functional Structure divides the firm into specialized departments to establish uniformity and centralized management."
        },
        {
          "id": "q-sia-38",
          "type": "multiple",
          "question": "What is a primary disadvantage of a Divisional (Multidivisional) organizational structure?",
          "options": [
            "Employees have too much autonomy, leading to lack of supervision",
            "Duplication of services, functions, and costs across subsidiaries",
            "Senior management has zero time to focus on strategic decisions",
            "Inability to adapt to local regional customer needs"
          ],
          "correct": 1,
          "explanation": "Divisional structures suffer from duplication of services/costs, lack of centralized specialization, and difficult cross-divisional coordination."
        },
        {
          "id": "q-sia-39",
          "type": "multiple",
          "question": "Which organizational structure flattens the hierarchy and chain of command to give employees significant autonomy, commonly found in startups?",
          "options": [
            "Bureaucratic Structure",
            "Matrix Structure",
            "Flatarchy Structure",
            "Functional Structure"
          ],
          "correct": 2,
          "explanation": "A Flatarchy structure flattens hierarchy and chain of command, granting employees high autonomy; it is widely adopted by tech startups."
        },
        {
          "id": "q-sia-40",
          "type": "multiple",
          "question": "In a Matrix organizational structure, how is management reporting structured?",
          "options": [
            "Every employee only reports to the company CEO directly",
            "There is more than one line of reporting managers (solid line or dotted line reporting)",
            "Employees are prohibited from reporting to any supervisor",
            "Only external contractors have managers"
          ],
          "correct": 1,
          "explanation": "A Matrix structure features more than one line of reporting managers, typically utilizing solid-line and dotted-line reporting relationships."
        }
      ]
    },
    {
      "checkpointId": "sia-cp5",
      "subject": "SIA101",
      "week": "Week 6",
      "questions": [
        {
          "id": "q-sia-41",
          "type": "multiple",
          "question": "What is the defining distinction of Sole Sourcing?",
          "options": [
            "The buyer chooses one supplier out of many available suppliers in the market",
            "Only one source is available in the entire market (e.g. local water utility company)",
            "Suppliers submit confidential bids through an online auction portal",
            "Procurement is conducted exclusively with international manufacturers"
          ],
          "correct": 1,
          "explanation": "Sole Source means ONLY ONE source is available (e.g. local water utility). Single Source means multiple suppliers are available, but the organization selects one."
        },
        {
          "id": "q-sia-42",
          "type": "multiple",
          "question": "An enterprise needs office computers. There are 5 authorized hardware vendors, but management decides to contract solely with HP for volume discounts. What sourcing method is this?",
          "options": [
            "Sole Sourcing",
            "Single Sourcing",
            "In-Sourcing",
            "Emergency Relief Sourcing"
          ],
          "correct": 1,
          "explanation": "Because multiple vendors were available in the market and the buyer chose to contract with only one, this is Single Sourcing."
        },
        {
          "id": "q-sia-43",
          "type": "multiple",
          "question": "What is the 'First Principle' when determining the source of supply for procurement?",
          "options": [
            "Always source internationally to obtain the lowest possible currency exchange rate",
            "Source all commodities locally and in-country, as close to the field as possible to reduce transport time and cost",
            "Build all software from scratch using internal engineers to protect trade secrets",
            "Require all vendors to submit sealed bids regardless of purchase cost"
          ],
          "correct": 1,
          "explanation": "The lecture explicitly states: 'The first principle should be to source all commodities locally and in-country, as close to the field as possible to reduce transport time and cost.'"
        },
        {
          "id": "q-sia-44",
          "type": "multiple",
          "question": "Which of the following is NOT one of the 5 criteria evaluated during a Procurement Market Survey?",
          "options": [
            "Quantities Available",
            "Quality and Pricing",
            "Technical Specifications and Source/Origin",
            "Political Affiliation of Company Shareholders"
          ],
          "correct": 3,
          "explanation": "A market survey assesses: 1. Quantities available, 2. Quality, 3. Pricing, 4. Source and origin of items, and 5. Technical specifications."
        },
        {
          "id": "q-sia-45",
          "type": "multiple",
          "question": "What audit document must be maintained by the procurement unit to log vendor tenders during sealed bidding?",
          "options": [
            "Purchase Order Log",
            "Tracking Sheet for Sealed Bids",
            "Vendor Reference Questionnaire",
            "WBS Schedule Chart"
          ],
          "correct": 1,
          "explanation": "RFQs and vendor responses must be tracked using the 'Tracking Sheet for Sealed Bids' in accordance with threshold procurement policy."
        },
        {
          "id": "q-sia-46",
          "type": "multiple",
          "question": "Before confirming an order or contract with a preferred supplier, which screening action must be conducted?",
          "options": [
            "Screen potential vendors against anti-terrorism and debarred listings",
            "Have the vendor's CEO attend a university lecture",
            "Transfer 50% of the project budget to the vendor upfront without contract",
            "Require the vendor to rewrite their accounting software in Python"
          ],
          "correct": 0,
          "explanation": "Screening requires: 1) vendor questionnaire, 2) checking references (preferably NGOs), and 3) screening against anti-terrorism and debarred listings."
        },
        {
          "id": "q-sia-47",
          "type": "multiple",
          "question": "How is In-Sourcing defined in systems acquisition and sourcing?",
          "options": [
            "Contracting an offshore agency to manage customer support servers",
            "The assignment of a project to a person or department within the company rather than a third party",
            "Purchasing open-source software libraries from public package managers",
            "Submitting sealed bids to government procurement portals"
          ],
          "correct": 1,
          "explanation": "In-Sourcing is the assignment of a project to a person or department within the company rather than a third-party."
        },
        {
          "id": "q-sia-48",
          "type": "multiple",
          "question": "Which of the following is an advantage of In-Sourcing?",
          "options": [
            "Eliminating the need for employee performance appraisals",
            "Protection of Trade Secrets, Competitive Advantage, and Direction/Control",
            "Zero operational and hardware overhead expenses",
            "Access to unlimited specialized vendor expertise without hiring"
          ],
          "correct": 1,
          "explanation": "Advantages of In-Sourcing: Competitive advantage, Trade secrets protection, Organization culture alignment, Cost control, and Direction/Control."
        },
        {
          "id": "q-sia-49",
          "type": "multiple",
          "question": "What are the three (3) main disadvantages of In-Sourcing listed in the lecture?",
          "options": [
            "Taxes, Shipping Delays, and Tariffs",
            "Cost, Capabilities, and Focus",
            "Hardware Failures, Network Latency, and Power Outages",
            "Copyright Infringement, Piracy, and Libel"
          ],
          "correct": 1,
          "explanation": "The 3 disadvantages of In-Sourcing are explicitly listed as: 1. Cost, 2. Capabilities (skills limitations), and 3. Focus (distraction from core business)."
        },
        {
          "id": "q-sia-50",
          "type": "multiple",
          "question": "What are the three (3) sequential steps in the Hardware and Software Acquisition workflow?",
          "options": [
            "Requirements Analysis, Request for Proposal (RFP), Vendor Selection",
            "Initiation, Planning, Project Closure",
            "Brainstorming, Focus Group, Prototyping",
            "Market Survey, Sealed Bidding, In-Sourcing"
          ],
          "correct": 0,
          "explanation": "Hardware and software acquisition proceeds through: 1) Requirements Analysis, 2) Request for Proposal (RFP), and 3) Vendor Selection."
        }
      ]
    },
    {
      "checkpointId": "ar-cp1",
      "subject": "AR101",
      "week": "Week 2",
      "questions": [
        {
          "id": "q-ar1-1",
          "type": "multiple",
          "question": "According to lecture definitions, what is a Digital Computer?",
          "options": [
            "A mechanical calculating device that operates on continuous analog voltages",
            "A fast electronic calculating machine that accepts digitized input, processes it via stored instructions, and produces output",
            "An optical switching matrix used strictly for telecommunications",
            "A non-programmable logic gate network designed for binary arithmetic"
          ],
          "correct": 1,
          "explanation": "A digital computer is explicitly defined as a fast electronic calculating machine that accepts digitized input information, processes according to internally stored instructions, and produces resulting output information."
        },
        {
          "id": "q-ar1-2",
          "type": "multiple",
          "question": "Which type of computer is engineered specifically for heavy technical, mathematical, graphic, or engineering workloads by a single user?",
          "options": [
            "Mainframe",
            "Workstation",
            "Personal Computer",
            "Supercomputer"
          ],
          "correct": 1,
          "explanation": "Workstations are high-performance single-user systems designed for intensive technical, mathematical, graphic, or engineering tasks."
        },
        {
          "id": "q-ar1-3",
          "type": "multiple",
          "question": "How much faster does the Central Processing Unit (CPU) operate in relation to Main Memory?",
          "options": [
            "Equal speed",
            "2 times faster",
            "10 times faster",
            "100 times faster"
          ],
          "correct": 2,
          "explanation": "The lecture slides specifically highlight that the Processing Unit is roughly '10 times faster than a Main Memory'."
        },
        {
          "id": "q-ar1-4",
          "type": "multiple",
          "question": "Which Main Memory functional division holds intermediate data and variable values generated during program execution?",
          "options": [
            "Input Storage Area",
            "Program Storage Area",
            "Working Storage Space",
            "Output Storage Area"
          ],
          "correct": 2,
          "explanation": "Working Storage Space is the designated division of main memory that holds intermediate calculation results and temporary values."
        },
        {
          "id": "q-ar1-5",
          "type": "multiple",
          "question": "What is the Von-Neumann Architecture also known as?",
          "options": [
            "Distributed Harvard Architecture",
            "Stored Program Architecture / Fetch-Decode-Execute Architecture",
            "Dynamic Multiprocessor Architecture",
            "Direct Memory Execution Architecture"
          ],
          "correct": 1,
          "explanation": "The Von-Neumann Architecture is fundamentally known as Stored Program Architecture or Fetch-Decode-Execute Architecture."
        },
        {
          "id": "q-ar1-6",
          "type": "multiple",
          "question": "Which of the following is an advantage of High-Level Programming Languages over Low-Level Languages?",
          "options": [
            "Direct manipulation of CPU flag registers",
            "More compact binary code",
            "Portability across different hardware architectures",
            "Maximum instruction execution speed"
          ],
          "correct": 2,
          "explanation": "High-level languages provide portability, ease of learning, and predefined standard functions across platforms."
        },
        {
          "id": "q-ar1-7",
          "type": "multiple",
          "question": "Which of the following is an advantage of Low-Level Languages over High-Level Languages?",
          "options": [
            "Platform independence",
            "Automatic memory garbage collection",
            "Execution speed and compact code",
            "Natural English readability"
          ],
          "correct": 2,
          "explanation": "Low-level languages (Assembly and Machine Code) excel in compact code, execution speed, and direct hardware flexibility."
        },
        {
          "id": "q-ar1-8",
          "type": "multiple",
          "question": "What unit inside the computer is responsible for directing and coordinating all internal machine operations?",
          "options": [
            "Arithmetic and Logic Unit (ALU)",
            "Control Unit (CU)",
            "Memory Data Register (MDR)",
            "Input Storage Buffer"
          ],
          "correct": 1,
          "explanation": "The Control Unit (CU) coordinates and directs all operations, issuing timing and control signals to memory, ALU, and I/O."
        },
        {
          "id": "q-ar1-9",
          "type": "multiple",
          "question": "Information in Main Memory is organized into fixed-size bit groups called what?",
          "options": [
            "Sectors",
            "Frames",
            "WORDS",
            "Packets"
          ],
          "correct": 2,
          "explanation": "Main Memory information is processed and transferred in fixed-size groups called WORDS, each with a distinct numerical address."
        },
        {
          "id": "q-ar1-10",
          "type": "multiple",
          "question": "Which of the following devices is categorized as an Output Unit?",
          "options": [
            "Trackball",
            "Barcode reader",
            "Plotter",
            "Touch screen digitizer"
          ],
          "correct": 2,
          "explanation": "Plotters, screens, printers, and voice synthesizers are classified as Output Units that deliver results to the outside world."
        },
        {
          "id": "q-ar1-11",
          "type": "multiple",
          "question": "What is the primary role of Auxiliary / Secondary Storage?",
          "options": [
            "To provide immediate operand fetching for the ALU",
            "To store large amounts of data permanently, especially data accessed less frequently",
            "To hold the instruction register contents",
            "To replace CPU general purpose registers"
          ],
          "correct": 1,
          "explanation": "Auxiliary Storage (hard drives, tapes, discs) holds large volumes of data on a non-volatile, permanent basis for less frequent access."
        }
      ]
    },
    {
      "checkpointId": "ar-cp2",
      "subject": "AR101",
      "week": "Week 3",
      "questions": [
        {
          "id": "q-ar2-1",
          "type": "multiple",
          "question": "Which internal CPU register holds the address of the next instruction to be fetched and executed?",
          "options": [
            "Memory Address Register (MAR)",
            "Program Counter (PC)",
            "Instruction Register (IR)",
            "Memory Data Register (MDR)"
          ],
          "correct": 1,
          "explanation": "The Program Counter (PC) keeps track of memory instruction execution sequencing by holding the address of the next instruction."
        },
        {
          "id": "q-ar2-2",
          "type": "multiple",
          "question": "During a Memory Read operation, what happens to the word stored in Main Memory?",
          "options": [
            "It is automatically reset to zero",
            "It is moved into the PC",
            "It remains completely unchanged (non-destructive read)",
            "It is destroyed and rewritten"
          ],
          "correct": 2,
          "explanation": "A Memory Read is non-destructive: the CPU loads a copy into the MDR while the word in Main Memory remains unchanged."
        },
        {
          "id": "q-ar2-3",
          "type": "multiple",
          "question": "In the execution trace of 'ADD LOCA, R0', what is the FIRST action taken by the CPU?",
          "options": [
            "MDR <- [LOCA]",
            "MAR <- [PC]",
            "R0 <- [R0] + [MDR]",
            "IR <- [MDR]"
          ],
          "correct": 1,
          "explanation": "The very first step of instruction execution is transferring the address from the PC into the MAR: MAR <- [PC]."
        },
        {
          "id": "q-ar2-4",
          "type": "multiple",
          "question": "Which instruction format implicitly uses the Accumulator (ACC) register for all arithmetic and data operations?",
          "options": [
            "Zero-Address format",
            "One-Address format",
            "Two-Address format",
            "Three-Address format"
          ],
          "correct": 1,
          "explanation": "One-Address instructions (such as LOAD A, ADD B, STORE C) use the Accumulator (ACC) implicitly for arithmetic and storage."
        },
        {
          "id": "q-ar2-5",
          "type": "multiple",
          "question": "In the instruction 'ADD A, B', what happens to operand A after execution?",
          "options": [
            "Operand A remains unchanged",
            "Operand A is overwritten with the sum [A] + [B]",
            "Operand A is pushed to the stack",
            "Operand A is loaded into the Program Counter"
          ],
          "correct": 1,
          "explanation": "In 2-Address instructions, operand A serves as both a source and the destination: A <- [A] + [B], overwriting the original value in A."
        },
        {
          "id": "q-ar2-6",
          "type": "multiple",
          "question": "In a 3-Address instruction format 'ADD A, B, C', what is the state of source operands B and C after execution?",
          "options": [
            "Both B and C are cleared to 0",
            "B is overwritten with the sum",
            "Both B and C remain untouched and preserved",
            "C is incremented by 1"
          ],
          "correct": 2,
          "explanation": "In 3-Address instructions (ADD A, B, C), B and C are pure source operands and retain their original values; A is the designated destination."
        },
        {
          "id": "q-ar2-7",
          "type": "multiple",
          "question": "What is the third step in the 7 universal CPU instruction execution steps?",
          "options": [
            "Incrementing the PC",
            "Decoding the instruction",
            "Fetching the instruction",
            "Executing the instruction"
          ],
          "correct": 1,
          "explanation": "The sequence is: 1) Fetch instruction, 2) Increment PC, 3) Decode instruction, 4) Determine operand address, 5) Fetch data, 6) Execute, 7) Return to step 1."
        },
        {
          "id": "q-ar2-8",
          "type": "multiple",
          "question": "Which bus is responsible for transmitting the destination or source memory location generated by the CPU?",
          "options": [
            "Control Bus",
            "Address Bus",
            "Data Bus",
            "Power Bus"
          ],
          "correct": 1,
          "explanation": "The Address Bus carries memory addresses (or I/O port addresses) from the CPU to memory and peripheral interfaces."
        },
        {
          "id": "q-ar2-9",
          "type": "multiple",
          "question": "What is the main limitation of a Single-Bus Structure connecting CPU, Memory, and I/O?",
          "options": [
            "It cannot support binary data",
            "Only one device transfer can occur at a time, creating a bottleneck",
            "It requires 4 separate Control Units",
            "It cannot address more than 256 bytes"
          ],
          "correct": 1,
          "explanation": "Because all units share a single bus line, only one transfer can proceed at any instant, limiting system throughput."
        },
        {
          "id": "q-ar2-10",
          "type": "multiple",
          "question": "In Two-Bus Configuration 1, what two distinct buses are utilized?",
          "options": [
            "An I/O Bus connecting I/O to Processor, and a Memory Bus connecting Processor to Memory",
            "Two identical Data Buses connected in series",
            "An ALU bus and a Control bus",
            "A Serial bus and a Parallel bus"
          ],
          "correct": 0,
          "explanation": "In Configuration 1 of the two-bus structure, the Processor connects to Memory via a dedicated Memory Bus and to I/O via an I/O Bus."
        },
        {
          "id": "q-ar2-11",
          "type": "multiple",
          "question": "What are instructions called that alter normal straight-line sequential execution?",
          "options": [
            "Serial instructions",
            "Branch / Jump instructions",
            "Zero-address instructions",
            "MDR transfers"
          ],
          "correct": 1,
          "explanation": "Branching (conditional or unconditional jumps) alters straight-line sequencing by loading a non-sequential target address into the PC."
        }
      ]
    },
    {
      "checkpointId": "ar-cp3",
      "subject": "AR101",
      "week": "Week 4",
      "questions": [
        {
          "id": "q-ar3-1",
          "type": "multiple",
          "question": "Which Intel microprocessor was the first commercial 4-bit chip released in 1971?",
          "options": [
            "Intel 8008",
            "Intel 4004",
            "Intel 8080",
            "Intel 8086"
          ],
          "correct": 1,
          "explanation": "The Intel 4004, launched in 1971, was the world's first single-chip commercial microprocessor (4-bit)."
        },
        {
          "id": "q-ar3-2",
          "type": "multiple",
          "question": "What was the memory addressing capacity of the Intel 8008 released in 1972?",
          "options": [
            "2,048 bytes",
            "16,384 bytes (16 KB)",
            "64 KB",
            "1 MB"
          ],
          "correct": 1,
          "explanation": "The 8-bit Intel 8008 was capable of addressing 16,384 bytes (16 KB) with 48 instructions."
        },
        {
          "id": "q-ar3-3",
          "type": "multiple",
          "question": "Why did IBM select the Intel 8088 instead of the 8086 for its original 1981 IBM PC?",
          "options": [
            "The 8088 was a 32-bit CPU",
            "The 8088 had an 8-bit external data bus, allowing cheaper motherboard and peripheral circuitry",
            "The 8086 lacked hardware multiplication",
            "The 8088 could address 16 MB of memory"
          ],
          "correct": 1,
          "explanation": "The 8088 retained the 16-bit internal architecture of the 8086 but used an 8-bit external data bus, dramatically lowering system circuit costs."
        },
        {
          "id": "q-ar3-4",
          "type": "multiple",
          "question": "In the 8086 physical memory organization, which signal activates the Even Memory Bank?",
          "options": [
            "BHE# = 0",
            "A0 = 0",
            "M/IO# = 1",
            "RD# = 1"
          ],
          "correct": 1,
          "explanation": "The Even Bank (lower 512KB connected to D0-D7) is enabled when address line A0 is 0. The Odd Bank is enabled by BHE# = 0."
        },
        {
          "id": "q-ar3-5",
          "type": "multiple",
          "question": "What is the size of the Instruction Prefetch Queue in the Intel 8086 and 8088 respectively?",
          "options": [
            "4 bytes in 8086, 6 bytes in 8088",
            "6 bytes in 8086, 4 bytes in 8088",
            "16 bytes in both",
            "8 bytes in 8086, 2 bytes in 8088"
          ],
          "correct": 1,
          "explanation": "The 8086 BIU features a 6-byte prefetch queue, while the 8088 features a 4-byte prefetch queue."
        },
        {
          "id": "q-ar3-6",
          "type": "multiple",
          "question": "Which 8086 general purpose register serves as the Count Register for loops and shifts?",
          "options": [
            "AX",
            "BX",
            "CX",
            "DX"
          ],
          "correct": 2,
          "explanation": "CX (Count Register, CH/CL) is dedicated as a counter for loop iterations, string repeats, and shift/rotate bit counts."
        },
        {
          "id": "q-ar3-7",
          "type": "multiple",
          "question": "Which flag in the 8086 PSW is set if the lower 8 bits of an operation result contain an even number of 1s?",
          "options": [
            "Auxiliary Flag (AF)",
            "Parity Flag (PF)",
            "Sign Flag (SF)",
            "Zero Flag (ZF)"
          ],
          "correct": 1,
          "explanation": "The Parity Flag (PF, bit 2) is set to 1 if the low-order byte contains an even number of set bits (even parity)."
        },
        {
          "id": "q-ar3-8",
          "type": "multiple",
          "question": "What is the primary function of the Auxiliary Carry Flag (AF)?",
          "options": [
            "Detects carry out of bit 15",
            "Detects carry/borrow out of bit 3 into bit 4 (BCD half-carry)",
            "Sets processor to single-step debug mode",
            "Indicates negative results"
          ],
          "correct": 1,
          "explanation": "AF detects a carry out of bit 3 (the lower nibble) into bit 4, which is crucial for BCD (Binary Coded Decimal) arithmetic adjustments."
        },
        {
          "id": "q-ar3-9",
          "type": "multiple",
          "question": "What is the Physical Address generated by Segment Base = 123AH and Offset = 341BH?",
          "options": [
            "157BBH",
            "123EBH",
            "4654BH",
            "156BAH"
          ],
          "correct": 0,
          "explanation": "PA = (123AH x 10H) + 341BH = 123A0H + 341BH = 157BBH."
        },
        {
          "id": "q-ar3-10",
          "type": "multiple",
          "question": "Calculate the Physical Address for Segment Base = 4321H and Offset = 1266H.",
          "options": [
            "44476H",
            "55870H",
            "44576H",
            "43336H"
          ],
          "correct": 0,
          "explanation": "PA = (4321H x 10H) + 1266H = 43210H + 1266H = 44476H."
        },
        {
          "id": "q-ar3-11",
          "type": "multiple",
          "question": "Which control flag controls the auto-increment or auto-decrement direction for string operations?",
          "options": [
            "Interrupt Flag (IF)",
            "Trap Flag (TF)",
            "Direction Flag (DF)",
            "Sign Flag (SF)"
          ],
          "correct": 2,
          "explanation": "The Direction Flag (DF, bit 10) sets string operations to auto-increment (DF=0, forward) or auto-decrement (DF=1, backward)."
        }
      ]
    },
    {
      "checkpointId": "ar-cp4",
      "subject": "AR101",
      "week": "Week 5",
      "questions": [
        {
          "id": "q-ar4-1",
          "type": "multiple",
          "question": "What is the maximum size of any individual memory segment in the 8086 processor?",
          "options": [
            "16 KB",
            "32 KB",
            "64 KB",
            "1 MB"
          ],
          "correct": 2,
          "explanation": "Every 8086 segment is exactly 64 KB (65,536 bytes), addressable by a 16-bit offset."
        },
        {
          "id": "q-ar4-2",
          "type": "multiple",
          "question": "In what direction does the 8086 LIFO stack grow in memory as data is pushed?",
          "options": [
            "Upward toward higher memory addresses",
            "Downward toward lower memory addresses",
            "Randomly depending on the OS",
            "Horizontally across segments"
          ],
          "correct": 1,
          "explanation": "The 8086 runtime stack grows downward toward lower memory addresses. Pushing decrements the Stack Pointer."
        },
        {
          "id": "q-ar4-3",
          "type": "multiple",
          "question": "If SS = 1800H and SP = 3A74H, what is the new SP value after executing 'PUSH BX'?",
          "options": [
            "3A76H",
            "3A72H",
            "3A74H",
            "1802H"
          ],
          "correct": 1,
          "explanation": "PUSH decrements SP by 2: New SP = 3A74H - 2 = 3A72H."
        },
        {
          "id": "q-ar4-4",
          "type": "multiple",
          "question": "When executing 'PUSH BX' with BX = 1234H, where are the high byte (12H) and low byte (34H) stored?",
          "options": [
            "High byte at SS:SP and low byte at SS:SP+1",
            "High byte at SS:SP+1 and low byte at SS:SP",
            "Both bytes are stored in the PC",
            "Low byte at DS:BX and high byte at DS:BX+1"
          ],
          "correct": 1,
          "explanation": "Following little-endian architecture, the low byte (BL = 34H) is placed at the lower address SS:SP, and the high byte (BH = 12H) is placed at SS:SP+1."
        },
        {
          "id": "q-ar4-5",
          "type": "multiple",
          "question": "If SS = 1234H and SP = 281AH, what is the new SP value after executing 'POP CX'?",
          "options": [
            "2818H",
            "281CH",
            "281AH",
            "1236H"
          ],
          "correct": 1,
          "explanation": "POP increments SP by 2: New SP = 281AH + 2 = 281CH."
        },
        {
          "id": "q-ar4-6",
          "type": "multiple",
          "question": "Which addressing mode is demonstrated by the instruction 'MOV AL, 15H'?",
          "options": [
            "Register Addressing",
            "Immediate Addressing",
            "Direct Addressing",
            "Register Relative Addressing"
          ],
          "correct": 1,
          "explanation": "In Immediate Addressing, the operand (15H) is a constant value encoded directly into the instruction bytes."
        },
        {
          "id": "q-ar4-7",
          "type": "multiple",
          "question": "Which segment register is used by default for the instruction 'MOV CX, [BP]'?",
          "options": [
            "Data Segment (DS)",
            "Code Segment (CS)",
            "Stack Segment (SS)",
            "Extra Segment (ES)"
          ],
          "correct": 2,
          "explanation": "Whenever BP (Base Pointer) is used as an address pointer, the 8086 hardware defaults to the Stack Segment (SS)."
        },
        {
          "id": "q-ar4-8",
          "type": "multiple",
          "question": "Identify the addressing mode of 'ADC [BP+1800H], BX'.",
          "options": [
            "Direct Addressing",
            "Register Relative Addressing (Base Addressing)",
            "Base-Plus-Index Addressing",
            "Immediate Addressing"
          ],
          "correct": 1,
          "explanation": "The effective address is computed by adding a base register (BP) and a displacement (1800H), which defines Register Relative Addressing."
        },
        {
          "id": "q-ar4-9",
          "type": "multiple",
          "question": "Identify the addressing mode of 'MOV AX, [BX + SI]'.",
          "options": [
            "Base-Plus-Index Addressing",
            "Register Relative Addressing",
            "Direct Addressing",
            "Immediate Addressing"
          ],
          "correct": 0,
          "explanation": "Summing a base register (BX) and an index register (SI) is Base-Plus-Index Addressing."
        },
        {
          "id": "q-ar4-10",
          "type": "multiple",
          "question": "Identify the addressing mode of 'AND AGAIN[BP+SI], DS'.",
          "options": [
            "Base-Relative-Plus-Index Addressing",
            "Register Indirect Addressing",
            "Immediate Addressing",
            "Direct Addressing"
          ],
          "correct": 0,
          "explanation": "Combining a base register (BP), an index register (SI), and a displacement (AGAIN) is Base-Relative-Plus-Index Addressing."
        },
        {
          "id": "q-ar4-11",
          "type": "multiple",
          "question": "Upon microcomputer startup, what is the initial value in the Stack Pointer (SP)?",
          "options": [
            "0000H",
            "1000H",
            "FFFFH",
            "7FFFH"
          ],
          "correct": 2,
          "explanation": "SP is initialized to FFFFH upon startup, placing the initial top of stack at the top boundary of the stack segment."
        }
      ]
    },
    {
      "checkpointId": "ar-cp5",
      "subject": "AR101",
      "week": "Week 6",
      "questions": [
        {
          "id": "q-ar5-1",
          "type": "multiple",
          "question": "As a general rule, what effect do Data Transfer instructions have on CPU flags?",
          "options": [
            "They set the Zero Flag if data is 0",
            "They update the Carry and Sign flags",
            "They do NOT affect any flags (except POPF and SAHF)",
            "They invert the Parity flag"
          ],
          "correct": 2,
          "explanation": "Data Transfer instructions in the 8086 facilitate data movement without modifying any condition flags, except SAHF and POPF."
        },
        {
          "id": "q-ar5-2",
          "type": "multiple",
          "question": "Which of the following MOV operations is strictly ILLEGAL in 8086 assembly?",
          "options": [
            "MOV AX, [BX]",
            "MOV CS, AX",
            "MOV [DI], DX",
            "MOV AL, BL"
          ],
          "correct": 1,
          "explanation": "The Code Segment (CS) register CANNOT be the destination of a MOV instruction, as it would disrupt code sequencing."
        },
        {
          "id": "q-ar5-3",
          "type": "multiple",
          "question": "Why is the instruction 'MOV [0100H], [0200H]' invalid?",
          "options": [
            "Hex numbers cannot start with 0",
            "Memory-to-memory transfers are not permitted with a single MOV instruction",
            "Brackets can only be used with registers",
            "Addresses must be 20 bits"
          ],
          "correct": 1,
          "explanation": "Direct memory-to-memory data transfers are prohibited; data must be loaded into a register first."
        },
        {
          "id": "q-ar5-4",
          "type": "multiple",
          "question": "How does 'LEA AX, LIST' fundamentally differ from 'MOV AX, LIST'?",
          "options": [
            "LEA is only for 8-bit registers",
            "LEA loads the offset address of LIST into AX, whereas MOV loads the contents of memory at LIST into AX",
            "LEA clears the accumulator before loading",
            "LEA modifies the Zero Flag"
          ],
          "correct": 1,
          "explanation": "LEA (Load Effective Address) computes and loads the 16-bit offset address itself, whereas MOV loads the data stored at that address."
        },
        {
          "id": "q-ar5-5",
          "type": "multiple",
          "question": "Which instruction swaps the contents of the Destination and Source operands?",
          "options": [
            "SWAP",
            "XCHG",
            "XLAT",
            "MOV"
          ],
          "correct": 1,
          "explanation": "XCHG D, S exchanges the contents of the two specified operands."
        },
        {
          "id": "q-ar5-6",
          "type": "multiple",
          "question": "Which of the following operands is ILLEGAL for the XCHG instruction?",
          "options": [
            "Register and Register",
            "Register and Memory",
            "Immediate data operand",
            "Memory and Register"
          ],
          "correct": 2,
          "explanation": "Neither operand in an XCHG instruction can be an Immediate value (nor a Segment Register)."
        },
        {
          "id": "q-ar5-7",
          "type": "multiple",
          "question": "What does the PUSHA instruction push onto the stack?",
          "options": [
            "Only the 4 segment registers",
            "All 8 general registers: AX, CX, DX, BX, SP, BP, SI, DI",
            "The Flags register and IP",
            "All memory locations in the data segment"
          ],
          "correct": 1,
          "explanation": "PUSHA pushes the 8 general-purpose registers in order: AX, CX, DX, BX, SP, BP, SI, DI."
        },
        {
          "id": "q-ar5-8",
          "type": "multiple",
          "question": "Which instruction performs a table lookup, translating the byte in AL using a table pointed to by BX?",
          "options": [
            "LOOKUP",
            "XLAT",
            "TRANS",
            "TABLE"
          ],
          "correct": 1,
          "explanation": "XLAT translates the byte in AL using memory location [BX + AL]."
        },
        {
          "id": "q-ar5-9",
          "type": "multiple",
          "question": "What does the LAHF instruction accomplish?",
          "options": [
            "Loads AH with the lower byte of the Flag register (SF, ZF, AF, PF, CF)",
            "Loads AL with hardware interrupt flags",
            "Clears all arithmetic flags",
            "Loads the High byte of the Accumulator into Flags"
          ],
          "correct": 0,
          "explanation": "LAHF (Load AH from Flags) copies SF, ZF, AF, PF, and CF into register AH."
        },
        {
          "id": "q-ar5-10",
          "type": "multiple",
          "question": "Why is 'MOV DS, 2000H' illegal?",
          "options": [
            "2000H exceeds 16 bits",
            "Immediate values cannot be moved directly into segment registers",
            "DS is a read-only register",
            "Segment registers only accept AL"
          ],
          "correct": 1,
          "explanation": "Immediate constants cannot be loaded directly into segment registers; they must be loaded via a general register (e.g. MOV AX, 2000H then MOV DS, AX)."
        },
        {
          "id": "q-ar5-11",
          "type": "multiple",
          "question": "Which instruction pops a 16-bit word from the stack directly into the Flags Register (PSW)?",
          "options": [
            "POP PSW",
            "POPF",
            "SAHF",
            "RESTORE"
          ],
          "correct": 1,
          "explanation": "POPF pops the top word from the stack directly into the Processor Status Word / Flags Register."
        }
      ]
    },
    {
      "checkpointId": "ar-cp6",
      "subject": "AR101",
      "week": "Week 7",
      "questions": [
        {
          "id": "q-ar6-1",
          "type": "multiple",
          "question": "What is the primary drawback shared by both Sign-and-Magnitude and 1's Complement number representations?",
          "options": [
            "Inability to represent positive integers",
            "They both have two representations for zero (+0 and -0)",
            "They cannot be implemented in silicon",
            "They require 32 bits minimum"
          ],
          "correct": 1,
          "explanation": "Both Sign-Magnitude and 1's Complement have two distinct representations for zero, complicating hardware zero-detection and arithmetic."
        },
        {
          "id": "q-ar6-2",
          "type": "multiple",
          "question": "What is the 4-bit 2's complement representation of -3?",
          "options": [
            "1011",
            "1100",
            "1101",
            "1110"
          ],
          "correct": 2,
          "explanation": "+3 is 0011. 1's complement is 1100. Adding 1 yields 1101 (-3)."
        },
        {
          "id": "q-ar6-3",
          "type": "multiple",
          "question": "What is the representation of binary '1000' in 4-bit 2's complement?",
          "options": [
            "-0",
            "-7",
            "-8",
            "+8"
          ],
          "correct": 2,
          "explanation": "In 4-bit 2's complement, 1000 represents -8. (Range is -2^3 to +2^3 - 1, which is -8 to +7)."
        },
        {
          "id": "q-ar6-4",
          "type": "multiple",
          "question": "What is the Boolean expression for the Sum output (s_i) of a Full Adder?",
          "options": [
            "s_i = x_i * y_i * c_i",
            "s_i = x_i XOR y_i XOR c_i",
            "s_i = x_i + y_i + c_i",
            "s_i = (x_i XOR y_i) * c_i"
          ],
          "correct": 1,
          "explanation": "The sum function of a full adder is s_i = x_i XOR y_i XOR c_i."
        },
        {
          "id": "q-ar6-5",
          "type": "multiple",
          "question": "What is the carry-out equation for stage i in terms of Generate (G_i) and Propagate (P_i)?",
          "options": [
            "c_{i+1} = G_i * P_i + c_i",
            "c_{i+1} = G_i + P_i * c_i",
            "c_{i+1} = (G_i + P_i) * c_i",
            "c_{i+1} = G_i XOR P_i XOR c_i"
          ],
          "correct": 1,
          "explanation": "In carry-lookahead theory, the recursive carry equation is c_{i+1} = G_i + P_i * c_i."
        },
        {
          "id": "q-ar6-6",
          "type": "multiple",
          "question": "Assuming a stage carry delay of 1 ns and a final sum delay of 1.5 ns, how long does a 32-bit addition take in a Ripple-Carry Adder?",
          "options": [
            "3.0 ns",
            "16.5 ns",
            "32.5 ns",
            "64.0 ns"
          ],
          "correct": 2,
          "explanation": "Total delay = (32 - 1) x 1 ns + 1.5 ns = 31 ns + 1.5 ns = 32.5 ns."
        },
        {
          "id": "q-ar6-7",
          "type": "multiple",
          "question": "How long does an 8-bit Ripple-Carry addition take under the same timing assumptions?",
          "options": [
            "8.5 ns",
            "8.0 ns",
            "3.0 ns",
            "12.0 ns"
          ],
          "correct": 0,
          "explanation": "Total delay = (8 - 1) x 1 ns + 1.5 ns = 7 ns + 1.5 ns = 8.5 ns."
        },
        {
          "id": "q-ar6-8",
          "type": "multiple",
          "question": "How many logic gate delays are required to develop ALL carries in a Carry-Lookahead Adder?",
          "options": [
            "1 logic delay",
            "3 logic delays",
            "8 logic delays",
            "32 logic delays"
          ],
          "correct": 1,
          "explanation": "All carries are obtained in 3 logic delays: 1 gate delay to generate P_i and G_i signals, followed by 2 gate delays for the 2-level AND-OR carry logic."
        },
        {
          "id": "q-ar6-9",
          "type": "multiple",
          "question": "In a Carry-Lookahead Adder, what are the Generate (G_i) and Propagate (P_i) functions?",
          "options": [
            "G_i = x_i + y_i and P_i = x_i * y_i",
            "G_i = x_i * y_i and P_i = x_i + y_i",
            "G_i = x_i XOR y_i and P_i = x_i * y_i",
            "G_i = NOT x_i and P_i = NOT y_i"
          ],
          "correct": 1,
          "explanation": "Generate is G_i = x_i * y_i (carry generated internally), and Propagate is P_i = x_i + y_i (or x_i XOR y_i)."
        },
        {
          "id": "q-ar6-10",
          "type": "multiple",
          "question": "What practical physical constraint limits the bit-width of pure single-level Carry-Lookahead Adders?",
          "options": [
            "Gate fan-in constraints",
            "Lack of binary clock signals",
            "Floating-point overflow",
            "Insufficient RAM storage"
          ],
          "correct": 0,
          "explanation": "Carry generation requires gates with fan-in of i + 2. An 8-bit CLA already requires a gate fan-in of 9, which exceeds practical silicon limits."
        },
        {
          "id": "q-ar6-11",
          "type": "multiple",
          "question": "How do modern high-speed 32-bit and 64-bit ALUs resolve the gate fan-in constraint of Carry-Lookahead Adders?",
          "options": [
            "By reverting completely to slow ripple-carry adders",
            "By constructing Hierarchical / Blocked Carry-Lookahead Adders (e.g. 4-bit CLA blocks combined via group generate/propagate logic)",
            "By using software emulation for all addition",
            "By reducing word sizes to 4 bits"
          ],
          "correct": 1,
          "explanation": "Engineers construct hierarchical (multilevel) CLA adders where 4-bit CLA blocks generate group generate/propagate signals, avoiding high gate fan-in."
        },
        {
          "id": "q-ar6-12",
          "type": "multiple",
          "question": "How is a 1-bit Full Adder constructed using Half Adders?",
          "options": [
            "Using two Half Adders and one OR gate (or XOR gate)",
            "Using three Half Adders and one AND gate",
            "Using one Half Adder and two Inverters",
            "Using four Half Adders in parallel"
          ],
          "correct": 0,
          "explanation": "A 1-bit Full Adder is built by cascading two Half Adders (HA1 calculates A ⊕ B and AB; HA2 adds Cin to produce final Sum S = (A ⊕ B) ⊕ Cin) and an OR gate combining the two stage carries: Cout = AB + (A ⊕ B)Cin."
        },
        {
          "id": "q-ar6-13",
          "type": "multiple",
          "question": "In the construction of a Full Adder using two Half Adders, why can the output carry combiner OR gate be replaced with an XOR gate without altering functionality?",
          "options": [
            "Because the stage carries C1 = AB and C2 = (A ⊕ B)Cin are mutually exclusive and can never both be 1 simultaneously",
            "Because XOR and OR gates have identical truth tables for all binary inputs",
            "Because carry propagation delay is eliminated when using XOR gates",
            "Because 2's complement arithmetic requires odd parity check"
          ],
          "correct": 0,
          "explanation": "Carries C1 = AB and C2 = (A ⊕ B)Cin can never be 1 at the same time: if AB = 1, then A ⊕ B = 0 forcing C2 = 0; if C2 = 1, then A ⊕ B = 1 forcing AB = 0. Since C1 · C2 = 0 always holds, C1 + C2 ≡ C1 ⊕ C2."
        }
      ]
    },
    {
      "checkpointId": "rizal-cp1",
      "subject": "RIZAL",
      "week": "Module 1",
      "questions": [
        {
          "id": "q-rz1-1",
          "type": "multiple",
          "question": "Who was the original author of the legislative bill that eventually became Republic Act No. 1425?",
          "options": [
            "Senator Jose P. Laurel",
            "Senator Claro M. Recto",
            "President Ramon Magsaysay",
            "Senator Francisco Rodrigo"
          ],
          "correct": 1,
          "explanation": "Senator Claro M. Recto was the brilliant nationalist author who drafted the bill. Sen. Jose P. Laurel was the Chairman of the Senate Committee on Education who sponsored and defended it on the floor."
        },
        {
          "id": "q-rz1-2",
          "type": "multiple",
          "question": "Under Republic Act 1425, which educational level is explicitly required to use the original or unexpurgated editions of Noli Me Tangere and El Filibusterismo?",
          "options": [
            "Elementary grade schools",
            "Secondary junior and senior high schools",
            "Collegiate undergraduate courses",
            "Post-graduate doctoral programs"
          ],
          "correct": 2,
          "explanation": "Section 1 of RA 1425 specifically provides: 'Provided, That in the collegiate courses, the original or unexpurgated editions of the Noli Me Tangere and El Filibusterismo or their English translation shall be used as basic texts.'"
        },
        {
          "id": "q-rz1-3",
          "type": "multiple",
          "question": "What is the legal effect of the Religious Exemption Clause under Section 1 of RA 1425 for a student with sworn religious objections?",
          "options": [
            "The student is exempted from taking the Rizal course entirely",
            "The student is exempted only from reading the unexpurgated novels, but must still take the Rizal course",
            "The student is awarded an automatic passing grade in Philippine History",
            "The student must pay a penalty fee to the Board of National Education"
          ],
          "correct": 1,
          "explanation": "A major exam trap! The law provides exemption for religious belief via a sworn statement from reading the unexpurgated novels, 'but not from taking the course provided for in the first part of said paragraph.'"
        },
        {
          "id": "q-rz1-4",
          "type": "multiple",
          "question": "What financial sum was authorized to be appropriated from the National Treasury to carry out RA 1425 under Section 5?",
          "options": [
            "₱50,000",
            "₱150,000",
            "₱300,000",
            "₱1,000,000"
          ],
          "correct": 2,
          "explanation": "Section 5 of RA 1425 states: 'The sum of three hundred thousand pesos (₱300,000) is hereby authorized to be appropriated out of any fund not otherwise appropriated in the National Treasury.'"
        },
        {
          "id": "q-rz1-5",
          "type": "multiple",
          "question": "During the congressional debates on SB 438, which priest claimed that out of 333 pages in the Noli, only 25 were patriotic while 120 were anti-Catholic attacks?",
          "options": [
            "Fr. José Burgos",
            "Fr. Jesus Cavanna",
            "Fr. Pedro Pelaez",
            "Fr. Rufino Collantes"
          ],
          "correct": 1,
          "explanation": "Fr. Jesus Cavanna, speaking at a symposium organized by the Catholic Action of Manila (CAM), made this statistical attack against Rizal's Noli Me Tangere."
        },
        {
          "id": "q-rz1-6",
          "type": "multiple",
          "question": "When Catholic schools threatened to close if the Rizal Bill passed, what bold counter-proposal did Senator Claro M. Recto advocate?",
          "options": [
            "Expelling Spanish friars from the country",
            "Nationalization of all private schools in the Philippines",
            "Expropriating Catholic Church lands without compensation",
            "Abolishing religious freedom in the constitution"
          ],
          "correct": 1,
          "explanation": "Recto welcomed the threat of closure, stating that it would allow the state to nationalize private schools and foster true Filipino nationalism, quipping that the Church made too much profit to ever actually shut down."
        },
        {
          "id": "q-rz1-7",
          "type": "multiple",
          "question": "Which Philippine President signed Memorandum Order No. 246 on December 26, 1994, strictly directing DECS and CHED to enforce RA 1425?",
          "options": [
            "Ferdinand E. Marcos",
            "Corazon C. Aquino",
            "Fidel V. Ramos",
            "Joseph E. Estrada"
          ],
          "correct": 2,
          "explanation": "President Fidel V. Ramos issued Memorandum Order 246 in December 1994 to revitalize compliance with RA 1425 ahead of the 1996 martyrdom centennial and 1998 independence centennial."
        },
        {
          "id": "q-rz1-8",
          "type": "multiple",
          "question": "Which of the following was NOT one of the 4 criteria set by the 1901 Taft Commission in choosing the National Hero?",
          "options": [
            "Must be a Filipino",
            "Must be currently living to guide the revolutionary government",
            "Must have possessed a towering love for country",
            "Must have possessed a calm, peaceful temperament (mahinahong damdamin)"
          ],
          "correct": 1,
          "explanation": "The criterion was that the candidate must be DECEASED ('yumao na'), not living, to ensure that future controversies or political ambitions would not taint the symbol."
        },
        {
          "id": "q-rz1-9",
          "type": "multiple",
          "question": "Why was General Antonio Luna eliminated from consideration as the National Hero by the Taft Commission?",
          "options": [
            "He was not a pure Filipino",
            "He possessed a fierce temper and favored armed military conflict rather than peaceful reform",
            "He wrote in French rather than Spanish",
            "He refused to support the Propaganda Movement"
          ],
          "correct": 1,
          "explanation": "Antonio Luna was eliminated because of his fiery, hot-tempered personality and military approach, violating the Taft Commission's criterion of 'may mahinahong damdamin' (calm and peaceful temperament)."
        },
        {
          "id": "q-rz1-10",
          "type": "multiple",
          "question": "Who was the Filipino revolutionary hero known as the 'Brain of the Katipunan' who died of malaria in Laguna and was considered by the Taft Commission?",
          "options": [
            "Andres Bonifacio",
            "Emilio Jacinto",
            "Apolinario Mabini",
            "Marcelo H. del Pilar"
          ],
          "correct": 1,
          "explanation": "Emilio Jacinto (1875–1899) was known as 'The Brain of the Katipunan' (author of the Kartilya). He died of malaria in Magdalena, Laguna at the age of 23."
        }
      ]
    },
    {
      "checkpointId": "rizal-cp2",
      "subject": "RIZAL",
      "week": "Module 2",
      "questions": [
        {
          "id": "q-rz2-1",
          "type": "multiple",
          "question": "Which global 19th-century revolution replaced feudal agrarianism with industrial capitalism and mechanized production?",
          "options": [
            "The French Revolution",
            "The Industrial Revolution",
            "The American Revolution",
            "The Bolshevik Revolution"
          ],
          "correct": 1,
          "explanation": "The Industrial Revolution in England and Europe introduced steam engines and factory manufacturing, transitioning societies from feudalism into industrial capitalism."
        },
        {
          "id": "q-rz2-2",
          "type": "multiple",
          "question": "What French engineer was responsible for constructing the Suez Canal, inaugurated on November 17, 1869?",
          "options": [
            "Gustave Eiffel",
            "Ferdinand de Lesseps",
            "Louis Pasteur",
            "Dr. Louis de Weckert"
          ],
          "correct": 1,
          "explanation": "Ferdinand de Lesseps, a French diplomat and engineer, directed the construction of the 103-mile Suez Canal."
        },
        {
          "id": "q-rz2-3",
          "type": "multiple",
          "question": "How significantly did the opening of the Suez Canal reduce the travel time from Barcelona to Manila?",
          "options": [
            "From 1 year to 6 months",
            "From over 3 months to 32 days",
            "From 6 months to 15 days",
            "From 60 days to 10 days"
          ],
          "correct": 1,
          "explanation": "Prior to 1869, steamships rounding the Cape of Good Hope took over 3 months; the Suez Canal shortened the journey to just 32 days."
        },
        {
          "id": "q-rz2-4",
          "type": "multiple",
          "question": "Which Governor-General was loved for his simple, democratic lifestyle, abolition of censorship, and support for native secular priests?",
          "options": [
            "Rafael de Izquierdo",
            "Carlos María de la Torre",
            "Valeriano Weyler",
            "Fermin Jaudenes"
          ],
          "correct": 1,
          "explanation": "Gov. Gen. Carlos María de la Torre (1869–1871) governed with liberal, egalitarian principles, walked without armed guards, and abolished press censorship."
        },
        {
          "id": "q-rz2-5",
          "type": "multiple",
          "question": "On what date in 1872 were Fathers Gomez, Burgos, and Zamora executed by garrote at Bagumbayan?",
          "options": [
            "January 20, 1872",
            "February 17, 1872",
            "June 19, 1872",
            "December 30, 1872"
          ],
          "correct": 1,
          "explanation": "The Cavite Mutiny occurred on January 20, 1872; GOMBURZA were executed on February 17, 1872."
        },
        {
          "id": "q-rz2-6",
          "type": "multiple",
          "question": "What was the term for the system of forced labor required of native Filipino males under Spanish colonial rule?",
          "options": [
            "Bandala",
            "Polo y servicio",
            "Encomienda",
            "Rentas estancadas"
          ],
          "correct": 1,
          "explanation": "Polo y servicio was the compulsory 40-day manual labor imposed on native males aged 16 to 60 for public works."
        },
        {
          "id": "q-rz2-7",
          "type": "multiple",
          "question": "In Graciano Lopez-Jaena's famous satirical work, how did he personify the abusive, greedy friar?",
          "options": [
            "Padre Damaso",
            "Fray Botod",
            "Padre Sibyla",
            "Padre Salvi"
          ],
          "correct": 1,
          "explanation": "Graciano Lopez-Jaena authored 'Fray Botod' ('botod' means big-bellied in Hiligaynon) to satirize the immorality, gluttony, and abuses of the Spanish friars."
        },
        {
          "id": "q-rz2-8",
          "type": "multiple",
          "question": "In the 19th-century Philippine social hierarchy, what term designated pure-blooded Spaniards born in the Philippines?",
          "options": [
            "Peninsulares",
            "Insulares",
            "Principalia",
            "Indios"
          ],
          "correct": 1,
          "explanation": "Spaniards born in the Philippines were called Insulares (also referred to as 'Filipinos' during that era), while Spaniards born in Spain were Peninsulares."
        },
        {
          "id": "q-rz2-9",
          "type": "multiple",
          "question": "Which Spanish constabulary force, established to maintain peace and pursue bandits, became feared for arbitrary brutality and oppression of civilians?",
          "options": [
            "Carabineros de Seguridad",
            "The Guardia Civil",
            "Tercios Civiles",
            "Regimiento Cantabria"
          ],
          "correct": 1,
          "explanation": "The Guardia Civil was notorious for extortion, arbitrary arrests, and brutality against innocent Filipino civilians."
        },
        {
          "id": "q-rz2-10",
          "type": "multiple",
          "question": "What derogatory term did Spanish colonial authorities use to refer to native brown Filipinos to imply racial inferiority?",
          "options": [
            "Criollos",
            "Indios",
            "Sangleyes",
            "Moros"
          ],
          "correct": 1,
          "explanation": "Spanish authorities derisively labeled native Filipinos as 'Indios' (Indians), practicing pervasive racial prejudice across society."
        }
      ]
    },
    {
      "checkpointId": "rizal-cp3",
      "subject": "RIZAL",
      "week": "Module 3",
      "questions": [
        {
          "id": "q-rz3-1",
          "type": "multiple",
          "question": "Under what alias name did José Rizal depart the Philippines aboard the SS Salvadora on May 3, 1882?",
          "options": [
            "Laong Laan",
            "José Mercado",
            "Dimasalang",
            "P. Jacinto"
          ],
          "correct": 1,
          "explanation": "To evade detection by Spanish authorities and Dominican friars, Rizal used a passport provided under the name of his cousin, José Mercado."
        },
        {
          "id": "q-rz3-2",
          "type": "multiple",
          "question": "What was the French steamer Rizal boarded in Singapore on May 11, 1882 to continue his voyage to Europe?",
          "options": [
            "SS Salvadora",
            "Djemnah",
            "Isla de Panay",
            "España"
          ],
          "correct": 1,
          "explanation": "Rizal boarded the French mail steamer Djemnah in Singapore, where he practiced speaking conversational French with the passengers."
        },
        {
          "id": "q-rz3-3",
          "type": "multiple",
          "question": "What observation did Rizal record regarding Aden (Yemen) upon landing on May 27, 1882?",
          "options": [
            "It was colder than Madrid and covered in snow",
            "It was a city hotter than Manila and he saw camels for the first time",
            "It had the tallest cathedral in the Middle East",
            "It was completely abandoned due to plague"
          ],
          "correct": 1,
          "explanation": "Rizal noted in his travel journal that Aden was 'hotter than Manila' and expressed amusement at seeing real camels for the first time."
        },
        {
          "id": "q-rz3-4",
          "type": "multiple",
          "question": "What Italian city was the very first European ground José Rizal set foot upon on June 11, 1882?",
          "options": [
            "Rome",
            "Venice",
            "Naples",
            "Milan"
          ],
          "correct": 2,
          "explanation": "Naples, Italy was the first European ground Rizal stepped onto. Accompanied by a guide, he explored the city for one hour on June 11, 1882."
        },
        {
          "id": "q-rz3-5",
          "type": "multiple",
          "question": "In Marseilles, France, which historic fortress prison made famous by Alexandre Dumas' The Count of Monte Cristo did Rizal visit?",
          "options": [
            "The Bastille",
            "Château d'If",
            "Tower of London",
            "Castel Sant'Angelo"
          ],
          "correct": 1,
          "explanation": "Rizal visited Château d'If, where Edmond Dantès, hero of Alexandre Dumas' famous novel The Count of Monte Cristo, was imprisoned."
        },
        {
          "id": "q-rz3-6",
          "type": "multiple",
          "question": "What was the title of Rizal's first patriotic essay written on Spanish soil, published in Diarong Tagalog?",
          "options": [
            "A La Juventud Filipina",
            "Amor Patrio",
            "Los Viajes",
            "Filipinas Dentro de Cien Años"
          ],
          "correct": 1,
          "explanation": "Amor Patrio (Love of Country) was Rizal's first essay written on Spanish soil in Barcelona, published on August 20, 1882 under the pen-name Laong Laan."
        },
        {
          "id": "q-rz3-7",
          "type": "multiple",
          "question": "Who translated Rizal's essay Amor Patrio from Spanish into Tagalog for Diarong Tagalog?",
          "options": [
            "Graciano Lopez-Jaena",
            "Marcelo H. del Pilar",
            "Mariano Ponce",
            "Basilio Teodoro Moran"
          ],
          "correct": 1,
          "explanation": "Marcelo H. del Pilar translated Amor Patrio into Tagalog, published alongside Rizal's Spanish original in Diarong Tagalog."
        },
        {
          "id": "q-rz3-8",
          "type": "multiple",
          "question": "What nostalgic poem did Rizal write and declaim at the Círculo Hispano-Filipino in Madrid on New Year's Eve (December 31, 1882)?",
          "options": [
            "Mi Ultimo Adios",
            "Me Piden Versos",
            "A Las Flores de Heidelberg",
            "Canto del Viajero"
          ],
          "correct": 1,
          "explanation": "Upon request of fellow members of the Círculo Hispano-Filipino, Rizal wrote 'Me Piden Versos' (They Ask Me For Verses) and declaimed it on Dec 31, 1882."
        },
        {
          "id": "q-rz3-9",
          "type": "multiple",
          "question": "In March 1883, which Masonic Lodge did Rizal join in Madrid to secure Freemasonry's aid against Spanish friar rule?",
          "options": [
            "Lodge Solidaridad",
            "Lodge Acacia",
            "Lodge Nilad",
            "Lodge Walana"
          ],
          "correct": 1,
          "explanation": "Rizal joined Masonic Lodge Acacia in March 1883 in Madrid, later transferring to Lodge Solidaridad where he became a Master Mason."
        },
        {
          "id": "q-rz3-10",
          "type": "multiple",
          "question": "In June 1885, Rizal was awarded the degree of Licentiate in Philosophy and Letters by Universidad Central de Madrid with what top scholastic rating?",
          "options": [
            "Aprobado (Passing)",
            "Bueno (Good)",
            "Notable (Very Good)",
            "Sobresaliente (Excellent)"
          ],
          "correct": 3,
          "explanation": "Rizal was awarded the degree of Licentiate in Philosophy and Letters with the highest rating of 'Sobresaliente' (Excellent) in June 1885."
        }
      ]
    },
    {
      "checkpointId": "rizal-cp4",
      "subject": "RIZAL",
      "week": "Module 4",
      "questions": [
        {
          "id": "q-rz4-1",
          "type": "multiple",
          "question": "What primary personal motivation drove Dr. José Rizal to specialize in ophthalmology?",
          "options": [
            "To build a lucrative private clinic in Madrid",
            "To cure his mother Doña Teodora Alonso's failing eyesight and cataracts",
            "To fulfill an academic scholarship requirement from Ateneo",
            "To become the royal physician of the Spanish Governor-General"
          ],
          "correct": 1,
          "explanation": "Rizal chose ophthalmology specifically to treat and operate on his mother's failing eyesight caused by advancing cataracts."
        },
        {
          "id": "q-rz4-2",
          "type": "multiple",
          "question": "In Paris, under which leading French ophthalmologist of the era did Rizal work as a clinical assistant?",
          "options": [
            "Dr. Otto Becker",
            "Dr. Louis de Weckert",
            "Dr. Rudolf Virchow",
            "Dr. Feodor Jagor"
          ],
          "correct": 1,
          "explanation": "Dr. Louis de Weckert was the foremost French ophthalmologist in Paris, under whom Rizal trained as an assistant from October 1885 to February 1886."
        },
        {
          "id": "q-rz4-3",
          "type": "multiple",
          "question": "In Juan Luna's masterpiece painting 'The Blood Compact' (El Pacto de Sangre), which historical figure did Rizal pose as?",
          "options": [
            "Miguel López de Legazpi",
            "Chieftain Sikatuna",
            "Fray Andrés de Urdaneta",
            "Rajah Sulayman"
          ],
          "correct": 1,
          "explanation": "Rizal posed as the Bohol chieftain Sikatuna, while Trinidad Pardo de Tavera posed as the Spanish conquistador Miguel López de Legazpi."
        },
        {
          "id": "q-rz4-4",
          "type": "multiple",
          "question": "At the University Eye Hospital in Heidelberg, Germany, which prominent ophthalmologist mentored Rizal?",
          "options": [
            "Dr. Otto Becker",
            "Dr. Louis de Weckert",
            "Dr. Hans Virchow",
            "Dr. W. Joest"
          ],
          "correct": 0,
          "explanation": "Dr. Otto Becker was the distinguished German ophthalmology professor who directed the University Eye Hospital in Heidelberg where Rizal practiced."
        },
        {
          "id": "q-rz4-5",
          "type": "multiple",
          "question": "What prized personal belonging, gifted by his sister Saturnina, did Rizal pawn during the bleak winter of 1886 in Berlin?",
          "options": [
            "A gold pocket watch",
            "A diamond ring",
            "An ivory crucifix",
            "A silver medical stethoscope"
          ],
          "correct": 1,
          "explanation": "During the bleak winter of 1886 in Berlin, when no money arrived from Calamba, Rizal was forced to pawn the diamond ring given by his sister Saturnina."
        },
        {
          "id": "q-rz4-6",
          "type": "multiple",
          "question": "Who is revered as the 'Savior of the Noli' for loaning Rizal the funds needed to print Noli Me Tangere in Berlin?",
          "options": [
            "Valentin Ventura",
            "Dr. Máximo Viola",
            "Ferdinand Blumentritt",
            "Juan Luna"
          ],
          "correct": 1,
          "explanation": "Dr. Máximo Viola of San Miguel, Bulacan loaned Rizal the money to pay for his living expenses and the printing of Noli Me Tangere. Valentin Ventura financed El Filibusterismo."
        },
        {
          "id": "q-rz4-7",
          "type": "multiple",
          "question": "What was the printing cost charged by Berliner Buchdruckerei-Actien-Gesellschaft for the first 2,000 copies of Noli Me Tangere?",
          "options": [
            "100 pesos",
            "300 pesos",
            "500 pesos",
            "1,000 pesos"
          ],
          "correct": 1,
          "explanation": "The Berlin printing press charged the lowest rate: 300 pesos for 2,000 copies of Noli Me Tangere (which came off the press March 21, 1887)."
        },
        {
          "id": "q-rz4-8",
          "type": "multiple",
          "question": "What is the English translation and biblical origin of the Latin title 'Noli Me Tangere'?",
          "options": [
            "'Love of Country' from Proverbs",
            "'Touch Me Not' from the Gospel of St. John",
            "'The Reign of Greed' from Ecclesiastes",
            "'Awaken My People' from Isaiah"
          ],
          "correct": 1,
          "explanation": "Noli Me Tangere is Latin for 'Touch Me Not', spoken by Jesus to Mary Magdalene in the Gospel of St. John (Chapter 20, Verses 13–17)."
        },
        {
          "id": "q-rz4-9",
          "type": "multiple",
          "question": "On May 13, 1887, at Leitmeritz, Bohemia, Rizal met which Austrian scholar and lifelong intellectual correspondent in person for the first time?",
          "options": [
            "Dr. Feodor Jagor",
            "Professor Ferdinand Blumentritt",
            "Dr. Rudolf Virchow",
            "Dr. Adolph Meyer"
          ],
          "correct": 1,
          "explanation": "Rizal and Prof. Ferdinand Blumentritt met in person for the first time at the Leitmeritz railroad station on May 13, 1887 at 1:30 PM."
        },
        {
          "id": "q-rz4-10",
          "type": "multiple",
          "question": "What quote did Rizal write to Blumentritt describing his exhaustion and awe upon touring Rome on June 27, 1887?",
          "options": [
            "'I came, I saw, I conquered.'",
            "'I am tired as a dog, but I will sleep as a God.'",
            "'Rome is the graveyard of Spanish tyrants.'",
            "'The waltzes of the Danube follow me everywhere.'"
          ],
          "correct": 1,
          "explanation": "Rizal wrote to Blumentritt from Rome: 'I am tired as a dog, but I will sleep as a God' after a full day of sightseeing in the Eternal City."
        }
      ]
    },
    {
      "checkpointId": "contempo-cp1",
      "subject": "SOCSCI3",
      "week": "Module 1",
      "questions": [
        {
          "id": "q-ct1-1",
          "type": "multiple",
          "question": "According to Manfred Steger, what term designates the actual social condition of thick global interconnectedness, as distinct from the processes creating it?",
          "options": [
            "Global Imaginary",
            "Globality",
            "Globalism",
            "Time-Space Compression"
          ],
          "correct": 1,
          "explanation": "Manfred Steger defines 'Globality' as the social condition of interconnectedness, 'Globalization' as the dynamic set of processes that transform nationality into globality, and 'Global Imaginary' as the growing consciousness of belonging to a global community."
        },
        {
          "id": "q-ct1-2",
          "type": "multiple",
          "question": "Which sociologist formulated the concept of 'Liquid Modernity' to describe how contemporary institutions, capital, and cultures lose their fixed shapes?",
          "options": [
            "Zygmunt Bauman",
            "George Ritzer",
            "Arjun Appadurai",
            "Anthony Giddens"
          ],
          "correct": 0,
          "explanation": "Polish sociologist Zygmunt Bauman authored 'Liquid Modernity' (2000), using the metaphor of liquidity to describe rapid movement, transience, and resistance to containment."
        },
        {
          "id": "q-ct1-3",
          "type": "multiple",
          "question": "Which of Arjun Appadurai's five global 'Scapes' deals specifically with the movement of tourists, immigrants, refugees, and Overseas Filipino Workers across borders?",
          "options": [
            "Technoscapes",
            "Ethnoscapes",
            "Financescapes",
            "Ideoscapes"
          ],
          "correct": 1,
          "explanation": "Ethnoscapes represent the shifting landscape of persons who move across the world (migrants, tourists, refugees, guest workers, OFWs)."
        },
        {
          "id": "q-ct1-4",
          "type": "multiple",
          "question": "Which of the following is NOT one of Arjun Appadurai's five dimensions of global cultural flows?",
          "options": [
            "Mediascapes",
            "Econoscapes",
            "Financescapes",
            "Ideoscapes"
          ],
          "correct": 1,
          "explanation": "A classic exam trap! Appadurai identified Ethnoscapes, Technoscapes, Financescapes, Mediascapes, and Ideoscapes. There is no such category as 'Econoscapes'."
        },
        {
          "id": "q-ct1-5",
          "type": "multiple",
          "question": "What concept does anthropologist Anna Tsing use to describe the obstacles, resistance, and borders that slow down or redirect global flows?",
          "options": [
            "Inertia",
            "Friction",
            "Viscosity",
            "Stagnation"
          ],
          "correct": 1,
          "explanation": "Anna Tsing introduced the concept of 'Friction' to explain how globalization is not a smooth, frictionless plane, but is impeded by borders, tariffs, regulations, and inequalities."
        },
        {
          "id": "q-ct1-6",
          "type": "multiple",
          "question": "Which metaphorical state of globalization is best exemplified by the Berlin Wall, physical gold vaults, and strict paper passports?",
          "options": [
            "Liquidity",
            "Solidity",
            "Gaseousness",
            "Plasma"
          ],
          "correct": 1,
          "explanation": "Solidity represents the pre-modern and heavy industrial era of fixed geographic barriers, physical fortifications, and rigid territorial sovereignty."
        },
        {
          "id": "q-ct1-7",
          "type": "multiple",
          "question": "What is the primary characteristic of the 'Gaseousness' metaphor in contemporary globalization?",
          "options": [
            "Heavy physical border checkpoints",
            "Hyper-mobility, weightlessness, and ambient wireless/cloud networks",
            "Slow maritime voyages across oceans",
            "Permanent lifetime employment structures"
          ],
          "correct": 1,
          "explanation": "Gaseousness captures the contemporary hyper-mobile, weightless era of cloud data, satellite signals, ambient connectivity, and airborne risks."
        },
        {
          "id": "q-ct1-8",
          "type": "multiple",
          "question": "What term describes the phenomenon when governments respond to liquid global flows by erecting new physical walls, digital firewalls, and tariffs?",
          "options": [
            "Re-solidification",
            "Condensation",
            "Vaporization",
            "Sublimation"
          ],
          "correct": 0,
          "explanation": "Re-solidification refers to the re-imposition of solid structures (tariffs, border walls, internet censorship) by states seeking to reassert sovereign control over fluid global flows."
        },
        {
          "id": "q-ct1-9",
          "type": "multiple",
          "question": "What percentage of transoceanic internet and communication traffic is carried by subsea fiber-optic cables lining the ocean floor?",
          "options": [
            "About 25%",
            "About 50%",
            "About 75%",
            "Over 99%"
          ],
          "correct": 3,
          "explanation": "Over 99% of all international internet data is carried by subsea fiber-optic cables; satellites handle less than 1% of global bandwidth."
        },
        {
          "id": "q-ct1-10",
          "type": "multiple",
          "question": "What did David Harvey mean by the phrase 'Time-Space Compression'?",
          "options": [
            "Physical continents are drifting closer together geologically",
            "Technological innovations reduce the time and perceived distance required to move people, goods, and information",
            "Clocks in different time zones are being synchronized into a single world hour",
            "Work hours in modern offices are becoming increasingly compressed"
          ],
          "correct": 1,
          "explanation": "Time-Space Compression refers to how communications and transportation technology dramatically speed up global interactions, making the world feel physically smaller and faster."
        }
      ]
    },
    {
      "checkpointId": "contempo-cp2",
      "subject": "SOCSCI3",
      "week": "Module 2",
      "questions": [
        {
          "id": "q-ct2-1",
          "type": "multiple",
          "question": "Which historic maritime trade route (1565–1815) across the Pacific is recognized by economic historians as the birth of the first truly planetary global economy?",
          "options": [
            "The Trans-Saharan Caravan Route",
            "The Manila-Acapulco Galleon Trade",
            "The Dutch East India Spice Monopoly",
            "The Hanseatic League"
          ],
          "correct": 1,
          "explanation": "The Manila-Acapulco Galleon Trade linked Asia (Chinese silks, spices) with the Americas (Mexican silver) and Europe across the Pacific Ocean, establishing the first continuous planetary trading system."
        },
        {
          "id": "q-ct2-2",
          "type": "multiple",
          "question": "Who coined the phrase 'The Fourth Industrial Revolution' and authored the seminal 2016 book on the topic?",
          "options": [
            "Bill Gates",
            "Klaus Schwab",
            "Thomas Friedman",
            "Joseph Stiglitz"
          ],
          "correct": 1,
          "explanation": "Professor Klaus Schwab, Founder and Executive Chairman of the World Economic Forum (WEF), formulated and popularized 'The Fourth Industrial Revolution' (4IR) in 2016."
        },
        {
          "id": "q-ct2-3",
          "type": "multiple",
          "question": "What is the defining hallmark of the Fourth Industrial Revolution (4IR) that distinguishes it from the 3rd (Digital) Revolution?",
          "options": [
            "The introduction of steam power and mechanized looms",
            "The widespread adoption of assembly lines and electricity",
            "The fusion of technologies blurring the lines between physical, digital, and biological spheres",
            "The initial development of mainframe computers and email"
          ],
          "correct": 2,
          "explanation": "4IR is defined by Cyber-Physical Systems (CPS) that blur the physical, digital, and biological domains (AI, IoT, robotics, genetic engineering, 3D printing)."
        },
        {
          "id": "q-ct2-4",
          "type": "multiple",
          "question": "Which two major international financial institutions were created during the Bretton Woods Conference in July 1944?",
          "options": [
            "World Trade Organization and the Federal Reserve",
            "International Monetary Fund (IMF) and the World Bank (IBRD)",
            "Bank for International Settlements and GATT",
            "Asian Development Bank and UNESCO"
          ],
          "correct": 1,
          "explanation": "The Bretton Woods Conference created the International Monetary Fund (IMF) and the World Bank (IBRD). The WTO was NOT created at Bretton Woods; it was established in 1995."
        },
        {
          "id": "q-ct2-5",
          "type": "multiple",
          "question": "What was the 'Nixon Shock' of August 15, 1971?",
          "options": [
            "The introduction of the gold standard across Latin America",
            "The unilateral termination of the US Dollar's convertibility into gold by President Richard Nixon",
            "The signing of the North American Free Trade Agreement",
            "The expulsion of China from the United Nations"
          ],
          "correct": 1,
          "explanation": "On August 15, 1971, President Nixon announced the US would no longer redeem dollars for gold, ending the Bretton Woods fixed exchange rate system and initiating modern floating fiat currencies."
        },
        {
          "id": "q-ct2-6",
          "type": "multiple",
          "question": "What international body officially succeeded the General Agreement on Tariffs and Trade (GATT) on January 1, 1995?",
          "options": [
            "The World Bank",
            "The World Trade Organization (WTO)",
            "The International Trade Organization",
            "UNCTAD"
          ],
          "correct": 1,
          "explanation": "The World Trade Organization (WTO) officially began operations on January 1, 1995, following the Uruguay Round negotiations, incorporating binding dispute settlement mechanisms."
        },
        {
          "id": "q-ct2-7",
          "type": "multiple",
          "question": "What term describes the 10 neoliberal economic policy prescriptions formulated by John Williamson in 1989 for crisis-wracked developing countries?",
          "options": [
            "The Keynesian Consensus",
            "The Washington Consensus",
            "The Beijing Consensus",
            "The Geneva Accords"
          ],
          "correct": 1,
          "explanation": "The Washington Consensus refers to the 10 neoliberal policy reforms (fiscal discipline, trade liberalization, privatization, deregulation) promoted by the IMF, World Bank, and US Treasury."
        },
        {
          "id": "q-ct2-8",
          "type": "multiple",
          "question": "Approximately what percentage of all global trade is estimated to take place within Global Value Chains (GVCs)?",
          "options": [
            "20%",
            "40%",
            "60%",
            "80%"
          ],
          "correct": 3,
          "explanation": "According to the World Bank and UNCTAD, roughly 80% of all international trade is integrated into Global Value Chains (GVCs), where goods are produced through multi-country input networks."
        },
        {
          "id": "q-ct2-9",
          "type": "multiple",
          "question": "Which of the following is an example of 'Platform Capitalism' in the contemporary 4IR economy?",
          "options": [
            "A traditional steel foundry manufacturing railway rails",
            "A state-owned coal mining conglomerate",
            "A digital platform like Grab or Airbnb that coordinates transactions and extracts value from data without owning physical transport or hotel assets",
            "A local farmer selling produce directly at a village bazaar"
          ],
          "correct": 2,
          "explanation": "Platform capitalism refers to multisided digital intermediaries (Grab, Uber, Airbnb, Shopee) that leverage algorithms, network effects, and user data rather than physical production assets."
        },
        {
          "id": "q-ct2-10",
          "type": "multiple",
          "question": "What economic phenomenon occurred during the 1930s Great Depression when countries raised import tariffs on each other, deepening global economic collapse?",
          "options": [
            "Quantitative Easing",
            "Beggar-Thy-Neighbor Protectionism",
            "Supply-Side Economics",
            "Structural Adjustment"
          ],
          "correct": 1,
          "explanation": "Beggar-Thy-Neighbor policies (such as the US Smoot-Hawley Tariff Act of 1930) involved competitive protectionist barriers and currency devaluations that deepened the Great Depression."
        }
      ]
    },
    {
      "checkpointId": "contempo-cp3",
      "subject": "SOCSCI3",
      "week": "Module 3",
      "questions": [
        {
          "id": "q-ct3-1",
          "type": "multiple",
          "question": "Which school of thought on globalization claims that the world is completely borderless ('The World is Flat') and that the nation-state is becoming obsolete?",
          "options": [
            "The Skeptical School",
            "The Hyperglobalist (Globalist) School",
            "The Transformationalist School",
            "The Neo-Marxist School"
          ],
          "correct": 1,
          "explanation": "The Hyperglobalist School (championed by Kenichi Ohmae and Thomas Friedman) argues that global markets and technology have made the nation-state an obsolete, powerless transmission belt."
        },
        {
          "id": "q-ct3-2",
          "type": "multiple",
          "question": "What is the central argument of the Skeptical school (Paul Hirst & Grahame Thompson) regarding the global economy?",
          "options": [
            "The nation-state has completely dissolved",
            "Globalization is exaggerated; economic integration is primarily regional (trade blocs), and nation-states remain as powerful as ever",
            "A single one-world government will form by the year 2030",
            "Cultural differences between nations have completely vanished"
          ],
          "correct": 1,
          "explanation": "Skeptics argue that globalization is an ideological myth, that current trade levels are comparable to the pre-1914 Gold Standard, that economic activity is regionalized, and that nation-states remain supreme."
        },
        {
          "id": "q-ct3-3",
          "type": "multiple",
          "question": "How does the Transformationalist school (David Held & Anthony Giddens) understand the trajectory of globalization?",
          "options": [
            "It has a fixed, inevitable end-state of universal harmony",
            "It is completely non-existent and a mere fantasy of journalists",
            "It is an unprecedented, complex, and non-linear dynamic that transforms and restructures state power without eliminating it",
            "It is solely an American corporate conspiracy"
          ],
          "correct": 2,
          "explanation": "Transformationalists argue globalization has no predetermined end-state; it is a contradictory, non-linear force that recalibrates and restructures state authority rather than simply destroying it."
        },
        {
          "id": "q-ct3-4",
          "type": "multiple",
          "question": "In Immanuel Wallerstein's World-Systems Theory, which stratum acts as a vital geopolitical buffer zone between the wealthy Core and the exploited Periphery?",
          "options": [
            "The Fourth World",
            "The Semi-Periphery",
            "The Second World",
            "The Outer Ring"
          ],
          "correct": 1,
          "explanation": "The Semi-Periphery (nations like Brazil, Russia, India, China, South Africa, and Mexico) serves as a buffer zone that prevents direct bipolar class conflict between core and periphery."
        },
        {
          "id": "q-ct3-5",
          "type": "multiple",
          "question": "How does Dependency Theory (Raúl Prebisch, Andre Gunder Frank) explain the persistent poverty of developing nations?",
          "options": [
            "Developing nations have lazy populations that refuse to adopt industrial values",
            "Developing nations lack natural resources and fertile agricultural land",
            "Underdevelopment is actively generated because resources flow from the periphery to the wealthy core through unequal terms of trade",
            "Developing nations suffer from excessive government spending on space exploration"
          ],
          "correct": 2,
          "explanation": "Dependency Theory argues that underdevelopment is not a natural starting point, but the structural outcome of core-periphery exploitation and unequal exchange ('The Development of Underdevelopment')."
        },
        {
          "id": "q-ct3-6",
          "type": "multiple",
          "question": "Who authored the 5 universal stages of economic growth in Modernization Theory (1960)?",
          "options": [
            "Walt Rostow",
            "Immanuel Wallerstein",
            "Karl Marx",
            "John Maynard Keynes"
          ],
          "correct": 0,
          "explanation": "Walt Rostow proposed the five stages of economic growth: Traditional Society, Preconditions for Takeoff, Takeoff, Drive to Maturity, and Age of High Mass Consumption."
        },
        {
          "id": "q-ct3-7",
          "type": "multiple",
          "question": "What term coined by George Ritzer describes how the operating principles of fast-food restaurants come to dominate sectors of global society?",
          "options": [
            "Americanization",
            "McDonaldization",
            "Disneyization",
            "Fordism"
          ],
          "correct": 1,
          "explanation": "George Ritzer coined 'McDonaldization' (1993) to describe society's rationalization through efficiency, calculability, predictability, and control via non-human technology."
        },
        {
          "id": "q-ct3-8",
          "type": "multiple",
          "question": "Which of the following is NOT one of George Ritzer's four pillars of McDonaldization?",
          "options": [
            "Efficiency",
            "Calculability",
            "Affordability",
            "Predictability"
          ],
          "correct": 2,
          "explanation": "The 4 pillars are Efficiency, Calculability, Predictability, and Control. 'Affordability' is an exam distractor (Calculability emphasizes quantifiable speed and volume, not price)."
        },
        {
          "id": "q-ct3-9",
          "type": "multiple",
          "question": "What is Roland Robertson's concept of 'Glocalization'?",
          "options": [
            "The complete wiping out of local traditions by Western pop music",
            "The blending and mutual adaptation of global and local cultures to produce hybrid cultural forms",
            "The nationalization of all multinational companies by local governments",
            "The prohibition of global trade to protect village markets"
          ],
          "correct": 1,
          "explanation": "Glocalization (global + local) describes how global products and ideas are re-interpreted and hybridized with local traditions (e.g., McSpaghetti or Jollibee overseas menu adaptations)."
        },
        {
          "id": "q-ct3-10",
          "type": "multiple",
          "question": "In 'The Clash of Civilizations', what did Samuel Huntington predict would be the primary source of global conflict in the post-Cold War world?",
          "options": [
            "Class warfare between industrial workers and capitalists",
            "Territorial disputes over deep-sea mineral rights",
            "Cultural and religious differences along civilizational fault lines",
            "Competition over orbital satellite frequencies"
          ],
          "correct": 2,
          "explanation": "Samuel Huntington argued that cultural and religious fault lines between civilizations (Western, Islamic, Sinic, Hindu, etc.) would be the battle lines of the future."
        }
      ]
    },
    {
      "checkpointId": "contempo-cp4",
      "subject": "SOCSCI3",
      "week": "Module 4",
      "questions": [
        {
          "id": "q-ct4-1",
          "type": "multiple",
          "question": "Who revolutionized global logistics in 1956 by patenting and launching the standardized intermodal shipping container?",
          "options": [
            "Ferdinand de Lesseps",
            "Malcolm McLean",
            "Henry Ford",
            "Andrew Carnegie"
          ],
          "correct": 1,
          "explanation": "American transport entrepreneur Malcolm McLean introduced standardized container shipping in 1956, slashing loading costs and transit turnaround times."
        },
        {
          "id": "q-ct4-2",
          "type": "multiple",
          "question": "By approximately how much did the introduction of containerization reduce maritime freight handling costs compared to traditional break-bulk shipping?",
          "options": [
            "By about 10%",
            "By about 30%",
            "By about 60%",
            "By over 90%"
          ],
          "correct": 3,
          "explanation": "Containerization reduced freight handling and port stevedoring costs by over 90%, transforming maritime shipping into an ultra-low-cost global supply line."
        },
        {
          "id": "q-ct4-3",
          "type": "multiple",
          "question": "What is the primary physical conduit carrying over 99% of all international internet data and interbank communications across continents?",
          "options": [
            "Low-Earth orbit satellites (Starlink)",
            "Submarine fiber-optic cables",
            "High-frequency radio transmission towers",
            "Microwave relay stations"
          ],
          "correct": 1,
          "explanation": "Submarine fiber-optic cables on the ocean floor carry over 99% of all transoceanic internet traffic due to their immense bandwidth, reliability, and low latency."
        },
        {
          "id": "q-ct4-4",
          "type": "multiple",
          "question": "What international secure financial messaging network connects over 11,000 banks worldwide to execute cross-border wire transfers?",
          "options": [
            "NASDAQ",
            "SWIFT",
            "INTERPOL",
            "OPEC"
          ],
          "correct": 1,
          "explanation": "SWIFT (Society for Worldwide Interbank Financial Telecommunication) is the global messaging backbone connecting thousands of banking institutions across 200+ countries."
        },
        {
          "id": "q-ct4-5",
          "type": "multiple",
          "question": "How much annual revenue does the Philippine IT-BPM (Business Process Outsourcing) industry generate as a premier destination for offshore services?",
          "options": [
            "Around $2 billion",
            "Around $10 billion",
            "Over $35 billion",
            "Over $100 billion"
          ],
          "correct": 2,
          "explanation": "The Philippine IT-BPM sector generates over $35 billion annually, directly employing over 1.7 million professionals and serving as a massive economic pillar alongside India."
        },
        {
          "id": "q-ct4-6",
          "type": "multiple",
          "question": "What is the annual macroeconomic value of remittances sent by Overseas Filipino Workers (OFWs) back to the Philippines?",
          "options": [
            "Over $37 billion (roughly 9% of Philippine GDP)",
            "Around $5 billion (roughly 1% of Philippine GDP)",
            "Around $12 billion (roughly 3% of Philippine GDP)",
            "Over $80 billion (roughly 25% of Philippine GDP)"
          ],
          "correct": 0,
          "explanation": "Annual OFW cash remittances exceed $37 billion, contributing approximately 9% of Philippine GDP, providing vital foreign exchange reserves and driving domestic consumer spending."
        },
        {
          "id": "q-ct4-7",
          "type": "multiple",
          "question": "What is the 'Democratic Deficit' commonly cited in critiques of global governance?",
          "options": [
            "Democracies have higher government debt than dictatorships",
            "International bodies (IMF, WTO, World Bank) make sweeping economic decisions without direct democratic voting or accountability to the citizens affected",
            "Elections in European countries are held too frequently",
            "Citizens are losing interest in voting for local municipal councilors"
          ],
          "correct": 1,
          "explanation": "The Democratic Deficit refers to the reality that technocrats and unelected officials in global institutions (IMF, WTO, World Bank) make crucial planetary policy decisions without direct electoral accountability."
        },
        {
          "id": "q-ct4-8",
          "type": "multiple",
          "question": "Which of the following is a classic example of a 'Problem Without Passports' (transboundary crisis)?",
          "options": [
            "A localized city zoning dispute",
            "Anthropogenic climate change and global carbon emissions",
            "A municipal speed limit regulation",
            "A domestic property inheritance lawsuit"
          ],
          "correct": 1,
          "explanation": "Problems Without Passports are transboundary crises (climate change, pandemics, international cyber-attacks) that cross borders effortlessly and cannot be resolved by any single nation-state."
        },
        {
          "id": "q-ct4-9",
          "type": "multiple",
          "question": "What term describes the post-2008 deceleration and retreat of global trade integration and supply chain fragmentation?",
          "options": [
            "Hyperglobalization",
            "Deglobalization (or 'Slowbalization')",
            "Global Convergence",
            "Multilateral Expansion"
          ],
          "correct": 1,
          "explanation": "Deglobalization (or Slowbalization) describes the plateauing and retreat of global trade and investment flows following the 2008 financial crisis, protectionist trade wars, and COVID-19."
        },
        {
          "id": "q-ct4-10",
          "type": "multiple",
          "question": "What is the strategic corporate practice of moving supply chains to geographically close or politically friendly allied nations called?",
          "options": [
            "Offshoring",
            "Nearshoring / Friendshoring",
            "Import Substitution",
            "Mercantilism"
          ],
          "correct": 1,
          "explanation": "Nearshoring and friendshoring involve relocating production chains to neighboring countries or geopolitical allies to protect against trade wars, geopolitical conflict, and logistical shocks."
        }
      ]
    }
  ],
  "glossaries": {
    "AR101": [
      {
        "term": "ALU",
        "expansion": "Arithmetic and Logic Unit",
        "purpose": "Executes all high-speed elementary arithmetic (addition, subtraction, multiplication) and Boolean logic operations (AND, OR, NOT, XOR) inside the CPU.",
        "category": "CPU Hardware",
        "week": "Week 2, 7"
      },
      {
        "term": "CU",
        "expansion": "Control Unit",
        "purpose": "Directs, coordinates, and synchronizes all internal machine operations by fetching, decoding instructions, and issuing timing/control signals.",
        "category": "CPU Hardware",
        "week": "Week 2, 3"
      },
      {
        "term": "CPU",
        "expansion": "Central Processing Unit",
        "purpose": "The primary computational engine of the computer (combining the ALU and CU) operating roughly 10 times faster than main memory.",
        "category": "CPU Hardware",
        "week": "Week 2"
      },
      {
        "term": "ISA",
        "expansion": "Instruction Set Architecture",
        "purpose": "The abstract programmer-visible interface of the processor defining supported machine instructions, data types, registers, and addressing modes.",
        "category": "Architecture",
        "week": "Week 2"
      },
      {
        "term": "DIMM",
        "expansion": "Dual In-Line Memory Module",
        "purpose": "Physical printed circuit board holding dynamic RAM silicon chips that plugs directly into motherboard memory slots to supply primary storage.",
        "category": "Physical Memory",
        "week": "Week 2, 4"
      },
      {
        "term": "PC",
        "expansion": "Program Counter",
        "purpose": "Holds the memory address of the next instruction to be fetched; automatically incremented during the instruction fetch phase.",
        "category": "Internal Registers",
        "week": "Week 3"
      },
      {
        "term": "MAR",
        "expansion": "Memory Address Register",
        "purpose": "Holds the physical/effective memory address currently placed onto the address bus during memory Read and Write operations.",
        "category": "Internal Registers",
        "week": "Week 3"
      },
      {
        "term": "MDR",
        "expansion": "Memory Data Register",
        "purpose": "Buffers the data word retrieved from memory during a Read cycle or stages the data word to be written into memory during a Write cycle.",
        "category": "Internal Registers",
        "week": "Week 3"
      },
      {
        "term": "IR",
        "expansion": "Instruction Register",
        "purpose": "Stores the current binary instruction word while its opcode and addressing fields are decoded and executed by the Control Unit.",
        "category": "Internal Registers",
        "week": "Week 3"
      },
      {
        "term": "ACC",
        "expansion": "Accumulator Register (AX)",
        "purpose": "Default central register implicitly used to hold operands and calculation results in 1-address and 0-address machine architectures.",
        "category": "Registers",
        "week": "Week 3, 4"
      },
      {
        "term": "EU",
        "expansion": "Execution Unit",
        "purpose": "The asynchronous processing half of the 8086 that contains the ALU, general registers, and flags; decodes and executes instructions.",
        "category": "8086 Architecture",
        "week": "Week 4"
      },
      {
        "term": "BIU",
        "expansion": "Bus Interface Unit",
        "purpose": "The bus management half of the 8086 that interfaces with system buses, generates 20-bit physical addresses, and manages the prefetch queue.",
        "category": "8086 Architecture",
        "week": "Week 4"
      },
      {
        "term": "IP",
        "expansion": "Instruction Pointer",
        "purpose": "16-bit register holding the offset address of the next instruction code byte to be fetched from the Code Segment (CS).",
        "category": "Pointers",
        "week": "Week 4"
      },
      {
        "term": "PSW",
        "expansion": "Processor Status Word (Flags Register)",
        "purpose": "16-bit register containing 6 condition/status flags (CF, PF, AF, ZF, SF, OF) and 3 control flags (TF, IF, DF) indicating processor status.",
        "category": "Flags",
        "week": "Week 4"
      },
      {
        "term": "BHE#",
        "expansion": "Bus High Enable (Active Low)",
        "purpose": "Active-low control pin that enables the Odd Memory Bank (data lines D8-D15), allowing 16-bit word transfers in a single clock cycle.",
        "category": "Bus Signals",
        "week": "Week 4"
      },
      {
        "term": "CF",
        "expansion": "Carry Flag (Bit 0)",
        "purpose": "Status flag set to 1 if an arithmetic operation generates a carry out of or borrow into the most significant bit (MSB).",
        "category": "Status Flags",
        "week": "Week 4"
      },
      {
        "term": "PF",
        "expansion": "Parity Flag (Bit 2)",
        "purpose": "Status flag set to 1 if the lowest 8 bits of a calculation result contain an even number of set bits (Even Parity).",
        "category": "Status Flags",
        "week": "Week 4"
      },
      {
        "term": "AF",
        "expansion": "Auxiliary Carry Flag (Bit 4)",
        "purpose": "Status flag set to 1 if a carry/borrow occurs between bit 3 and bit 4 (half-carry), essential for Binary Coded Decimal (BCD) adjustments.",
        "category": "Status Flags",
        "week": "Week 4"
      },
      {
        "term": "ZF",
        "expansion": "Zero Flag (Bit 6)",
        "purpose": "Status flag set to 1 if the mathematical or logical result of an instruction equals exactly zero (0000H).",
        "category": "Status Flags",
        "week": "Week 4"
      },
      {
        "term": "SF",
        "expansion": "Sign Flag (Bit 7)",
        "purpose": "Status flag set to 1 if the high-order bit (MSB) of the result is 1, indicating a negative signed integer value.",
        "category": "Status Flags",
        "week": "Week 4"
      },
      {
        "term": "OF",
        "expansion": "Overflow Flag (Bit 11)",
        "purpose": "Status flag set to 1 if a signed calculation yields a value that exceeds the signed storage capacity (magnitude overflow).",
        "category": "Status Flags",
        "week": "Week 4"
      },
      {
        "term": "TF",
        "expansion": "Trap Flag (Bit 8)",
        "purpose": "Control flag that places the microprocessor into single-step execution mode for interactive program debugging and tracing.",
        "category": "Control Flags",
        "week": "Week 4"
      },
      {
        "term": "IF",
        "expansion": "Interrupt Enable Flag (Bit 9)",
        "purpose": "Control flag that enables (1) or masks/disables (0) external hardware interrupt requests received on the INTR line.",
        "category": "Control Flags",
        "week": "Week 4"
      },
      {
        "term": "DF",
        "expansion": "Direction Flag (Bit 10)",
        "purpose": "Control flag determining string processing direction: 0 = auto-increment (forward), 1 = auto-decrement (backward).",
        "category": "Control Flags",
        "week": "Week 4"
      },
      {
        "term": "PA",
        "expansion": "Physical Address",
        "purpose": "The actual 20-bit address placed on memory bus wires; calculated using formula: PA = (Segment Base x 10H) + Offset.",
        "category": "Memory Addressing",
        "week": "Week 4"
      },
      {
        "term": "EA",
        "expansion": "Effective Address",
        "purpose": "The 16-bit offset address of an operand inside a segment before combining with the segment base address.",
        "category": "Memory Addressing",
        "week": "Week 4, 5"
      },
      {
        "term": "CS",
        "expansion": "Code Segment Register",
        "purpose": "16-bit segment register holding the base address of the 64KB memory segment containing executable program instructions.",
        "category": "Segment Registers",
        "week": "Week 5"
      },
      {
        "term": "DS",
        "expansion": "Data Segment Register",
        "purpose": "16-bit segment register holding the base address of the 64KB memory segment containing program variables and static data.",
        "category": "Segment Registers",
        "week": "Week 5"
      },
      {
        "term": "SS",
        "expansion": "Stack Segment Register",
        "purpose": "16-bit segment register holding the base address of the 64KB memory segment reserved for the LIFO runtime stack.",
        "category": "Segment Registers",
        "week": "Week 5"
      },
      {
        "term": "ES",
        "expansion": "Extra Segment Register",
        "purpose": "16-bit segment register holding the base address of a secondary data segment, used primarily by string destination instructions.",
        "category": "Segment Registers",
        "week": "Week 5"
      },
      {
        "term": "SP",
        "expansion": "Stack Pointer Register",
        "purpose": "16-bit register holding the offset to the current Top of Stack (TOS); decremented by 2 on PUSH, incremented by 2 on POP.",
        "category": "Stack Registers",
        "week": "Week 5"
      },
      {
        "term": "BP",
        "expansion": "Base Pointer Register",
        "purpose": "16-bit register primarily used to access subroutine parameters and local variables on the stack; defaults to Stack Segment (SS).",
        "category": "Stack Registers",
        "week": "Week 5"
      },
      {
        "term": "SI",
        "expansion": "Source Index Register",
        "purpose": "16-bit index register holding memory offsets for data operands; commonly points to source strings/arrays (defaults to DS).",
        "category": "Index Registers",
        "week": "Week 5"
      },
      {
        "term": "DI",
        "expansion": "Destination Index Register",
        "purpose": "16-bit index register holding memory offsets; commonly points to destination strings/arrays (defaults to ES in string ops).",
        "category": "Index Registers",
        "week": "Week 5"
      },
      {
        "term": "TOS",
        "expansion": "Top of Stack",
        "purpose": "The lowest occupied memory location of the active stack; calculated as physical address: TOS = (SS x 10H) + SP.",
        "category": "Stack Memory",
        "week": "Week 5"
      },
      {
        "term": "LIFO",
        "expansion": "Last In, First Out",
        "purpose": "The fundamental data storage ordering mechanism governing stack memory: the last item pushed is the first item popped.",
        "category": "Data Structures",
        "week": "Week 5"
      },
      {
        "term": "LEA",
        "expansion": "Load Effective Address",
        "purpose": "Computes and loads the 16-bit offset address of the source operand into the destination register (does NOT fetch data stored in memory).",
        "category": "Data Instructions",
        "week": "Week 6"
      },
      {
        "term": "XLAT",
        "expansion": "Translate Byte",
        "purpose": "Performs fast table lookup: replaces the byte in AL with the byte at memory address [BX + AL].",
        "category": "Data Instructions",
        "week": "Week 6"
      },
      {
        "term": "LAHF",
        "expansion": "Load AH from Flags",
        "purpose": "Copies the low-order byte of the Flags register (SF, ZF, AF, PF, CF) directly into general register AH.",
        "category": "Flag Instructions",
        "week": "Week 6"
      },
      {
        "term": "SAHF",
        "expansion": "Store AH into Flags",
        "purpose": "Overwrites the low-order byte of the Flags register with the bits stored in general register AH.",
        "category": "Flag Instructions",
        "week": "Week 6"
      },
      {
        "term": "PUSHA",
        "expansion": "Push All General Registers",
        "purpose": "Pushes all 8 general-purpose 16-bit registers onto the stack in sequence: AX, CX, DX, BX, original SP, BP, SI, DI.",
        "category": "Stack Instructions",
        "week": "Week 6"
      },
      {
        "term": "POPA",
        "expansion": "Pop All General Registers",
        "purpose": "Restores the 8 general-purpose registers from the stack in reverse order, discarding the stored SP value.",
        "category": "Stack Instructions",
        "week": "Week 6"
      },
      {
        "term": "PUSHF",
        "expansion": "Push Flags Register",
        "purpose": "Pushes the entire 16-bit Processor Status Word (PSW / Flags register) onto the Top of Stack.",
        "category": "Flag Instructions",
        "week": "Week 6"
      },
      {
        "term": "POPF",
        "expansion": "Pop Flags Register",
        "purpose": "Pops the 16-bit word from the Top of Stack directly into the Processor Status Word (PSW / Flags register).",
        "category": "Flag Instructions",
        "week": "Week 6"
      },
      {
        "term": "CLA",
        "expansion": "Carry-Lookahead Adder",
        "purpose": "Fast parallel adder circuit that computes all carry bits simultaneously in 3 gate delays using Generate (Gi) and Propagate (Pi) functions.",
        "category": "Fast Adders",
        "week": "Week 7"
      },
      {
        "term": "Gi",
        "expansion": "Generate Function (xi * yi)",
        "purpose": "Boolean term that generates a carry bit internally whenever both input operand bits are 1, regardless of input carry.",
        "category": "Fast Adders",
        "week": "Week 7"
      },
      {
        "term": "Pi",
        "expansion": "Propagate Function (xi + yi)",
        "purpose": "Boolean term that propagates an incoming carry bit through stage i to the next stage if either operand bit is 1.",
        "category": "Fast Adders",
        "week": "Week 7"
      }
    ],
    "SPI101": [
      {
        "term": "ACM",
        "expansion": "Association for Computing Machinery",
        "purpose": "World's largest educational and scientific computing society, co-author of the Software Engineering Code of Ethics.",
        "category": "Organizations",
        "week": "Week 3"
      },
      {
        "term": "IEEE-CS",
        "expansion": "Institute of Electrical and Electronics Engineers Computer Society",
        "purpose": "Professional engineering organization establishing technological standards and joint computing ethical canons.",
        "category": "Organizations",
        "week": "Week 3"
      },
      {
        "term": "AITP",
        "expansion": "Association of Information Technology Professionals",
        "purpose": "IT leadership association defining professional standards and member obligations to employers, society, and country.",
        "category": "Organizations",
        "week": "Week 3"
      },
      {
        "term": "BDFL",
        "expansion": "Benevolent Dictator For Life",
        "purpose": "Title historically given to Guido van Rossum, retaining final decision-making power over the Python language specification until 2018.",
        "category": "Open Source",
        "week": "Week 1"
      },
      {
        "term": "DPA",
        "expansion": "Data Privacy Act of 2012 (Republic Act No. 10173)",
        "purpose": "Philippine law protecting individual personal information in information and communications systems across private and government sectors.",
        "category": "Philippine Law",
        "week": "Week 5"
      },
      {
        "term": "PIC",
        "expansion": "Personal Information Controller",
        "purpose": "An individual or organization who controls the collection, holding, processing, or use of personal information.",
        "category": "Privacy Roles",
        "week": "Week 5"
      },
      {
        "term": "PIP",
        "expansion": "Personal Information Processor",
        "purpose": "Any natural or juridical person to whom a personal information controller may outsource the processing of personal data.",
        "category": "Privacy Roles",
        "week": "Week 5"
      },
      {
        "term": "NPC",
        "expansion": "National Privacy Commission",
        "purpose": "Philippine regulatory body administering and enforcing the Data Privacy Act (RA 10173) and monitoring compliance.",
        "category": "Government",
        "week": "Week 5"
      },
      {
        "term": "AMLA",
        "expansion": "Anti-Money Laundering Act (Republic Act No. 9160)",
        "purpose": "Philippine law requiring covered institutions to report cash transactions >= 300,000 PHP to the AMLC as an exception to bank secrecy.",
        "category": "Philippine Law",
        "week": "Week 5"
      },
      {
        "term": "AMLC",
        "expansion": "Anti-Money Laundering Council",
        "purpose": "Financial intelligence unit of the Philippines investigating money laundering offenses and financial crimes.",
        "category": "Government",
        "week": "Week 5"
      },
      {
        "term": "SALN",
        "expansion": "Statement of Assets, Liabilities, and Net Worth",
        "purpose": "Public document required under RA 3019 (Anti-Graft Act) to promote transparency and deter corruption among government officials.",
        "category": "Public Ethics",
        "week": "Week 5"
      },
      {
        "term": "RA 4200",
        "expansion": "Anti-Wiretapping Act of 1965",
        "purpose": "Philippine law prohibiting the unauthorized recording of private conversations without the consent of all parties.",
        "category": "Philippine Law",
        "week": "Week 5"
      },
      {
        "term": "RA 8792",
        "expansion": "Electronic Commerce Act of 2000",
        "purpose": "Landmark law granting legal recognition to electronic data messages, digital signatures, and penalizing computer hacking/viruses.",
        "category": "Philippine Law",
        "week": "Week 2, 5"
      },
      {
        "term": "RA 10175",
        "expansion": "Cybercrime Prevention Act of 2012",
        "purpose": "Comprehensive criminal law defining offenses against confidentiality, integrity, availability, and computer-related forgery.",
        "category": "Philippine Law",
        "week": "Week 6"
      },
      {
        "term": "GPL",
        "expansion": "GNU General Public License",
        "purpose": "Free copyleft license guaranteeing end users the freedom to run, study, share, and modify software source code.",
        "category": "Licensing",
        "week": "Week 1"
      }
    ],
    "MS101": [
      {
        "term": "GCD",
        "expansion": "Greatest Common Divisor",
        "purpose": "The largest positive integer that divides two or more integers without leaving a remainder; calculated via Euclidean Algorithm.",
        "category": "Number Theory",
        "week": "Week 5"
      },
      {
        "term": "LCM",
        "expansion": "Least Common Multiple",
        "purpose": "The smallest positive integer divisible by both integers a and b; related by formula: gcd(a, b) * lcm(a, b) = a * b.",
        "category": "Number Theory",
        "week": "Week 5"
      },
      {
        "term": "Tautology",
        "expansion": "Logically Always True Proposition",
        "purpose": "A compound proposition that evaluates to True under every possible truth assignment of its propositional variables.",
        "category": "Propositional Logic",
        "week": "Week 2"
      },
      {
        "term": "Contradiction",
        "expansion": "Logically Always False Proposition",
        "purpose": "A compound proposition that evaluates to False under every possible truth assignment of its propositional variables.",
        "category": "Propositional Logic",
        "week": "Week 2"
      },
      {
        "term": "Contingency",
        "expansion": "Conditionally Variable Proposition",
        "purpose": "A compound proposition that is neither a tautology nor a contradiction (True in some cases, False in others).",
        "category": "Propositional Logic",
        "week": "Week 2"
      },
      {
        "term": "Cardinality",
        "expansion": "Set Size (|A|)",
        "purpose": "The count of distinct, unique elements contained within a finite mathematical set.",
        "category": "Set Theory",
        "week": "Week 3"
      },
      {
        "term": "Power Set",
        "expansion": "Set of All Subsets (P(A))",
        "purpose": "The collection of all possible subsets of set A, including the empty set and A itself; total elements = 2^|A|.",
        "category": "Set Theory",
        "week": "Week 3"
      },
      {
        "term": "Universal Quantifier",
        "expansion": "Symbol ∀ ('For All')",
        "purpose": "Predicate logic operator asserting that a predicate statement P(x) is true for every single element x in the domain.",
        "category": "Predicate Logic",
        "week": "Week 4"
      },
      {
        "term": "Existential Quantifier",
        "expansion": "Symbol ∃ ('There Exists')",
        "purpose": "Predicate logic operator asserting that P(x) is true for at least one element x in the specified domain.",
        "category": "Predicate Logic",
        "week": "Week 4"
      },
      {
        "term": "Division Algorithm",
        "expansion": "a = dq + r (0 ≤ r < d)",
        "purpose": "Fundamental number theory theorem guaranteeing unique integer quotient q and remainder r for any dividend a and divisor d.",
        "category": "Number Theory",
        "week": "Week 5"
      }
    ],
    "IPT102": [
      {
        "term": "MVC",
        "expansion": "Model - View - Controller",
        "purpose": "Architectural pattern separating business logic (Model), UI presentation (View), and HTTP request orchestration (Controller).",
        "category": "Architecture",
        "week": "Week 3"
      },
      {
        "term": "ASP.NET Core",
        "expansion": "Active Server Pages .NET Core",
        "purpose": "Open-source, cross-platform, high-performance web framework developed by Microsoft for cloud-enabled modern web applications.",
        "category": "Web Framework",
        "week": "Week 2"
      },
      {
        "term": "CLR",
        "expansion": "Common Language Runtime",
        "purpose": "The virtual machine execution engine of the .NET platform that handles JIT compilation, memory garbage collection, and thread safety.",
        "category": ".NET Runtime",
        "week": "Week 2"
      },
      {
        "term": "CLI",
        "expansion": "Common Language Infrastructure / Command-Line Interface",
        "purpose": "Open technical specification enabling applications written in multiple high-level languages to execute on any compatible architecture.",
        "category": ".NET Standard",
        "week": "Week 2"
      },
      {
        "term": "CSHTML",
        "expansion": "C-Sharp HTML Template File",
        "purpose": "File format combining HTML markup with server-side C# code parsed and executed on the web server using Razor syntax.",
        "category": "Razor Views",
        "week": "Week 5"
      },
      {
        "term": "POCO",
        "expansion": "Plain Old CLR Object",
        "purpose": "Clean C# class containing properties and data models without inheriting from framework-specific base classes or interfaces.",
        "category": "Data Models",
        "week": "Week 4"
      },
      {
        "term": "DI",
        "expansion": "Dependency Injection",
        "purpose": "Software engineering technique in ASP.NET Core where dependencies are passed into classes via constructors rather than hardcoded.",
        "category": "Architecture",
        "week": "Week 3"
      },
      {
        "term": "REPL",
        "expansion": "Read - Eval - Print Loop",
        "purpose": "Interactive programming environment (such as python interactive prompt) that executes statements line-by-line and returns immediate output.",
        "category": "Python Tools",
        "week": "Week 1"
      },
      {
        "term": "HtmlHelper",
        "expansion": "ASP.NET MVC View HTML Helper",
        "purpose": "C# extension class providing methods like @Html.TextBox() and @Html.ActionLink() to generate standard HTML controls cleanly.",
        "category": "Razor Views",
        "week": "Week 6"
      }
    ],
    "SIA101": [
      {
        "term": "SIA",
        "expansion": "Systems Integration and Architecture",
        "purpose": "The discipline of connecting disparate subsystem components into a cohesive enterprise system and designing its formal conceptual model.",
        "category": "Architecture",
        "week": "Week 2"
      },
      {
        "term": "EAI",
        "expansion": "Enterprise Application Integration",
        "purpose": "Integration framework facilitating communication, data synchronization, and process automation between heterogeneous enterprise systems.",
        "category": "Integration",
        "week": "Week 2"
      },
      {
        "term": "EDI",
        "expansion": "Electronic Data Interchange",
        "purpose": "Automated computer-to-computer exchange of standard business documents (invoices, purchase orders) between trading partners.",
        "category": "Integration",
        "week": "Week 2"
      },
      {
        "term": "UN/EDIFACT",
        "expansion": "United Nations EDI for Administration, Commerce and Transport",
        "purpose": "International standard set of syntax rules and structured directories for electronic data interchange across global trade.",
        "category": "Standards",
        "week": "Week 2"
      },
      {
        "term": "BPMN",
        "expansion": "Business Process Model and Notation",
        "purpose": "Standardized graphical representation for mapping business process workflows, governed by the Object Management Group (OMG).",
        "category": "Process Modeling",
        "week": "Week 3"
      },
      {
        "term": "DFD",
        "expansion": "Data Flow Diagram",
        "purpose": "Graphical model illustrating the flow and transformation of information from external entities through processes and data stores.",
        "category": "Process Modeling",
        "week": "Week 3"
      },
      {
        "term": "UML",
        "expansion": "Unified Modeling Language",
        "purpose": "General-purpose visual modeling standard in software engineering for specifying, visualizing, and documenting system artifacts.",
        "category": "Modeling",
        "week": "Week 3"
      },
      {
        "term": "IDEF0",
        "expansion": "Integration Definition for Function Modeling",
        "purpose": "Structured modeling technique analyzing functions via ICOM cells (Inputs, Controls, Outputs, Mechanisms).",
        "category": "Process Modeling",
        "week": "Week 3"
      },
      {
        "term": "PMI",
        "expansion": "Project Management Institute",
        "purpose": "Global professional organization administering the PMP certification and publishing the standard PMBOK Guide.",
        "category": "Project Management",
        "week": "Week 4"
      },
      {
        "term": "PMLC",
        "expansion": "Project Management Life Cycle",
        "purpose": "The 5 universal project management phases: 1. Initiation, 2. Planning, 3. Execution, 4. Monitoring & Controlling, 5. Project Closure.",
        "category": "Project Management",
        "week": "Week 4"
      },
      {
        "term": "WBS",
        "expansion": "Work Breakdown Structure",
        "purpose": "Hierarchical, deliverable-oriented decomposition of total project scope into manageable, assignable work packages.",
        "category": "Project Management",
        "week": "Week 4"
      },
      {
        "term": "SMART",
        "expansion": "Specific, Measurable, Actionable, Realistic, Timebound",
        "purpose": "Goal-setting methodology ensuring operational project objectives are quantifiable and attainable.",
        "category": "Project Management",
        "week": "Week 4"
      },
      {
        "term": "RFP",
        "expansion": "Request for Proposal",
        "purpose": "Formal procurement solicitation document sent to vendors outlining system requirements and bidding terms.",
        "category": "Procurement",
        "week": "Week 6"
      },
      {
        "term": "RFQ",
        "expansion": "Request for Quotation",
        "purpose": "Procurement document soliciting itemized price quotations for clearly defined commodities and standard hardware.",
        "category": "Procurement",
        "week": "Week 6"
      }
    ],
    "RIZAL": [
      {
        "term": "Republic Act No. 1425",
        "expansion": "The Rizal Law",
        "purpose": "Philippine law enacted on June 12, 1956 mandating the inclusion of courses on the life, works, and writings of Jose Rizal (especially unexpurgated Noli and Fili) in all school curricula.",
        "category": "Legislation",
        "week": "Module 1"
      },
      {
        "term": "Senate Bill No. 438",
        "expansion": "Original Rizal Bill",
        "purpose": "Legislative bill filed by Sen. Jose P. Laurel and authored by Sen. Claro M. Recto on April 17, 1956 that sparked fierce national debate with the Catholic Church.",
        "category": "Legislation",
        "week": "Module 1"
      },
      {
        "term": "House Bill No. 5564",
        "expansion": "House Counterpart of the Rizal Bill",
        "purpose": "The lower house bill that approved the Rizal law with 71 in favor, 9 against, and 2 abstentions.",
        "category": "Legislation",
        "week": "Module 1"
      },
      {
        "term": "Unexpurgated Edition",
        "expansion": "Edición Completa / Sin Censura",
        "purpose": "The complete, uncensored original text of Noli Me Tangere and El Filibusterismo mandated as basic textbooks for tertiary/collegiate degree programs.",
        "category": "Legislation",
        "week": "Module 1"
      },
      {
        "term": "Religious Exemption Clause",
        "expansion": "Sworn Statement Provision of RA 1425 Sec 1",
        "purpose": "Legal provision allowing students with conscientious religious objections to be exempted from reading the unexpurgated novels upon submitting an affidavit, without exempting them from the course.",
        "category": "Legislation",
        "week": "Module 1"
      },
      {
        "term": "The Sentinel",
        "expansion": "Official Organ of Catholic Action of Manila",
        "purpose": "Catholic newspaper that was transformed from a weekly into a daily publication to spearhead media opposition against the passage of the Rizal Bill in 1956.",
        "category": "Media",
        "week": "Module 1"
      },
      {
        "term": "Taft Commission",
        "expansion": "Philippine Commission (1901)",
        "purpose": "Colonial body headed by William Howard Taft that established the 4 criteria and officially chose Dr. José Rizal as the National Hero of the Philippines.",
        "category": "Historical Body",
        "week": "Module 1"
      },
      {
        "term": "Memorandum Order No. 246",
        "expansion": "FVR Rizal Law Enforcement Order (1994)",
        "purpose": "Executive order issued by President Fidel V. Ramos directing strict enforcement of and compliance with RA 1425 in all schools across the country.",
        "category": "Legislation",
        "week": "Module 1"
      },
      {
        "term": "Suez Canal",
        "expansion": "Maritime Waterway across Isthmus of Suez",
        "purpose": "103-mile canal engineered by Ferdinand de Lesseps and opened on Nov 17, 1869; cut travel time from Spain to Manila from over 3 months to 32 days, accelerating liberal ideas.",
        "category": "Geography",
        "week": "Module 2"
      },
      {
        "term": "Carlos María de la Torre",
        "expansion": "Liberal Governor-General of the Philippines (1869–1871)",
        "purpose": "First liberal governor-general who lived simply, abolished censorship, recognized free speech, and stimulated the secularization movement led by Fr. Jose Burgos.",
        "category": "Historical Figure",
        "week": "Module 2"
      },
      {
        "term": "GOMBURZA",
        "expansion": "Fathers Mariano Gomez, José Burgos, & Jacinto Zamora",
        "purpose": "Three secular Filipino priests executed by garrote in Bagumbayan on Feb 17, 1872 following the Cavite Mutiny; inspired Rizal's lifelong struggle and El Filibusterismo.",
        "category": "Martyrs",
        "week": "Module 2"
      },
      {
        "term": "Frailocracy",
        "expansion": "Frailocracia / Rule of the Friars",
        "purpose": "The dominant political, economic, and cultural supremacy of Spanish religious orders over municipal governments and colonial administration in the 19th-century Philippines.",
        "category": "Colonial System",
        "week": "Module 2"
      },
      {
        "term": "Polo y servicio",
        "expansion": "Spanish Colonial Forced Labor System",
        "purpose": "Compulsory uncompensated manual labor of 40 days per year imposed on native Filipino males aged 16 to 60 for community infrastructure.",
        "category": "Colonial Policy",
        "week": "Module 2"
      },
      {
        "term": "Bandala",
        "expansion": "Forced Agricultural Requisition System",
        "purpose": "Colonial practice of coercively buying agricultural produce from native farmers at nominal prices, often paying only with promissory notes.",
        "category": "Economic Policy",
        "week": "Module 2"
      },
      {
        "term": "Peninsulares",
        "expansion": "Spaniards Born in the Iberian Peninsula",
        "purpose": "The highest caste in the 19th-century colonial hierarchy, holding the supreme government offices, bishoprics, and judicial positions.",
        "category": "Social Class",
        "week": "Module 2"
      },
      {
        "term": "Insulares",
        "expansion": "Spaniards Born in the Philippines",
        "purpose": "Second tier of the colonial hierarchy; pure-blooded Spaniards born in the colony, derisively termed 'Filipinos' before the term came to include native brown people.",
        "category": "Social Class",
        "week": "Module 2"
      },
      {
        "term": "Principalia",
        "expansion": "Educated Native Elite & Landholders",
        "purpose": "The prominent native town aristocracy (mayors, cabezas, educated landholders) from which Dr. José Rizal's family originated.",
        "category": "Social Class",
        "week": "Module 2"
      },
      {
        "term": "Indios",
        "expansion": "Native Austronesian Filipinos",
        "purpose": "Derogatory term used by Spanish colonizers to designate native brown Filipinos, subjecting them to severe social and legal discrimination.",
        "category": "Social Class",
        "week": "Module 2"
      },
      {
        "term": "Guardia Civil",
        "expansion": "Spanish Paramilitary Constabulary Force",
        "purpose": "Armed police unit established to suppress bandits, but which became infamous for harassing, torturing, and murdering innocent Filipino civilians.",
        "category": "Military",
        "week": "Module 2"
      },
      {
        "term": "Fray Botod",
        "expansion": "Satirical Work by Graciano Lopez-Jaena",
        "purpose": "Famous literary critique portraying the big-bellied, immoral, and abusive Spanish friar, exposing religious hypocrisy in the colony.",
        "category": "Literature",
        "week": "Module 2"
      },
      {
        "term": "SS Salvadora",
        "expansion": "Spanish Passenger Steamer",
        "purpose": "The vessel José Rizal boarded on May 3, 1882 in Manila bound for Singapore at the start of his secret mission to Europe.",
        "category": "Maritime",
        "week": "Module 3"
      },
      {
        "term": "Djemnah",
        "expansion": "French Mail Steamer",
        "purpose": "The French ship Rizal boarded in Singapore on May 11, 1882 to traverse the Indian Ocean, Suez Canal, and Mediterranean to Marseilles.",
        "category": "Maritime",
        "week": "Module 3"
      },
      {
        "term": "Château d'If",
        "expansion": "Island Fortress Prison in Marseilles",
        "purpose": "Historic French prison visited by Rizal on June 12, 1882; famous setting where Edmond Dantès of The Count of Monte Cristo was incarcerated.",
        "category": "Historical Site",
        "week": "Module 3"
      },
      {
        "term": "Amor Patrio",
        "expansion": "Love of Country",
        "purpose": "Rizal's first nationalistic essay written abroad (Barcelona), published August 20, 1882 in Diarong Tagalog under pen-name Laong Laan.",
        "category": "Literature",
        "week": "Module 3"
      },
      {
        "term": "Laong Laan",
        "expansion": "Rizal's Literary Pen-Name",
        "purpose": "Tagalog pen-name meaning 'Ever Prepared' used by Rizal when publishing articles for Diarong Tagalog and La Solidaridad.",
        "category": "Biography",
        "week": "Module 3"
      },
      {
        "term": "Círculo Hispano-Filipino",
        "expansion": "Spanish-Filipino Student Society in Madrid",
        "purpose": "Organization of Filipino students and liberal Spaniards in Madrid where Rizal declaimed his poem 'Me Piden Versos' on New Year's Eve 1882.",
        "category": "Organization",
        "week": "Module 3"
      },
      {
        "term": "Sobresaliente",
        "expansion": "Excellent / Highest Academic Rating",
        "purpose": "The top distinction awarded to Dr. José Rizal upon earning his Licentiate in Philosophy and Letters from Universidad Central de Madrid in June 1885.",
        "category": "Academic",
        "week": "Module 3"
      },
      {
        "term": "Dr. Louis de Weckert",
        "expansion": "Foremost French Ophthalmologist (Paris)",
        "purpose": "Leading French eye specialist under whom Rizal served as a clinical assistant from October 1885 to February 1886 to master eye surgery.",
        "category": "Historical Figure",
        "week": "Module 4"
      },
      {
        "term": "Dr. Máximo Viola",
        "expansion": "Savior of Noli Me Tangere",
        "purpose": "Filipino physician from San Miguel, Bulacan who loaned Rizal ₱300 to print 2,000 copies of Noli Me Tangere in Berlin in March 1887.",
        "category": "Historical Figure",
        "week": "Module 4"
      },
      {
        "term": "Berliner Buchdruckerei-Actien-Gesellschaft",
        "expansion": "Printing Press of Noli Me Tangere",
        "purpose": "The Berlin printing establishment that charged ₱300 to print the first 2,000 copies of Noli Me Tangere, finished March 21, 1887.",
        "category": "Historical Site",
        "week": "Module 4"
      }
    ],
    "SOCSCI3": [
      {
        "term": "Globality",
        "expansion": "Social Condition of Global Interconnection",
        "purpose": "Manfred Steger's concept defining an omnipresent social state characterized by tight economic, political, and cultural interconnections.",
        "category": "Theory",
        "week": "Module 1"
      },
      {
        "term": "Time-Space Compression",
        "expansion": "Harvey's Spatial Acceleration Concept",
        "purpose": "David Harvey's concept explaining how communication and transportation technologies shrink geographic distance and speed up transactions.",
        "category": "Theory",
        "week": "Module 1"
      },
      {
        "term": "Time-Space Distanciation",
        "expansion": "Giddens' Transnational Social Relation Concept",
        "purpose": "Anthony Giddens' concept describing the stretching of social relations across geographical distances so remote events shape local realities.",
        "category": "Theory",
        "week": "Module 1"
      },
      {
        "term": "Solidity",
        "expansion": "Pre-Modern Heavy Metaphor of Matter",
        "purpose": "A metaphorical state characterized by fixed boundaries, physical barriers (Berlin Wall), and high spatial resistance to mobility.",
        "category": "Metaphor",
        "week": "Module 1"
      },
      {
        "term": "Liquidity",
        "expansion": "Zygmunt Bauman's Modern Fluid Metaphor",
        "purpose": "The condition where social phenomena, capital, and data become fluid, highly mobile, transient, and incapable of keeping a fixed shape.",
        "category": "Metaphor",
        "week": "Module 1"
      },
      {
        "term": "Gaseousness",
        "expansion": "Contemporary Hyper-Mobile Metaphor",
        "purpose": "The weightless state of globalization characterized by cloud computing, satellite wireless signals, ambient networks, and airborne risks.",
        "category": "Metaphor",
        "week": "Module 1"
      },
      {
        "term": "Ethnoscapes",
        "expansion": "Appadurai's Landscape of Shifting Persons",
        "purpose": "The flow of moving persons across borders—tourists, refugees, immigrants, and Overseas Filipino Workers (OFWs).",
        "category": "Global Scapes",
        "week": "Module 1"
      },
      {
        "term": "Technoscapes",
        "expansion": "Appadurai's Landscape of Technology",
        "purpose": "The rapid transit of high and low mechanical, digital, and computing technologies across previously impervious national borders.",
        "category": "Global Scapes",
        "week": "Module 1"
      },
      {
        "term": "Financescapes",
        "expansion": "Appadurai's Landscape of Global Capital",
        "purpose": "The hyper-accelerated movement of megabucks through international currency exchanges, stock markets, crypto, and remittances.",
        "category": "Global Scapes",
        "week": "Module 1"
      },
      {
        "term": "Mediascapes",
        "expansion": "Appadurai's Landscape of Image Production",
        "purpose": "The worldwide distribution of electronic capabilities to produce, broadcast, and consume visual narratives, films, and streaming media.",
        "category": "Global Scapes",
        "week": "Module 1"
      },
      {
        "term": "Ideoscapes",
        "expansion": "Appadurai's Landscape of Political Ideologies",
        "purpose": "Chains of political symbols, state values, and counter-ideologies (democracy, human rights, environmentalism) circulating globally.",
        "category": "Global Scapes",
        "week": "Module 1"
      },
      {
        "term": "Global Friction",
        "expansion": "Anna Tsing's Concept of Flow Impediment",
        "purpose": "The obstacles, resistance, regulations, and sticky institutions that slow down, redirect, or halt smooth global movement.",
        "category": "Theory",
        "week": "Module 1"
      },
      {
        "term": "Galleon Trade",
        "expansion": "Manila-Acapulco Maritime Trade (1565–1815)",
        "purpose": "The transpacific trading system connecting Asia, the Americas, and Europe, widely recognized as the birth of the first continuous global economy.",
        "category": "Economic History",
        "week": "Module 2"
      },
      {
        "term": "4IR / FIRe",
        "expansion": "The Fourth Industrial Revolution",
        "purpose": "Klaus Schwab's framework denoting the fusion of technologies blurring the lines between physical, digital, and biological spheres (AI, IoT, CPS).",
        "category": "Technology & Economy",
        "week": "Module 2"
      },
      {
        "term": "Cyber-Physical Systems (CPS)",
        "expansion": "Integrated Digital-Physical Mechanism",
        "purpose": "Engineered systems that orchestrate physical mechanisms through computer algorithms, sensors, and network actuation.",
        "category": "Technology",
        "week": "Module 2"
      },
      {
        "term": "Bretton Woods System",
        "expansion": "Post-WWII Global Financial Order (1944)",
        "purpose": "The international monetary framework established in New Hampshire in 1944 that created the IMF and World Bank and pegged the US Dollar to gold.",
        "category": "Financial Architecture",
        "week": "Module 2"
      },
      {
        "term": "Nixon Shock",
        "expansion": "August 15, 1971 Gold Window Closure",
        "purpose": "President Richard Nixon's unilateral termination of the US Dollar's gold convertibility, initiating modern floating fiat currencies.",
        "category": "Financial History",
        "week": "Module 2"
      },
      {
        "term": "World Trade Organization (WTO)",
        "expansion": "Global Intergovernmental Trade Body",
        "purpose": "Organization founded on January 1, 1995 to replace GATT, administering multilateral trade agreements and binding dispute resolution.",
        "category": "Institutions",
        "week": "Module 2"
      },
      {
        "term": "Washington Consensus",
        "expansion": "John Williamson's Neoliberal Prescriptions (1989)",
        "purpose": "Set of 10 market-oriented policy reforms (fiscal austerity, privatization, deregulation, free trade) imposed on developing nations.",
        "category": "Economic Policy",
        "week": "Module 2"
      },
      {
        "term": "Global Value Chain (GVC)",
        "expansion": "Geographically Fragmented Production Network",
        "purpose": "Production model where individual stages of manufacturing and assembly are distributed across multiple nations based on comparative advantage (~80% of trade).",
        "category": "Trade",
        "week": "Module 2"
      },
      {
        "term": "Hyperglobalist School",
        "expansion": "The Borderless World Paradigm",
        "purpose": "Theoretical camp (Ohmae, Friedman) claiming the nation-state is becoming obsolete in the face of unstoppable global market integration.",
        "category": "Theory",
        "week": "Module 3"
      },
      {
        "term": "Skeptical School",
        "expansion": "The Regionalization & Strong State Paradigm",
        "purpose": "Theoretical camp (Hirst & Thompson) arguing that globalization is an exaggerated myth and that trade is primarily regionalized among powerful nation-states.",
        "category": "Theory",
        "week": "Module 3"
      },
      {
        "term": "Transformationalist School",
        "expansion": "The State Restructuring Paradigm",
        "purpose": "Theoretical camp (Held & Giddens) asserting that globalization is an unprecedented force that transforms and recalibrates state power with no fixed end-point.",
        "category": "Theory",
        "week": "Module 3"
      },
      {
        "term": "World-Systems Theory",
        "expansion": "Immanuel Wallerstein's Macro-Sociological Model",
        "purpose": "Structural theory dividing the capitalist world economy into three unequal strata: Core, Semi-Periphery, and Periphery.",
        "category": "Theory",
        "week": "Module 3"
      },
      {
        "term": "Dependency Theory",
        "expansion": "Core-Periphery Exploitation Framework",
        "purpose": "Critique of modernization theory arguing that resources flow from poor peripheral nations to wealthy core nations via unequal terms of trade.",
        "category": "Theory",
        "week": "Module 3"
      },
      {
        "term": "McDonaldization",
        "expansion": "George Ritzer's Rationalization Theory (1993)",
        "purpose": "The process by which the principles of the fast-food restaurant dominate global society through Efficiency, Calculability, Predictability, and Control.",
        "category": "Cultural Theory",
        "week": "Module 3"
      },
      {
        "term": "Glocalization",
        "expansion": "Roland Robertson's Hybridization Concept",
        "purpose": "The creative blending of global and local cultural forces, producing unique hybrid cultural practices and commercial adaptations.",
        "category": "Cultural Theory",
        "week": "Module 3"
      },
      {
        "term": "Containerization",
        "expansion": "Malcolm McLean's Intermodal Shipping System (1956)",
        "purpose": "Standardized shipping container system (TEUs) that mechanized cargo transfer between ships, rail, and trucks, reducing freight costs by over 90%.",
        "category": "Logistics",
        "week": "Module 4"
      },
      {
        "term": "SWIFT",
        "expansion": "Society for Worldwide Interbank Financial Telecommunication",
        "purpose": "Secure financial messaging network linking over 11,000 banking institutions worldwide to authorize and process cross-border fund transfers.",
        "category": "Financial Technology",
        "week": "Module 4"
      },
      {
        "term": "Democratic Deficit",
        "expansion": "Governance Accountability Gap",
        "purpose": "The lack of direct democratic oversight and public electoral accountability in international institutions (IMF, WTO, World Bank) affecting national citizens.",
        "category": "Governance",
        "week": "Module 4"
      }
    ]
  },
  "circuits": [
    {
      "id": "circ-logic-gates-ref",
      "title": "Complete Logic Gates Graphical Reference & Master Truth Tables",
      "equation": "Buffer • Inverter • AND • NAND • OR • NOR • XOR • XNOR",
      "gate_type": "Standard Gates Reference",
      "category": "Basic Logic Gates",
      "week": "Week 7",
      "subject": "AR101",
      "description": "Standard IEEE/ANSI graphical schematic symbols and binary truth tables for all 8 fundamental digital logic gates: Buffer, Inverter (NOT), AND, NAND, OR, NOR, XOR, and XNOR. Notice that an inversion bubble at the output/input signifies NOT or active-low operation across Inverter, NAND, NOR, and XNOR.",
      "image": "assets/logic_gates_reference.jpg",
      "note": "Authoritative graphical reference for AR101 computer architecture. Fundamental to understanding Half Adders, Full Adders, and Carry-Lookahead generation networks.",
      "truth_table": {
        "headers": [
          "Gate Name",
          "Type",
          "Input A",
          "Input B",
          "Output",
          "Active-1 (High) Condition"
        ],
        "rows": [
          [
            "Buffer",
            "1-Input",
            "0",
            "—",
            "0",
            "When Input = 1"
          ],
          [
            "Buffer",
            "1-Input",
            "1",
            "—",
            "1",
            "When Input = 1"
          ],
          [
            "Inverter (NOT)",
            "1-Input",
            "0",
            "—",
            "1",
            "When Input = 0 (Inverts input)"
          ],
          [
            "Inverter (NOT)",
            "1-Input",
            "1",
            "—",
            "0",
            "When Input = 0"
          ],
          [
            "AND",
            "2-Input",
            "0",
            "0",
            "0",
            "Both A and B are 1"
          ],
          [
            "AND",
            "2-Input",
            "1",
            "0",
            "0",
            "Both A and B are 1"
          ],
          [
            "AND",
            "2-Input",
            "0",
            "1",
            "0",
            "Both A and B are 1"
          ],
          [
            "AND",
            "2-Input",
            "1",
            "1",
            "1",
            "Both A and B are 1"
          ],
          [
            "NAND",
            "2-Input",
            "0",
            "0",
            "1",
            "At least one input is 0 (Universal Gate)"
          ],
          [
            "NAND",
            "2-Input",
            "1",
            "0",
            "1",
            "At least one input is 0"
          ],
          [
            "NAND",
            "2-Input",
            "0",
            "1",
            "1",
            "At least one input is 0"
          ],
          [
            "NAND",
            "2-Input",
            "1",
            "1",
            "0",
            "At least one input is 0"
          ],
          [
            "OR",
            "2-Input",
            "0",
            "0",
            "0",
            "At least one input is 1"
          ],
          [
            "OR",
            "2-Input",
            "1",
            "0",
            "1",
            "At least one input is 1"
          ],
          [
            "OR",
            "2-Input",
            "0",
            "1",
            "1",
            "At least one input is 1"
          ],
          [
            "OR",
            "2-Input",
            "1",
            "1",
            "1",
            "At least one input is 1"
          ],
          [
            "NOR",
            "2-Input",
            "0",
            "0",
            "1",
            "Both inputs are 0 (Universal Gate)"
          ],
          [
            "NOR",
            "2-Input",
            "1",
            "0",
            "0",
            "Both inputs are 0"
          ],
          [
            "NOR",
            "2-Input",
            "0",
            "1",
            "0",
            "Both inputs are 0"
          ],
          [
            "NOR",
            "2-Input",
            "1",
            "1",
            "0",
            "Both inputs are 0"
          ],
          [
            "XOR",
            "2-Input",
            "0",
            "0",
            "0",
            "Inputs are different (Sum bit / Odd Parity)"
          ],
          [
            "XOR",
            "2-Input",
            "1",
            "0",
            "1",
            "Inputs are different"
          ],
          [
            "XOR",
            "2-Input",
            "0",
            "1",
            "1",
            "Inputs are different"
          ],
          [
            "XOR",
            "2-Input",
            "1",
            "1",
            "0",
            "Inputs are different"
          ],
          [
            "XNOR",
            "2-Input",
            "0",
            "0",
            "1",
            "Inputs are identical (Equivalence / Even Parity)"
          ],
          [
            "XNOR",
            "2-Input",
            "1",
            "0",
            "0",
            "Inputs are identical"
          ],
          [
            "XNOR",
            "2-Input",
            "0",
            "1",
            "0",
            "Inputs are identical"
          ],
          [
            "XNOR",
            "2-Input",
            "1",
            "1",
            "1",
            "Inputs are identical"
          ]
        ]
      }
    },
    {
      "id": "circ-halfadder",
      "title": "Half Adder (HA) Logic Circuit",
      "equation": "Sum: S = A ⊕ B  |  Carry: C = A · B",
      "gate_type": "Basic Arithmetic Circuit",
      "category": "Adder Circuitry",
      "week": "Week 7",
      "subject": "AR101",
      "description": "Fundamental arithmetic combinational circuit that adds two single-bit inputs (A and B). Produces Sum via an XOR gate and Carry via an AND gate. Critical limitation: has NO carry-in terminal, meaning it cannot accept carries from preceding lower-order stages.",
      "svg": "<svg viewBox=\"0 0 380 180\" class=\"circuit-svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <linearGradient id=\"haGradXOR\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#a855f7\" stop-opacity=\"0.25\"/>\n      <stop offset=\"100%\" stop-color=\"#7e22ce\" stop-opacity=\"0.4\"/>\n    </linearGradient>\n    <linearGradient id=\"haGradAND\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#818cf8\" stop-opacity=\"0.25\"/>\n      <stop offset=\"100%\" stop-color=\"#4f46e5\" stop-opacity=\"0.4\"/>\n    </linearGradient>\n  </defs>\n  <!-- Inputs -->\n  <line x1=\"30\" y1=\"50\" x2=\"130\" y2=\"50\" stroke=\"#38bdf8\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line x1=\"30\" y1=\"80\" x2=\"130\" y2=\"80\" stroke=\"#38bdf8\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <circle cx=\"30\" cy=\"50\" r=\"3.5\" fill=\"#38bdf8\"/>\n  <circle cx=\"30\" cy=\"80\" r=\"3.5\" fill=\"#38bdf8\"/>\n  <text x=\"14\" y=\"55\" fill=\"#e2e8f0\" font-family=\"Consolas, monospace\" font-size=\"14\" font-weight=\"700\">A</text>\n  <text x=\"14\" y=\"85\" fill=\"#e2e8f0\" font-family=\"Consolas, monospace\" font-size=\"14\" font-weight=\"700\">B</text>\n  <!-- Taps for AND gate -->\n  <line x1=\"70\" y1=\"50\" x2=\"70\" y2=\"130\" stroke=\"#818cf8\" stroke-width=\"2\"/>\n  <line x1=\"70\" y1=\"130\" x2=\"140\" y2=\"130\" stroke=\"#818cf8\" stroke-width=\"2\"/>\n  <circle cx=\"70\" cy=\"50\" r=\"3\" fill=\"#818cf8\"/>\n  <line x1=\"90\" y1=\"80\" x2=\"90\" y2=\"155\" stroke=\"#818cf8\" stroke-width=\"2\"/>\n  <line x1=\"90\" y1=\"155\" x2=\"140\" y2=\"155\" stroke=\"#818cf8\" stroke-width=\"2\"/>\n  <circle cx=\"90\" cy=\"80\" r=\"3\" fill=\"#818cf8\"/>\n  <!-- XOR Gate for Sum -->\n  <g transform=\"translate(130, 30)\">\n    <path d=\"M 0,0 Q 25,35 0,70\" fill=\"none\" stroke=\"#a855f7\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M 12,0 Q 37,35 12,70 Q 75,70 105,35 Q 75,0 12,0 Z\" fill=\"url(#haGradXOR)\" stroke=\"#a855f7\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n    <line x1=\"105\" y1=\"35\" x2=\"170\" y2=\"35\" stroke=\"#34d399\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <circle cx=\"170\" cy=\"35\" r=\"3.5\" fill=\"#34d399\"/>\n    <text x=\"178\" y=\"40\" fill=\"#34d399\" font-family=\"Consolas, monospace\" font-size=\"13\" font-weight=\"700\">S = A ⊕ B</text>\n  </g>\n  <!-- AND Gate for Carry -->\n  <g transform=\"translate(140, 115)\">\n    <path d=\"M 0,0 L 40,0 A 25,25 0 0,1 40,50 L 0,50 Z\" fill=\"url(#haGradAND)\" stroke=\"#818cf8\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n    <line x1=\"65\" y1=\"25\" x2=\"160\" y2=\"25\" stroke=\"#f59e0b\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <circle cx=\"160\" cy=\"25\" r=\"3.5\" fill=\"#f59e0b\"/>\n    <text x=\"168\" y=\"30\" fill=\"#f59e0b\" font-family=\"Consolas, monospace\" font-size=\"13\" font-weight=\"700\">C = A · B</text>\n  </g>\n</svg>",
      "note": "A Half Adder cannot be cascaded for multi-bit binary addition because it lacks a Carry-In terminal. It is only suitable for bit-0 (the LSB).",
      "truth_table": {
        "headers": [
          "Input A",
          "Input B",
          "Sum (S = A ⊕ B)",
          "Carry (C = A · B)",
          "Arithmetic Meaning"
        ],
        "rows": [
          [
            "0",
            "0",
            "0",
            "0",
            "0 + 0 = 0"
          ],
          [
            "0",
            "1",
            "1",
            "0",
            "0 + 1 = 1"
          ],
          [
            "1",
            "0",
            "1",
            "0",
            "1 + 0 = 1"
          ],
          [
            "1",
            "1",
            "0",
            "1",
            "1 + 1 = 2 (Sum 0, Carry 1)"
          ]
        ]
      }
    },
    {
      "id": "circ-fulladder-ha",
      "title": "Full Adder using Two Half Adders & OR Gate (Figure 3)",
      "equation": "Sum: S = (A ⊕ B) ⊕ Cin  |  Carry: Cout = AB + (A ⊕ B)·Cin",
      "gate_type": "Modular Combinational Circuit",
      "category": "Adder Circuitry",
      "week": "Week 7",
      "subject": "AR101",
      "description": "Standard modular architecture from M. Morris Mano's *Digital Design* and TutorialsPoint. Uses two cascaded Half Adders (HA1 and HA2) plus an OR gate to add three 1-bit binary inputs (A, B, Cin) with complete carry propagation.",
      "image": "assets/full_adder_using_half_adders.jpg",
      "note": "CRITICAL EXAM DOCTRINE: The carries C1 = AB and C2 = (A⊕B)Cin are mutually exclusive; they can NEVER both be 1 simultaneously. Hence, the carry combiner OR gate can be replaced with an XOR gate without changing circuit functionality! Delay: Sum = 2*t_XOR, Cout = t_XOR + t_AND + t_OR.",
      "truth_table": {
        "headers": [
          "A",
          "B",
          "Cin",
          "HA1 Sum (A⊕B)",
          "HA1 Carry (AB)",
          "HA2 Carry ((A⊕B)Cin)",
          "Sum (S)",
          "Cout (Carry-Out)"
        ],
        "rows": [
          [
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0"
          ],
          [
            "0",
            "0",
            "1",
            "0",
            "0",
            "0",
            "1",
            "0"
          ],
          [
            "0",
            "1",
            "0",
            "1",
            "0",
            "0",
            "1",
            "0"
          ],
          [
            "0",
            "1",
            "1",
            "1",
            "0",
            "1",
            "0",
            "1"
          ],
          [
            "1",
            "0",
            "0",
            "1",
            "0",
            "0",
            "1",
            "0"
          ],
          [
            "1",
            "0",
            "1",
            "1",
            "0",
            "1",
            "0",
            "1"
          ],
          [
            "1",
            "1",
            "0",
            "0",
            "1",
            "0",
            "0",
            "1"
          ],
          [
            "1",
            "1",
            "1",
            "0",
            "1",
            "0",
            "1",
            "1"
          ]
        ]
      }
    },
    {
      "id": "circ-or",
      "title": "OR Gate (Logical Disjunction)",
      "equation": "F = A + B",
      "category": "Basic Logic Gates",
      "description": "Output is 1 if AT LEAST ONE input is 1. Output is 0 only when both inputs are 0. Serves as the summation collector in 2-level AND-OR adder logic.",
      "svg": "<svg viewBox=\"0 0 280 140\" class=\"circuit-svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <linearGradient id=\"gateGradOR\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#38bdf8\" stop-opacity=\"0.25\"/>\n      <stop offset=\"100%\" stop-color=\"#0284c7\" stop-opacity=\"0.4\"/>\n    </linearGradient>\n  </defs>\n  <!-- Input wires -->\n  <line x1=\"30\" y1=\"45\" x2=\"90\" y2=\"45\" stroke=\"#38bdf8\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line x1=\"30\" y1=\"95\" x2=\"90\" y2=\"95\" stroke=\"#38bdf8\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <circle cx=\"30\" cy=\"45\" r=\"3.5\" fill=\"#38bdf8\"/>\n  <circle cx=\"30\" cy=\"95\" r=\"3.5\" fill=\"#38bdf8\"/>\n  <text x=\"14\" y=\"50\" fill=\"#e2e8f0\" font-family=\"Consolas, monospace\" font-size=\"14\" font-weight=\"700\">A</text>\n  <text x=\"14\" y=\"100\" fill=\"#e2e8f0\" font-family=\"Consolas, monospace\" font-size=\"14\" font-weight=\"700\">B</text>\n  \n  <!-- OR Gate Body -->\n  <path d=\"M 80,30 Q 115,70 80,110 Q 150,110 185,70 Q 150,30 80,30 Z\" \n        fill=\"url(#gateGradOR)\" stroke=\"#38bdf8\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n  \n  <!-- Output wire -->\n  <line x1=\"185\" y1=\"70\" x2=\"245\" y2=\"70\" stroke=\"#34d399\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <circle cx=\"245\" cy=\"70\" r=\"3.5\" fill=\"#34d399\"/>\n  <text x=\"252\" y=\"75\" fill=\"#34d399\" font-family=\"Consolas, monospace\" font-size=\"13\" font-weight=\"700\">F = A + B</text>\n</svg>",
      "truthTable": [
        {
          "a": 0,
          "b": 0,
          "out": 0
        },
        {
          "a": 0,
          "b": 1,
          "out": 1
        },
        {
          "a": 1,
          "b": 0,
          "out": 1
        },
        {
          "a": 1,
          "b": 1,
          "out": 1
        }
      ]
    },
    {
      "id": "circ-and",
      "title": "AND Gate (Logical Conjunction)",
      "equation": "F = A · B",
      "category": "Basic Logic Gates",
      "description": "Output is 1 ONLY if BOTH inputs A and B are 1. Used in ALUs to compute the Generate function Gi = xi * yi and evaluate bitwise conjunction.",
      "svg": "<svg viewBox=\"0 0 280 140\" class=\"circuit-svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <linearGradient id=\"gateGradAND\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#818cf8\" stop-opacity=\"0.25\"/>\n      <stop offset=\"100%\" stop-color=\"#4f46e5\" stop-opacity=\"0.4\"/>\n    </linearGradient>\n  </defs>\n  <!-- Input wires -->\n  <line x1=\"30\" y1=\"45\" x2=\"90\" y2=\"45\" stroke=\"#818cf8\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line x1=\"30\" y1=\"95\" x2=\"90\" y2=\"95\" stroke=\"#818cf8\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <circle cx=\"30\" cy=\"45\" r=\"3.5\" fill=\"#818cf8\"/>\n  <circle cx=\"30\" cy=\"95\" r=\"3.5\" fill=\"#818cf8\"/>\n  <text x=\"14\" y=\"50\" fill=\"#e2e8f0\" font-family=\"Consolas, monospace\" font-size=\"14\" font-weight=\"700\">A</text>\n  <text x=\"14\" y=\"100\" fill=\"#e2e8f0\" font-family=\"Consolas, monospace\" font-size=\"14\" font-weight=\"700\">B</text>\n  \n  <!-- AND Gate Body -->\n  <path d=\"M 90,30 L 135,30 A 40,40 0 0,1 135,110 L 90,110 Z\" \n        fill=\"url(#gateGradAND)\" stroke=\"#818cf8\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n  \n  <!-- Output wire -->\n  <line x1=\"175\" y1=\"70\" x2=\"245\" y2=\"70\" stroke=\"#34d399\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <circle cx=\"245\" cy=\"70\" r=\"3.5\" fill=\"#34d399\"/>\n  <text x=\"252\" y=\"75\" fill=\"#34d399\" font-family=\"Consolas, monospace\" font-size=\"13\" font-weight=\"700\">F = A · B</text>\n</svg>",
      "truthTable": [
        {
          "a": 0,
          "b": 0,
          "out": 0
        },
        {
          "a": 0,
          "b": 1,
          "out": 0
        },
        {
          "a": 1,
          "b": 0,
          "out": 0
        },
        {
          "a": 1,
          "b": 1,
          "out": 1
        }
      ]
    },
    {
      "id": "circ-xor",
      "title": "XOR Gate (Exclusive-OR)",
      "equation": "F = A ⊕ B = A'B + AB'",
      "category": "Basic Logic Gates",
      "description": "Output is 1 if inputs are DIFFERENT; output is 0 if inputs are identical. The fundamental building block of binary addition (Sum bit computation).",
      "svg": "<svg viewBox=\"0 0 280 140\" class=\"circuit-svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <linearGradient id=\"gateGradXOR\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#a855f7\" stop-opacity=\"0.25\"/>\n      <stop offset=\"100%\" stop-color=\"#7e22ce\" stop-opacity=\"0.4\"/>\n    </linearGradient>\n  </defs>\n  <!-- Input wires -->\n  <line x1=\"25\" y1=\"45\" x2=\"72\" y2=\"45\" stroke=\"#a855f7\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line x1=\"25\" y1=\"95\" x2=\"72\" y2=\"95\" stroke=\"#a855f7\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <circle cx=\"25\" cy=\"45\" r=\"3.5\" fill=\"#a855f7\"/>\n  <circle cx=\"25\" cy=\"95\" r=\"3.5\" fill=\"#a855f7\"/>\n  <text x=\"10\" y=\"50\" fill=\"#e2e8f0\" font-family=\"Consolas, monospace\" font-size=\"14\" font-weight=\"700\">A</text>\n  <text x=\"10\" y=\"100\" fill=\"#e2e8f0\" font-family=\"Consolas, monospace\" font-size=\"14\" font-weight=\"700\">B</text>\n  \n  <!-- Double Curved Arc for XOR -->\n  <path d=\"M 68,30 Q 95,70 68,110\" fill=\"none\" stroke=\"#a855f7\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <!-- XOR Body -->\n  <path d=\"M 80,30 Q 107,70 80,110 Q 150,110 185,70 Q 150,30 80,30 Z\" \n        fill=\"url(#gateGradXOR)\" stroke=\"#a855f7\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n  \n  <!-- Output wire -->\n  <line x1=\"185\" y1=\"70\" x2=\"245\" y2=\"70\" stroke=\"#34d399\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <circle cx=\"245\" cy=\"70\" r=\"3.5\" fill=\"#34d399\"/>\n  <text x=\"252\" y=\"75\" fill=\"#34d399\" font-family=\"Consolas, monospace\" font-size=\"13\" font-weight=\"700\">F = A ⊕ B</text>\n</svg>",
      "truthTable": [
        {
          "a": 0,
          "b": 0,
          "out": 0
        },
        {
          "a": 0,
          "b": 1,
          "out": 1
        },
        {
          "a": 1,
          "b": 0,
          "out": 1
        },
        {
          "a": 1,
          "b": 1,
          "out": 0
        }
      ]
    },
    {
      "id": "circ-not",
      "title": "NOT Gate (Inverter)",
      "equation": "F = A' (Inversion)",
      "category": "Basic Logic Gates",
      "description": "Inverts binary state: turns 1 into 0, and 0 into 1. Used in bitwise complementing and 1's/2's complement negation circuits.",
      "svg": "<svg viewBox=\"0 0 280 140\" class=\"circuit-svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <linearGradient id=\"gateGradNOT\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#f43f5e\" stop-opacity=\"0.25\"/>\n      <stop offset=\"100%\" stop-color=\"#be123c\" stop-opacity=\"0.4\"/>\n    </linearGradient>\n  </defs>\n  <!-- Input wire -->\n  <line x1=\"40\" y1=\"70\" x2=\"95\" y2=\"70\" stroke=\"#f43f5e\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <circle cx=\"40\" cy=\"70\" r=\"3.5\" fill=\"#f43f5e\"/>\n  <text x=\"22\" y=\"75\" fill=\"#e2e8f0\" font-family=\"Consolas, monospace\" font-size=\"14\" font-weight=\"700\">A</text>\n  \n  <!-- Triangle -->\n  <polygon points=\"95,35 95,105 160,70\" fill=\"url(#gateGradNOT)\" stroke=\"#f43f5e\" stroke-width=\"2.5\"/>\n  <!-- Bubble -->\n  <circle cx=\"166\" cy=\"70\" r=\"6\" fill=\"#0f172a\" stroke=\"#f43f5e\" stroke-width=\"2.5\"/>\n  \n  <!-- Output wire -->\n  <line x1=\"172\" y1=\"70\" x2=\"245\" y2=\"70\" stroke=\"#34d399\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <circle cx=\"245\" cy=\"70\" r=\"3.5\" fill=\"#34d399\"/>\n  <text x=\"252\" y=\"75\" fill=\"#34d399\" font-family=\"Consolas, monospace\" font-size=\"13\" font-weight=\"700\">F = A'</text>\n</svg>",
      "truthTable": [
        {
          "a": 0,
          "b": "-",
          "out": 1
        },
        {
          "a": 1,
          "b": "-",
          "out": 0
        }
      ]
    },
    {
      "id": "circ-fulladder",
      "title": "Full Adder (2-Level Combinational Circuit)",
      "equation": "Sum: si = xi ⊕ yi ⊕ ci  |  Carry: ci+1 = xi*yi + (xi + yi)*ci",
      "category": "Adder Circuitry",
      "description": "The exact 2-level combinational AND-OR logic circuit from Week 7 Slide 12. Adds two operand bits (xi, yi) and an incoming carry (ci) to produce Sum (si) and Carry-out (ci+1).",
      "svg": "<svg viewBox=\"0 0 540 260\" class=\"circuit-svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <linearGradient id=\"faGrad1\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#38bdf8\" stop-opacity=\"0.15\"/>\n      <stop offset=\"100%\" stop-color=\"#6366f1\" stop-opacity=\"0.3\"/>\n    </linearGradient>\n  </defs>\n  <!-- Background Card -->\n  <rect x=\"10\" y=\"10\" width=\"520\" height=\"240\" rx=\"10\" fill=\"#0a101d\" stroke=\"rgba(255,255,255,0.1)\" stroke-width=\"1.5\"/>\n  \n  <!-- LEFT: SUM SECTION (4 AND -> 1 OR) -->\n  <text x=\"35\" y=\"32\" fill=\"#38bdf8\" font-family=\"Consolas, monospace\" font-size=\"12\" font-weight=\"700\">SUM LOGIC (si)</text>\n  \n  <!-- 4 AND gates for Sum -->\n  <g transform=\"translate(60, 42)\">\n    <path d=\"M 0,0 L 25,0 A 12,12 0 0,1 25,24 L 0,24 Z\" fill=\"rgba(56,189,248,0.2)\" stroke=\"#38bdf8\" stroke-width=\"1.5\"/>\n    <text x=\"-35\" y=\"16\" fill=\"#94a3b8\" font-size=\"9\" font-family=\"monospace\">x'y'c</text>\n  </g>\n  <g transform=\"translate(60, 76)\">\n    <path d=\"M 0,0 L 25,0 A 12,12 0 0,1 25,24 L 0,24 Z\" fill=\"rgba(56,189,248,0.2)\" stroke=\"#38bdf8\" stroke-width=\"1.5\"/>\n    <text x=\"-35\" y=\"16\" fill=\"#94a3b8\" font-size=\"9\" font-family=\"monospace\">x'yc'</text>\n  </g>\n  <g transform=\"translate(60, 110)\">\n    <path d=\"M 0,0 L 25,0 A 12,12 0 0,1 25,24 L 0,24 Z\" fill=\"rgba(56,189,248,0.2)\" stroke=\"#38bdf8\" stroke-width=\"1.5\"/>\n    <text x=\"-35\" y=\"16\" fill=\"#94a3b8\" font-size=\"9\" font-family=\"monospace\">xy'c'</text>\n  </g>\n  <g transform=\"translate(60, 144)\">\n    <path d=\"M 0,0 L 25,0 A 12,12 0 0,1 25,24 L 0,24 Z\" fill=\"rgba(56,189,248,0.2)\" stroke=\"#38bdf8\" stroke-width=\"1.5\"/>\n    <text x=\"-35\" y=\"16\" fill=\"#94a3b8\" font-size=\"9\" font-family=\"monospace\">xyc</text>\n  </g>\n\n  <!-- Connectors to OR -->\n  <path d=\"M 97,54 L 140,54 L 140,88\" stroke=\"#38bdf8\" stroke-width=\"1.2\" fill=\"none\"/>\n  <path d=\"M 97,88 L 140,88\" stroke=\"#38bdf8\" stroke-width=\"1.2\" fill=\"none\"/>\n  <path d=\"M 97,122 L 140,122\" stroke=\"#38bdf8\" stroke-width=\"1.2\" fill=\"none\"/>\n  <path d=\"M 97,156 L 140,156 L 140,122\" stroke=\"#38bdf8\" stroke-width=\"1.2\" fill=\"none\"/>\n\n  <!-- 4-Input OR Gate for Sum -->\n  <g transform=\"translate(140, 80)\">\n    <path d=\"M 0,0 Q 20,25 0,50 Q 40,50 60,25 Q 40,0 0,0 Z\" fill=\"rgba(16,185,129,0.25)\" stroke=\"#34d399\" stroke-width=\"2\"/>\n    <line x1=\"60\" y1=\"25\" x2=\"95\" y2=\"25\" stroke=\"#34d399\" stroke-width=\"2\"/>\n    <circle cx=\"95\" cy=\"25\" r=\"3\" fill=\"#34d399\"/>\n    <text x=\"102\" y=\"29\" fill=\"#34d399\" font-family=\"Consolas, monospace\" font-size=\"13\" font-weight=\"700\">si (Sum)</text>\n  </g>\n\n  <!-- VERTICAL DIVIDER -->\n  <line x1=\"260\" y1=\"25\" x2=\"260\" y2=\"235\" stroke=\"rgba(255,255,255,0.08)\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n\n  <!-- RIGHT: CARRY SECTION (3 AND -> 1 OR) -->\n  <text x=\"290\" y=\"32\" fill=\"#f59e0b\" font-family=\"Consolas, monospace\" font-size=\"12\" font-weight=\"700\">CARRY-OUT LOGIC (ci+1)</text>\n\n  <!-- 3 AND gates for Carry -->\n  <g transform=\"translate(320, 58)\">\n    <path d=\"M 0,0 L 25,0 A 12,12 0 0,1 25,24 L 0,24 Z\" fill=\"rgba(245,158,11,0.2)\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n    <text x=\"-26\" y=\"16\" fill=\"#94a3b8\" font-size=\"10\" font-family=\"monospace\">y · c</text>\n  </g>\n  <g transform=\"translate(320, 102)\">\n    <path d=\"M 0,0 L 25,0 A 12,12 0 0,1 25,24 L 0,24 Z\" fill=\"rgba(245,158,11,0.2)\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n    <text x=\"-26\" y=\"16\" fill=\"#94a3b8\" font-size=\"10\" font-family=\"monospace\">x · c</text>\n  </g>\n  <g transform=\"translate(320, 146)\">\n    <path d=\"M 0,0 L 25,0 A 12,12 0 0,1 25,24 L 0,24 Z\" fill=\"rgba(245,158,11,0.2)\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n    <text x=\"-26\" y=\"16\" fill=\"#94a3b8\" font-size=\"10\" font-family=\"monospace\">x · y</text>\n  </g>\n\n  <!-- Connectors to OR -->\n  <path d=\"M 357,70 L 395,70 L 395,95\" stroke=\"#f59e0b\" stroke-width=\"1.2\" fill=\"none\"/>\n  <path d=\"M 357,114 L 395,114\" stroke=\"#f59e0b\" stroke-width=\"1.2\" fill=\"none\"/>\n  <path d=\"M 357,158 L 395,158 L 395,125\" stroke=\"#f59e0b\" stroke-width=\"1.2\" fill=\"none\"/>\n\n  <!-- 3-Input OR Gate for Carry -->\n  <g transform=\"translate(395, 88)\">\n    <path d=\"M 0,0 Q 18,22 0,44 Q 38,44 55,22 Q 38,0 0,0 Z\" fill=\"rgba(245,158,11,0.25)\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n    <line x1=\"55\" y1=\"22\" x2=\"90\" y2=\"22\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n    <circle cx=\"90\" cy=\"22\" r=\"3\" fill=\"#f59e0b\"/>\n    <text x=\"96\" y=\"26\" fill=\"#f59e0b\" font-family=\"Consolas, monospace\" font-size=\"12\" font-weight=\"700\">ci+1</text>\n  </g>\n\n  <!-- Subtitle -->\n  <text x=\"270\" y=\"242\" text-anchor=\"middle\" fill=\"#64748b\" font-size=\"10\" font-family=\"sans-serif\">2-Level Combinational Logic: Gate Delay = 1.0 ns (Carry) | 1.5 ns (Sum)</text>\n</svg>",
      "truthTable": [
        {
          "xi": 0,
          "yi": 0,
          "ci": 0,
          "sum": 0,
          "carry": 0
        },
        {
          "xi": 0,
          "yi": 0,
          "ci": 1,
          "sum": 1,
          "carry": 0
        },
        {
          "xi": 0,
          "yi": 1,
          "ci": 0,
          "sum": 1,
          "carry": 0
        },
        {
          "xi": 0,
          "yi": 1,
          "ci": 1,
          "sum": 0,
          "carry": 1
        },
        {
          "xi": 1,
          "yi": 0,
          "ci": 0,
          "sum": 1,
          "carry": 0
        },
        {
          "xi": 1,
          "yi": 0,
          "ci": 1,
          "sum": 0,
          "carry": 1
        },
        {
          "xi": 1,
          "yi": 1,
          "ci": 0,
          "sum": 0,
          "carry": 1
        },
        {
          "xi": 1,
          "yi": 1,
          "ci": 1,
          "sum": 1,
          "carry": 1
        }
      ]
    },
    {
      "id": "circ-ripple",
      "title": "N-Bit Ripple-Carry Adder Cascade",
      "equation": "Total Delay = (n - 1) * 1.0 ns + 1.5 ns",
      "category": "Adder Circuitry",
      "description": "Cascaded connection of n Full Adder blocks (Week 7 Slide 13). Carries ripple from LSB to MSB. For 32-bit addition: (31 * 1.0 ns) + 1.5 ns = 32.5 ns.",
      "svg": "<svg viewBox=\"0 0 540 180\" class=\"circuit-svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Stage 0 -->\n  <g transform=\"translate(380, 40)\">\n    <rect width=\"80\" height=\"90\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n    <text x=\"40\" y=\"28\" fill=\"#38bdf8\" font-weight=\"700\" font-size=\"12\" text-anchor=\"middle\">Adder 0</text>\n    <text x=\"40\" y=\"44\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">(LSB)</text>\n    <line x1=\"25\" y1=\"-20\" x2=\"25\" y2=\"0\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n    <line x1=\"55\" y1=\"-20\" x2=\"55\" y2=\"0\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n    <text x=\"25\" y=\"-24\" fill=\"#cbd5e1\" font-size=\"10\" text-anchor=\"middle\">x0</text>\n    <text x=\"55\" y=\"-24\" fill=\"#cbd5e1\" font-size=\"10\" text-anchor=\"middle\">y0</text>\n    <!-- Carry In -->\n    <line x1=\"120\" y1=\"45\" x2=\"80\" y2=\"45\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n    <text x=\"110\" y=\"40\" fill=\"#f59e0b\" font-size=\"10\">c0</text>\n    <!-- Sum Out -->\n    <line x1=\"40\" y1=\"90\" x2=\"40\" y2=\"120\" stroke=\"#34d399\" stroke-width=\"2\"/>\n    <text x=\"40\" y=\"134\" fill=\"#34d399\" font-size=\"11\" font-weight=\"700\" text-anchor=\"middle\">s0</text>\n  </g>\n\n  <!-- Ripple Wire 0 -> 1 -->\n  <line x1=\"380\" y1=\"85\" x2=\"310\" y2=\"85\" stroke=\"#f59e0b\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/>\n  <text x=\"345\" y=\"80\" fill=\"#f59e0b\" font-size=\"10\" text-anchor=\"middle\">c1</text>\n\n  <!-- Stage 1 -->\n  <g transform=\"translate(230, 40)\">\n    <rect width=\"80\" height=\"90\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n    <text x=\"40\" y=\"28\" fill=\"#38bdf8\" font-weight=\"700\" font-size=\"12\" text-anchor=\"middle\">Adder 1</text>\n    <line x1=\"25\" y1=\"-20\" x2=\"25\" y2=\"0\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n    <line x1=\"55\" y1=\"-20\" x2=\"55\" y2=\"0\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n    <text x=\"25\" y=\"-24\" fill=\"#cbd5e1\" font-size=\"10\" text-anchor=\"middle\">x1</text>\n    <text x=\"55\" y=\"-24\" fill=\"#cbd5e1\" font-size=\"10\" text-anchor=\"middle\">y1</text>\n    <line x1=\"40\" y1=\"90\" x2=\"40\" y2=\"120\" stroke=\"#34d399\" stroke-width=\"2\"/>\n    <text x=\"40\" y=\"134\" fill=\"#34d399\" font-size=\"11\" font-weight=\"700\" text-anchor=\"middle\">s1</text>\n  </g>\n\n  <!-- Ripple Dots -->\n  <text x=\"195\" y=\"88\" fill=\"#64748b\" font-size=\"20\" font-weight=\"900\" letter-spacing=\"4\">···</text>\n\n  <!-- Stage n-1 -->\n  <g transform=\"translate(70, 40)\">\n    <rect width=\"80\" height=\"90\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n    <text x=\"40\" y=\"28\" fill=\"#38bdf8\" font-weight=\"700\" font-size=\"12\" text-anchor=\"middle\">Adder n-1</text>\n    <text x=\"40\" y=\"44\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">(MSB)</text>\n    <line x1=\"25\" y1=\"-20\" x2=\"25\" y2=\"0\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n    <line x1=\"55\" y1=\"-20\" x2=\"55\" y2=\"0\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n    <text x=\"25\" y=\"-24\" fill=\"#cbd5e1\" font-size=\"10\" text-anchor=\"middle\">xn-1</text>\n    <text x=\"55\" y=\"-24\" fill=\"#cbd5e1\" font-size=\"10\" text-anchor=\"middle\">yn-1</text>\n    <line x1=\"0\" y1=\"45\" x2=\"-35\" y2=\"45\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n    <text x=\"-40\" y=\"40\" fill=\"#f59e0b\" font-size=\"10\" font-weight=\"700\">cn</text>\n    <line x1=\"40\" y1=\"90\" x2=\"40\" y2=\"120\" stroke=\"#34d399\" stroke-width=\"2\"/>\n    <text x=\"40\" y=\"134\" fill=\"#34d399\" font-size=\"11\" font-weight=\"700\" text-anchor=\"middle\">sn-1</text>\n  </g>\n</svg>"
    },
    {
      "id": "circ-mem-banks",
      "title": "8086 Even & Odd Memory Banks (1 MB Physical RAM)",
      "equation": "Even Bank: A0 = 0 (D0-D7) | Odd Bank: BHE# = 0 (D8-D15)",
      "category": "Microprocessor Memory",
      "description": "The 1MB physical address space is divided into two 512KB banks. 16-bit aligned words (at even addresses) are transferred in ONE cycle. Unaligned words require TWO cycles.",
      "svg": "<svg viewBox=\"0 0 540 200\" class=\"circuit-svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Odd Bank -->\n  <g transform=\"translate(60, 30)\">\n    <rect width=\"180\" height=\"130\" rx=\"8\" fill=\"#111827\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n    <text x=\"90\" y=\"30\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\">ODD BANK</text>\n    <text x=\"90\" y=\"50\" fill=\"#94a3b8\" font-size=\"11\" text-anchor=\"middle\">512K Bytes</text>\n    <text x=\"90\" y=\"75\" fill=\"#f59e0b\" font-size=\"11\" font-family=\"monospace\" text-anchor=\"middle\">BHE# = 0 (Active)</text>\n    <text x=\"90\" y=\"95\" fill=\"#cbd5e1\" font-size=\"11\" font-family=\"monospace\" text-anchor=\"middle\">Data Bus: D8 - D15</text>\n    <text x=\"90\" y=\"115\" fill=\"#64748b\" font-size=\"10\" font-family=\"monospace\" text-anchor=\"middle\">Addrs: 00001H, 00003H...</text>\n  </g>\n\n  <!-- Even Bank -->\n  <g transform=\"translate(300, 30)\">\n    <rect width=\"180\" height=\"130\" rx=\"8\" fill=\"#111827\" stroke=\"#34d399\" stroke-width=\"2\"/>\n    <text x=\"90\" y=\"30\" fill=\"#34d399\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\">EVEN BANK</text>\n    <text x=\"90\" y=\"50\" fill=\"#94a3b8\" font-size=\"11\" text-anchor=\"middle\">512K Bytes</text>\n    <text x=\"90\" y=\"75\" fill=\"#f59e0b\" font-size=\"11\" font-family=\"monospace\" text-anchor=\"middle\">A0 = 0 (Active)</text>\n    <text x=\"90\" y=\"95\" fill=\"#cbd5e1\" font-size=\"11\" font-family=\"monospace\" text-anchor=\"middle\">Data Bus: D0 - D7</text>\n    <text x=\"90\" y=\"115\" fill=\"#64748b\" font-size=\"10\" font-family=\"monospace\" text-anchor=\"middle\">Addrs: 00000H, 00002H...</text>\n  </g>\n  \n  <text x=\"270\" y=\"185\" text-anchor=\"middle\" fill=\"#94a3b8\" font-size=\"11\">Total: 1,048,576 Bytes (1 MB) • Aligned Word: 1 Cycle | Misaligned: 2 Cycles</text>\n</svg>"
    },
    {
      "id": "circ-stack-tower",
      "title": "8086 LIFO Stack Memory Architecture",
      "equation": "Bottom: SS x 10H + FFFFH | TOS: SS x 10H + SP | PUSH: SP ← SP - 2 | POP: SP ← SP + 2",
      "category": "Stack Architecture",
      "description": "Visual diagram of the 8086 stack memory showing downward growth toward lower addresses. PUSH decrements SP by 2, storing High byte at SP+1 and Low byte at SP.",
      "svg": "<svg viewBox=\"0 0 540 220\" class=\"circuit-svg\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Memory Tower -->\n  <g transform=\"translate(180, 20)\">\n    <rect x=\"0\" y=\"0\" width=\"180\" height=\"175\" rx=\"6\" fill=\"#0f172a\" stroke=\"#6366f1\" stroke-width=\"2\"/>\n    \n    <!-- Slots -->\n    <rect x=\"5\" y=\"5\" width=\"170\" height=\"26\" fill=\"rgba(99,102,241,0.15)\" stroke=\"rgba(255,255,255,0.06)\"/>\n    <text x=\"90\" y=\"22\" fill=\"#cbd5e1\" font-size=\"11\" font-family=\"monospace\" text-anchor=\"middle\">Bottom of Stack (FFFFH)</text>\n\n    <rect x=\"5\" y=\"34\" width=\"170\" height=\"26\" fill=\"rgba(99,102,241,0.2)\" stroke=\"rgba(255,255,255,0.06)\"/>\n    <text x=\"90\" y=\"51\" fill=\"#cbd5e1\" font-size=\"11\" font-family=\"monospace\" text-anchor=\"middle\">Occupied Word 1</text>\n\n    <rect x=\"5\" y=\"63\" width=\"170\" height=\"26\" fill=\"rgba(99,102,241,0.2)\" stroke=\"rgba(255,255,255,0.06)\"/>\n    <text x=\"90\" y=\"80\" fill=\"#cbd5e1\" font-size=\"11\" font-family=\"monospace\" text-anchor=\"middle\">Occupied Word 2</text>\n\n    <!-- Top of Stack slot -->\n    <rect x=\"5\" y=\"92\" width=\"170\" height=\"26\" fill=\"rgba(6,182,212,0.3)\" stroke=\"#06b6d4\" stroke-width=\"1.5\"/>\n    <text x=\"90\" y=\"109\" fill=\"#38bdf8\" font-size=\"11\" font-weight=\"700\" font-family=\"monospace\" text-anchor=\"middle\">Top of Stack (TOS)</text>\n\n    <rect x=\"5\" y=\"121\" width=\"170\" height=\"24\" fill=\"rgba(255,255,255,0.02)\" stroke=\"rgba(255,255,255,0.04)\"/>\n    <text x=\"90\" y=\"137\" fill=\"#64748b\" font-size=\"10\" font-family=\"monospace\" text-anchor=\"middle\">Free Space (Next PUSH)</text>\n\n    <rect x=\"5\" y=\"148\" width=\"170\" height=\"22\" fill=\"rgba(255,255,255,0.02)\" stroke=\"rgba(255,255,255,0.04)\"/>\n    <text x=\"90\" y=\"163\" fill=\"#64748b\" font-size=\"10\" font-family=\"monospace\" text-anchor=\"middle\">Lower Memory Addrs</text>\n  </g>\n\n  <!-- Left Indicators -->\n  <g transform=\"translate(60, 112)\">\n    <text x=\"100\" y=\"5\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"700\" text-anchor=\"end\">SP Pointer →</text>\n    <text x=\"100\" y=\"20\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"end\">TOS: SS:SP</text>\n  </g>\n\n  <!-- Right Growth Indicator -->\n  <g transform=\"translate(380, 50)\">\n    <line x1=\"20\" y1=\"20\" x2=\"20\" y2=\"120\" stroke=\"#f43f5e\" stroke-width=\"2.5\" stroke-dasharray=\"4 4\"/>\n    <polygon points=\"20,130 14,118 26,118\" fill=\"#f43f5e\"/>\n    <text x=\"35\" y=\"70\" fill=\"#f43f5e\" font-size=\"11\" font-weight=\"700\">STACK GROWS</text>\n    <text x=\"35\" y=\"85\" fill=\"#f43f5e\" font-size=\"11\" font-weight=\"700\">DOWNWARD ↓</text>\n    <text x=\"35\" y=\"102\" fill=\"#94a3b8\" font-size=\"10\">PUSH decrements SP</text>\n  </g>\n</svg>"
    }
  ],
  "sources": {
    "AR101": [
      {
        "title": "Computer Organization and Architecture: Designing for Performance",
        "authors": "William Stallings",
        "publisher": "Prentice Hall / Pearson (8th & 10th Editions)",
        "year": "2010 / 2016",
        "type": "Primary Course Textbook",
        "alignment": "Directly cited in lecture slides (Week 7 Slide 21); covers ALU 2-level combinational logic, Ripple-Carry delay formulas, and Carry-Lookahead generation.",
        "url": "https://www.pearson.com/en-us/subject-catalog/p/computer-organization-and-architecture/P200000003290"
      },
      {
        "title": "Computer Organization and Design: The Hardware/Software Interface",
        "authors": "David A. Patterson & John L. Hennessy",
        "publisher": "Morgan Kaufmann / Elsevier",
        "year": "2020",
        "type": "Standard Academic Reference",
        "alignment": "Turing Award-winning foundational architecture text; covers Stored Program Von-Neumann model, 0/1/2/3-address instruction formats, and gate fan-in constraints.",
        "url": "https://www.elsevier.com/books/computer-organization-and-design-mips-edition/patterson/978-0-12-820109-1"
      },
      {
        "title": "Intel 8086 Family User's Manual & Architecture Guide",
        "authors": "Intel Corporation",
        "publisher": "Intel Literature Center (Order No. 9800722-03)",
        "year": "1979",
        "type": "Official Hardware Specification",
        "alignment": "Authoritative hardware reference for 8086 EU/BIU structure, Even/Odd memory banks, 20-bit address generation, and LIFO stack SP decrement mechanics.",
        "url": "https://archive.org/details/bitsavers_intel80869UsersManualOct79_59960965"
      },
      {
        "title": "Microprocessor Architecture, Programming, and Applications with the 8085/8086",
        "authors": "Ramesh S. Gaonkar",
        "publisher": "Penram International Publishing",
        "year": "2013",
        "type": "Microprocessor Reference",
        "alignment": "Covers 8086 instruction set data transfers (MOV, XCHG, PUSH, POP, LEA) and memory segment offset mapping.",
        "url": "https://www.worldcat.org/title/microprocessor-architecture-programming-and-applications-with-the-8085/oclc/49247169"
      },
      {
        "title": "Digital Design: With an Introduction to the Verilog HDL",
        "authors": "M. Morris R. Mano & Michael D. Ciletti",
        "publisher": "Pearson Education / Prentice Hall (5th & 6th Editions)",
        "year": "2013 / 2018",
        "type": "Authoritative Digital Logic Reference",
        "alignment": "Foundational academic textbook for combinational adder circuits; details Half Adder and Full Adder gate implementations, mathematical proof of Full Adder construction using two Half Adders with an OR gate, gate delay bounds, and ALU design.",
        "url": "https://www.pearson.com/en-us/subject-catalog/p/digital-design-with-an-introduction-to-the-verilog-hdl/P200000003500"
      }
    ],
    "SPI101": [
      {
        "title": "Ethical Insights: A Brief Introduction",
        "authors": "Douglas Birsch",
        "publisher": "McGraw-Hill Higher Education",
        "year": "2002",
        "type": "Primary Course Reference",
        "alignment": "Primary reference cited in Week 2 lecture; covers Subjective Relativism, Cultural Relativism, Divine Command, and Ethical Egoism.",
        "url": "https://www.mheducation.com"
      },
      {
        "title": "The Elements of Moral Philosophy",
        "authors": "James Rachels & Stuart Rachels",
        "publisher": "McGraw-Hill",
        "year": "2003 / 2019",
        "type": "Classical Philosophy Reference",
        "alignment": "Covers Utilitarianism (Jeremy Bentham) and Kantian Deontology / duty ethics cited in Week 2.",
        "url": "https://www.mheducation.com/highered/product/elements-moral-philosophy-rachels-rachels/M9781259914256.html"
      },
      {
        "title": "The 1987 Constitution of the Republic of the Philippines",
        "authors": "Constitutional Commission of 1986",
        "publisher": "Official Gazette of the Republic of the Philippines",
        "year": "1987",
        "type": "Philippine Supreme Law",
        "alignment": "Article III (Bill of Rights Sections 1, 2, 3) privacy provisions and Article II Section 26 political dynasty prohibition.",
        "url": "https://www.officialgazette.gov.ph/constitutions/1987-constitution/"
      },
      {
        "title": "Republic Act No. 10173: Data Privacy Act of 2012",
        "authors": "Congress of the Philippines",
        "publisher": "National Privacy Commission (NPC)",
        "year": "2012",
        "type": "Philippine Statutory Law",
        "alignment": "Governs Section 11 privacy principles, personal data controllers (PIC), processors (PIP), and citizen rights.",
        "url": "https://privacy.gov.ph/data-privacy-act/"
      }
    ],
    "MS101": [
      {
        "title": "Discrete Mathematics and Its Applications",
        "authors": "Kenneth H. Rosen",
        "publisher": "McGraw-Hill Education (7th & 8th Editions)",
        "year": "2019",
        "type": "Standard Academic Textbook",
        "alignment": "Covers Propositional Logic, Truth Tables (2^n formula), Quantifiers, Set Cardinality, and the Division Algorithm.",
        "url": "https://www.mheducation.com"
      },
      {
        "title": "Discrete Mathematics with Applications",
        "authors": "Susanna S. Epp",
        "publisher": "Cengage Learning (5th Edition)",
        "year": "2020",
        "type": "Standard Academic Textbook",
        "alignment": "Covers Number Theory, prime numbers, divisibility theorems, and Euclidean GCD algorithms.",
        "url": "https://www.cengage.com"
      }
    ],
    "IPT102": [
      {
        "title": "ASP.NET Core Application Architecture & Razor Pages Guide",
        "authors": "Microsoft Learn Documentation Team",
        "publisher": "Microsoft Corporation",
        "year": "2024",
        "type": "Official Framework Documentation",
        "alignment": "Official guide for MVC pattern, Model binding, Controller actions, Razor @Html helpers, and Kestrel server.",
        "url": "https://learn.microsoft.com/en-us/aspnet/core/"
      },
      {
        "title": "The Python Language Reference & Standard Library",
        "authors": "Python Software Foundation (Guido van Rossum et al.)",
        "publisher": "Python Software Foundation",
        "year": "2024",
        "type": "Official Language Specification",
        "alignment": "Authoritative reference for Python dynamic typing, memory management, data types, and REPL operations.",
        "url": "https://docs.python.org/3/"
      }
    ],
    "SIA101": [
      {
        "title": "A Guide to the Project Management Body of Knowledge (PMBOK Guide)",
        "authors": "Project Management Institute (PMI)",
        "publisher": "Project Management Institute (6th & 7th Editions)",
        "year": "2021",
        "type": "Global Industry Standard",
        "alignment": "Standard for the 5 Project Management Life Cycle phases (Initiation, Planning, Execution, Monitoring, Closure) and WBS.",
        "url": "https://www.pmi.org/pmbok-guide-standards"
      },
      {
        "title": "BPMN 2.0: Business Process Model and Notation Specification",
        "authors": "Object Management Group (OMG)",
        "publisher": "Object Management Group",
        "year": "2014",
        "type": "International Technical Standard",
        "alignment": "Specification for BPMN 4 building blocks (Flow objects, Connecting objects, Swimlanes, Artifacts).",
        "url": "https://www.omg.org/spec/BPMN/2.0/"
      }
    ],
    "RIZAL": [
      {
        "title": "RA 1425: Ang Batas Rizal (Kasaysayan at Konteksto)",
        "authors": "Roland Lorenzo M. Ruben",
        "publisher": "University Lecture Series & Historical Documents",
        "year": "2011",
        "type": "Primary Course Reference",
        "alignment": "Covers the complete legislative debates of Senate Bill 438, Recto vs Catholic Opposition, Laurel's Compromise, and the 1901 Taft Commission hero criteria.",
        "url": "https://www.officialgazette.gov.ph"
      },
      {
        "title": "The Philippines in the 19th Century in the Context of Dr. Jose Rizal's Era",
        "authors": "Dr. Gregorio F. Zaide & Sonia M. Zaide",
        "publisher": "All-Nations Publishing Co.",
        "year": "1999",
        "type": "Standard Academic Textbook",
        "alignment": "Details the Three Great Revolutions, the opening of the Suez Canal, Gov-Gen De La Torre, the 1872 Cavite Mutiny & GOMBURZA, and the 11 colonial evils.",
        "url": "https://www.worldcat.org"
      },
      {
        "title": "History of the Filipino People (8th Edition)",
        "authors": "Teodoro A. Agoncillo",
        "publisher": "Garotech Publishing",
        "year": "1990",
        "type": "National History Standard",
        "alignment": "Authoritative analysis of Spanish colonial institutions: polo y servicio, bandala, encomienda, rentas estancadas, and frailocracy.",
        "url": "https://www.worldcat.org"
      },
      {
        "title": "Brief History of the Filipino People and Colonial Struggles",
        "authors": "Maguigad & Muhi",
        "publisher": "Manila Historical Review",
        "year": "2001",
        "type": "Scholarly Treatise",
        "alignment": "Cites ideological transmission of Enlightenment thought (Rousseau, Locke, Paine) and the democratic rule of Gov. Gen. Carlos Maria de la Torre.",
        "url": "https://www.worldcat.org"
      },
      {
        "title": "Republic Act No. 1425 (The Rizal Law Full Text & Provisions)",
        "authors": "Third Congress of the Republic of the Philippines",
        "publisher": "Official Gazette of the Republic of the Philippines, Vol. 52, No. 6",
        "year": "1956",
        "type": "Official Government Statute",
        "alignment": "Official statutory text of Sections 1 through 6 enacted into law on June 12, 1956.",
        "url": "https://www.officialgazette.gov.ph/1956/06/12/republic-act-no-1425/"
      }
    ],
    "SOCSCI3": [
      {
        "title": "The Contemporary World",
        "authors": "Lisandro E. Claudio & Patricio N. Abinales",
        "publisher": "C & E Publishing, Inc.",
        "year": "2018",
        "type": "Primary Course Reference",
        "alignment": "Foundational collegiate textbook for CHED General Education; covers global economy, market integration, global governance, and the OFW phenomenon.",
        "url": "https://www.cebookshop.com"
      },
      {
        "title": "Globalization: A Very Short Introduction (5th Edition)",
        "authors": "Manfred B. Steger",
        "publisher": "Oxford University Press",
        "year": "2020",
        "type": "Authoritative Scholarly Monograph",
        "alignment": "Canonical source for definitions of globality, globalization, global imaginary, and the economic, political, and cultural dimensions of globalization.",
        "url": "https://global.oup.com"
      },
      {
        "title": "The Fourth Industrial Revolution",
        "authors": "Klaus Schwab",
        "publisher": "World Economic Forum / Crown Business",
        "year": "2016",
        "type": "Global Economic Standard",
        "alignment": "Authoritative treatise on 4IR technological pillars (AI, IoT, CPS, blockchain, biotech) and its systemic impact on global labor and economic platforms.",
        "url": "https://www.weforum.org/about/the-fourth-industrial-revolution-by-klaus-schwab/"
      },
      {
        "title": "Globalization: A Basic Text (3rd Edition)",
        "authors": "George Ritzer & Paul Dean",
        "publisher": "Wiley-Blackwell",
        "year": "2019",
        "type": "Standard Academic Textbook",
        "alignment": "Primary source for the physical metaphors of globalization (solidity, liquidity, gaseousness), global flows, McDonaldization, and cultural glocalization.",
        "url": "https://www.wiley.com"
      },
      {
        "title": "World-Systems Analysis: An Introduction",
        "authors": "Immanuel Wallerstein",
        "publisher": "Duke University Press",
        "year": "2004",
        "type": "Theoretical Macro-Sociology Reference",
        "alignment": "Definitive formulation of the modern capitalist world-system, global division of labor, Core, Semi-Periphery, and Periphery dynamics.",
        "url": "https://www.dukeupress.edu/world-systems-analysis"
      }
    ]
  }
};

// Expose globally for browser
if (typeof window !== "undefined") {
  window.REVIEWER_DATA = REVIEWER_DATA;
}
