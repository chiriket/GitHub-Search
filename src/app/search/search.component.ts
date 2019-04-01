import { Component, OnInit } from '@angular/core';
import { SearchService } from '../searches/search.service';
import { HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  profile: any[];
  repos: any[];
  username: string;

  constructor(private searchService: SearchService, private http:HttpClient) {

  }

  findProfile() {
    this.searchService.updateProfile(this.username);
    this.searchService.getProfileInfo().subscribe((res) => {
        this.profile = res;
        console.log(res);
    });

   
  }

  getRepos(){
    this.searchService.getProfileRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
  });
  }
  ngOnInit() {
  }
}

