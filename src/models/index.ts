export class ApiResponseModel{
    constructor(){
        this.statusCode=200;
        this.statusText = 'Ok';
    }
    data:any;
    message:string;
    statusCode:number;
    statusText:string;
}
