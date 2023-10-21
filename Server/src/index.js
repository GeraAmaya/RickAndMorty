const router = require ("./routes/index")
const express = require ('express')

const server = express ();
const PORT = 3001;

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

 server.use(express.json());
 server.use("/rickandmorty", router);

server.listen(PORT, () =>{
    console.log(`Server corriendo en el puerto ${PORT}`)

})




























///////////////////////////////////////////////////////////

/*
    web server 02

const http = require ("http");
const PORT = 3001;
const getCharById = require ('./controllers/getCharById')




http .createServer((req, res)=>{
        res.setHeader('Access-Control-Allow-Origin', '*');
    const {url} =req;

    if(url.includes("/rickandmorty/character")){
        const id = url.split ('/').pop()
        getCharById(res, id)
    }
  

    
}
)



.listen(PORT, () => {
    console.log(`servidor corriendo en puerto: ${PORT}`)
});
*/



//////////////////////////////////////////////


/*
    // con webServer 01
    if (url === "/"){
        res.writeHead(200,{"Content-Type":"text/plain"});
        return res.end("/rickandmorty/character/id:4");
    } 

    if (url.includes("/rickandmorty/character")){
        const id = Number(url.split("/").pop());
        const character = data.find(char => char.id === id)
        if (character){
        res.writeHead(200, {"Content-type": "application/json"});
        return res.end(JSON.stringify(character))
        }
    }

    res.writeHead(200, {"Content-Type": "text/plain"});
res.end(JSON.stringify(character));*/
