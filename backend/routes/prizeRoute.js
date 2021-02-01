import express from 'express';
import Prize from '../models/prizeModel.js';
import { isAuth, isAdmin } from '../util.js';

const router = express.Router();

router.get('/type1', async (req, res) => {

  const prize = await Prize.find({ $or: [{ 'category': 'VN Moving' }, { 'category': 'HomeAZ' }, { 'category': 'Godee' }], available: true });
  if (prize)
    res.send(prize)
  else
    res.status(404).send({ message: 'Prize Not Found.' });

});

router.get('/type2', async (req, res) => {
  const prize = await Prize.find({ available: true });
  if (prize)
    res.send(prize)
  else
    res.status(404).send({ message: 'Prize Not Found.' });
});

router.get('/getUser/:user', async (req, res) => {
  const ownerId = req.params.user;
  if (ownerId) {
    const prize = await Prize.find({ owner: ownerId });
    if (prize)
      res.send(prize)
  }
  else
    res.status(404).send({ message: 'Prize Not Found.' });
});


router.post('/reg', async (req, res) => {
  console.log(req.body);
  const user = new Prize({
    name: req.body.name,
    category: req.body.category,
    area: req.body.area,
    voucher: req.body.voucher,
    image: req.body.image,
    owner: "1",
    detail: "1",

  });
  const newUser = await user.save();
  if (newUser) {
    res.send({
      _id: newUser.id,
      name: newUser.name,

      //isAdmin: newUser.isAdmin,
      //token: getToken(newUser),
    });
  } else {
    res.status(401).send({ message: 'Invalid User Data.' });
  }
});

router.put('/update/:id', async (req, res) => {
  const category = req.params.id;
  const prizes = await Prize.find({ category });

  let newPrizes = prizes.filter(prize => prize.available);

  let newPrize = newPrizes[0]

  if (newPrize) {
    let prizeUpdate = await Prize.findOneAndUpdate({ name: newPrize.name }, { owner: req.body.owner, available: false }, { new: true });

    if (prizeUpdate) {
      return res
        .status(200)
        .send({ message: 'Prize Updated', data: prizeUpdate });
    }
  }
  return res.status(500).send({ message: ' Error in Updating.' });
});

// router.delete('/:id', async (req, res) => {
//   const deletedProduct = await Product.findById(req.params.id);
//   if (deletedProduct) {
//     await deletedProduct.remove();
//     res.send({ message: 'Product Deleted' });
//   } else {
//     res.send('Error in Deletion.');
//   }
// });


export default router;
