import mongoose from 'mongoose';


const categorySchema = new mongoose.Schema({
  category: { type: String, required: true },
  quantity: { type: Number, required: true },
  rate: { type: Number, required: true },
}
);

const categoryModel = mongoose.model('category', categorySchema);

export default categoryModel;
