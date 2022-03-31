import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  editeForm: FormGroup|any;
  
  constructor(public activeModal: NgbActiveModal,
    private fb :FormBuilder) { }

  ngOnInit(): void {
   
    this. editeForm = this.fb.group({
      role:[''],
      name:['',[Validators.required]],
      textarea:['',[Validators.required]],
      email: ['',[Validators.required, Validators.email,]],
      number:['',Validators.required], 
      upload_image: ['',[Validators.required]],
    
    });
  };
  get getControl(){
    return this.editeForm.controls
  };

  editeFormsubmit() {
    console.log(this.editeForm.value);
    this.editeForm.reset()
    this.activeModal.dismiss()
  }

}
