import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";
import {HttpEventType,HttpResponse} from "@angular/common/http";
@Component({
  selector: 'input-image',
  templateUrl: './input-image.component.html',
  styleUrls: ['./input-image.component.css']
})
export class InputImageComponent implements OnInit {

  @Input() url: any;
  @Output() onFileUpload: EventEmitter<any> = new EventEmitter();
  @Input() uploadFunction: any;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    //init Image

  }

  getUrl(){
    if(this.url){
      return this.sanitizer.bypassSecurityTrustStyle("#DDD url(" + this.url + ") no-repeat center center / cover");
    }else{
      return this.sanitizer.bypassSecurityTrustStyle("#DDD url(/assets/logos/logo.svg) no-repeat center center / 200%");
    }
  }

  uploadFile(event: any) {
    let readUrl = (input) => {
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.url = e.target['result'];
        }
        reader.readAsDataURL(input.files[0]);
        this.onFileUpload.emit({file:input.files[0]});

        // this.uploadFunction({file: input.files[0]},'597458e3b0852306b830e0a8').subscribe((event) => {
        //   console.log(event);
        //
        //   if (event.type === HttpEventType.UploadProgress) {
        //     // This is an upload progress event. Compute and show the % done:
        //     const percentDone = Math.round(100 * event.loaded / event.total);
        //     console.log(`File is ${percentDone}% uploaded.`);
        //   } else if (event instanceof HttpResponse) {
        //     console.log('File is completely uploaded!');
        //   }
        // })
      }
    }
    readUrl(event.target || event.srcElement);
  }

}
