import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface SearchItem {
  title: string;
  url: string;
  description: string;
}

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css'
})
export class SearchBar {
    searchList: SearchItem[] = [
      { title: 'Angular Docs', url: 'https://angular.io', description: 'Official Angular documentation' },
      { title: 'MDN Web Docs', url: 'https://developer.mozilla.org', description: 'Mozilla Developer Network resources' },
      { title: 'FreeCodeCamp', url: 'https://freecodecamp.org', description: 'Learn coding for free' },
      { title: 'Stack Overflow', url: 'https://stackoverflow.com', description: 'Q&A site for developers' },
      { title: 'W3Schools', url: 'https://w3schools.com', description: 'Web development tutorials' },
      { title: 'CSS Tricks', url: 'https://css-tricks.com', description: 'Tips for styling with CSS' },
      { title: 'GitHub', url: 'https://github.com', description: 'Code hosting platform' },
      { title: 'TypeScript Handbook', url: 'https://typescriptlang.org', description: 'Learn TypeScript' }
    ];

    filteredList: SearchItem[] = this.searchList;
    liveSearch = false;  

  filterResults(text: string) {
    if (!text) {
      this.filteredList = this.searchList;
      return;
    }

    const lower = text.toLowerCase();
    this.filteredList = this.searchList.filter(item =>
      item.title.toLowerCase().includes(lower) ||
      item.description.toLowerCase().includes(lower)
    );
  }
}
