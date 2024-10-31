import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import logger from '../config/logger';

const handleValidationErrors = async (
    req: Request,
    res: Response,
    next: NextFunction
    ) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            logger.error('Validation failed:', errors.array());
            return res.status(400).json({errors: errors.array()});
        }
        next();
    }

export default handleValidationErrors;
