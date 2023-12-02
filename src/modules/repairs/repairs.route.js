import express from 'express';
import { deleteRepair, findAllRepairs, updateRepair, createRepair,findOneRepair } from './repairs.controller.js';

export const router = express.Router();

router
.route('/')
.get(findAllRepairs)
.post(createRepair)

router
.route('/:id')
.get(findOneRepair)
.patch(updateRepair)
.delete(deleteRepair)