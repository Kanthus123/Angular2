import {RouterConfig} from '@angular/router';
import {AccountComponent} from './account.component';
import {ListComponent} from './list.component';
import {CreateComponent} from './create.component';
import {DetailsCOmponent} from './details.component';

export const routes: RouterConfig = [
  {
    path: 'accounts',
    component: AccountComponent,

    children: [
      {path: 'list', component:ListComponent},
      {path: 'create', componente:CreateComponent},
      {path: '', redirectTo: 'list'},
      {path: ':id', component:DetailsComponent},
    ]
  }
];
