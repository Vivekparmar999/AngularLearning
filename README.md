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