//creo la instancia a mongoose
const mongoose = require('mongoose')
//definimos el esquema de las variedades de cafe
const VariedadSchema = new mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },
    descripcion:{
        type:String,
        required:true
    }
    },{
        timestamps:true,
        versionKey:false
    })

    //creamos el modelo basandonos en el esquema
    const Variedad=mongoose.model('Variedad',VariedadSchema)
    //exportamos el modelo
    module.exports=Variedad