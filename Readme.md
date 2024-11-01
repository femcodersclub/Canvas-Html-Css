# CanvasTextAnimation

![CanvasTextAnimation Demo](assets/canvasAnimate.gif)

Este repositorio contiene un ejemplo práctico del artículo de femCoders Club: ["Introducción a las APIs en HTML: Potencia tus Proyectos Web"](https://www.femcodersclub.com/recursos/html/apis-html). En este ejemplo, utilizamos el elemento `<canvas>` en HTML junto con animaciones para mostrar cómo se pueden manipular gráficos y texto en pantalla sin necesidad de librerías externas.

## Descripción

El proyecto **CanvasTextAnimation** demuestra cómo crear una animación de texto dinámico en HTML5 Canvas, simulando un efecto en el que las letras se desplazan y se alinean para formar la frase "femCoders Club". Este efecto utiliza JavaScript para gestionar el movimiento de cada letra, empleando rotaciones y desplazamientos hacia su posición final, así como efectos de opacidad y color para mejorar la experiencia visual.

## Tecnologías utilizadas

- **HTML5**: Estructura básica de la página y del elemento `<canvas>`.
- **CSS3**: Estilos para el fondo de la página y sombra del canvas.
- **JavaScript**: Animación y control de cada letra en el `<canvas>`, incluyendo posiciones, velocidades y efectos visuales.

## Estructura de Archivos

- `index.html`: Contiene el lienzo `<canvas>` y la estructura de la página.
- `styles.css`: Define el estilo de fondo y sombras para el lienzo.
- `script.js`: Maneja toda la lógica de animación y posicionamiento de las letras en el canvas.

## Explicación del Código

1. **Inicialización**: Definimos el elemento `<canvas>` en HTML y lo estilizamos en CSS con un fondo degradado animado y sombras para un efecto 3D.

2. **Animación de letras**:
   - Cada letra de "femCoders Club" es un objeto con propiedades individuales de posición, ángulo y color.
   - En `script.js`, creamos una clase `Letter` para controlar cada letra. La clase incluye métodos para dibujar (`draw()`) y actualizar (`update()`) la posición y el color de cada letra.
   - Usamos JavaScript para calcular la posición inicial de cada letra en un movimiento de rotación, luego las ralentizamos hasta alcanzar su posición final con un ligero rebote.

3. **Efectos Visuales**:
   - Efectos de opacidad: Las letras aparecen gradualmente mientras se posicionan.
   - Cambio de color: Los colores se asignan de forma dinámica y rotativa.
   - Sombra: Las sombras en cada letra se aplican para mejorar el contraste en el fondo.

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/femcodersclub/CanvasTextAnimation.git
   ```

2. Abre el archivo index.html en tu navegador para ver la animación en acción.
Vista Previa
Aquí se muestra un GIF de cómo se ve la animación:

## Contribución

Las contribuciones y sugerencias son bienvenidas. No dudes en abrir un "Issue" o "Pull Request" para mejorar este ejemplo.

¡Esperamos que este ejemplo sea útil para entender cómo manipular gráficos y texto en canvas de HTML5! 🎨✨
