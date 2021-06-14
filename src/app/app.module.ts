import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LoginButtonComponent } from './Components/header/login-button/login-button.component';
import { SortingByTagsComponent } from './Components/home-page/sorting-by-tags/sorting-by-tags.component';
import { RecipeOfTheDayComponent } from './Components/home-page/recipe-of-the-day/recipe-of-the-day.component';
import { SearchRecipesComponent } from './Components/home-page/search-recipes/search-recipes.component';
import { RecipesPageComponent } from './Components/recipes-page/recipes-page.component';
import { AddRecipeButtonComponent } from './Components/recipes-page/add-recipe-button/add-recipe-button.component';
import { SortingByTagsRecipesComponent } from './Components/recipes-page/sorting-by-tags-recipes/sorting-by-tags-recipes.component';
import { SearchComponent } from './Components/recipes-page/search/search.component';
import { RecipesComponent } from './Components/recipes-page/recipes/recipes.component';
import { CardComponent } from './Components/recipes-page/recipes/card/card.component';
import { UserLoggedInComponent } from './Components/header/user-logged-in/user-logged-in.component';
import { DetailedRecipeComponent } from './Components/recipes-page/detailed-recipe/detailed-recipe.component';
import { RecipeStepComponent } from './Components/recipes-page/detailed-recipe/recipe-step/recipe-step.component';

// определение маршрутов
const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'recipe', component: RecipesPageComponent },
  { path: 'recipe/detailedRecipe', component: DetailedRecipeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    LoginButtonComponent,
    SortingByTagsComponent,
    RecipeOfTheDayComponent,
    SearchRecipesComponent,
    RecipesPageComponent,
    AddRecipeButtonComponent,
    SortingByTagsRecipesComponent,
    SearchComponent,
    RecipesComponent,
    CardComponent,
    UserLoggedInComponent,
    DetailedRecipeComponent,
    RecipeStepComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }