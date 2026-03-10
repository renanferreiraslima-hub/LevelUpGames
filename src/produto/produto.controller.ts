import { Controller, Get, Post, Put, Delete, Param, Body, Query } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { Produto } from './entities/produto.entity';

@Controller('/produtos')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Post()
  async create(
    @Body() produto: Produto,
    @Query('categoriaId') categoriaId: number,
  ): Promise<Produto> {
    return this.produtoService.create(produto, categoriaId);
  }

  @Get()
  async findAll(): Promise<Produto[]> {
    return this.produtoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Produto> {
    return this.produtoService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() produto: Produto,
    @Query('categoriaId') categoriaId?: number,
  ): Promise<Produto> {
    return this.produtoService.update(id, produto, categoriaId);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.produtoService.remove(id);
  }
}