import { Router } from 'express';
import denunciationsRouter from './denunciations.routes';

const routes = Router();

routes.use('/denunciations', denunciationsRouter);

export default routes;
