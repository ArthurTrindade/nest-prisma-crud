import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ProductsService {

  constructor(private prisma: PrismaService) {}

  create(createProdutDto: CreateProductDto) {
    return this.prisma.product.create({ data: createProdutDto })
  }

  findAll() {
    return this.prisma.product.findMany({
      where: {
      published: true
    }});
  }

  findAllDrafts() {
    return this.prisma.product.findMany({
      where: {
        published: false
      }
    })
  }

  findOne(id: string) {
    return this.prisma.product.findUnique({
      where: {
        id,
      }
    })
  }

  update(id: string, updateProdutDto: UpdateProductDto) {
    return this.prisma.product.update({
      where: { id },
      data: updateProdutDto
    })
  }

  remove(id: string) {
    return this.prisma.product.delete({where: { id }})
  }
}
