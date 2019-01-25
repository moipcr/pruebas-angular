import { Component, OnInit } from '@angular/core';
import { EmpresasService } from 'src/app/EmpresasDAO.service';
import { EmpresaVO } from './app/classes/EmpresaVO';
@Component({
// tslint:disable-next-line:component-selector
selector: 'ViewempresasComponent',
templateUrl: './ViewEmpresas.component.html',
styleUrls: ['./ViewEmpresas.component.css']
})
export class ViewempresasComponent implements OnInit {

constructor(public service: EmpresasService) {
}
empresa: EmpresaVO;
ngOnInit() {
this.service.getAllEmpresas();
}


insertar(nombre: string) {
 this.empresa = {nombre: nombre , urlLogo: '', numEmpleados: 1, CIF: '1234'};

 this.service.insertEmpresa(this.empresa);
}
}
