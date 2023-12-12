import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SideBarComponent } from '../shared/components/side-bar/side-bar.component';

@Component({
  selector: 'gifs-component',
  standalone: true,
  imports: [CommonModule, SideBarComponent],
  template: '',
})
export class GifsComponent {}
