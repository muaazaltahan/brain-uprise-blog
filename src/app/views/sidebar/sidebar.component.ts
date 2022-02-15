import { Component, Input } from '@angular/core';
import { faFacebook, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  @Input() show: boolean;

  instagram = faInstagram;
  facebook = faFacebook;
  telegram = faTelegram;

}
