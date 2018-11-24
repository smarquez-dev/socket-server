import Server from './classes/server';
import router from './routes/routes';

// * Body Parser
import bodyParser from 'body-parser';

// * Cors
import cors from 'cors';

const server = new Server();

// * Body Parser configuration
server.app.use( bodyParser.urlencoded({ extended: true }) );
server.app.use( bodyParser.json() );

// * Cors configuration
server.app.use( cors({ origin: true, credentials: true }) );

// * Rutas de servicios
server.app.use('/', router);


server.start( () => {

    console.log(`Servidor corriendo en el puerto ${ server.port }`);
    

});