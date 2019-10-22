import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { SuperAdminComponent } from './component/admin/user-admin/super-admin.component';
import { SettingsComponent } from './../app/component/settings/settings/settings.component';
import { UserSettingsComponent } from './../app/component/settings/user-settings/user-settings.component';
import { ReportComponent } from './component/report/report.component';
import { AttendanceSheetComponent } from './component/attendance-sheet/attendance-sheet.component';
import { PaypieComponent } from './component/project/paypie/paypie.component';
import { LoginComponent } from './component/auth/login/login.component';
import { SignupComponent } from './component/auth/signup/signup.component';
import { MasterComponent} from '../app/component/master/master/master.component';
import { HeaderComponent } from '../app/component/shared/header/header.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatNativeDateModule } from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

//services
import { SidenavService } from '../app/services/sidenav/sidenav.service';





@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SuperAdminComponent,
    SettingsComponent,
    UserSettingsComponent,
    ReportComponent,
    AttendanceSheetComponent,
    PaypieComponent,
    LoginComponent,
    SignupComponent,
    MasterComponent,
    HeaderComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  providers: [SidenavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
