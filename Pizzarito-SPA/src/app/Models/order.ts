import { MenuItem} from "./menuItem";
import { Pizza } from "./pizza";
export interface Order{

id:number;
userId:number;
totalBill:number;
isCash:boolean;
desserts:MenuItem[];
drinks:MenuItem[];
starters:MenuItem[];
pizzas:Pizza[];



}