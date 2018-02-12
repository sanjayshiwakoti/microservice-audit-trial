import axios from 'axios';
import { Router } from 'express';
import HttpStatus from 'http-status-codes';
import * as userServices from '../services/userServices';

const router = Router();

/**
 * GET /api/users
 */
router.get('/:id', (req, res, next) => {
  
  userServices.getUser(req.params.id)
  .then(function (response) {
    res.json(response.data);
  })
  .catch(function (error) {
    res.status(500).json({data: error.data});
  });
});

export default router;

