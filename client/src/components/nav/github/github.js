import { FaBeer } from 'react-icons/fa';
import {useColorMode, Square, IconButton, Icon} from "@chakra-ui/react"
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { GoMarkGithub } from "react-icons/go";

export default function Example() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
      
        <Square>
          <IconButton
            colorScheme="teal"
            aria-label="Search database"
            size="lg"
            icon= {<Icon as={GoMarkGithub} w={5} h={5}/>}
          />
        </Square>
       
    )
}