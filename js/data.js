// ==============================================================================
// QCU BSIT REVIEWER PORTAL - SPI101 DATA STORE
// Course: SPI101 - Social and Professional Issues 1
// Student: Luigi Emanuel Britania (3rd Year - SBIT3G) | QCU
// ==============================================================================

const REVIEWER_DATA = {
  student: {
    name: "Luigi Emanuel Britania",
    course: "BSIT",
    yearSection: "3rdYr - SBIT3G",
    campus: "San Bartolome",
    term: "AY 2026-2027 SEM: 1ST",
  },
  subjects: [
    {
      code: "SPI101",
      title: "Social and Professional Issues 1",
      schedule: "Friday 2:30PM - 5:30PM",
      units: 3,
      status: "active",
      color: "emerald",
      badge: "Current Materials Ready",
      checkpointsCount: 3,
      questionsCount: 45,
      flashcardsCount: 40
    },
    {
      code: "MS101",
      title: "Discrete Mathematics",
      schedule: "Monday 6:00PM - 9:00PM",
      units: 3,
      status: "active",
      color: "blue",
      badge: "Current Materials Ready",
      checkpointsCount: 3,
      questionsCount: 15,
      flashcardsCount: 15
    },
    {
      code: "IPT102",
      title: "Integrative Programming and Tech 2",
      schedule: "Tue 2:30PM - 5:30PM & 7:00PM - 9:00PM",
      units: 3,
      status: "active",
      color: "purple",
      badge: "Current Materials Ready",
      checkpointsCount: 5,
      questionsCount: 50,
      flashcardsCount: 40
    },
    {
      code: "AR101",
      title: "Architecture and Organization",
      schedule: "Thursday 2:30PM - 5:30PM & 7:00PM - 9:00PM",
      units: 3,
      status: "upcoming",
      color: "amber",
      badge: "Slot Ready",
      checkpointsCount: 0,
      questionsCount: 0,
      flashcardsCount: 0
    },
    {
      code: "SIA101",
      title: "Systems Integration and Architecture 1",
      schedule: "Wednesday 12:30PM - 2:30PM & 4:30PM - 7:30PM",
      units: 3,
      status: "upcoming",
      color: "cyan",
      badge: "Slot Ready",
      checkpointsCount: 0,
      questionsCount: 0,
      flashcardsCount: 0
    },
    {
      code: "SOCSCI3",
      title: "The Contemporary World",
      schedule: "Friday 6:00PM - 9:00PM",
      units: 3,
      status: "upcoming",
      color: "rose",
      badge: "Slot Ready",
      checkpointsCount: 0,
      questionsCount: 0,
      flashcardsCount: 0
    },
    {
      code: "RIZAL",
      title: "The Life and Works of Rizal",
      schedule: "Friday 2:30PM - 5:30PM",
      units: 3,
      status: "upcoming",
      color: "orange",
      badge: "Slot Ready",
      checkpointsCount: 0,
      questionsCount: 0,
      flashcardsCount: 0
    }
  ],

  // Checkpoints for SPI101
  checkpoints: [
    {
      id: "cp1",
      subject: "SPI101",
      week: "Week 2",
      title: "Common Ethical Theories",
      badge: "Checkpoint 1",
      description: "Moral frameworks, Relativism, Divine Command, Egoism, Bentham's Utilitarianism, Kantian Deontology, and the Law vs Ethics power dynamic.",
      digest: [
        {
          heading: "1. What is Ethics & Moral Theory?",
          points: [
            "**Ethics** describes the way we look and understand life in terms of good/bad or right/wrong.",
            "Deals with moral principles answering: *'What should I do in this situation?'* and *'What is right or wrong for me?'*",
            "Principal academic references: Douglas Birsch (2002) *Ethical Insights* and James Rachels (2003) *The Elements of Moral Philosophy*."
          ]
        },
        {
          heading: "2. Relativism (No Universal Norm)",
          points: [
            "**Core Premise**: There is NO universal moral norm of right and wrong.",
            "**1.1 Subjective Relativism**: Each individual decides morality for themselves. Catchphrase: *'What is right for you may not be right for me.'*",
            "**1.2 Cultural Relativism**: Right and wrong rest strictly on a society's prevailing moral customs. Moral standards vary from place to place and era to era."
          ],
          trap: "Exam Trap: Saying 'Society dictates truth' is Cultural Relativism, NOT Subjective. Subjective is individual-only!"
        },
        {
          heading: "3. Divine Command Theory",
          points: [
            "Good actions = aligned with God's will; Bad actions = contrary to God's will.",
            "Holy Books serve as moral decision-making manuals (e.g., honor thy parents).",
            "**Key Characteristic**: Based strictly on **OBEDIENCE**, NOT on reason."
          ],
          tldr: "Divine Command = Obedience to holy decree, not rational human calculation."
        },
        {
          heading: "4. Ethical Egoism (Self-Interest)",
          points: [
            "Philosophy that every person should focus **exclusively on their own self-interest**.",
            "Morally right action = the one producing the **maximum long-term benefit** for the actor.",
            "Does NOT prohibit helping others, but altruism is done strictly to serve one's own long-term interests.",
            "**Acts that Defy Egoism (Counter-examples)**: 1) Starving mother giving the only bread to her child; 2) Father tirelessly working overtime for family; 3) Sibling dropping out of school so other siblings can study."
          ]
        },
        {
          heading: "5. Consequentialism & Utilitarianism",
          points: [
            "Catchphrase: **'The end will justify the means.'**",
            "The consequence of an act determines whether the means taken were morally acceptable.",
            "**Utilitarianism (Jeremy Bentham)**: Dominant consequentialist school. Principle: **'The greatest happiness for the greatest number.'** The broader the beneficiary pool, the higher the moral good."
          ]
        },
        {
          heading: "6. Kantianism / Deontology (Duty & Reason)",
          points: [
            "Author: **Immanuel Kant** (18th-century philosopher). Obligation-based morality.",
            "Emphasizes the **type/nature of the action**, NOT the consequences.",
            "Moral decisions must be anchored on one's **duties and the rights of others**.",
            "Morality is rooted in **pure reason**; humans have innate rationality and must act morally regardless of desire.",
            "Golden maxim: **'Act morally regardless of the consequences.'**"
          ]
        },
        {
          heading: "7. Philippine Context: Congress & Kantian Duty",
          points: [
            "**1987 Constitution Art. II / III Sec. 26**: State mandates equal access to public service and prohibits political dynasties as defined by law.",
            "**Non-Self-Executing Provision**: Cannot take effect without an enabling law passed by Congress.",
            "**Kantian Paradox**: Congressmen have a moral duty under the Constitution to ban dynasties, yet for over 28+ years (1987–2015+), zero anti-dynasty bills were passed because of personal political self-interest!"
          ]
        },
        {
          heading: "8. Persuasive Power: Ethics vs Law",
          points: [
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
      id: "cp2",
      subject: "SPI101",
      week: "Week 3-4",
      title: "Computer Ethics & Professional Codes",
      badge: "Checkpoint 2",
      description: "Filipino IT Code of Ethics, AITP, Software Engineering 8 Principles, 10 Commandments, Hacker Constitution, James Moor's Properties, and Photo Consent rules.",
      digest: [
        {
          heading: "1. Professional Code of Ethics & 4 Benefits",
          points: [
            "Set of guidelines designed to govern acceptable conduct of members of a profession.",
            "**4 Concrete Benefits**:",
            "1. **Ethical Decision Making** - guides dilemmas.",
            "2. **High Standards of Practice & Ethical Behavior**.",
            "3. **Trust & Respect from General Public**.",
            "4. **Evaluation Benchmark** - provides standard against which performance is measured."
          ]
        },
        {
          heading: "2. Code of Ethics of Filipino IT Professionals",
          points: [
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
          heading: "3. AITP Code & Software Engineering Principles",
          points: [
            "**AITP 6 Obligations**: 1) Management, 2) Fellow Members, 3) Society, 4) College/University, 5) Employer, 6) Country.",
            "**Software Engineering 8 Principles (ACM / IEEE-CS)**: 1) Public, 2) Client & Employer, 3) Product, 4) Judgment, 5) Management, 6) Profession, 7) Colleagues, 8) Self."
          ]
        },
        {
          heading: "4. Ten Commandments of Computer Ethics",
          points: [
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
          heading: "5. The Hacking Community's Constitution",
          points: [
            "Acts like a 'Bill of Rights' to be read in relation to the Ten Commandments.",
            "Key Tenets: Free speech in cyberspace; freedom from oppressive state control; cyberspace democracy; hacking as a tool to audit and test network integrity; punishment of undemocratic regimes; art/music/politics in cyberspace.",
            "**3 Crucial Goals of Hacking/Cracking/Phreaking**: a) Direct democracy in cyberspace; b) Information should be free to all; c) Testing and exposing vulnerabilities in data storage systems.",
            "Champion of the **Open Source Movement**: Governments should never mandate proprietary commercial software."
          ]
        },
        {
          heading: "6. James Moor: Problem in Computer Ethics",
          points: [
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
          heading: "7. Three Levels of Computer Ethics",
          points: [
            "1. **Pop Level**: Sensitizing the general public via TV news, magazines, newspapers.",
            "2. **Para Level**: Collecting cases, spotting similarities/differences, reading case law, attending events.",
            "3. **Theoretical Level**: Applying classical philosophical theories to computer concepts."
          ]
        },
        {
          heading: "8. Social Media Capital & Photo Consent Rules",
          points: [
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
      id: "cp3",
      subject: "SPI101",
      week: "Week 5-6",
      title: "Technologies' Impact on Privacy & Due Process",
      badge: "Checkpoint 3",
      description: "1987 Constitution Art. III Sec. 3, AMLA, Search Warrants, Rational Relationship Test, Spousal Privacy, Data Privacy Act (RA 10173), and Due Process in Software Design.",
      digest: [
        {
          heading: "1. Constitutional Right to Privacy (Art. III Sec. 3)",
          points: [
            "The word **'PRIVACY'** is mentioned only **ONCE** in the 1987 Philippine Constitution (Art. III Sec. 3):",
            "*(1) The privacy of communication and correspondence shall be inviolable except upon lawful order of the court, or when public safety or order requires otherwise as prescribed by law.*",
            "*(2) Any evidence obtained in violation of this shall be inadmissible for any purpose in any proceeding (Exclusionary Rule / Fruit of the Poisonous Tree).*",
            "**Crucial Rule**: Right to privacy is **NOT absolute**—it admits of valid exceptions."
          ]
        },
        {
          heading: "2. The 3 Constitutional Exceptions to Privacy",
          points: [
            "**Exception 1: Lawful Court Order (Search Warrant)**: Under Art. III Sec. 2, issued only upon **probable cause** determined personally by a judge under oath, specifically describing the place to be searched and persons/things to be seized.",
            "**Exception 2: Public Order or Safety**: Common in public transit/malls. E.g., LRT/MRT security guards compelling bag checks to deter terrorist attacks.",
            "**Exception 3: Express Provision of the Law**: Explicit statutory surrender. E.g., **Anti-Money Laundering Act (AMLA)** requires banks to report individual single-transaction deposits of **₱300,000 or more** to the AMLC."
          ]
        },
        {
          heading: "3. The Rational Relationship Test",
          points: [
            "Supreme Court standard to determine constitutionality of privacy-limiting laws:",
            "1. Does the policy have a **reasonable purpose / rational basis**? (Deemed 'legitimate').",
            "2. Is the policy **reasonably related** to attaining that legitimate end?",
            "**Landmark Case**: R.A. 3019 (**Anti-Graft and Corrupt Practices Act**). Compelling public officers to file annual SALN (assets, liabilities, income) does NOT violate privacy because it curtails corruption and maintains public service integrity."
          ]
        },
        {
          heading: "4. Reasonable Expectation of Privacy & Anti-Wiretapping",
          points: [
            "Example: Former Pres. Joseph 'Erap' Estrada inside a voting booth in 2010 had reasonable expectancy of privacy.",
            "**RA 4200 (Anti-Wiretapping Act)**: Expressly requires authorization of **ALL parties** to a private conversation. The Supreme Court cannot substitute 'consent of one party' because Congress's political wisdom governs.",
            "**Privacy Between Spouses**: Marriage does **NOT** give a spouse the right to ransack locked drawers, cabinets, or phones for infidelity evidence. Constitutional privacy protects each spouse individually. Marital communication is legally privileged.",
            "**Detainees & Prisoners**: Under RA 7438, incarcerated persons have a **diminished expectation of privacy** inherent to lawful imprisonment."
          ]
        },
        {
          heading: "5. Data Privacy Act of 2012 (RA 10173)",
          points: [
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
          heading: "6. Due Process Clause & Software Engineering",
          points: [
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
                        "1. **Negation / NOT (~, \u00ac)**: Inverts truth value (~T = F, ~F = T).",
                        "2. **Conjunction / AND (\u2227)**: True **only** when both p and q are true.",
                        "3. **Disjunction / OR (\u2228)**: True when at least one proposition is true.",
                        "4. **Implication / Conditional (\u2192)**: 'If p, then q'. False **only** when p is True and q is False (T \u2192 F is False; all other combinations are True!).",
                        "5. **Biconditional / IFF (\u2194)**: 'p if and only if q'. True when both have the **same truth value** (T \u2194 T is True, F \u2194 F is True).",
                        "**Operator Precedence Hierarchy**: NOT (Highest) > AND > OR > IF-THEN > IFF (Lowest)."
                  ],
                  "tldr": "Implication p \u2192 q is only FALSE when a true hypothesis leads to a false conclusion (T \u2192 F = F)."
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
                        "**Universal Quantifier (\u2200x)**: 'For all x', 'for every x'. True only if every single item in the universe satisfies the predicate.",
                        "**Existential Quantifier (\u2203x)**: 'For some x', 'there exists at least one x'. True if at least one item satisfies the predicate."
                  ]
            },
            {
                  "heading": "6. Set Theory Essentials",
                  "points": [
                        "**Set**: An unordered collection of distinct objects (elements). Notation: enclosed in curly braces {}.",
                        "**Representation Methods**: Roster Method ({a, e, i, o, u}) vs Rule Method ({x | x is an English vowel}).",
                        "**Empty / Null Set**: Denoted by \u2205 or {}. (Note: {\u2205} is NOT empty; it has cardinality 1!).",
                        "**Cardinality (|A|)**: The number of elements in a set. Example: |{1, {2, 3}, \u2205}| = 3.",
                        "**Power Set (P(A))**: The set of all subsets. Size formula: |P(A)| = 2^|A|. If A = {1, 2}, P(A) = {\u2205, {1}, {2}, {1, 2}}.",
                        "**Operations**: Union (A \u222a B), Intersection (A \u2229 B), Difference (A - B), Complement (A')."
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
                        "\u2022 **2**: Last digit is even (0, 2, 4, 6, 8).",
                        "\u2022 **3**: Sum of digits is divisible by 3.",
                        "\u2022 **4**: Last two digits form a number divisible by 4.",
                        "\u2022 **5**: Last digit is 0 or 5.",
                        "\u2022 **6**: Divisible by **both 2 and 3**.",
                        "\u2022 **8**: Last three digits form a number divisible by 8.",
                        "\u2022 **9**: Sum of digits is divisible by 9.",
                        "\u2022 **10**: Last digit is 0."
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
                        "**a = dq + r**, where **0 \u2264 r < d**.",
                        "Example: 101 divided by 4 => 101 = 4(25) + 1. (q = 25, r = 1)."
                  ]
            },
            {
                  "heading": "6. GCD and LCM",
                  "points": [
                        "**Greatest Common Divisor (GCD)**: The largest positive integer dividing both integers. Example: gcd(48, 72) = 24.",
                        "**Least Common Multiple (LCM)**: The smallest positive integer divisible by both integers.",
                        "**Fundamental Identity**: **gcd(a, b) \u00d7 lcm(a, b) = a \u00d7 b**."
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
                        "**A. Direct Proof**: To prove p \u2192 q, assume p is True and demonstrate through algebraic definitions that q must be True. (e.g. if n is odd, n^2 is odd).",
                        "**B. Indirect Proof (Contrapositive)**: Uses the equivalence p \u2192 q \u2261 ~q \u2192 ~p. Assume the conclusion is False (~q) and show the hypothesis must be False (~p).",
                        "**C. Proof by Contradiction**: Assume the statement is false and derive an impossible logical contradiction."
                  ]
            },
            {
                  "heading": "3. Principle of Mathematical Induction",
                  "points": [
                        "A tool for proving that a predicate P(n) is true for all natural numbers n \u2208 \u2115.",
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
        "id": "ipt-cp1",
        "subject": "IPT102",
        "week": "Week 2",
        "title": "Review to ASP.NET with Visual Studio",
        "badge": "Checkpoint 1",
        "description": "Dynamic websites, client vs server-side scripting, ASP.NET page syntax, directives, server controls with runat='server', 5 web control types, and the Page Event Lifecycle.",
        "digest": [
            {
                "heading": "1. Dynamic Websites vs Static Pages",
                "points": [
                    "**Dynamic Website**: A website that displays different types of content every time a user views it, adapting to viewer demographics, time of day, location, and language settings.",
                    "**Static Pages**: Require manual file editing before their contents can change.",
                    "**Under the Hood**: Achieved via a combination of **client-side** (e.g. JavaScript in browser) and **server-side** (executed on web server prior to transmission) scripting.",
                    "**Synergy Note**: Using both scripting models adapts the page to each user while simultaneously reducing server processing load."
                ],
                "tldr": "Dynamic sites adapt on the fly using both client-side and server-side code."
            },
            {
                "heading": "2. Elements & Real-World Benefits of Dynamic Web",
                "points": [
                    "**5 Key Elements**: Responsive layout based on screen viewport, localized language detection, personalized content recommendations, social media/offsite integrations, and dynamic visuals/animations.",
                    "**5 Major Benefits**: More personalized browsing, easier site maintenance, better user experience (UX), elevated professional look, and staying aligned with modern web standards."
                ]
            },
            {
                "heading": "3. ASP.NET Page Syntax & Directives",
                "points": [
                    "Any standard HTML page can be turned into an ASP.NET Web Form simply by renaming the extension to `.aspx`.",
                    "**Directives**: `<%@ Page Language=\"C#\" %>` - configures compiler and page environment.",
                    "**Server Controls**: `<asp:Button runat=\"server\">` - server-managed UI tags.",
                    "**Code Blocks**: `<script runat=\"server\">...</script>` - server-side logic in event handlers.",
                    "**Data Binding**: `<%# ... %>` - binds data to server controls.",
                    "**Server Side Comments**: `<%----%>` - stripped before sending HTML to client.",
                    "**Render Code**: `<%= %>` and `<% %>` - inline output (discouraged; use `<script runat=\"server\">` with event handlers instead)."
                ],
                "trap": "Exam Trap: Inline render blocks (<%= %>) are discouraged. Always prefer event handlers with server controls!"
            },
            {
                "heading": "4. Server Controls & the runat='server' Directive",
                "points": [
                    "**Definition**: Small building blocks of the graphical user interface (text boxes, buttons, check boxes, list boxes, labels).",
                    "Used for UI entry, selections, validation, data access, security, master pages, and data manipulation.",
                    "Adding `runat=\"server\"` transforms any HTML tag into a server control accessible in backend C# code.",
                    "Example: `<input type=\"text\" id=\"text2\" runat=\"server\" />` -> accessed in C# as `text2.Value`.",
                    "**5 Types of Web Controls in ASP.NET**:",
                    "1. HTML controls (native browser tags)",
                    "2. HTML Server controls (HTML elements with `runat=\"server\"`)",
                    "3. ASP.NET Server controls (`<asp:...>`)",
                    "4. ASP.NET Ajax Server controls (partial page postback support)",
                    "5. User controls and custom controls (reusable modular widgets)"
                ]
            },
            {
                "heading": "5. Properties of Server Controls",
                "points": [
                    "Tag attributes map directly to server control properties.",
                    "Tags and attributes in ASP.NET are **case-insensitive**.",
                    "Control properties can be set programmatically in C#: e.g., `c1.Text = \"Foo\"; c2.Rows = 5;`."
                ]
            },
            {
                "heading": "6. ASP.NET Page Event Lifecycle",
                "points": [
                    "The strict sequence of page execution:",
                    "1. **Initialize** (`Page_Init`)",
                    "2. **Restore Control State**",
                    "3. **Load Page** (`Page_Load`)",
                    "4. **Control Events** (Change Events like `Textbox1_Changed`, Action Events like `Button1_Click`)",
                    "5. **Save Control State**",
                    "6. **Render**",
                    "7. **Unload Page** (`Page_Unload`)"
                ],
                "tldr": "Lifecycle Order: Init -> Restore State -> Load -> Control Events (Change/Action) -> Save State -> Render -> Unload."
            },
            {
                "heading": "7. HTML Controls vs HTML Server Controls",
                "points": [
                    "**HTML Controls**: Native browser elements part of the HTML standard. Accessible *only* in client browser; completely invisible to web server. Improves raw performance.",
                    "**HTML Server Controls**: HTML elements decorated with `runat=\"server\"`. Produce identical HTML output but provide automatic ViewState management and server-side events."
                ]
            },
            {
                "heading": "8. Categories of Server Controls",
                "points": [
                    "**Basic Controls**: `<asp:button>`, `<asp:imagebutton>`, `<asp:linkbutton>`, `<asp:hyperlink>`, `<asp:textbox>`, `<asp:checkbox>`.",
                    "**List Controls**: Handle repetition (`<asp:dropdownlist>`, `<asp:listbox>`, `<asp:radiobuttonlist>`, `<asp:checkboxlist>`).",
                    "**Rich Controls**: Custom rich functionality (`<asp:calendar>`).",
                    "**Validation Controls**: Rich declarative validation executed on both client and server; prevents malicious form tampering/spoofing without extra roundtrips."
                ]
            }
        ]
    },
    {
        "id": "ipt-cp2",
        "subject": "IPT102",
        "week": "Week 3",
        "title": "Understanding MVC Architecture and Routing",
        "badge": "Checkpoint 2",
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
                    "**Model**: *'Model represents the data.'* A C# class that describes the shape of the data. Stores and manipulates information retrieved from databases.",
                    "**View**: *'View is the User Interface.'* Displays Model data to the user and captures inputs. Built with HTML, CSS, and Razor syntax (`.cshtml`).",
                    "**Controller**: *'Controller is the request handler.'* Handles incoming HTTP requests raised by users, processes data with Models, and returns the appropriate View as an HTTP response."
                ],
                "tldr": "Model = Data. View = User Interface. Controller = Request Handler."
            },
            {
                "heading": "3. MVC Request Flow",
                "points": [
                    "1. User enters a URL in browser (e.g. `http://mydomain.com/home/about`).",
                    "2. The request hits the webserver and is routed to the corresponding **Controller** (`HomeController`).",
                    "3. The Controller executes the action method, coordinates with the **Model**, and renders the **View**.",
                    "4. The rendered response is sent back across the network to the browser."
                ]
            },
            {
                "heading": "4. MVC Solution Folder Structure Explained",
                "points": [
                    "**App_Data**: Contains application data files (LocalDB `.mdf`, XML, etc.). **IIS will NEVER serve files from the App_Data folder** to clients (security protection).",
                    "**App_Start**: Contains startup routing and bundle logic (`RouteConfig.cs`, `BundleConfig.cs`).",
                    "**Controllers**: Contains class files for controllers. *Requirement: Every controller class name MUST end with the word 'Controller'* (e.g. `StudentController.cs`).",
                    "**Fonts**: Contains custom font assets.",
                    "**Models**: Contains model class files with public properties.",
                    "**Scripts**: Contains JavaScript and VBScript files (Bootstrap, jQuery 1.10, Modernizr by default).",
                    "**Views**: Contains `.cshtml` Razor views organized into subfolders named after each controller (e.g., `Views/Home/Index.cshtml`, `Views/Shared/_Layout.cshtml`)."
                ],
                "trap": "Exam Trap: Controller class names MUST end with 'Controller'. Also, IIS will NEVER serve files from App_Data directly!"
            },
            {
                "heading": "5. Essential Configuration Files",
                "points": [
                    "**Global.asax**: Code responding to application-level lifecycle events (`Application_Start`, `Application_BeginRequest`, `Application_Error`, `Session_Start`, `Session_End`).",
                    "**Packages.config**: Managed by NuGet package manager to track installed library dependencies and versions.",
                    "**Web.config**: XML file containing core application-level configurations (connection strings, handlers, system.web)."
                ]
            },
            {
                "heading": "6. Routing in MVC & Route Configuration",
                "points": [
                    "**Routing**: Maps incoming URLs to physical Controller classes and Action Methods, rather than static files on disk.",
                    "Not limited to MVC; can also be used in ASP.NET Web Forms.",
                    "All configured routes are stored in the **RouteTable** and evaluated by the **Routing Engine**.",
                    "Every MVC application must register at least one default route in the `RouteConfig` class (`RouteConfig.cs` in `App_Start`).",
                    "The route is registered in the `Application_Start()` event inside `Global.asax.cs`."
                ]
            },
            {
                "heading": "7. URL Pattern Matching: {controller}/{action}/{id}",
                "points": [
                    "The URL pattern is evaluated after the domain: e.g. `localhost:1234/{controller}/{action}/{id}`.",
                    "1st segment = Controller name (without 'Controller' suffix).",
                    "2nd segment = Action method name.",
                    "3rd segment = Optional parameter `id`.",
                    "Examples under default `{controller = \"Home\", action = \"Index\", id = UrlParameter.Optional}`:",
                    "\u2022 `/home` -> `HomeController`, `Index()`, `id = null`",
                    "\u2022 `/home/index/123` -> `HomeController`, `Index()`, `id = 123`",
                    "\u2022 `/home/about` -> `HomeController`, `About()`, `id = null`",
                    "\u2022 `/student` -> `StudentController`, `Index()`, `id = null`",
                    "\u2022 `/student/edit/123` -> `StudentController`, `Edit()`, `id = 123`"
                ]
            }
        ]
    },
    {
        "id": "ipt-cp3",
        "subject": "IPT102",
        "week": "Week 4",
        "title": "Developing Controllers",
        "badge": "Checkpoint 3",
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
                    "All public methods in a controller class are considered Action Methods.",
                    "**Restriction 1: Must be public** (cannot be private or protected).",
                    "**Restriction 2: Cannot be overloaded** (methods with identical name cannot be differentiated by the default routing engine).",
                    "**Restriction 3: Cannot be a static method** (must be an instance method)."
                ],
                "trap": "Exam Trap: An action method CANNOT be static, CANNOT be private/protected, and CANNOT be overloaded!"
            },
            {
                "heading": "4. Default Action Method & Action Results",
                "points": [
                    "**Default Action**: The `Index()` method is the default action method for controllers as configured in `RouteConfig`.",
                    "**ActionResult**: Base abstract class for all action return types.",
                    "Common Result Classes & Helper Methods:",
                    "\u2022 `ViewResult` via `View()`: Renders HTML markup.",
                    "\u2022 `EmptyResult`: Represents no response / void.",
                    "\u2022 `ContentResult` via `Content()`: Returns string literal.",
                    "\u2022 `FileResult` / `FileContentResult` via `File()`: Returns file content/stream.",
                    "\u2022 `JavaScriptResult` via `JavaScript()`: Returns JavaScript script.",
                    "\u2022 `JsonResult` via `Json()`: Returns JSON data for AJAX.",
                    "\u2022 `RedirectResult` via `Redirect()`: Redirects to external or direct URL.",
                    "\u2022 `RedirectToRouteResult` via `RedirectToAction()`: Redirects to another controller action.",
                    "\u2022 `PartialViewResult` via `PartialView()`: Returns HTML from partial view.",
                    "\u2022 `HttpUnauthorizedResult`: Returns HTTP 403 / 401 status."
                ]
            },
            {
                "heading": "5. Action Selectors: [ActionName] and [NonAction]",
                "points": [
                    "**Action Selector**: Attribute applied to action methods that helps the routing engine choose the correct handler.",
                    "**1. ActionName**: Specifies a different public URL action name than the C# method name.",
                    "Example: `[ActionName(\"find\")] public ActionResult GetById(int id)` -> invoked via URL `/student/find/1`.",
                    "**2. NonAction**: Indicates a `public` method in a controller should NOT be treated as an invokable action method."
                ]
            },
            {
                "heading": "6. Action Verbs: [HttpGet], [HttpPost], [HttpPut]",
                "points": [
                    "Used to handle specific HTTP request types: `HttpGet`, `HttpPost`, `HttpPut`, `HttpDelete`, `HttpOptions`, `HttpPatch`.",
                    "**Default**: If no action verb is specified, the action handles **HttpGet by default**.",
                    "GET is used to retrieve information (params in query string). POST creates a new resource. PUT updates existing.",
                    "**AcceptVerbs**: Allows handling multiple verbs: `[AcceptVerbs(HttpVerbs.Post | HttpVerbs.Get)]`."
                ]
            }
        ]
    },
    {
        "id": "ipt-cp4",
        "subject": "IPT102",
        "week": "Week 5",
        "title": "Developing Views & Razor Syntax",
        "badge": "Checkpoint 4",
        "description": "Razor view engine, .cshtml rules, server-side processing flow, inline expressions, multi-statement code blocks, variable declaration, loops, and reading user input with Request and IsPost.",
        "digest": [
            {
                "heading": "1. Razor View Engine Overview",
                "points": [
                    "Razor is a view engine supported in ASP.NET MVC allowing a seamless mix of HTML and server-side code.",
                    "**File Extensions**:",
                    "\u2022 C# syntax: `.cshtml`",
                    "\u2022 Visual Basic syntax: `.vbhtml`"
                ]
            },
            {
                "heading": "2. Main Razor Syntax Rules for C#",
                "points": [
                    "1. Razor code blocks are enclosed in `@{ ... }`.",
                    "2. Inline expressions (variables and functions) start with `@` (e.g. `@DateTime.Now`).",
                    "3. Code statements inside code blocks end with a semicolon (`;`).",
                    "4. Variables are declared using the `var` keyword or explicit data types.",
                    "5. Strings are enclosed in double quotation marks (`\"...\"`).",
                    "6. C# code in Razor is **strictly case sensitive**.",
                    "7. C# Razor files must use the `.cshtml` extension."
                ],
                "tldr": "Rules: Enclosed in @{ }, inline uses @, statements end in ;, C# is case-sensitive, extension is .cshtml."
            },
            {
                "heading": "3. How Razor Works on the Server",
                "points": [
                    "Razor pages contain two kinds of content: HTML markup and Razor code.",
                    "When the server processes the page, it runs the **Razor code FIRST** before generating the HTML.",
                    "Server code can access server databases and generate dynamic HTML on the fly.",
                    "Seen from the client browser, the generated HTML is identical to static HTML; the browser never sees the Razor syntax."
                ]
            },
            {
                "heading": "4. Inline Expressions & Multi-Statement Blocks",
                "points": [
                    "**Inline Example**:",
                    "`<h1>Razor demo</h1><h2>@DateTime.Now.ToShortDateString()</h2>`",
                    "**Multi-Statement Block**:",
                    "```csharp\n@{\n    var date = DateTime.Now.ToShortDateString();\n    var message = \"Hello World\";\n}\n<h2>Today's date is: @date</h2>\n<h3>@message</h3>\n```"
                ]
            },
            {
                "heading": "5. Declaring Variables & If/Else Conditions",
                "points": [
                    "**Variables**: Can use `var` or explicit types (`string greeting = \"Hi\"; int counter = 50;`).",
                    "**If-Else in Razor**:",
                    "```csharp\n@{\n    var txt = \"\";\n    if (DateTime.Now.Hour > 12) {\n        txt = \"Good Evening\";\n    } else {\n        txt = \"Good Morning\";\n    }\n}\n<p>The message is @txt</p>\n```"
                ]
            },
            {
                "heading": "6. For Loops & Reading User Form Input",
                "points": [
                    "**Loops in Views**:",
                    "```html\n<ul>\n@for (int i = 0; i < 5; i++) {\n    <li>@i</li>\n}\n</ul>\n```",
                    "**Reading User Input with Request & IsPost**:",
                    "```csharp\n@{\n    var totalMessage = \"\";\n    if (IsPost) {\n        var num1 = Request[\"text1\"];\n        var num2 = Request[\"text2\"];\n        var total = num1.AsInt() + num2.AsInt();\n        totalMessage = \"Total = \" + total;\n    }\n}\n```",
                    "Input values submitted from form elements are read using `Request[\"controlName\"]` and cast using helper methods like `.AsInt()`."
                ]
            }
        ]
    },
    {
        "id": "ipt-cp5",
        "subject": "IPT102",
        "week": "Week 6",
        "title": "Developing Views \u2013 HTML Helpers",
        "badge": "Checkpoint 5",
        "description": "Standard HTML Helpers, @Html syntax, loosely vs strongly typed methods, helper mapping table, and form control code patterns (TextBox, DropDownList, RadioButton, etc.).",
        "digest": [
            {
                "heading": "1. What are Standard HTML Helpers?",
                "points": [
                    "**Standard HTML Helpers**: Extension methods of the `HtmlHelper` class used in Razor views to render standard HTML controls (Label, TextBox, Password, TextArea, CheckBox, RadioButton, DropDownList, ListBox, Display, Editor, ActionLink).",
                    "Always start with `@Html.` and are accessed via the `Html` property included in the `WebViewPage` base class of `System.Web.Mvc`."
                ]
            },
            {
                "heading": "2. Loosely Typed vs Strongly Typed Helpers",
                "points": [
                    "An HTML Helper is an extension method of the `HtmlHelper` class.",
                    "**Loosely Typed Methods**: Take control names as string parameters (e.g. `@Html.TextBox(\"firstname\")`).",
                    "**Strongly Typed Methods**: Use the `...For` suffix and lambda expressions (e.g. `@Html.TextBoxFor(m => m.FirstName)`). Bounded directly to model properties."
                ],
                "tldr": "TextBox() = loosely typed (string name). TextBoxFor() = strongly typed (model expression)."
            },
            {
                "heading": "3. Master Helper Mapping Table",
                "points": [
                    "\u2022 `@Html.ActionLink()` -> `<a href=\"...\">...</a>`",
                    "\u2022 `@Html.TextBox()` -> `<input type=\"text\" />`",
                    "\u2022 `@Html.TextArea()` -> `<textarea>...</textarea>`",
                    "\u2022 `@Html.CheckBox()` -> `<input type=\"checkbox\" />`",
                    "\u2022 `@Html.RadioButton()` -> `<input type=\"radio\" />`",
                    "\u2022 `@Html.DropDownList()` -> `<select><option>...</select>`",
                    "\u2022 `@Html.ListBox()` -> `<select size=\"2\" multiple>...</select>`",
                    "\u2022 `@Html.Hidden()` -> `<input type=\"hidden\" />`",
                    "\u2022 `@Html.Password()` -> `<input type=\"password\" />`",
                    "\u2022 `@Html.Label()` -> `<label>...</label>`",
                    "\u2022 `@Html.Display()` -> Plain text representation of model property",
                    "\u2022 `@Html.Editor()` -> Dynamically generates HTML control based on model property data type"
                ]
            },
            {
                "heading": "4. Form Input Helpers in Action",
                "points": [
                    "**Label**: `@Html.Label(\"User Name\")` -> creates `<label>User Name</label>`.",
                    "**TextBox**: `@Html.TextBox(\"txtUsername\")` -> creates `<input type=\"text\" id=\"txtUsername\" name=\"txtUsername\" />`.",
                    "**Password**: `@Html.Password(\"Password\")` -> input characters are masked with `*`."
                ]
            },
            {
                "heading": "5. Selection Helpers: RadioButton, TextArea, CheckBox",
                "points": [
                    "**RadioButton**: Provides a list of options allowing only one selection in a group.",
                    "Signature: `RadioButton(string name, object value, bool isChecked, object htmlAttributes)`.",
                    "Example: `@Html.RadioButton(\"Gender\", \"Male\", true, new { id = \"male\" }) Male`.",
                    "**TextArea**: Multi-line text input control with rows and columns: `@Html.TextArea(\"Address\")`.",
                    "**CheckBox**: Boolean checkbox: `@Html.CheckBox(\"Dancing\") Dancing`."
                ]
            },
            {
                "heading": "6. DropDownList Helper & SelectList",
                "points": [
                    "**DropDownList**: Visual control with a down arrow that displays a list of items and forces the user to select one item at a time.",
                    "Not editable (user must choose from the selection).",
                    "Signature: `DropDownList(string name, IEnumerable<SelectListItem> selectList, string optionLabel, object htmlAttributes)`.",
                    "Example: `@Html.DropDownList(\"ddlCourses\", new SelectList(strCourses), \"Select Course\")`."
                ]
            }
        ]
    }
  ],

  // Flashcards bank
  flashcards: [
    // Week 2 Flashcards
    {
      id: "fc-w2-1",
      checkpointId: "cp1",
      subject: "SPI101",
      week: "Week 2",
      question: "What is Subjective Relativism?",
      answer: "The theory holding that each individual person decides right or wrong for themselves. Captured in: 'What's right for you may not be right for me.'",
      tag: "Ethical Theory"
    },
    {
      id: "fc-w2-2",
      checkpointId: "cp1",
      subject: "SPI101",
      week: "Week 2",
      question: "How does Cultural Relativism differ from Subjective Relativism?",
      answer: "Cultural Relativism grounds right and wrong in society's collective customs and moral guidelines, whereas Subjective Relativism grounds morality entirely in individual opinion.",
      tag: "Ethical Theory"
    },
    {
      id: "fc-w2-3",
      checkpointId: "cp1",
      subject: "SPI101",
      week: "Week 2",
      question: "What is Divine Command Theory based on?",
      answer: "It is based on OBEDIENCE to God's will and holy texts, NOT on human reason or calculation.",
      tag: "Ethical Theory"
    },
    {
      id: "fc-w2-4",
      checkpointId: "cp1",
      subject: "SPI101",
      week: "Week 2",
      question: "What is the core principle of Ethical Egoism?",
      answer: "Each person should focus exclusively on their own self-interest; the morally right act provides the individual with maximum long-term benefit.",
      tag: "Ethical Theory"
    },
    {
      id: "fc-w2-5",
      checkpointId: "cp1",
      subject: "SPI101",
      week: "Week 2",
      question: "Give 3 classic counter-examples that defy Ethical Egoism.",
      answer: "1) Mother starving herself to give bread to her child. 2) Father working overtime for family needs. 3) Sibling dropping out so others can study.",
      tag: "Scenario / Application"
    },
    {
      id: "fc-w2-6",
      checkpointId: "cp1",
      subject: "SPI101",
      week: "Week 2",
      question: "What is Consequentialism and what is Jeremy Bentham's Utilitarian motto?",
      answer: "Consequentialism: 'The end justifies the means.' Bentham's Utilitarianism: 'The greatest happiness for the greatest number.'",
      tag: "Ethical Theory"
    },
    {
      id: "fc-w2-7",
      checkpointId: "cp1",
      subject: "SPI101",
      week: "Week 2",
      question: "What is Kantianism (Deontology) and its primary author?",
      answer: "Authored by 18th-century philosopher Immanuel Kant. It is obligation-based, focusing on duty and pure reason: 'Act morally regardless of the consequences.'",
      tag: "Ethical Theory"
    },
    {
      id: "fc-w2-8",
      checkpointId: "cp1",
      subject: "SPI101",
      week: "Week 2",
      question: "Why is the Anti-Political Dynasty provision in the 1987 PH Constitution non-self-executing?",
      answer: "It requires an enabling law enacted by Congress. Because passing it conflicts with lawmakers' self-interest, it remained unpassed for decades, violating Kantian duty.",
      tag: "Philippine Law & Ethics"
    },
    {
      id: "fc-w2-9",
      checkpointId: "cp1",
      subject: "SPI101",
      week: "Week 2",
      question: "Why is the persuasive power of law stronger than ethics?",
      answer: "Law enforces compliance through legal compulsion, sanctions, and imprisonment (e.g. BIR criminal tax summons), whereas ethics relies only on voluntary conscience.",
      tag: "Law vs Ethics"
    },
    {
      id: "fc-w2-10",
      checkpointId: "cp1",
      subject: "SPI101",
      week: "Week 2",
      question: "Differentiate Civil Obligation from Natural Obligation regarding family support.",
      answer: "Civil: Parents are legally mandated to support minor children (court action available). Natural: Children supporting elderly parents is moral; parents cannot legally compel them under current law.",
      tag: "Legal Concepts"
    },
    {
      id: "fc-w2-11",
      checkpointId: "cp1",
      subject: "SPI101",
      week: "Week 2",
      question: "Why did no one copycat the 2000 LOVE BUG virus after 2000?",
      answer: "The enactment of RA 8792 (E-Commerce Act) established criminal penalties and prison terms, deterring copycats through legal consequences.",
      tag: "IT Case Study"
    },

    // Week 3-4 Flashcards
    {
      id: "fc-w3-1",
      checkpointId: "cp2",
      subject: "SPI101",
      week: "Week 3-4",
      question: "What are the 4 benefits of following a Professional Code of Ethics?",
      answer: "1. Ethical Decision Making\n2. High Standards of Practice & Ethical Behavior\n3. Trust and Respect from the General Public\n4. Evaluation Benchmark",
      tag: "Professional Ethics"
    },
    {
      id: "fc-w3-2",
      checkpointId: "cp2",
      subject: "SPI101",
      week: "Week 3-4",
      question: "What does Canon 4 of the Filipino IT Code of Ethics mandate?",
      answer: "Comply and strictly abide by intellectual property laws, patent laws, and other related laws in respect of Information Technology.",
      tag: "Filipino IT Code"
    },
    {
      id: "fc-w3-3",
      checkpointId: "cp2",
      subject: "SPI101",
      week: "Week 3-4",
      question: "What are the 6 obligations recognized in the AITP Code of Ethics?",
      answer: "1) Management, 2) Fellow Members, 3) Society, 4) College/University, 5) Employer, and 6) Country.",
      tag: "Professional Ethics"
    },
    {
      id: "fc-w3-4",
      checkpointId: "cp2",
      subject: "SPI101",
      week: "Week 3-4",
      question: "List the 8 Principles of the Software Engineering Code (ACM/IEEE-CS).",
      answer: "1. Public, 2. Client and Employer, 3. Product, 4. Judgment, 5. Management, 6. Profession, 7. Colleagues, 8. Self.",
      tag: "ACM / IEEE Principles"
    },
    {
      id: "fc-w3-5",
      checkpointId: "cp2",
      subject: "SPI101",
      week: "Week 3-4",
      question: "What are the three properties that make computers unique according to James Moor?",
      answer: "1. Logical Malleability\n2. Impact on Society\n3. Invisibility Factor",
      tag: "Computer Ethics Theory"
    },
    {
      id: "fc-w3-6",
      checkpointId: "cp2",
      subject: "SPI101",
      week: "Week 3-4",
      question: "What are the 3 kinds of invisibility identified by James Moor?",
      answer: "1. Invisible Abuse (e.g. backdoors, theft)\n2. Invisible Programming Values (embedded biases/shortcuts)\n3. Invisible Complex Calculation (algorithms humans cannot manually verify)",
      tag: "Computer Ethics Theory"
    },
    {
      id: "fc-w3-7",
      checkpointId: "cp2",
      subject: "SPI101",
      week: "Week 3-4",
      question: "Explain the three 'Levels' of Computer Ethics.",
      answer: "• Pop: Sensitizing the public via media & TV.\n• Para: Case collection and scenario analysis.\n• Theoretical: Applying scholarly philosophical theories.",
      tag: "Computer Ethics Levels"
    },
    {
      id: "fc-w3-8",
      checkpointId: "cp2",
      subject: "SPI101",
      week: "Week 3-4",
      question: "How many hours a week do Filipinos spend on social media compared to global average?",
      answer: "Filipinos average 53 hours a week, which is 11 hours higher than the global average of 42 hours a week (Philippines = Social Media Capital).",
      tag: "Philippine Context"
    },
    {
      id: "fc-w3-9",
      checkpointId: "cp2",
      subject: "SPI101",
      week: "Week 3-4",
      question: "What are the 3 exemptions where taking/posting unauthorized media of a person is allowed?",
      answer: "1. News of the day / press items.\n2. General public welfare (e.g. viral abusive traffic enforcer).\n3. Public personalities in public places (e.g. Pacquiao in public, never in restroom).",
      tag: "Photo Ethics & Law"
    },
    {
      id: "fc-w3-10",
      checkpointId: "cp2",
      subject: "SPI101",
      week: "Week 3-4",
      question: "What are the 3 crucial goals of the Hacking Community according to its constitution?",
      answer: "a) Direct Democracy in cyberspace.\nb) Belief that information should be free to all.\nc) Testing and exposing vulnerabilities of data storage systems.",
      tag: "Hacker Ethics"
    },

    // Week 5-6 Flashcards
    {
      id: "fc-w5-1",
      checkpointId: "cp3",
      subject: "SPI101",
      week: "Week 5-6",
      question: "How many times is the word 'PRIVACY' mentioned in the 1987 PH Constitution and where?",
      answer: "Only ONCE, in Article III, Section 3 ('The privacy of communication and correspondence shall be inviolable...').",
      tag: "Constitutional Law"
    },
    {
      id: "fc-w5-2",
      checkpointId: "cp3",
      subject: "SPI101",
      week: "Week 5-6",
      question: "What is the consequence of evidence seized in violation of privacy under Art. III Sec. 3?",
      answer: "It is inadmissible for any purpose in any proceeding (The Exclusionary Rule / Fruit of the Poisonous Tree).",
      tag: "Constitutional Law"
    },
    {
      id: "fc-w5-3",
      checkpointId: "cp3",
      subject: "SPI101",
      week: "Week 5-6",
      question: "What are the 3 lawful exceptions where privacy can be breached?",
      answer: "1. Lawful Court Order (Search Warrant issued on Probable Cause).\n2. Public Order or Safety (e.g. MRT/LRT bag searches).\n3. Express provision of the law (e.g. AMLA bank reports >= P300,000).",
      tag: "Constitutional Law"
    },
    {
      id: "fc-w5-4",
      checkpointId: "cp3",
      subject: "SPI101",
      week: "Week 5-6",
      question: "What is the two-step Rational Relationship Test used by the Supreme Court?",
      answer: "1. Determine if the policy has a reasonable purpose/rational basis (legitimate end).\n2. Determine if the policy is reasonably related to achieving that legitimate end.",
      tag: "Judicial Doctrine"
    },
    {
      id: "fc-w5-5",
      checkpointId: "cp3",
      subject: "SPI101",
      week: "Week 5-6",
      question: "Why did the Supreme Court uphold the SALN requirement under RA 3019?",
      answer: "It satisfies the rational relationship test: minimizing official corruption and maintaining honesty in public service outweighs individual privacy claims.",
      tag: "Landmark Case"
    },
    {
      id: "fc-w5-6",
      checkpointId: "cp3",
      subject: "SPI101",
      week: "Week 5-6",
      question: "What does the Anti-Wiretapping Act (RA 4200) require for private recording?",
      answer: "It requires authorization/consent from ALL parties involved in the private conversation.",
      tag: "Philippine Law"
    },
    {
      id: "fc-w5-7",
      checkpointId: "cp3",
      subject: "SPI101",
      week: "Week 5-6",
      question: "Can a wife break into her husband's private cabinet to search for proof of adultery?",
      answer: "NO. The Supreme Court ruled marriage does not strip an individual of their right to privacy; ransacking for infidelity evidence is unlawful.",
      tag: "Spousal Privacy"
    },
    {
      id: "fc-w5-8",
      checkpointId: "cp3",
      subject: "SPI101",
      week: "Week 5-6",
      question: "What is the privacy expectation of convicted prisoners and detainees?",
      answer: "They have a diminished expectation of privacy rights inherent to lawful detention and security under RA 7438.",
      tag: "Prisoner Rights"
    },
    {
      id: "fc-w5-9",
      checkpointId: "cp3",
      subject: "SPI101",
      week: "Week 5-6",
      question: "What law is RA 10173 and what are its key processing principles?",
      answer: "The Data Privacy Act of 2012. Section 11 Principles: Specified/legitimate purpose, fairly/lawfully processed, accurate/updated, adequate & not excessive, retained only as needed, identifiable form limited.",
      tag: "Data Privacy Act"
    },
    {
      id: "fc-w5-10",
      checkpointId: "cp3",
      subject: "SPI101",
      week: "Week 5-6",
      question: "What is Due Process of Law and where did it originate conceptually?",
      answer: "Definition: 'A law which hears before it condemns; which proceeds upon inquiry, and renders judgment only after trial.' Originates conceptually from the Garden of Eden.",
      tag: "Due Process"
    },
    {
      id: "fc-w5-11",
      checkpointId: "cp3",
      subject: "SPI101",
      week: "Week 5-6",
      question: "How do software engineers apply the Due Process Clause in application design?",
      answer: "By creating confirmation prompts before destructive actions (e.g. 'Do you want to save changes to document.doc? [Yes] [No] [Cancel]'), granting the user a right to be heard before loss of data.",
      tag: "Software Engineering & Law"
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
      "question": "Under what condition is the implication p \u2192 q FALSE?",
      "answer": "p \u2192 q is FALSE only when p is True and q is False (T \u2192 F = F). In all other 3 combinations, it is True.",
      "tag": "Truth Values"
},
{
      "id": "fc-ms-4",
      "checkpointId": "ms-cp1",
      "subject": "MS101",
      "week": "Week 2-4",
      "question": "What is the precedence order of the 5 basic logical connectives?",
      "answer": "1. NOT (~)\n2. AND (\u2227)\n3. OR (\u2228)\n4. IF-THEN (\u2192)\n5. IF AND ONLY IF (\u2194)",
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
      "answer": "\u2022 Tautology: Always True under every interpretation.\n\u2022 Contradiction: Always False under every interpretation.\n\u2022 Contingency: True for some, False for others.",
      "tag": "Sentence Properties"
},
{
      "id": "fc-ms-7",
      "checkpointId": "ms-cp1",
      "subject": "MS101",
      "week": "Week 2-4",
      "question": "What is the difference between Universal (\u2200) and Existential (\u2203) Quantifiers?",
      "answer": "\u2200x claims the predicate holds for ALL elements in the domain.\n\u2203x claims the predicate holds for AT LEAST ONE element in the domain.",
      "tag": "Quantifiers"
},
{
      "id": "fc-ms-8",
      "checkpointId": "ms-cp1",
      "subject": "MS101",
      "week": "Week 2-4",
      "question": "What is the cardinality of set B = {1, {2, 3, 4}, \u2205}?",
      "answer": "Cardinality |B| = 3. (The elements are: 1, the inner set {2,3,4}, and the empty set \u2205).",
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
      "answer": "a = dq + r, where 0 \u2264 r < d (a = dividend, d = divisor, q = quotient, r = remainder).",
      "tag": "Number Theory"
},
{
      "id": "fc-ms-12",
      "checkpointId": "ms-cp2",
      "subject": "MS101",
      "week": "Week 5",
      "question": "What is the relationship between GCD, LCM, and two positive integers a and b?",
      "answer": "gcd(a, b) \u00d7 lcm(a, b) = a \u00d7 b.",
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
      "question": "What is the contrapositive of the implication p \u2192 q?",
      "answer": "\u00acq \u2192 \u00acp (which is logically equivalent to p \u2192 q).",
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
        "answer": "The runat=\"server\" attribute (e.g. <input type=\"text\" id=\"txt\" runat=\"server\">).",
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
        "answer": "1. Basic controls (<asp:button>, <asp:textbox>)\n2. List controls (<asp:dropdownlist>, <asp:listbox>)\n3. Rich controls (<asp:calendar>)\n4. Validation controls",
        "tag": "Control Types"
    },
    {
        "id": "fc-ipt1-8",
        "checkpointId": "ipt-cp1",
        "subject": "IPT102",
        "week": "Week 2",
        "question": "Why does ASP.NET discourage the use of render code blocks (<%= %> and <% %>)?",
        "answer": "Render blocks mix presentation and logic. ASP.NET encourages <script runat=\"server\"> with event-driven code in code-behind instead.",
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
        "answer": "<input type=\"password\">, which masks user input with asterisks (*).",
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
        "question": "Which HTML Helper creates a multi-line text input (<textarea>)?",
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
        "question": "Which HTML Helper renders an anchor tag (<a>)?",
        "answer": "@Html.ActionLink().",
        "tag": "Helpers"
    }
  ],

  // Checkpoint Quizzes
  quizzes: [
    // CHECKPOINT 1 (Week 2)
    {
      checkpointId: "cp1",
      subject: "SPI101",
      week: "Week 2",
      questions: [
        {
          id: "q-w2-1",
          type: "multiple",
          question: "Which ethical theory is characterized by the popular saying: 'What's right for you may not be right for me'?",
          options: [
            "Cultural Relativism",
            "Subjective Relativism",
            "Kantianism",
            "Ethical Egoism"
          ],
          correct: 1,
          explanation: "Subjective Relativism asserts that every single person decides morality for themselves, encapsulated in 'What's right for you may not be right for me'."
        },
        {
          id: "q-w2-2",
          type: "multiple",
          question: "Divine Command Theory is fundamentally grounded on which of the following?",
          options: [
            "Human logic and philosophical debate",
            "Cost-benefit consequence calculation",
            "Obedience to God's will, not reason",
            "Consensus of the majority"
          ],
          correct: 2,
          explanation: "As stated in the lecture: 'The divine command theory is based on OBEDIENCE, not REASON.'"
        },
        {
          id: "q-w2-3",
          type: "multiple",
          question: "A student drops out of college so that their younger siblings can afford tuition. Which ethical theory is this action a DIRECT counter-example against?",
          options: [
            "Kantian Deontology",
            "Ethical Egoism",
            "Utilitarianism",
            "Divine Command Theory"
          ],
          correct: 1,
          explanation: "Ethical Egoism claims humans exclusively act for their own maximum long-term self-interest. Sacrificing one's education for siblings directly contradicts this claim."
        },
        {
          id: "q-w2-4",
          type: "multiple",
          question: "Jeremy Bentham is the influential pioneer of which consequentialist principle?",
          options: [
            "Categorical Imperative",
            "The greatest happiness for the greatest number",
            "Frictionless capitalism",
            "Pure reason independent of consequences"
          ],
          correct: 1,
          explanation: "Jeremy Bentham advocated Utilitarianism, which measures morality by 'the greatest happiness for the greatest number'."
        },
        {
          id: "q-w2-5",
          type: "multiple",
          question: "Immanuel Kant's deontological philosophy emphasizes which core maxim?",
          options: [
            "'The end justifies the means'",
            "'Act morally regardless of the consequences'",
            "'Follow society's moral custom'",
            "'Maximize long-term personal gain'"
          ],
          correct: 1,
          explanation: "Kantianism teaches that actions are duty-based and grounded in pure reason: 'Act morally regardless of the consequences.'"
        },
        {
          id: "q-w2-6",
          type: "multiple",
          question: "Why has Article II/III Section 26 of the Philippine Constitution (prohibiting political dynasties) remained unenacted by Congress for over 28 years?",
          options: [
            "The Supreme Court declared it unconstitutional",
            "It is a non-self-executing provision requiring an enabling law, and lawmakers act out of self-interest rather than Kantian duty",
            "The President vetoed all anti-dynasty laws",
            "It expired after the 1987 transition period"
          ],
          correct: 1,
          explanation: "It is not self-executing and requires an enabling law. Lawmakers prioritize self-interest/preservation over their constitutional moral obligation."
        },
        {
          id: "q-w2-7",
          type: "multiple",
          question: "Why do 9 out of 10 people ignore a bleeding stranger at their door, but immediately pay taxes when receiving a BIR audit letter?",
          options: [
            "Taxes are cheaper than first aid",
            "The persuasive power of ethics is weak, while the legal obligation carries coercive power and threat of criminal prosecution",
            "Filipinos prioritize charity over legal obligations",
            "Hospital care is illegal without police approval"
          ],
          correct: 1,
          explanation: "The slide explicitly illustrates that moral compulsion is weak, whereas legal compulsion carries criminal prosecution and imprisonment."
        },
        {
          id: "q-w2-8",
          type: "multiple",
          question: "In Philippine law, what kind of obligation is it for adult children to provide financial support to their elderly parents?",
          options: [
            "Civil Obligation (enforceable with lawsuit)",
            "Criminal Obligation (punishable by jail)",
            "Natural Obligation (moral duty, no current law allows parents to sue children for support)",
            "Constitutional Guarantee"
          ],
          correct: 2,
          explanation: "While parents have a civil legal obligation to support minor children, children supporting elderly parents is currently only a natural (moral) obligation."
        },
        {
          id: "q-w2-9",
          type: "multiple",
          question: "What law put an end to copycats of the 2000 'LOVE BUG' virus in the Philippines?",
          options: [
            "The Cybercrime Prevention Act of 2012",
            "The Electronic Commerce Act of 2000 (RA 8792)",
            "The Data Privacy Act of 2012",
            "The Revised Penal Code of 1932"
          ],
          correct: 1,
          explanation: "The slide notes that after the enactment of the E-Commerce Law, fear of legal consequences prevented copycats of the Love Bug."
        },
        {
          id: "q-w2-10",
          type: "multiple",
          question: "Which of the following books is cited in Week 2 as a principal source for moral philosophy?",
          options: [
            "Clean Code by Robert C. Martin",
            "The Elements of Moral Philosophy by James Rachels",
            "The Mythical Man-Month by Fred Brooks",
            "Computer Ethics by Deborah Douglas"
          ],
          correct: 1,
          explanation: "The slide cites Douglas Birsch (2002) and James Rachels (2003) *The Elements of Moral Philosophy*."
        }
      ]
    },

    // CHECKPOINT 2 (Week 3-4)
    {
      checkpointId: "cp2",
      subject: "SPI101",
      week: "Week 3-4",
      questions: [
        {
          id: "q-w3-1",
          type: "multiple",
          question: "Which of the following is NOT one of the 4 stated benefits of following a Professional Code of Ethics?",
          options: [
            "Ethical Decision Making",
            "Guaranteed 100% Bug-Free Software",
            "Trust and Respect from the General Public",
            "Evaluation Benchmark"
          ],
          correct: 1,
          explanation: "The 4 benefits are: Ethical Decision Making, High Standards of Practice, Trust & Respect from Public, and Evaluation Benchmark."
        },
        {
          id: "q-w3-2",
          type: "multiple",
          question: "According to the Filipino IT Code of Ethics, when may confidential client information be disclosed?",
          options: [
            "Whenever the developer leaves the company",
            "When the developer receives a higher salary offer",
            "Only with consent of concerned parties or when required by law",
            "Whenever posted on social media for public awareness"
          ],
          correct: 2,
          explanation: "Canon 7 states: 'I will not disclose or use any confidential information... without consent... except when required by the laws.'"
        },
        {
          id: "q-w3-3",
          type: "multiple",
          question: "How many hours per week do Filipinos spend on social media, earning the title 'Social Media Capital of the World'?",
          options: [
            "35 hours (global average)",
            "42 hours (global average)",
            "53 hours (11 hours higher than global average)",
            "70 hours (highest recorded)"
          ],
          correct: 2,
          explanation: "The slides state Filipinos spend 53 hours a week on social media platforms, 11 hours higher than the global average of 42 hours."
        },
        {
          id: "q-w3-4",
          type: "multiple",
          question: "According to James Moor, what are the three properties that make computer ethics unique?",
          options: [
            "Speed, Storage, and Bandwidth",
            "Logical Malleability, Impact on Society, and Invisibility Factor",
            "Privacy, Piracy, and Intellectual Property",
            "Hardware, Software, and Peopleware"
          ],
          correct: 1,
          explanation: "James Moor identifies: 1) Logical Malleability, 2) Impact on Society, and 3) Invisibility Factor."
        },
        {
          id: "q-w3-5",
          type: "multiple",
          question: "Which type of invisibility describes programmers embedding their own subjective biases or shortcuts into code?",
          options: [
            "Invisible Abuse",
            "Invisible Programming Values",
            "Invisible Complex Calculation",
            "Invisible Logic Glitch"
          ],
          correct: 1,
          explanation: "Invisible Programming Values refers to moral values, biases, and assumptions silently baked into code by software developers."
        },
        {
          id: "q-w3-6",
          type: "multiple",
          question: "In what scenario is recording or uploading a video of a person without their consent EXEMPT from being improper?",
          options: [
            "When recording an ex-partner in their bedroom",
            "When videotaping for general public welfare, such as an abusive traffic enforcer threatening a driver",
            "When recording a student failing an exam to entertain Facebook users",
            "When filming a customer inside a bank teller booth"
          ],
          correct: 1,
          explanation: "The slide cites the viral video of an abusive traffic enforcer threatening a truck driver (general public welfare) as a valid exemption."
        },
        {
          id: "q-w3-7",
          type: "multiple",
          question: "Taking a picture of Manny Pacquiao is legally permissible in public, but NEVER in which area?",
          options: [
            "Inside an arena during a fight",
            "In a public press conference",
            "Inside a private comfort room / restroom",
            "At a campaign rally"
          ],
          correct: 2,
          explanation: "The slide specifically notes: 'If Manny Pacquiao went to the comfort room, never take his picture or video!'"
        },
        {
          id: "q-w3-8",
          type: "multiple",
          question: "A person who collects real-world computer ethics case studies, attends symposiums, and compares scenarios operates at which level?",
          options: [
            "Pop Computer Ethics",
            "Para Computer Ethics",
            "Theoretical Computer Ethics",
            "Academic Computer Ethics"
          ],
          correct: 1,
          explanation: "Para computer ethics is the level where someone collects examples, clarifies them, looks for similarities, and reads related works."
        },
        {
          id: "q-w3-9",
          type: "multiple",
          question: "What position does the Hacking Community's Constitution take regarding commercial proprietary software for governments?",
          options: [
            "Governments must use only paid proprietary software for security",
            "Governments should never adopt commercial/priced software, fully endorsing the open-source movement",
            "Governments should outlaw open source",
            "Governments should create their own closed OS"
          ],
          correct: 1,
          explanation: "Point 12 states they believe in the open source movement fully; governments adopting commercial software biases the market and slows smaller company innovation."
        },
        {
          id: "q-w3-10",
          type: "multiple",
          question: "Which of the following is Commandment #1 of the Ten Commandments of Computer Ethics?",
          options: [
            "Thou shalt not copy proprietary software",
            "Thou shalt not snoop around in other people's computer files",
            "Thou shalt not use a computer to harm other people",
            "Thou shalt not use a computer to steal"
          ],
          correct: 2,
          explanation: "Commandment 1: 'Thou shalt not use a computer to harm other people.'"
        }
      ]
    },

    // CHECKPOINT 3 (Week 5-6)
    {
      checkpointId: "cp3",
      subject: "SPI101",
      week: "Week 5-6",
      questions: [
        {
          id: "q-w5-1",
          type: "multiple",
          question: "How many times does the word 'PRIVACY' appear in the 1987 Philippine Constitution?",
          options: [
            "Once (in Article III, Section 3)",
            "Ten times across the Bill of Rights",
            "Zero times (it is merely implied)",
            "Five times"
          ],
          correct: 0,
          explanation: "As stated in the slides, the word 'PRIVACY' is mentioned only ONCE in the 1987 Constitution: Article III, Section 3."
        },
        {
          id: "q-w5-2",
          type: "multiple",
          question: "Under the Anti-Money Laundering Act (AMLA), banks must report single-transaction deposits of at least what amount?",
          options: [
            "₱100,000",
            "₱300,000",
            "₱500,000",
            "₱1,000,000"
          ],
          correct: 1,
          explanation: "Under AMLA, an individual deposit of at least Three Hundred Thousand Pesos (₱300,000) in a single transaction triggers mandatory reporting to AMLC."
        },
        {
          id: "q-w5-3",
          type: "multiple",
          question: "Pedro enters an LRT station with a sealed wedding gift. Security guards demand he open it. What legal exception applies?",
          options: [
            "Lawful search warrant from a judge",
            "Public order or safety requirement",
            "Anti-Wiretapping Law",
            "Exclusionary rule"
          ],
          correct: 1,
          explanation: "Public order or safety in crowded transit hubs authorizes security personnel to inspect bags to protect public safety against terrorism."
        },
        {
          id: "q-w5-4",
          type: "multiple",
          question: "What did the Supreme Court hold regarding the constitutionality of SALN disclosure under RA 3019?",
          options: [
            "It is unconstitutional because it breaches the privacy of public officers",
            "It is constitutional because it passes the Rational Relationship Test to curb corruption and promote honesty",
            "It only applies to the President",
            "It requires a search warrant for each public officer"
          ],
          correct: 1,
          explanation: "The Supreme Court declared RA 3019 valid under police power and the rational relationship test to maintain public service integrity."
        },
        {
          id: "q-w5-5",
          type: "multiple",
          question: "Under RA 4200 (The Anti-Wiretapping Act), whose consent is required to legally record a private conversation?",
          options: [
            "The consent of at least one party",
            "The authorization of all parties to the conversation",
            "Consent of any listening bystander",
            "Verbal consent of the phone provider"
          ],
          correct: 1,
          explanation: "RA 4200 explicitly requires authorization given by ALL parties to the private conversation."
        },
        {
          id: "q-w5-6",
          type: "multiple",
          question: "Can a spouse break open their partner's locked cabinet to obtain proof of marital infidelity?",
          options: [
            "Yes, marriage removes all individual privacy rights",
            "No, the Supreme Court declared marriage does not shed a person's individual integrity or constitutional right to privacy",
            "Yes, if they suspect immediate adultery",
            "Only if they have a notarized affidavit"
          ],
          correct: 1,
          explanation: "The SC ruled that intimacy between spouses does not justify ransacking locked drawers; a person retains their constitutional privacy rights."
        },
        {
          id: "q-w5-7",
          type: "multiple",
          question: "What is the privacy right status of convicted prisoners and detained individuals?",
          options: [
            "They possess absolute privacy in their prison cells",
            "They have a diminished expectation of privacy rights inherent to lawful detention under RA 7438",
            "They lose all human rights completely",
            "Their privacy rights are identical to private citizens at home"
          ],
          correct: 1,
          explanation: "By the very fact of detention or imprisonment, detainees have a diminished expectation of privacy rights."
        },
        {
          id: "q-w5-8",
          type: "multiple",
          question: "Which of the following is NOT one of the Data Privacy Principles under Section 11 of RA 10173?",
          options: [
            "Collected for specified and legitimate purposes",
            "Adequate and not excessive (data minimization)",
            "Retained indefinitely forever for future unannounced marketing",
            "Processed fairly and lawfully"
          ],
          correct: 2,
          explanation: "Under RA 10173, data must be retained ONLY for as long as necessary for the fulfillment of the declared purpose."
        },
        {
          id: "q-w5-9",
          type: "multiple",
          question: "What is the classic legal definition of 'due process of law'?",
          options: [
            "'A law that acts immediately without warning'",
            "'A law which hears before it condemns, which proceeds upon inquiry, and renders judgment only after trial'",
            "'A regulation issued exclusively by the military'",
            "'Any law published in an official gazette'"
          ],
          correct: 1,
          explanation: "The jurisprudence defines due process as: 'A law which hears before it condemns; which proceeds upon inquiry, and renders judgment only after trial.'"
        },
        {
          id: "q-w5-10",
          type: "multiple",
          question: "In software engineering, what common feature directly embodies the Due Process Clause?",
          options: [
            "A dark mode toggle button",
            "A confirmation dialog ('Do you want to save changes to file.doc? [Yes] [No] [Cancel]') before destructive file operations",
            "Minified JavaScript code",
            "Database indexing"
          ],
          correct: 1,
          explanation: "The slide explains that prompt confirmation dialogs give users the 'right to be heard' when a clear danger of accidental file loss occurs."
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
                  "question": "Given hypothesis p is False and conclusion q is False. What is the truth value of the implication p \u2192 q?",
                  "options": [
                        "True",
                        "False",
                        "Undefined",
                        "Contradiction"
                  ],
                  "correct": 0,
                  "explanation": "An implication p \u2192 q is only False when T \u2192 F. When p is False (F \u2192 F), the conditional is vacuously TRUE."
            },
            {
                  "id": "q-ms1-3",
                  "type": "multiple",
                  "question": "How many rows are required in a complete truth table for the formula: (p \u2227 q) \u2192 (r \u2228 s)?",
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
                        "Implication (\u2192)",
                        "Disjunction (\u2228)",
                        "Conjunction (\u2227)",
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
                        "Universal Quantifier (\u2200)",
                        "Existential Quantifier (\u2203)",
                        "Tautology Quantifier",
                        "Negation Quantifier"
                  ],
                  "correct": 1,
                  "explanation": "The existential quantifier (\u2203x) means 'there exists' or 'for at least one x'."
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
                  "explanation": "101 = 4(25) + 1, where 0 \u2264 1 < 4. Hence q = 25 and r = 1."
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
                  "question": "To prove p \u2192 q by contrapositive, which implication do you prove instead?",
                  "options": [
                        "~p \u2192 ~q",
                        "~q \u2192 ~p",
                        "q \u2192 p",
                        "p \u2227 ~q"
                  ],
                  "correct": 1,
                  "explanation": "The contrapositive of p \u2192 q is ~q \u2192 ~p, which has the identical truth table."
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
                    "asp-for=\"true\"",
                    "runat=\"server\"",
                    "mode=\"backend\"",
                    "server=\"active\""
                ],
                "correct": 1,
                "explanation": "The runat=\"server\" attribute tells ASP.NET to process the element as a server control."
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
                "question": "Which category of server controls includes <asp:dropdownlist> and <asp:listbox>?",
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
                    "<input type=\"submit\" runat=\"server\">",
                    "<button type=\"ajax\">",
                    "<form action=\"post\" runat=\"client\">",
                    "<asp:redirect runat=\"server\">"
                ],
                "correct": 0,
                "explanation": "<input type=submit runat=server> automatically POSTs form data to the server."
            },
            {
                "id": "q-ipt1-9",
                "type": "multiple",
                "question": "In ASP.NET page syntax, what does the expression <%# ... %> denote?",
                "options": [
                    "Server-side comment",
                    "Page directive",
                    "Data binding expression",
                    "HTML comment"
                ],
                "correct": 2,
                "explanation": "<%# %> is the ASP.NET data binding expression syntax."
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
                    "<% ... %>",
                    "@{ ... }",
                    "<?php ... ?>",
                    "{{ ... }}"
                ],
                "correct": 1,
                "explanation": "Razor code blocks are enclosed in @{ ... }."
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
                    "#",
                    "$",
                    "@",
                    "&"
                ],
                "correct": 2,
                "explanation": "Inline expressions in Razor start with the @ symbol (e.g. @DateTime.Now)."
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
                    "if (Request.Method == \"SEND\")",
                    "if (IsPost)",
                    "if (Form.Submitted)",
                    "if (PostBack == true)"
                ],
                "correct": 1,
                "explanation": "Razor provides the built-in boolean condition if (IsPost) to check for POST submissions."
            },
            {
                "id": "q-ipt4-8",
                "type": "multiple",
                "question": "Which method converts an input string from Request[\"num\"] into an integer in Razor?",
                "options": [
                    ".ToInt32()",
                    ".AsInt()",
                    ".ParseInt()",
                    ".CastToNumber()"
                ],
                "correct": 1,
                "explanation": "Razor provides the .AsInt() extension method on string inputs (e.g. num1.AsInt())."
            },
            {
                "id": "q-ipt4-9",
                "type": "multiple",
                "question": "What will @DateTime.Now.ToShortDateString() output in a Razor view?",
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
                    "#Html.",
                    "@Html.",
                    "$Form.",
                    "%Helper."
                ],
                "correct": 1,
                "explanation": "Html helpers are accessed using the @Html. prefix in Razor views."
            },
            {
                "id": "q-ipt5-3",
                "type": "multiple",
                "question": "What is the primary difference between @Html.TextBox() and @Html.TextBoxFor()?",
                "options": [
                    "TextBox() renders an image, while TextBoxFor() renders text",
                    "TextBox() is loosely typed (uses a string name), while TextBoxFor() is strongly typed (uses lambda expressions tied to a model)",
                    "TextBoxFor() only works in Web Forms",
                    "There is no difference"
                ],
                "correct": 1,
                "explanation": "TextBox() is loosely typed with string parameters; TextBoxFor() is strongly typed with compile-time model properties."
            },
            {
                "id": "q-ipt5-4",
                "type": "multiple",
                "question": "Which HTML control is generated by the helper call @Html.Password(\"userPass\")?",
                "options": [
                    "<input type=\"text\">",
                    "<input type=\"password\">",
                    "<input type=\"hidden\">",
                    "<textarea>"
                ],
                "correct": 1,
                "explanation": "Html.Password renders an <input type=\"password\"> that masks entered characters."
            },
            {
                "id": "q-ipt5-5",
                "type": "multiple",
                "question": "Which HTML Helper is used to generate a multi-line text input field?",
                "options": [
                    "@Html.TextBox()",
                    "@Html.TextArea()",
                    "@Html.MultiInput()",
                    "@Html.ListBox()"
                ],
                "correct": 1,
                "explanation": "@Html.TextArea() renders a <textarea> element supporting multiple rows and columns."
            },
            {
                "id": "q-ipt5-6",
                "type": "multiple",
                "question": "Which helper generates a non-editable dropdown selection control (<select><option>)?",
                "options": [
                    "@Html.ListBox()",
                    "@Html.DropDownList()",
                    "@Html.ComboBox()",
                    "@Html.OptionPicker()"
                ],
                "correct": 1,
                "explanation": "@Html.DropDownList() creates a <select> element that restricts the user to choosing one item."
            },
            {
                "id": "q-ipt5-7",
                "type": "multiple",
                "question": "What class is commonly passed into @Html.DropDownList to wrap an IEnumerable collection of options?",
                "options": [
                    "ArrayList",
                    "SelectList",
                    "DataCollection",
                    "OptionGroup"
                ],
                "correct": 1,
                "explanation": "new SelectList(strCourses) is passed to DropDownList to populate items."
            },
            {
                "id": "q-ipt5-8",
                "type": "multiple",
                "question": "Which HTML Helper renders an anchor tag hyperlink (<a>) in ASP.NET MVC?",
                "options": [
                    "@Html.HyperLink()",
                    "@Html.ActionLink()",
                    "@Html.Anchor()",
                    "@Html.UrlLink()"
                ],
                "correct": 1,
                "explanation": "@Html.ActionLink() generates an <a> anchor tag pointing to a controller action."
            },
            {
                "id": "q-ipt5-9",
                "type": "multiple",
                "question": "In @Html.RadioButton(\"Gender\", \"Male\", true, new { id = \"male\" }), what does the third parameter (true) specify?",
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
                    "@Html.Editor() or @Html.EditorFor()",
                    "@Html.Display()",
                    "@Html.Label()",
                    "@Html.ActionLink()"
                ],
                "correct": 0,
                "explanation": "Editor() inspects metadata and data types to dynamically output appropriate form controls (e.g. numeric input, date picker, text)."
            }
        ]
    }
  ]
};

// Expose globally for browser
if (typeof window !== "undefined") {
  window.REVIEWER_DATA = REVIEWER_DATA;
}
