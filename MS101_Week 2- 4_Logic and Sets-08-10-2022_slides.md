# 📑 Slide Presentation Notes

> Extracted 55 slides automatically.

---

## Slide 1: WEEK 2 - 4LOGIC and SETS

- MS101 – DISCRETE MATHEMATICS

---

## Slide 2: •	Describe the syntax and semantics of propositional logic

- •	Illustrate the logical relationships of proposition using truth table.
- •	Distinguish mathematical notations and symbols related to sets.
- •	Perform the relations and operations on sets
- •	Recognize the principles of Venn Diagrams.
- MS101 – DISCRETE MATHEMATICS

---

## Slide 3: What is Discrete Mathematics?

- Discrete mathematics is the branch of mathematics dealing with objects that can consider only distinct, separated values, involving discrete elements that uses algebra and arithmetic.
- WEEK 2 – 4 : Logic and Sets
- MS101 – DISCRETE MATHEMATICS

---

## Slide 4: What is Logic?

- It is the study of consequences.
- It is also the art and science of reasoning.
- It is a science since it uses principles, laws and methods in solving problems such as in proving the validity of a given argument.
- WEEK 2 – 4 : Logic and Sets
- MS101 – DISCRETE MATHEMATICS

---

## Slide 5: Cont…

- An argument is a set of statements, one of which is called the conclusion and the rest of which are called premises. An argument is said to be valid if the conclusion must be true whenever the premises are all true. An argument is invalid if it is not valid; it is possible for all the premises to be true and the conclusion to be false
- WEEK 2 – 4 : Logic and Sets
- MS101 – DISCRETE MATHEMATICS
- premises
- conclusion
- +
- =
- argument

---

## Slide 6: Example

- All mathematicians wear earrings.  Anyone who wears earrings is an algebraist.  Therefore, all mathematicians are algebraists.
- All IBM computers can be connected to modems.  Computers with modems are hooked to the Internet.  IBM computers with modems are hooked to the Internet.
- If Howard will take the test and will pass it, then he will be a scholar. He is a scholar.  Thus, he will take the test.
- If Howard will take the test and will pass it, then he will be a scholar.  He is not a scholar.  Thus, either he did not take the test or he did not pass it.
- I will either get a grade of 1.50 or higher in programming or I will not graduate.  If I don’t graduate, I will go to the province.  I got 1.50.  Thus, I will not go to the province.
- WEEK 2 – 4 : Logic and Sets
- MS101 – DISCRETE MATHEMATICS

---

## Slide 7: Mathematical Logic

- is the discipline that mathematicians invented in the late nineteenth and early twentieth centuries so they could stop talking nonsense.
- Axioms, models, and inference rules
- One approach is to come up with a list of axioms that are true statements about the model and a list of inference rules that let us derive new true statements from the axioms. The axioms and inference rules together generate a theory that consists of all statements that can be constructed from the axioms by applying the inference rules.
- WEEK 2 – 4 : Logic and Sets
- MS101 – DISCRETE MATHEMATICS

---

## Slide 8: Example

- All ﬁsh are green (axiom). George Washington is a ﬁsh (axiom). From “all X are Y” and “Z is X”, we can derive “Z is Y” (inference rule). Thus George Washington is green (theorem). Since we can’t do anything else with our two axioms and one inference rule, these three statements together form our entire theory about George Washington, ﬁsh, and greenness. Theories are attempts to describe models. A model is typically a collection of objects and relations between them.
- WEEK 2 – 4 : Logic and Sets
- MS101 – DISCRETE MATHEMATICS

---

## Slide 9: Propositional Logic

- Part of logic which deals with statements that are either true or false (but not both) called propositions.
- A proposition is a declarative statement which is either true or false, but not both
- WEEK 2 – 4 : Logic and Sets
- MS101 – DISCRETE MATHEMATICS

---

## Slide 10: Examples

- Manila is the capital of the Philippines.
- 1 + 1 = 2
- What time is it?
- Wow!
- x is an integer.
- WEEK 2 – 4 : Logic and Sets
- MS101 – DISCRETE MATHEMATICS

---

