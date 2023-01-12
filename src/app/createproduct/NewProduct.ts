export class NewProduct{
    name:string="";
    quantity:number=0;
    type:string="";
    factoryid:number=0;
    filename:string="";
    file:string;

    constructor(name:string,quantity:number,type:string,factoryid:number,filename:string,file:string){
        this.name=name;
        this.quantity=quantity;
        this.type=type;
        this.factoryid=factoryid;
        this.filename=filename;
        this.file=file;
    }
}