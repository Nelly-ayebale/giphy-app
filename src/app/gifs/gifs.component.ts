import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { SearchService } from '../search.service';


@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit {
  gifs: any[] = [];


  constructor(private dataService: DataService, private searchService: SearchService) { }

  ngOnInit(): void {
    this.dataService.getTrendingGifs()
      .subscribe((response: any) => {
        console.log('Data', response);
        this.gifs = response.data;
      })
  }
  searchGifs(term: string) {
    this.searchService.searchGifs(term)
      .subscribe((term: any) => {
        console.log('term', term)
        this.gifs = term.data;
      })
  }




}



