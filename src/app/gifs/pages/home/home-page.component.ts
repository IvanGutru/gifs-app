import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SearchBoxComponent } from '../../components/search-box/search-box.component';
import { CardListComponent } from '../../components/card-list/card-list.component';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'gifs-home-page',
  standalone: true,
  imports: [CommonModule, SearchBoxComponent, CardListComponent],
  templateUrl: './home-page.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class HomePageComponent {
  constructor(private gifsService: GifsService) {}

  get gifs(): Gif[] {
    return this.gifsService.gifList;
  }
}
