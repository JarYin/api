import { Component } from '@angular/core';
import { Category } from './models/category.model';
import { CategoryService } from './services/category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'api';


  model: Category
  constructor(private categoryService: CategoryService) {
    this.model = {
      name: '',
      urlHandle: ''
    }
  }

  onFormSubmit() {
    this.categoryService.addCategory(this.model).subscribe({
      next: () => {
        console.log('Category added successfully');
      },
      error: (err) => {
        console.log(err);
      }
    })

  }
}
