# IPT102: Integrative Programming and Technologies 2
## Complete Chronological Reviewer & Exam Digest (Weeks 1 to 6)
**Student:** Luigi Emanuel Britania • **Year & Section:** 3rd Year - SBIT3G  
**Institution:** Quezon City University — College of Computer Studies  
**Academic Year:** 2026–2027 (1st Semester)

---

## 📌 TABLE OF CONTENTS
1. [Week 1–2: Introduction to Basic Python Programming](#week-12-introduction-to-basic-python-programming)
2. [Week 3–4: Python Data Types, Numbers & Strings](#week-34-python-data-types-numbers--strings)
3. [Week 2 (Web): ASP.NET Core 9.0 & Visual Studio Environment](#week-2-web-aspnet-core-90--visual-studio-environment)
4. [Week 3 (Web): Understanding MVC Architecture and Routing](#week-3-understanding-mvc-architecture-and-routing)
5. [Week 4 (Web): Developing Controllers & Action Results](#week-4-developing-controllers--action-results)
6. [Week 5 (Web): Developing Views & Razor Syntax](#week-5-developing-views--razor-syntax)
7. [Week 6 (Web): Developing Views – Standard HTML Helpers](#week-6-developing-views--standard-html-helpers)

---

## WEEK 1–2: INTRODUCTION TO BASIC PYTHON PROGRAMMING

### 1. What is Python?
- **Definition**: A widely popular, general-purpose, interpreted, interactive, object-oriented, and high-level programming language.
- **Core Architecture**:
  - **Dynamically-typed**: Variable types do not need to be declared explicitly; they are bound to objects at runtime.
  - **Garbage-collected**: Memory allocation and deallocation are managed automatically.
- **Origins & Licensing**:
  - Conceived and created by Dutch computer scientist **Guido van Rossum** between **1985 and 1990**.
  - Like Perl, Python source code is published under the **GNU General Public License (GPL)**, making it fully open-source and free of cost.

### 2. Guido van Rossum
- Born **31 January 1956** in the Netherlands.
- Known as Python's **"Benevolent Dictator For Life" (BDFL)** until he stepped down on **12 July 2018**.
- Remained a member of the **Python Steering Council through 2019**, and voluntarily withdrew from nominations for the 2020 election.

### 3. Industry Demand & Real-World Careers
- **Why Top Companies Choose Python**: High demand across web development, software engineering, enterprise automation, Data Science, Artificial Intelligence (AI), and Machine Learning (ML).
- **Major Companies**: Google, Intel, NASA, PayPal, Facebook (Meta), IBM, Amazon, Netflix, Pinterest, Uber, and many more.
- **Career Pathways**:
  - Game Developer
  - Web Designer & Web Developer
  - Python Developer
  - Full-Stack Developer
  - Machine Learning Engineer
  - Data Scientist & Data Analyst
  - Data Engineer
  - DevOps Engineer
  - Software Engineer

### 4. Why Learn Python? (Key Advantages)
1. **Open Source**: Completely free to download, inspect, and use for commercial or personal projects.
2. **Simple & Intuitive**: Minimal keywords, clear English-like syntax, and uncluttered structure allow developers to learn rapidly.
3. **Versatile**: Used across diverse domains—from simple CLI scripts to large-scale web servers, scientific simulations, and games.
4. **Rich Ecosystem**: Standard libraries and specialized packages for AI (`TensorFlow`, `PyTorch`), Data Analysis (`Pandas`, `NumPy`), and Web (`Django`, `FastAPI`).
5. **High Market Demand & Competitive Salary**.
6. **Interpreted**: Processed at runtime line-by-line by the Python interpreter. You do not need to compile your program into machine binaries before executing it (similar to Perl and PHP).
7. **Interactive**: Developers can run instructions directly at the Python interactive REPL prompt (`>>>`) for immediate feedback.
8. **Object-Oriented**: Encapsulates data and methods cleanly within classes and objects.
9. **Beginner's Language**: Gentle learning curve that scales from introductory text processing all the way to complex web browsers and distributed cloud services.

### 5. Key Characteristics of Python
- Supports **functional**, **structured**, and **object-oriented (OOP)** programming paradigms.
- Can be utilized as a lightweight scripting language or compiled to **bytecode** for building large, mission-critical applications.
- Provides high-level dynamic data types with built-in dynamic type validation.
- Built-in **automatic garbage collection** prevents memory leaks.
- Seamlessly integrates with C, C++, COM, ActiveX, CORBA, and Java.

### 6. Broad Applications of Python
- **Easy to Learn, Read, and Maintain**: Strict formatting guidelines and English-like keywords ensure codebases remain visible, readable, and maintainable.
- **Broad Standard Library**: Python's "batteries included" philosophy provides cross-platform modules working consistently across UNIX, Windows, and Macintosh.
- **Interactive Mode**: Allows rapid prototyping, testing, and debugging of isolated code snippets directly.
- **Portability**: Code runs unmodified across an immense variety of hardware architectures with the same standard runtime interface.
- **Extendable**: Programmers can write performance-critical C/C++ modules and plug them directly into the Python interpreter.
- **Commercial Database Connectivity**: Native client interfaces for all major relational and NoSQL databases (MySQL, PostgreSQL, Oracle, SQLite, SQL Server).
- **GUI Programming**: Robust support for desktop GUIs across Windows MFC, Macintosh Cocoa, and the X Window System of Unix (Tkinter, PyQt, wxPython).
- **Scalability**: Offers superior architectural modularity and organization compared to legacy shell scripting.

### 7. Supported Platforms & Local Environment Setup
- **Checking Python Installation**: Open a command prompt or terminal and type:
  ```bash
  python --version
  # or
  python
  ```
- **Broad Operating System Support**:
  - Unix variants: Solaris, Linux, FreeBSD, AIX, HP/UX, SunOS, IRIX
  - Windows: Win 9x / NT / 2000 / XP / 7 / 10 / 11
  - Macintosh: Intel, Apple Silicon, PowerPC, 68K
  - Legacy & Embedded: OS/2, DOS, PalmOS, Nokia mobile phones (Symbian), Windows CE, Acorn/RISC OS, BeOS, Amiga, VMS/OpenVMS, QNX, VxWorks, Psion
  - Virtual Machines: Ported to Java (Jython) and .NET (IronPython)
- **Downloading Official Binaries**:
  - Official Portal: [https://www.python.org/](https://www.python.org/)
  - Official Documentation: [https://www.python.org/doc/](https://www.python.org/doc/) (available in HTML, PDF, PostScript)
- **Installation Walkthrough**:
  - **Linux/Unix**: Download source `.tar.gz`, extract files, optionally edit `Modules/Setup`, run `./configure` script, and execute `make install`. Installs executable to `/usr/local/bin` and libraries to `/usr/local/lib/pythonXX`.
  - **Windows**: Download `python-XYZ.msi` / `.exe` installer (requires Windows Installer 2.0+). Launch wizard, select default settings, add to PATH, and complete setup.
  - **Macintosh**: Pre-installed on macOS, or get latest installers from python.org. Historically, MacPython was maintained by Jack Jansen (`http://www.cwi.nl/~jack/macpython.html`).
- **Integrated Development Environments (IDEs)**:
  - **IDLE**: The very first Unix IDE developed for Python, bundled across Unix, Mac, and Windows.
  - **PythonWin**: The first dedicated Windows GUI interface and IDE for Python.

---

## WEEK 3–4: PYTHON DATA TYPES, NUMBERS & STRINGS

### 1. Python Syntax & Code Execution
- **Command-Line Direct Execution**: Run the Python REPL directly:
  ```python
  >>> print("Hello, World!")
  Hello, World!
  ```
- **Script File Execution**: Create a `.py` file and execute via terminal:
  ```bash
  python myfile.py
  ```

### 2. Python Indentation (Block Delimitation)
- **Indentation Definition**: The leading whitespace (spaces or tabs) at the beginning of a code line.
- **Architectural Role**: Unlike other languages (C++, Java, C#) where curly braces `{}` define code blocks and indentation is merely stylistic, **in Python indentation strictly indicates a code block**.
- **Indentation Rules**:
  - Skipping indentation where expected raises an **`IndentationError`**.
  - Number of spaces is determined by the programmer: standard convention is **4 spaces**, but must be **at least 1 space**.
  - You **must use the exact same number of spaces** within the same block of code, otherwise Python will throw an indentation error.
  ```python
  if 5 > 2:
      print("Five is greater than two!")
      print("Consistent indentation within block")
  ```

### 3. Comments in Python
- **Syntax**: Begins with the `#` symbol. Python ignores everything from `#` to the end of the line.
- **Purposes**:
  1. In-code documentation and explaining logic.
  2. Enhancing source code readability.
  3. Temporarily disabling lines from executing during debugging/testing.
- **Inline Comments**:
  ```python
  print("Hello, World!") # This is an inline comment
  ```

### 4. Variables & Dynamic Typing
- **Variable Definition**: Containers for storing data values.
- **No Declaration Keyword**: Python has no command for declaring variables (no `var`, `let`, `dim`). A variable is instantiated the exact moment you first assign a value to it.
- **Dynamic Re-typing**: Variables can change type dynamically after being assigned:
  ```python
  x = 4        # x is of type int
  x = "Sally"  # x is now of type str
  ```
- **Type Checking**: Use the `type()` built-in function:
  ```python
  print(type(x))  # <class 'str'>
  ```
- **Type Casting**: Constructors enforce explicit types:
  ```python
  x = str(3)    # '3'
  y = int(3)    # 3
  z = float(3)  # 3.0
  ```
- **Quotes**: Single quotes (`'John'`) and double quotes (`"John"`) are 100% identical.
- **Case Sensitivity**: Variable names are strictly **case-sensitive**. `a = 4` and `A = "Sally"` are two completely independent variables; `A` will never overwrite `a`.

### 5. Variable Naming Rules & Multi-Word Styles
- **3 Strict Rules**:
  1. Must begin with a **letter** or an **underscore** (`_`).
  2. **Cannot start with a number**.
  3. Can only contain alphanumeric characters and underscores (`A-z`, `0-9`, and `_`).
- **Naming Conventions for Multi-Word Variables**:
  - **Camel Case**: Each word, except the first, begins with a capital letter (`myVariableName = "John"`).
  - **Pascal Case**: Every word starts with a capital letter (`MyVariableName = "John"`).
  - **Snake Case**: Every word is lowercase and separated by an underscore (`my_variable_name = "John"`).

### 6. Multiple Values Assignment & Unpacking
- **Many Values to Multiple Variables**:
  ```python
  x, y, z = "Orange", "Banana", "Cherry"
  ```
  *(Note: Variable count must strictly equal value count, else `ValueError: too many values to unpack` or `not enough values to unpack`.)*
- **One Value to Multiple Variables**:
  ```python
  x = y = z = "Orange"
  ```
- **Collection Unpacking**: Extract list or tuple elements into distinct variables:
  ```python
  fruits = ["apple", "banana", "cherry"]
  x, y, z = fruits
  ```

### 7. Outputting Variables: `print()` Commas vs `+`
- **Output via Comma**: Separates multiple variables with spaces automatically and safely supports **different data types**:
  ```python
  x = 5
  y = "John"
  print(x, y)  # Output: 5 John
  ```
- **Output via `+` Operator**:
  - For strings: Acts as a **concatenation operator** (`"Python" + " " + "is cool"`).
  - For numbers: Acts as a **mathematical addition operator** (`5 + 10 = 15`).
  - **Exam Trap**: Attempting to combine a string and a number with `+` raises a fatal **`TypeError`** (`print(5 + "John")` fails!).

### 8. Variable Scope & the `global` Keyword
- **Global Variables**: Variables declared outside of any function belong to the global scope and can be read by everyone (inside and outside functions).
- **Local Variable Shadowing**: Declaring a variable with the same name inside a function creates a local variable accessible only inside that function. The global variable remains unchanged with its original value:
  ```python
  x = "awesome"
  def myfunc():
      x = "fantastic" # local variable
      print("Inside:", x) # Inside: fantastic

  myfunc()
  print("Outside:", x)    # Outside: awesome
  ```
- **The `global` Keyword**:
  1. Used inside a function to create a global variable within local function scope.
  2. Used inside a function to modify/rebind an existing global variable's value:
  ```python
  x = "awesome"
  def myfunc():
      global x
      x = "fantastic" # Modifies global x

  myfunc()
  print("Python is " + x) # Python is fantastic
  ```

### 9. Python's 8 Built-in Data Types
| Category | Built-in Type Name | Example Syntax |
| :--- | :--- | :--- |
| **Text Type** | `str` | `x = "Hello World"` |
| **Numeric Types** | `int`, `float`, `complex` | `20`, `20.5`, `1j` |
| **Sequence Types** | `list`, `tuple`, `range` | `["a", "b"]`, `("a", "b")`, `range(6)` |
| **Mapping Type** | `dict` | `{"name": "John", "age": 36}` |
| **Set Types** | `set`, `frozenset` | `{"apple", "banana"}`, `frozenset({"apple"})` |
| **Boolean Type** | `bool` | `True`, `False` |
| **Binary Types** | `bytes`, `bytearray`, `memoryview` | `b"Hello"`, `bytearray(5)`, `memoryview(b"5")` |
| **None Type** | `NoneType` | `x = None` |

### 10. Python Numbers & Random Values
- **`int` (Integer)**: Whole numbers, positive or negative, without decimals, with **unlimited precision/length** (`y = 35656222554887711`).
- **`float` (Floating Point)**: Numbers containing one or more decimal places, or scientific notation using `e`/`E` for powers of 10 (`x = 35e3` = 35,000.0).
- **`complex` (Complex Numbers)**: Written with a `j` or `J` representing the imaginary part (`x = 3 + 5j`).
- **Type Conversion**:
  - `int(2.8)` -> `2` (truncates decimals toward zero)
  - `float(1)` -> `1.0`
  - `complex(1)` -> `(1+0j)`
  - **Exam Trap**: **You CANNOT convert complex numbers into another number type** (`int(3+5j)` throws a `TypeError`).
- **Generating Random Numbers**:
  - Python has no standalone `random()` function.
  - Must import the `random` module:
    ```python
    import random
    print(random.randrange(1, 10)) # Generates integer from 1 up to 9 (10 is excluded)
    ```

### 11. Python Strings in Depth
- **Quotes**: Single quotes `'hello'` and double quotes `"hello"` are interchangeable.
- **Multiline Strings**: Enclosed with three double quotes `"""..."""` or three single quotes `'''...'''`. Line breaks are preserved exactly as written in the source code.
- **Strings are Arrays of Unicode Bytes**:
  - Python has **no single character data type**. A character is simply a string with a length of 1.
  - Access characters using **0-indexed square brackets**:
    ```python
    a = "Hello, World!"
    print(a[1]) # 'e'
    ```
- **Looping Through Strings**:
  ```python
  for x in "banana":
      print(x)
  ```
- **String Length**: `len(a)` returns the total character count.
- **Membership Testing (`in` / `not in`)**:
  ```python
  txt = "The best things in life are free!"
  print("free" in txt)          # True
  print("expensive" not in txt) # True
  ```
- **String Slicing (`[start:end]`)**:
  - Start index is **inclusive**; end index is **exclusive**.
  - `b[2:5]`: Characters from index 2 up to 4.
  - `b[:5]`: Slice from the start up to index 4.
  - `b[2:]`: Slice from index 2 all the way to the end.

### 12. String Modification Methods
- **CRITICAL RULE**: **All string methods return NEW string values. Strings in Python are immutable and can never be modified in place.**
- **`upper()`**: Converts string to uppercase.
- **`lower()`**: Converts string to lowercase.
- **`strip()`**: Trims all leading and trailing whitespace.
- **`replace(old, new)`**: Substitutes target occurrences (`a.replace("H", "J")`).
- **`split(separator)`**: Splits string into a list of substrings based on delimiter (`a.split(",")` -> `['Hello', ' World!']`).

### 13. String Formatting & Escape Characters
- **The `format()` Method**: Inserts numbers and variables into `{}` placeholders:
  ```python
  quantity = 3
  itemno = 567
  price = 49.95
  myorder = "I want {0} pieces of item {1} for {2} dollars."
  print(myorder.format(quantity, itemno, price))
  ```
- **Escape Characters (`\`)**:
  - `\"`: Double quote inside double-quoted string.
  - `\'`: Single quote.
  - `\\`: Backslash.
  - `\n`: Newline.
  - `\r`: Carriage Return.
  - `\t`: Tab.
  - `\b`: Backspace.
  - `\ooo`: Octal value.
  - `\xhh`: Hexadecimal value.

### 14. Essential String Methods Quick Reference
| Method | Description / Return Value |
| :--- | :--- |
| `capitalize()` | Converts the first character to uppercase |
| `casefold()` | Converts string into aggressive lowercase for caseless matching |
| `center(w)` | Returns centered string padded to width `w` |
| `count(sub)` | Counts occurrences of specified value |
| `endswith(val)`| Returns `True` if string ends with specified value |
| `find(sub)` | Searches for substring; returns index position (or `-1` if not found) |
| `index(sub)` | Searches for substring; returns index position (raises `ValueError` if not found) |
| `isalnum()` | Returns `True` if all characters are alphanumeric |
| `isalpha()` | Returns `True` if all characters are alphabetic |
| `isdigit()` | Returns `True` if all characters are digits |
| `islower()` / `isupper()` | Returns `True` if characters are all lowercase / uppercase |
| `isspace()` | Returns `True` if all characters are whitespace |
| `join(iterable)`| Joins elements of an iterable into one string using separator |
| `splitlines()` | Splits string at line break boundaries into a list |
| `startswith(val)`| Returns `True` if string begins with specified prefix |
| `swapcase()` | Swaps uppercase to lowercase and vice versa |
| `title()` | Converts the first character of each word to uppercase |
| `zfill(len)` | Pads string with leading zeros until specified length is reached |

---

## WEEK 2 (WEB): ASP.NET CORE 9.0 & VISUAL STUDIO ENVIRONMENT

### 1. Modern ASP.NET Core vs Legacy ASP.NET (.NET Framework)
When building web applications in Visual Studio, developers choose between two framework architectures:
| Feature / Characteristic | **ASP.NET Core (Modern)** | **ASP.NET (.NET Framework - Legacy)** |
| :--- | :--- | :--- |
| **Platform Support** | Cross-platform (Windows, Linux, macOS) | Windows-only |
| **Open Source** | 100% Open Source (.NET Foundation) | Proprietary / Legacy Windows components |
| **Target Framework** | .NET 8.0, .NET 9.0 (Unified runtime) | .NET Framework 4.x (Web Forms, MVC 5) |
| **Performance** | Industry-leading benchmark speeds | Heavier memory footprint, tied to IIS |
| **Recommendation** | **Highly recommended for all new applications** | Maintenance-only for legacy systems |

### 2. Prerequisites & Visual Studio Workload Setup
- To develop ASP.NET Core web applications:
  1. Open the **Visual Studio Installer**.
  2. Locate your installed Visual Studio version and click **Modify**.
  3. Under Desktop & Mobile / Web & Cloud, check **ASP.NET and web development**.
  4. Click **Modify** in the bottom right corner to download and apply workloads.

### 3. Choosing Your Project Template
- Visual Studio provides three primary web templates:
  1. **ASP.NET Core Web App (Razor Pages)**: Best for simple, page-focused websites. Models and controllers are consolidated cleanly into Razor page code-behinds.
  2. **ASP.NET Core Web App (Model-View-Controller)**: Best for complex, large-scale architectures requiring strict Separation of Concerns (SoC).
  3. **ASP.NET Core Web API**: Best for headless, backend-only microservices and RESTful services consumed by mobile or Single Page Apps (SPA).

### 4. Core Development Tools in Visual Studio
- **Solution Explorer**: The central tool window pane used to inspect and manage files, NuGet dependencies, configuration files, and static web assets.
- **Razor Editor**: Delivers rich syntax highlighting, HTML/C# tag helpers, and IntelliSense code-completion when mixing HTML markup with server C# code.
- **Hot Reload**: Enables developers to edit code, markup, and CSS while the web app is running without manually restarting, pausing, or recompiling.
- **Built-in Debugging**: Set line breakpoints in C# files to freeze execution, inspect variables in the Locals/Watch window, and step through code.

### 5. Hands-on Lab: Creating & Touring `MyCoreApp` (.NET 9.0)
- **Project Configuration**:
  - Project Name: `MyCoreApp`
  - Language: `C#` • Platform: `Windows` • Project Type: `Web`
  - Template: `ASP.NET Core Web App (Razor Pages)`
  - Framework: **.NET 9.0 (Standard Term Support)**
  - Authentication Type: **None** (Options: None, Individual Accounts, Microsoft Identity Platform, Windows)
  - Container Support: Unchecked
- **Solution Explorer Anatomy**:
  - `Connected Services`: Integrations with external cloud APIs or databases.
  - `Dependencies`: NuGet packages, SDKs, and runtime assemblies.
  - `Properties`: Contains `launchSettings.json` specifying local port bindings and SSL profiles.
  - `wwwroot`: The **root directory for all static website content** (CSS stylesheets, images, JavaScript files, and `favicon.ico`). Files placed here are served directly to clients.
  - `Pages`: Contains the `.cshtml` Razor pages:
    - `Index.cshtml` & `Index.cshtml.cs`: The home landing page.
    - `Privacy.cshtml` & `Privacy.cshtml.cs`: The privacy policy page.
    - `_ViewStart.cshtml`: Specifies default layout template.
    - `_ViewImports.cshtml`: Global namespace imports for all views.
    - `Shared/_Layout.cshtml`: Master site chrome, navigation bar, and footer.
  - `appsettings.json` & `appsettings.Development.json`: JSON configuration files for connection strings and logging levels.
  - `Program.cs`: The modern C# entry point containing dependency injection registrations and the HTTP middleware request pipeline.

### 6. Executing, Debugging, and Modifying Code
- **Running the Application**:
  - Press **F5** or click the green **https** button to launch in debug mode.
  - Press **Ctrl + F5** to launch without attaching the debugger (faster, supports Hot Reload).
  - Press **Shift + F5** to stop debugging and terminate the web server process.
- **Editing `Privacy.cshtml` & `Privacy.cshtml.cs`**:
  - In `Privacy.cshtml`:
    ```html
    @page
    @model PrivacyModel
    @{
        ViewData["Title"] = "Privacy Policy";
    }
    <h1>@ViewData["Title"]</h1>
    <p>This page is under construction as of @ViewData["TimeStamp"].</p>
    ```
  - In `Privacy.cshtml.cs`:
    - **Quick Actions Light Bulb**: Hover over greyed-out using directives -> click light bulb -> select **Remove unnecessary usings** -> Preview changes -> Apply.
    - Implement `OnGet()` handler:
      ```csharp
      using System.Globalization;

      public void OnGet()
      {
          string dateTime = DateTime.Now.ToString("d", new CultureInfo("en-US"));
          ViewData["TimeStamp"] = dateTime;
      }
      ```
    - `DateTime.ToString("d", CultureInfo)`: The format specifier `"d"` outputs the short date format (e.g., `11/19/2025`); the `CultureInfo` object determines language, calendar, and separator characters (`/` vs `-`).
- **Editing the Home Page (`Index.cshtml`)**:
  - Replace `<h1 class="display-4">Welcome</h1>` with `<h1 class="display-4">Hello World!</h1>`.
  - Save file and verify instant browser reload.

---

## WEEK 3 (WEB): UNDERSTANDING MVC ARCHITECTURE AND ROUTING

### 1. What is ASP.NET MVC 5?
- **Definition**: A lightweight, highly testable presentation framework built on the .NET Framework that implements the **Model-View-Controller (MVC)** architectural pattern.
- **Key Advantages**:
  - Clean **Separation of Concerns (SoC)**
  - Fast, modular development
  - **TDD Friendly** (Test-Driven Development with independent unit testability)
  - Full control over rendered HTML, CSS, and JavaScript

### 2. The Core MVC Trio
- **Model**:
  - *"Model represents the data."*
  - A C# class that models business entities, validation rules, and holds data retrieved from/stored into databases.
- **View**:
  - *"View is the User Interface."*
  - Renders data passed from the Model into dynamic HTML using Razor syntax (`.cshtml`).
- **Controller**:
  - *"Controller is the request handler."*
  - Inherits from `System.Web.Mvc.Controller`. Handles incoming HTTP requests, coordinates with Models for business logic, and selects the appropriate View to return as an HTTP response.

### 3. ASP.NET MVC Request Flow
1. User enters a URL in the web browser.
2. The browser sends an HTTP request to the web server (IIS).
3. The **Routing Engine** inspects the URL pattern against registered routes in `RouteTable`.
4. The request is routed to the target **Controller** and **Action Method**.
5. The Action Method queries the **Model** for data and selects a **View**.
6. The View executes Razor markup and returns the rendered HTML response to the browser.

### 4. MVC Default Solution Folder Structure
- `App_Data`: Contains data files like LocalDB `.mdf`, XML, and local databases. **IIS will never serve files directly from App_Data** to the public for security reasons.
- `App_Start`: Contains configuration classes executed at application startup (`RouteConfig.cs`, `BundleConfig.cs`, `FilterConfig.cs`).
- `Controllers`: Class files for controllers. **Naming convention mandate: Must end with `Controller`** (e.g., `HomeController.cs`, `StudentController.cs`).
- `Fonts`: Custom font assets (e.g., Glyphicons, TTF, WOFF).
- `Models`: Class files representing data entities with public getter/setter properties.
- `Scripts`: JavaScript and library dependencies (jQuery, Bootstrap, Modernizr).
- `Views`: Subfolders matched to each controller name (e.g., `Views/Home/Index.cshtml`, `Views/Shared/_Layout.cshtml`).

### 5. Critical MVC Configuration Files
- `Global.asax`: Application entry point file. Defines handlers for application-level lifecycle events: `Application_Start()`, `Application_BeginRequest()`, `Application_Error()`, `Session_Start()`, `Session_End()`.
- `Packages.config`: XML file managed by NuGet to track installed package IDs and version dependencies.
- `Web.config`: XML file containing application-level settings (connection strings, compilation settings, authentication modes).

### 6. Routing in ASP.NET MVC
- **Purpose**: Maps incoming URLs directly to physical Controller classes and Action Methods, liberating web apps from 1:1 physical file bindings (unlike Web Forms where `/page.aspx` must match `page.aspx` on disk).
- **Route Definition**:
  - Configured in `RouteConfig.cs` via `RegisterRoutes(RouteCollection routes)`.
  - Registered inside `Application_Start()` in `Global.asax.cs`.
- **Default URL Pattern**:
  ```csharp
  routes.MapRoute(
      name: "Default",
      url: "{controller}/{action}/{id}",
      defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
  );
  ```
  - `http://localhost/` -> `HomeController`, `Index()`, `id = null`
  - `http://localhost/student/index/123` -> `StudentController`, `Index()`, `id = 123`
  - `http://localhost/student/edit/100` -> `StudentController`, `Edit()`, `id = 100`

---

## WEEK 4 (WEB): DEVELOPING CONTROLLERS & ACTION RESULTS

### 1. Controllers in ASP.NET MVC
- A controller is a public C# class derived from the base class `System.Web.Mvc.Controller`.
- Located in the `Controllers` folder; must strictly end in the suffix `Controller`.
- Public methods inside a Controller class are called **Action Methods**.

### 2. The 3 Strict Rules for Action Methods
1. **Must be `public`**: An action method cannot be `private` or `protected`.
2. **Cannot be overloaded**: Action methods with identical names and identical HTTP verbs cannot be distinguished by the standard routing engine without an `[ActionName]` selector.
3. **Cannot be `static`**: Must be instance methods.

### 3. Default Action Method
- By convention in the default route configuration, the `Index()` method serves as the default action method if no action name is specified in the URL.

### 4. Action Results in ASP.NET MVC
Every action method returns an implementation of `ActionResult`. Helper methods on the base `Controller` class simplify instantiation:
| Result Class | Helper Method | Purpose / Description |
| :--- | :--- | :--- |
| `ViewResult` | `View()` | Renders an HTML View page to the browser |
| `PartialViewResult` | `PartialView()` | Renders a snippet/fragment of HTML from a partial view |
| `ContentResult` | `Content("text")` | Returns a raw text/string literal |
| `EmptyResult` | `null` | Represents no response (void HTTP response) |
| `FileResult` / `FileContentResult` | `File(...)` | Returns binary file content, path, or stream |
| `JavaScriptResult` | `JavaScript(...)` | Returns executable JavaScript script to the client |
| `JsonResult` | `Json(...)` | Returns JSON data for AJAX/API consumption |
| `RedirectResult` | `Redirect(url)` | Redirects the browser to a target external or internal URL |
| `RedirectToRouteResult` | `RedirectToAction("Action")` | Redirects to another Action Method in the current or different controller |
| `HttpUnauthorizedResult` | `HttpUnauthorized()` | Returns an HTTP 401/403 status code (Access Denied) |

### 5. Action Selectors
Action selectors are attributes applied above action methods to guide routing decisions:
1. **`[ActionName("CustomName")]`**:
   - Changes the public-facing action name accessed via URL.
   - Example:
     ```csharp
     [ActionName("find")]
     public ActionResult GetById(int id) { return View(); }
     ```
     URL: `/student/find/5` (instead of `/student/getbyid/5`).
2. **`[NonAction]`**:
   - Explicitly designates a `public` method so the routing engine **does NOT** treat it as an invokable action method.
3. **`ActionVerbs`**:
   - Restricts an action method to specific HTTP methods: `[HttpGet]`, `[HttpPost]`, `[HttpPut]`, `[HttpDelete]`, `[HttpPatch]`, `[HttpOptions]`.
   - If no verb attribute is applied, the method responds to **`[HttpGet]` by default**.
   - Multiple verbs can be attached using `[AcceptVerbs(HttpVerbs.Post | HttpVerbs.Get)]`.

---

## WEEK 5 (WEB): DEVELOPING VIEWS & RAZOR SYNTAX

### 1. Razor View Engine Overview
- Introduced in ASP.NET MVC 3 to replace Web Forms view engine (`.aspx`).
- Supports combining HTML markup with server-side C# or VB.NET code seamlessly.
- **File Extensions**:
  - C# syntax = `.cshtml`
  - Visual Basic syntax = `.vbhtml`

### 2. Main Razor Syntax Rules for C#
- Code blocks are enclosed in `@{ ... }`.
- Inline expressions (variables, functions, properties) begin with `@` (e.g., `@DateTime.Now`).
- Code statements inside `@{ ... }` must end with a semicolon (`;`).
- Variables are declared using the `var` keyword or standard C# types (`string`, `int`, `DateTime`).
- Strings are enclosed in double quotation marks (`"..."`).
- C# code in Razor is **strictly case-sensitive**.

### 3. Server Execution Pipeline
- When IIS processes a Razor page, the server executes all Razor code **first**.
- The server generates clean, static HTML on the fly.
- The client browser only ever receives standard HTML, CSS, and JS; the browser never sees the server-side `@` code.

### 4. Razor Code Patterns
- **Single-Line & Inline**:
  ```html
  <h1>Welcome</h1>
  <p>Today is @DateTime.Now.ToShortDateString()</p>
  ```
- **Multi-Statement Code Block**:
  ```csharp
  @{
      var date = DateTime.Now.ToShortDateString();
      var message = "Hello World";
  }
  <h2>Today's date is: @date</h2>
  <h3>@message</h3>
  ```
- **Conditional Statements**:
  ```csharp
  @{
      var greeting = "";
      if (DateTime.Now.Hour > 12) {
          greeting = "Good Evening";
      } else {
          greeting = "Good Morning";
      }
  }
  <p>Greeting: @greeting</p>
  ```
- **Loops**:
  ```html
  <ul>
  @for (int i = 0; i < 5; i++) {
      <li>Item index: @i</li>
  }
  </ul>
  ```
- **Reading User Input**:
  ```csharp
  @{
      var totalMessage = "";
      if (IsPost) {
          var num1 = Request["text1"];
          var num2 = Request["text2"];
          var total = num1.AsInt() + num2.AsInt();
          totalMessage = "Total = " + total;
      }
  }
  ```

---

## WEEK 6 (WEB): DEVELOPING VIEWS – STANDARD HTML HELPERS

### 1. What are Standard HTML Helpers?
- **Definition**: Extension methods of the `HtmlHelper` class used inside Razor views to render standard HTML form controls dynamically.
- Accessed via the `@Html` property, which is an instance of `HtmlHelper` included in the `WebViewPage` base class.
- **Benefits**:
  - Reduces repetitive boilerplate HTML
  - Automatically preserves state and binds to Model properties
  - Promotes clean separation and maintainable code

### 2. Loosely Typed vs Strongly Typed Helpers
- **Loosely Typed**: Takes control name/value as string literals (e.g., `@Html.TextBox("firstName")`).
- **Strongly Typed**: Uses lambda expressions tied to a compile-time model property (e.g., `@Html.TextBoxFor(m => m.FirstName)`).

### 3. Standard HTML Helper Methods & HTML Controls
| Helper Method | Generated HTML Output | Usage / Description |
| :--- | :--- | :--- |
| `@Html.ActionLink()` | `<a href="...">...</a>` | Generates a hyperlink to another controller action |
| `@Html.TextBox()` | `<input type="text" />` | Standard single-line text entry |
| `@Html.TextArea()` | `<textarea>...</textarea>` | Multi-line text input for long messages or addresses |
| `@Html.Password()` | `<input type="password" />` | Password input masked with asterisks `*` |
| `@Html.CheckBox()` | `<input type="checkbox" />` | Boolean toggle (true/false) |
| `@Html.RadioButton()` | `<input type="radio" />` | Mutually exclusive single-selection radio button |
| `@Html.DropDownList()`| `<select><option>...</select>` | Non-editable single-choice dropdown selector |
| `@Html.ListBox()` | `<select multiple>...</select>` | Multi-selection list box |
| `@Html.Hidden()` | `<input type="hidden" />` | Hidden field for carrying data not shown to user |
| `@Html.Label()` | `<label>...</label>` | Read-only text label for input controls |
| `@Html.Editor()` | Dynamic HTML input | Renders HTML control based on model data type |
| `@Html.Display()` | Plain HTML text | Displays model property value as text |

### 4. Code Examples & Signatures
- **Label**:
  ```csharp
  @Html.Label("Username")
  ```
- **TextBox**:
  ```csharp
  @Html.TextBox("txtUsername")
  ```
- **Password**:
  ```csharp
  @Html.Password("userPassword")
  ```
- **RadioButton**:
  ```csharp
  @Html.RadioButton("Gender", "Male", true, new { id = "male" }) Male
  @Html.RadioButton("Gender", "Female", false, new { id = "female" }) Female
  ```
- **TextArea**:
  ```csharp
  @Html.TextArea("Address")
  ```
- **CheckBox**:
  ```csharp
  @Html.CheckBox("AgreeTerms") I accept the terms
  ```
- **DropDownList with SelectList**:
  ```csharp
  @{
      IEnumerable<string> strCourses = new List<string> { "BSCS", "BSIT", "BSBA", "BSIE", "BSECE" };
  }
  @Html.DropDownList("ddlCourses", new SelectList(strCourses), "Select Course")
  ```

---
*Created for Luigi Emanuel Britania • QCU BSIT Reviewer Portal • AY 2026-2027 Semester 1*
