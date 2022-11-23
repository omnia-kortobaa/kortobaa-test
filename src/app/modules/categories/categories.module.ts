import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from 'src/app/components/categories/categories.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [CategoriesComponent],
  imports: [CommonModule, CategoriesRoutingModule,MatCardModule],
  exports: [CategoriesComponent],
})
export class CategoriesModule {}
