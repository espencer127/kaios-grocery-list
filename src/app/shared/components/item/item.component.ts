import { Component } from '@angular/core';
import { ItemService } from './item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  constructor(private itemService: ItemService) { }

  get items() {
    return this.itemService.getAll();
  }
}
