import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './dashboard.routes';
import { CommonModule }      from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [
        RouterModule.forChild(MODULE_ROUTES),
        CommonModule,
        BrowserModule,
    ],
    declarations: [ MODULE_COMPONENTS ]
})

export class DashboardModule{}
