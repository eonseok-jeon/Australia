import {
  Paper,
  Group,
  Text,
  Badge,
  Stack,
  ThemeIcon,
  Timeline,
  Center,
} from '@mantine/core';
import {
  IconPlaneTilt,
  IconPlaneArrival,
  IconPlaneDeparture,
  IconHome,
  IconClock,
} from '@tabler/icons-react';
import type { Flight } from '../types/flight';

interface FlightCardProps {
  flight: Flight;
}

export function FlightCard({ flight }: FlightCardProps) {
  const getFlightTypeConfig = (type: Flight['type']) => {
    switch (type) {
      case 'departure':
        return {
          color: 'blue',
          gradient: { from: 'blue', to: 'cyan' },
          label: '출발',
          icon: IconPlaneDeparture,
          bgColor: 'blue.0',
        };
      case 'return':
        return {
          color: 'red',
          gradient: { from: 'red', to: 'pink' },
          label: '귀국',
          icon: IconPlaneArrival,
          bgColor: 'red.0',
        };
      case 'domestic':
        return {
          color: 'green',
          gradient: { from: 'green', to: 'lime' },
          label: '국내선',
          icon: IconHome,
          bgColor: 'green.0',
        };
      default:
        return {
          color: 'gray',
          gradient: { from: 'gray', to: 'dark' },
          label: '',
          icon: IconPlaneTilt,
          bgColor: 'gray.0',
        };
    }
  };

  const config = getFlightTypeConfig(flight.type);
  const IconComponent = config.icon;

  return (
    <Paper
      p='md'
      radius='xl'
      shadow='md'
      withBorder
      style={(theme) => ({
        background: `linear-gradient(135deg, ${
          theme.colors[config.color][0]
        } 0%, white 100%)`,
        border: `2px solid ${theme.colors[config.color][2]}`,
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: theme.shadows.xl,
        },
      })}
    >
      {/* 항공편 헤더 */}
      <Group justify='space-between' mb='md'>
        <Group gap='sm'>
          <ThemeIcon
            size='xl'
            radius='xl'
            variant='gradient'
            gradient={config.gradient}
          >
            <IconComponent size={24} />
          </ThemeIcon>
          <div>
            <Text fw={700} size='lg'>
              {flight.flightNumber}
            </Text>
            <Badge
              variant='gradient'
              gradient={config.gradient}
              size='sm'
              radius='xl'
            >
              {config.label}
            </Badge>
          </div>
        </Group>
      </Group>

      {/* 비행 정보 카드 */}
      <Paper p='md' radius='lg' bg='white' withBorder>
        <Timeline active={1} bulletSize={24} lineWidth={3} color={config.color}>
          {/* 출발 정보 */}
          <Timeline.Item
            bullet={
              <ThemeIcon size='sm' variant='light' color='white' radius='xl'>
                <Text size='xs' fw={700}>
                  출
                </Text>
              </ThemeIcon>
            }
            title={
              <Group gap='xs' align='baseline'>
                <Text fw={700} size='xl'>
                  {flight.departure.time}
                </Text>
                <Text c='dimmed' size='sm'>
                  {flight.departure.date}
                </Text>
              </Group>
            }
          >
            <Stack gap={4}>
              <Text fw={600} size='md'>
                {flight.departure.city}
              </Text>
              <Badge variant='light' color='gray' size='xs' radius='sm'>
                {flight.departure.airport}
              </Badge>
            </Stack>
          </Timeline.Item>

          {/* 도착 정보 */}
          <Timeline.Item
            bullet={
              <ThemeIcon size='sm' variant='light' color='white' radius='xl'>
                <Text size='xs' fw={700}>
                  도
                </Text>
              </ThemeIcon>
            }
            title={
              <Group gap='xs' align='baseline'>
                <Text fw={700} size='xl'>
                  {flight.arrival.time}
                </Text>
                <Text c='dimmed' size='sm'>
                  {flight.arrival.date}
                </Text>
              </Group>
            }
          >
            <Stack gap={4}>
              <Text fw={600} size='md'>
                {flight.arrival.city}
              </Text>
              <Badge variant='light' color='gray' size='xs' radius='sm'>
                {flight.arrival.airport}
              </Badge>
            </Stack>
          </Timeline.Item>
        </Timeline>

        {/* 비행시간 표시 */}
        <Center mt='md'>
          <Group gap='xs'>
            <ThemeIcon
              size='sm'
              variant='light'
              color={config.color}
              radius='xl'
            >
              <IconClock size={14} />
            </ThemeIcon>
            <Text size='sm' c='dimmed' fw={500}>
              비행 중
            </Text>
          </Group>
        </Center>
      </Paper>
    </Paper>
  );
}
