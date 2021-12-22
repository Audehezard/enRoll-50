import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  heroName: string;
  addHeroName: boolean;
  crewList =[];

  constructor(
    public afDB: AngularFireDatabase,
    ) {this.getCrewList();}
  addHeroNameToFirebase() {
    this.afDB.list('HeroNames/').push({
      text: this.heroName
    });
    this.showForm();
  }
  showForm() {
    this.addHeroName = !this.addHeroName;
    this.heroName = '';
  }
  getCrewList() {
    this.afDB.list('HeroNames/').snapshotChanges(['child_added','child_removed']).subscribe(actions=> {
      actions.forEach(action =>{
        this.crewList.push({
          key:action.key,
          text:action.payload.exportVal().text
        });
      });
    });
}
}
