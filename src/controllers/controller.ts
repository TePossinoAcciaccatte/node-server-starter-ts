import * as express from 'express';
import {GenericErrorResponse, GenericSuccessResponse} from '../models/response/response.model';

/**
* A generic Controller class. Provides methods and attributes common to all child controllers.
* 
*/
class Controller {

    public path: string;
    public router = express.Router();

    /**
    * @constructor
    * @param path - The base path of the routes handled by this controller
    */
    constructor(path: string) {
        this.path = path;
    }

    /**
    * Returns an custom defined error response with a status and error data.
    *
    * @see GenericErrorResponse - The response object returned
    * @param status - HTTP Status string, like 'Internal Server Error'
    * @param error - Can be any data you want. A detailed error message, or an object containing more detailed data.
    * @returns response object as JSON
    *
    */
    public generateErrorResponse(status: string, error: any): GenericErrorResponse {
        const res = new GenericErrorResponse(status, error);
        console.log(JSON.stringify(res));
        return res;
    }

    /**
    * Returns an custom defined success response with a status and data.
    *
    * @see GenericSuccessResponse - The response object returned
    * @param status - HTTP Status string, like 'Success'
    * @param error - Can be any data you want.
    * @returns response object as JSON
    *
    */    
    public generateSuccessResponse(status: string, data: any): GenericSuccessResponse {
        const res = new GenericSuccessResponse(status, data);
        console.log(JSON.stringify(res));
        return res;
    }
}

export default Controller;