import { ForgeFrontPage } from './app.po';

describe('forge-front App', () => {
  let page: ForgeFrontPage;

  beforeEach(() => {
    page = new ForgeFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
