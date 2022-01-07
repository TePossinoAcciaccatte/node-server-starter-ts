import express from 'express';
import Controller from '../controllers/controller';

/**
* Defines our Express application and provides method to configure and run the app.
* 
*/
class App {

  public app: express.Application;
  public port: number;
   
  /**
  * Takes care of server configuraiton before starting listening for requests.
  * 
  * @see Controller
  * @constructor
  * @param controllers - A list of child Controller classes to be exposed
  * @param port - Server port on which to listen for requests 
  */  
  constructor(controllers: Controller[], port: number) {
    this.app = express();
    this.port = port;
   
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }
   
  /**
  * Method called for basic server configuration such as body size limit for requests
  * or cors allowance and stuff like that.
  *
  */  
  private initializeMiddlewares() {
    this.app.use(express.json(({ limit: '75mb' })));
    this.app.use(express.urlencoded({extended : true}));
  }
   
  /**
  * Method called for initializing the controller. Each controller exposes its routes
  * using their router attribute.
  * 
  * @see express.Router
  * @param controllers - A list of child Controller classes to be exposed
  *
  */    
  private initializeControllers(controllers: Controller[]) {
    controllers.forEach((controller: Controller) => {
      this.app.use('/', controller.router);
    });
  }
   
  /**
  * Spins the server up and listening for incoming requests on the defined port.
  *
  */    
  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}
   
export default App;