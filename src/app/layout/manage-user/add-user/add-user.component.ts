import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { post } from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { DataservicesService } from '../../../shared/dataservices.service';


@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addForm: FormGroup | any;
  constructor(public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private api: DataservicesService,
    private toastr: ToastrService,
    private router : Router) { }

  ngOnInit(): void {

    this.addForm = this.fb.group({
      role: ['', [Validators.required]],
      name: ['', [Validators.required]],
      textarea: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email,]],
      number: ['', Validators.required],
      upload_image: ['', [Validators.required]],

    });
  };
  get getControl() {
    return this.addForm.controls
  };

  addFormsubmit() {
    const obj = {
      role: this.addForm.value.role,
      name: this.addForm.value.name,
      short_bio: this.addForm.value.textarea,
      email: this.addForm.value.email,
      mobile_no: this.addForm.value.number,
      upload_image: this.addForm.value.upload_image,
    }
    this.api.add_api(obj).subscribe((sub: any) => {
      console.log(sub);
      if (sub.status == 1) {
        window.location.reload();
        this.activeModal.dismiss();
        this.toastr.success(sub.message);
      } else {
        this.toastr.error(sub.message);
      }
    }, error => {

    })
  }


}
