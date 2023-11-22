import { Schema, model } from 'mongoose';
import { TAddress, TFullName, TOrder, TUser } from './user.interface';

const fullName = new Schema<TFullName>({
  firstName: { type: String, required: [true, 'firstName is required'] },
  lastName: { type: String, required: [true, 'lastName is required'] },
});

const address = new Schema<TAddress>({
  street: { type: String, required: [true, 'street is required'] },
  city: { type: String, required: [true, 'city is required'] },
  country: { type: String, required: [true, 'country is required'] },
});

const order = new Schema<TOrder>({
  productName: String,
  price: Number,
  quantity: Number,
});

const userSchema = new Schema<TUser>({
  userId: {
    type: Number,
    required: [true, 'userId is required'],
  },
  username: {
    type: String,
    required: [true, 'username is required'],
    unique: true,
  },
  password: { type: String, required: [true, 'password is required'] },
  fullName: { type: fullName, required: [true, 'fullName is required'] },
  age: { type: Number, required: [true, 'age is required'] },
  email: { type: String, required: [true, 'email is required'] },
  isActive: {
    type: Boolean,
    required: [true, 'isActive is required'],
    default: true,
  },
  hobbies: { type: [String], required: [true, 'hobbies is required'] },
  address: { type: address, required: [true, 'address is required'] },
  orders: { type: [order], required: [true, 'order is required'] },
});

export const User = model<TUser>('User', userSchema);
