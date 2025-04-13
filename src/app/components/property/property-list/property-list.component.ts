import { Component } from '@angular/core';
import { Property } from 'src/app/models/property.model';
import { MOCK_PROPERTIES } from 'src/app/models/mock-properties';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss'],
})
export class PropertyListComponent {
  properties: Property[] = MOCK_PROPERTIES;
}
