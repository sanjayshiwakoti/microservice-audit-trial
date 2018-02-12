import { Router } from 'express';
import HttpStatus from 'http-status-codes';
import * as authService from '../services/authService';

const router = Router();

/**
 * GET /api/users
 */
router.post('/login', (req, res, next) => {
  authService
    .login(req.body)
    .then(data => res.status(HttpStatus.OK).json(data))
    .catch(() => res.status(HttpStatus.UNAUTHORIZED).json({ error: 'Unauthorized' }));
});

export default router;
