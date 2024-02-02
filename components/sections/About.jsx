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

import styles from '../../styles/sections/Landing.module.css';
import { colors } from '../../theme';
import SectionContainer from '../SectionContainer';

const Bio = ({ secondary }) => {
  const normalLinkStyle = { color: secondary };
  const strongLinkStyle = { color: secondary, fontWeight: 'bold' };
  return (
    <GridItem className={styles.grid}>
      <VStack
        style={{ textAlign: 'justify' }}
        m="auto"
        w="75%"
        spacing="12px"
        pt="5%"
      >
        <Text>Quero ser uma ponte entre as pessoas e a tecnologia.</Text>
        <Text>
          Sou um desenvolvedor atleta e poliglota em formação. Um aventureiro
          engajado com a vida e procurando me associar a pessoas e organizações
          que me ajudarão a alcançar metas, desempenho e relacionamentos
          melhores.
        </Text>
        <Text>
          Me formei em{' '}
          <span style={strongLinkStyle}>Engenharia de Computação</span> pelo{' '}
          <Link
            href="https://www.bambui.ifmg.edu.br/portal/"
            style={normalLinkStyle}
            isExternal
          >
            IFMG
          </Link>
          . Em minha trajetória como desenvolvedor fui{' '}
          <strong style={normalLinkStyle}>
            Estagiário em Desenvolvimento Web
          </strong>{' '}
          na{' '}
          <Link
            href="https://www.guaranisistemas.com.br/"
            style={normalLinkStyle}
            isExternal
          >
            Guarani Sistemas
          </Link>{' '}
          e fiz diversos projetos pessoais e acadêmicos.
        </Text>
        <Text>
          Em minha última experiência profissional, numa spin-off da{' '}
          <Link
            href="https://hypeempreendimentos.com.br/"
            style={normalLinkStyle}
            isExternal
          >
            Hype Empreendimentos
          </Link>{' '}
          tive não apenas a oportunidade de aperfeiçoar minhas habilidades em{' '}
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
          e outras ferramentas para desenvolvimento de softwares web, mas também
          a oportunidade de contribuir proativamente na criação de uma cultura
          empresarial positiva, colaborativa e inclusiva
        </Text>
        <LinkScroll
          to="contact"
          spy
          smooth
          offset={-50}
          duration={1500}
          activeClass="active"
          style={{ fontSize: '14px', opacity: 0.7 }}
        >
          <Text
            as="strong"
            className={`${styles.learn}`}
            _hover={{ cursor: 'pointer', color: secondary }}
          >
            Me chame para um projeto.
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
