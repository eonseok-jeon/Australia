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
  IconHourglass,
} from '@tabler/icons-react';
import type { Flight } from '../types/flight';

interface FlightCardProps {
  flight: Flight;
}

export function FlightCard({ flight }: FlightCardProps) {
  // 비행시간 계산 함수
  const calculateFlightDuration = () => {
    // 날짜와 시간을 파싱
    const parseDateTime = (date: string, time: string) => {
      // date 형식: "10/31 금" 또는 "11/01 토"
      // time 형식: "12:55 PM" 또는 "1:55 PM"

      const [month, dayWithWeekday] = date.split('/');
      const day = dayWithWeekday.split(' ')[0];

      // 12시간 형식을 24시간 형식으로 변환
      const [timeStr, period] = time.split(' ');
      const [hours, minutes] = timeStr.split(':').map(Number);

      let hour24 = hours;
      if (period === 'PM' && hours !== 12) {
        hour24 += 12;
      } else if (period === 'AM' && hours === 12) {
        hour24 = 0;
      }

      // 2024년으로 가정 (실제로는 여행 연도에 맞춰 조정)
      const year = 2024;
      return new Date(
        year,
        parseInt(month) - 1,
        parseInt(day),
        hour24,
        minutes
      );
    };

    const departureDateTime = parseDateTime(
      flight.departure.date,
      flight.departure.time
    );
    const arrivalDateTime = parseDateTime(
      flight.arrival.date,
      flight.arrival.time
    );

    // 도착이 다음날인 경우 처리
    if (arrivalDateTime < departureDateTime) {
      arrivalDateTime.setDate(arrivalDateTime.getDate() + 1);
    }

    const durationMs = arrivalDateTime.getTime() - departureDateTime.getTime();
    const durationHours = Math.floor(durationMs / (1000 * 60 * 60));
    const durationMinutes = Math.floor(
      (durationMs % (1000 * 60 * 60)) / (1000 * 60)
    );

    if (durationHours > 0) {
      return `${durationHours}시간 ${durationMinutes}분`;
    } else {
      return `${durationMinutes}분`;
    }
  };

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
              비행시간: {flight.flightDuration || calculateFlightDuration()}
            </Text>
          </Group>
        </Center>

        {/* 체류 시간 표시 */}
        {flight.layover && (
          <Center mt='xs'>
            <Group gap='xs'>
              <ThemeIcon size='sm' variant='light' color='grape' radius='xl'>
                <IconHourglass size={14} />
              </ThemeIcon>
              <Text size='sm' c='grape' fw={500}>
                체류시간: {flight.layover.duration}
              </Text>
            </Group>
          </Center>
        )}
      </Paper>
    </Paper>
  );
}
