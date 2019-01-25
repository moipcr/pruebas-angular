import { Injectable } from '@angular/core';
import { DaoFirestore } from '../dao-firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import { EmpresaVOWithID } from 'src/app/classes/EmpresaVOWithID';
import { Observable } from 'rxjs';
import { EmpresaVO } from 'src/app/classes/EmpresaVO';

@Injectable({
  providedIn: 'root'
})
class EmpresasDAOService extends DaoFirestore<any, any> {

  constructor(protected firestore: AngularFirestore) {

    super(firestore, 'Empresas');
  }

}

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {


  empresasList: Observable<EmpresaVOWithID[]>;
  empresa: Observable<EmpresaVOWithID>;

  constructor(private dao: EmpresasDAOService) { }

  getAllEmpresas() {

    this.dao.getAll().subscribe(

      res => this.empresasList = res,
      err => console.log(err),


    );

  }
  getEmpresaByColumn(nameColumn: String, value: String) {

    this.dao.search(nameColumn, value).subscribe(

      res => this.empresasList = res,
      err => console.log(err),


    );
  }

  getEmpresaById(id: String) {

    this.dao.read(id).subscribe(

      res => this.empresa = res,
      err => console.log(err),

    );
  }

  insertEmpresa(empresa: EmpresaVO) {
    this.dao.add(empresa);

  }
}