## Slide 11: Syntax for PL (propositional logic)

- The syntax for propositional logic simply refers to the structure or form of its sentences.  Basically, sentences in PL are constructed using the following building blocks:
- proposition, and
- logical connectives.
- WEEK 2 – 4 : Logic and Sets
- MS101 – DISCRETE MATHEMATICS

---

## Slide 12: Connectives

- Combining propositions to form a new proposition through the use of connectives.
- Basic Logical Connectives
- NOT			4.  IF-THEN
- AND			5.  IF and ONLY IF
- OR
- WEEK 2 – 4 : Logic and Sets
- MS101 – DISCRETE MATHEMATICS

---

## Slide 13: The NEGATION / NOT (~) connective

- the negation of p is written as ¬p, or sometimes ∼p, −p or p. It has the property that it is false when p is true, and true when p is false.
- Example:
- p	:	8 MB of RAM is enough to run Windows ’95.
- ~p	:	8 MB of RAM is not enough to run Windows ’95.
- WEEK 2 – 4 : Logic and Sets
- MS101 – DISCRETE MATHEMATICS

---

## Slide 14: The AND ( ∧ ) connective

- the and of p and q is written as p ∧ q, and is true only when both p and q are true.
- Example:
- p	:	A mouse is an input device.
- q	:	A printer is an output device.
- p ∧ q	:	A mouse is an input device and a printer is an output device.
- WEEK 2 – 4 : Logic and Sets
- MS101 – DISCRETE MATHEMATICS

---

## Slide 15: The OR ( ∨ )  connective

- the or of two propositions p and q is written as p ∨ q, and is true as long as at least one, or possibly both, of p and q is true.
- Example:
- p	:	I will date Ana.
- q	:	I will date Maria.
- p ∨ q	:	I will date Ana or I will date Maria.
- I will date Ana or Maria.
- WEEK 2 – 4 : Logic and Sets
- MS101 – DISCRETE MATHEMATICS

---

## Slide 16: The IF-THEN / IMPLICATION\ ( → ) connective

- this is the most important connective for proofs. An implication represents an “if...then” claim. If p implies q, then we write p → q or p ⇒ q, depending on our typographic convention and the availability of arrow symbols in our favorite font.
- Example:
- p	:	Today is December 24.
- q	:	Tomorrow is Christmas Day.
- p → q	:	If today is December 24 then tomorrow is Christmas Day.
- In the conditional statement p → q, the premise (p) and the conclusion (q).
- WEEK 2 – 4 : Logic and Sets
- MS101 – DISCRETE MATHEMATICS

---

## Slide 17: The IF AND ONLY IF ( ↔ ) connective

- Suppose that p → q and q → p, so that either both p and q are true or both p and q are false. In this case, we write p ↔ q or p ⇔ q, and say that p holds if and only if q holds. The truth of p ↔ q is still just a function of the truth or falsehood of p and q.
- Example:
- p	:	I will marry you.
- q	:	You love me.
- p ↔ q	:	I will marry you if and only if you love me.
- WEEK 2 – 4 : Logic and Sets
- MS101 – DISCRETE MATHEMATICS

---

## Slide 18: The Logical Connectives

- WEEK 2 – 4 : Logic and Sets
- MS101 – DISCRETE MATHEMATICS

---

## Slide 19: Precedence Rules

- (highest priority)		not
- and
- or
- if-then
- (lowest priority)	if and only if
- WEEK 2 – 4 : Logic and Sets
- MS101 – DISCRETE MATHEMATICS

---

## Slide 20: Semantics for PL

- The semantics or meaning of a sentence in propositional logic is the truth or falsity of the sentence.  It is the assignment of a truth value to the sentence.
- WEEK 2 – 4 : Logic and Sets
- MS101 – DISCRETE MATHEMATICS

---

## Slide 21: Truth Table

- A truth table provides the definition for connectives of propositional logic.
- Steps in Creating a Truth Table
- 1. Assign one column for each propositional variable and the resulting proposition.
- 2. Determine the number of rows by the formula:
- R = 2n
- where :	 R is the number of rows
- n is the number of propositional variables
- From the rightmost, propositional variable, assign alternating values of true and false in increments of power of 2 for each column.
- WEEK 2 – 4 : Logic and Sets
- MS101 – DISCRETE MATHEMATICS

