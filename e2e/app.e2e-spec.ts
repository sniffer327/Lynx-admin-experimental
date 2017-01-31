import { LynxCmsPage } from './app.po';

describe('lynx-cms App', function() {
  let page: LynxCmsPage;

  beforeEach(() => {
    page = new LynxCmsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
