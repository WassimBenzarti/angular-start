import {async, inject, TestBed} from '@angular/core/testing';

import {APIService} from './api.service';
import {HttpModule} from "@angular/http";
import {HttpClientModule} from "@angular/common/http";

describe('ApiService', () => {
  let url = 'http://192.168.1.18:4000'

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, HttpClientModule],
      providers: [APIService]
    });
  });

  it('should be created', inject([APIService], (service: APIService) => {
    expect(service).toBeTruthy();
  }));

  it('Should GET url', async(inject([APIService], (service: APIService) => {
    service.get(url + '/api/account')
      .subscribe((data) => {
        console.log(data);
        expect(data).toBeTruthy()
      }, (err) => {
        console.log(JSON.stringify(err,null, 4));
        expect(err).toBeTruthy()
        expect(err.err.error).toBeTruthy()
      })
  })))
  it('Should POST url', async(inject([APIService], (service: APIService) => {
    service.post(url + '/api/account')
      .subscribe((data) => {
        console.log(data);
        expect(data).toBeTruthy()
      }, (err) => {
        console.log(JSON.stringify(err,null, 4));
        expect(err).toBeFalsy()
      })
  })))
});
