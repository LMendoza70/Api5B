//creamos la instancia de express
const express=require('express');
require('./config');
//inicializamos a express en la variable app
const app = express();
//creamos el router de nuestra api
const router=express.Router();
//importamos los modelos
const Variedad=require('./Modelos/Variedad')

//definimos nuestros middlewares
app.use(express.json());
app.use(router);

//configuramos el puertp de nuestra api
const port=3000;
app.listen(port,()=>{
    console.log('API corriendo en el puerto 3000')
})

//////////////////////////////////////////////////////////////////////////////
////////////////////// RUTAS DE NUESTRA API /////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
router.get('/',(req,res)=>{
    res.send('API funcionando correctamente')
})  
router.get('/ejemplo',(req,res)=>{
    res.send('Ejemplo de ruta')
})
//ruta para obtener todas las variedades de cafe
router.get('/variedades',async (req,res)=>{
    const variedades=await Variedad.find()
    res.send(variedades)
})
//ruta para insertar un registro de variedad de cafe
router.post('/variedades', async (req,res)=>{
    const body=req.body;
    const respuesta=await Variedad.create(body)
    res.send(respuesta)
})
//ruta para consultar una variedad de cafe por su id
router.get('/variedades/:id',async (req,res)=>{
    const id=req.params.id
    const variedad=await Variedad.findById(id)
    res.send(variedad)
})