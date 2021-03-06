const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  username: {
    type: String,
    required: true,
    max: 50,
  },
  website: {
    type: String,
  },
  country: {
    type: String,
  },
  languages: {
    type: [String],
    required: true,
  },
  portfolio: {
    type: String,
  },
  workrole: [
    {
      role: {
        type: String,
        required: true,
      },
      company: {
        type: String,
        required: true
      },
      country: {
        type: String,
      },
      from: {
        type: Date,
      },
      to: {
        type: Date,
      },
      current: {
        type: Boolean,
        default: false,
      },
      details: {
        type: String,
      },
    },
  ],
  education: [
    {
      school: {
        type: String,
        required: true,
      },
      degree: {
        type: String,
      },
      course: {
        type: String,
      },
      from: {
        type: Date,
      },
      to: {
        type: Date,
      },
      current: {
        type: Boolean,
        default: false,
      },
    },
  ],
  social: {
    youtube: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    facebook: {
      type: String,
    },
    instagram: {
      type: String,
    },
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model("myProfile", ProfileSchema);
