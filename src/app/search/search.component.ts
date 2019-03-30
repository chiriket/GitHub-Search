import { Component, OnInit } from '@angular/core';
import { SearchService } from '../searches/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  profile: any[];
  repos: any[];
  username: string;

  constructor(private searchService: SearchService) {

  }

  findProfile() {
    this.searchService.updateProfile(this.username);
    this.searchService.getProfileInfo().subscribe(profile => {
        console.log(profile);
        this.profile = profile;
    });

    this.searchService.getProfileRepos().subscribe(repos => {
        console.log(repos);
        this.repos = repos;
    });
  }

  ngOnInit() {
  }
}

