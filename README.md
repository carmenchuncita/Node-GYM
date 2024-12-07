# Node-GYM
Node-GYM
1. To start the project we must previously install:
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

2. npm run dev

3. User example to test login: 
    {
        "name":"userTest2",
        "email": "test2@gmail.com",
        "password": "test2",
        "birth":"1980-01-01",
        "role":"admin"
    }
    devolverá algo asi: 
   {
    "message": "Inicio de sesión exitoso",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjc1NDg2OWFmMTk1Mjk3MzY5NjFmZDA5IiwidXNlcl9lbWFpbCI6InRlc3QyQGdtYWlsLmNvbSIsImlhdCI6MTczMzU5MjgwOH0.vTGewbWecknQ_vT-4y07GEAeBnv9FamtxxyYMCPakWA",
    "user": {
        "id": "6754869af19529736961fd09",
        "email": "test2@gmail.com",
        "name": "userTest2"
    }
   }

    y despues tienes que usar ese token en los headers de thunder cliebt:

    Authorization   Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjc1NDg2OWFmMTk1Mjk3MzY5NjFmZDA5IiwidXNlcl9lbWFpbCI6InRlc3QyQGdtYWlsLmNvbSIsImlhdCI6MTczMzU5MjgwOH0.vTGewbWecknQ_vT-4y07GEAeBnv9FamtxxyYMCPakWA

    en el GET de http://localhost:3501/api/users/profile y devolverá alg así : 

   {
    "user": {
        "name": "userTest2",
        "email": "test2@gmail.com",
        "id": "6754869af19529736961fd09"
        }
    }

    4. Para crear,editar o borrar eventos tienes que ser admin y logearte con autenticacion, para ello volveremos a usar el usuario test2 del que ya tenemos el token.
    En la ruta http://localhost:3501/api/sports/createEvent con metodo POST, aplica en los headers la autenticacion :


    Authorization   Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjc1NDg2OWFmMTk1Mjk3MzY5NjFmZDA5IiwidXNlcl9lbWFpbCI6InRlc3QyQGdtYWlsLmNvbSIsImlhdCI6MTczMzU5MjgwOH0.vTGewbWecknQ_vT-4y07GEAeBnv9FamtxxyYMCPakWA

    Despues ve al body para crear el evento, ten en cuenta que el type y el location están restringidos a valores concretos especificados en el modelo :
    {
    "name": "Cardio Workout",
    "description": "High-intensity cardio",
    "date": "2024-12-10T09:00:00.000Z",
    "location": "room 1",
    "type": "cardio"
    }
    