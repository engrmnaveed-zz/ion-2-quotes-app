import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {Quote} from "../../data/quote.interface";
import {QuotesService} from "../../services/quote";
import {QuotePage} from "../quote/quote";
import {SettingsService} from "../../services/settings";


@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  quotes: Quote[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public quoteService: QuotesService,
    public modelCtrl: ModalController,
    public settingService: SettingsService
  ) {}

  ionViewWillEnter() {
    this.quotes = this.quoteService.getFavoriteQuotes();
  }

  onViewQuote(quote: Quote) {
    const modal = this.modelCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove:boolean) => {
      if (remove) {
        this.onReomveFromFavourites(quote);
      }
    });
  }

  onReomveFromFavourites(quote: Quote) {
    this.quoteService.removeQuoteFromFavorites(quote);
    // remove the code from the local view copy of the quotes as well
    const position = this.quotes.findIndex((quoteEl: Quote) => {
      return quoteEl.id == quote.id;
    });
    this.quotes.splice(position, 1);
  }

  getBackground() {
    return this.settingService.isAltBackground() ? 'altQuoteBackground' : 'quoteBackground';
  }

}
