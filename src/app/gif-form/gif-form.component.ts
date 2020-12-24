import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gif-form',
  templateUrl: './gif-form.component.html',
  styleUrls: ['./gif-form.component.css']
})
export class GifFormComponent implements OnInit {
  searchTerm: string = '';
  search() {
    this.passSearchTerm.emit(this.searchTerm);
  }
  @Output() passSearchTerm = new EventEmitter<string>();
  constructor() { }
  ngOnInit(): void { }
}