---

## Slide 22: The NEGATION / NOT (~) connective

- WEEK 2 – 4 : Logic and Sets
- MS101 – DISCRETE MATHEMATICS
- The AND / CONJUNCTION ( ∧ ) connective

---

## Slide 23: The OR / DISJUNCTION ( ∨ )  connective

- WEEK 2 – 4 : Logic and Sets
- MS101 – DISCRETE MATHEMATICS
- The IF-THEN / IMPLICATION /CONDITIONAL ( → ) connective

---

## Slide 24: The IF AND ONLY IF ( ↔ ) connective

- WEEK 2 – 4 : Logic and Sets
- MS101 – DISCRETE MATHEMATICS

---

## Slide 25: Properties of Sentences

- 1.  Satisfiable
- -A sentence is satisfiable if is true for some interpretation.
- -A satisfiable sentence is also called a contingency.
- Contradictory
- -A sentence is contradictory (or unsatisfiable) if it is false for every
- interpretation.
- -A contradictory sentence is also called and absurdity.
- Valid
- -A sentence is valid if it is true for every interpretation.
- -A valid sentence is also called a tautology
- WEEK 2 – 4 : Logic and Sets
- MS101 – DISCRETE MATHEMATICS

---

## Slide 26: Logical Equivalence

- WEEK 2 – 4 : Logic and Sets
- MS101 – DISCRETE MATHEMATICS

---

## Slide 27: Predicate

- A statement which would be a proposition except for the fact that includes variables whose values are not specified.
- Examples:
- y + 7 = 14
- The sum of the first n odd integers is n2.
- If x > 2, then y = 5
- a + b = 24
- a + b = 13 if and only if b = 10 – a
- WEEK 2 – 4 : Logic and Sets
- MS101 – DISCRETE MATHEMATICS

---

## Slide 28: Notations

- denoted by capital letters followed by the name of the variables which are used by the predicate.
- Examples:
- P(a)		:	a > 6
- Q(y)		:	y is happy.
- R(x,y)		:	x is more friendly than y.
- S(n)		:	n is an interesting course.
- Universe of x and y 	→	all people
- Universe of n		→	all course
- WEEK 2 – 4 : Logic and Sets
- MS101 – DISCRETE MATHEMATICS

---

## Slide 29: Quantifiers

- For a given universe of the variable or domain of discourse, we can say that all or some may satisfy a given predicate, so we need to quantify them.
- WEEK 2 – 4 : Logic and Sets
- MS101 – DISCRETE MATHEMATICS

---

## Slide 30: Universal Quantifier

