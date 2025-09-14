import {
  Paper,
  Group,
  Text,
  Badge,
  Stack,
  ThemeIcon,
  Button,
  Rating,
  Divider,
  Anchor,
  Pill,
  Card,
  Image,
  Flex,
} from '@mantine/core';
import {
  IconBed,
  IconCalendarEvent,
  IconClock,
  IconStar,
  IconMapPin,
  IconExternalLink,
  IconLogin,
  IconLogout,
} from '@tabler/icons-react';
import type { Hotel } from '../types/hotel';

interface HotelCardProps {
  hotel: Hotel;
}

export function HotelCard({ hotel }: HotelCardProps) {
  const getCityColor = (city: string) => {
    switch (city) {
      case '브리즈번':
        return {
          color: 'orange',
          gradient: { from: 'orange', to: 'yellow' },
        };
      case '시드니':
        return {
          color: 'teal',
          gradient: { from: 'teal', to: 'blue' },
        };
      default:
        return {
          color: 'gray',
          gradient: { from: 'gray', to: 'dark' },
        };
    }
  };

  const config = getCityColor(hotel.city);

  return (
    <Card
      shadow='lg'
      padding='lg'
      radius='xl'
      withBorder
      style={(theme) => ({
        background: `linear-gradient(135deg, ${
          theme.colors[config.color][0]
        } 0%, white 100%)`,
        border: `2px solid ${theme.colors[config.color][2]}`,
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: theme.shadows.xl,
        },
      })}
    >
      {/* 호텔 헤더 */}
      <Group justify='space-between' mb='md'>
        <Group gap='sm'>
          <ThemeIcon
            size='xl'
            radius='xl'
            variant='gradient'
            gradient={config.gradient}
          >
            <IconBed size={24} />
          </ThemeIcon>
          <div>
            <Text fw={700} size='lg'>
              {hotel.name}
            </Text>
            <Group gap={4} align='center'>
              <IconMapPin size={14} color='#868e96' />
              <Text c='dimmed' size='sm'>
                {hotel.city}
              </Text>
              {hotel.rating && (
                <>
                  <Text c='dimmed' size='sm'>
                    •
                  </Text>
                  <Group gap={2} align='center'>
                    <IconStar size={14} fill='#ffd43b' color='#ffd43b' />
                    <Text c='dimmed' size='sm'>
                      {hotel.rating}
                    </Text>
                  </Group>
                </>
              )}
            </Group>
          </div>
        </Group>
        <Badge
          variant='gradient'
          gradient={config.gradient}
          size='sm'
          radius='xl'
        >
          {hotel.nights}박
        </Badge>
      </Group>

      {/* 체크인/체크아웃 정보 */}
      <Paper p='md' radius='lg' bg='white' withBorder mb='md'>
        <Group grow>
          {/* 체크인 */}
          <Stack gap={8}>
            <Group gap={6} align='center'>
              <ThemeIcon size='sm' variant='light' color='green' radius='xl'>
                <IconLogin size={14} />
              </ThemeIcon>
              <Text size='sm' fw={600} c='green'>
                체크인
              </Text>
            </Group>
            <Text fw={700} size='lg'>
              {hotel.checkIn.time}
            </Text>
            <Text c='dimmed' size='sm'>
              {hotel.checkIn.date}
            </Text>
          </Stack>

          {/* 체크아웃 */}
          <Stack gap={8}>
            <Group gap={6} align='center'>
              <ThemeIcon size='sm' variant='light' color='red' radius='xl'>
                <IconLogout size={14} />
              </ThemeIcon>
              <Text size='sm' fw={600} c='red'>
                체크아웃
              </Text>
            </Group>
            <Text fw={700} size='lg'>
              {hotel.checkOut.time}
            </Text>
            <Text c='dimmed' size='sm'>
              {hotel.checkOut.date}
            </Text>
          </Stack>
        </Group>
      </Paper>

      {/* 편의시설 */}
      {hotel.amenities && hotel.amenities.length > 0 && (
        <Stack gap='xs' mb='md'>
          <Text size='sm' fw={600} c='dimmed'>
            편의시설
          </Text>
          <Flex gap={6} wrap='wrap'>
            {hotel.amenities.map((amenity, index) => (
              <Pill key={index} size='xs' variant='light' color={config.color}>
                {amenity}
              </Pill>
            ))}
          </Flex>
        </Stack>
      )}

      {/* 예약 사이트 링크 */}
      <Button
        component='a'
        href={hotel.websiteUrl}
        target='_blank'
        rel='noopener noreferrer'
        variant='gradient'
        gradient={config.gradient}
        fullWidth
        radius='lg'
        rightSection={<IconExternalLink size={16} />}
      >
        Agoda에서 보기
      </Button>
    </Card>
  );
}
