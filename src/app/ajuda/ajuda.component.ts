import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-ajuda',
  standalone: true,
  imports: [CommonModule],
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
