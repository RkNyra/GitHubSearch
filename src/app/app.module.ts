import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
// import { AppRoutingModule } from './custom-route/custom-route.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './home/about/about.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './home/footer/footer.component';
import { HttpModule } from '@angular/http';
import { SearchReposComponent } from './home/search-repos/search-repos.component';
import { SearchUsersComponent } from './home/search-users/search-users.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { from } from 'rxjs';
import { HighlightDirective } from './highlight.directive';
import { TitleCasePipe } from './title-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent,
    SearchReposComponent,
    SearchUsersComponent,
    NotFoundComponent,
    HighlightDirective,
    TitleCasePipe
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
