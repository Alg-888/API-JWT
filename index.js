import "dotenv/config"
import "./database/connectdb.js"
import express from 'express';
import authRouter from './routes/auth.route.js'
import beneficiarios from './routes/Beneficiarios.js'

app.use(beneficiarios)


const app = express();
app.use(express.json());

app.use("/api/v1", authRouter);

app.use(express.static("public"))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/beneficiarios', beneficiarioRoutes);


const PORT= process.env.PORT || 9000
app.listen(9000, ()=> console.log('Prendido  http://localhost:'+PORT+'/'));

