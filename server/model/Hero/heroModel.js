import mongoose from "mongoose";
const heroSchema = new mongoose.Schema({
  image: { type: String, required: true },
  height: { type: String, required: true },
  width: { type: String, required: true },
  shadow: { type: Boolean, required: true },
  rounded: { type: Boolean, required: true },
  objectCover: { type: Boolean, required: true }
});
export default mongoose.model("Hero", heroSchema);