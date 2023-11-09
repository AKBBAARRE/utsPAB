import React from "react";
import { ScrollView, Heading, Text, Input, Box, Button, Image, HStack, Center } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../components";
import datas from "../datas";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";

const home = () => {
    const navigation = useNavigation();
    
    return (
            <SafeAreaView>

        <ScrollView>
            <Box p={4}>
                <Heading fontSize="2xl" fontWeight="bold" color="#00008B">
                    Metode Pembayaran
                </Heading>
                <Text fontWeight="bold">Pilih metode pembayaran</Text>
                <Input
                    placeholder="Metode Pembayaran"
                    w="100%"
                    alignItems="left"
                    mb={4}
                />

                <HStack>
                        <TouchableOpacity>
                    <Center >
                        <Image
                            source={require('../assets/bca.png')}
                            w="100"
                            h="100"
                        />
                    </Center>
                        </TouchableOpacity>
                    <Heading py={10} paddingLeft={3}>Pembayaran Melalui BCA</Heading>
                </HStack>

                <HStack paddingTop={10}>
                <TouchableOpacity>
                    <Center >

                        <Image
                            source={require('../assets/danabaru.png')}
                            w="100"
                            h="100"
                        />
                    </Center>
                        </TouchableOpacity>
                    <Heading py={10} paddingLeft={3}>Pembayaran Melalui DANA</Heading>
                </HStack>

                    <HStack paddingTop={10}>
                        <TouchableOpacity>
                        <Center >
                            <Image
                                source={require('../assets/bri.png')}
                                w="100"
                                h="100"
                            />
                        </Center>
                    </TouchableOpacity>
                        <Heading py={10} paddingLeft={3}>Pembayaran Melalui BRI</Heading>
                    </HStack>


            </Box>
        </ScrollView>
        </SafeAreaView>
    );
};

export default home;
