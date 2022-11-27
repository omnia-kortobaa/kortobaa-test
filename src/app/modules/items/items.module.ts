import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from 'src/app/components/items/items.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [ItemsComponent],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    MatCardModule
  ],
  // exports:[ItemsComponent]
})
export class ItemsModule { }
