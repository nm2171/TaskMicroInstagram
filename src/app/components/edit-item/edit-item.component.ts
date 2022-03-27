import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ApiService } from 'src/app/services/api/api.service';
import {  ActivatedRoute, Router } from '@angular/router';
import { Image } from 'src/app/image';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  editForm!: FormGroup;
  image!:Image;

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute
    ) { } 

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.api.getImageById(Number(id)).subscribe(x => {
        this.image = x;
        this.editForm = this.formBuilder.group({
          id: [this.image.id, Validators.required],
          title: [this.image.title, Validators.required],
          url: [this.image.url, Validators.required],
          thumbnailUrl: [this.image.thumbnailUrl, Validators.required]
        });
      });
    });
  }

  update() {
    return this.api.updateData(this.editForm.value).subscribe((x) => {
      console.log(x);
      this.router.navigateByUrl('/photos')
    });
  }

}
