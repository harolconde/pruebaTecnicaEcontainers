import { Component, OnDestroy } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('devEcon');
    this.meta.addTag(
      {
        name: 'Dashboard heroes',
        content: 'heroes page'
      }
    );
  }
  ngOnDestroy(): void {
    this.meta.removeTag('name=\'page.info\'');
  }
}
