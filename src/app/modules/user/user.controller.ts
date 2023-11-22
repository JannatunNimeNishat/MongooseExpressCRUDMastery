import { Request, Response } from 'express';
import { UserService } from './user.service';
import userValidationSchema from './user.validation';

const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;

    //validating using zod
    const zodValidatedUserData = userValidationSchema.parse(userData);

    const result = await UserService.createUserIntoDB(zodValidatedUserData);

    res.status(200).json({
      success: true,
      message: 'User created successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong',
      error: error,
    });
  }
};


const getAllUsers =  async (req: Request, res: Response) => {
    try {

        const result = await UserService.getAllUsersFromDB();

        res.status(200).json({
            success: true,
            message: 'Users fetched successfully!',
            data: result,
          });
    } catch (error:any) {
        res.status(500).json({
            success: false,
            message: error.message || 'something went wrong',
            error: error,
          });
    }

}


export const UserController = {
  createUser,
  getAllUsers
};
