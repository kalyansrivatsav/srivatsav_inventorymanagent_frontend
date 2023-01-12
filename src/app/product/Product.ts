export class Product{
    id:number=0;
    name:string="";
    quantity:number=0;
    type:string="";
    factoryid:number=0;
    filename:string="";

    constructor(id:number,name:string,quantity:number,type:string,factoryid:number,filename:string){
        this.id=id;
        this.name=name;
        this.quantity=quantity;
        this.type=type;
        this.factoryid=factoryid;
        this.filename=filename;
    }
}