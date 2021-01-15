import { Request, Response } from 'express';
import Controller from './controller';

class ExampleController extends Controller {
    
    constructor(path: string) {
        super(path);
        this.intializeRoutes();
    }

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