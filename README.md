# Proyecto 2 — Weather Dashboard

## Introducción
Este proyecto es un panel de visualización del clima que muestra información actualizada sobre el clima de una ciudad específica, incluyendo temperatura, índice UV y descripción del clima. Utiliza la API de Weatherbit para obtener los datos meteorológicos. La pagina puede ser encontrada en: https://proyecto2-stw-377bf.web.app

## Tecnologías Implementadas
- ⚛ **React**: Utilizado para construir la interfaz de usuario y manejar la lógica del proyecto.
- 💅 **CSS**: Utilizado para el diseño y estilo de los componentes y la página en general.
- 📦 **Webpack**: Utilizado como el empaquetador de módulos para el proyecto.
- 📄 **JavaScript**: Se utilizaron scripts de JavaScript para controlar tanto los componentes como la pagina principal del proyecto "App".
- 📦 **package.json**: Archivo de configuración que define las dependencias y scripts del proyecto.
- 🌐 **Google Fonts**: Se utilizaron fuentes de Google Fonts para estilizar el texto en la página.

## Features
- 📱 **Responsive**: El diseño y la implementación son totalmente responsivos, lo que permite que la página se adapte y se vea correctamente en diferentes dispositivos y tamaños de pantalla.
- 🌐 **Utilizacion de barra de busqueda**: La busqueda puede realizarse por medio de ciudades, las cuales son mandadas a llamar a la API.
- 🌐 **uso del API**: Puedes visitar la página del API utilizado en el siguiente enlace: [https://www.weatherbit.io](https://www.weatherbit.io).

## Estructura
- Carpeta public: donde se encuentra toda la estructura del html que se manda a llamar en el App.js. Ademas de los componente necesarios para el backend del la pagina, como el icono y algunas otras imagenes.
- Carpeta src: como lo indica su nombre donde va el source del proyecto, donde van los archivos Apps.js, Index.js y App.css donde se encuentran los estilos respetivos para la pagina. Ademas una carpeta dentro de este donde van los componentes necesarios como fonts. 
- Carpeta components: esta se encuentra dentro de la carpeta anterior 'src', en esta como lo indica su nombre encontraremos todos los componentes utilizados dentro de la App, como MainWidget, UvWidhet, Temperature, SearchBar, y sus estilos correspondientes, se encuentra en esta carpeta de manera que podamos usarlos y llamarlos globalmente. 

## Archivos Principales
- *App.js*: El archivo principal de la aplicación React que define el componente App que representa la estructura de la página de la aplicación Weather App.
- *index.js*: El archivo principal de entrada que renderiza el componente App en el elemento root del documento HTML.
- *App.css*: El archivo principal de la aplicación React que define el componente App que representa la estructura de la página de la aplicación clon de Tesla.
- *index.html*: El archivo HTML principal que estructura la página del proyecto.


## Instrucciones de Ejecución
1. Clona el repositorio en tu máquina local usando:
```javascript
https://github.com/gusanitor8/stw_proyecto2.git
```
2. Ejecuta el comando el siguiente comando para instalar las dependencias:
```javascript
npm install
```
3. Obtén una API key de Weatherbit registrándote en su sitio web:
(https://www.weatherbit.io)
4. En el archivo App.js, reemplaza la constante API_KEY con tu propia API key de Weatherbit
5. Ejecuta el comando el siguiente comando para iniciar la aplicación en el servidor de desarrollo:
```javascript
npm start
```
