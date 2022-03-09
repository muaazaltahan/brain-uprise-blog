import { Component } from '@angular/core';
import { faFacebook, faGithub, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  facebook = faFacebook;
  instagram = faInstagram;
  telegram = faTelegram;
  github = faGithub;

}
