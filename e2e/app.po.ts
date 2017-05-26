import { browser, by, element } from 'protractor';

export class SlickChatClientPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('slick-root h1')).getText();
  }
}
