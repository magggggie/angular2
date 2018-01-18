import { OulaPage } from './app.po';

describe('oula App', function() {
  let page: OulaPage;

  beforeEach(() => {
    page = new OulaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
