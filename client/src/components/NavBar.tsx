import { Box, Button, Flex, Heading, Image, Link, Switch, useColorMode, useToast } from '@chakra-ui/core';
import React from 'react'
import NextLink from 'next/link'
// import { useLogoutMutation, useMeQuery } from '../generated/graphql';
import { isServer } from '../utils/isServer';
import { useRouter } from 'next/router';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

interface NavBarProps {

}

export const NavBar: React.FC<NavBarProps> = ({ }) => {
  const router = useRouter()
  // const [{ fetching: logoutFetching }, logout] = useLogoutMutation()
  // const [{ data, fetching }] = useMeQuery({
  //   pause: isServer()
  // })

  const { colorMode, toggleColorMode } = useColorMode()

  let body = null

  // if (fetching) {

  // }

  // else if (!data?.me) {
    body = (
      <>
        <Flex align="center">
          {colorMode === 'dark' ? <SunIcon mr={4} boxSize={8} onClick={toggleColorMode} cursor="pointer" /> : null}
          {colorMode === 'light' ? <MoonIcon mr={4} boxSize={8} onClick={toggleColorMode} cursor="pointer" /> : null}
          <Switch isChecked={colorMode === 'light' ? false : true} onChange={toggleColorMode}  size="lg" />
          {/* <NextLink href="/stats">
            <Button as={Link} mr={4}>
              Stats
            </Button>
          </NextLink> */}
          {/* <NextLink href="/register">
            <Link mr={2}>Register</Link>
          </NextLink>
          <NextLink href="/login">
            <Link mr={2}>Login</Link>
          </NextLink> */}
        </Flex>
      </>
    )
  // }
  // else {
  //   body = (
  //     <>
  //       <Flex align="center">
  //         <NextLink href="/create-post">
  //           <Button as={Link} mr={4}>
  //             Create Post
  //           </Button>
  //         </NextLink>
  //         <Box mr={2}>{data.me.username}</Box>
  //         <Button onClick={async () => {
  //           await logout()
  //           router.reload()
  //         }}
  //           isLoading={logoutFetching}
  //           variant='link'>Logout</Button>
  //       </Flex>
  //     </>
  //   )
  // }

  return (
    <Flex zIndex={1} shadow="md" position="sticky" top={0} bg={colorMode === 'dark' ? "gray.800" : "teal.500"} p={4}>
      <Flex maxW={1240} align="center" flex={1} m="auto">
        <NextLink href="/">
          <Link>
            {/* <Heading>GraphQL</Heading> */}
            <Image boxSize="33%" alt="LD Logo" src="../assets/img/lfdo-icon.png"></Image>
          </Link>
        </NextLink>
        <Box ml={"auto"}>
          {body}
        </Box>
      </Flex>
    </Flex>
  );
}