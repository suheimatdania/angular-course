import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../header/shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: true}) ingredientName: ElementRef;
  @ViewChild('amountInput', {static: true}) ingredientAmount: ElementRef;
  // @Output() ingredientToAdd = new EventEmitter<Ingredient>();

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  onAdd() {
    const ingredientName = this.ingredientName.nativeElement.value;
    const ingredientAmount =  this.ingredientAmount.nativeElement.value;
    const newIngredient = new Ingredient(ingredientName, ingredientAmount);
    // this.ingredientToAdd.emit(newIngredient);
    this.slService.addIngredient(newIngredient);

  }

}
