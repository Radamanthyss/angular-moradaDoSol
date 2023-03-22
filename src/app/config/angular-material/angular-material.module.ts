import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [],
  exports:[MatToolbarModule,MatIconModule,MatSidenavModule],
  imports: [CommonModule, MatToolbarModule,MatIconModule,MatSidenavModule],
})
export class AngularMaterialModule {}
