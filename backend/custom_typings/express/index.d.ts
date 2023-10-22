// custom_typings/express/index.d.ts
declare namespace Express {
  // Extend the Request interface with your own properties
  interface Request {
    userID: any;
    rootUser: any;
    token: any;
  }
}
