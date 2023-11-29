import express from 'express';
import { router as usersRoute} from '../modules/users.route.js'
import { router as repairsRoute} from '../modules/repairs.route.js'

export const router = express.Router();

//router.use('/repairs', repairsRoute)
router.use('/users', usersRoute)