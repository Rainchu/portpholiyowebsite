import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { AboutComponent } from './about/about/about.component';
import { ContactComponent } from './contact/contact/contact.component';
import { ProjectComponent } from './projects/project/project.component';

export const routes: Routes = [

    {
        path:'',
        component:HomeComponent
    },
    {
        path:'about',
        component : AboutComponent
    },
    {
        path : 'contact',
        component : ContactComponent
    },
    {
        path:'project',
        component : ProjectComponent
    }


];
