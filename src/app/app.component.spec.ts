import { AppComponent } from './app.component';
import { HeroService } from './hero.service';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Component } from '@angular/core';
// import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

@Component({
  template: ''
})
class DummyComponent {
}

describe('AppComponent', function () {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let heroServiceStub: any;

  beforeEach(async(() => {
    heroServiceStub = {
    };

    TestBed.configureTestingModule({
      declarations: [ AppComponent, DummyComponent],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'dashboard', component: DummyComponent },
          { path: 'heroes', component: DummyComponent }
         ])
      ],
      providers: [
        {provide: HeroService, useValue: heroServiceStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('should have expected <h1> text', () => {
    fixture.detectChanges();
    const h1 = de.nativeElement;
    expect(h1.innerText).toMatch(comp.title,
      '<h1> should contain the title');
  });

  it('should have <nav> tag', () => {
    fixture.detectChanges();
    const nav = fixture.debugElement.query(By.css('nap')).nativeElement;
    expect(nav).toBeDefined();
  });
});
