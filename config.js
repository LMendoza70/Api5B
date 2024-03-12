const mongoose=require('mongoose')
const config=require('./confi')
const mongoUri=config.ruta
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