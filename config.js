const mongoose=require('mongoose')
require('dotenv').config()

const mongoUri= process.env.ruta 
async function Conectar(){
    mongoose.set('strictQuery',true)
    try{
        await mongoose.connect(mongoUri)
        console.log('Conectado a la base de datos catando2024')
    }catch(error){
        console.log('Error al conectar a la base de datos')
    }
}
Conectar()