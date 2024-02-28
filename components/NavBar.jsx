import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  IconButton,
  Link,
  Spacer,
  Stack,
  Tooltip,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaMoon, FaSun } from 'react-icons/fa';
import { animateScroll as scroll, Link as ScrollLink } from 'react-scroll';
import Sticky from 'react-stickynode';

import { colors } from '../theme';
import BRAFlagIcon from './icons/BRAFlagIcon';
import EUAFlagIcon from './icons/EUAFlagIcon';

const Logo = () => {
  const logo = useColorModeValue('/logo.png', '/logo-dark.png');
  return (
    <Box m="2" cursor="pointer">
      <img
        alt=""
        src={logo}
        width="60"
        height="60"
        onClick={scroll.scrollToTop}
      />
    </Box>
  );
};

const MenuToggle = ({ isOpen, onOpen }) => (
  <Box display={{ base: 'block', md: 'none' }} pr={4}>
    <Button onClick={onOpen}>
      {isOpen ? <CloseIcon /> : <HamburgerIcon />}
    </Button>
  </Box>
);

const NavButtons = ({ size, onClose }) => {
  const { t } = useTranslation();

  const navbarOptions = t('navbar', { returnObjects: true });

  const btns = navbarOptions?.map((btn) => (
    <Button key={btn.label} size={size} variant="link" mb={2} onClick={onClose}>
      {btn.href ? (
        <Link href={btn.href} isExternal>
          {btn.label}
        </Link>
      ) : (
        <ScrollLink
          to={btn.section.toLowerCase()}
          href={btn.href}
          spy
          smooth
          offset={-70}
          duration={500}
          onClick={onClose}
        >
          {btn.label}
        </ScrollLink>
      )}
    </Button>
  ));
  return <>{btns}</>;
};

const ColorModeButton = ({ mr }) => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const nextMode = useColorModeValue('dark', 'light');
  const { i18n } = useTranslation();
  return (
    <Tooltip
      label={
        i18n.resolvedLanguage === 'pt'
          ? `Alternar para modo ${nextMode}`
          : `Toggle ${nextMode} mode`
      }
      aria-label={
        i18n.resolvedLanguage === 'pt'
          ? `Alternar para modo ${nextMode}`
          : `Toggle ${nextMode} mode`
      }
    >
      <IconButton
        size="md"
        fontSize="lg"
        aria-label={
          i18n.resolvedLanguage === 'pt'
            ? `Alternar para modo ${nextMode}`
            : `Toggle ${nextMode} mode`
        }
        variant="ghost"
        color="current"
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
        style={{ marginRight: mr }}
      />
    </Tooltip>
  );
};

const LanguageButton = ({ mr }) => {
  const { i18n } = useTranslation();
  const resolveLanguage = i18n.resolvedLanguage;
  const handleChangeLanguage = (lng) => {
    if (lng === 'pt') {
      i18n.changeLanguage('en');
    } else {
      i18n.changeLanguage('pt');
    }
  };

  return (
    <Tooltip label="Switch language" aria-label="Switch language">
      <IconButton
        aria-label={
          resolveLanguage === 'pt' ? 'Trocar de linguagem' : 'Switch language'
        }
        variant="ghost"
        color="current"
        key={resolveLanguage}
        onClick={() => handleChangeLanguage(resolveLanguage)}
        icon={resolveLanguage === 'pt' ? <BRAFlagIcon /> : <EUAFlagIcon />}
        style={{ marginRight: mr }}
      />
    </Tooltip>
  );
};

const MenuLinks = ({ onClose }) => (
  <Stack
    display={{ base: 'none', sm: 'none', md: 'block' }}
    width={{ sm: 'full', md: 'auto' }}
    spacing="24px"
    direction={['column', 'row', 'row', 'row']}
    alignItems="center"
  >
    <NavButtons size="sm" onClose={onClose} />
    <LanguageButton mr="-12px" />
    <ColorModeButton mr="12px" />
  </Stack>
);

const NavMenu = ({ isOpen, onClose }) => (
  <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
    <DrawerOverlay>
      <DrawerContent>
        <DrawerBody>
          <Stack
            alignItems="center"
            justifyContent="center"
            direction={['column']}
            spacing="24px"
            mt="20vh"
          >
            <NavButtons size="lg" onClose={onClose} />
            <LanguageButton />
            <ColorModeButton />
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </DrawerOverlay>
  </Drawer>
);

export default function Navbar() {
  const primary = useColorModeValue(colors.primary.light, colors.primary.dark);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Sticky enabled innerZ={99}>
      <Stack
        as="header"
        w="100%"
        direction={['row', 'row', 'row', 'row']}
        alignItems="center"
        justifyContent="center"
        bg={primary}
      >
        <Logo />
        <Spacer />
        <MenuLinks onClose={onClose} />
        <NavMenu isOpen={isOpen} onClose={onClose} />
        <MenuToggle isOpen={isOpen} onOpen={onOpen} />
      </Stack>
    </Sticky>
  );
}
