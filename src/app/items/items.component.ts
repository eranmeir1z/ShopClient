import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  images = [
    { name: 'Column 1', value: 'https://via.placeholder.com/150' },
    { name: 'Column 2', value: 'https://via.placeholder.com/150' },
    { name: 'Column 3', value: 'https://via.placeholder.com/150' },
    { name: 'Column 4', value: 'https://via.placeholder.com/150' },
    { name: 'Column 4', value: 'https://via.placeholder.com/150' },
    { name: 'Column 4', value: 'https://via.placeholder.com/150' },
    { name: 'Column 4', value: 'https://via.placeholder.com/150' },
    { name: 'Column 4', value: 'https://via.placeholder.com/150' },
    { name: 'Column 4', value: 'https://via.placeholder.com/150' },
    { name: 'Column 4', value: 'https://via.placeholder.com/150' },
    { name: 'Column 4', value: 'https://via.placeholder.com/150' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
