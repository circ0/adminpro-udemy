import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModalUploadService } from '../components/modal-upload/modal-upload.service';

import { SettingsService,
          SubirArchivoService,
          SidebarService,
        SharedService,
        UsuarioService,
        HospitalService,
        MedicoService,
        AdminGuard,
        VerificaTokenGuard,
      LoginGuardGuard } from './service.index';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SettingsService,
    SubirArchivoService,
    SidebarService,
    SharedService,
    UsuarioService,
    HospitalService,
    MedicoService,
    AdminGuard,
    LoginGuardGuard,
    VerificaTokenGuard,
    ModalUploadService
  ],
  declarations: []
})
export class ServiceModule { }
