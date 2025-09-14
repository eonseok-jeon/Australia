import { Paper, Group, Text, Badge, Stack, ThemeIcon } from '@mantine/core';
import {
  IconPlaneTilt,
  IconPlaneArrival,
  IconPlaneDeparture,
  IconHome,
} from '@tabler/icons-react';
import type { FlightSegment as FlightSegmentType } from '../types/flight';
import { FlightCard } from './FlightCard';

interface FlightSegmentProps {
  segment: FlightSegmentType;
}

export function FlightSegment({ segment }: FlightSegmentProps) {
  const getSegmentConfig = (title: string) => {
    if (title.includes('출발')) {
      return {
        icon: IconPlaneDeparture,
        color: 'blue',
        gradient: { from: 'blue', to: 'cyan' },
      };
    }
    if (title.includes('국내선')) {
      return {
        icon: IconHome,
        color: 'green',
        gradient: { from: 'green', to: 'lime' },
      };
    }
    if (title.includes('귀국')) {
      return {
        icon: IconPlaneArrival,
        color: 'red',
        gradient: { from: 'red', to: 'pink' },
      };
    }
    return {
      icon: IconPlaneTilt,
      color: 'gray',
      gradient: { from: 'gray', to: 'dark' },
    };
  };

  const config = getSegmentConfig(segment.title);
  const IconComponent = config.icon;

  return (
    <Paper p='md' radius='lg' shadow='sm' withBorder>
      {/* 세그먼트 헤더 */}
      <Group justify='space-between' mb='md'>
        <Group gap='sm'>
          <ThemeIcon
            size='lg'
            radius='xl'
            variant='gradient'
            gradient={config.gradient}
          >
            <IconComponent size={20} />
          </ThemeIcon>
          <div>
            <Text fw={600} size='lg' c={config.color}>
              {segment.title}
            </Text>
          </div>
        </Group>
        <Badge variant='light' color={config.color} size='sm' radius='xl'>
          {segment.flights.length}개 항공편
        </Badge>
      </Group>

      {/* 항공편 목록 */}
      <Stack gap='md'>
        {segment.flights.map((flight) => (
          <FlightCard key={flight.id} flight={flight} />
        ))}
      </Stack>
    </Paper>
  );
}
