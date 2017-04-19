import { TestBed, async } from '@angular/core/testing';
import { By }             from '@angular/platform-browser';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should display the original title', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Airport Info App');
  }));

  it('should render the correct title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const comp = fixture.debugElement.componentInstance;
    const el = fixture.debugElement.query(By.css('h1')).nativeElement;
    const compiled = fixture.debugElement.nativeElement;
    expect(el.textContent).toContain(comp.title);
  }));
});
