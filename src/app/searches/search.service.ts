import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';




@Injectable()
export class SearchService {

  private username: string;
  private clientid =  '7117595d3ea79fb64947';
  private clientsecret = 'b51b8506c05aa1eb5018e955674bd496772b7c26';
  constructor(private http: HttpClient) {
    console.log('Service is ready!');
    this.username = 'chiriket';
  }

  getProfileInfo():Observable<any> {
    
    return this.http.get('https://api.github.com/users/'+this.username+ '/repos?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
    .pipe(map(response =>(Observable)))
  } 

   

  getProfileRepos():Observable<any>{
    
    return this.http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
    .pipe(map(response =>(Observable)))
  } 


  updateProfile(username: string) {
    this.username = username;
  }

}