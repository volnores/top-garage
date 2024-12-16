import About from '../pages/About';
import Blog from '../pages/Blog';
import Contacts from '../pages/Contacts';
import Home from '../pages/Home';
import Service from '../pages/Service';
import Stocks from '../pages/Stocks';

import { ABOUT, BLOG, CONTACTS, HOME, SERVICE, STOCKS } from './routes';

export const publicRouter = [
  { path: HOME, element: Home },
  { path: CONTACTS, element: Contacts },
  { path: SERVICE, element: Service },
  { path: ABOUT, element: About },
  { path: STOCKS, element: Stocks },
  { path: BLOG, element: Blog },
];
