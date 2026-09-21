# 📐 MS101: Discrete Mathematics — Complete Chronological Reviewer
> **Student:** Luigi Emanuel Britania  
> **Course / Year / Section:** BSIT 3rd Year — SBIT3G  
> **Institution:** Quezon City University (QCU) — College of Computer Studies  
> **Schedule:** Monday 6:00 PM – 9:00 PM (3 Units)  
> **Academic Year:** 2026–2027, 1st Semester  

---

## 📌 Table of Contents
1. [Checkpoint 1: Weeks 2–4 — Logic and Sets](#checkpoint-1-weeks-24--logic-and-sets)
2. [Checkpoint 2: Week 5 — Applications of Number Theory](#checkpoint-2-week-5--applications-of-number-theory)
3. [Checkpoint 3: Week 6 — Mathematical Theory & Proofs](#checkpoint-3-week-6--mathematical-theory--proofs)
4. [Master Formulas & Exam Traps Cheat Sheet](#master-formulas--exam-traps-cheat-sheet)

---

## Checkpoint 1: Weeks 2–4 — Logic and Sets

### 1. What is Discrete Mathematics?
- Deals with objects that can consider **only distinct, separated values**.
- Involves discrete elements using algebra and arithmetic (unlike continuous mathematics like Calculus).

### 2. Logic & Arguments
- **Logic:** The study of consequences; the art and science of reasoning.
- **Argument Structure:**
  $$\text{Premises} + \text{Conclusion} = \text{Argument}$$
- **Validity:**
  - An argument is **valid** if the conclusion must be true whenever all premises are true.
  - An argument is **invalid** if all premises can be true while the conclusion is false.

### 3. Propositional Logic (PL)
- **Proposition:** A declarative sentence that is either **true (T)** or **false (F)**, but **not both**.
- **Examples of Propositions:**
  - *"Manila is the capital of the Philippines."* (True)
  - *$1 + 1 = 2$* (True)
- **Non-Propositions (NOT propositions):**
  - Questions: *"What time is it?"*
  - Exclamations: *"Wow!"*
  - Open equations with unbound variables: *$x \text{ is an integer}$* or *$x + 2 = 5$*.

### 4. Logical Connectives & Precedence
Propositions are combined using connectives:
1. **Negation / NOT ($\neg, \sim$):** Inverts truth value ($\neg T = F, \neg F = T$).
2. **Conjunction / AND ($\land$):** True **only when both** $p$ and $q$ are true.
3. **Disjunction / OR ($\lor$):** True as long as **at least one** operand is true.
4. **Implication / Conditional ($\to, \Rightarrow$):** "If $p$, then $q$".
   - $p$ is the hypothesis/premise; $q$ is the conclusion.
   - **Crucial Rule:** $p \to q$ is **false ONLY when** $p$ is True and $q$ is False ($T \to F = F$). In all other cases, it is True!
5. **Biconditional / IF AND ONLY IF ($\leftrightarrow, \Leftrightarrow$):** True when $p$ and $q$ have the **same truth value** (both True or both False).

#### Precedence Hierarchy (Order of Operations):
1. **NOT ($\neg$)** *(Highest)*
2. **AND ($\land$)**
3. **OR ($\lor$)**
4. **IF-THEN ($\to$)**
5. **IF AND ONLY IF ($\leftrightarrow$)** *(Lowest)*

### 5. Truth Tables & Sentence Classification
- **Formula for Rows:**
  $$R = 2^n$$
  Where $n$ is the number of distinct propositional variables (e.g. 2 variables $p, q \implies 2^2 = 4$ rows; 3 variables $p, q, r \implies 2^3 = 8$ rows).
- **Classification of Sentences:**
  - **Tautology (Valid):** Always True under every single interpretation.
  - **Contradiction (Absurdity / Unsatisfiable):** Always False under every single interpretation.
  - **Contingency (Satisfiable):** True for some interpretations and false for others.

### 6. Predicates and Quantifiers
- **Predicate:** A statement containing variables whose value is unspecified (e.g. $P(x): x > 6$).
- **Universal Quantifier ($\forall x$):**
  - Read: *"For all $x$,"* *"for every $x$,"* *"for any $x$"*.
  - True only if $P(x)$ holds for every single element in the domain.
- **Existential Quantifier ($\exists x$):**
  - Read: *"There exists an $x$,"* *"for some $x$,"* *"for at least one $x$"*.
  - True if at least one value in the domain satisfies $P(x)$.

### 7. Set Theory Essentials
- **Set:** An unordered collection of distinct objects (called elements).
- **Membership:** $x \in A$ ($x$ is an element of $A$); $x \notin A$ ($x$ is not an element of $A$).
- **Specification Methods:**
  - *Roster Method:* List of elements inside curly braces: $V = \{a, e, i, o, u\}$.
  - *Rule / Set Builder Method:* Description of property: $V = \{x \mid x \text{ is a vowel in the English alphabet}\}$.
- **Empty Set / Null Set:** Contains no elements, denoted by $\emptyset$ or $\{\}$. Note: $\{\emptyset\} \ne \emptyset$ (the former has cardinality 1!).
- **Cardinality ($|A|$):** The number of elements in set $A$.
  - Example: If $A = \{23, 24, \dots, 38\}$, cardinality $= 38 - 23 + 1 = 16$.
  - Example: If $B = \{1, \{2, 3, 4\}, \emptyset\}$, cardinality $= 3$.
- **Subset ($A \subseteq B$):** Every element of $A$ is also in $B$.
- **Power Set ($P(A)$):** The set of all subsets of $A$.
  - Formula for size: $|P(A)| = 2^{|A|}$.
  - If $A = \{1, 2, 3\}$, then $|P(A)| = 2^3 = 8$ subsets:  
    $P(A) = \{\emptyset, \{1\}, \{2\}, \{3\}, \{1, 2\}, \{1, 3\}, \{2, 3\}, \{1, 2, 3\}\}$.
- **Set Operations:**
  - **Union ($A \cup B$):** Elements in $A$ OR in $B$ (or both).
  - **Intersection ($A \cap B$):** Elements in BOTH $A$ and $B$.
  - **Difference ($A - B$):** Elements in $A$ that are NOT in $B$.
  - **Complement ($A'$ or $\overline{A}$):** Elements in universal set $U$ not in $A$.

---

## Checkpoint 2: Week 5 — Applications of Number Theory

### 1. What is Number Theory?
- The branch of mathematics devoted to the study of **natural numbers ($\mathbb{N}$)** and their **divisibility properties**.

### 2. Divisibility Rules
An integer $n$ is divisible by:
- **2:** If the last digit is even (0, 2, 4, 6, 8).
- **3:** If the sum of its digits is divisible by 3.
- **4:** If the number formed by the last two digits is divisible by 4.
- **5:** If the last digit is 0 or 5.
- **6:** If the number is divisible by **both 2 and 3**.
- **8:** If the number formed by the last three digits is divisible by 8.
- **9:** If the sum of its digits is divisible by 9.
- **10:** If the last digit is 0.

### 3. Fundamental Divisibility Theorems
For integers $a, b, c$:
1. If $a \mid b$ and $a \mid c$, then $a \mid (b + c)$.  
   *(Example: $3 \mid 6$ and $3 \mid 9 \implies 3 \mid 15$)*.
2. If $a \mid b$, then $a \mid bc$ for all integers $c$.  
   *(Example: $5 \mid 10 \implies 5 \mid 20, 30, 40$)*.
3. If $a \mid b$ and $b \mid c$, then $a \mid c$ (Transitivity).  
   *(Example: $4 \mid 8$ and $8 \mid 24 \implies 4 \mid 24$)*.

### 4. Primes vs Composites
- **Prime:** An integer $p > 1$ whose only positive divisors are $1$ and $p$.
- **Composite:** An integer $n > 1$ that is not prime (has factors other than 1 and itself).
- **⚠️ Exam Trap:** The numbers **0 and 1 are NEITHER prime nor composite**!

### 5. The Division Algorithm (Euclid)
For any integer $a$ (dividend) and positive integer $d$ (divisor), there exist **unique integers** $q$ (quotient) and $r$ (remainder) such that:
$$a = dq + r \quad \text{where} \quad 0 \le r < d$$
- Example: If $a = 101$ and $d = 4$:
  $$101 = 4(25) + 1 \implies q = 25, r = 1$$

### 6. Greatest Common Divisor (GCD) & Least Common Multiple (LCM)
- **GCD:** The largest positive integer that divides both $a$ and $b$, written $\gcd(a, b)$.
  - Example: Positive divisors of 48: $\{1, 2, 3, 4, 6, 8, 12, 16, 24, 48\}$.  
    Positive divisors of 72: $\{1, 2, 3, 4, 6, 8, 12, 18, 24, 36, 72\}$.  
    $\gcd(48, 72) = 24$.
- **LCM:** The smallest positive integer that is evenly divisible by both $a$ and $b$.
  - Fundamental relationship:
    $$\gcd(a, b) \times \text{lcm}(a, b) = a \times b$$

---

## Checkpoint 3: Week 6 — Mathematical Theory & Proofs

### 1. Essential Terminologies
- **Axiom:** A basic assumption about mathematical structures accepted without proof.
- **Proof:** A demonstration that a statement is true, consisting of a valid sequence of logical statements.
- **Theorem:** A statement that has been proven to be true.
- **Rules of Inference:** Logical connecting steps that link statements in a proof.
- **Lemma:** A "helper" theorem used as an intermediate step to prove a larger theorem.
- **Corollary:** A proposition that follows directly from a previously proven theorem with minimal additional proof.
- **Conjecture:** A statement whose truth value is unknown; becomes a theorem once proven.

### 2. Methods of Proof
#### A. Direct Proof
- To prove an implication $p \to q$, assume $p$ is True, apply definitions and algebra, and deduce that $q$ must be True.
- *Example Theorem:* "If $n$ is an odd integer, then $n^2$ is odd."
  - *Proof:* If $n$ is odd, $n = 2k + 1$ for some integer $k$.  
    $n^2 = (2k + 1)^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1$.  
    Let $m = 2k^2 + 2k$. Then $n^2 = 2m + 1$, which is odd by definition. $\blacksquare$

#### B. Indirect Proof (Proof by Contrapositive)
- Uses the logical equivalence:
  $$p \to q \equiv \neg q \to \neg p$$
- Assume $\neg q$ (the negation of the conclusion) is True, and prove that $\neg p$ (the negation of the hypothesis) must follow.
- *Example Theorem:* "If $3n + 2$ is odd, then $n$ is odd."
  - *Proof by Contrapositive:* Show that if $n$ is even ($\neg q$), then $3n + 2$ is even ($\neg p$).  
    If $n = 2k$, then $3n + 2 = 3(2k) + 2 = 6k + 2 = 2(3k + 1)$, which is even. $\blacksquare$

#### C. Principle of Mathematical Induction
Used to prove that a predicate $P(n)$ is true for all natural numbers $n$:
1. **Basis Step:** Show that $P(0)$ (or $P(1)$) is True.
2. **Inductive Step:** Show that for any arbitrary $k \in \mathbb{N}$, if $P(k)$ is True (Inductive Hypothesis), then $P(k + 1)$ must also be True ($P(k) \to P(k + 1)$).
3. **Conclusion:** By induction, $P(n)$ is True for all natural numbers $n$.
- **⚠️ Key Rule:** Mathematical Induction cannot be used to *discover* theorems, only to *prove* them.

---

## Master Formulas & Exam Traps Cheat Sheet

| Concept | Formula / Rule | Exam Trap Alert |
| :--- | :--- | :--- |
| **Truth Table Rows** | $R = 2^n$ ($n$ = variables) | $p, q, r \implies 2^3 = 8$ rows, not 6! |
| **Implication ($p \to q$)** | False ONLY when $T \to F$ | If hypothesis $p$ is False, $p \to q$ is automatically **TRUE**! |
| **Biconditional ($p \leftrightarrow q$)**| True when truth values match | $F \leftrightarrow F$ is **TRUE**! |
| **Connective Precedence** | $\neg > \land > \lor > \to > \leftrightarrow$ | NOT has highest priority; $\leftrightarrow$ has lowest. |
| **Power Set Cardinality** | $|P(A)| = 2^{|A|}$ | An empty set $\emptyset$ has power set size $2^0 = 1$ ($\{\emptyset\}$). |
| **0 and 1 Primes Status** | Neither prime nor composite | 1 is NOT a prime number! |
| **Division Algorithm** | $a = dq + r, 0 \le r < d$ | Remainder $r$ can never be negative or $\ge d$. |
| **GCD and LCM Formula** | $\gcd(a, b) \times \text{lcm}(a, b) = a \times b$ | Multiplying GCD and LCM gives the product of the two numbers. |
| **Contrapositive Equivalence**| $p \to q \equiv \neg q \to \neg p$ | Inverse ($\neg p \to \neg q$) is NOT logically equivalent to conditional! |
| **Induction Purpose** | Proves statements for all natural numbers | Cannot discover theorems, only proves them! |
