import { Schema, model, models } from 'mongoose';
import { MdEmail } from 'react-icons/md';

const propertySchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: [true, 'Property name is required'],
    },
    type: {
        type: String,
        required: [true, 'Property type is required'],
    },
    is_listed: {
        type: Boolean,
        default: false
    },
    is_featured: {
        type: Boolean,
        default: false
    },
    description: {
        type: String,
    },
    location: {
        street: String,
        city: String,
        state: String,
        zipcode: String
    },
    beds: {
        type: Number
    },
    rooms: {
        type: Number
    },
    baths: {
        type: Number
    },
    square_feet: {
        type: Number
    },
    amenities: {
        type: [String]
    },
    rates: {
        nightly: Number,
        weekly: Number,
        monthly: Number
    },
    seller_info: {
        email: String,
        name: String,
        phone: String
    },
    images: {
        type: [String]
    }


}, {
    timestamps: true
});

const Property = models.Property || model('Property', propertySchema);
export default Property