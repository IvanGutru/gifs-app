import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SideBarComponent } from './components/side-bar/side-bar.component';

@Component({
  selector: 'shared-component',
  standalone: true,
  imports: [CommonModule, SideBarComponent],
  templateUrl: './shared.component.html',
})
export class SharedComponent {}
