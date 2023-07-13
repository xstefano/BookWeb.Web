# BookWeb.Web

Este proyecto en Angular V15 consume la API de [**BookWeb.API**](https://github.com/xstefano/BookWeb.API.git) y proporciona funcionalidades para simular una tienda de libros.

## Vistas

- **Login**: Permite a los usuarios iniciar sesión.
- **Register**: Permite a los usuarios registrarse para iniciar sesión.
- **Dashboard**: Muestra todos los libros de la tienda.
- **Store**: Carrito de compras donde se visualizan los items agregados al carrito.
- **Orders**: Muestra el historial de las órdenes realizadas.

## Requisitos

- [Node.js](https://nodejs.org/en)
- [Angular v15](https://angular.io/)

## Instalación

1. Clona este repositorio en tu máquina local.
2. Navega hasta el directorio del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias: `npm install`


## Configuración

Antes de ejecutar la aplicación, asegúrate de actualizar las URL de la API en los siguientes archivos para que coincidan con la ubicación de tu servicio de API de BookWeb.API:

- `src/app/services/auth.service.ts`
- `src/app/services/book.service.ts`
- `src/app/services/cart.service.ts`
- `src/app/services/order.service.ts`

## Ejecución

Ejecuta el siguiente comando para iniciar el servidor de desarrollo: `ng serve`


Una vez que el servidor esté en funcionamiento, puedes acceder a la aplicación en tu navegador web en la siguiente URL: `http://localhost:4200`.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar este proyecto, sigue estos pasos:

1. Haz un fork de este repositorio.
2. Crea una rama con tu nueva función: `git checkout -b mi-nueva-funcion`.
3. Realiza los cambios y guarda el archivo.
4. Confirma tus cambios: `git commit -m "Agregar mi nueva función"`.
5. Haz push a la rama: `git push origin mi-nueva-funcion`.
6. Abre una pull request en este repositorio.

## Contacto

Si tienes alguna pregunta o consulta, no dudes en contactarme a través de andres.aleg.19@gmail.com
