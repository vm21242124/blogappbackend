import express from 'express';
import { Checkconnection } from './config/db.js'; 
import swaggerUiExpress from 'swagger-ui-express';

import userRoute from './src/routes/UserRoute.js'
import yaml from 'yamljs';
import authRoute from './src/routes/AuthRoute.js'
import blogRoute from './src/routes/BlogRoute.js'


const app=express();
app.use(express.json());

Checkconnection();

const swaggerdocs=yaml.load('./src/swagger/swagger.yaml');

app.use(
    "/api-docs",
    swaggerUiExpress.serve,
    swaggerUiExpress.setup(swaggerdocs)
);

app.listen(3000,()=>{
    console.log("listning on 3000");
})

app.use("/user",userRoute);
app.use("/auth",authRoute);
app.use("/blog",blogRoute);