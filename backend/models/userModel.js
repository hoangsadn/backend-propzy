import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String, required: true, unique: true, index: true, dropDups: true,
  },
  phone: { type: Number, required: true },
  turn: { type: Number },
  likefb: { type: Boolean },
  sharefb: { type: Boolean },
  subytb: { type: Boolean },
  subzalo: { type: Boolean },
  invitelink: { type: String },
  sharefriend: { type: Number },
  inviteby: { type: String },
  notifications: { type: Array, default: [] }

}, { timestamps: true });

const userModel = mongoose.model('User', userSchema);

export default userModel;
