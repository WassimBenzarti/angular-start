import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {HttpModule} from "@angular/http";
import {APIService} from "./api.service";

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    HttpClientModule
  ],
  providers:[APIService],
  declarations: []
})
export class SharedModule { }
