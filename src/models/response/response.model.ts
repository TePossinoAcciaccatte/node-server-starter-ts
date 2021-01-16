/**
* Interface of a generic response. Each response has at least a staus.
* 
*/
interface GenericResponse {
    /** HTTP Status string */
    status: string;
}

/**
* A custom error response. Has a status and an error object.
* 
*/
export class GenericErrorResponse implements GenericResponse {
    status: string;
    error: any;

    /**
    * @constructor
    * @param status - Interface attribute 
    * @param error - An error object with detailed info
    */    
    constructor(status: string, error: any) {
        this.status = status;
        this.error = error;
    }
}

/**
* A custom success response. Has a status and data object.
* 
*/
export class GenericSuccessResponse implements GenericResponse {
    status: string;
    data: object;

    /**
    * @constructor
    * @param status - Interface attribute 
    * @param data - Data object to return to client 
    */       
    constructor(status: string, data: object) {
        this.status = status;
        this.data = data;
    }
}