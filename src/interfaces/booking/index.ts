import { UserInterface } from 'interfaces/user';
import { PropertyInterface } from 'interfaces/property';
import { GetQueryInterface } from 'interfaces';

export interface BookingInterface {
  id?: string;
  user_id?: string;
  property_id?: string;
  start_date: any;
  end_date: any;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  property?: PropertyInterface;
  _count?: {};
}

export interface BookingGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  property_id?: string;
}
