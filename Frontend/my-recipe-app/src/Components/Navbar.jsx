import React, { useState } from 'react';
import {
  Flex,
  Text,
  Link,
  Box,
  IconButton,
  HStack,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="1rem"
      bg="blue.500"
      color="white"
      wrap="wrap"
    >
      <Flex align="center" mr={5}>
        <Text fontWeight="bold" fontSize="xl">
          MyNavbar
        </Text>
      </Flex>

      <IconButton
        display={{ base: 'block', md: 'none' }}
        aria-label="Open menu"
        icon={<HamburgerIcon />}
        onClick={toggleDropdown}
      />

      <HStack
        spacing="20px"
        display={{ base: 'none', md: 'flex' }}
      >
        <Link as={RouterLink} to="/login">
          Login
        </Link>
        <Link as={RouterLink} to="/all">
          Recipe List
        </Link>
        <Link as={RouterLink} to="/wish">
          Wishlist
        </Link>
      </HStack>

      {isOpen && (
        <Box
          display="block"
          position="absolute"
          top="60px"
          right="0"
          left="0"
          bg="blue.400"
          p="1rem"
          zIndex="99"
        >
          <Link as={RouterLink} to="/login" onClick={closeDropdown}>
            Login
          </Link>
          <br/>
          <Link as={RouterLink} to="/all" onClick={closeDropdown}>
            Recipe List
          </Link>
          <br/>
          <Link as={RouterLink} to="/wish" onClick={closeDropdown}>
            Wishlist
          </Link>
        </Box>
      )}
    </Flex>
  );
};

export default Navbar;
