export interface TourSpot {
  id: string;
  name: string;
  description: string;
  imageUrl: string | string[]; // 단일 이미지 또는 이미지 배열
  infoUrl: string;
  estimatedTime: number; // 머무는 시간 (분)
  transportToNext?: {
    method: 'walking' | 'bus' | 'car';
    duration: number; // 이동 시간 (분)
    distance?: string;
  };
}

export interface TourChoice {
  id: string;
  title: string;
  price?: number;
  spots: TourSpot[];
}

export interface TourDay {
  id: string;
  date: string;
  dayOfWeek: string;
  spots?: TourSpot[];
  choices?: TourChoice[];
}

export interface TourScheduleData {
  days: TourDay[];
}
