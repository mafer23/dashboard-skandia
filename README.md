# Prueba Técnica – Front Page Skandia

Plataforma financiera desarrollada en **Angular 20** con **standalone components** y **TailwindCSS**, que permite visualizar productos financieros, asociarlos a objetivos y explorar recomendaciones personalizadas.

![Angular](https://img.shields.io/badge/Angular-20-red?style=flat&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0-38B2AC?style=flat&logo=tailwind-css)
![Testing](https://img.shields.io/badge/Testing-Jasmine%2FKarma-green?style=flat)

---

## Características principales

- Dashboard financiero con slider de productos interactivo
- Cards reutilizables con datos mockeados desde servicios
- Asociación de productos a objetivos de inversión
- Explorador de recomendaciones con CTAs dinámicos
- Diseño mobile-first completamente responsive
- Testing unitario en componentes clave

---

## Tecnologías utilizadas

| Tecnología | Versión | Propósito |
|-----------|---------|-----------|
| Angular | 20 | Framework frontend |
| TypeScript | 5.0+ | Tipado estático |
| TailwindCSS | 3.x | Estilos utilitarios |
| RxJS | 7.x | Programación reactiva |
| Jasmine/Karma | - | Testing unitario |

---

## Estructura del proyecto

```
src/
┣ app/
┃ ┣ front-page/              # Feature principal
┃ ┃ ┣ components/            # Componentes reutilizables (UI)
┃ ┃ ┣ core/                  # Servicios, modelos y lógica de negocio
┃ ┃ ┣ layouts/               # Layouts (estructura global)
┃ ┃ ┣ pages/                 # Páginas enrutadas
┃ ┃ ┗ front-page.routes.ts   # Configuración de rutas
┃ ┣ app.config.ts            # Configuración global
┃ ┣ app.routes.ts            # Rutas raíz
┃ ┣ app.component.ts         # Componente raíz standalone
┃ ┗ app.component.spec.ts    # Tests del componente raíz
┣ assets/                    # Imágenes y recursos estáticos
┣ styles.css                 # Estilos globales (Tailwind)
┣ main.ts                    # Bootstrap de Angular
┗ index.html                 # Entrada de la aplicación
```

---

## Instalación y ejecución

### Prerequisitos

- Node.js >= 18.x
- npm >= 9.x

### 1. Clonar el repositorio

```bash
git clone https://github.com/tuusuario/prueba-skandia.git
cd prueba-skandia
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar servidor de desarrollo

```bash
npm start
```

La aplicación estará disponible en: **http://localhost:4200**

### 4. Ejecutar pruebas unitarias

```bash
npm test
```

### 5. Generar build de producción

```bash
npm run build
```

Los archivos compilados estarán en `dist/`

---

## Testing

Se implementaron pruebas unitarias para garantizar la calidad del código.

### Escenarios probados:

- Creación correcta de componentes
- Funcionalidad de scroll en slider (izquierda/derecha)
  
### Ejecutar tests:

```bash
# Ejecutar todos los tests
npm test

# Ejecutar con coverage
npm run test:coverage
```

---

## Decisiones técnicas

### ¿Por qué Angular 20?
- Soporte corporativo y estabilidad
- Excelente rendimiento y optimización
- Comunidad activa y amplia documentación

### ¿Por qué Standalone Components?
- Menos boilerplate y código más limpio
- Simplificación de la arquitectura
- Mejor tree-shaking y rendimiento

### ¿Por qué TailwindCSS?
- Rapidez en prototipado
- Consistencia visual
- Enfoque mobile-first nativo

### Arquitectura

- **Separación clara** entre UI (components) y lógica (core)
- **Slider custom** en lugar de librerías externas (control total)
- **Mock de servicios** para simular integración con APIs
- **ViewChild + ElementRef** para manipulación segura del DOM

---

## Buenas prácticas aplicadas

- Standalone components (Angular 20)
- Separación de concerns (core, components, layouts, pages)
- Programación reactiva con RxJS
- Mobile-first design
- Testing con mocks y spies
- TypeScript strict mode
- Componentes reutilizables y escalables

## Autor

**Maria Fernanda Palencia Cáceres**

- GitHub: [@mafer23](https://github.com/mafer23)
- LinkedIn: [fernandapalencia](https://www.linkedin.com/in/fernandapalencia/)
- Email: mafer18199420@gmail.com

## Agradecimientos

Gracias a Skandia por la oportunidad de demostrar habilidades en desarrollo frontend moderno.


 ## Imagenes de la interfaz
 
 #### Banner 
 <img width="1325" height="599" alt="image" src="https://github.com/user-attachments/assets/1e0dd151-084f-40d8-a600-6bef5c16ee73" />

#### Slider
<img width="1343" height="336" alt="image" src="https://github.com/user-attachments/assets/491025d7-d94d-4928-987c-7bb386857e12" />

#### Footer
<img width="1308" height="276" alt="image" src="https://github.com/user-attachments/assets/6c441b60-7b94-497a-bacf-6ce3bca0ac62" />

#### Button Explore

<img width="1249" height="585" alt="image" src="https://github.com/user-attachments/assets/a0cedadc-6d09-43d1-ac3e-27fb156cd512" />

#### Responsive

<img width="255" height="525" alt="image" src="https://github.com/user-attachments/assets/d1bd7b1a-e368-44de-b4bc-071a1251b868" />

<img width="249" height="501" alt="image" src="https://github.com/user-attachments/assets/225fb201-f8b8-47da-aa74-425b7d51971c" />

<img width="245" height="434" alt="image" src="https://github.com/user-attachments/assets/a6f6a6a7-589a-40c5-b67b-7e0a57f157de" />
