// import { EmailIcon } from "@chakra-ui/icons";
import { Flex, Text } from '@chakra-ui/react';
import { Grid } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

import links from '../../data/contactLinks';
import LinkIconBar from '../LinkIconBar';
import SectionContainer from '../SectionContainer';

export default function Contact() {
  const { t, i18n } = useTranslation();
  return (
    <SectionContainer
      id="contact"
      name="contact"
      headerText={
        i18n.resolvedLanguage === 'pt' ? 'Entre em Contato' : 'Contact Me'
      }
      style={{ paddingTop: '45px', minHeight: '75vh' }}
      useHeaderStyle
    >
      <Flex
        as={Grid}
        container
        item
        xs={9}
        sm={6}
        justify="center"
        textAlign="center"
        pl={4}
        pr={4}
      >
        <Text fontSize="xl" m="auto" mt={3}>
          {t('contact')}
        </Text>
        {/* <Text fontSize="xl" m="auto">
          
        </Text> */}
        <LinkIconBar mt={8} links={links} />
        {/* <Button
          as={Link}
          leftIcon={<EmailIcon />}
          href="mailto:filipelehmannp@gmail.com"
          m="auto"
          mt={6}
        >
          Email
        </Button> */}
      </Flex>
    </SectionContainer>
  );
}
