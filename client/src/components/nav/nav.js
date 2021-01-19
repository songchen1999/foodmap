import { Container, Grid, GridItem, Box } from "@chakra-ui/react"
import Switch from './switch/switch' 
import SearchBar from './searchbar/searchbar'

export default function Nav (){
    return (
            <Container marginTop="3%" marginBottom="3%" maxWidth="90%" >
            <Grid templateColumns="repeat(14, 1fr)" gap={0}>
                <GridItem colStart={2}colEnd={12} h="10">
                    <SearchBar/>
                </GridItem>
                <GridItem colStart={13} colEnd={14} h="10">
                    <Switch/>
                </GridItem>
            </Grid>
            </Container>  
    )
    
};