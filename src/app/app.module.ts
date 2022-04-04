import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { DataservicesService } from './shared/dataservices.service';
import { InterceptorService } from './shared/interceptor.service';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        DataTablesModule,
        ToastrModule.forRoot(),
        
    ],
    declarations: [AppComponent],
    providers: [AuthGuard,DataservicesService, {
        provide: HTTP_INTERCEPTORS,
        useClass: InterceptorService,
        multi: true
    }],
    bootstrap: [AppComponent]
})
export class AppModule {}
