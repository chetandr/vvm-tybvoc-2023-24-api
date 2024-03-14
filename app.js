import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import indexRouter from './routes/index.js';
import usersRouter from "./routes/users/routes.js";
import customerRouter from "./routes/customers/routes.js";

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/customers', customerRouter);

export default app;
