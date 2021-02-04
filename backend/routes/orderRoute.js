import express from 'express';
import Order from '../models/orderModel.js';

const router = express.Router();

router.post('/', async (req, res) => {
  console.log(req.body);
  const order = new Order({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    price: req.body.price,
    demand: req.body.demand
  });

  const newOrder = await order.save();
  if (newOrder) {
    res.send({
      _id: newOrder.id,
      name: newOrder.name,
      email: newOrder.email,
      //isAdmin: newUser.isAdmin,
      //token: getToken(newUser),
    });
  } else {
    res.status(200).send({ message: 'Invalid User Data.' });
  }
});


// router.post("/", isAuth, async (req, res) => {
//   const newOrder = new Order({
//     orderItems: req.body.orderItems,
//     user: req.user._id,
//     shipping: req.body.shipping,
//     payment: req.body.payment,
//     itemsPrice: req.body.itemsPrice,
//     taxPrice: req.body.taxPrice,
//     shippingPrice: req.body.shippingPrice,
//     totalPrice: req.body.totalPrice,
//   });
//   const newOrderCreated = await newOrder.save();
//   res.status(201).send({ message: "New Order Created", data: newOrderCreated });
// });


export default router;