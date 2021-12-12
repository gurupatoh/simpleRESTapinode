const res = require('express/lib/response');

const express = require('express');
const app = express();
const PORT = 8080;
// middleware -parse json btw the req and res 
app.use(express.json())
app.listen(PORT, ()=>console.log('its alive on http://localhost:${PORT}')
)
// get endpoint    // callback function 
app.get('/tshirt', (req,res) =>{ // req(reques) -incoming data 
    // res(response)-outgoing data
    
    res.status(200).send({ 
        tshirt: 'red',
        size:'small'
    })
})

app.post('/tshirt/:id',(req,res)=>
{  // route parameters // capture dynamic  values in the URL
    const {id} =req.params;
    const {logo}=req.body;
    if(!logo){
        res.status(418).send({message:'we need a logo!'})
    }
       res.send({
           tshirt:`red with your ${logo} and ID of ${id}` ,
       })

}); 






