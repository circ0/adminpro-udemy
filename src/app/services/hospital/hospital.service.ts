import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/config';
import { HttpClient } from '@angular/common/http';
import { Hospital } from '../../models/hospital.model';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable()
export class HospitalService {

  
  totalHospitales: number = 0;

  constructor(
    public http: HttpClient,
    public usuarioService: UsuarioService
  ) { }

  cargarHosptitales( desde: number = 0 ) {

    let url = URL_SERVICIOS + '/hospital?desde=' + desde;

    return this.http.get( url )
                .map( ( resp: any ) => {


                  this.totalHospitales = resp.total;
                  return resp.hospitales;

                });
   }

   ObtenerHospital( id: string ) {

      let url = URL_SERVICIOS + '/hospital/' + id;

      return this.http.get( url )
                  .map( ( resp: any ) => resp.hospital );
   }

   borrarHospital( id: string ) {

      let url = URL_SERVICIOS + '/hospital/' + id;

      if ( !this.usuarioService.estaLogueado() ) {

          return;
        
      }
      
      url += '?token=' + this.usuarioService.token;
      return this.http.delete( url )
                    .map( resp => swal( 'Hosptial Borrado', 'Eliminado correctamente', 'success' ) );
   }

   crearHospital( nombre: string ) {

       let hospital = new Hospital( nombre );

      let url = URL_SERVICIOS + '/hospital';
    if ( !this.usuarioService.estaLogueado() ) {

        return;
      
    }
    
    url += '?token=' + this.usuarioService.token;
  
      return this.http.post( url, hospital )
                .map( (resp: any) => {
                  
                  swal('Hospital creado', hospital.nombre, 'success');
                  return resp.hospital;
                });

   }

   buscarHospital( termino: string ) {

      let url = URL_SERVICIOS + '/busqueda/coleccion/hospitales/' + termino;
  
      return this.http.get( url )
                  .map( (resp: any) => resp.hospitales );

   }

   actualizarHospital( hospital: Hospital ) {

      let url = URL_SERVICIOS + '/hospital/' + hospital._id;

      if ( !this.usuarioService.estaLogueado() ) {

        return;
      
      }
    
    url += '?token=' + this.usuarioService.token;
      
      
  
      return this.http.put( url, hospital )
                .map( ( resp: any) => {

                  swal('Hospital actualizado', hospital.nombre, 'success' );
                  return true;
                });

   }
}
