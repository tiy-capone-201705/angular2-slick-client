import { SlickChatClientPage } from './app.po';

describe('slick-chat-client App', () => {
  let page: SlickChatClientPage;

  beforeEach(() => {
    page = new SlickChatClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
