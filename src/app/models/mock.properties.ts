import { Property } from './property.model';

export const MOCK_PROPERTIES: Property[] = [
  {
    id: 1,
    title: 'Tágas családi ház Budán',
    description: 'Gyönyörű kilátás, nagy kerttel.',
    price: 95000000,
    size: 120,
    rooms: 4,
    images: ['assets/img/house1.jpg'],
    location: 'Budapest, II. kerület',
    isFavorite: false,
  },
  {
    id: 2,
    title: 'Belvárosi lakás',
    description: 'Közel a metróhoz és a boltokhoz.',
    price: 45000000,
    size: 55,
    rooms: 2,
    images: ['assets/img/flat1.jpg'],
    location: 'Budapest, V. kerület',
    isFavorite: false,
  },
];
