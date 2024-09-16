import { Injectable } from '@nestjs/common';

export interface Item {
  id: number;
  name: string;
  description: string;
}

@Injectable()
export class ItemsService {
  private items: Item[] = [];
  private idCounter = 1;

  create(name: string, description: string): Item {
    const newItem: Item = {
      id: this.idCounter++,
      name,
      description,
    };
    this.items.push(newItem);
    return newItem;
  }

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: number): Item | undefined {
    return this.items.find((item) => item.id === id);
  }

  update(id: number, name: string, description: string): Item | undefined {
    const item = this.findOne(id);
    if (item) {
      item.name = name;
      item.description = description;
      return item;
    }
    return undefined;
  }

  delete(id: number): boolean {
    const index = this.items.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.items.splice(index, 1);
      return true;
    }
    return false;
  }
}
