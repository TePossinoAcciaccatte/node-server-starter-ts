import { Request, Response } from 'express';
import Controller from './controller';

/**
* An example of a controller. This class is meant to define context-driven routes and the 
* method bound to each route.
* 
*/
class ExampleController extends Controller {
    
    /**
    * Builds parent properties and initializes the defined routes.
    * 
    * @constructor
    * @param path - The base path of the routes handled by this controller
    */
    constructor(path: string) {
        super(path);
        this.intializeRoutes();
    }

    /**
    * Init method called by constructor when a new instance of this class is created.
    * You define the routes handled by this controller here, using the parent attribute
    * router which is an Express router. The route is the concatenation of the base path 
    * defined when constructed this controller + the path you define. 
    *
    */
    private intializeRoutes() {
        this.router.get(`${this.path}/example1`, this.runExample);
        this.router.get(`${this.path}/example2`, this.runExample2);
    }

    /**
    * This is the actual method called when a GET request is performed against /examples/example1
    *
    * @param request - The Express Request object
    * @param response - The Express Response object
    * @returns GenericSuccessResponse object as JSON
    *
    */
    runExample = (request: Request, response: Response) => {
        return response.status(200).json(this.generateSuccessResponse('Success', { data: {name: 'Example'} } ));
    }

    /**
    * This is the actual method called when a GET request is performed against /examples/example2
    *
    * @param request - The Express Request object
    * @param response - The Express Response object
    * @returns GenericErrorResponse object as JSON
    *
    */
    runExample2 = (request: Request, response: Response) => {
        return response.status(500).json(this.generateErrorResponse('Internal Server Error', 'Your error message.' ));
    }
}

export default ExampleController;