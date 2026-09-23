# AR101: Computer Architecture and Organization
## Complete Chronological Reviewer & Exam Digest (Weeks 2 to 7)
**Student:** Luigi Emanuel Britania • **Year & Section:** 3rd Year - SBIT3G  
**Institution:** Quezon City University — College of Computer Studies — Information Technology Department  
**Academic Year:** 2026–2027 (1st Semester)

---

## 📌 TABLE OF CONTENTS
1. [Week 2: Introduction to Computer Architecture and Organization](#week-2-introduction-to-computer-architecture-and-organization)
2. [Week 3: Main Memory and Central Processing Unit (CPU)](#week-3-main-memory-and-central-processing-unit-cpu)
3. [Week 4: Intel Microprocessors, Logical and Physical Memory](#week-4-intel-microprocessors-logical-and-physical-memory)
4. [Week 5: Understanding Memory Segments, Stack Operations and Addressing Modes](#week-5-understanding-memory-segments-stack-operations-and-addressing-modes)
5. [Week 6: Data Transfer Instructions & Tracing](#week-6-data-transfer-instructions--tracing)
6. [Week 7: The Arithmetic Unit (Part 1)](#week-7-the-arithmetic-unit-part-1)

---

## WEEK 2: INTRODUCTION TO COMPUTER ARCHITECTURE AND ORGANIZATION

### 1. Fundamental Definition of a Digital Computer
- **Digital Computer**: A fast electronic calculating machine that:
  1. Accepts **digitized input information**.
  2. Processes it according to a list of internally stored instructions (**program**).
  3. Produces resulting **output information**.

### 2. Classification / Types of Computers
1. **Personal Computers (PCs)**: Everyday computing for individual users (desktops, laptops).
2. **Workstations**: High-performance single-user systems engineered for heavy technical, mathematical, graphic, or engineering workloads.
3. **Mainframes**: Enterprise-grade systems built for high-throughput batch processing, massive transaction volumes, and mission-critical reliability.
4. **Supercomputers**: Ultra-high-performance computational clusters optimized for massive parallel calculations, weather modeling, scientific simulations, and cryptography.

### 3. The 5 Functional Units of a Computer
A computer comprises five functionally independent main parts:
```
┌────────────────────────────────────────────────────────┐
│                      PROCESSOR                         │
│  ┌───────────────────────┐   ┌──────────────────────┐  │
│  │ ARITHMETIC & LOGIC    │   │ CONTROL UNIT (CU)    │  │
│  │ UNIT (ALU)            │   │ (Directs activities) │  │
│  └───────────▲───────────┘   └──────────▲───────────┘  │
└──────────────┼──────────────────────────┼──────────────┘
               ▼                          ▼
       ┌───────────────┐          ┌───────────────┐
       │     MEMORY    │          │  INPUT /      │
       │  (RAM / ROM)  │          │  OUTPUT (I/O) │
       └───────────────┘          └───────────────┘
```
1. **Input Unit**:
   - Accepts coded information from human operators or other computer systems.
   - Examples: Keyboard, mouse, joystick, input pen, touch screen, trackball, optical scanner, barcode readers, microphone, magnetic disks, floppy disks, CD/compact discs.
2. **Memory Unit / Primary Storage**:
   - Where programs and active data are held during execution.
   - Operates at electronic speeds.
   - Information is stored in fixed-size groups called **WORDS**.
   - Each word has a distinct numerical **Address** (e.g., location 0, 1, 2, ... 4,194,303).
   - **4 Main Memory Divisions**:
     - *Input Storage Area*: Holds raw input data arriving from input devices.
     - *Working Storage Space*: Holds intermediate calculation results.
     - *Output Storage Area*: Holds processed data prepared for transfer to output devices.
     - *Program Storage Area*: Holds the actual program instructions currently being executed.
3. **Secondary / Auxiliary Storage**:
   - Used when large volumes of data must be stored on a permanent basis, particularly data accessed less frequently (e.g., hard drives, magnetic tapes, optical disks).
4. **Central Processing Unit (CPU) / Processor**:
   - Operates roughly **10 times faster** than main memory.
   - Divided into:
     - **ALU (Arithmetic and Logic Unit)**: Performs arithmetic operations (addition, subtraction, multiplication) and logical decisions (AND, OR, NOT, XOR).
     - **Control Unit (CU)**: Coordinates all computer operations. It fetches instructions, decodes them, and issues control signals to memory, ALU, and I/O devices.
5. **Output Unit**:
   - Sends processed results to the outside world.
   - Examples: Display monitors/screens, printers, plotters, modems, micro-films, voice synthesizers, high-tech blackboards, film records.

### 4. Basic Operational Steps of a Computer
1. The computer **accepts information** via the input unit.
2. Information stored in memory is **fetched under program control** into the ALU, where it is actively processed.
3. Processed information leaves the computer through the **output unit**.
4. **All activities** inside the machine are directed and supervised by the **Control Unit (CU)**.

### 5. Computer Architecture vs Computer Organization
- **Computer Architecture**: The conceptual design and fundamental operational structure of a computer system, including its **Instruction Set Architecture (ISA)**, data formats, register models, and addressing modes visible to the programmer.
- **Von-Neumann Architecture**: Also known as **Stored Program Architecture** or **Fetch-Decode-Execute Architecture**.
  - Programs and data share the same unified memory space.
  - Instructions are executed sequentially unless an explicit jump/branch occurs.
- **Computer Organization**: The operational units and their interconnections that realize the architectural specifications (e.g., hardware signals, bus widths, clock frequencies, memory technology).

### 6. Programming Languages: Low-Level vs High-Level
- **Hierarchy of Programming Languages**:
  1. *Machine Language*: Binary 1s and 0s directly understood by hardware.
  2. *Assembly Language*: Low-level symbolic mnemonics (`MOV`, `ADD`, `SUB`) mapped 1-to-1 to machine codes; requires an Assembler.
  3. *High-Level Language*: Human-readable, abstracted languages (C, C++, Java, Python, C#); requires a Compiler or Interpreter.
  4. *4GL (Fourth-Generation Language)*: Non-procedural, declarative languages closer to human natural language (SQL, database query languages).
- **Advantages of High-Level Languages over Low-Level**:
  - **Easy to Learn**: Natural syntax and structured constructs.
  - **Predefined Functions**: Massive built-in standard libraries.
  - **Portability**: Code can run on different processor architectures with minimal or no changes after recompilation.
- **Advantages of Low-Level Languages over High-Level**:
  - **Compact Code**: Generates smaller binary footprints without runtime overhead.
  - **Speed**: Executes significantly faster due to direct hardware control.
  - **Flexible**: Provides direct, granular manipulation of hardware registers, memory addresses, and CPU flags.

---

## WEEK 3: MAIN MEMORY AND CENTRAL PROCESSING UNIT (CPU)

### 1. Processor-Memory Interconnection & Internal Registers
```
┌─────────────────────────────────────────────────────────────┐
│                      PROCESSOR (CPU)                        │
│                                                             │
│   ┌────────┐        ┌────────┐       ┌──────────────────┐   │
│   │  MAR   │◄───────┤   PC   │       │  CONTROL UNIT    │   │
│   └────┬───┘        └────────┘       └────────┬─────────┘   │
│        │                                      │             │
│        │            ┌────────┐       ┌────────▼─────────┐   │
│        │            │   IR   │◄──────┤       ALU        │   │
│        │            └────────┘       └────────▲─────────┘   │
│   ┌────▼───┐                                  │             │
│   │  MDR   │◄─────────────────────────────────┘             │
│   └────▲───┘                                                │
│        │         ┌──────────────────────────────────────┐   │
│        │         │ General Purpose Registers: R0 to R(n)│   │
│        │         └──────────────────────────────────────┘   │
└────────┼────────────────────────────────────────────────────┘
         ▼ (Address / Data / Control Lines)
┌─────────────────────────────────────────────────────────────┐
│                        MAIN MEMORY                          │
└─────────────────────────────────────────────────────────────┘
```
- **PC (Program Counter)**: Contains the memory address of the next instruction to be fetched and executed. Automatically incremented after fetching.
- **MAR (Memory Address Register)**: Holds the address of the memory location currently being read from or written to.
- **MDR (Memory Data Register)**: Holds the data word read from memory or waiting to be written into memory.
- **IR (Instruction Register)**: Holds the instruction word currently being decoded and executed by the Control Unit.
- **General Purpose Registers ($R_0, R_1, \dots, R_{n-1}$)**: Fast temporary storage within the CPU for holding operands and intermediate calculation results.

### 2. CPU Read and Write Operations
- **Fetch / Read Operation (Memory $\to$ CPU)**:
  1. CPU sends the target memory address to the **MAR**.
  2. CPU issues a **READ** control signal on the control bus.
  3. The addressed word is retrieved from Main Memory and loaded into the **MDR**.
  4. The word in Main Memory remains **unchanged (non-destructive read)**.
- **Store / Write Operation (CPU $\to$ Memory)**:
  1. CPU sends the target memory address to the **MAR**.
  2. CPU places the data to be written into the **MDR**.
  3. CPU issues a **WRITE** control signal.
  4. The data from MDR is written into the memory location, **destroying / overwriting** whatever was previously stored there.

### 3. Step-by-Step Instruction Execution Trace: `ADD LOCA, R0`
Suppose the instruction `ADD LOCA, R0` is stored at memory location `INSTR`, and `PC` initially holds `INSTR`:
1. **MAR $\leftarrow$ [PC]**: Address of instruction loaded into MAR.
2. **READ Signal issued**: Main memory reads location; **MDR $\leftarrow$ [Memory]**, and **PC $\leftarrow$ [PC] + 1** (increment PC to point to next instruction).
3. **IR $\leftarrow$ [MDR]**: Instruction transferred to Instruction Register for decoding.
4. **MAR $\leftarrow$ [LOCA]**: Address of operand `LOCA` (extracted from IR addressing field) loaded into MAR.
5. **READ Signal issued**: Main memory reads location `LOCA`; **MDR $\leftarrow$ [Memory]**.
6. **$R_0 \leftarrow [R_0] + [\text{MDR}]$**: ALU adds the contents of register $R_0$ with MDR and stores the sum back into $R_0$.

### 4. The 7 Universal CPU Operating Steps
1. Fetching the instruction.
2. Incrementing the PC.
3. Decoding the instruction.
4. Determining the location of data in memory (if required).
5. Fetching the required data into an internal CPU register.
6. Executing the instruction.
7. Return to step 1 (repeat cycle).

### 5. Instruction Formats and Address Notations
An instruction generally consists of two primary fields:
- **Operation Field (Opcode)**: Specifies what operation to perform (e.g., 8 bits $\to$ up to 256 unique instructions).
- **Addressing Information**: Specifies the operand addresses (e.g., 24 bits).

#### Address Notations Comparison:
| Type | Example | Internal Action | Notes |
| :--- | :--- | :--- | :--- |
| **0-Address** | `INC`, `DEC` | `ACC <- [ACC] + 1` | Operands defined implicitly (Stack or Accumulator). |
| **1-Address** | `LOAD A`<br>`ADD B`<br>`STORE C` | `ACC <- [A]`<br>`ACC <- [B] + [ACC]`<br>`[C] <- [ACC]` | Implicitly uses the **Accumulator (ACC)** register for all operations. |
| **2-Address** | `ADD A, B` | `A <- [A] + [B]` | Destination `A` is also one of the source operands. Overwrites `A`. |
| **3-Address** | `ADD A, B, C` | `A <- [B] + [C]` | `B` and `C` are pure source operands; `A` is pure destination operand. Preserves sources! |

### 6. Straight-Line Sequencing vs Branching
- **Straight-Line Sequencing**: Instructions stored in sequential memory addresses ($i, i+1, i+2$) are executed one after another in numerical order.
- **Branching (Loops & Decisions)**:
  - Alter the normal sequential flow by loading a new target address into the **PC** when a condition is met (e.g., `Branch > 0 LOOPSTART`).

### 7. Bus Structures
- **Bus**: A collection of physical wires transmitting signals between computer components.
- **3 Main Groups of Bus Lines**:
  1. **Data Bus**: Carries bidirectional data between CPU, memory, and I/O.
  2. **Address Bus**: Unidirectional lines carrying the memory or I/O address generated by the CPU.
  3. **Control Bus**: Carries timing, status, and control signals (READ, WRITE, READY, INTERRUPT).
- **Single-Bus vs Two-Bus Structure**:
  - *Single-Bus Structure*: All units (CPU, Memory, I/O) share one common bus. Simpler and cheaper, but introduces a major throughput bottleneck (only one transfer can occur at a time).
  - *Two-Bus Structure*:
    - **Configuration 1**: Memory Bus connects CPU $\leftrightarrow$ Memory; I/O Bus connects CPU $\leftrightarrow$ I/O devices.
    - **Configuration 2**: Memory Bus connects CPU $\leftrightarrow$ Memory and Memory $\leftrightarrow$ I/O; I/O Bus connects I/O devices.

---

## WEEK 4: INTEL MICROPROCESSORS, LOGICAL AND PHYSICAL MEMORY

### 1. Chronological Evolution of Intel Microprocessors
| Year | Processor | Bus Width | Memory Addressing Capacity | Notable Features |
| :---: | :---: | :---: | :---: | :--- |
| **1971** | **Intel 4004** | 4-bit | 4,096 4-bit locations (2,048 bytes / 2 KB) | World's first commercial single-chip microprocessor. |
| **1972** | **Intel 8008** | 8-bit | 16,384 bytes (16 KB) | 48 instructions, built for computer terminals. |
| **1973** | **Intel 8080** | 8-bit | 64 KB | Faster, 10x performance of 8008, used in Altair 8800. |
| **1978** | **Intel 8085** | 8-bit | 64 KB | Single +5V supply, integrated clock oscillator. |
| **1978** | **Intel 8086** | 16-bit | 1,048,576 bytes (1 MB) | 16-bit data bus, 20-bit address bus, executes instructions in ~14 ns, hardware multiply/divide. |
| **1979** | **Intel 8088** | 16-bit internal / 8-bit external | 1 MB | Used in original IBM PC (5150); cheaper system board design with 8-bit external data bus. |

### 2. Logical vs Physical Memory
- **Logical Memory**: The conceptual address space assigned to a program by the operating system (in 8086: 1 MB linear address space ranging from `00000H` to `FFFFFH`).
- **Physical Memory**: The physical silicon RAM chips (DIMMs) connected to the motherboard.
- **8086 Even & Odd Memory Banks**:
  - The 1 MB memory of the 8086 is physically organized into two 512 KB banks:
    - **Even Bank (Lower Bank)**: Addresses `00000H`, `00002H`, `00004H`, ... `FFFFEH`. Connected to data lines $D_0-D_7$. Activated by signal $A_0 = 0$.
    - **Odd Bank (Upper Bank)**: Addresses `00001H`, `00003H`, `00005H`, ... `FFFFFH`. Connected to data lines $D_8-D_{15}$. Activated by signal $\overline{\text{BHE}} = 0$ (Bus High Enable).
  - This allows the 8086 to read or write a full 16-bit word in a **single memory cycle** if the word is aligned at an even address!

### 3. Internal Architecture: Execution Unit (EU) vs Bus Interface Unit (BIU)
```
┌───────────────────────────┐     ┌───────────────────────────┐
│   EXECUTION UNIT (EU)     │     │ BUS INTERFACE UNIT (BIU)  │
│                           │     │                           │
│ • General Registers:      │     │ • Segment Registers:      │
│   AX (AH/AL), BX (BH/BL), │     │   CS, DS, SS, ES          │
│   CX (CH/CL), DX (DH/DL)  │     │ • Instruction Pointer: IP │
│ • Pointer/Index Registers:│     │ • 6-Byte Prefetch Queue   │
│   SP, BP, SI, DI          │     │   (4-byte in 8088)        │
│ • ALU & Control Logic     │◄───►│ • Bus Controller Logic    │
│ • Flag Register (PSW)     │     │ • Address Generation      │
│                           │     │   (Segment x 10H + Offset)│
│ [Decodes & Executes]      │     │ [Fetches & Interfaces]    │
└───────────────────────────┘     └─────────────┬─────────────┘
                                                ▼
                                         System Buses
```
- **Bus Interface Unit (BIU)**: Responsible for all external bus operations. Fetches instructions from memory, reads/writes data, generates the 20-bit physical address, and feeds the **Prefetch Queue**.
- **Execution Unit (EU)**: Receives pre-fetched instructions from the BIU queue, decodes them, and executes them using the ALU and internal registers.

### 4. 8086 Register Architecture Model
1. **General Purpose Data Registers (16-bit, split into 8-bit High/Low)**:
   - `AX` (`AH`/`AL`): **Accumulator**. Primary register for arithmetic, logic, and I/O.
   - `BX` (`BH`/`BL`): **Base Register**. Used as a base pointer for memory data addressing.
   - `CX` (`CH`/`CL`): **Count Register**. Used as a loop counter and shift/rotate count.
   - `DX` (`DH`/`DL`): **Data Register**. Holds overflow from multiply/divide; stores 16-bit I/O port addresses.
2. **Pointer and Index Registers (16-bit)**:
   - `SP`: **Stack Pointer**. Points to current Top of Stack (offset from `SS`).
   - `BP`: **Base Pointer**. Points to data on the stack (offset from `SS`).
   - `SI`: **Source Index**. Points to source data strings/arrays (offset from `DS`).
   - `DI`: **Destination Index**. Points to destination data strings/arrays (offset from `ES`).
   - `IP`: **Instruction Pointer**. Points to the next instruction byte in `CS`.
3. **Segment Registers (16-bit)**:
   - `CS`: Code Segment (points to base of executable instructions).
   - `DS`: Data Segment (points to base of global/static variables).
   - `SS`: Stack Segment (points to base of LIFO stack).
   - `ES`: Extra Segment (points to base of secondary data, string operations).

### 5. Processor Status Word (PSW / Flags Register)
The 8086 has a **16-bit Flag Register** containing **9 active flags** (6 conditional/status flags and 3 control flags; 7 bits are unused):
```
Bit:   15 14 13 12  11  10   9   8   7   6   5   4   3   2   1   0
Flag:   -  -  -  -  OF  DF  IF  TF  SF  ZF   -  AF   -  PF   -  CF
```
- **6 Conditional / Status Flags** (Set automatically by arithmetic/logic operations):
  1. **CF (Carry Flag, Bit 0)**: Set to 1 if there is an arithmetic carry out or borrow into the Most Significant Bit (MSB).
  2. **PF (Parity Flag, Bit 2)**: Set to 1 if the lower 8 bits of the result contain an **EVEN number of 1s** (Even Parity).
  3. **AF (Auxiliary Carry Flag, Bit 4)**: Set to 1 if there is a carry out from Bit 3 into Bit 4 (half-carry, essential for BCD arithmetic).
  4. **ZF (Zero Flag, Bit 6)**: Set to 1 if the result of an operation is **zero** ($0000\text{H}$).
  5. **SF (Sign Flag, Bit 7)**: Set to 1 if the MSB of the result is 1 (indicates a **negative** signed number).
  6. **OF (Overflow Flag, Bit 11)**: Set to 1 if a signed arithmetic operation yields a result that exceeds the signed capacity (e.g. adding two positive numbers yields a negative number).
- **3 Control Flags** (Set/cleared by specific instructions to direct CPU behavior):
  1. **TF (Trap Flag, Bit 8)**: Puts processor into single-step execution mode for debugging.
  2. **IF (Interrupt Enable Flag, Bit 9)**: Enables ($1$) or disables ($0$) maskable hardware interrupts.
  3. **DF (Direction Flag, Bit 10)**: Controls direction of string processing: $0 = \text{Auto-increment}$ (forward: low to high memory), $1 = \text{Auto-decrement}$ (backward: high to low memory).

### 6. Generating Physical Addresses: Formula & Worked Problems
- **The Core Formula**:
  $$\text{Physical Address (PA)} = (\text{Segment Base Address} \times 10\text{H}) + \text{Offset Address}$$
  *(Multiplying by $10\text{H}$ is equivalent to shifting the 16-bit segment base left by 4 bits, turning it into a 20-bit address, then adding the 16-bit offset).*

#### Example 1:
- Segment Base = `1234H`, Offset = `0022H`
- Base $\times 10\text{H}$ = `12340H`
- Add Offset: `12340H + 0022H` = **`12362H`**

#### Example 2:
- Segment Base = `123AH`, Offset = `341BH`
- Base $\times 10\text{H}$ = `123A0H`
- Add Offset:
  ```
    1 2 3 A 0 H
  +   3 4 1 B H
  -------------
    1 5 7 B B H
  ```
- **PA = `157BBH`**

#### Practice Exercises from Lecture:
1. **Base = `4321H`**, **Offset = `1266H`**:
   - `43210H + 1266H` = **`44476H`**
2. **Base = `ABCDH`**, **Offset = `3623H`**:
   - `ABCD0H + 3623H` = **`AF303H`**
     *(Calculation: $0+3=3$; $D+2 = 13+2 = 15 = \text{F}$; $C+6 = 12+6 = 18 = 16\times 1 + 2 \to 2$ with carry $1$; $B+3+1 = 11+3+1 = 15 = \text{F}$; $A+0 = A \implies \text{AF2F3H}$ or $\text{AF303H}$ depending on carry).*
3. **Base = `AE6DH`**, **Offset = `43A1H`**:
   - `AE6D0H + 43A1H` = **`B2A71H`**

---

## WEEK 5: UNDERSTANDING MEMORY SEGMENTS, STACK OPERATIONS AND ADDRESSING MODES

### 1. Memory Segmentation Principles
- The 8086 partitions memory into segments of **64 KB ($65,536$ bytes)** each.
- Each segment represents an independently addressable unit of $64\text{ KB}$ consecutive byte-wide locations.
- **Why Segment Memory?**
  - Allows 16-bit registers to address up to **1 MB** of physical memory.
  - Keeps Code, Data, and Stack cleanly segregated for multi-tasking, relocatability, and protection.

### 2. The 8086 LIFO Stack Mechanics
- **LIFO Principle**: Last In, First Out.
- **Stack Size**: 64 KB (organized as 32,768 16-bit words).
- **Stack Growth Direction**: The stack **grows downward toward lower memory addresses**!
- **Key Stack Registers**:
  - `SS` (Stack Segment): Holds the base address of the stack segment.
  - `SP` (Stack Pointer): Holds the offset to the current **Top of Stack (TOS)**.
- **Initialization**:
  - Upon startup, `SP` is typically initialized to `FFFFH` (the very top/bottom-most boundary of the 64 KB segment).
  - Bottom of Stack = `SS x 10H + FFFFH`.
  - Current Top of Stack (TOS) = `SS x 10H + SP`.

### 3. Step-by-Step PUSH and POP Operations

#### PUSH Instruction: `PUSH Source`
When a 16-bit register or word is pushed onto the stack:
1. `SP` is decremented by 2:
   $$\text{New SP} = \text{SP} - 2$$
2. The High Byte (most significant byte) is written to physical address:
   $$(\text{SS} \times 10\text{H}) + \text{New SP} + 1$$
3. The Low Byte (least significant byte) is written to physical address:
   $$(\text{SS} \times 10\text{H}) + \text{New SP}$$

**Lecture Worked Example**:
- Given: `BX = 1234H` (`BH = 12H`, `BL = 34H`), `SS = 1800H`, `SP = 3A74H`.
- Initial TOS = `18000H + 3A74H = 1BA74H`.
- Operation: `PUSH BX`
  - Step 1: `New SP = 3A74H - 2 = 3A72H`.
  - Step 2: High byte `BH (12H)` stored at `1BA73H`.
  - Step 3: Low byte `BL (34H)` stored at `1BA72H`.
  - **New TOS = `1BA72H`**.

#### POP Instruction: `POP Destination`
When a 16-bit register or word is popped from the stack:
1. The Low Byte is read from physical address:
   $$(\text{SS} \times 10\text{H}) + \text{SP}$$
2. The High Byte is read from physical address:
   $$(\text{SS} \times 10\text{H}) + \text{SP} + 1$$
3. `SP` is incremented by 2:
   $$\text{New SP} = \text{SP} + 2$$

**Lecture Worked Example**:
- Given: `SS = 1234H`, `SP = 281AH`.
- Initial TOS = `12340H + 281AH = 14B5AH`.
- Operation: `POP CX`
  - Step 1: `CL` loaded from `14B5AH` (TOS).
  - Step 2: `CH` loaded from `14B5BH` (TOS + 1).
  - Step 3: `New SP = 281AH + 2 = 281CH`.
  - **New TOS = `14B5CH`**.

### 4. The 7 Data Addressing Modes of the 8086
The 8086 provides 7 fundamental ways to compute the **Effective Address (EA)** of an operand:

```
┌───────────────────────────────────┬───────────────────────────────┬───────────────────────────────┐
│ Addressing Mode                   │ Effective Address (EA) Formula│ Typical Instruction Example   │
├───────────────────────────────────┼───────────────────────────────┼───────────────────────────────┤
│ 1. Register Addressing            │ Operand in register           │ MOV AX, CX                    │
│ 2. Immediate Addressing           │ Operand in instruction code   │ MOV AL, 15H                   │
│ 3. Direct Addressing              │ EA = 16-bit direct offset     │ MOV AX, [1234H] / MOV AX, BETA│
│ 4. Register Indirect Addressing   │ EA = [BX] or [BP] or [SI/DI]  │ MOV AX, [BX] / MOV CX, [BP]   │
│ 5. Register Relative Addressing   │ EA = Base/Index + Displacement│ MOV AX, [BX + 1000H]          │
│ 6. Base-Plus-Index Addressing     │ EA = Base (BX/BP) + Index     │ MOV AX, [BX + SI]             │
│ 7. Base-Relative-Plus-Index       │ EA = Base + Index + Disp      │ MOV AX, [BX + SI + 0100H]     │
└───────────────────────────────────┴───────────────────────────────┴───────────────────────────────┘
```

#### Detailed Breakdown & Segment Rules:
1. **Register Addressing**: Operands reside directly in CPU internal registers. No memory access is made. Fast execution!
   - Example: `MOV AX, CX`, `MOV BX, DX`.
2. **Immediate Addressing**: The source operand is a constant literal embedded in the instruction code.
   - Example: `MOV AL, 15H`, `MOV AX, 1A3FH`.
3. **Direct Addressing**: The 16-bit Effective Address (EA) is directly specified in the instruction. Default segment is **DS**.
   - Formula: $\text{PA} = (\text{DS} \times 10\text{H}) + \text{Disp}$.
   - Example: `MOV AX, BETA` where `BETA = 1234H` and `DS = 0020H` $\implies \text{PA} = 00200\text{H} + 1234\text{H} = 01434\text{H}$.
4. **Register Indirect Addressing**: The EA is held in a pointer/index register enclosed in brackets.
   - **Segment Rule**: If `BX`, `SI`, or `DI` is used, the default segment is **DS**. If `BP` is used, the default segment is **SS**!
   - Example 1: `MOV AX, [BX]` where `BX = C15EH`, `DS = 1829H` $\implies \text{PA} = 18290\text{H} + \text{C15EH} = 243EE\text{H}$.
   - Example 2: `MOV CX, [BP]` where `BP = 1800H`, `SS = 8050H` $\implies \text{PA} = 80500\text{H} + 1800\text{H} = 81D00\text{H}$.
5. **Register Relative / Base Addressing**: The EA is the sum of a base register (`BX` or `BP`) or index register (`SI` or `DI`) and an 8-bit or 16-bit displacement value.
   - Example: `MOV AX, [BX + 1000H]` with `BX = 0100H`, `DS = 0200H` $\implies \text{PA} = 02000\text{H} + 0100\text{H} + 1000\text{H} = 03100\text{H}$.
6. **Base-Plus-Index Addressing**: The EA is the sum of a base register (`BX` or `BP`) and an index register (`SI` or `DI`).
   - Example: `MOV AX, [BX + SI]` with `DS = 0200H`, `BX = 1234H`, `SI = 2000H` $\implies \text{PA} = 02000\text{H} + 1234\text{H} + 2000\text{H} = 05234\text{H}$.
7. **Base-Relative-Plus-Index Addressing**: The EA is the sum of a base register, an index register, and a displacement.
   - Example: `MOV AX, FILE[BX + DI]` with `DS = 1F00H`, `BX = 3000H`, `DI = 0015H`, `FILE = 1234H` $\implies \text{PA} = 1F000\text{H} + 3000\text{H} + 0015\text{H} + 1234\text{H} = 23249\text{H}$.

#### Lecture Addressing Mode Identification Drills:
- `ADD AX, FADEH` $\to$ **Immediate Addressing** (`FADEH` is a constant value).
- `CMP FADE, AX` $\to$ **Direct Addressing** (`FADE` is a direct memory address/variable).
- `INC DH` $\to$ **Register Addressing** (`DH` is an internal 8-bit register).
- `ADC [BP+1800H], BX` $\to$ **Register Relative Addressing** (`BP` + displacement `1800H`).
- `AND AGAIN[BP+SI], DS` $\to$ **Base-Relative-Plus-Index Addressing** (`BP` + `SI` + displacement `AGAIN`).
- `OR DX, [DI]` $\to$ **Register Indirect Addressing** (`[DI]` points to address).
- `ADC AX, [BP+SI]` $\to$ **Base-Plus-Index Addressing** (`BP` + `SI`).

---

## WEEK 6: DATA TRANSFER INSTRUCTIONS & TRACING

### 1. General Principles of Data Transfer
- Facilitate the movement of byte or word data between:
  1. CPU Register $\leftrightarrow$ CPU Register
  2. CPU Register $\leftrightarrow$ Main Memory
  3. CPU Register $\leftrightarrow$ I/O Ports
- **CRITICAL EXAM RULE**: Data transfer instructions **DO NOT affect any flags** (with the sole exceptions of `POPF` and `SAHF` which explicitly modify flags)!

### 2. Master Table of 11 Data Transfer Instructions
| Instruction | Operands | Action / Explanation | Example |
| :--- | :---: | :--- | :--- |
| **`MOV`** | `D, S` | Copies Source ($S$) to Destination ($D$). Destination overwritten. | `MOV AX, [SI]` |
| **`PUSH`** | `S` | Pushes word operand $S$ to Top of Stack; decrements `SP` by 2. | `PUSH DX` |
| **`POP`** | `D` | Pops word from Top of Stack into $D$; increments `SP` by 2. | `POP AX` |
| **`PUSHA`** | *none* | Pushes all 8 general registers to stack in sequence: `AX, CX, DX, BX, SP, BP, SI, DI`. | `PUSHA` |
| **`POPA`** | *none* | Pops words from stack into all 8 general registers in reverse order. | `POPA` |
| **`XCHG`** | `D, S` | Swaps / exchanges the contents of Destination and Source. | `XCHG AX, BX` |
| **`IN`** | `D, S` | Copies byte/word from input port ($S$) to Accumulator ($AL/AX$). | `IN AX, DX` |
| **`OUT`** | `D, S` | Copies byte/word from Accumulator ($AL/AX$) to output port ($D$). | `OUT 05H, AL` |
| **`XLAT`** | *none* | Table lookup: translates byte in $AL$ using lookup table at $[BX + AL]$. | `XLAT` |
| **`LAHF`** | *none* | **Load AH from Flags**: Copies lower byte of PSW (`SF, ZF, AF, PF, CF`) into $AH$. | `LAHF` |
| **`SAHF`** | *none* | **Store AH into Flags**: Copies $AH$ into the lower byte of the Flag register. | `SAHF` |
| **`PUSHF`**| *none* | Pushes the entire 16-bit Flag register (PSW) onto the stack. | `PUSHF` |
| **`POPF`** | *none* | Pops top stack word directly into the Flag register (PSW). | `POPF` |

### 3. Rules & Restrictions for `MOV` and `XCHG`
- **MOV Restrictions**:
  1. **No Memory-to-Memory transfers**: You cannot do `MOV [LOC1], [LOC2]`. Must move via a temporary CPU register (e.g. `MOV AX, [LOC2]` then `MOV [LOC1], AX`).
  2. **CS cannot be a destination**: You cannot execute `MOV CS, AX` (would break code execution sequencing).
  3. **No Immediate to Segment Register**: You cannot do `MOV DS, 2000H`. You must load into a general register first: `MOV AX, 2000H` followed by `MOV DS, AX`.
  4. **Operand sizes must match**: Both operands must be 8-bit or both 16-bit (e.g. `MOV AL, BX` is illegal).
- **XCHG Restrictions**:
  1. Neither operand can be an **Immediate** value (`XCHG AX, 1234H` is illegal).
  2. Neither operand can be a **Segment Register** (`XCHG DS, AX` is illegal).
  3. Both operands cannot be memory locations simultaneously (no mem-to-mem).

### 4. `LEA` (Load Effective Address) vs `MOV`
- **Format**: `LEA Destination, Source`
- **Crucial Distinction**:
  - `MOV AX, [1234H]` $\implies$ Reads and copies the **data stored in memory** at offset `1234H` into `AX`.
  - `LEA AX, [1234H]` $\implies$ Computes and loads the **16-bit offset address itself (`1234H`)**, NOT the data stored in memory!
- **Lecture Example**:
  - Given: `DS = 5000H`, `LIST = 1800H`, memory at `51800H` contains `22H`.
  - `MOV AX, LIST` loads the contents of memory (`22H`).
  - `LEA BX, LIST` loads the offset address `1800H` into `BX`!

---

## WEEK 7: THE ARITHMETIC UNIT (PART 1)

### 1. The Central Role of the ALU
- The **Arithmetic and Logic Unit (ALU)** is the primary digital circuitry in the CPU where all numerical computations and logical evaluations take place.
- All digital computers fundamentally perform computation via **addition and subtraction**. Multiplication is repeated addition; division is repeated subtraction.

### 2. Number Representations for Signed Integers
Three primary systems exist for representing both positive and negative binary integers:
1. **Sign and Magnitude**:
   - The Most Significant Bit (MSB) is the **sign bit**: $0 = \text{positive}$, $1 = \text{negative}$.
   - The remaining bits represent the absolute magnitude of the number.
   - Example: $+5 = \mathbf{0}101_2$, $-5 = \mathbf{1}101_2$.
   - **Drawback**: Contains two representations for zero ($+0 = 0000_2$ and $-0 = 1000_2$). Complex hardware for addition/subtraction.
2. **1's Complement**:
   - Negative values are obtained by **inverting/complementing every single bit** of the positive representation ($0 \to 1$ and $1 \to 0$).
   - Example: $+3 = 0011_2 \implies -3 = 1100_2$.
   - **Drawback**: Still has two zeros ($+0 = 0000_2$ and $-0 = 1111_2$). Requires an end-around carry during addition.
3. **2's Complement (Universal Standard in Modern CPUs)**:
   - Obtained by taking the 1's complement and **adding 1** to the result:
     $$\text{2's Complement} = (\text{1's Complement}) + 1$$
   - Alternatively: Subtracted from $2^n$ (where $n$ is word length).
   - Example: $+3 = 0011_2 \to \text{1's Comp} = 1100_2 \to +1 \implies -3 = 1101_2$.
   - **Huge Advantages**:
     - Has only **one unique zero** ($0000_2$).
     - Represents one extra negative number: Range for $n$ bits is $-2^{n-1} \text{ to } +2^{n-1} - 1$ (for 4 bits: $-8 \text{ to } +7$).
     - Subtraction is performed seamlessly using pure addition hardware: $A - B = A + (\text{2's complement of } B)$.

#### 4-Bit Signed Integer Comparison Master Table:
| Binary ($b_3 b_2 b_1 b_0$) | Sign and Magnitude | 1's Complement | 2's Complement |
| :---: | :---: | :---: | :---: |
| `0000` | $+0$ | $+0$ | **$+0$** |
| `0001` | $+1$ | $+1$ | $+1$ |
| `0010` | $+2$ | $+2$ | $+2$ |
| `0011` | $+3$ | $+3$ | $+3$ |
| `0100` | $+4$ | $+4$ | $+4$ |
| `0101` | $+5$ | $+5$ | $+5$ |
| `0110` | $+6$ | $+6$ | $+6$ |
| `0111` | $+7$ | $+7$ | $+7$ |
| `1000` | **$-0$** | **$-7$** | **$-8$** |
| `1001` | $-1$ | $-6$ | $-7$ |
| `1010` | $-2$ | $-5$ | $-6$ |
| `1011` | $-3$ | $-4$ | $-5$ |
| `1100` | $-4$ | $-3$ | $-4$ |
| `1101` | $-5$ | $-2$ | $-3$ |
| `1110` | $-6$ | $-1$ | $-2$ |
| `1111` | $-7$ | **$-0$** | $-1$ |

### 3. Full Adder Circuitry & Logic Expressions
A Full Adder adds two operand bits ($x_i, y_i$) and an incoming carry bit ($c_i$):
- **Truth Table**:
  | $x_i$ | $y_i$ | $c_i$ | Sum ($s_i$) | Carry-out ($c_{i+1}$) |
  | :---: | :---: | :---: | :---: | :---: |
  | 0 | 0 | 0 | 0 | 0 |
  | 0 | 0 | 1 | 1 | 0 |
  | 0 | 1 | 0 | 1 | 0 |
  | 0 | 1 | 1 | 0 | 1 |
  | 1 | 0 | 0 | 1 | 0 |
  | 1 | 0 | 1 | 0 | 1 |
  | 1 | 1 | 0 | 0 | 1 |
  | 1 | 1 | 1 | 1 | 1 |
- **Boolean Equations**:
  $$s_i = x_i \oplus y_i \oplus c_i$$
  $$c_{i+1} = x_i y_i + x_i c_i + y_i c_i = x_i y_i + (x_i + y_i) c_i$$
- Implemented in a straightforward **2-level combinational logic circuit** (AND gates feeding an OR gate).

### 4. N-bit Ripple-Carry Adder & Propagation Delay
- An $n$-bit adder is constructed by cascading $n$ full adders: the carry output $c_i$ of each stage is connected to the carry input of the next stage.
- **The Delay Problem**: The carry must "ripple" through all $n$ stages before the final sum bit $s_{n-1}$ and carry-out $c_n$ are valid.
- **Delay Formula**:
  $$\text{Total Delay} = (n - 1) \times t_{\text{carry}} + t_{\text{sum}}$$
  - Assuming a gate delay of $0.5\text{ ns}$:
  - Carry propagation per stage takes 2 gate levels = $1.0\text{ ns}$.
  - The final sum requires an additional $1.5\text{ ns}$.
  - **For a 32-bit Ripple-Carry Adder**:
    $$\text{Total Time} = (31 \times 1.0\text{ ns}) + 1.5\text{ ns} = \mathbf{32.5\text{ ns}}$$
  - For high-speed GHz processors, $32.5\text{ ns}$ is far too slow!

### 5. Design of Fast Adders: Carry-Lookahead Adder (CLA)
To bring the addition delay down into the **few nanoseconds** range, we replace the ripple structure with a **Carry-Lookahead Adder (CLA)**:
- **Generate Function ($G_i$)**: A carry is generated internally if both inputs are 1:
  $$G_i = x_i \cdot y_i$$
- **Propagate Function ($P_i$)**: A carry is propagated if at least one input is 1:
  $$P_i = x_i + y_i \quad (\text{or } x_i \oplus y_i)$$
- **Recursive Carry Equation**:
  $$c_{i+1} = G_i + P_i c_i$$

#### Multi-Stage Expansion:
Expanding carries in terms of original inputs and the initial carry $c_0$:
- $c_1 = G_0 + P_0 c_0$
- $c_2 = G_1 + P_1 G_0 + P_1 P_0 c_0$
- $c_3 = G_2 + P_2 G_1 + P_2 P_1 G_0 + P_2 P_1 P_0 c_0$
- $c_4 = G_3 + P_3 G_2 + P_3 P_2 G_1 + P_3 P_2 P_1 G_0 + P_3 P_2 P_1 P_0 c_0$

#### Key Performance Insight:
- Notice that **all carry signals ($c_1, c_2, c_3, c_4$) depend ONLY on the initial carry $c_0$ and the operand bits ($X, Y$)**!
- Therefore, all carries are developed simultaneously in just **3 logic gate delays**:
  1. **1 Gate Delay**: To generate all $P_i$ and $G_i$ signals.
  2. **2 Gate Delays**: To pass through the 2-level AND-OR carry generation logic.
- Total carry time = **3 gate delays (1.5 ns)** regardless of word size!

### 6. The Practical Gate Fan-In Limitation
- While theoretically CLA solves delay, in practical chip fabrication, **Gate Fan-In** (maximum number of inputs a single logic gate can accept) imposes strict physical limits:
  - The logic expression for carry $c_{i+1}$ requires **$i + 2$ inputs** to the largest AND gate, and **$i + 2$ inputs** to the OR gate.
  - For an 8-bit Carry-Lookahead Adder, generating the final carry requires a fan-in of **nine (9)**!
  - Gates with fan-in $> 4$ or $5$ become electrically slow, bulky, and suffer from propagation degradation.
  - **Engineering Solution**: Modern 32-bit and 64-bit ALUs use **Hierarchical / Blocked Carry-Lookahead Adders** (e.g. 4-bit CLA blocks combined using higher-level group generate/propagate units).

---

## ⚡ QUICK EXAM TRAPS & CHEAT SHEET
1. **Physical Address Calculation**: Remember to multiply the segment by $10\text{H}$ (shift left by 1 hex digit) before adding the offset. `Segment x 10H + Offset`.
2. **Stack Growth**: Stack grows **downward** toward lower addresses. `PUSH` **decrements** SP (`SP - 2`); `POP` **increments** SP (`SP + 2`).
3. **Data Transfer Flags**: `MOV`, `PUSH`, `POP`, `XCHG` **DO NOT affect flags**! If an exam question asks what flag `MOV AX, 0000H` sets, the answer is: *No flags are changed!*
4. **`LEA` vs `MOV`**: `MOV` moves the *value* stored at the memory location. `LEA` moves the *offset address* itself.
5. **Zero Count**: Sign-Magnitude and 1's Complement have **two zeros** ($+0$ and $-0$). 2's Complement has only **one zero**.
6. **2's Complement Range**: An $n$-bit 2's complement number spans from $-2^{n-1}$ to $+2^{n-1}-1$. For 8 bits: $-128$ to $+127$.
7. **8086 Memory Banks**: Even Bank is addressed by $A_0 = 0$; Odd Bank is addressed by $\overline{\text{BHE}} = 0$.
8. **Addressing Modes**: If `BP` is in brackets, the default segment is **SS**, NOT `DS`! (`[BP]` uses `SS`; `[BX]`, `[SI]`, `[DI]` use `DS`).
