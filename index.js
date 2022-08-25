console.clear();
import {createServer} from 'http'; // clases y metodos para manejar HTTP

const httpServer = createServer(
    (req, res) => {
        //console.log(req.method);  // Nos falta el metodo para indicar que quiere el cliente
        //console.log(req.url);  // Nos falta el path/ruta para identificar el recurso
        //console.log(req.headers); // Nos faltan las cabeceras
        //nos falta el body/payload
        let data = '';
        let chunkIndex = 0;
        req.on("data", (chunk) => {
            data += chunk;
            chunkIndex++;
            console.log(chunkIndex)
        });
         

        req.on('end', () =>{
            console.log(data); 
            res.end("Ya te recibi pesao")

        });
    }
); //creamos el servidor

httpServer.listen(3520);

