import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`Test Case 1`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.coordinate = [0, 0];
    app.rotate = 0;
    app.moveTop();
    expect(app.coordinate).toEqual([0, 1]);
    expect(app.rotate).toEqual(0);
  });

  it(`Test Case 2`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.coordinate = [0, 0];
    app.rotate = 0;
    app.rotateLeft();
    expect(app.coordinate).toEqual([0, 0]);
    expect(app.rotate).toEqual(-90);
  });

  it(`Test Case 3`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.coordinate = [1, 2];
    app.rotate = 90;
    app.moveTop();
    app.moveTop();
    app.rotateLeft();
    app.moveTop();
    expect(app.coordinate).toEqual([3, 3]);
    expect(app.rotate).toEqual(0);
  });
});
