import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [],
  exports:[MatToolbarModule,MatIconModule,MatSidenavModule,MatButtonModule],
  imports: [CommonModule, MatToolbarModule,MatIconModule,MatSidenavModule,MatButtonModule],
})
export class AngularMaterialModule {}
