Node version - 20.12.2
Run Project - npm run ng serve

<h2>Angular Learning</h2>

<h4>1) Initial Commit:</h4>

- Project Setup
- Component - Defines a part of the UI (HTML + TypeScript + Styles)
- Directive - Modify the DOM layout (ngIf, ngFor, ngStyle)
- Pipe - simple functions that take input, process it, and return the transformed output.
    eg - {{ name | uppercase }} <!-- Outputs: JOHN DOE -->
- Standalone(Present app.config.ts) vs NgModule(Present app.module.ts)
    - NgModules - traditional way of organizing Angular
    - Standalone - No need of NgModule file & independently of component & smaller & faster
    - NgModule Decorator - Contains metadata that Angular uses to compile and run the application.
        - declaration: Component, Directives, Pipes (Declarables must belong to exactly one module)
        - import: File To needed for import
        - providers: Services available for injection
        - bootstrap: root component that Angular should bootstrap when the application starts

<h4>2) Second Commit:</h4>

- Creating new Component: ng g c home
    - Standalone it doesn`t require to register
    - NgModule We need to register in module file
- Routing
    - App Component file is main, Here we can define Header, Footer & router-outlet
    - In routing file we need to register url path & component
    - routerLink is used for navigation between components
    - We need Import RouterModule/RouterLink in Standalone typescript file
    - In NgModule RouterModule is already present by default
- Injection (Home.Component.ts)
    - There are 2 ways for Dependency Injection
    - Constuctor & injection method

<h4>3) Third Commit:</h4>

- Routing (about.component.ts)
    - passing param from one page to another
- Lazy Loading (app-routes.module.ts, app.module.ts)
    - User don`t have to wait for the elments to download when they activate a route
    - https://v17.angular.io/guide/lazy-loading-ngmodules
- Admin Panel (admin.component.ts)
    - Forms
        - Reactive Forms (Complex, dynamic forms)
        - Template Driven Form/FormsModule (Simple, small-scale forms)
    - Adding Reactive Form & it`s validation

<h4>4) Fourth Commit:</h4>

- Design of New HomePage
    - Navbar (header.component.ts)
        - Standalone - Will need to Import RouterLink in Component.ts file
        - NgModule - Import not needed
- In NgModule Project if it has A Component is used in B & C NgModules then we should create SharedModule for A component.Inside SharedModule we can add declarations of that A component.We can import that in SharedModules in B & C NgModules (CoursesComponent.ts)
- Input Decorator - Transfer Data from Parent Component to Child Component Dynamically
- Output Decorator - Transfer Data from Child Component to Parent Component using 
- Added Bootstrap to the project
    - Added it`s packages (bootstrap & bootstrap-icons)
    - Added bootstrap css & js file into angular.json file
    - imported bootstrap-icons in styles.scss
- Using LocalStorage to Store data


<h4>Reference Links</h4>
- https://www.youtube.com/watch?v=_PQ7NSppj3Q&t=4161s