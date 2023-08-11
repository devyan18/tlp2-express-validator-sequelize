import { checkSchema } from 'express-validator';
import { model, Schema } from 'mongoose';
import bcrypt from 'bcrypt';

const UserShema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
}, { timestamps: true });

UserShema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  const hashedPassword = await bcrypt.hash(this.password, 10);
  this.password = hashedPassword;

  next();
});

export const UserModel = model('User', UserShema);

export const createUserSchema = checkSchema({
  email: {
    errorMessage: 'Invalid email',
    isEmail: true
  },
  password: {
    isLength: {
      options: { min: 8 },
      errorMessage: 'Password should be at least 8 chars'
    }
  }
});
