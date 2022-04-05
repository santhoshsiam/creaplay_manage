import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import { ToastrService } from 'ngx-toastr';
import { DataservicesService } from '../../../shared/dataservices.service';

@Component({
  selector: 'edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  @Input() tabledetail;

  editeForm: FormGroup | any;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private api: DataservicesService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    console.log(this.tabledetail._id);

    this.editeForm = this.fb.group({
      role: ['', [Validators.required]],
      name: ['', [Validators.required]],
      textarea: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email,]],
      number: ['', Validators.required],
      upload_image: ['', [Validators.required]],

    });
    this.edit_id();
  };
  get getControl() {
    return this.editeForm.controls
  };

  editeFormsubmit() {
    console.log(this.editeForm.value);
    const obj = {
      id: this.tabledetail._id,
      role: this.editeForm.value.role,
      name: this.editeForm.value.name,
      short_bio: this.editeForm.value.textarea,
      email: this.editeForm.value.email,
      mobile_no: this.editeForm.value.number,
      upload_image: this.editeForm.value.upload_image
    }
    this.api.edit_api(obj).subscribe((sub: any) => {
      console.log(sub);
      if (sub.status == 1) {
        this.activeModal.dismiss(true);
        this.toastr.success(sub.message);
      } else {
        this.toastr.error(sub.message);
      }
    }, error => {

    });

  }

  edit_id() {
    this.api.get_edit(this.tabledetail._id).subscribe((sub: any) => {
      console.log(sub);
      if (sub.status == 1) {
        this.editeForm.patchValue({
          role: sub.data.user.role,
          name: sub.data.user.name,
          textarea: sub.data.user.short_bio,
          email: sub.data.user.email,
          number: sub.data.user.mobile_no,
          // upload_image: sub.data.user.upload_image
        })
       
      } else {

      }
    })
  }




}
