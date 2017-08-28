import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {HttpRequest, HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
// import {THROW_ERROR} from './error.handle';

@Injectable()
export class APIService {

  constructor(private http: HttpClient) { }

  getURI(data: any){
    let dataString = '?';
    for(const v in data){
      dataString += v + '=' + data[v] + '&';
    }
    return dataString;
  }

  get(url: string, data?: any): Observable<any>{
    const dataString = this.getURI(data);
    console.log('GET : ' + url, dataString, data);
    return this.http.get(url + dataString)
      .catch(this.handleError);
  }

  post(url: string, body: any= {}, data: any= {}): Observable<any>{
    const dataString = this.getURI(data);
    console.log('POST : ' + url, dataString, body, data);
    return this.http.post(url + dataString, body)
      .catch(this.handleError);
  }

  upload(url: string, files: any= {}, data: any= {}): any{
    const formData = new FormData();
    for (const i in files){
      formData.append(i, files[i]);
    }
    const headers = new Headers();
    headers.delete('Content-Type');
    const options = new RequestOptions({headers: headers});

    const dataString = this.getURI(data);

    const req = new HttpRequest('POST', url + dataString, formData, {
      reportProgress: true
    });
    console.log('UPLOAD : ' + url, dataString, files, data);
    return this.http.request(req)
      .catch(this.handleError);
  }

  put(url: string, body: any= {}, data: any= {}): Observable<any>{
    const dataString = this.getURI(data);
    console.log('PUT : ' + url, dataString, body, data);
    return this.http.post(url + dataString, body)
      .catch(this.handleError);
  }

  delete(url: string, body: any= {}, data: any= {}): Observable<any>{
    const dataString = this.getURI(data);
    console.log('DELETE : ' + url, dataString, body, data);
    return this.http.post(url + dataString, body)
      .catch(this.handleError);
  }

  // delayReq(observable,delay){
  //   return Observable.create(observer =>{
  //     setTimeout(()=>{
  //       observable.subscribe((data)=>{
  //         observer.next(data);
  //         observer.complete();
  //       })
  //     },delay)
  //   })
  // }

  extractData(data: any){
    return data.json();
  }
  handleError(err){
    // THROW_ERROR('Error handleError', this, err);
    return Observable.throw({msg:'Error API Service.', err:err});
  }
}
