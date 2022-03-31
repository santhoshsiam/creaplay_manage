import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataservicesService } from '../../../shared/dataservices.service';


@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addForm: FormGroup|any;
  constructor(public activeModal: NgbActiveModal,
    private fb :FormBuilder,
    private api : DataservicesService) { }

  ngOnInit(): void {
   
    this. addForm = this.fb.group({
      role:['',[Validators.required]],
      name:['',[Validators.required]],
      textarea:['',[Validators.required]],
      email: ['',[Validators.required, Validators.email,]],
      number:['',Validators.required], 
      upload_image: ['',[Validators.required]],
    
    });
  };
  get getControl(){
    return this.addForm.controls
  };

  addFormsubmit() {
    console.log(this.addForm.value);
    const obj = {
          id: '',
          role: this.addForm.value.role,
          name: this.addForm.value.name,
          textarea: this.addForm.value.textarea,
          email:this.addForm.value.email,
          number: this.addForm.value.number,
          upload_image: this.addForm.value.upload_image,
        }
        this.api.edti_api(obj)
        .subscribe( (sub:any) =>{

        })
        this.addForm.reset()
        this.activeModal.dismiss()
  }


}
