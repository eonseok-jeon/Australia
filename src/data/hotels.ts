import type { Hotel } from '../types/hotel';

export const hotelData: Hotel[] = [
  {
    id: 'brisbane-royal',
    name: '로얄 온 더 파크 호텔',
    city: '브리즈번',
    checkIn: {
      date: '11/01 토',
      time: '13:00',
    },
    checkOut: {
      date: '11/04 화',
      time: '11:00',
    },
    nights: 3,
    websiteUrl:
      'https://www.agoda.com/ko-kr/royal-on-the-park-hotel/hotel/brisbane-au.html?ds=OYXvXM43lanip5oq',
    rating: 4.2,
    amenities: [
      '수영장',
      '피트니스 센터',
      '골프장',
      '볼링장',
      '스파/사우나',
      '조식 뷔페',
      '24시간 프런트 데스크',
    ],
  },
  {
    id: 'sydney-devere',
    name: '드비어 호텔',
    city: '시드니',
    checkIn: {
      date: '11/04 화',
      time: '14:00',
    },
    checkOut: {
      date: '11/08 토',
      time: '10:30',
    },
    nights: 4,
    websiteUrl:
      'https://www.agoda.com/ko-kr/devere-hotel/hotel/sydney-au.html?ds=OYXvXM43lanip5oq',
    rating: 4.1,
    amenities: [
      '아시아식/유럽식 조식',
      '레스토랑',
      '바/라운지',
      '24시간 프런트 데스크',
    ],
  },
];
