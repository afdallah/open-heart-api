const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')
const { Schema } = mongoose

const noteSchema = new Schema(
  {
    title: {
      type: String,
      trim: true
    },
    content: {
      type: String
    },
    mood: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
      default: 3
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    location: {
      type: String,
      required: false
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)

noteSchema.plugin(mongoosePaginate)


module.exports = mongoose.model('Note', noteSchema)
