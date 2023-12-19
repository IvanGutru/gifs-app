import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';
import { LazyImageComponent } from '../../../shared/components/lazy-image/lazy-image.component';

@Component({
  selector: 'gifs-card',
  standalone: true,
  imports: [CommonModule, LazyImageComponent],
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class CardComponent implements OnInit {
  @Input()
  public gif!: Gif;

  ngOnInit(): void {
    if (!this.gif) throw new Error('Method not implemented.');
  }
}
