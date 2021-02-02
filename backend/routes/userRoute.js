import express from 'express';
import User from '../models/userModel.js';
import { getToken, isAuth } from '../util.js';
import randomstring from 'randomstring';

const router = express.Router();

router.get('/:email', async (req, res) => {
	try {
		const { email = '' } = req.params;
		const users = await User.find({ email });

		const user = users[0];

		if (user) {
			res.send({
				_id: user.id,
				name: user.name,
				email: user.email,
				phone: user.phone,
				turn: user.turn,
				invitelink: user.invitelink,
				notifications: user.notifications,
				sharefriend: user.sharefriend,

			});
		} else {
			res.send({ message: 'User Not Found' });
		}
	} catch (error) {
		res.send({ error })
	}
});

router.put('/:email', async (req, res) => {
	const { email = '' } = req.params;
	const { turn = '' } = req.body;

	let userUpdate = await User.findOneAndUpdate({ email }, { turn: turn - 1 }, {
		new: true
	})
	if (userUpdate) {
		res.send(userUpdate)
	} else {
		res.send({
			message: "Can't not update"
		})
	}
})

router.put('/updateMission/:mission', async (req, res) => {
	const { mission = '' } = req.params;
	let userUpdate = await User.findOne({ email: req.body.email })
	switch (mission) {
		case 'like-face':
			if (!userUpdate.likefb) {
				userUpdate.likefb = true;
				userUpdate.turn = userUpdate.turn + 1;
			}


			break;
		case 'share':
			if (!userUpdate.sharefb) {
				userUpdate.sharefb = true;
				userUpdate.turn = userUpdate.turn + 1;
			}


			break;
		case 'subcribe-youtube':
			if (!userUpdate.subytb) {
				userUpdate.subytb = true;
				userUpdate.turn = userUpdate.turn + 1;
			}


			break;
		case 'follow-zalo':
			if (!userUpdate.subzalo) {
				userUpdate.subzalo = true;
				userUpdate.turn = userUpdate.turn + 1;
			}


			break;
	}

	const newUser = await userUpdate.save();

	if (newUser) {
		res.send(newUser)
	} else {
		res.send({
			message: "Can't not update"
		})
	}
})

router.post('/notification', async (req, res) => {
	const { userEmail = '', notification = {} } = req.body;

	const user = await User.findOne({ email: userEmail })
	let notifications = [...user.notifications]
	notifications.push(notification)

	user.notifications = notifications;

	const newUser = await user.save();

	if (newUser) {
		res.send(newUser)
	} else {
		res.send({
			message: "Can't create notification"
		})
	}
})

router.post('/register', async (req, res) => {
	try {
		const user = new User({
			name: req.body.name,
			email: req.body.email,
			phone: req.body.phone,
			turn: 3,
			subytb: false,
			subzalo: false,
			//inviteby: '',
			sharefriend: 0,
			notifications: req.body.notifications,
			sharefb: false,
			likefb: false,
			invitelink: randomstring.generate(12),
		});
		const checkUser = await User.find({ email: user.email });

		if (checkUser.length > 0) {
			res.status(200).send({ message: 'Email is already registered.' });
		} else {
			if (req.body.invitelink !== '') {
				let userUpdate = await User.findOne({ invitelink: req.body.invitelink });
				let userUpdateNotifications = [...userUpdate.notifications]
				req.body.userUpdateNotification && userUpdateNotifications.push(req.body.userUpdateNotification)

				if (userUpdate) {
					if (userUpdate.sharefriend <= 10) {
						userUpdate.sharefriend = userUpdate.sharefb + 1
						userUpdate.turn = userUpdate.turn + 1
						userUpdate.notifications = userUpdateNotifications

						const updatedUser = await userUpdate.save();
						user.inviteby = userUpdate.email;
					}
				}
			}
			const newUser = await user.save();
			if (newUser) {
				res.send({
					_id: newUser.id,
					name: newUser.name,
					email: newUser.email,
					phone: newUser.phone,
					turn: 2,
					invitelink: newUser.invitelink,
					subytb: newUser.subytb,
					subzalo: newUser.subzalo,
					//inviteby: '',
					sharefriend: 0,
					sharefb: newUser.sharefb,
					notifications: newUser.notifications,
					likefb: newUser.likefb,
				});
			} else {
				res.send({ message: 'Invalid User Data.' });
			}
		}
	} catch (error) {
		res.send({ error })
	}
});

export default router;
