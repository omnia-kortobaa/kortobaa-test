import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  constructor(private __cateService: CategoriesService) {}
  ngOnInit(): void {
    this.__cateService.getAllCategories().subscribe((x) => {
      console.log(x);
    });
  }
}
