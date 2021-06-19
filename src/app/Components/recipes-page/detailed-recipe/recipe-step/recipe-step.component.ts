import { Component, OnInit, Input } from '@angular/core';
import { StepDTO } from '../../../../Entites/step-dto';

@Component({
  selector: 'app-recipe-step',
  templateUrl: './recipe-step.component.html',
  styleUrls: ['./recipe-step.component.css']
})
export class RecipeStepComponent implements OnInit {

  @Input() step!: StepDTO;

  constructor() { }

  ngOnInit(): void {
  }

}
