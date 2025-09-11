import mongoose from 'mongoose';

const topMenuBarSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    contact: { type: String, required: true }
})


export default mongoose.model('TopMenuBar', topMenuBarSchema);