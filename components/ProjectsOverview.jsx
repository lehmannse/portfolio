import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { colors } from '../theme';
import LinkIconBar from './LinkIconBar';
import Tech from './Tech';

const Card = ({ name, subtitle, description, links }) => {
  const bg = useColorModeValue(colors.bg.light, colors.bg.dark);
  const shadowColor = useColorModeValue(
    'rgba(0, 0, 0, 0.1)',
    'rgba(59, 130, 246, 0.15)'
  );
  const hoverShadowColor = useColorModeValue(
    'rgba(0, 0, 0, 0.15)',
    'rgba(59, 130, 246, 0.25)'
  );

  return (
    <Flex
      direction="column"
      p={6}
      gap={4}
      bgColor={bg}
      borderRadius="lg"
      borderWidth={bg === colors.bg.light ? '1px' : ''}
      borderColor={useColorModeValue('gray.200', 'gray.700')}
      rounded="md"
      shadow={`0 10px 30px ${shadowColor}`}
      m="auto"
      w="75%"
      textAlign="start"
      transition="all 0.3s ease"
      _hover={{
        transform: 'translateY(-6px)',
        shadow: `0 20px 40px ${hoverShadowColor}`,
      }}
    >
      <Heading as="h1" size="lg">
        {name}
      </Heading>
      <Text hidden={!subtitle} size="sm" as="strong">
        {subtitle}
      </Text>
      <Text textAlign="justify">{description}</Text>
      <Flex w="100%" justifyContent="end">
        <LinkIconBar links={links} />
      </Flex>
    </Flex>
  );
};

const ProjectContent = ({
  alternate,
  name,
  subtitle,
  description,
  pic,
  picDark,
  tech,
  links,
}) => {
  const src = useColorModeValue(pic, picDark ?? pic);
  if (alternate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Card
          name={name}
          subtitle={subtitle}
          description={description}
          links={links}
        />
        <Flex mt={2} gap={2} justifyContent="center">
          <Tech tech={tech} />
        </Flex>
      </motion.div>
    );
  }
  return (
    <Image
      m="auto"
      p="auto"
      // w="85%"
      src={src}
      alt={`${name} picture`}
      className="image"
      maxHeight="90%"
      onClick={() => {
        window.open(links[0].url || links[1].url);
      }}
    />
  );
};

const Project = ({ index, shouldAlternate, ...props }) => (
  <Grid templateColumns="repeat(2, 1fr)">
    <GridItem colSpan={{ base: 2, md: 1 }} h="full" alignContent="center">
      <ProjectContent
        alternate={shouldAlternate ? index % 2 === 0 : false}
        {...props}
      />
    </GridItem>
    <GridItem colSpan={{ base: 2, md: 1 }} h="full" alignContent="center">
      <ProjectContent
        alternate={shouldAlternate ? index % 2 === 1 : true}
        {...props}
      />
    </GridItem>
  </Grid>
);

export default function ProjectsOverview() {
  const shouldAlternate = useBreakpointValue({ md: false, lg: true });

  const { t } = useTranslation();

  const projects = t('projects', { returnObjects: true });

  return (
    <Flex pt={12}>
      <Grid templateColumns="1fr" justifyContent="center">
        {projects.map((project, index) => (
          <Project
            key={project.name}
            index={index}
            shouldAlternate={shouldAlternate}
            {...project}
          />
        ))}
      </Grid>
    </Flex>
  );
}
