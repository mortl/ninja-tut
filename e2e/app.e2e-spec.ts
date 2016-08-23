import { NinjaTutPage } from './app.po';

describe('ninja-tut App', function() {
  let page: NinjaTutPage;

  beforeEach(() => {
    page = new NinjaTutPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
