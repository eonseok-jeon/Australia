import {
  Container,
  Paper,
  Title,
  Text,
  Group,
  Badge,
  Stack,
  Center,
  Divider,
  Box,
} from '@mantine/core';
import { IconPlane } from '@tabler/icons-react';
import { flightData } from '../data/flights';
import { FlightSegment } from './FlightSegment';
import { HotelSchedule } from './HotelSchedule';

export function FlightSchedule() {
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
              <Text c='dimmed' size='sm' ta='center'>
                부모님과 함께하는 특별한 여행
              </Text>
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

        <Divider
          my='xl'
          label='항공편 일정'
          labelPosition='center'
          color='blue.3'
        />

        {/* 항공편 세그먼트들 */}
        <Stack gap='xl' mb='xl'>
          {flightData.map((segment, index) => (
            <FlightSegment key={index} segment={segment} />
          ))}
        </Stack>

        <Divider
          my='xl'
          label='숙소 일정'
          labelPosition='center'
          color='indigo.3'
        />

        {/* 숙소 일정 */}
        <HotelSchedule />
      </Container>
    </Box>
  );
}
