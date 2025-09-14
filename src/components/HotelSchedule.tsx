import {
  Paper,
  Group,
  Text,
  Badge,
  Stack,
  ThemeIcon,
  Title,
  Divider,
} from '@mantine/core';
import { IconBed } from '@tabler/icons-react';
import { hotelData } from '../data/hotels';
import { HotelCard } from './HotelCard';

export function HotelSchedule() {
  const totalNights = hotelData.reduce((sum, hotel) => sum + hotel.nights, 0);

  return (
    <Paper p='md' radius='lg' shadow='sm' withBorder>
      {/* 숙소 섹션 헤더 */}
      <Group justify='space-between' mb='md'>
        <Group gap='sm'>
          <ThemeIcon
            size='lg'
            radius='xl'
            variant='gradient'
            gradient={{ from: 'indigo', to: 'purple' }}
          >
            <IconBed size={20} />
          </ThemeIcon>
          <Title order={3} c='indigo'>
            숙소 일정
          </Title>
        </Group>
        <Badge variant='light' color='indigo' size='sm' radius='xl'>
          총 {totalNights}박
        </Badge>
      </Group>

      <Divider my='md' color='indigo.2' />

      {/* 숙소 목록 */}
      <Stack gap='lg'>
        {hotelData.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </Stack>
    </Paper>
  );
}
