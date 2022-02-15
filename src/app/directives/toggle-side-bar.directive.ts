import { AfterViewChecked, AfterViewInit, Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appToggleSideBar]'
})
export class ToggleSideBarDirective implements AfterViewInit, AfterViewChecked {

  @Input() appToggleSideBar: boolean;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    this.toggleByWindow();
  }

  ngAfterViewChecked(): void {
    this.toggleByWindow();
  }

  toggleSidebar(el: ElementRef, shownRight: string, hiddenRight: string) {
    if(this.appToggleSideBar){
      this.renderer.setStyle(el.nativeElement,"right",shownRight)
    } else {
      this.renderer.setStyle(el.nativeElement,"right",hiddenRight)
    }
  }

  toggleByWindow(){
    if (window.screen.width < 500) {

      this.toggleSidebar(this.el,"0px","100%");

    } else if (window.screen.width < 800 && window.screen.width >= 500) {

      this.toggleSidebar(this.el,"50%","100%");

    } else {

      this.toggleSidebar(this.el,"75%","100%");

    }
  }

}
