import { Container, Grid, GridItem, Box } from "@chakra-ui/react"
import Switch from './switch/switch' 
import SearchBar from './searchbar/searchbar'
import Github from './github/github'

export default function Nav (){
    return (
            <Container marginTop="3%" marginBottom="3%" maxWidth="90%" >
            <Grid templateColumns="repeat(14, 1fr)" gap={2}>
                <GridItem colStart={2}colEnd={11} h="10">
                    <SearchBar/>
                </GridItem>
                <GridItem colStart={11} colEnd={13} h="10">
                    <Switch/>
                </GridItem>
                <GridItem colStart={13} colEnd={14} h="10">
                    <Github/>
                </GridItem>
            </Grid>
            </Container>  
    )
    
};