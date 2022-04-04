import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { DataservicesService } from '../../../shared/dataservices.service';

@Component({
  selector: 'edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  @Input() tabledetail: any;

  editeForm: FormGroup | any;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private api: DataservicesService,
    private toastr: ToastrService) { }

  ngOnInit(): void {

    this.editeForm = this.fb.group({
      role: ['', [Validators.required]],
      name: ['', [Validators.required]],
      textarea: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email,]],
      number: ['', Validators.required],
      upload_image: ['', [Validators.required]],

    });

    this.editeForm.patchValue({
      role: this.tabledetail.role,
      name: this.tabledetail.name,
      textarea: this.tabledetail.short_bio,
      email: this.tabledetail.email,
      number: this.tabledetail.mobile_no,
      upload_image: this.tabledetail.upload_image
    })

  };
  get getControl() {
    return this.editeForm.controls
  };

  editeFormsubmit() {
    console.log(this.editeForm.value);
    const obj = {
      role: this.editeForm.value.role,
      name: this.editeForm.value.name,
      short_bio: this.editeForm.value.textarea,
      email: this.editeForm.value.email,
      mobile_no: this.editeForm.value.number,
      upload_image: this.editeForm.value.upload_image
    }
    this.api.edit_api(obj).subscribe((sub: any) => {
      this.activeModal.dismiss();
      this.toastr.success(" Successfully");
    }, error => {

    });

  }


}
