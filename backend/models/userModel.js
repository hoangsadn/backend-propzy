import mongoose from 'mongoose';
const prizeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    detail: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String, required: true, unique: true, index: true, dropDups: true,
  },
  phone: { type: String, required: true },
},{ timestamps: true });

const userModel = mongoose.model('User', userSchema);

export default userModel;
