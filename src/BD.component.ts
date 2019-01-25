import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
// tslint:disable-next-line:component-selector
selector: 'BdComponent',
templateUrl: './BD.component.html',
styleUrls: ['./BD.component.css']
})
export class BdComponent implements OnInit {
item: Observable<any[]>;
constructor(private  db: AngularFirestore) {
}

ngOnInit() {
//this.item = this.db.collection('Empresas').valueChanges();
}
}
