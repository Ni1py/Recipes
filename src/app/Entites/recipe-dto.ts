import { IngredientDTO } from "./ingredient-dto";
import { StepDTO } from "./step-dto";

export interface RecipeDTO {
  id: number;
  name: string;
  description: string;
  author: string;
  likes: number;
  favourites: number;
  timeMinutes: number;
  numberOfPersons: number;
  tags: string[];
  photo: string;
  ingredients: IngredientDTO[];
  steps: StepDTO[];
}