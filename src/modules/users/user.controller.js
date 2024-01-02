import { AppError } from '../../common/errors/appError.js';
import { catchAsync } from '../../common/errors/catchAsync.js';
import { verifyPassword } from '../../config/plugin/encripted-password.plugin.js';
import generateJWT from '../../config/plugin/generate-jwt.plugin.js';
import { validateUser, validateLogin } from './user.schema.js'
import { UserService } from './users.service.js';

export const login = catchAsync(async (req, res, next) => {
  const { hasError, errorMessages, userData } = validateLogin(req.body);

  if (hasError) {
    return res.status(422).json({
      status: 'error',
      message: errorMessages,
    });
  }

  const user = await UserService.findOneByEmail(email);

  if (!user) {
    return next(new AppError("user not found", 404));
  }

  const isCorrectPassword = await verifyPassword(password, user.password);

  if (!isCorrectPassword) {
    return next(new AppError("invalid credentials", 401));
  }

  const token = await generateJWT(user.id);

  return res.status(200).json({
    token,
    user: {
      id: user.id,
      name: user.name,
    },
  });
});

export const findAllUsers = catchAsync(async (req, res,) => {
    const { user } = req;

    return res.status(200).json(user);
  
  })


export const createUser = catchAsync(async (req, res) => {
    const { hasError, errorMessages, userData } = validateUser(req.body);

    if (hasError) {
      return res.status(422).json({
        status: 'error',
        message: errorMessages,
      });
    }

    const user = await UserService.create(userData);

    const token = await generateJWT(user.id);

    return res.status(201).json({
      token,
      user: {
        id: user.id,
        name: user.name,
      },
    });
  }) 

  

export const findOneUser = catchAsync(async (req, res, next) => {
  const { user } = req;

  return res.status(200).json(user);
});

export const updateUser = catchAsync(async (req, res) => {
 
    const { user } = req;

    return res.status(200).json(user);
  }) 


export const deleteUser = catchAsync(async (req, res) => {

    const { user } = req;

    await UserService.delete(user);

    return res.status(204).json(null);
  
  })

