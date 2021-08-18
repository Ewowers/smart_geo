import {Component} from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  isItemAvailable = false
  menuItems:any[] = [
    {
      id: '1',
      title: 'Земельные торги',
      src: 'land-tenders',
      icon: 'pricetags'
    },
    {
      id: '2',
      title: 'Справочник организаций',
      src: 'handbook-of-organisations',
      icon: 'document-text'
    },
    {
      id: '3',
      title: 'Обращения к врачу',
      src: 'appointment-doctor',
      icon: 'medkit'
    },
    {
      id: '3',
      title: 'Обращения',
      src: 'appeal',
      icon: 'chatbox-ellipses'
    },
    {
      id: '4',
      title: 'Городской транспорт',
      src: 'bus-routes',
      icon: 'bus'
    },
    {
      id: '5',
      title: 'Мероприятия',
      src: 'events',
      icon: 'calendar-number'
    }]

  initializeItems(){
      this.menuItems = [
        {
          id: '1',
          title: 'Земельные торги',
          src: 'land-tenders',
          icon: 'pricetags'
        },
        {
          id: '2',
          title: 'Справочник организаций',
          src: 'handbook-of-organisations',
          icon: 'document-text'
        },
        {
          id: '3',
          title: 'Обращения к врачу',
          src: 'appointment-doctor',
          icon: 'medkit'
        },
        {
          id: '3',
          title: 'Обращения',
          src: 'appeal',
          icon: 'chatbox-ellipses'
        },
        {
          id: '4',
          title: 'Городской транспорт',
          src: 'bus-routes',
          icon: 'bus'
        },
        {
          id: '5',
          title: 'Мероприятия',
          src: 'events',
          icon: 'calendar-number'
        }]
  }

  getItems(ev: any) {
      // Reset items back to all of the items
      this.initializeItems();

      // set val to the value of the searchbar
      const val = ev.target.value;

      // if the value is an empty string don't filter the items
      if (val && val.trim() !== '') {
          this.isItemAvailable = true;
          this.menuItems = this.menuItems.filter((item) => {
              return (item['title'].toLowerCase().indexOf(val.toLowerCase()) > -1);
          })
      } else {
          this.isItemAvailable = false;
      }
  }

}
