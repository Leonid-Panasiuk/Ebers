import { NgModule } from '@angular/core';
import {
   MatToolbarModule,
   MatIconModule,
   MatSidenavModule,
   MatButtonModule,
   MatListModule,
   MatBadgeModule,
   MatGridListModule,
   MatCardModule,
   MatMenuModule,
   MatFormFieldModule
} from '@angular/material';

import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
   imports: [
       MatToolbarModule,
       MatIconModule,
       MatSidenavModule,
       MatButtonModule,
       MatListModule,
       MatBadgeModule,
       MatGridListModule,
       MatCardModule,
       MatMenuModule,
       MatFormFieldModule,
       MatTooltipModule
   ],
   exports: [
       MatToolbarModule,
       MatIconModule,
       MatSidenavModule,
       MatButtonModule,
       MatListModule,
       MatBadgeModule,
       MatGridListModule,
       MatCardModule,
       MatMenuModule,
       MatFormFieldModule,
       MatTooltipModule
   ],
})
export class MaterialModule { }