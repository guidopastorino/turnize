Kiosko Cristi es una aplicación web para gestionar un minimarket.

En ella puedes crear usuarios con un identificador único legible, rol (usuario o administrador), nombre completo, correo electrónico y contraseña segura (almacenada mediante hash), además de llevar el control de su carrito de compras, sus categorías favoritas y los productos que han guardado.

También permite definir productos que incluyen un identificador único, nombre, descripción, precio, cantidad en stock, categoría, una imagen principal con su ruta y clave de archivo, una galería de imágenes y vínculos a subproductos relacionados.

Por el momento, cuenta con una ruta GET en /api/users que, al acceder a ella, crea automáticamente un nuevo usuario con valores predeterminados o con nombre, correo y rol que se le pasen por parámetros en la URL.

En el futuro se pueden añadir endpoints adicionales para crear, leer, actualizar y eliminar productos, así como funcionalidades de autenticación, gestión de pedidos y un panel de administración.