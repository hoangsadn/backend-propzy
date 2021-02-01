import mongoose from 'mongoose';


const prizeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  detail: { type: String, required: true },
  voucher: { type: String, required: true },
  image: { type: String, required: true },
  quantity: { type: Number, default: 0, required: true },
  area: { type: String, required: true },
  available: {type: Boolean,default:true,required:true},
  owner: {type: String,required:true}
},{ timestamps: true }
);

const prizeModel = mongoose.model('Prize', prizeSchema);

export default prizeModel;
