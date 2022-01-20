import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
  ]
})
export class MainModule { }
