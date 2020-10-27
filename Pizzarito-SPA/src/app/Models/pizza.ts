import { MenuItem } from "./menuItem";

export class Pizza{
id:number;
size:MenuItem;
extras:MenuItem[];
totalBill:number;

constructor(size:MenuItem) {

    this.size=size;
    this.totalBill=0;
}



}