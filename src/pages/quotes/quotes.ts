import {Component, OnInit} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {Quote} from '../../data/quote.interface';
import {QuotesService} from "../../services/quote";

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {

  quoteGroup: {category: string, quotes: Quote[], icon: string};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public quoteService: QuotesService) {

  }

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

  onAddToFavourite(quote: Quote) {
      const alert = this.alertCtrl.create({
        title: 'Add Quote',
        subTitle: 'Are you sure?',
        message: 'Are you sure you want to add this quote to your favourites?',
        buttons: [
          {
            text: 'Yes, go ahead',
            handler: () => {
              this.quoteService.addQuoteToFavorites(quote);
            }
          },
          {
            text: 'No, I changed my mind',
            role: 'cancel',
            handler: () => {
              console.log('cancelled');
            }
          }
        ]
      });

      alert.present();
  }

  onRemoveFromFavourite(quote: Quote) {
    this.quoteService.removeQuoteFromFavorites(quote);
  }

  isFavourite(quote: Quote) {
    return this.quoteService.isQuoteFavorite(quote);
  }

}
