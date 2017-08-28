import {
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Output,
  Renderer2
} from "@angular/core";


@Component({
  selector: 'dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.css']
})
export class DropdownMenuComponent implements OnInit {

  @HostBinding("class.shown") shown:boolean;
  @Input() list:any = [];
  @Input() size:number = 100;

  @Output() onNavigate:EventEmitter<any>= new EventEmitter<any>();
  parent:any;

  constructor(elm:ElementRef,renderer:Renderer2) {
    this.parent = elm.nativeElement.parentNode;
    renderer.setStyle(this.parent,"position",'relative');
  }

  ngOnInit() {
  }

  open(item:any,e?:any){
    if(e){e.preventDefault();}

    if(item['event'] === true){
      if(item['path']){
        this.onNavigate.emit(item['path']);
      }
    }
  }


  toggle(shown = !this.shown){
    setTimeout(()=>this.shown = shown,1);
  }

  @HostListener('document:click',['$event'])
  close(e){
    if(this.shown){
      if(this.parent.contains(e.target)){
        return;
      }else{
        this.shown = false;
      }
    }
  }

  trackByFn(index,item){
    return item.label
  }
}
