import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';
import { TextColorDirective } from '../directives/text-color.directive';

@Component({
  selector: 'app-ajuda',
  standalone: true,
  imports: [
    CommonModule, 
    TextColorDirective
  ],
  templateUrl: './ajuda.component.html',
  styleUrl: './ajuda.component.scss'
})
export class AjudaComponent {
  posts: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.posts = data;
    });
  }
}