- x P(x)
- for all x, P(x)
- for every x, P(x)
- for any x, P(x)
- To claim that the predicate is true for all values of x in the universe.
- Example:
- P(x)	-	x is smart.
- Q(x)	-	x is intelligent.
- x ( P(x) ∧ Q(x)
- Every student is smart and intelligent or simply, (P(x) ∧ Q(x))
- x is smart and intelligent.
- WEEK 2 – 4 : Logic and Sets
- MS101 – DISCRETE MATHEMATICS

---

## Slide 31: Existential Quantifier

- x P(x)
- for some x, P(x)
- for at least one x, P(x)
- there exist x such that P(x)
- there is at least one value in the universe of the variable x which satisfies the predicate P(x).
- Example:
- Q(x)	-	x is intelligent.
- P(x)	-	x is smart.
- x (P(x) ∧ Q(x)
- There is at least one student who is both smart and intelligent.
- WEEK 2 – 4 : Logic and Sets
- MS101 – DISCRETE MATHEMATICS

---

## Slide 32: Existential Quantifier

- x P(x)
- for some x, P(x)
- for at least one x, P(x)
- there exist x such that P(x)
- there is at least one value in the universe of the variable x which satisfies the predicate P(x).
- Example:
- Q(x)	-	x is intelligent.
- P(x)	-	x is smart.
- x (P(x) ∧ Q(x)
- There is at least one student who is both smart and intelligent.
- WEEK 2 – 4 : Logic and Sets
- MS101 – DISCRETE MATHEMATICS

---

## Slide 33: What is Set?

- It is a collection of an object in which the objects that belong to the collection.
- Can be a simply an unordered collection of objects.
- Denoted by capital letters.
- The objects that set contains are its elements.
- WEEK 2 – 4 : Logic and Sets
- MS101 – DISCRETE MATHEMATICS

---

## Slide 34: Notation

- We need some notation to make talking about sets easier. Consider,
- A = {1,2,3}.
- This is read,“ A is the set containing the elements 1,2 and 3.”We use curly braces 	“{, }” to enclose elements of a set. Some more notation:
- a ∈ {a,b,c}.
- The symbol “∈” is read “is in” or “is an element of.” Thus the above means that a  is an element of the set containing the letters a, b, and c. Note that this is a true statement. It would also be true to say that d is not in that set:
- WEEK 2 – 4 : Logic and Sets
- MS101 – DISCRETE MATHEMATICS

---

## Slide 35: Set Builder

- ROSTER METHOD
- V = {a,e,i,o,u}
- RULE METHOD
- V = {vowels in the English alphabet}
- or V = { x such that x is set  of vowels  in the English alphabet}
- or V = { x | x is set vowels  in the English alphabet}
- WEEK 2 – 4 : Logic and Sets
- MS101 – DISCRETE MATHEMATICS

---

## Slide 36: Types of Sets

- EMPTY SET
- - also known as NULL SET , it is denoted  by O .  It can be denoted by { }.
- SETS OF CARDINALITY
- -  size of set, or simple the number of elements in the set.
- Example:
- Problem:
- 1. Find the cardinality of A = {23, 24,..., 37, 38}.
- 2. Find the cardinality of B = {1, {2, 3, 4}, ∅}.
- Solution.
- Since 38−23 =15, we can conclude that the cardinality of the set is
- 1. |A| =16 (you need to add one since 23 is included).
- 2. Here |B| = 3. The three elements are the number 1, the set {2,3,4}, and the empty set.
- WEEK 2 – 4 : Logic and Sets
- MS101 – DISCRETE MATHEMATICS

---

## Slide 37: Types of Sets

- SUBSET OF  SET
- - is determine if every element of A is also an element of B.
- Example:
- Set A   is a subset of  Set  B,  written as                   , which means
- WEEK 2 – 4 : Logic and Sets
- MS101 – DISCRETE MATHEMATICS

---

## Slide 38: Types of Sets

- POWER SET
- - set of sets , written as P(A)
- Example:
- Let A = {1,2,3}. Find P(A).
- Solution.
- P(A)is a set of sets, all of which are subsets of A.
- So P(A) = {∅,{1},{2},{3},{1,2},{1,3},{2,3},{1,2,3}}.
- WEEK 2 – 4 : Logic and Sets
- MS101 – DISCRETE MATHEMATICS

---

## Slide 39: Types of Sets

- EQUAL SET
- - two sets are equal  if A and B has exactly  the same elements. Notation  is A=B.
- Example:
- WEEK 2 – 4 : Logic and Sets
- MS101 – DISCRETE MATHEMATICS

---

## Slide 40: Types of Sets

- EQUIVALENT SET
- - two sets are equal  if A and B has exactly  the same elements. Notation  is A=B.
- Example:
- WEEK 2 – 4 : Logic and Sets
- MS101 – DISCRETE MATHEMATICS

---

## Slide 41: Types of Sets

- FINITE SET
- - set that has a finite number of elements, which mean its number of elements can counted.
- Example:
- A= { a,e,i,o,u}, Set A is a finite set with 5 elements.
- WEEK 2 – 4 : Logic and Sets
- MS101 – DISCRETE MATHEMATICS

---

## Slide 42: Types of Sets

- INFINITE SET -  may be countable or uncountable. Some examples are the set of integers {…, -2,1,0,1,2,…}, is countably infinite set, and the set of all real numbers is an uncountable infinite set.
- SINGLETON SET -  known as a unit set with exactly one element.
- JOINT SETS - if they have common elements/s.
- DISJOINT SETS – If they do not have common element/s.
- WEEK 2 – 4 : Logic and Sets
- MS101 – DISCRETE MATHEMATICS

---

## Slide 43: Operation of Sets

- WEEK 2 – 4 : Logic and Sets
- MS101 – DISCRETE MATHEMATICS

---

## Slide 44: Union

- If we want to combine two sets to get the collection of objects.
- Symbolically, C = A∪B,
- Example:
- if A ={1,2,3} and B = {2,3,4}, then A∪B = {1,2,3,4}
- WEEK 2 – 4 : Logic and Sets
- MS101 – DISCRETE MATHEMATICS

---

## Slide 45: Intersection

- We write, C = A∩B and say, “C is the intersection of A and B,” when the elements in C are precisely those both in A and in B.
- Example:
- if A = {1,2,3} and B ={2,3,4}, then A∩B = {2,3}.
- WEEK 2 – 4 : Logic and Sets
- MS101 – DISCRETE MATHEMATICS

---

## Slide 46: Complement

- we might wish to speak of all the elements which are not in a particular set.
- We say B is the compAlement of, write as
- Example:
- When B contains every element not contained in A. So, if our universe is {1,2….,9,10},  and A= {2,3,5,7} then A  =  {1,4,6,8,9,10}.
- WEEK 2 – 4 : Logic and Sets
- MS101 – DISCRETE MATHEMATICS

---

## Slide 47: Difference

- This is the set of all elements which are both elements of A and not elements of B.  Lets start with A and removed all the elements which were in B.
- WEEK 2 – 4 : Logic and Sets
- MS101 – DISCRETE MATHEMATICS

---

## Slide 48: Symmetric Difference

- of two sets it is written as A ⊕ B = { x є X; ( x є A and x є B ) or ( x є A and x є B}.
- Example:
- Let A and B be sets.
- A = {1, 2, 3, 4, 5} , B = {2, 4 , 6, 8, 10
- A ⊕ B = {1, 3, 5, 6, 8, 10}
- WEEK 2 – 4 : Logic and Sets
- MS101 – DISCRETE MATHEMATICS

---

## Slide 49: Cartesian Product

- The two subsets is the ordered pair of set.
- A x B = {(a, b) є X; a є A and b є B }
- WEEK 2 – 4 : Logic and Sets
- MS101 – DISCRETE MATHEMATICS

---

## Slide 50: VENN DIAGRAMS

- WEEK 2 – 4 : Logic and Sets
- MS101 – DISCRETE MATHEMATICS

---

## Slide 51: WEEK 2 – 4 : Logic and Sets

- MS101 – DISCRETE MATHEMATICS

---

## Slide 52: WEEK 2 – 4 : Logic and Sets

- MS101 – DISCRETE MATHEMATICS

---

## Slide 53: Computer Presentation of Set

- Bits are ordered corresponding to the element.
- Represented through bit string.
- Bit is 1 if it belongs to the list, otherwise, it is 0.
- Example:
- Let U = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
- Odd strings in U = 1010101010 = {1, 3, 5, 7, 9}
- Even strings in U = 0101010101 = {2, 4, 6, 8, 10}
- {x|5<x<10}	     = 0000011110 = {6, 7, 8
- WEEK 2 – 4 : Logic and Sets
- MS101 – DISCRETE MATHEMATICS

---

## Slide 54: References:

- Delfiano, Cecil Jose A. (2016). Data structures and algorithms [E-book].
- Jain, Hemant. (2017). Problem solving in data structures & algorithms using C (1st ed.) [E-book].
- Karumanchi, Narasimha (2017). Javascript Data Structures and Algorithms:  An Introduction to Understanding and Implementing Core Data Structure and Algorithm Fundamentals [E-book].  Apress.
- Karumanchi, Narasimha. (2017). Data structures and algorithms made easy_ data structures and algorithmic puzzles [E-book]. CareerMonk Publications.
- Levin, Oscar. (2019). Discrete Mathematics An Open Introduction (3rd Edition) [E-book].

---

## Slide 55: Slide 55


---
