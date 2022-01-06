import { Component, HostListener, OnInit } from '@angular/core';
import { ItemService } from './shared/components/item/item.service';
import { NavigationService } from './core/services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private itemService: ItemService, private navigationService: NavigationService) { }

  ngOnInit() {
    this.navigationService.init();
  }

  @HostListener('document:keydown.enter')
  onEnter() {
    const [currentItem, currentIndex] = this.navigationService.getNameElement();
    const [currentQty, qtyIndex] = this.navigationService.getQtyElement();
    if (currentItem.nodeName === 'INPUT' && 'value' in currentItem && currentItem.value &&
          currentQty.nodeName === 'INPUT' && 'value' in currentQty && currentQty.value) {
      this.itemService.create(currentItem.value, Number(currentQty.value), false);
      currentItem.value = '';
      currentQty.value = '';
    } else {
      this.itemService.toggleComplete(currentIndex - 1);
    }
  }

  @HostListener('document:keydown.arrowdown')
  onArrowDown() {
    this.navigationService.Down();
  }

  @HostListener('document:keydown.arrowup')
  onArrowUp() {
    this.navigationService.Up();
  }

  @HostListener('document:keydown.softright')
  onSoftRight() {
    const [currentItem, currentIndex] = this.navigationService.getCurrentItem();
    if (currentItem.nodeName === 'SPAN') {
      this.itemService.remove(currentIndex - 1);
      this.navigationService.Up();
    }
  }
}
