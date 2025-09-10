import { Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

import styles from '../styles/components/SectionContainer.module.css';

export default function SectionContainer({
  children,
  headerMt = '2%',
  headerText = '',
  useHeaderStyle = false,
  ...props
}) {
  const color = useColorModeValue('secondary.light', 'secondary.dark');
  return (
    <div className={styles.container} {...props}>
      <div className={styles.column}>
        <Text
          as="h1"
          color={color}
          mt={headerMt}
          pb={12}
          className={useHeaderStyle ? styles.header : ''}
        >
          {headerText}
        </Text>
        {children}
      </div>
    </div>
  );
}
