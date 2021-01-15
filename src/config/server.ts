import App from './app';
import ExampleController from '../controllers/example.controller';
 
const app = new App(
  [
    new ExampleController('/examples')
  ],
  parseInt(`${process.env.PORT}`, 10) || 3000
);
 
app.listen();