import { Router } from 'express';

import { getRepository, In } from 'typeorm';

import Tool from '../models/Tool';

import CreateToolService from '../services/CreateToolService';
import DeleteToolService from '../services/DeleteToolService';

const toolsRouter = Router();

toolsRouter.get('/', async (request, response) => {
  const { tag } = request.query;
  console.log(tag);
  const toolsRepository = getRepository(Tool);
  const tools = await toolsRepository.find();
  // filtrando tag
  if (tag) {
    const results = tools.filter(tool => tool.tags.indexOf(tag) > -1);
    response.json(results);
  }
  return response.json(tools);
});

toolsRouter.post('/', async (request, response) => {
  const { title, link, description, tags } = request.body;
  const createTool = new CreateToolService();
  const tool = await createTool.execute({
    title,
    link,
    description,
    tags,
  });
  return response.status(201).json(tool);
});

toolsRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;
  const deleteTool = new DeleteToolService();
  await deleteTool.execute(id);
  return response.status(204).send();
});

export default toolsRouter;
