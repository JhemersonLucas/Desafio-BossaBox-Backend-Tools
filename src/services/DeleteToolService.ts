import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';
import Tool from '../models/Tool';

class DeleteToolService {
  public async execute(id: string): Promise<null> {
    const toolsRepository = getRepository(Tool);
    const tool = toolsRepository.findOne(id);
    if (!tool) {
      throw new AppError('A ferramenta informada não foi encontrada!');
    }
    await toolsRepository.delete({ id });
    return null;
  }
}

export default DeleteToolService;
