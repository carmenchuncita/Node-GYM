# Node-GYM

Node-GYM es un proyecto basado en Node.js que permite gestionar usuarios y eventos deportivos a través de una API REST.

---

## Instalación

Para iniciar el proyecto, sigue estos pasos:

### 1. Instalar las dependencias

Ejecuta los siguientes comandos para instalar todas las dependencias necesarias:

```bash
- npm install
- npm install nodemon --save-dev
- npm install express
- npm install dotenv
- npm install bcryptjs
- npm install jsonwebtoken
- npm install mongoose
- npm install multer
- npm install cloudinary
- npm install multer-storage-cloudinary
```

## 2. Arranca el proyecto :

```bash
npm run dev
```
## 3. Ejemplo de Usuario para Pruebas de Login :
Puedes usar el siguiente usuario para probar el inicio de sesión:
```bash
{
  "name": "userTest2",
  "email": "test2@gmail.com",
  "password": "test2",
  "birth": "1980-01-01",
  "role": "admin"
}
```
Al iniciar sesión con este usuario, deberías recibir una respuesta similar a la siguiente:
```bash
{
  "message": "Inicio de sesión con éxito",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "6754869af19529736961fd09",
    "email": "test2@gmail.com",
    "name": "userTest2"
  }
}
```
## 4. Uso del Token en Thunder Client :
Una vez obtenido el token, inclúyelo en los headers de tus solicitudes:

Header:
```bash
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjc1NDg2OWFmMTk1Mjk3MzY5NjFmZDA5IiwidXNlcl9lbWFpbCI6InRlc3QyQGdtYWlsLmNvbSIsImlhdCI6MTczMzU5MjgwOH0.vTGewbWecknQ_vT-4y07GEAeBnv9FamtxxyYMCPakWA
```
 **Obtener Perfil del Usuario Autenticado**
 - URL: http://localhost:3501/api/users/profile
 - Método: GET
La respuesta debería ser algo similar a esto:
```bash
{
  "user": {
    "name": "userTest2",
    "email": "test2@gmail.com",
    "id": "6754869af19529736961fd09"
  }
}
```
## 5. Gestión de Eventos Deportivos:
**Requisitos**
Para crear, editar o eliminar eventos, debes:

- Ser un usuario con rol **admin**.
- Estar autenticado con un token válido.

**Crear un Evento**
- URL : http://localhost:3501/api/sports/createEvent
- Método: POST

Incluye el token en los headers:
```bash
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjc1NDg2OWFmMTk1Mjk3MzY5NjFmZDA5IiwidXNlcl9lbWFpbCI6InRlc3QyQGdtYWlsLmNvbSIsImlhdCI6MTczMzU5MjgwOH0.vTGewbWecknQ_vT-4y07GEAeBnv9FamtxxyYMCPakWA
```

En el body, agrega los datos del evento. Ten en cuenta que **los campos location y type están restringidos a valores específicos**:

**Restricciones del Modelo de Eventos**
Al crear o editar un evento:

- location debe ser uno de los siguientes valores:
    - "room-1"
    - "room-2"
    - "room-3"
- type debe ser uno de los siguientes valores:
    - "cardio"
    - "flexibility"
    - "force"

```bash
{
    "name": "Cardio Workout",
    "description": "High-intensity cardio",
    "date": "2024-12-10T09:00:00.000Z",
    "location": "room-1",
    "type": "cardio"
}
```

**Editar un Evento**
- URL : http://localhost:3501/api/sports/updateEvent/<eventId>
- Método: PUT
- Ejemplo : http://localhost:3501/api/sports/updateEvent/6754b2407a19e3c556c19fb0

Incluye el token en los headers:
```bash
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjc1NDg2OWFmMTk1Mjk3MzY5NjFmZDA5IiwidXNlcl9lbWFpbCI6InRlc3QyQGdtYWlsLmNvbSIsImlhdCI6MTczMzU5MjgwOH0.vTGewbWecknQ_vT-4y07GEAeBnv9FamtxxyYMCPakWA
```

En el body, actualiza los datos del evento:

```bash
{
    "name": "Advanced Cardio Workout",
    "description": "A more challenging cardio session",
    "date": "2024-12-12T10:00:00.000Z",
    "location": "room-2",
    "type": "cardio"
}
```

**Eliminar un Evento**
- URL : http://localhost:3501/api/sports/deleteEvent/<eventId>
- Método: DELETE
- Ejemplo : http://localhost:3501/api/sports/deleteEvent/6754b2277a19e3c556c19fac

Incluye el token en los headers:
```bash
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjc1NDg2OWFmMTk1Mjk3MzY5NjFmZDA5IiwidXNlcl9lbWFpbCI6InRlc3QyQGdtYWlsLmNvbSIsImlhdCI6MTczMzU5MjgwOH0.vTGewbWecknQ_vT-4y07GEAeBnv9FamtxxyYMCPakWA
```
**Todos Eventos**
- URL : http://localhost:3501/api/sports/getAllEvents
- Método: GET

**Eventos byId**
- URL : http://localhost:3501/api/sports/getById/<_id>
- Método: GET
- Ejemplo : http://localhost:3501/api/sports/getById/6754b2277a19e3c556c19fac

**Próximos Eventos**
- URL : http://localhost:3501/api/sports/events/upcoming
- Método: GET
- Ejemplo : http://localhost:3501/api/sports/events/upcoming

**Eventos por tipo**
- URL : http://localhost:3501/api/sports/events?type=<typeEvent>
- Método: 
- Ejemplo: http://localhost:3501/api/sports/events?type=cardio

**Eventos por Fechas**
- URL : http://localhost:3501/api/sports/events/date?from=<fecha1>&to=<fecha2>
- Método: GET
- Ejemplo : http://localhost:3501/api/sports/events/date?from=2024-12-10&to=2024-12-20




