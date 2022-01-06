import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  HeaderComponent, InputComponent, ItemComponent, SoftkeyComponent
} from './components';

const allComponents = [
  HeaderComponent,
  InputComponent,
  ItemComponent,
  SoftkeyComponent,
];

@NgModule({
  imports: [CommonModule],
  declarations: allComponents,
  exports: allComponents
})

export class SharedModule { }
