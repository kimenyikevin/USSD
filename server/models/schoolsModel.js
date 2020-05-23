import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schoolsSchema = new Schema({
    title: { type: 'String', required: true },
    slug: { type: 'String', required: true },
    dateAdded: { type: 'Date', default: Date.now, required: true },
});

let Schools = mongoose.model('Schools', schoolsSchema);

export default Schools;