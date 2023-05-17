 //? Configuracion

 //? Para que algunas variables sean creadas por la persona encargada de la bd 
 import dotenv from 'dotenv';
 dotenv.config();
 
 export default {
    port: process.env.PORT,
    databaseUrl: process.env.DATABASE_URL    // Accede a la variable que escuha todo lo que pasa con 
 }

 
