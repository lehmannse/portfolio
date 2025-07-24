// eslint-disable-next-line
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
  Container,
  HStack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import Sticky from 'react-stickynode';
import { colors } from '../theme';
import BRAFlagIcon from './icons/BRAFlagIcon';
import EUAFlagIcon from './icons/EUAFlagIcon';

const Logo = () => {
  const logo = useColorModeValue('/logo.png', '/logo-dark.png');
  const shadowColor = useColorModeValue(
    'rgba(0, 0, 0, 0.1)',
    'rgba(59, 130, 246, 0.15)'
  );

  return (
    <Box m="4">
      <img
        alt="Portfolio Logo"
        src={logo}
        width={50}
        height={50}
        onClick={scroll.scrollToTop}
      />
    </Box>
  );
};

const MenuToggle = ({ isOpen, onOpen }) => {
  const bg = useColorModeValue('gray.100', 'gray.700');
  const hoverBg = useColorModeValue('gray.200', 'gray.600');

  return (
    <Box display={{ base: 'block', md: 'none' }} pr={4}>
      <Button
        onClick={onOpen}
        bg={bg}
        _hover={{ bg: hoverBg }}
        borderRadius="lg"
        transition="all 0.3s ease"
        _active={{
          transform: 'scale(0.95)',
        }}
      >
        {isOpen ? <CloseIcon /> : <HamburgerIcon />}
      </Button>
    </Box>
  );
};

const NavButtons = ({ size, onClose }) => {
  const { t } = useTranslation();
  const secondary = useColorModeValue(
    colors.secondary.light,
    colors.secondary.dark
  );

  const navbarOptions = t('navbar', { returnObjects: true });

  const btns =
    navbarOptions && Array.isArray(navbarOptions)
      ? navbarOptions?.map((btn) => (
          <Button
            key={btn.label}
            size={size}
            variant="ghost"
            onClick={onClose}
            borderRadius="lg"
            transition="all 0.3s ease"
            _hover={{
              bg: useColorModeValue('gray.100', 'gray.700'),
              color: secondary,
              transform: 'translateY(-2px)',
            }}
            _active={{
              transform: 'scale(0.95)',
            }}
            fontWeight="medium"
          >
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
        ))
      : [];
  return <>{btns}</>;
};

const ColorModeButton = ({ mr }) => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const nextMode = useColorModeValue('dark', 'light');
  const { i18n } = useTranslation();
  const bg = useColorModeValue('gray.100', 'gray.700');
  const hoverBg = useColorModeValue('gray.200', 'gray.600');

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
        bg={bg}
        _hover={{ bg: hoverBg }}
        color="current"
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
        style={{ marginRight: mr }}
        borderRadius="lg"
        transition="all 0.3s ease"
        _active={{
          transform: 'scale(0.95)',
        }}
      />
    </Tooltip>
  );
};

const LanguageButton = ({ mr }) => {
  const { i18n } = useTranslation();
  const resolveLanguage = i18n.resolvedLanguage || 'en';
  const [isLoading, setIsLoading] = React.useState(true);
  const bg = useColorModeValue('gray.100', 'gray.700');
  const hoverBg = useColorModeValue('gray.200', 'gray.600');

  React.useEffect(() => {
    if (i18n.resolvedLanguage) {
      setIsLoading(false);
    }
  }, [i18n.resolvedLanguage]);

  const handleChangeLanguage = (lng) => {
    if (lng === 'pt') {
      i18n.changeLanguage('en');
    } else {
      i18n.changeLanguage('pt');
    }
  };

  const flag =
    !isLoading &&
    (resolveLanguage === 'pt' ? <BRAFlagIcon /> : <EUAFlagIcon />);

  return (
    <Tooltip label="Switch language" aria-label="Switch language">
      <IconButton
        aria-label={
          resolveLanguage === 'pt' ? 'Trocar de linguagem' : 'Switch language'
        }
        variant="ghost"
        bg={bg}
        _hover={{ bg: hoverBg }}
        color="current"
        key={resolveLanguage}
        onClick={() => handleChangeLanguage(resolveLanguage)}
        icon={flag}
        style={{ marginRight: mr }}
        isLoading={isLoading}
        borderRadius="lg"
        transition="all 0.3s ease"
        _active={{
          transform: 'scale(0.95)',
        }}
      />
    </Tooltip>
  );
};

const MenuLinks = ({ onClose }) => (
  <HStack
    display={{ base: 'none', sm: 'none', md: 'flex' }}
    spacing="24px"
    alignItems="center"
  >
    <NavButtons size="sm" onClose={onClose} />
    <LanguageButton mr="0" />
    <ColorModeButton mr="0" />
  </HStack>
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
  const shadowColor = useColorModeValue(
    'rgba(0, 0, 0, 0.08)',
    'rgba(59, 130, 246, 0.12)'
  );
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Sticky enabled innerZ={99}>
      <Box
        as="header"
        w="100%"
        bg={primary}
        boxShadow={`0 4px 20px ${shadowColor}`}
        borderBottom="1px solid"
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        backdropFilter="blur(10px)"
        position="relative"
        zIndex={99}
      >
        <Container maxW="container.xl" px={4}>
          <HStack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            py={2}
          >
            <Logo />
            <MenuLinks onClose={onClose} />
            <NavMenu isOpen={isOpen} onClose={onClose} />
            <MenuToggle isOpen={isOpen} onOpen={onOpen} />
          </HStack>
        </Container>
      </Box>
    </Sticky>
  );
}
