import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  constructor(private translate: TranslateService) {}

  init() {
    this.translate.setDefaultLang('kz'); // Язык по умолчанию
    this.translate.use('kz'); // Используемый язык
  }

  setLanguage(lang: string) {
    this.translate.use(lang);
  }

  get(key: string): string {
    return this.translate.instant(key);
  }
}
