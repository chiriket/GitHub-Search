import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class SearchService {

  private username: string;
  private clientid = '4193ec64f95f88022fb3';
  private clientsecret = '5ab8a176a8d93c1c740400f04c70d57bfee1eb82';
  constructor(private http: Http) {
    console.log('Service is ready!');
    this.username = 'Chiriket';
  }

  getProfileInfo() {
    // tslint:disable-next-line:max-line-length
    return this.http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
    .map(res => res.json());
  }

  getProfileRepos() {
    // tslint:disable-next-line:max-line-length
    return this.http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
    .map(res => res.json());
  }

  updateProfile(username: string) {
    this.username = username;
  }

}