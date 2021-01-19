import {useColorMode, Square, IconButton} from "@chakra-ui/react"
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

export default function Example() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
      
        <Square onClick={toggleColorMode}>
          <IconButton  
            colorScheme="teal"
            aria-label="Search database"
            size="lg"
            
            icon={colorMode === "light" ? <MoonIcon/> : <SunIcon/>}
          />  
        </Square>
       
    )
}