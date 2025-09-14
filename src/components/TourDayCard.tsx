import {
  Paper,
  Text,
  Group,
  Stack,
  ThemeIcon,
  Badge,
  Divider,
} from '@mantine/core';
import { IconCalendarEvent, IconMapPin } from '@tabler/icons-react';
import type { TourDay } from '../types/tour';
import { TourSpotCard } from './TourSpotCard';
import { TourChoiceCard } from './TourChoiceCard';

interface TourDayCardProps {
  day: TourDay;
}

export function TourDayCard({ day }: TourDayCardProps) {
  const getDayColor = (dayOfWeek: string) => {
    switch (dayOfWeek) {
      case '토':
      case '일':
        return { color: 'red', gradient: { from: 'red', to: 'pink' } };
      default:
        return { color: 'blue', gradient: { from: 'blue', to: 'cyan' } };
    }
  };

  const config = getDayColor(day.dayOfWeek);

  const totalSpots = day.spots ? day.spots.length : 0;
  const totalChoices = day.choices ? day.choices.length : 0;

  return (
    <Paper
      shadow='lg'
      radius='xl'
      withBorder
      p='lg'
      style={(theme) => ({
        background: `linear-gradient(135deg, ${
          theme.colors[config.color][0]
        } 0%, white 100%)`,
        border: `2px solid ${theme.colors[config.color][2]}`,
      })}
    >
      {/* 날짜 헤더 */}
      <Group justify='space-between' mb='lg'>
        <Group gap='md'>
          <ThemeIcon
            size='xl'
            radius='xl'
            variant='gradient'
            gradient={config.gradient}
          >
            <IconCalendarEvent size={24} />
          </ThemeIcon>
          <div>
            <Text fw={700} size='xl'>
              {day.date} {day.dayOfWeek}요일
            </Text>
            <Group gap='xs' mt={4}>
              <IconMapPin size={16} />
              <Text c='dimmed' size='sm'>
                {totalSpots > 0 && `${totalSpots}개 장소`}
                {totalSpots > 0 && totalChoices > 0 && ' • '}
                {totalChoices > 0 && `${totalChoices}개 선택지`}
              </Text>
            </Group>
          </div>
        </Group>
        <Badge variant='light' color={config.color} size='lg' radius='xl'>
          Day {parseInt(day.date.split('/')[1])}
        </Badge>
      </Group>

      <Divider my='md' color={`${config.color}.2`} />

      {/* 일반 스팟들 */}
      {day.spots && day.spots.length > 0 && (
        <Stack gap='lg' mb={day.choices ? 'xl' : 0}>
          {day.spots.map((spot, index) => (
            <TourSpotCard
              key={spot.id}
              spot={spot}
              isLast={index === day.spots.length - 1}
            />
          ))}
        </Stack>
      )}

      {/* 선택지들 */}
      {day.choices && day.choices.length > 0 && (
        <Stack gap='lg'>
          <Text fw={600} size='lg' c={config.color} ta='center'>
            🤔 오늘의 선택지
          </Text>
          {day.choices.map((choice, index) => (
            <TourChoiceCard
              key={choice.id}
              choice={choice}
              choiceNumber={index + 1}
            />
          ))}
        </Stack>
      )}
    </Paper>
  );
}
