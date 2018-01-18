
import {Directive,ElementRef} from "@angular/core";
@Directive({
  selector:'[highlighter]'
})
export class MyhighterDirective{
  constructor(el:ElementRef){
    el.nativeElement.style.backgroundColor='yellow';
  }
}
