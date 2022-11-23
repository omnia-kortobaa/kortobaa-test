import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  constructor(private __itemsService: ItemsService) {}
  ngOnInit(): void {
    this.__itemsService.getallItems().subscribe((x) => {
      console.log(x);
    });
  }
}
