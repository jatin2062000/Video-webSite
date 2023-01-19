import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Button,
  useDisclosure,
  DrawerCloseButton,
  Stack,
  VStack,
  HStack,
} from '@chakra-ui/react'


import {Link} from "react-router-dom"
import {BiMenuAltLeft} from "react-icons/bi"

function Header() {
 const {isOpen , onOpen , onClose} = useDisclosure();
    return (
   <>
<Button  pos={'fixed'}
 zIndex={'overlay'}
      top={'4'}
      left={'4'} 
      colorScheme="purple" 
      p={'0'}
      w={'10'}
      h={'10'}
      borderRadius={"full"}
      onClick={onOpen}
      >
    <BiMenuAltLeft size={'30'} />
</Button>
<Drawer  isOpen={isOpen} placement="left" onClose={onClose} >
<DrawerOverlay/>
<DrawerContent>
    <DrawerCloseButton/>
    <DrawerHeader>VIDEO HUB</DrawerHeader>
    <DrawerBody>
        <VStack alignItems={'flex-start'}>
            <Button onClick={onClose} variant={"ghost"} colorScheme="purple">
                <Link to={'/'}>Home</Link>
            </Button>
            <Button onClick={onClose} variant={"ghost"} colorScheme="purple">
                <Link to={'/Video'}>Video</Link>
            </Button>
            <Button onClick={onClose} variant={"ghost"} colorScheme="purple">
                <Link to={'/Video?category=free'}>Free Video</Link>
            </Button>
            <Button onClick={onClose} variant={"ghost"} colorScheme="purple">
                <Link to={'/Upload'}>Upload Vidoe</Link>
            </Button>
        </VStack>
        <HStack pos={"absolute"} bottom={"10"} left={"0"} w={'full'} justifyContent={'space-evenly'}>
            <Button onClick={onClose} colorScheme={"purple"}>
                <Link to={'/login'}>Log In</Link>
            </Button>
            <Button onClick={onClose} colorScheme={"purple"} variant={"outline"}>
                <Link to={'/signup'}>Sign Up</Link>
            </Button>
        </HStack>
    </DrawerBody>
</DrawerContent>
</Drawer>
   </>
  )
}

export default Header