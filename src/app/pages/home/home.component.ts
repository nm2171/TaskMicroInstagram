import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/image';

import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data!: Image[];
  pageNum: number = 1;

  selectedId!: number;

  constructor(
    private api: ApiService,
    ) { }

  

  ngOnInit(): void {
    this.api.getData().subscribe((res: Image[]) => {
      this.data = res;
    });
  }

}
