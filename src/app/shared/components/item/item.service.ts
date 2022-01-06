import { Injectable } from '@angular/core';

export interface Item {
  name: string;
  desc: string;
  price: number;
  qty: number;
  store: string;
  aisle: number;
  bin: number;
  purchased: boolean;
}

@Injectable({ providedIn: 'root' })
export class ItemService {
  private items: Item[] = [];

  getAll(): Item[] {
    return this.items;
  }

  add(item: Item): Item[] {
    this.items.push(item);
    return this.items;
  }

  create(inputName: String, qty: number, inputPurchased: boolean): Item[] {
    this.items.push(<Item>{name: inputName, desc: 'desc', price: 0, qty: qty, store: 'x', aisle: 1, bin: 1, purchased: inputPurchased});
    return this.items;
  }

  remove(index: number): Item[] {
    this.items.splice(index, 1);
    return this.items;
  }

  toggleComplete(index: number): Item[] {
    this.items[index].purchased = !this.items[index].purchased;
    return this.items;
  }
}
