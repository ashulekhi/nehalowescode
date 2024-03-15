const mongoose = require('mongoose');

const mobileSchema = new mongoose.Schema({
  mobileId: {
    type: mongoose.Schema.Types.ObjectId,
    default: new mongoose.Types.ObjectId // Generate a unique ObjectId by default
  },
  brand: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  screenSize: {
    type: Number,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  releaseDate: {
    type: Date,
    required: true
  },
  features: [String],
  cameraResolution: {
    type: Number,
    required: true
  },
  batteryCapacity: {
    type: Number,
    required: true
  },
  operatingSystem: {
    type: String,
    required: true
  },
  processor: {
    type: String,
    required: true
  },
  memory: {
    type: String,
    enum: ['8GB', '6GB', '4GB', '16GB'],
    required: true
  },
  storage: {
    type: String,
    enum: ['64GB', '128GB', '256GB', '512GB', '1TB'],
    required: true
  },
  dimensions: {
    type: {
      length: {
        type: Number,
        required: true
      },
      width: {
        type: Number,
        required: true
      },
      height: {
        type: Number,
        required: true
      }
    },
    required: true
  },
  image: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Mobile = mongoose.model('Mobile', mobileSchema);

module.exports = Mobile;
