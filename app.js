import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import indexRouter from './routes/index.js';
import usersRouter from "./routes/users/routes.js";
import customerRouter from "./routes/customers/routes.js";
import employeeRouter from "./routes/employee/routes.js";
import DeliveryPersonRouter from './routes/deliveryPerson/deliveryPerson.js';
import MerchantRouter from './routes/merchant/routes.js';
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/customers', customerRouter);
app.use('/employee', employeeRouter);
app.use('/deliveryPerson',DeliveryPersonRouter);
app.use('/merchant',MerchantRouter);

export default app;
