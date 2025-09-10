import { Flex, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { BsChevronDown } from 'react-icons/bs';
import { Link } from 'react-scroll';

import links from '../../data/footerLinks';
import styles from '../../styles/sections/Landing.module.css';
import { colors } from '../../theme';
import LinkIconBar from '../LinkIconBar';
import SectionContainer from '../SectionContainer';

export default function Landing() {
  const primary = useColorModeValue(colors.primary.dark, colors.primary.light);
  const secondary = useColorModeValue(
    colors.secondary.light,
    colors.secondary.dark
  );

  const { t } = useTranslation();

  const header = (
    <motion.div
      className={styles.center}
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h1 style={{ color: primary }}>
        {t('landing.intro')}{' '}
        <strong style={{ color: secondary }}>{t('landing.job')}</strong>
      </h1>
    </motion.div>
  );

  return (
    <SectionContainer
      id="landing"
      name="landing"
      headerText={header}
      style={{ height: '100vh' }}
    >
      {/* bottom bar */}
      <Flex
        gap={4}
        flexDir="column"
        style={{
          position: 'absolute',
          bottom: '2rem',
          // left: '50%',
          // transform: 'translateX(-50%)',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <LinkIconBar links={links} />
        <Link activeClass="active" to="about" spy smooth>
          <Text as="strong" _hover={{ color: secondary, cursor: 'pointer' }}>
            {t('landing.more')}
          </Text>
          <VStack mt={2}>
            <BsChevronDown />
          </VStack>
        </Link>
      </Flex>
    </SectionContainer>
  );
}
