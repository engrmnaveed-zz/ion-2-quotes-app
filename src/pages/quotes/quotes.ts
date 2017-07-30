import {Component, OnInit} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {Quote} from '../../data/quote.interface';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {

  quoteGroup: {category: string, quotes: Quote[], icon: string};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController) {

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
              console.log('ok');
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

}
