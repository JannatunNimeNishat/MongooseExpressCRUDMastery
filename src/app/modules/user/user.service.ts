import { TUser } from './user.interface';
import { User } from './user.model';

const createUserIntoDB = async (userData: TUser) => {
  const newUser = await User.create(userData);

  const withOutPassword = newUser.toObject();
  delete withOutPassword.password;
  
  return withOutPassword;
};



export const UserService = {
    createUserIntoDB,
}