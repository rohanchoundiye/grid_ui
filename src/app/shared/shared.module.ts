import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [TableComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    TableComponent
  ]
})
export class SharedModule { }
