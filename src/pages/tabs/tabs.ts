import { Component } from '@angular/core'
import {FavoritesPage} from "../favorites/favorites";
import {LibraryPage} from "../library/library";

@Component({
  selector: 'page-tabs',
  template: `
  <ion-tabs selectedIndex="1">
    <ion-tab [root]="favouritePage" tabTitle="Favourites" tabIcon="star"></ion-tab>
    <ion-tab [root]="libraryPage" tabTitle="Library" tabIcon="book"></ion-tab>
  </ion-tabs>
  `
})
export class TabsPage {
  favouritePage = FavoritesPage;
  libraryPage = LibraryPage;
}
