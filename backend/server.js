import cors from 'cors/lib/index.js';
import config from './config.js';
import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRoute from './routes/userRoute.js';
import prizeRoute from './routes/prizeRoute.js';
import orderRoute from './routes/orderRoute.js';
import categoryRoute from './routes/categoryRoute.js';
//import sendMailRoute from './routes/sendmailRoute.js';


const mongodbUrl = config.MONGODB_URL;
mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('Connect database success')
  })
  .catch((error) => console.log(error.reason));

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/users', userRoute);
app.use('/api/prize', prizeRoute);
app.use('/api/orders', orderRoute);
app.use('/api/category', categoryRoute);
// app.use('/api/sendMail', sendMailRoute);

//app.use('/uploads', express.static(path.join(__dirname, '/../uploads')));
//app.use(express.static(path.join(__dirname, '/../frontend/build')));
// app.get('*', (req, res) => {
//   res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
// });

app.listen(config.PORT, () => {
  console.log(`Server started at http://localhost:${config.PORT}`);
});
