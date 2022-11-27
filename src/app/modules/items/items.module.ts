import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from 'src/app/components/items/items.component';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
  declarations: [ItemsComponent],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    MatCardModule,
    MatProgressBarModule
  ],
<<<<<<< HEAD
  // exports:[ItemsComponent]
=======
  // exports:[ItemsComposnent]
>>>>>>> 60acb622a70fef1a3078c99fe3b6af4dfac3bf72
})
export class ItemsModule { }
