import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { FullComponent } from './full/full.component';

@NgModule({
    declarations: [
        FullComponent,
        SidebarComponent,
        HeaderComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
    ],
    exports: [

    ],
})
export class SharedModule { }