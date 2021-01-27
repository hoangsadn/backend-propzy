import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String, required: true, dropDups: true,
  },
  phone: { type: String, required: true },
  price: {type:String, required:true}
});

const orderModel = mongoose.model('Order', orderSchema);

export default orderModel;
