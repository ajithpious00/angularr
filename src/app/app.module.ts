import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component'; // Import HeroComponent

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent  // Declare HeroComponent here
  ],
  imports: [
    BrowserModule
    // Add other modules as needed
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
