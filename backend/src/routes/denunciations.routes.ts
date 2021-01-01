import { Router } from 'express'

//http//:localhost:3333/denunciations

const denunciationsRouter = Router();

const denunciation = [];

denunciationsRouter.post('/', (resquest, response) => {
  return response.json({ message: "Hello World" });
})

export default denunciationsRouter;
