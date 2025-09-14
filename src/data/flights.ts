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
          time: '12:55 PM',
          date: '10/31 금',
        },
        arrival: {
          airport: 'PVG',
          city: '상해 푸동',
          time: '1:55 PM',
          date: '10/31 금',
        },
        flightDuration: '2시간',
        type: 'departure',
        layover: {
          airport: 'PVG',
          city: '상해 푸동',
          duration: '7시간 15분',
        },
      },
      {
        id: 'outbound-2',
        flightNumber: 'MU715',
        departure: {
          airport: 'PVG',
          city: '상해 푸동',
          time: '9:10 PM',
          date: '10/31 금',
        },
        arrival: {
          airport: 'BNE',
          city: '브리즈번',
          time: '9:00 AM',
          date: '11/01 토',
        },
        flightDuration: '10시간',
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
          time: '9:40 AM',
          date: '11/04 화',
        },
        arrival: {
          airport: 'SYD',
          city: '시드니',
          time: '12:15 PM',
          date: '11/04 화',
        },
        flightDuration: '2시간 35분',
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
          time: '12:00 PM',
          date: '11/08 토',
        },
        arrival: {
          airport: 'PVG',
          city: '상해 푸동',
          time: '7:30 PM',
          date: '11/08 토',
        },
        flightDuration: '10시간 30분',
        type: 'return',
        layover: {
          airport: 'PVG',
          city: '상해 푸동',
          duration: '13시간 35분',
        },
      },
      {
        id: 'return-2',
        flightNumber: 'MU5041',
        departure: {
          airport: 'PVG',
          city: '상해 푸동',
          time: '9:05 AM',
          date: '11/09 일',
        },
        arrival: {
          airport: 'ICN',
          city: '인천',
          time: '11:55 AM',
          date: '11/09 일',
        },
        flightDuration: '1시간 50분',
        type: 'return',
      },
    ],
  },
];
