import { Box, Center, Container, Heading, Img, Stack, Text } from '@chakra-ui/react'
import styled from '@emotion/styled';
import React from 'react'
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import img1 from "../assets/img1.jpg"
// import img2 from "../assets/img2.jpg"
// import img3 from "../assets/img3.jpg"
// import img4 from "../assets/img4.jpg"
// import img5 from "../assets/img5.jpg"

const headlingOptions = {
    pos:"absolute",
    left:"50%",
    top:"50%",
    TransformS:"translate(-50%,-50%)",
    textTransform:"uppercase",
    p:'4',
    size:"4x1"

}

 const Home=()=> {
  return (
  <Box > 
   <Carousel 
    autoPlay 
    infiniteLoop
     interval={1000} 
     showArrows={false}
      showThumbs={false}>


<Box w='full' h='100vh' >
<img src='img1.jpg' alt='image'></img>

</Box>
<Box w = 'full' h='100vh' >
<img src='img2.jpg' alt='image'></img>

</Box>
<Box w = 'full' h='100vh' >
<img src='img3.jpg' alt='image'></img>

</Box>
<Box w = 'full' h='100vh' >
<img src='img5.jpg' alt='image'></img>

</Box>

    </Carousel>
    <Container maxW={'container.xl'} minH={'100vh'} p={"16"}>
        <Heading textTransform={'uppercase'} py={"2"} w={'fit-content'} borderBottom={'2px solid'} m={'auto'}>
        Service
        </Heading>
        <Stack
        h={'full'}
        p={'4'}
        alignItems={'center'}
        direction={['column','row']}
        >
        <Img src="img6.png" alt="image" width={'40%'} h={['40','400']} filter={'hue-rotate(-130deg)'}/>
        <Text textAlign={"center"} letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']}>React code is made of entities called components. These components are reusable and must be formed in the SRC folder following the Pascal Case as its naming convention  Components can be rendered to a particular element in the DOM using the React DOM library. When rendering a component, one can pass the values between components through "props</Text>
        </Stack>
    </Container>
  </Box>)
}

export default Home