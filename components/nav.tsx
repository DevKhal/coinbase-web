import React from 'react'
import {
  Button,
  Link as ChakraLink,
  Divider,
  Flex,
  Image,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  PseudoBox,
  Icon
} from '@chakra-ui/core'
import Link from 'next/link'

interface MenuItem {
  link?: string
  onClick?: any
}

const MenuItems: React.FC<MenuItem> = ({ children, link, onClick }) => (
  <Link href={link}>
    <PseudoBox
      as="a"
      mt={[6, 6, 0, 0]}
      mr={'36px'}
      display="block"
      fontWeight="bold"
      fontSize={['md', 'md', 'md', 'md']}
      color="black"
      onClick={onClick || undefined}
      transition="border .2s"
      _hover={{
        borderBottomColor: 'pink.500',
        borderBottomWidth: ['0', '0', '4px', '4px', '4px'],
        borderBottomLeftRadius: '2px',
        borderBottomRightRadius: '2px',
        cursor: 'pointer'
      }}
    >
      {children}
    </PseudoBox>
  </Link>
)

const Nav: React.FC = props => {
  const [show, setShow] = React.useState(false)
  const handleToggle = () => setShow(!show)

  return (
    <Flex
      as="nav"
      position="fixed"
      width="100vw"
      alignItems="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      paddingX={['16', '16', '16', '16', '15%']}
      paddingY="8"
      backgroundColor="white"
      color="white"
      zIndex={999}
      {...props}
    >
      <Flex align="center" mr={5}>
        <Link href="/">
          <Image src="/logo.png" />
        </Link>
      </Flex>
      <Box display={['block', 'block', 'none', 'none']} onClick={handleToggle}>
        <svg
          fill="#333"
          width="22px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={[
          show ? 'block' : 'none',
          show ? 'block' : 'none',
          'flex',
          'flex'
        ]}
        alignItems="center"
        width={['full', 'full', 'auto', 'auto']}
        marginTop={['20px', '20px', '0', '0', '0']}
      >
        <Divider />
        <MenuItems link="/">Home</MenuItems>
        <MenuItems link="/about">About Us</MenuItems>
        <MenuItems link="/blog">Blog</MenuItems>
        <MenuItems link="/contact-us">Contact Us</MenuItems>
      </Box>

      <Box
        display={['none', 'none', 'none', 'block', 'block']}
        alignItems="center"
      >
        <Menu>
          <MenuButton as={Button} color="black" bg="none" mr="10">
            Sell Bitcoin/ Giftcard <Icon name="chevron-down" />
          </MenuButton>
          <MenuList color="black">
            <MenuItem>Sell Bitcoins</MenuItem>
            <MenuItem>Sell Giftcard</MenuItem>
          </MenuList>
        </Menu>
        <Button
          variantColor="pink"
          background="linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%);"
          color="white"
          rounded="100px"
          width="158px"
          py="6"
          textTransform="uppercase"
        >
          Login
        </Button>
      </Box>
    </Flex>
  )
}

export default Nav
