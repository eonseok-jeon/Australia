import type { FlightSegment } from '../types/flight';

export const flightData: FlightSegment[] = [
  {
    title: '출발 (인천 → 브리즈번)',
    flights: [
      {
        id: 'outbound-1',
        flightNumber: 'MU5042',
        departure: {
          airport: 'ICN',
          city: '인천',
          time: '12:55',
          date: '10/31 금',
        },
        arrival: {
          airport: 'PVG',
          city: '상해 푸동',
          time: '13:55',
          date: '10/31 금',
        },
        type: 'departure',
      },
      {
        id: 'outbound-2',
        flightNumber: 'MU715',
        departure: {
          airport: 'PVG',
          city: '상해 푸동',
          time: '21:00',
          date: '10/31 금',
        },
        arrival: {
          airport: 'BNE',
          city: '브리즈번',
          time: '09:00',
          date: '11/01 토',
        },
        type: 'departure',
      },
    ],
  },
  {
    title: '국내선 (브리즈번 → 시드니)',
    flights: [
      {
        id: 'domestic-1',
        flightNumber: 'JQ815',
        departure: {
          airport: 'BNE',
          city: '브리즈번',
          time: '09:40',
          date: '11/04 화',
        },
        arrival: {
          airport: 'SYD',
          city: '시드니',
          time: '12:15',
          date: '11/04 화',
        },
        type: 'domestic',
      },
    ],
  },
  {
    title: '귀국 (시드니 → 인천)',
    flights: [
      {
        id: 'return-1',
        flightNumber: 'MU562',
        departure: {
          airport: 'SYD',
          city: '시드니',
          time: '12:00',
          date: '11/08 토',
        },
        arrival: {
          airport: 'PVG',
          city: '상해 푸동',
          time: '19:30',
          date: '11/08 토',
        },
        type: 'return',
      },
      {
        id: 'return-2',
        flightNumber: 'MU5041',
        departure: {
          airport: 'PVG',
          city: '상해 푸동',
          time: '09:05',
          date: '11/09 일',
        },
        arrival: {
          airport: 'ICN',
          city: '인천',
          time: '11:55',
          date: '11/09 일',
        },
        type: 'return',
      },
    ],
  },
];
