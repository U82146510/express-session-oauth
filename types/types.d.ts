import { IUser } from "../model/User";

declare global {
  namespace Express {
    interface User extends IUser {}
    interface Request {
      user?: User; 
    }
  }
}
