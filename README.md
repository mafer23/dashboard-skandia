📌 Proyecto: Front Page Skandia
===============================

Este proyecto es una aplicación desarrollada en **Angular 20**, diseñada bajo un enfoque **modular y escalable**, con arquitectura **limpia y organizada por dominios** (components, core, layouts, pages).

El objetivo es ofrecer una base sólida para proyectos **corporativos** y **financieros**, integrando:

*   **Componentes reutilizables** (UI desacoplada).
    
*   **Servicios centralizados** (manejo de datos).
    
*   **Layouts** para estructura global.
    
*   **Pages** para vistas principales con enrutamiento modular.
    

🚀 Tecnologías principales
--------------------------

*   **Angular 20 (standalone components)** → Aprovechando la eliminación de NgModules, mejor rendimiento y simplicidad.
    
*   **TypeScript** → Tipado estricto para mayor robustez.
    
*   **TailwindCSS** → Estilos limpios y responsive con filosofía _utility-first_.
    
*   **RxJS** → Manejo de datos reactivos y asincronía.
    
*   **Jasmine + Karma** → Pruebas unitarias y de integración.
    

📦 Instalación
--------------

Clona el repositorio y entra en la carpeta:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   git clone https://github.com/tuusuario/front-page-skandia.git  cd front-page-skandia   `

Instala dependencias:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   npm install   `

▶️ Ejecución del proyecto
-------------------------

Levantar en modo desarrollo:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   ng serve   `

Abrir en navegador: 👉 [http://localhost:4200](http://localhost:4200)

Compilar para producción:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   ng build --configuration production   `

🧪 Testing
----------

Ejecutar pruebas unitarias:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   ng test   `

Con cobertura:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   ng test --code-coverage   `

Reporte disponible en coverage/index.html.

Ejemplo de test unitario (cards-products-slider.component.spec.ts):

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   it('should load cards from service', () => {    expect(component.cards.length).toBeGreaterThan(0);  });   `

📂 Estructura del proyecto
--------------------------

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   src/   ┣ app/   ┃ ┣ front-page/         → Feature principal   ┃ ┃ ┣ components/       → Componentes reutilizables (UI)   ┃ ┃ ┣ core/             → Servicios, modelos y lógica de negocio   ┃ ┃ ┣ layouts/          → Layouts (estructura global de la app)   ┃ ┃ ┣ pages/            → Páginas enrutadas (vistas principales)   ┃ ┃ ┣ front-page.routes.ts → Configuración de rutas   ┃ ┣ app.config.ts       → Configuración global   ┃ ┣ app.routes.ts       → Rutas raíz   ┃ ┣ app.spec.ts         → Tests del componente raíz   ┃ ┣ app.ts              → Componente raíz standalone   ┃ ┣ app.html            → Template principal (router-outlet)   ┃ ┣ app.css             → Estilos del componente raíz   ┣ assets/               → Imágenes y recursos estáticos   ┣ styles.css            → Estilos globales (Tailwind, resets)   ┣ main.ts               → Bootstrap de Angular   ┣ index.html            → Entrada de la aplicación   `

🔍 Características destacadas
-----------------------------

✅ **Arquitectura modular** → separación clara en _core, components, layouts, pages_.✅ **Componentes standalone** → más simples, sin necesidad de NgModules.✅ **UI responsive con TailwindCSS** → diseño moderno y adaptable.✅ **Testing con mocks** → servicios simulados para validar flujos.✅ **Preparado para escalar** → ideal para aplicaciones financieras/corporativas.

📈 ¿Por qué este stack?
-----------------------

*   **Angular 20**: soporte corporativo, rendimiento y comunidad.
    
*   **Standalone components**: simplificación de la arquitectura.
    
*   **Testing obligatorio**: garantiza calidad y mantenibilidad.
    
*   **Mobile-first + Tailwind**: experiencias consistentes en todos los dispositivos.
    

🎯 Conclusión
-------------

Este proyecto refleja **buenas prácticas de arquitectura Angular moderna**, con un enfoque pensado en **escalabilidad y mantenibilidad**, ideal para demostrar conocimiento en:

*   **Frontend enterprise-level**
    
*   **Testing y calidad de software**
    
*   **Diseño mobile-first moderno**
