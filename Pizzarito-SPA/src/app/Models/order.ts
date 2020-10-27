import { MenuItem} from "./menuItem";
import { Pizza } from "./pizza";
export class Order{

id:number;
userId:number;
totalBill:number;
isCash:boolean;
desserts:MenuItem[];
drinks:MenuItem[];
starters:MenuItem[];
pizzas:Pizza[];
currentPizza:Pizza;
items:number;


}