import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable()
export class SearchService {

  private username: string;
  private clientid =  '63080effc016467bfebda70c2883a8bf1fa1e0d5';
  private clientsecret = '5ab8a176a8d93c1c740400f04c70d57bfee1eb82';
  constructor(private http: HttpClient) {
    console.log('Service is ready!');
    this.username = 'chiriket';
  }

  getProfileInfo(): Observable<Response> {
    // tslint:disable-next-line:max-line-length
    return this.http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
    .pipe(map(res => res.json()));
  }

  getProfileRepos():Observable<Response> {
    // tslint:disable-next-line:max-line-length
    return this.http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
    .pipe(map(res => res.json()));
      }


  updateProfile(username: string) {
    this.username = username;
  }

}