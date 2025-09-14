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
  flightDuration?: string;
  type: 'departure' | 'return' | 'domestic';
  layover?: {
    airport: string;
    city: string;
    duration: string;
  };
}

export interface FlightSegment {
  title: string;
  flights: Flight[];
}
