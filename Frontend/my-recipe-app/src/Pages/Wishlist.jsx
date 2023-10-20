import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box,Flex,Image, SimpleGrid, Heading,Button,Text ,useToast} from '@chakra-ui/react';
import { getWishlist,RemoveFromWishlist } from "../Redux/WishlistReducer/action";

function Wishlist() {
    const dispatch = useDispatch();
  const wishlist = useSelector((store) => store.wishlistReducer.wishlist);
  console.log(wishlist);
  const isAuthenticated = useSelector((store) => store.authReducer.auth);
  console.log("isAuthenticated",isAuthenticated);
  const toast=useToast()

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getWishlist());
    }
  }, [dispatch, isAuthenticated]);

  const handleDelete = (id) => {
    if (isAuthenticated) {
      dispatch(RemoveFromWishlist(id))
        .then(() => {
          // Dispatch the getWishlist action to refresh the wishlist
          dispatch(getWishlist())
            // Show the success toast only after the wishlist is updated
            toast({
              title: 'Delete Recipe Successfully',
              description: "Your item is deleted from the wishlist",
              status: 'success',
              duration: 3000,
              isClosable: true,
            });
          });
    }
  };
  
  return (
    <div>
      <Heading>My Wishlist</Heading>
      <br />
      <Text>Total Item - {wishlist.length}</Text>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 3 }} spacing={4}>
        {wishlist.length === 0 ? (
          <Text>Your wishlist is empty.</Text>
        ) : (
          wishlist.map((el) => (
            <Flex p={50} w="full" alignItems="center" justifyContent="center" key={el._id}>
              <Box
                bg={'white'}
                maxW="sm"
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative">
                <Image
                  src={el.image}
                  alt={`Picture of ${el.title}`}
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
                      {el.title}
                    </Box>
                  </Flex>

                  <Button
                    mt={4}
                    variant="outline"
                    colorScheme="purple"
                    onClick={() => handleDelete(el._id)}
                  >
                    Remove
                  </Button>

                </Box>
              </Box>
            </Flex>
          ))
        )}
      </SimpleGrid>
    </div>
  )
}


export default Wishlist;