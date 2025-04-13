import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Property } from 'src/app/models/property.model';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss'],
})
export class PropertyCardComponent {
  @Input() property!: Property;
  @Output() toggleFavorite = new EventEmitter<boolean>();

  onToggleFavorite() {
    this.property.isFavorite = !this.property.isFavorite;
    this.toggleFavorite.emit(this.property.isFavorite);
  }
}
