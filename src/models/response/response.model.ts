interface GenericResponse {
    status: string;
}

export class GenericErrorResponse implements GenericResponse {
    status: string;
    error: any;

    constructor(status: string, error: any) {
        this.status = status;
        this.error = error;
    }
}

export class GenericSuccessResponse implements GenericResponse {
    status: string;
    data: object;

    constructor(status: string, data: object) {
        this.status = status;
        this.data = data;
    }
}