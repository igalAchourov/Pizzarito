import { Address } from './address';
import { Order } from './order';

export interface User {
  id: number;
  userName: string;
  fullName: string;
  email: string;
  address: Address;
  orders?: Order[];
}
