import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import { useDispatch } from 'react-redux';
  import { registerUser } from '../Redux/AuthReducer/action';
  
  const initialState = {
    email : "",
    password : "",
    confirm_password : "",
  }
  
  export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [register , setRegister] = useState(initialState)
   const dispatch = useDispatch()
    
   const handleChange = (e) =>{
    const {name ,value} = e.target;
  
    setRegister((prev)=>{
      return {...prev,[name]:value}
    })
   }
   const handleSubmit = (e) =>{
      e.preventDefault()
      console.log(register)
      dispatch(registerUser(register))
      setRegister(initialState)
      window.location.href="/login"
   }
  
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" placeholder='Email' name="email" value={register.email} onChange={(e)=>{handleChange(e)}} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} placeholder='Password' name="password" value={register.password} onChange={(e)=>{handleChange(e)}} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl id="confirm_password" isRequired>
                <FormLabel>confirm_password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'confirm_password'} placeholder='confirm_password' name="confirm_password" value={register.confirm_password} onChange={(e)=>{handleChange(e)}} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  onClick={handleSubmit}
                  >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link color={'blue.400'} href='/login'>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }