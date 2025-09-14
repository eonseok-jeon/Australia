import {
  Card,
  Image,
  Text,
  Button,
  Group,
  Stack,
  ThemeIcon,
  Box,
  ActionIcon,
} from '@mantine/core';
import {
  IconWalk,
  IconBus,
  IconCar,
  IconExternalLink,
  IconMapPin,
  IconChevronLeft,
  IconChevronRight,
  IconPhoto,
} from '@tabler/icons-react';
import { useState } from 'react';
import type { TourSpot } from '../types/tour';

interface TourSpotCardProps {
  spot: TourSpot;
  isLast?: boolean;
}

export function TourSpotCard({ spot, isLast = false }: TourSpotCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 이미지 배열 처리
  const images = Array.isArray(spot.imageUrl) ? spot.imageUrl : [spot.imageUrl];
  const hasMultipleImages = images.length > 1;

  // 이미지 네비게이션
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getTransportIcon = (method: string) => {
    switch (method) {
      case 'walking':
        return IconWalk;
      case 'bus':
        return IconBus;
      case 'car':
        return IconCar;
      default:
        return IconWalk;
    }
  };

  const getTransportColor = (method: string) => {
    switch (method) {
      case 'walking':
        return 'green';
      case 'bus':
        return 'blue';
      case 'car':
        return 'orange';
      default:
        return 'gray';
    }
  };

  const formatTime = (minutes: number) => {
    if (minutes < 60) {
      return `${minutes}분`;
    }
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return remainingMinutes > 0
      ? `${hours}시간 ${remainingMinutes}분`
      : `${hours}시간`;
  };

  return (
    <Box>
      <Card shadow='md' padding='lg' radius='xl' withBorder>
        {/* 이미지 갤러리 */}
        <Card.Section style={{ position: 'relative' }}>
          <Image
            src={images[currentImageIndex]}
            height={200}
            alt={`${spot.name} - 이미지 ${currentImageIndex + 1}`}
            fallbackSrc='https://via.placeholder.com/400x200?text=Image+Not+Available'
          />

          {/* 여러 이미지가 있을 때만 갤러리 컨트롤 표시 */}
          {hasMultipleImages && (
            <>
              {/* 이전/다음 버튼 */}
              <ActionIcon
                variant='filled'
                color='rgba(0, 0, 0, 0.5)'
                style={{
                  position: 'absolute',
                  left: 8,
                  top: '50%',
                  transform: 'translateY(-50%)',
                }}
                onClick={prevImage}
              >
                <IconChevronLeft size={16} />
              </ActionIcon>

              <ActionIcon
                variant='filled'
                color='rgba(0, 0, 0, 0.5)'
                style={{
                  position: 'absolute',
                  right: 8,
                  top: '50%',
                  transform: 'translateY(-50%)',
                }}
                onClick={nextImage}
              >
                <IconChevronRight size={16} />
              </ActionIcon>

              {/* 이미지 인디케이터 */}
              <Box
                style={{
                  position: 'absolute',
                  bottom: 8,
                  right: 8,
                  background: 'rgba(0, 0, 0, 0.7)',
                  color: 'white',
                  padding: '4px 8px',
                  borderRadius: '12px',
                  fontSize: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <IconPhoto size={12} />
                {currentImageIndex + 1} / {images.length}
              </Box>

              {/* 도트 인디케이터 */}
              <Group
                gap={4}
                justify='center'
                style={{
                  position: 'absolute',
                  bottom: 8,
                  left: '50%',
                  transform: 'translateX(-50%)',
                }}
              >
                {images.map((_, index) => (
                  <Box
                    key={index}
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      backgroundColor:
                        index === currentImageIndex
                          ? 'white'
                          : 'rgba(255, 255, 255, 0.5)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </Group>
            </>
          )}
        </Card.Section>

        {/* 컨텐츠 */}
        <Stack gap='md' mt='md'>
          {/* 제목과 시간 */}
          <Group justify='space-between' align='start'>
            <Box flex={1}>
              <Text fw={700} size='lg' lineClamp={2}>
                {spot.name}
              </Text>
              <Group gap='xs' mt={4}>
                <ThemeIcon size='sm' variant='light' color='blue'>
                  <IconMapPin size={14} />
                </ThemeIcon>
                <Text c='dimmed' size='sm'>
                  방문 예정지
                </Text>
              </Group>
            </Box>
            {/* <Badge
              variant='light'
              color='blue'
              size='sm'
              leftSection={<IconClock size={12} />}
            >
              {formatTime(spot.estimatedTime)}
            </Badge> */}
          </Group>

          {/* 설명 */}
          <Text size='sm' c='dimmed' lineClamp={3}>
            {spot.description}
          </Text>

          {/* 정보 링크 버튼 */}
          <Button
            component='a'
            href={spot.infoUrl}
            target='_blank'
            rel='noopener noreferrer'
            variant='light'
            fullWidth
            radius='lg'
            rightSection={<IconExternalLink size={16} />}
          >
            자세한 정보 보기
          </Button>
        </Stack>
      </Card>

      {/* 이동 정보 */}
      {!isLast && spot.transportToNext && (
        <Box ta='center' py='lg'>
          <Stack align='center' gap='xs'>
            <ThemeIcon
              size='lg'
              radius='xl'
              variant='light'
              color={getTransportColor(spot.transportToNext.method)}
            >
              {(() => {
                const IconComponent = getTransportIcon(
                  spot.transportToNext.method
                );
                return <IconComponent size={20} />;
              })()}
            </ThemeIcon>
            <Stack align='center' gap={2}>
              <Text
                size='sm'
                fw={600}
                c={getTransportColor(spot.transportToNext.method)}
              >
                {spot.transportToNext.method === 'walking' && '도보'}
                {spot.transportToNext.method === 'bus' && '버스'}
                {spot.transportToNext.method === 'car' && '자동차'}
              </Text>
              <Text size='xs' c='dimmed'>
                {formatTime(spot.transportToNext.duration)}
                {spot.transportToNext.distance &&
                  ` • ${spot.transportToNext.distance}`}
              </Text>
            </Stack>
          </Stack>
        </Box>
      )}
    </Box>
  );
}
