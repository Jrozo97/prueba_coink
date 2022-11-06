import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MatPaginatorModule } from '@angular/material/paginator';
import { FiltroPipe } from './pipes/filtro.pipe';
import { HotToastModule } from '@ngneat/hot-toast';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FiltroPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDatatableModule,
    BrowserAnimationsModule,
    MatTableModule,
    NgbModule,
    HttpClientModule,
    MatPaginatorModule,
    HotToastModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
