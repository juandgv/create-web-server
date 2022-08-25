console.clear();
import {createServer} from 'http'; // clases y metodos para manejar HTTP

const httpServer = createServer(
    (req, res) => {
        console.log('peticion recibida!')
        res.end("Ya te recibi PESAO")
        
    }
); //creamos el servidor

httpServer.listen(3520);

