import express from 'express';
import { createContactController, deleteContactController, getContactsController } from '../controllers/contact.controller';
import { privateRequest } from '../middlewares/auth.middleware';

const router = express.Router();

router.post('/contato', privateRequest,createContactController);
router.get('/contatos', getContactsController);
router.delete('/contato', privateRequest, deleteContactController);

export default router;