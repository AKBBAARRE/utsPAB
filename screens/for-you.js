import { Heading, Center, Text, HStack, FormControl, Input, VStack, Switch, Box, Divider } from "native-base";
import { Header } from "../components";
import { SafeAreaView } from "react-native-safe-area-context";

const ForYou = () => {
    return (
        <SafeAreaView>
        <Box px={5}>
            <Center 
            marginTop={9}
            >
                <Heading>Setting</Heading>
            </Center>
            <Heading

            >Notification</Heading>

           
            <HStack  justifyContent="space-between" marginTop={9} marginBottom={2}>
                
                    <Text
                    marginTop={1}
                    >Message</Text>  

                    <Switch size="sm" />

                    

                            
            </HStack>
<Divider/>

                <HStack justifyContent="space-between" marginTop={9} marginBottom={2}>

                    <Text
                        marginTop={1}
                    >Push Notification</Text>

                    <Switch size="sm" />




                </HStack>
                <Divider />

            
                <Text bold marginTop={3}>Language</Text>

                <Text bold marginTop={3}>Rate Us</Text>

            </Box>
        </SafeAreaView>
    );
};

export default ForYou;