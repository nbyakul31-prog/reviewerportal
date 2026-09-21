# IPT102: Integrative Programming and Technologies 2
## Complete Chronological Reviewer & Exam Digest (Weeks 2 to 6)
**Student:** Luigi Emanuel Britania • **Year & Section:** 3rd Year - SBIT3G  
**Institution:** Quezon City University — College of Computer Studies  
**Academic Year:** 2026–2027 (1st Semester)

---

## 📌 TABLE OF CONTENTS
1. [Week 2: Review to ASP.NET with Visual Studio](#week-2-review-to-aspnet-with-visual-studio)
2. [Week 3: Understanding MVC Architecture and Routing](#week-3-understanding-mvc-architecture-and-routing)
3. [Week 4: Developing Controllers](#week-4-developing-controllers)
4. [Week 5: Developing Views & Razor Syntax](#week-5-developing-views--razor-syntax)
5. [Week 6: Developing Views – Standard HTML Helpers](#week-6-developing-views--html-helpers)

---

## WEEK 2: REVIEW TO ASP.NET WITH VISUAL STUDIO

### 1. Introduction to Dynamic Websites
- **Static vs Dynamic**:
  - *Static Pages*: Require manual HTML updating before their contents change.
  - *Dynamic Websites*: Offer unique, customized content to visitors every time they view the site. Content adapts based on viewer demographics, time of day, location, and language settings.
- **Under the Hood**: Dynamic functionality is achieved via a synergy between **client-side** and **server-side** scripting.
  - **Client-Side Scripting**: Code executed directly inside the user's web browser (e.g., JavaScript). Handles real-time UI interactivity such as click handling, input validation, and animations.
  - **Server-Side Scripting**: Code executed on the web server before sending the final HTML output to the client browser (e.g., ASP.NET C#, PHP, Node.js). Handles database transactions, authentication, session states, and business logic.
  - *Synergy*: Using both reduces server load while delivering an adaptive browsing experience.

### 2. Elements & Benefits of Dynamic Websites
- **Core Elements**: Responsive layout based on screen viewport, automatic localized language detection, personalized recommendation algorithms, third-party social media integrations, and animated visual feedback.
- **Top Benefits**:
  - More personalized user browsing
  - Easier to maintain and scale
  - Superior user experience (UX)
  - Elevated, enterprise-grade aesthetic
  - Keeps pace with modern web development standards

### 3. ASP.NET Page Syntax
- Any standard HTML page can be transformed into an ASP.NET Web Form simply by renaming the extension to `.aspx`.
- **Primary Page Directives & Elements**:
  - Directives: `<%@ Page Language="C#" %>`
  - Server Controls: `<asp:Button runat="server" />`
  - Code Blocks: `<script runat="server"> ... </script>`
  - Data Binding Expressions: `<%# ... %>`
  - Server-Side Comments: `<%-- Server Comment --%>`
  - Render Blocks: `<%= ... %>` and `<% ... %>` *(Note: direct render blocks are generally discouraged in favor of code-behind and event handlers).*

### 4. Server Controls & `runat="server"`
- Any HTML element or ASP control marked with `runat="server"` is accessible and controllable in server-side C# code.
- Example:
  ```xml
  <input type="text" id="text2" runat="server" />
  <asp:calendar id="myCal" runat="server" />
  <asp:TextBox id="txt" runat="server" />
  ```
  In C# code-behind:
  ```csharp
  string s = txt.Text;
  TextBox tBox = (TextBox)Page.FindControl("txt");
  ```
- **5 Types of Web Controls in ASP.NET**:
  1. *HTML Controls* (pure client-side browser elements)
  2. *HTML Server Controls* (HTML tags with `runat="server"`)
  3. *ASP.NET Server Controls* (`<asp:...>` controls with rich properties)
  4. *ASP.NET AJAX Server Controls* (controls with partial-page update capabilities)
  5. *User Controls & Custom Controls* (reusable custom composite components)

### 5. Control Properties
- Tag attributes map directly to server control properties.
- Tags and attributes are **case-insensitive**.
- Properties can be configured programmatically at runtime:
  ```csharp
  c1.Text = "Foo";
  c2.Rows = 5;
  ```

### 6. ASP.NET Page Event Lifecycle
The strict execution order of an ASP.NET Web Form:
1. **Initialize** (`Page_Init`)
2. **Restore Control State**
3. **Load Page** (`Page_Load`)
4. **Control Events**:
   - Change Events (e.g., `Textbox1_Changed`)
   - Action Events (e.g., `Button1_Click`)
5. **Save Control State**
6. **Render**
7. **Unload Page** (`Page_Unload`)

### 7. Types of UI Controls
- **HTML Controls**: Native browser elements. Purely client-side; invisible to the web server; maximum raw performance.
- **HTML Server Controls**: Standard HTML tags converted to server-aware components via `runat="server"`. Offer automatic ViewState management and server-side event wiring while rendering standard HTML.
- **4 Subcategories of Server Controls**:
  1. *Basic Controls*: `<asp:button>`, `<asp:imagebutton>`, `<asp:linkbutton>`, `<asp:hyperlink>`, `<asp:textbox>`, `<asp:checkbox>`.
  2. *List Controls*: `<asp:dropdownlist>`, `<asp:listbox>`, `<asp:radiobuttonlist>`, `<asp:checkboxlist>`.
  3. *Rich Controls*: `<asp:calendar>`.
  4. *Validation Controls*: Extensible declarative validation executing on both client and server; prevents malicious form tampering/spoofing.

---

## WEEK 3: UNDERSTANDING MVC ARCHITECTURE AND ROUTING

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

## WEEK 4: DEVELOPING CONTROLLERS

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

## WEEK 5: DEVELOPING VIEWS & RAZOR SYNTAX

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

## WEEK 6: DEVELOPING VIEWS – STANDARD HTML HELPERS

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
*Created for Luigi Emanuel Britania • QCU BSIT Reviewer Portal • Keep this guide handy for midterm and final exam preparation!*
