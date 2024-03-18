import express from 'express';
import adminRouter from './routers/admin.js'

export const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(adminRouter);

