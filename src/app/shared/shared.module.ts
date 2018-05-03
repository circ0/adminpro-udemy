import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { HeaderComponent } from './header/header.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { SidebarComponent } from './sidebar/sidebar.component';

// Pipes
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        PipesModule
    ],
    declarations: [
        BreadcrumbComponent,
        HeaderComponent,
        NopagefoundComponent,
        SidebarComponent
    ],
    exports: [
        BreadcrumbComponent,
        HeaderComponent,
        NopagefoundComponent,
        SidebarComponent
    ]
})

export class SharedModule { }