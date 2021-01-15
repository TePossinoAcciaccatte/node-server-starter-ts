import * as express from 'express';
import {GenericErrorResponse, GenericSuccessResponse} from '../models/response/response.model';

class Controller {
    public path: string;
    public router = express.Router();

    constructor(path: string) {
        this.path = path;
    }

    public generateErrorResponse(status: string, error: any) {
        const res = new GenericErrorResponse(status, error);
        console.log(JSON.stringify(res));
        return res;
    }

    public generateSuccessResponse(status: string, data: any) {
        const res = new GenericSuccessResponse(status, data);
        console.log(JSON.stringify(res));
        return res;
    }
}

export default Controller;