import mongoose from 'mongoose'

const certificationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    issuer: {
        type: String,
        required: true,
        trim: true
    },
    issueDate: {
        type: Date,
        required: true
    },
    credentialUrl: {
        type: String,
        trim: true
    },
    order: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
})

const Certification = mongoose.model('Certification', certificationSchema)

export default Certification
