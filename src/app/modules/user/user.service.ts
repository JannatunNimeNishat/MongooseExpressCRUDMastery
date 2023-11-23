import { TOrder, TUser } from './user.interface';
import { User } from './user.model';

const createUserIntoDB = async (userData: TUser) => {
  if (await User.isUserExists(userData.userId)) {
    throw new Error('User already exists');
  }

  const result = await User.create(userData);

  return result;
};

const getAllUsersFromDB = async () => {
  const result = await User.find(
    {},
    { username: 1, fullName: 1, age: 1, email: 1, address: 1, _id: 0 },
  );
  return result;
};

const getSingleUsersFromDB = async (userId: number) => {
  if (!(await User.isUserExists(userId))) {
    throw new Error('User not found!');
  }
  const result = await User.findOne(
    { userId: userId },
    {
      userId: 1,
      username: 1,
      fullName: 1,
      age: 1,
      email: 1,
      isActive: 1,
      hobbies: 1,
      address: 1,
      _id: 0,
    },
  );
  return result;
};

const deleteUserFromDB = async (userId: number) => {
  if (!(await User.isUserExists(userId))) {
    throw new Error('User not found!');
  }
  const result = await User.deleteOne({ userId: userId });
  return result;
};

//orders
const addNewProductOrderIntoDB = async (
  userId: number,
  productData: TOrder,
) => {
  if (!(await User.isUserExists(userId))) {
    throw new Error('User not found!');
  }

  const result = await User.updateOne(
    { userId: userId },
    {
      $push: {
        orders: { ...productData },
      },
    },
  );

  return result;
};

const getSingleUserOrdersFromDB = async (userId: number) => {
  if (!(await User.isUserExists(userId))) {
    throw new Error('User not found!');
  }
  const result = await User.findOne(
    { userId: userId },
    {
      orders: 1,
      _id: 0,
    },
  );
  return result;
};

export const UserService = {
  createUserIntoDB,
  getAllUsersFromDB,
  getSingleUsersFromDB,
  deleteUserFromDB,
  addNewProductOrderIntoDB,
  getSingleUserOrdersFromDB,
};
