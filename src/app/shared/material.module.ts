import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  imports: [MatTableModule, MatButtonModule, MatIconModule, MatMenuModule],
  exports: [MatTableModule, MatButtonModule, MatIconModule, MatMenuModule],
})
export class MaterialModule {}
