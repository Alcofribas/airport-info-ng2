import { AirportInfoNg2Page } from './app.po';

describe('airport-info-ng2 App', () => {
  let page: AirportInfoNg2Page;

  beforeEach(() => {
    page = new AirportInfoNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
