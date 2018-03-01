import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';

import { UsersListComponent } from '../users/users-list/users-list.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  declarations: [UsersListComponent],
  exports: [UsersListComponent]
})
export class UsersModule { }
