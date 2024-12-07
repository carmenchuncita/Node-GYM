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
        "name":"userTest"
        "email": "test@gmail.com",
        "password": "test",
        "birth":"1980-01-01",
        "role":"client"
    }
    devolverá algo asi: 
    {
        "message": "Inicio de sesión exitoso",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjc1NDc5NTg5Y2FiNTEzNWJlY2U3MWI2IiwidXNlcl9lbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNzMzNTg5OTg1fQ.3EBy3ff1YFwxsQ5JexLPRJ--cFOSC9I8b6zZ5GPRlMI",
        "user": {
            "id": "675479589cab5135bece71b6",
            "email": "test@gmail.com",
            "name": "userTest"
        }
    }

    y despues tienes que usar ese token en los headers en el GET de http://localhost:3501/api/users/profile y devolverá alg así : 
    {
        "user": {
            "name": "userTest",
            "email": "test@gmail.com",
            "id": "675479589cab5135bece71b6"
        }
    }
    