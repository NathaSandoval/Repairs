import { catchAsync } from "../../common/errors/catchAsync.js";
import { validateCreateRepair } from "./repairs.schema.js";
import { RepairService } from "./repairs.service.js";

export const findAllRepairs = catchAsync(async (req, res) => {
  
  const { repair } = req;


    return res.status(200).json(repair);
  }) 
  

export const createRepair = catchAsync(async (req, res) => {
  const { hasError, errorMessages, repairData } = validateCreateRepair(
    req.body
  );

  if (hasError) {
    return res.status(422).json({
      status: "error",
      message: errorMessages,
    });
  }

  const repair = await RepairService.create(repairData);

  return res.status(201).json(repair);
});

export const findOneRepair = catchAsync(async (req, res) => {
  const { repair } = req;

  return res.status(200).json(repair);
});

export const updateRepair = catchAsync(async (req, res) => {
  
    const { repair } = req;    

    return res.status(200).json(repair);
  } )
 

export const deleteRepair = catchAsync(async (req, res) => {
  const { repair } = req;

  await RepairService.delete(repair);

  return res.status(204).json(null);
});
