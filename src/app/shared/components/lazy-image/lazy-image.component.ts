import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-lazy-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lazy-image.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class LazyImageComponent implements OnInit {
  @Input()
  public url!: string;
  @Input()
  public alt: string = '';

  public hasloaded: boolean = false;

  ngOnInit(): void {
    if (!this.url) throw new Error('URL property is required.');
  }

  onLoad() {
    this.hasloaded = true;
  }
}
