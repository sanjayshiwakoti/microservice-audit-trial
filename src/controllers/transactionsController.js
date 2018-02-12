import axios from 'axios';
import Boom from 'boom';
import { Router } from 'express';
import HttpStatus from 'http-status-codes';
import * as transactionsService from '../services/transactionsService';
import {transactionsValidator} from '../validators/transactionsValidator';

const router = Router();

/**
 * GET /api/users
 */
router.post('/', transactionsValidator, (req, res, next) => {
  
transactionsService.postTransaction(req.body)
  .then(function (response) {
      res.status(HttpStatus.CREATED).json(response.data);
  })
  .catch(function (error) { 
    next(error);
  });
});

export default router;

