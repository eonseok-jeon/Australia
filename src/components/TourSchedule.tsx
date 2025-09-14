import {
  Paper,
  Group,
  Text,
  Badge,
  Stack,
  ThemeIcon,
  Title,
  Divider,
  Box,
} from '@mantine/core';
import { IconMapPin, IconCalendarStats } from '@tabler/icons-react';
import { tourData } from '../data/tours';
import { TourDayCard } from './TourDayCard';

export function TourSchedule() {
  const totalDays = tourData.days.length - 1;
  const totalSpots = tourData.days.reduce((total, day) => {
    const spotsCount = day.spots ? day.spots.length : 0;
    const choicesSpots = day.choices
      ? day.choices.reduce(
          (choiceTotal, choice) => choiceTotal + choice.spots.length,
          0
        )
      : 0;
    return total + spotsCount + choicesSpots;
  }, 0);

  return (
    <Box>
      {/* 투어 섹션 헤더 */}
      <Paper p='md' radius='lg' shadow='sm' withBorder mb='xl'>
        <Group justify='space-between' mb='md'>
          <Group gap='sm'>
            <ThemeIcon
              size='lg'
              radius='xl'
              variant='gradient'
              gradient={{ from: 'violet', to: 'grape' }}
            >
              <IconMapPin size={20} />
            </ThemeIcon>
            <Title order={3} c='violet'>
              투어 일정
            </Title>
          </Group>
          <Group gap='xs'>
            <Badge variant='light' color='violet' size='sm' radius='xl'>
              {totalDays}일 일정
            </Badge>
            <Badge variant='light' color='grape' size='sm' radius='xl'>
              {totalSpots}개+ 장소
            </Badge>
          </Group>
        </Group>

        <Divider my='md' color='violet.2' />

        {/* 투어 요약 정보 */}
        <Group gap='lg' style={{ textAlign: 'center' }}>
          <Stack align='center' gap={4}>
            <ThemeIcon size='md' variant='light' color='blue' radius='xl'>
              <IconCalendarStats size={16} />
            </ThemeIcon>
            <Text size='xs' c='dimmed'>
              브리즈번
            </Text>
            <Text fw={600} size='sm'>
              3일
            </Text>
          </Stack>
          <Stack align='center' gap={4}>
            <ThemeIcon size='md' variant='light' color='teal' radius='xl'>
              <IconCalendarStats size={16} />
            </ThemeIcon>
            <Text size='xs' c='dimmed'>
              시드니
            </Text>
            <Text fw={600} size='sm'>
              4일
            </Text>
          </Stack>
          <Stack align='center' gap={4}>
            <ThemeIcon size='md' variant='light' color='orange' radius='xl'>
              <IconMapPin size={16} />
            </ThemeIcon>
            <Text size='xs' c='dimmed'>
              특별 투어
            </Text>
            <Text fw={600} size='sm'>
              (2일)
            </Text>
          </Stack>
        </Group>
      </Paper>

      {/* 일별 투어 목록 */}
      <Stack gap='xl'>
        {tourData.days.map((day) => (
          <TourDayCard key={day.id} day={day} />
        ))}
      </Stack>
    </Box>
  );
}
