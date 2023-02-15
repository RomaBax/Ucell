import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react' 
  import { Input } from '@chakra-ui/react'
  import React from 'react'
  import { Button, ButtonGroup } from '@chakra-ui/react'
  import { useDisclosure } from '@chakra-ui/react'
  import { Radio, RadioGroup } from '@chakra-ui/react'
  import { Stack, HStack, VStack } from '@chakra-ui/react'
  import { PhoneIcon, AddIcon, WarningIcon, Search2Icon, Icon } from '@chakra-ui/icons'
  
  
  function PlacementExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('top')
  
    return (
      <>
        <RadioGroup defaultValue={placement} onChange={setPlacement}>
          <Stack direction='row' mb='4'>
           
          </Stack>
        </RadioGroup>
        <Button style={{position:"relative", left:"1500px", top:"70px" }} colorScheme='' onClick={onOpen}>
        <Icon style={{color:"purple"}} as={Search2Icon} />
        </Button>
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'></DrawerHeader>
            <DrawerBody>
            <Input placeholder='Izlash' size='lg' />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }
  
  export default PlacementExample