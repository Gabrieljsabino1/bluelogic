import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { ItemsService } from './item.service';
import { Item } from './item.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  create(@Body() body: { name: string; description: string }): Item {
    return this.itemsService.create(body.name, body.description);
  }

  @Get()
  findAll(): Item[] {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Item | undefined {
    return this.itemsService.findOne(Number(id));
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() body: { name: string; description: string },
  ): Item | undefined {
    return this.itemsService.update(Number(id), body.name, body.description);
  }

  @Delete(':id')
  delete(@Param('id') id: number): boolean {
    return this.itemsService.delete(Number(id));
  }
}
