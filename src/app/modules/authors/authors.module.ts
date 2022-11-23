import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorsRoutingModule } from './authors-routing.module';
import { AuthorsComponent } from 'src/app/components/authors/authors.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [AuthorsComponent],
  imports: [
    CommonModule,
    AuthorsRoutingModule,
    MatCardModule
  ],
  exports:[AuthorsComponent]
})
export class AuthorsModule { }
