import React from "react";
import { Box, Flex, Heading, Link, VStack, IconButton, useDisclosure, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Stack } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      {/* Navbar */}
      <Flex as="nav" bg="blue.500" color="white" padding={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          Website Name
        </Heading>
        <IconButton icon={<FaBars />} variant="outline" onClick={onOpen} display={{ base: "inline-flex", md: "none" }} />
        <Stack as="ul" direction="row" display={{ base: "none", md: "flex" }} spacing={4}>
          <Box as="li">
            <Link>Section 1</Link>
          </Box>
          <Box as="li">
            <Link>Section 2</Link>
          </Box>
          <Box as="li">
            <Link>Section 3</Link>
          </Box>
        </Stack>
      </Flex>

      {/* Sidebar Drawer */}
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Navigation</DrawerHeader>
          <DrawerBody>
            <VStack as="ul" spacing={4} align="stretch">
              <Box as="li">
                <Link href="#section1" onClick={onClose}>
                  Section 1
                </Link>
              </Box>
              <Box as="li">
                <Link href="#section2" onClick={onClose}>
                  Section 2
                </Link>
              </Box>
              <Box as="li">
                <Link href="#section3" onClick={onClose}>
                  Section 3
                </Link>
              </Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Content Sections */}
      <Box as="main" marginTop={8}>
        <Box id="section1" padding={8} bg="gray.100" minHeight="100vh">
          <Heading as="h2" size="xl">
            Section 1
          </Heading>
          {/* Section content */}
        </Box>
        <Box id="section2" padding={8} bg="gray.200" minHeight="100vh">
          <Heading as="h2" size="xl">
            Section 2
          </Heading>
          {/* Section content */}
        </Box>
        <Box id="section3" padding={8} bg="gray.300" minHeight="100vh">
          <Heading as="h2" size="xl">
            Section 3
          </Heading>
          {/* Section content */}
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
