import mongoose from 'mongoose';

const CmsSchema = new mongoose.Schema({
    key: { type: String, required: true, unique: true },
    data: { type: mongoose.Schema.Types.Mixed, required: true },
});

// We check if the model exists before compiling it to avoid 
// an OverwriteModelError in Next.js development mode.
const Cms = mongoose.models.Cms || mongoose.model('Cms', CmsSchema);

export default Cms;
