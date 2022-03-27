import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Image } from 'src/app/image';
import { ApiService } from 'src/app/services/api/api.service';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

  createForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private api: ApiService) { }

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      title: ['',Validators.required],
      url: ['', Validators.required],
      thumbnailUrl: ['', Validators.required]
    });
  }

  add() {    
    return this.api.addImage(this.createForm.value).subscribe((x) => {   
      this.createForm.reset;
      this.router.navigateByUrl('/photos');
    });
  }

}
