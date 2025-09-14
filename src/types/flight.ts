export interface Flight {
  id: string;
  flightNumber: string;
  departure: {
    airport: string;
    city: string;
    time: string;
    date: string;
  };
  arrival: {
    airport: string;
    city: string;
    time: string;
    date: string;
  };
  duration?: string;
  type: 'departure' | 'return' | 'domestic';
}

export interface FlightSegment {
  title: string;
  flights: Flight[];
}
