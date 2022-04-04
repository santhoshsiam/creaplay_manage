import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { routerTransition } from '../router.animations';
import { DataservicesService } from '../shared/dataservices.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    constructor(public router: Router,
        private fb: FormBuilder,
        private api: DataservicesService,
        private toastr: ToastrService) { }

    profileForm: FormGroup | any;

    ngOnInit() {
        this.profileForm = this.fb.group({
            email: ['', [Validators.required, Validators.email,]],
            password: ['', Validators.required],
        });
    }

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }

    get getControl() {
        return this.profileForm.controls
    };

    submit() {
        // console.log(this.profileForm.value);
        const obj = {
            user_id: this.profileForm.value.email,
            password: this.profileForm.value.password
        }
        console.log(obj);

        this.api.login_api(obj).
            subscribe((sub: any) => {
                console.log(sub);
                if (sub.status == 1) {
                    localStorage.setItem('token', sub.data.user.token)
                    this.router.navigate(['manageUSer'])
                    this.toastr.success("login Successfully");
                }

            }, error => {
                this.toastr.error("somthig went woring please try agin")
            })
    }


}
