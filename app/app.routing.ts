import { 
  Routes,
  RouterModule 
} from '@angular/router';
import { SampleIndexComponent } from './samples/sample-index/sample-index.component';
import { SampleShowComponent } from './samples/sample-show/sample-show.component';
import { SampleLoginComponent } from './samples/sample-login/sample-login.component';

export const routes: Routes = [
  { path: '', redirectTo: 's', pathMatch: 'full' },
  { path: 'slogin', component: SampleLoginComponent },
  { path: 's', component: SampleIndexComponent },
  { path: 's/:id', component: SampleShowComponent }
];

export const routing = RouterModule.forRoot(routes);