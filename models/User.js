import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
    avatar: {
      type: String,
      default: 'https://res.cloudinary.com/dps8xubee/image/upload/v1640363103/ai_zm95jn.webp'
  }
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;