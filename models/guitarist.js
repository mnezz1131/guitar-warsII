import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Guitarist = new Schema({
  rank: { type: Number, required: true, min: [1, "Please enter a nonzero number"] },
  name: { type: String, required: true, trim: true },
  bands: { type: String, required: true, trim: true },
  genre: { type: String, required: true, trim: true },
  solo: { type: String, required: true, trim: true },
  imgUrl: { type: String, required: true, trim: true },
},
  { timestamps: true }
);

export default mongoose.model('guitarists', Guitarist)