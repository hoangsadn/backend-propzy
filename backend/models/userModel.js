import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String, required: true, unique: true, index: true, dropDups: true,
  },
  phone: { type: String, required: true },
  turn: { type: Number }
}, { timestamps: true });

const userModel = mongoose.model('User', userSchema);

export default userModel;
