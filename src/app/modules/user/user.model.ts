import { Schema, model } from 'mongoose';
import { TAddress, TFullName, TOrder, TUser } from './user.interface';

const fullName = new Schema<TFullName>({
  firstName: {
    type: String,
    required: [true, 'firstName is required'],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'lastName is required'],
    trim: true,
  },
});

const address = new Schema<TAddress>({
  street: { type: String, required: [true, 'street is required'], trim: true },
  city: { type: String, required: [true, 'city is required'], trim: true },
  country: {
    type: String,
    required: [true, 'country is required'],
    trim: true,
  },
});

const order = new Schema<TOrder>({
  productName: {
    type: String,
    required: [true, 'productName is required'],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, 'productName is required'],
    trim: true,
  },
  quantity: {
    type: Number,
    required: [true, 'productName is required'],
    trim: true,
  },
});

const userSchema = new Schema<TUser>({
  userId: {
    type: Number,
    required: [true, 'userId is required'],
    unique: true,trim: true
  },
  username: {
    type: String,
    required: [true, 'username is required'],
    unique: true,trim: true
  },
  password: { type: String, required: [true, 'password is required'] ,trim: true},
  fullName: { type: fullName, required: [true, 'fullName is required'],trim: true },
  age: { type: Number, required: [true, 'age is required'] ,trim: true},
  email: { type: String, required: [true, 'email is required'],trim: true },
  isActive: {
    type: Boolean,
    required: [true, 'isActive is required'],
    default: true,
  },
  hobbies: { type: [String], required: [true, 'hobbies is required'],trim: true },
  address: { type: address, required: [true, 'address is required'],trim: true },
  orders: { type: [order] },
});

export const User = model<TUser>('User', userSchema);
