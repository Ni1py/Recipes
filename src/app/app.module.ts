import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LoginButtonComponent } from './Components/header/login-button/login-button.component';
import { SortingByTagsComponent } from './Components/home-page/sorting-by-tags/sorting-by-tags.component';
import { RecipeOfTheDayComponent } from './Components/home-page/recipe-of-the-day/recipe-of-the-day.component';
import { SearchRecipesComponent } from './Components/home-page/search-recipes/search-recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    LoginButtonComponent,
    SortingByTagsComponent,
    RecipeOfTheDayComponent,
    SearchRecipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
