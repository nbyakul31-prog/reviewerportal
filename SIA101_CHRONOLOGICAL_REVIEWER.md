# 🌐 SIA101: Systems Integration and Architecture 1 — Complete Chronological Reviewer
> **Student:** Luigi Emanuel Britania  
> **Course / Year / Section:** BSIT 3rd Year — SBIT3G  
> **Institution:** Quezon City University (QCU) — College of Computer Studies  
> **Academic Year:** 2026–2027, 1st Semester  
> **Course Code:** SIA101 (3 Units)  
> **Schedule:** Wednesday 12:30 PM – 2:30 PM & 4:30 PM – 7:30 PM  
> **Topics Covered:** Week 2 to Week 6 (SIA Requirements, Modeling Tools, PMLC, Organizational Context, Acquisition & Sourcing)

---

## 📌 Table of Contents
1. [Checkpoint 1: Week 2 — SIA Requirements & Fundamentals](#checkpoint-1-week-2--sia-requirements--fundamentals)
2. [Checkpoint 2: Week 3 — Use Case & Business Process Modeling (BPM)](#checkpoint-2-week-3--use-case--business-process-modeling-bpm)
3. [Checkpoint 3: Week 4 — Project Management Life Cycle (PMLC)](#checkpoint-3-week-4--project-management-life-cycle-pmlc)
4. [Checkpoint 4: Week 5 — SIA Organizational Context & IT Environments](#checkpoint-4-week-5--sia-organizational-context--it-environments)
5. [Checkpoint 5: Week 6 — SIA Acquisition & Sourcing](#checkpoint-5-week-6--sia-acquisition--sourcing)
6. [Master Summary & High-Yield Exam Traps Cheat Sheet](#master-summary--high-yield-exam-traps-cheat-sheet)

---

## Checkpoint 1: Week 2 — SIA Requirements & Fundamentals

### 1. Core Definitions: System Integration vs. System Architecture
| Term | Core Definition | Primary Purpose / Role |
| :--- | :--- | :--- |
| **System Integration** | Combining different sub-system components into one coordinated, cohesive large system. | Ensures interoperability, continuous data flow, and seamless combined functionality across disparate sub-systems. |
| **System Architecture** | A conceptual model and formal description/representation defining the structure, behavior, and more views of a system. | Provides the blueprint and formal structural foundation guiding all development, integration, and deployment decisions. |

### 2. Integration Archetypes
- **Enterprise Application Integration (EAI):**
  - Incorporates methods, concepts, and architectural tools for the classification, connection, and coordinated automation of disparate applications within an enterprise.
  - Bridges heterogeneous systems (e.g., ERP, CRM, Accounting, Inventory, Payment Gateways).
- **Data Integration:** Combining data residing in different sources and providing users with a unified view of these data assets.
- **Electronic Data Interchange (EDI):** Computer-to-computer exchange of standard electronic business documents between organizations (e.g., SWIFT, UN/EDIFACT, XML/EDI).

### 3. Electronic Data Interchange (EDI) Standards & Messaging
| Standard / Format | Full Meaning / Authority | Defining Characteristics & Message Components |
| :--- | :--- | :--- |
| **UN/EDIFACT** | **U**nited **N**ations **E**lectronic **D**ata **I**nterchange for **A**dministration, **C**ommerce, and **T**ransport | The global international standard for electronic data exchange. Bundles **all three (3)** components of a message in a single transfer unit:<br>1. **Event** (trigger/action)<br>2. **Reference Data** (transaction context/catalog data)<br>3. **Control Information** (routing, validation, headers) |
| **XML / XML-EDI** | e**X**tensible **M**arkup **L**anguage (published by **W3C**) | Human-readable and machine-parseable data format. Employs user-defined tags; incorporates complementary open standards such as **XSL** (eXtensible Stylesheet Language). |
| **SWIFT** | Society for Worldwide Interbank Financial Telecommunication | Standardized messaging network used globally by financial institutions for secure cross-border fund transfers. |
| **Messages in UML** | Unified Modeling Language Interaction | Models communication between lifelines/objects; consists of **two (2) parts**:<br>1. **Event** (the trigger or dispatch)<br>2. **Information** (the data payload/arguments transferred) |

### 4. Requirement Elicitation (Gathering & Specification)
Requirement elicitation is the discipline of discovering, reviewing, documenting, and understanding the needs of system stakeholders.

#### The 10 Methodologies in Requirement Elicitation
1. **Brainstorming:** Group creativity technique designed to generate a vast pool of novel ideas and solutions without immediate criticism.
2. **Document Analysis:** Evaluating existing system documentation, process logs, training manuals, and regulatory policies to uncover functional needs.
3. **Focus Group:** Moderated discussion with a representative group of users to gather collective feedback, attitudes, and perceptions.
4. **Interface Analysis:** Examining the touchpoints and boundaries between human users, external hardware, and interfacing software systems.
5. **Observation (Job Shadowing):** Directly watching end-users execute their daily operational tasks to identify unspoken workflows, pain points, and bottlenecks.
6. **Interview:** Structured or semi-structured one-on-one dialogues with stakeholders to extract deep qualitative requirements.
7. **Prototyping:** Building early mockups or functional models. **4 Types of Prototyping**:
   - *Rapid Throwaway Prototype:* Quick mockups constructed solely to explore ambiguous requirements, then discarded.
   - *Evolutionary Prototype:* Initial robust core that iteratively expands into the final production system.
   - *Incremental Prototype:* Building separate functional modules in parallel before integrating them into a complete system.
   - *Extreme Prototype:* Common in web development; breaks development into 3 distinct phases (wireframes/HTML, data simulation services, and backend integration).
8. **Requirements Workshop:** Highly focused, structured collaborative session bringing diverse cross-functional stakeholders together (facilitator, analyst, users, architects).
9. **Reverse Engineering:** Deconstructing an existing legacy system or competitor solution to extract its architectural rules, data schemas, and functional behavior.
10. **Surveying / Questionnaires:** Collecting quantitative and qualitative data from large, distributed user populations.

#### Surveying Best Practices Checklist
| Guideline / Rule | Exam Rationalization |
| :--- | :--- |
| **Communicate responses & objective** | Respondents need transparency on why the data is gathered and how it will be used. |
| **Be aware of population characteristics** | Match language, technical depth, and tone to the demographic profile of the respondents. |
| **Keep survey short & content clear** | Minimizes survey fatigue and dropout rates; maximizes completion accuracy. |
| **Avoid negative questions** | Negatives (e.g., *"Which features do you not find unhelpful?"*) cause severe cognitive confusion. |
| **Avoid complex concepts & jargon** | Use plain, unambiguous business language understandable by non-technical stakeholders. |
| **Elicit actionable details** | Include targeted open-ended follow-ups where qualitative insight is required. |
| **Avoid defensive questions** | Never pose questions that make respondents feel interrogated, threatened, or blamed. |

---

## Checkpoint 2: Week 3 — Use Case & Business Process Modeling (BPM)

### 1. Use Case Model
- **Definition:** A behavioral model showing how different types of external actors interact with a system to achieve specific goals and solve business problems.
- **Modeling Standard:** Unified Modeling Language (UML).
- **Core Elements:**
  - **Actors:** External entities that trigger or interact with the system (Human users, external software services, hardware sensors).
  - **System Boundary:** Visual perimeter delimiting the scope of the system from the external environment.
  - **Use Cases (Ovals):** Specific units of meaningful business functionality or services rendered to actors.
  - **Relationships:** Associations, Include (`<<include>>`), Extend (`<<extend>>`), and Generalization.
- **5 Core Purposes of Use Case Diagrams:**
  1. *Specifying the context of a system.*
  2. *Capturing and formalizing system requirements.*
  3. *Validating system architecture and high-level design.*
  4. *Implementing and generating functional test cases.*
  5. *Serving as a universal communication bridge developed by business analysts and technical experts.*

### 2. Business Process Modeling (BPM)
- **Definition:** The discipline of mapping, documenting, and analyzing workflows to visualize operational sequences and make better, data-driven organizational decisions.

#### Master Comparison Matrix: 10 BPM Techniques
| # | Technique | Primary Focus / Description | Defining Building Blocks & Characteristics |
| :-: | :--- | :--- | :--- |
| **1** | **BPMN (Business Process Model and Notation)** | Standard graphical notation for business workflows. | **4 Basic Building Blocks:**<br>• *Flow Objects* (Events, Activities, Gateways)<br>• *Connecting Objects* (Sequence flow, Message flow, Association)<br>• *Swimlanes* (Pools, Lanes)<br>• *Artifacts* (Data objects, Groups, Annotations) |
| **2** | **UML Diagrams** | Modern, flexible, object-oriented system modeling. | Activity diagrams, State machine diagrams, and Use Case diagrams offering expressive graphical modeling for complex enterprise systems. |
| **3** | **Flowchart Technique** | The most popular and accessible process diagram. | Basic standardized geometric shapes (rectangles for processes, diamonds for decisions, parallelograms for I/O) connected by directional arrows. |
| **4** | **Data Flow Diagram (DFD)** | Tracing the movement of data through systems. | Depicts processes, data stores, external entities, and data flows. Shows *what* data enters and leaves, without conditional control flow. |
| **5** | **Role Activity Diagram (RAD)** | Mapping human/role behaviors and intangible interactions. | Highlights social, behavioral, and organizational dynamics; maps roles, activities, and communication states desired within an organization. |
| **6** | **Role Interaction Diagram (RID)** | Process-to-process and object interaction sequences. | Illustrates message passing between roles/processes. Common forms include **Sequence Diagrams** (time-ordered messages) and **Collaboration Diagrams** (structural relationships). |
| **7** | **Gantt Charts** | Project schedule and timeline tracking. | Horizontal bar charts relating a list of project activities against an absolute calendar time scale; illustrates task dependencies, durations, and milestones. |
| **8** | **IDEF (Integrated Definition)** | Functional enterprise architecture modeling. | Family of modeling languages (e.g. IDEF0). Uses structured function boxes bounded by **ICOM** inputs:<br>• **I**nput (left)<br>• **C**ontrol (top)<br>• **O**utput (right)<br>• **M**echanism/Resources (bottom) |
| **9** | **Coloured Petri Nets (CPN)** | Formal mathematical & graphical specification language. | Uses Places, Transitions, and colored Tokens for designing, simulating, specifying, and mathematically verifying concurrent, distributed systems. |
| **10** | **Object-Oriented Methods** | Full object lifecycle abstraction. | Extends beyond basic modeling to embody OOP paradigms: **Encapsulation**, **Inheritance** (class to subclass), **Polymorphism**, and **Message-Passing**. |

### 3. Business Analysis Tools
- **Why Business Analysts Need the Best Tools (5 Key Reasons):**
  1. To **track** requirements across the development lifecycle.
  2. To **manage** changing requirements and maintain version control.
  3. To **describe** requirements in rigorous, unambiguous detail.
  4. To **model** requirements diagrammatically for visual clarity.
  5. To **collaborate** seamlessly across cross-functional teams and executive stakeholders.
- **3 Categories of Business Analysis Tools:**
  1. *Requirement-related tools:* JIRA, Confluence, Modern Requirements, IBM DOORS.
  2. *Modelling tools:* Enterprise Architect, Lucidchart, Microsoft Visio, Camunda.
  3. *Collaboration tools:* Slack, Microsoft Teams, Trello, Miro, Zoom.

---

## Checkpoint 3: Week 4 — Project Management Life Cycle (PMLC)

### 1. PMI 5-Phase Project Management Life Cycle
Formulated by the **Project Management Institute (PMI)**, the standard lifecycle encompasses five distinct, sequential phases:
```
[1. Initiation] ➔ [2. Planning] ➔ [3. Execution] ➔ [4. Monitoring & Controlling] ➔ [5. Closure]
```

| Phase | Core Objective | Key Deliverables & Activities |
| :--- | :--- | :--- |
| **1. Conception & Initiation** | Define the broad project justification and authorize existence. | • Business Case (explains why project is necessary and how it succeeds)<br>• Feasibility Study<br>• Project Charter (authorization document)<br>• Identifying Team & establishing Project Office<br>• Phase Initiation Review |
| **2. Definition & Planning** | Establish scope, budget, schedules, and roadmap for execution. | • Project Scope Statement & Budget<br>• Work Breakdown Structure (WBS)<br>• Milestones & Gantt Chart scheduling<br>• Stakeholder Communication Plan<br>• Risk Management Plan & Goal Setting (SMART / CLEAR) |
| **3. Launch or Execution** | Develop, construct, and deliver project deliverables. | • Team development & resource assignment<br>• Execution of project management plans<br>• Procurement management<br>• Project Manager directs day-to-day execution<br>• Tracking systems setup & regular status meetings |
| **4. Performance & Control** | Track, review, and regulate progress against the baseline plan. | • Measuring project progression against schedule and budget<br>• Quality Deliverable inspections<br>• Effort and Cost tracking<br>• Managing changes and executing corrective actions via KPIs |
| **5. Project Close** | Formal recognition and orderly termination of the project. | • Transfer all deliverables to client/operations<br>• Complete and close vendor contracts<br>• Conduct retrospective post-mortem meeting<br>• Disband project team<br>• Document all learnings and archive records |

### 2. Goal Setting Frameworks: SMART vs. CLEAR
| Framework | Letter | Meaning | Practical Meaning in Project Planning |
| :--- | :---: | :--- | :--- |
| **SMART** | **S** | **Specific** | Clearly defined and unambiguous so goals are easier to achieve; team knows exactly what to do. |
| | **M** | **Measurable** | Quantifiable metrics to track progress and verify when completion occurs. |
| | **A** | **Actionable** | Realistic actionable steps within team control to achieve the target. |
| | **R** | **Realistic** | Avoids overwhelm, frustration, and undue stress by staying grounded in achievable capacity. |
| | **T** | **Timebound** | Clear deadline and milestone dates to sustain team urgency and focus. |
| **CLEAR** | **C** | **Collaborative** | Is everyone involved? Encourages team unity and collective buy-in. |
| | **L** | **Limited** | Clear boundaries set on time duration and financial budget. |
| | **E** | **Emotional** | Engages the passion, pride, and motivation of all team members. |
| | **A** | **Appreciable** | Large goals broken down into manageable, measurable micro-deliverables. |
| | **R** | **Refinable** | Agile and flexible; can be adapted when conditions or requirements shift. |

### 3. Key Planning Documents
- **Scope Statement:** Comprehensive document establishing the business need, benefits, project objectives, major deliverables, and critical milestones.
- **Work Breakdown Structure (WBS):** Hierarchical and incremental decomposition of the total project scope into manageable phases, deliverables, and work packages.
- **Milestones:** Zero-duration markers within the project lifecycle used to measure progress toward the ultimate objective.
- **Gantt Chart:** Visual bar chart helping planners assess task durations, allocate resources, and sequence task dependencies.
- **Communication Plan:** Policy-driven framework defining how stakeholder information needs will be met:
  - Fields: *Description (name of communication)*, *Frequency (how often)*, *Method (channel)*, *Audience (recipients)*, *Owner (responsible party)*.

### 4. Risk Management Plan & 5-Level Severity Matrix
Details the organization's risk management methodology, identifying risk events across 5 severity levels evaluated against 3 project dimensions:
| Severity Level | Risk Impact Description | Technical Performance Impact | Cost Impact | Schedule Impact |
| :---: | :--- | :--- | :--- | :--- |
| **5 (Severe)** | Outcome objectives will not be achieved. | Performance unacceptable; fails Key Performance Parameters. | Budget impacted by > 20 Million. | Milestone delayed by > 3 months. |
| **4 (Significant)** | Desired results significantly impacted; falls below acceptable levels. | Significant changes required; does not meet threshold. | Budget impacted by 10M – 20M. | Critical path delayed by 2–3 months. |
| **3 (Moderate)** | Moderate impact; outcome falls well below goals but above minimum acceptable. | Moderate changes required; does not meet a threshold. | Budget impacted by 2M – 10M; requires reserve funds. | Schedule slips by 1–2 months. |
| **2 (Minor)** | Minor impact; results fall slightly below goals but well above minimum acceptable. | Minor changes required; does not meet an objective. | Minor budget increase (< 2M); development cost exceeded by 1–5%. | Non-critical tasks slip; critical path delayed < 1 month. |
| **1 (Minimal)** | Little or no impact on achieving outcome objectives. | Requires minor trades within threshold; no impact on program. | Budget not affected; cost absorbed in plan. | Schedule unaffected; milestone float absorbs variations. |

### 5. Key Performance Indicators (KPIs) in Monitoring
1. **Project Objectives:** Measuring adherence to planned schedule and budget baselines.
2. **Quality Deliverables:** Verifying whether deliverables conform to technical specifications and quality standards.
3. **Effort and Cost Tracking:** Monitoring expenditure velocity to forecast completion date and budget burn.
4. **Project Performance:** Tracking change requests, risks, and overall project health.

---

## Checkpoint 4: Week 5 — SIA Organizational Context & IT Environments

### 1. Business Processes
- **Definition:** A series of sequential steps performed by a group of stakeholders to achieve a concrete, measurable organizational goal; a collection of linked tasks culminating in the delivery of a service or product to a client.
- **6 Pillars of Business Process Importance:**
  1. *To identify important tasks.*
  2. *To improve operational efficiency.*
  3. *To streamline communications across units.*
  4. *To set governance approvals.*
  5. *To prevent organizational chaos.*
  6. *To standardize business procedures.*

### 2. The 7 Steps of the Business Process Lifecycle
```
[1. Define Goals] ➔ [2. Plan & Map] ➔ [3. Set Actions & Stakeholders] ➔ [4. Test Process] ➔ [5. Implement] ➔ [6. Monitor Results] ➔ [7. Repeat]
```
1. **Step 1: Define your goals** — Clarify the exact purpose and outcome of the process.
2. **Step 2: Plan and map your process** — Determine the strategies and workflow diagrams needed to achieve the goals.
3. **Step 3: Set actions and assign stakeholders** — Distribute specific tasks to designated team members and automated machines.
4. **Step 4: Test the process** — Run the process in a controlled, small-scale test environment and monitor performance metrics.
5. **Step 5: Implement the process** — Deploy the process into the live production environment.
6. **Step 6: Monitor the results** — Continuously review and analyze process execution data to detect friction points.
7. **Step 7: Repeat** — Replicate, optimize, and standardize the validated processes across the organization.

### 3. Business Process Integration (BPI)
- **Definition:** The automated synchronization and coordination of business processes, enterprise systems, and services for secure, real-time data sharing across heterogeneous applications.
- **Strategic Benefits:** Services integration, simplified operations, lower operating costs, enhanced output quality, improved employee productivity, standardized workflows, and smart digital services delivery.

### 4. IT Environments: Components, Purposes, and Drivers
- **Definition:** An integrated collection of technology components designed to serve the functional needs of end-users and the organizational owner of the resulting system.
- **3 Core Components:**
  1. **Computing Platforms:** Server hardware, virtualization layers, cloud VMs, operating systems.
  2. **Applications / Apps:** Enterprise software suites, web portals, microservices, databases.
  3. **Connectivity (Networking):**
     - *Wireless Networks:* Wi-Fi, 3G/4G/5G mobile data, Bluetooth.
     - *Wired Networks:* Twisted copper pairs (Cat6), Fiber optic cables.
     - *Personal Area Networks (PAN):* Bluetooth, NFC.
     - *Local Area Networks (LAN):* Ethernet switches, campus subnets.
     - *Wide Area Networks (WAN / Distance):* DSL, leased fiber lines, SD-WAN, satellite.
- **3 Triad Drivers of IT Environment Architecture:**
  - **Needs:** Functionality must solve business purpose; Cost must be affordable; Reliability must be reasonable.
  - **Rules:** Government laws, regulatory compliance, and owner/enterprise policies.
  - **Choices:** Balancing owner needs, mandatory rules, and available affordable technology.

### 5. Organizational Structures: Governance & 4 Structural Archetypes
- **Centralized vs. Decentralized Governance:**
  - *Centralized Structure:* Hierarchical decision-making concentrated at executive headquarters; consistent, uniform processes across branches; typical of large, established corporations.
  - *Decentralized Structure:* Democratic, delegated decision-making; individual branches adapt workflows to local market needs; common in agile, smaller, or highly regionalized organizations.

#### 4 Main Types of Organizational Structures
| Structure Type | Core Defining Architecture | Key Advantages | Key Disadvantages |
| :--- | :--- | :--- | :--- |
| **1. Functional Structure** | Bureaucratic, centralized hierarchy dividing the firm into specialized functional departments (e.g. Finance, Marketing, HR, Admin). | • Deep functional specialization & experience<br>• Clear operational standardization<br>• Economies of scale & internal efficiency | • Siloed thinking; lack of variety for workers<br>• Heavy bureaucracy & slow decision-making<br>• Compromises cross-functional integration |
| **2. Divisional / Multidivisional** | Parent company oversees semi-autonomous subsidiary divisions grouped by product line, market, or geography under the common brand. | • Frees up senior executive time<br>• Superior localized market responsiveness<br>• Faster operational decisions | • Duplication of functions, services, and costs<br>• Inter-divisional coordination friction<br>• Dilution of core specialization |
| **3. Flatarchy Structure** | Flattens the hierarchy and chain of command; widely adopted by tech startups and innovation labs. | • High employee autonomy & empowered initiative<br>• Rapid communication & zero red tape<br>• Accelerates prototype innovation | • Ambiguous role accountability<br>• Can produce operational chaos as teams scale<br>• Lack of experienced supervisory oversight |
| **4. Matrix Structure** | Grid structure where employees have dual reporting relationships (e.g., reporting to both a Functional Manager and a Project Manager). | • Flexible, fluid resource sharing across projects<br>• Strong balance between technical depth and project delivery | • Role conflict between competing managers<br>• Solid vs. dotted line confusion<br>• Higher managerial overhead and meetings |

---

## Checkpoint 5: Week 6 — SIA Acquisition & Sourcing

### 1. Procurement, Sourcing, and Acquisition Process
- **Purchase Requisition Order:** Formal internal document submitted to the procurement unit to initiate sourcing and purchasing according to corporate guidelines.
- **Sourcing:** The strategic activity of identifying, evaluating, selecting, and engaging with the best qualified suppliers.
- **Hardware & Software Acquisition 3-Stage Workflow:**
  1. *Requirements Analysis:* Defining precise technical specifications, compatibility, and sizing needs.
  2. *Request for Proposal (RFP) / Request for Quotation (RFQ):* Issuing detailed tenders to prospective vendors.
  3. *Vendor Selection & Contracting:* Evaluating bids, conducting screening checks, and awarding contracts.

### 2. Sourcing Requirements & Market Surveys
- **Market Survey:** An empirical investigation conducted by the procurement unit to evaluate market availability before committing funds.
- **5 Evaluation Criteria of a Market Survey:**
  1. **Quantities Available** (can suppliers fulfill required volumes?)
  2. **Quality Standards** (do goods meet engineering thresholds?)
  3. **Pricing & Total Cost of Ownership** (commercial viability)
  4. **Source & Origin of Items** (provenance, supply chain resilience)
  5. **Technical Specifications** (adherence to architectural constraints)

### 3. Determining Source of Supply
- **Geographic Hierarchy:** Local ➔ National ➔ International.
- **The Golden First Principle of Sourcing:**
  > *"The first principle should be to source all commodities **locally and in-country**, as close to the field as possible to reduce transport time and cost."*
- **When to Source Internationally:**
  - When materials or specialized hardware/software are unavailable locally or nationally in the required quantities or technical grades.
  - Sourcing channels: Pre-positioned inventory stocks (e.g., CARE International emergency relief hubs), pre-supply corporate agreements, or benchmarking peer organizations.

### 4. Vendor Selection & Screening Methods
#### Sole Sourcing vs. Single Sourcing (Critical Exam Distinction)
| Sourcing Method | Number of Suppliers in Market | Definition & Practical Context |
| :--- | :---: | :--- |
| **Sole Source** | **Only ONE (1)** | Only one vendor or supplier is physically available or capable of supplying the goods/services (e.g., local utility water concessionaire, proprietary patented software OEM). |
| **Single Source** | **MULTIPLE (>1)** | Multiple competing suppliers exist in the market, but the organization intentionally selects and contracts with only one preferred supplier (e.g., standardizing on one laptop vendor for volume discounts). |

#### Request for Quotations (RFQ) & Sealed Bidding
- Governed by formal bidding threshold policies (e.g., CARE CI Harmonization Procurement Policy).
- **Tracking Sheet for Sealed Bids:** Mandatory audit tool used by the procurement unit to track receipt and opening of confidential tenders.
- **Bid Committees:** Independent multi-disciplinary evaluation panels established to review tenders objectively.

#### Vendor Screening 3-Pillar Checklist
Before executing any supply agreement, preferred vendors must pass 3 rigorous screening hurdles:
1. Complete a comprehensive **Vendor Questionnaire** (financial stability, business legitimacy, certifications).
2. Check independent **References**, preferably from industry peers or reputable NGOs.
3. Screen vendor entities and principals against **Anti-Terrorism and Debarred Listings** to maintain regulatory compliance.

### 5. In-Sourcing vs. Outsourcing
- **Insourcing Definition:** The assignment of an engineering project, IT service, or operational workflow to an internal employee or department within the enterprise, rather than delegating it to an external third party.

#### In-Sourcing Trade-Off Analysis
| Advantages of In-Sourcing | Disadvantages of In-Sourcing |
| :--- | :--- |
| **1. Competitive Advantage:** Internal mastery becomes proprietary core enterprise capital. | **1. High Overhead Costs:** Heavy capital investments in payroll, training, server infrastructure, and software licenses. |
| **2. Protection of Trade Secrets:** Proprietary source code, customer records, and secret algorithms remain safely inside internal firewalls. | **2. Capability Limitations:** Internal staff may lack niche, bleeding-edge engineering capabilities available from specialized vendors. |
| **3. Organizational Culture Alignment:** Internal engineers share corporate values, loyalty, and long-term vision. | **3. Loss of Strategic Focus:** Distracts leadership from core business missions by managing auxiliary IT operations. |
| **4. Cost Efficiency (Long-Term):** Avoids vendor markup and recurring consulting margins on core systems. | |
| **5. Direct Command & Control:** Direct operational supervision, agility to pivot priorities, and zero SLA friction. | |

---

## Master Summary & High-Yield Exam Traps Cheat Sheet

```
╔══════════════════════════════════════════════════════════════════════════════════════════╗
║                          SIA101 HIGH-YIELD EXAM TRAPS CHEAT SHEET                        ║
╠══════════════════════════════════════════════════════════════════════════════════════════╣
║ 1. SOLE SOURCE vs. SINGLE SOURCE:                                                       ║
║    • Sole Source   = ONLY ONE supplier exists anywhere in the market (e.g. water utility) ║
║    • Single Source = MULTIPLE exist, but buyer purposely picks ONE.                      ║
║                                                                                          ║
║ 2. UN/EDIFACT MESSAGE COMPONENTS:                                                        ║
║    • Contains THREE (3) parts: Event + Reference Data + Control Information.            ║
║    • UML Messages contain TWO (2) parts: Event + Information.                            ║
║                                                                                          ║
║ 3. FIRST PRINCIPLE OF SOURCING:                                                          ║
║    • Always source LOCALLY / IN-COUNTRY first to reduce transport time and cost!         ║
║                                                                                          ║
║ 4. PMI PROJECT LIFE CYCLE:                                                               ║
║    • 5 Phases: Initiation ➔ Planning ➔ Execution ➔ Monitoring/Controlling ➔ Closure.      ║
║    • Project Charter is created in INITIATION (Phase 1), NOT in Planning!               ║
║                                                                                          ║
║ 5. SMART vs. CLEAR:                                                                      ║
║    • SMART = Specific, Measurable, Actionable, Realistic, Timebound.                     ║
║    • CLEAR = Collaborative, Limited, Emotional, Appreciable, Refinable.                  ║
║                                                                                          ║
║ 6. BPMN 4 BASIC BUILDING BLOCKS:                                                         ║
║    • Flow Objects, Connecting Objects, Swimlanes, Artifacts.                             ║
║                                                                                          ║
║ 7. IDEF FUNCTION MODEL (ICOM):                                                           ║
║    • Input (Left), Control (Top), Output (Right), Mechanism/Resources (Bottom).          ║
║                                                                                          ║
║ 8. ORGANIZATIONAL STRUCTURES:                                                            ║
║    • Bureaucratic & Departmental = FUNCTIONAL (Centralized).                             ║
║    • Semi-autonomous units under parent brand = DIVISIONAL / MULTIDIVISIONAL.           ║
║    • Flattens chain of command for startups = FLATARCHY.                                 ║
║    • Dual reporting lines (solid & dotted) = MATRIX.                                     ║
╚══════════════════════════════════════════════════════════════════════════════════════════╝
```
