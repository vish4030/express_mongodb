
import express from 'express';
import {findAll, create, update, delete_} from '../controllers/admin.js'

const router = express.Router();

router.get('/admin/find',findAll);
router.post('/admin/create',create);
router.put('/admin/update/:id',update);
router.delete('/admin/delete/:id', delete_);

export default router;