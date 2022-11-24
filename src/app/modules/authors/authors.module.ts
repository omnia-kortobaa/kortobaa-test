import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorsRoutingModule } from './authors-routing.module';
import { AuthorsComponent } from 'src/app/components/authors/authors.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [AuthorsComponent],
  imports: [
    CommonModule,
    AuthorsRoutingModule,
    MatCardModule,
    MatProgressBarModule
  ],
  exports: [AuthorsComponent]
})
export class AuthorsModule { }
