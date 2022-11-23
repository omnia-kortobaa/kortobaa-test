import { Component } from '@angular/core';
import { AuthorsService } from 'src/app/services/authors/authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent {
  constructor(private __authorsService: AuthorsService) {}
  ngOnInit(): void {
    this.__authorsService.getAllAuthors().subscribe((x) => {
      console.log(x);
    });
  }
}
