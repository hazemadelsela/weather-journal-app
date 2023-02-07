const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');

const app = express();

projectData ={}

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors())
app.use(express.static('./website'))
 

let prot = 8000;
app.listen(prot,()=>{console.log(`server is ${prot}`);})

app.post('/addweater',(req,res)=>{
    projectData.date = req.body.DateNew
    ,
        projectData.date = req.body.DateNew
        , projectData.temp = req.body.temp
        , projectData.feelings = req.body.feelings
        , projectData.cuntry = req.body.cuntry

,res.end()
})

app.get('/getweather',(req,res)=>{
    res.send(projectData)
})
