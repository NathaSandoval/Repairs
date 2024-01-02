import express from 'express';
import { createUser, deleteUser, findAllUsers, findOneUser, login, updateUser } from './user.controller.js';
import { protect, protectAccountOwner, validExistUser } from './user.middleware.js';

export const router = express.Router();

router.post("/login", login)

router
.route('/')
.get(protect, findAllUsers)
.post(createUser)

router.use(protect)
router.use("/:id", validExistUser)

router
.route('/:id')
.get(findOneUser)
.patch(protectAccountOwner, updateUser)
.delete(protectAccountOwner, deleteUser);
