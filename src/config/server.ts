import App from './app';
import ExampleController from '../controllers/example.controller';
 
/**
* Creates a new Application, provides the controllers in order to expose their routes and
* the server port to listen on. Then runs the app.
*
* @see App 
*/
const app = new App(
  [
    new ExampleController('/examples')
  ],
  parseInt(`${process.env.PORT}`, 10) || 3000
);
 
app.listen();