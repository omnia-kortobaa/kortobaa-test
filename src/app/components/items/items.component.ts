import { Component, OnDestroy, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces/item';
import { ItemsService } from 'src/app/services/items/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit, OnDestroy {
  constructor(private __itemsService: ItemsService) {}
  items: Array<Item> = [];
  ngOnInit(): void {
    this.__itemsService.getallItems().subscribe((item) => {
      console.log(item.data);
      this.items = item.data;
    });
  }
  ngOnDestroy(): void {}
}
