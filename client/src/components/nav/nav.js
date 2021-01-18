import { Container, Grid, GridItem } from "@chakra-ui/react"
import Switch from './switch/switch' 
import SearchBar from './searchbar/searchbar'

export default function Nav (){
    return (
        
            <Grid templateColumns="repeat(5, 1fr)" gap={0}>
                <GridItem colStart={2}colEnd={8} h="10">
                    <SearchBar/>
                </GridItem>
                <GridItem colStart={9} colEnd={10} h="10">
                    <Switch/>
                </GridItem>
            </Grid>
        
        
    )
    
};