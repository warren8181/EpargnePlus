import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { AppComponent } from './app.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { TokenInterceptor } from 'src/@core/TokenInterceptor';

// layouts
import { AdminComponent } from "./layouts/admin/admin.component";

// admin views
import { SettingsComponent } from "./views/admin/settings/settings.component";

// auth view
import { LoginComponent } from "./views/auth/login/login.component";

// components for views and layouts

import { AdminNavbarComponent } from "./components/navbars/admin-navbar/admin-navbar.component";
import { CardSettingsComponent } from "./components/cards/card-settings/card-settings.component";
import { CardStatsComponent } from "./components/cards/card-stats/card-stats.component";
import { HeaderStatsComponent } from "./components/headers/header-stats/header-stats.component";
import { NotificationDropdownComponent } from "./components/dropdowns/notification-dropdown/notification-dropdown.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TontineListComponent } from './views/admin/tontine/tontine-list/tontine-list.component';
import { CardTontinesComponent } from './components/cards/card-tontines/card-tontines.component';
import { CardMembersComponent } from './components/cards/card-members/card-members.component';
import { MembersListComponent } from './views/admin/tontine/members-list/members-list.component';
import { CardInscriptionComponent } from './components/cards/card-inscription/card-inscription.component';
import { InscriptionComponent } from './views/admin/tontine/inscription/inscription.component';
import { CotisationComponent } from './views/admin/tontine/cotisation/cotisation.component';
import { AchatTontineComponent } from './views/admin/tontine/achat-tontine/achat-tontine.component';
import { CardAchatComponent } from './components/cards/card-achat/card-achat.component';


@NgModule({
  declarations: [
    AppComponent,
    FourOhFourComponent,
    NotificationDropdownComponent,
    SidebarComponent,
    CardSettingsComponent,
    CardStatsComponent,
    CardTontinesComponent,
    CardMembersComponent,
    CardInscriptionComponent,
    CardAchatComponent,
    CotisationComponent,
    MembersListComponent,
    InscriptionComponent,
    HeaderStatsComponent,
    AdminNavbarComponent,
    AdminComponent,
    SettingsComponent,
    LoginComponent,
    TontineListComponent,
    AchatTontineComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
