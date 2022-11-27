import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from 'src/app/components/categories/categories.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [CategoriesComponent],
  imports: [CommonModule, CategoriesRoutingModule, MatCardModule, MatProgressBarModule],
  // exports: [CategoriesComponent],
})
export class CategoriesModule { }
