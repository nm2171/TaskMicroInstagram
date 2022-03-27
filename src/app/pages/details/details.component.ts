import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/image';

import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  image!: Image;
  response: boolean = false;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.api.getImageById(Number(id)).subscribe(x => this.image = x);
    });
    
  }

  onDelete() {
    this.response = true;
  }
  
  confirm(res: string) {
    if (res === 'yes') {    
      this.api.deleteData(this.image.id).subscribe(() => {
        this.router.navigateByUrl('/photos');
      });   
    }
    
    if (res === 'no') {
      this.response = false;
      this.router.navigateByUrl(`/photos/${this.image.id}`);
    }
  }
}
