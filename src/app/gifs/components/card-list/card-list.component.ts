import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'gifs-card-list',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class CardListComponent {
  @Input()
  public gifs: Gif[] = [];
}

/* 3066581 pants
3066284 pantalon */
