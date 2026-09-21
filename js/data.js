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
      status: "upcoming",
      color: "blue",
      badge: "Slot Ready",
      checkpointsCount: 0,
      questionsCount: 0,
      flashcardsCount: 0
    },
    {
      code: "IPT102",
      title: "Integrative Programming and Tech 2",
      schedule: "Tue 2:30PM - 5:30PM & 7:00PM - 9:00PM",
      units: 3,
      status: "upcoming",
      color: "purple",
      badge: "Slot Ready",
      checkpointsCount: 0,
      questionsCount: 0,
      flashcardsCount: 0
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
    }
  ],

  // Flashcards bank
  flashcards: [
    // Week 2 Flashcards
    {
      id: "fc-w2-1",
      checkpointId: "cp1",
      week: "Week 2",
      question: "What is Subjective Relativism?",
      answer: "The theory holding that each individual person decides right or wrong for themselves. Captured in: 'What's right for you may not be right for me.'",
      tag: "Ethical Theory"
    },
    {
      id: "fc-w2-2",
      checkpointId: "cp1",
      week: "Week 2",
      question: "How does Cultural Relativism differ from Subjective Relativism?",
      answer: "Cultural Relativism grounds right and wrong in society's collective customs and moral guidelines, whereas Subjective Relativism grounds morality entirely in individual opinion.",
      tag: "Ethical Theory"
    },
    {
      id: "fc-w2-3",
      checkpointId: "cp1",
      week: "Week 2",
      question: "What is Divine Command Theory based on?",
      answer: "It is based on OBEDIENCE to God's will and holy texts, NOT on human reason or calculation.",
      tag: "Ethical Theory"
    },
    {
      id: "fc-w2-4",
      checkpointId: "cp1",
      week: "Week 2",
      question: "What is the core principle of Ethical Egoism?",
      answer: "Each person should focus exclusively on their own self-interest; the morally right act provides the individual with maximum long-term benefit.",
      tag: "Ethical Theory"
    },
    {
      id: "fc-w2-5",
      checkpointId: "cp1",
      week: "Week 2",
      question: "Give 3 classic counter-examples that defy Ethical Egoism.",
      answer: "1) Mother starving herself to give bread to her child. 2) Father working overtime for family needs. 3) Sibling dropping out so others can study.",
      tag: "Scenario / Application"
    },
    {
      id: "fc-w2-6",
      checkpointId: "cp1",
      week: "Week 2",
      question: "What is Consequentialism and what is Jeremy Bentham's Utilitarian motto?",
      answer: "Consequentialism: 'The end justifies the means.' Bentham's Utilitarianism: 'The greatest happiness for the greatest number.'",
      tag: "Ethical Theory"
    },
    {
      id: "fc-w2-7",
      checkpointId: "cp1",
      week: "Week 2",
      question: "What is Kantianism (Deontology) and its primary author?",
      answer: "Authored by 18th-century philosopher Immanuel Kant. It is obligation-based, focusing on duty and pure reason: 'Act morally regardless of the consequences.'",
      tag: "Ethical Theory"
    },
    {
      id: "fc-w2-8",
      checkpointId: "cp1",
      week: "Week 2",
      question: "Why is the Anti-Political Dynasty provision in the 1987 PH Constitution non-self-executing?",
      answer: "It requires an enabling law enacted by Congress. Because passing it conflicts with lawmakers' self-interest, it remained unpassed for decades, violating Kantian duty.",
      tag: "Philippine Law & Ethics"
    },
    {
      id: "fc-w2-9",
      checkpointId: "cp1",
      week: "Week 2",
      question: "Why is the persuasive power of law stronger than ethics?",
      answer: "Law enforces compliance through legal compulsion, sanctions, and imprisonment (e.g. BIR criminal tax summons), whereas ethics relies only on voluntary conscience.",
      tag: "Law vs Ethics"
    },
    {
      id: "fc-w2-10",
      checkpointId: "cp1",
      week: "Week 2",
      question: "Differentiate Civil Obligation from Natural Obligation regarding family support.",
      answer: "Civil: Parents are legally mandated to support minor children (court action available). Natural: Children supporting elderly parents is moral; parents cannot legally compel them under current law.",
      tag: "Legal Concepts"
    },
    {
      id: "fc-w2-11",
      checkpointId: "cp1",
      week: "Week 2",
      question: "Why did no one copycat the 2000 LOVE BUG virus after 2000?",
      answer: "The enactment of RA 8792 (E-Commerce Act) established criminal penalties and prison terms, deterring copycats through legal consequences.",
      tag: "IT Case Study"
    },

    // Week 3-4 Flashcards
    {
      id: "fc-w3-1",
      checkpointId: "cp2",
      week: "Week 3-4",
      question: "What are the 4 benefits of following a Professional Code of Ethics?",
      answer: "1. Ethical Decision Making\n2. High Standards of Practice & Ethical Behavior\n3. Trust and Respect from the General Public\n4. Evaluation Benchmark",
      tag: "Professional Ethics"
    },
    {
      id: "fc-w3-2",
      checkpointId: "cp2",
      week: "Week 3-4",
      question: "What does Canon 4 of the Filipino IT Code of Ethics mandate?",
      answer: "Comply and strictly abide by intellectual property laws, patent laws, and other related laws in respect of Information Technology.",
      tag: "Filipino IT Code"
    },
    {
      id: "fc-w3-3",
      checkpointId: "cp2",
      week: "Week 3-4",
      question: "What are the 6 obligations recognized in the AITP Code of Ethics?",
      answer: "1) Management, 2) Fellow Members, 3) Society, 4) College/University, 5) Employer, and 6) Country.",
      tag: "Professional Ethics"
    },
    {
      id: "fc-w3-4",
      checkpointId: "cp2",
      week: "Week 3-4",
      question: "List the 8 Principles of the Software Engineering Code (ACM/IEEE-CS).",
      answer: "1. Public, 2. Client and Employer, 3. Product, 4. Judgment, 5. Management, 6. Profession, 7. Colleagues, 8. Self.",
      tag: "ACM / IEEE Principles"
    },
    {
      id: "fc-w3-5",
      checkpointId: "cp2",
      week: "Week 3-4",
      question: "What are the three properties that make computers unique according to James Moor?",
      answer: "1. Logical Malleability\n2. Impact on Society\n3. Invisibility Factor",
      tag: "Computer Ethics Theory"
    },
    {
      id: "fc-w3-6",
      checkpointId: "cp2",
      week: "Week 3-4",
      question: "What are the 3 kinds of invisibility identified by James Moor?",
      answer: "1. Invisible Abuse (e.g. backdoors, theft)\n2. Invisible Programming Values (embedded biases/shortcuts)\n3. Invisible Complex Calculation (algorithms humans cannot manually verify)",
      tag: "Computer Ethics Theory"
    },
    {
      id: "fc-w3-7",
      checkpointId: "cp2",
      week: "Week 3-4",
      question: "Explain the three 'Levels' of Computer Ethics.",
      answer: "• Pop: Sensitizing the public via media & TV.\n• Para: Case collection and scenario analysis.\n• Theoretical: Applying scholarly philosophical theories.",
      tag: "Computer Ethics Levels"
    },
    {
      id: "fc-w3-8",
      checkpointId: "cp2",
      week: "Week 3-4",
      question: "How many hours a week do Filipinos spend on social media compared to global average?",
      answer: "Filipinos average 53 hours a week, which is 11 hours higher than the global average of 42 hours a week (Philippines = Social Media Capital).",
      tag: "Philippine Context"
    },
    {
      id: "fc-w3-9",
      checkpointId: "cp2",
      week: "Week 3-4",
      question: "What are the 3 exemptions where taking/posting unauthorized media of a person is allowed?",
      answer: "1. News of the day / press items.\n2. General public welfare (e.g. viral abusive traffic enforcer).\n3. Public personalities in public places (e.g. Pacquiao in public, never in restroom).",
      tag: "Photo Ethics & Law"
    },
    {
      id: "fc-w3-10",
      checkpointId: "cp2",
      week: "Week 3-4",
      question: "What are the 3 crucial goals of the Hacking Community according to its constitution?",
      answer: "a) Direct Democracy in cyberspace.\nb) Belief that information should be free to all.\nc) Testing and exposing vulnerabilities of data storage systems.",
      tag: "Hacker Ethics"
    },

    // Week 5-6 Flashcards
    {
      id: "fc-w5-1",
      checkpointId: "cp3",
      week: "Week 5-6",
      question: "How many times is the word 'PRIVACY' mentioned in the 1987 PH Constitution and where?",
      answer: "Only ONCE, in Article III, Section 3 ('The privacy of communication and correspondence shall be inviolable...').",
      tag: "Constitutional Law"
    },
    {
      id: "fc-w5-2",
      checkpointId: "cp3",
      week: "Week 5-6",
      question: "What is the consequence of evidence seized in violation of privacy under Art. III Sec. 3?",
      answer: "It is inadmissible for any purpose in any proceeding (The Exclusionary Rule / Fruit of the Poisonous Tree).",
      tag: "Constitutional Law"
    },
    {
      id: "fc-w5-3",
      checkpointId: "cp3",
      week: "Week 5-6",
      question: "What are the 3 lawful exceptions where privacy can be breached?",
      answer: "1. Lawful Court Order (Search Warrant issued on Probable Cause).\n2. Public Order or Safety (e.g. MRT/LRT bag searches).\n3. Express provision of the law (e.g. AMLA bank reports >= P300,000).",
      tag: "Constitutional Law"
    },
    {
      id: "fc-w5-4",
      checkpointId: "cp3",
      week: "Week 5-6",
      question: "What is the two-step Rational Relationship Test used by the Supreme Court?",
      answer: "1. Determine if the policy has a reasonable purpose/rational basis (legitimate end).\n2. Determine if the policy is reasonably related to achieving that legitimate end.",
      tag: "Judicial Doctrine"
    },
    {
      id: "fc-w5-5",
      checkpointId: "cp3",
      week: "Week 5-6",
      question: "Why did the Supreme Court uphold the SALN requirement under RA 3019?",
      answer: "It satisfies the rational relationship test: minimizing official corruption and maintaining honesty in public service outweighs individual privacy claims.",
      tag: "Landmark Case"
    },
    {
      id: "fc-w5-6",
      checkpointId: "cp3",
      week: "Week 5-6",
      question: "What does the Anti-Wiretapping Act (RA 4200) require for private recording?",
      answer: "It requires authorization/consent from ALL parties involved in the private conversation.",
      tag: "Philippine Law"
    },
    {
      id: "fc-w5-7",
      checkpointId: "cp3",
      week: "Week 5-6",
      question: "Can a wife break into her husband's private cabinet to search for proof of adultery?",
      answer: "NO. The Supreme Court ruled marriage does not strip an individual of their right to privacy; ransacking for infidelity evidence is unlawful.",
      tag: "Spousal Privacy"
    },
    {
      id: "fc-w5-8",
      checkpointId: "cp3",
      week: "Week 5-6",
      question: "What is the privacy expectation of convicted prisoners and detainees?",
      answer: "They have a diminished expectation of privacy rights inherent to lawful detention and security under RA 7438.",
      tag: "Prisoner Rights"
    },
    {
      id: "fc-w5-9",
      checkpointId: "cp3",
      week: "Week 5-6",
      question: "What law is RA 10173 and what are its key processing principles?",
      answer: "The Data Privacy Act of 2012. Section 11 Principles: Specified/legitimate purpose, fairly/lawfully processed, accurate/updated, adequate & not excessive, retained only as needed, identifiable form limited.",
      tag: "Data Privacy Act"
    },
    {
      id: "fc-w5-10",
      checkpointId: "cp3",
      week: "Week 5-6",
      question: "What is Due Process of Law and where did it originate conceptually?",
      answer: "Definition: 'A law which hears before it condemns; which proceeds upon inquiry, and renders judgment only after trial.' Originates conceptually from the Garden of Eden.",
      tag: "Due Process"
    },
    {
      id: "fc-w5-11",
      checkpointId: "cp3",
      week: "Week 5-6",
      question: "How do software engineers apply the Due Process Clause in application design?",
      answer: "By creating confirmation prompts before destructive actions (e.g. 'Do you want to save changes to document.doc? [Yes] [No] [Cancel]'), granting the user a right to be heard before loss of data.",
      tag: "Software Engineering & Law"
    }
  ],

  // Checkpoint Quizzes
  quizzes: [
    // CHECKPOINT 1 (Week 2)
    {
      checkpointId: "cp1",
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
    }
  ]
};

// Expose globally for browser
if (typeof window !== "undefined") {
  window.REVIEWER_DATA = REVIEWER_DATA;
}
