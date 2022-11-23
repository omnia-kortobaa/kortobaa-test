import { Component, OnInit, OnDestroy } from '@angular/core';
import { Author } from 'src/app/interfaces/author';
import { AuthorsService } from 'src/app/services/authors/authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss'],
})
export class AuthorsComponent implements OnInit, OnDestroy {
  constructor(private __authorsService: AuthorsService) {}
  authors: Array<Author> = [];

  ngOnInit(): void {
    this.__authorsService.getAllAuthors().subscribe((author) => {
      this.authors = author.data;
      console.log(this.authors);
    });
  }
  ngOnDestroy(): void {}
}
