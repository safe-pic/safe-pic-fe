import React, { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';
import {
  SafeAreaView,
  Edge,
} from 'react-native-safe-area-context';

type Props = PropsWithChildren<{
  edges?: Edge[];
}>;

export function Screen({
  children,
  edges = ['top', 'left', 'right'],
}: Props) {
  return (
    <SafeAreaView style={styles.container} edges={edges}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 12,
    paddingRight: 12,
  },
});
