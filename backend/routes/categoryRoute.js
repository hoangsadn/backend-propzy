import express from 'express';
import Category from '../models/categoryModel';
import { isAuth, isAdmin } from '../util';

const router = express.Router();

router.post('/post', async (req, res) => {
  console.log(req.body);
  const order = new Category({
    category: req.body.category,
    quantity: req.body.quantity,
    rate: req.body.rate,
  });
  const newOrder = await order.save();
  if (newOrder) {
    res.send({
      _id: newOrder.id,
      category: newOrder.category,
      quantity: newOrder.quantity,
      //isAdmin: newUser.isAdmin,
      //token: getToken(newUser),
    });
  } else {
    res.status(401).send({ message: 'Invalid User Data.' });
  }
});
router.get('/', async (req, res) => {
    const category = await Category.find();
    if (category)
      res.send(category)
  
  else  
     res.status(404).send({ message: 'Prize Not Found.' });
});


router.put('/update/:cate', async (req, res) => {
  const cateId = req.params.cate;
  const cate = await Category.find({category:cateId});
  if (cate) {
    cate.quantity = req.body.quantity;

    const newOrder = await cate.save();
    {
      return res
        .status(200)
        .send({ message: 'cate Updated', data: cate });
    }
  }
  return res.status(500).send({ message: ' Error in Updating.' });
});

export default router;