import { Component, OnInit } from '@angular/core';
import { Hospital } from '../../models/hospital.model';
import { HospitalService } from '../../services/service.index';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';

declare var swal: any;

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styles: []
})
export class HospitalesComponent implements OnInit {

  hospitales: Hospital[] = [];
  desde: number = 0;
  cargando: boolean = true;
  totalRegistros: number = 0;

  constructor(
    public _hospitalesServices: HospitalService,
    public _modalUploadService: ModalUploadService
  ) { }

  ngOnInit() {
    this.cargarHospitales();

    this._modalUploadService.notificacion.subscribe( () => this.cargarHospitales() );
  }

  cargarHospitales() {

    this.cargando = true;

    this._hospitalesServices.cargarHosptitales( this.desde )
              .subscribe( hospitales => {

                console.log( hospitales );
                
                this.totalRegistros = this._hospitalesServices.totalHospitales;
                this.hospitales = hospitales;
                this.cargando = false;
  

              });

  }

  buscarHospital( termino: string ) {

    if ( termino.length <= 0 ) {
      this.cargarHospitales();
      return;
    }

    this.cargando = true;
    
    
      this._hospitalesServices.buscarHospital( termino )
      .subscribe( ( hospitales: Hospital[] ) => {

          this.hospitales = hospitales;
          this.totalRegistros = hospitales.length;
          this.cargando = false;

      });

      
  }

  actualizarImagen ( id: string ) {
    this._modalUploadService.mostrarModal( 'hospitales', id );
  }

  guardarHospital( hospital: Hospital ) {

    this._hospitalesServices.actualizarHospital( hospital )
            .subscribe();
  }

  borrarHospital( hospital: Hospital ) {

    this.cargando = true;
    
    swal({

      title: '¿Esta seguro?',
      text: 'Esta a punto de borrar a ' + hospital.nombre,
      icon: 'warning',
      buttons: true,
      dangerMode: true
  
    })
    .then( borrar => {

      if ( borrar ) {

        this._hospitalesServices.borrarHospital( hospital._id )
                        .subscribe( () => {
                          this.cargarHospitales();
                          this.cargando = false;
                        });




      } else {
        this.cargarHospitales();
        this.cargando = false;
      }
    });
  }

  crearHospital() {
    
    swal({
      title: 'Crear Hospital',
      text: 'Nombre del Hospital',
      content: 'input',
      icon: 'info',
      buttons: true,
      dangerMode: true
    })
    .then( ( valor: string ) => {
      if ( !valor || valor.length === 0 ) {
        swal('No creado', 'No se pudo crear el hospital', 'error');
        return ;
      }

     this._hospitalesServices.crearHospital( valor )
             .subscribe( () => this.cargarHospitales());
             
    });
  }

  cambiarDesde( valor: number ) {

    let desde = this.desde + valor;
    console.log( desde );

    if ( desde >= this.totalRegistros ) {
      return;
    }
    if ( desde < 0 ) {
      return;
    }

    this.desde += valor;
    this.cargarHospitales();

  }

}
