import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import { Grid } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Fade from 'react-reveal/Fade';

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
    <Box
      bgColor={bg}
      borderRadius="lg"
      borderWidth={bg === colors.bg.light ? '1px' : ''}
      borderColor={useColorModeValue('gray.200', 'gray.700')}
      rounded="md"
      shadow={`0 10px 30px ${shadowColor}`}
      mt={20}
      m="auto"
      mb={3}
      w="75%"
      textAlign="start"
      transition="all 0.3s ease"
      _hover={{
        transform: 'translateY(-6px)',
        shadow: `0 20px 40px ${hoverShadowColor}`,
      }}
    >
      <Heading as="h1" size="lg" m={2} p={2} pt={6}>
        {name}
      </Heading>
      <Text hidden={!subtitle} size="sm" as="strong" m={2} p={2} pb={6}>
        {subtitle}
      </Text>
      <Text m={2} p={2} pb={6} textAlign="justify">
        {description}
      </Text>
      <LinkIconBar links={links} float="right" mt={0} mr={4} mb={4} />
    </Box>
  );
};

const ProjectContent = ({
  alternate,
  name,
  subtitle,
  description,
  pic,
  tech,
  links,
}) => {
  if (alternate) {
    return (
      <>
        <Card
          name={name}
          subtitle={subtitle}
          description={description}
          links={links}
        />
        <Grid container direction="row" justifyContent="center" spacing={2}>
          <Tech tech={tech} />
        </Grid>
      </>
    );
  }
  return (
    <Image
      m="auto"
      p="auto"
      // w="85%"
      src={pic}
      alt={`${name} picture`}
      className="image"
      maxHeight="90%"
      onClick={() => {
        links[0].url ? window.open(links[0].url) : window.open(links[1].url);
      }}
    />
  );
};

const Project = ({ index, shouldAlternate, ...props }) => (
  <Fade>
    <Grid container direction="row">
      <Grid container item sm={12} md={6} className="projects-correction">
        <ProjectContent
          alternate={shouldAlternate ? index % 2 === 0 : false}
          {...props}
        />
      </Grid>
      <Grid container item sm={12} md={6} className="projects-correction">
        <ProjectContent
          alternate={shouldAlternate ? index % 2 === 1 : true}
          {...props}
        />
      </Grid>
    </Grid>
  </Fade>
);

export default function ProjectsOverview() {
  const shouldAlternate = useBreakpointValue({ md: false, lg: true });

  const { t } = useTranslation();

  const projects = t('projects', { returnObjects: true });

  return (
    <Flex pt={12}>
      <Grid container direction="column" justifyContent="center">
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
