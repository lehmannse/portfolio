import {
  GridItem,
  Image,
  Link,
  SimpleGrid,
  Text,
  useBreakpointValue,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link as LinkScroll } from 'react-scroll';

import { useTranslation } from 'react-i18next';
import styles from '../../styles/sections/Landing.module.css';
import { colors } from '../../theme';
import SectionContainer from '../SectionContainer';

const Bio = ({ secondary }) => {
  const normalLinkStyle = { color: secondary };
  const strongLinkStyle = { color: secondary, fontWeight: 'bold' };

  const { t } = useTranslation();

  return (
    <GridItem className={styles.grid}>
      <VStack
        style={{ textAlign: 'justify' }}
        m="auto"
        w="75%"
        spacing="12px"
        pt="5%"
      >
        <Text
          style={{
            fontWeight: 'bold',
            fontStyle: 'italic',
            textAlign: 'center',
          }}
        >
          {t('about.headline')}
        </Text>
        <Text>{t('about.intro')}</Text>
        <Text>
          {t('about.resume1')}{' '}
          <span style={strongLinkStyle}>{t('about.course')}</span>{' '}
          {t('about.resume2')}{' '}
          <strong style={normalLinkStyle}>{t('about.job1')}</strong>{' '}
          {t('about.resume3')}{' '}
          <strong style={normalLinkStyle}>{t('about.job2')}</strong>{' '}
          {t('about.resume4')}
        </Text>
        <Text>
          {t('about.resume5')}{' '}
          <Link href="https://react.dev/" style={strongLinkStyle} isExternal>
            React
          </Link>
          {', '}
          <Link
            href="https://www.scrum.org/"
            style={strongLinkStyle}
            isExternal
          >
            Typescript
          </Link>
          {', '}
          <Link
            href="https://www.typescriptlang.org/"
            style={strongLinkStyle}
            isExternal
          >
            Scrum
          </Link>{' '}
          {t('about.resume6')}
        </Text>
        <LinkScroll
          to="contact"
          spy
          smooth
          offset={-50}
          duration={1500}
          activeClass="active"
          style={{ fontSize: '14px' }}
        >
          <Text
            as="strong"
            className={`${styles.learn}`}
            _hover={{ cursor: 'pointer', color: secondary }}
          >
            {t('about.cta')}
          </Text>
        </LinkScroll>
      </VStack>
    </GridItem>
  );
};

const Headshot = () => (
  <GridItem className={styles.grid}>
    <Image
      m="auto"
      src="/me.jpg"
      alt="Filipe Lehmann"
      zIndex={1}
      className="image"
      style={{ height: '300px', borderRadius: '20px' }}
      onClick={() => {
        window.open('http://linkedin.com/in/filipe-lehmann-pereira/');
      }}
    />
  </GridItem>
);

export default function About() {
  const shouldAlternate = useBreakpointValue({ base: false, md: true });
  const secondary = useColorModeValue(
    colors.secondary.light,
    colors.secondary.dark
  );

  const { t } = useTranslation();

  return (
    <SectionContainer
      id="about"
      name="about"
      headerMt="-5%"
      headerText="Sobre Mim"
      useHeaderStyle
    >
      <SimpleGrid
        pl="10%"
        pt="5%"
        pr="10%"
        spacing={12}
        columns={[1, null, 2]}
        justifyContent="center"
      >
        {shouldAlternate ? <Bio secondary={secondary} /> : <Headshot />}
        {shouldAlternate ? <Headshot /> : <Bio secondary={secondary} />}
      </SimpleGrid>
    </SectionContainer>
  );
}
