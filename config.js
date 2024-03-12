const mongoose=require('mongoose')
const mongoUri='mongodb+srv://LMendoza:luismendoza@catando.yafsmbr.mongodb.net/Catando2024?retryWrites=true&w=majority&appName=Catando'

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