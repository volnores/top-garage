import Contacts from '../pages/Contacts';
import Home from '../pages/Home';
import Service from '../pages/Service';
import { CONTACTS, HOME, SERVICE } from './routes';

export const publicRouter = [
  { path: HOME, element: Home },
  { path: CONTACTS, element: Contacts },
  { path: SERVICE, element: Service },
];
