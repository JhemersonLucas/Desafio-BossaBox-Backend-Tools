import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';
import Tool from '../models/Tool';

interface Request {
  title: string;
  link: string;
  description: string;
  tags: string[];
}

class CreateToolService {
  public async execute({
    title,
    link,
    description,
    tags,
  }: Request): Promise<Tool> {
    const toolRepository = getRepository(Tool);

    if (!title || !link || !description || !tags) {
      throw new AppError('Todos os campos devem ser preenchidos.');
    }

    const existsTool = await toolRepository.findOne({
      where: { title },
    });

    if (existsTool) {
      throw new AppError(
        'A ferramenta enviada já está cadastrada, tente inserir outra ferramenta.',
      );
    }

    // cria categoria
    const tool = toolRepository.create({
      title,
      link,
      description,
      tags,
    });

    await toolRepository.save(tool);

    return tool;
  }
}

export default CreateToolService;
