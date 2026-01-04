import React from 'react';
import { Text } from 'react-native';
import { Screen } from '../../shared/components/Screen';
import { useHomeViewModel } from './useHomeViewModel';

export function HomeScreen() {
  const { title } = useHomeViewModel();

  return (
    <Screen>
      <Text>{title}</Text>
    </Screen>
  );
}
