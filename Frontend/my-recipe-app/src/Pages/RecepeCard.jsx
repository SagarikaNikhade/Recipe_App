import {
    Flex,
    Box,
    Image,
    useColorModeValue,
    useToast,
    Button,
  } from '@chakra-ui/react';
  import React from "react";
  import {useDispatch} from "react-redux";
  import {addToWishlist} from "../Redux/RecipeReducer/action";

  const RecepeCard = ({ title, image }) => {
    const toast=useToast()
    const dispatch = useDispatch();

    const handleWishlist  = (image,title) =>{
        
        console.log("ooooo",image,title)
        dispatch(addToWishlist(image,title))
        toast({
            title: 'Added Recipe Successfully',
            description: "Your item is added to wishlist",
            status: 'success',
            duration: 3000,
            isClosable: true,
          })
    }
  
    return (
        <Flex p={50} w="full" alignItems="center" justifyContent="center">
          <Box
            bg={useColorModeValue('white', 'gray.800')}
            maxW="sm"
            borderWidth="1px"
            rounded="lg"
            shadow="lg"
            position="relative">
            <Image
              src={image}
              alt={`Picture of ${title}`}
              roundedTop="lg"
            />
  
            <Box p="6">
              <Flex mt="1" alignContent="center" justifyContent="center">
                <Box
                  fontSize="2xl"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated>
                  {title}
                </Box>
              </Flex>

              {/* Wishlist Button */}
              <Button
                mt={4}
                variant="outline"
                colorScheme="purple"
                onClick={()=>{handleWishlist(image,title)}}
              >
                Add to Wishlist
              </Button>
            </Box>
          </Box>
        </Flex>
    );
  }
  
  export default RecepeCard;
  