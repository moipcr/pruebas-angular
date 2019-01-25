import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class DaoFirestore <T, K> {

constructor(protected firestore: AngularFirestore, protected nameCollection: String) {}

add(item: T) {

  this.firestore.collection(this.nameCollection.toString()).add(item);

}

update(item: T, key: K) {

  this.firestore.collection(this.nameCollection.toString()).doc(key.toString()).update(item);

}

delete(key: K) {
  this.firestore.collection(this.nameCollection.toString()).doc(key.toString()).delete();
}

search(nameColumn: String, value: String): Observable<any> {

   return this.firestore.collection(this.nameCollection.toString(),
                                  ref => ref.where(nameColumn.toString(), '==', value.toString())
                                  ).valueChanges();
}

read(key: K): Observable<any> {
  return this.firestore.collection(this.nameCollection.toString()).doc(key.toString()).valueChanges();
}

getAll(): Observable<any> {

  const empresasCollection: AngularFirestoreCollection =

    this.firestore.collection(this.nameCollection.toString());

    return empresasCollection.snapshotChanges().pipe(map(actions => {

      return actions.map(a => {

        const data = a.payload.doc.data() ;

        data.id = a.payload.doc.id;

        return data;

      });

    }));
}

}


