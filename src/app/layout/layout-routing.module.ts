import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'manageUSer', pathMatch: 'prefix' },
            {
                path: 'manageUSer',
                loadChildren: () => import('./manage-user/manage-user.module').then((m) => m.ManageUserModule)
            },
           
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
