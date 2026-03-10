import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produto } from './entities/produto.entity';
import { Categoria } from '../categoria/entities/categoria.entity';


@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private produtoRepository: Repository<Produto>,
    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>,
  ) {}

  async create(produto: Produto, categoriaId: string | number): Promise<Produto> {
    // Garantir que seja número
    const id = Number(categoriaId);

    const categoria = await this.categoriaRepository.findOne({ where: { id } });
    if (!categoria) {
      throw new NotFoundException(`Categoria com ID ${id} não encontrada`);
    }

    produto.categoria = categoria;
    return this.produtoRepository.save(produto);
  }

  async findAll(): Promise<Produto[]> {
    return this.produtoRepository.find({ relations: ['categoria'] });
  }

  async findOne(id: number): Promise<Produto> {
    const produto = await this.produtoRepository.findOne({
      where: { id },
      relations: ['categoria'],
    });
    if (!produto) {
      throw new NotFoundException(`Produto com ID ${id} não encontrado`);
    }
    return produto;
  }

  async update(
    id: number,
    produtoData: Produto,
    categoriaId?: string | number,
  ): Promise<Produto> {
    const produto = await this.findOne(id);

    if (categoriaId) {
      const categoria = await this.categoriaRepository.findOne({ where: { id: Number(categoriaId) } });
      if (!categoria) {
        throw new NotFoundException(`Categoria com ID ${categoriaId} não encontrada`);
      }
      produto.categoria = categoria;
    }

    // Atualiza outros campos do produto
    produto.nome = produtoData.nome ?? produto.nome;
    produto.preco = produtoData.preco ?? produto.preco;

    return this.produtoRepository.save(produto);
  }

  async remove(id: number): Promise<void> {
    const produto = await this.findOne(id);
    await this.produtoRepository.remove(produto);
  }
}