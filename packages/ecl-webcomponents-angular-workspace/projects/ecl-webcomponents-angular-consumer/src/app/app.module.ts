import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentLibraryModule } from '@ecl/ecl-webcomponents-angular/dist';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentLibraryModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
