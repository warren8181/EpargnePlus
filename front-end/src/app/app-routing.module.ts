import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';


import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

// layouts
import { AdminComponent } from "./layouts/admin/admin.component";

// admin views
import { SettingsComponent } from "./views/admin/settings/settings.component";
import { TontineListComponent } from './views/admin/tontine/tontine-list/tontine-list.component';
import { MembersListComponent } from './views/admin/tontine/members-list/members-list.component';

// auth views
import { LoginComponent } from "./views/auth/login/login.component";
import { InscriptionComponent } from './views/admin/tontine/inscription/inscription.component';
import { CotisationComponent } from './views/admin/tontine/cotisation/cotisation.component';
import { AchatTontineComponent } from './views/admin/tontine/achat-tontine/achat-tontine.component';


const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent,
  },
  // admin views
  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "settings", component: SettingsComponent },
      { path: "tontines", component: TontineListComponent },
      { path: "members", component: MembersListComponent},
      { path: "inscription", component: InscriptionComponent},
      { path: "cotisation", component: CotisationComponent},
      { path: "achat-tontine", component: AchatTontineComponent}
    ],
  },
  {
    path: 'not-found',
    component: FourOhFourComponent
  },

  {
    path: '**',
    redirectTo: 'not-found'
  }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ]
})
export class AppRoutingModule { }
