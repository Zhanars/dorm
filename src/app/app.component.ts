import { Component } from '@angular/core';
import { TranslationService } from './translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'АТУ электронды жатақханасы';
  constructor(private translationService: TranslationService) {
    this.translationService.init();
  }
}
