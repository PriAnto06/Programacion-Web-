import e from 'express';
import express from 'express'

const app = express();
const PORT = 3000

app.use(express.json());

//GET
app.get('/',(req, res)=>{
    res.send('Este es el primer endpoint hecho con express ')
});

//endpoints como parametros

app.get('/api/user/:id',(req,res)=>{
    //destructuracion
   const {id} = req.params;
   if(typeof id === "string"){
       const idInt = parseInt(id);//parseInt convierte de string a entero
       console.log(idInt);
    }
    res.json({message:`este es el id dado ${id}`});
    });
//query params
app.get('/api/search',(req,res)=>{
    const {name,lastname} = req.query
    res.json({
         Name : name,//renombramos
        lastname,//reutilizamos
        });
        //http:/localhost:3000/api/search?name=Pri&lastname=Della Torre
})

//POST
app.post('/api/user',(req,res)=>{
    const {name,email} = req.body
    res.json({message: "usuario encontrado",data:{name,email}});
});

//Test post
//update 
app.put('/api/user/:id', (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    res.json({
        message: "Usuario actualizado correctamente",
        data: { id, name, email }
    });
});

//delete
app.delete('/api/user/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        message: "Usuario eliminado correctamente",
        delete: id
    });
});
//2 puntos

//iniciar Server
app.listen(PORT,()=>{
    console.log(`el servidor corriendo en ${PORT}`);
});

