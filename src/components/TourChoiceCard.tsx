import {
  Card,
  Text,
  Badge,
  Button,
  Group,
  Stack,
  ThemeIcon,
  Collapse,
  Paper,
} from '@mantine/core';
import {
  IconChevronDown,
  IconChevronUp,
  IconCurrencyWon,
  IconStar,
} from '@tabler/icons-react';
import { useState } from 'react';
import type { TourChoice } from '../types/tour';
import { TourSpotCard } from './TourSpotCard';

interface TourChoiceCardProps {
  choice: TourChoice;
  choiceNumber: number;
}

export function TourChoiceCard({ choice, choiceNumber }: TourChoiceCardProps) {
  const [opened, setOpened] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ko-KR').format(price);
  };

  return (
    <Paper
      shadow='sm'
      radius='lg'
      withBorder
      style={(theme) => ({
        background: `linear-gradient(135deg, ${theme.colors.blue[0]} 0%, white 100%)`,
        border: `2px solid ${theme.colors.blue[2]}`,
      })}
    >
      <Card padding='lg' radius='lg'>
        {/* 선택 헤더 */}
        <Group justify='space-between' mb='md'>
          <Group gap='sm'>
            <ThemeIcon
              size='lg'
              radius='xl'
              variant='gradient'
              gradient={{ from: 'blue', to: 'cyan' }}
            >
              <Text fw={700} size='sm' c='white'>
                {choiceNumber}
              </Text>
            </ThemeIcon>
            <div>
              <Text fw={700} size='lg'>
                선택 {choiceNumber}
              </Text>
              <Text fw={600} size='md' c='blue'>
                {choice.title}
              </Text>
            </div>
          </Group>
          {choice.price && (
            <Badge
              variant='gradient'
              gradient={{ from: 'orange', to: 'red' }}
              size='lg'
              leftSection={<IconCurrencyWon size={14} />}
            >
              {formatPrice(choice.price)}원
            </Badge>
          )}
        </Group>

        {/* 상세 정보 토글 버튼 */}
        <Button
          variant='light'
          fullWidth
          rightSection={
            opened ? <IconChevronUp size={16} /> : <IconChevronDown size={16} />
          }
          onClick={() => setOpened(!opened)}
          radius='lg'
        >
          {opened ? '간단히 보기' : '상세 일정 보기'}
        </Button>

        {/* 상세 일정 */}
        <Collapse in={opened} mt='md'>
          <Stack gap='md'>
            {choice.spots.map((spot, index) => (
              <TourSpotCard
                key={spot.id}
                spot={spot}
                isLast={index === choice.spots.length - 1}
              />
            ))}
          </Stack>
        </Collapse>
      </Card>
    </Paper>
  );
}
