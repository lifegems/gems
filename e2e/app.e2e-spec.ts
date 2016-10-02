import { GemsPage } from './app.po';

describe('gems App', function() {
  let page: GemsPage;

  beforeEach(() => {
    page = new GemsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
