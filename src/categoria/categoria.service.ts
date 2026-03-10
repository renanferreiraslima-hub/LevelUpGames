import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from './entities/categoria.entity';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>,
  ) {}

  async findAll(): Promise<Categoria[]> {
    try {
      return await this.categoriaRepository.find();
    } catch (error) {
      console.error('Erro ao buscar categorias:', error);
      throw error; // propaga o erro para o Nest logar corretamente
    }
  }

  async findOne(id: number): Promise<Categoria> {
    const categoria = await this.categoriaRepository.findOne({ where: { id } });
    if (!categoria) throw new NotFoundException(`Categoria com ID ${id} não encontrada`);
    return categoria;
  }

  async create(categoria: Categoria): Promise<Categoria> {
    return this.categoriaRepository.save(categoria);
  }

  async update(id: number, categoriaData: Categoria): Promise<Categoria> {
    const categoria = await this.findOne(id);
    categoria.nome = categoriaData.nome ?? categoria.nome;
    return this.categoriaRepository.save(categoria);
  }

  async remove(id: number): Promise<void> {
    const categoria = await this.findOne(id);
    await this.categoriaRepository.remove(categoria);
  }
}