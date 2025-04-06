# Turnize

Turnize es una plataforma moderna que conecta a pacientes con profesionales de la salud, permitiendo buscar, reservar y gestionar turnos de manera sencilla. La aplicación está diseñada para profesionales que ofrecen servicios en múltiples ubicaciones y para pacientes que buscan una atención personalizada.

---

## Características

- Búsqueda de Profesionales:  
  Filtra por especialidad, ubicación, disponibilidad y obras sociales aceptadas.

- Gestión de Turnos:  
  Reserva citas, visualiza el historial y recibe notificaciones de recordatorios. Los turnos expiran automáticamente a los 60 días (usando TTL Index en MongoDB), a menos que sean archivados.

- Perfiles de Profesionales:  
  Cada profesional completa un perfil con información detallada, especialidades, ubicaciones y horarios de atención.

- Roles de Usuario:  
  - Paciente: Búsqueda y reserva de turnos.
  - Profesional: Gestión de agenda, turnos y perfiles.
  - (Futuro) Admin: Gestión y moderación de la plataforma.

---

## Tecnologías Utilizadas

- Frontend:  
  Next.js  
  TypeScript  
  Tailwind CSS

- Backend y Base de Datos:  
  MongoDB con Mongoose

- Autenticación:  
  NextAuth

---

## Instalación

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/guidopastorino/turnize.git
   cd turnize
   ```

2. Instalar dependencias:

   ```bash
   npm install
   # o usa:
   yarn install
   ```

3. Configurar variables de entorno:

   Crea un archivo `.env.local` en la raíz del proyecto y añade las siguientes variables:

   ```bash
   MONGODB_URI=tu_mongodb_connection_string
   NEXTAUTH_SECRET=tu_secret
   # Agrega otras variables necesarias según tu configuración
   ```

4. Ejecutar la aplicación en modo desarrollo:

   ```bash
   npm run dev
   # o:
   yarn dev
   ```

   La app estará disponible en [http://localhost:3000](http://localhost:3000).

---

## Uso y Funcionalidades

### Para Pacientes
- **Página de Búsqueda:**  
  Explora profesionales por especialidad, ubicación, disponibilidad y obra social.
- **Mis Turnos:**  
  Visualiza tus citas reservadas y su estado (futuras, pasadas).

### Para Profesionales
- **Dashboard / Turnos:**  
  Gestiona tu agenda y filtra turnos por estado (upcoming, archived, cancelled, completed).
- **Perfil Profesional:**  
  Edita tu información personal, especialidades, obras sociales aceptadas y horarios de disponibilidad.

---

## Contribuciones

Las contribuciones son bienvenidas. Si deseas colaborar, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu nueva funcionalidad o corrección:

   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```

3. Realiza tus cambios y commits.
4. Envía un Pull Request describiendo tus cambios.

---

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

---

## Contacto

Si tienes dudas o sugerencias, abre un issue o contacta a [turnizeapp@gmail.com](mailto:turnizeapp@gmail.com).