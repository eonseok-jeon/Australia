import {
  Container,
  Paper,
  Title,
  Text,
  Group,
  Badge,
  Stack,
  Center,
  Box,
  Tabs,
} from '@mantine/core';
import { IconPlane, IconBed, IconMapPin } from '@tabler/icons-react';
import { flightData } from '../data/flights';
import { FlightSegment } from './FlightSegment';
import { HotelSchedule } from './HotelSchedule';
import { TourSchedule } from './TourSchedule';

export function TravelSchedule() {
  return (
    <Box
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f0f9ff 0%, #e0e7ff 100%)',
      }}
    >
      <Container size='sm' py='xl'>
        {/* 헤더 */}
        <Center mb='xl'>
          <Paper
            radius='xl'
            p='xl'
            shadow='lg'
            withBorder
            style={{
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
          >
            <Stack align='center' gap='md'>
              <IconPlane size={48} color='#1c7ed6' />
              <Title
                order={1}
                size='h2'
                style={{
                  background: 'linear-gradient(45deg, #1c7ed6, #9775fa)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                호주 여행
              </Title>
              <Group gap='xs'>
                <Badge variant='light' color='blue' size='sm'>
                  2025.10.31 - 11.09
                </Badge>
                <Text c='dimmed' size='xs'>
                  •
                </Text>
                <Badge variant='light' color='grape' size='sm'>
                  7박 10일
                </Badge>
              </Group>
            </Stack>
          </Paper>
        </Center>

        {/* 탭 네비게이션 */}
        <Paper
          p='md'
          radius='xl'
          shadow='sm'
          withBorder
          style={{
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            marginTop: '2rem',
          }}
        >
          <Tabs
            defaultValue='flights'
            variant='pills'
            radius='xl'
            color='blue'
            styles={{
              list: {
                justifyContent: 'center',
                gap: '8px',
                background: 'rgba(248, 250, 252, 0.5)',
                padding: '8px',
                borderRadius: '12px',
              },
              tab: {
                fontWeight: 600,
                fontSize: '14px',
                padding: '12px 24px',
                transition: 'all 0.3s ease',
                border: '1px solid transparent',
                '&:hover': {
                  transform: 'translateY(-1px)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                },
                '&[data-active]': {
                  background: 'linear-gradient(45deg, #1c7ed6, #9775fa)',
                  border: 'none',
                  boxShadow: '0 4px 12px rgba(28, 126, 214, 0.3)',
                  transform: 'translateY(-1px)',
                },
              },
            }}
          >
            <Tabs.List>
              <Tabs.Tab value='flights' leftSection={<IconPlane size={18} />}>
                항공편 일정
              </Tabs.Tab>
              <Tabs.Tab value='hotels' leftSection={<IconBed size={18} />}>
                숙소 일정
              </Tabs.Tab>
              <Tabs.Tab value='tours' leftSection={<IconMapPin size={18} />}>
                투어 일정
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value='flights' pt='xl'>
              <Stack gap='xl'>
                {flightData.map((segment, index) => (
                  <FlightSegment key={index} segment={segment} />
                ))}
              </Stack>
            </Tabs.Panel>

            <Tabs.Panel value='hotels' pt='xl'>
              <HotelSchedule />
            </Tabs.Panel>

            <Tabs.Panel value='tours' pt='xl'>
              <TourSchedule />
            </Tabs.Panel>
          </Tabs>
        </Paper>
      </Container>
    </Box>
  );
}
