import express from 'express';
import User from '../models/userModel';
import { getToken, isAuth } from '../util';

const router = express.Router();

router.get('/:email', async (req, res) => {
  const { email = '' } = req.params;
  const users = await User.find({ email });

  const user = users[0];

  if (user) {
    res.send({
      _id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      turn: user.turn
    });
  } else {
    res.send({ message: 'User Not Found' });
  }
});

router.put('/:email', async (req, res) => {
  const { email = '' } = req.params;
  const { turn = '' } = req.body;

  let userUpdate = await User.findOneAndUpdate({ email }, { turn: turn - 1 })

  if (userUpdate) {
    res.send({ ...userUpdate })
  } else {
    res.send({
      message: "Can't not update"
    })
  }
})

router.post('/register', async (req, res) => {
  console.log(req.body);
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    turn: 2,
  });

  const newUser = await user.save();
  if (newUser) {
    res.send({
      _id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      phone: newUser.phone,
    });
  } else {
    res.send({ message: 'Invalid User Data.' });
  }
});

export default router;
