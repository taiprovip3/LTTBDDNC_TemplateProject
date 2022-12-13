import React from 'react';
import { NativeBaseProvider, Text, Box, ScrollView, Image, HStack, VStack, Flex } from 'native-base';
import axios from 'axios';
import { AntDesign } from '@expo/vector-icons';

export default function Homepage({ navigation }) {

  const [data, setData] = React.useState([]);

  const getDataFromMockAPI = () => {
    axios.get("https://637ed659cfdbfd9a63b81953.mockapi.io/fruits")
        .then((response) => {
            setData(response.data);
        });
  }
  React.useEffect(() => {
    getDataFromMockAPI();
  },[]);
// React.useEffect(() => {
//     fetch('https://637ed659cfdbfd9a63b81953.mockapi.io/fruits')
//     .then((res) => res.json())
//     .then((rs) => {
//       setData(rs);
//       console.log('DATA FETCH: ',rs);
//     })
//     .catch(err => {
//       console.log(err);
//     });
//   }, []);

  return (
    <NativeBaseProvider>
        <Box flex="1">
            <ScrollView>

                <HStack display="flex" flexWrap="wrap" bg="blue.500">
                    <Box p="1" justifyContent="center" alignItems="center" bg="warmGray.400" w="1/2" h="32">
                        <HStack space="1">
                            <Box flex="1" justifyContent="center" alignItems="center"><Image source={{ uri: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/379.jpg" }} alt="avatar" h={'75%'} w={'100%'} borderRadius={"full"} /></Box>
                            <Box flex="1">
                                <ScrollView>
                                    <Text fontSize="xs">56</Text>
                                    <Text fontSize="xs">Chelsea Rau Infernal Dragon Length So Long Cause I Need To Test ScrollView so I Write So Long Sorry You So Much To Read!</Text>
                                    <HStack space="2" justifyContent="center" alignItems="center">
                                        <Box><AntDesign name="minuscircleo" color="black" /></Box>
                                        <Box><Text fontSize="xs">52</Text></Box>
                                        <Box><AntDesign name="pluscircleo" color="black" /></Box>
                                    </HStack>
                                </ScrollView>
                            </Box>
                        </HStack>
                    </Box>
                    
                    {
                        data.map(m => {
                            return <Box p="1" justifyContent="center" alignItems="center" bg="warmGray.400" w="1/2" h="32" key={m.id}>
                            <HStack space="1">
                                <Box flex="1" justifyContent="center" alignItems="center"><Image source={{ uri: m.avatar }} alt="avatar" h={'75%'} w={'100%'} borderRadius={"full"} /></Box>
                                <Box flex="1">
                                    <ScrollView>
                                        <Text fontSize="xs">{m.id}</Text>
                                        <Text fontSize="xs">{m.name}</Text>
                                        <HStack space="2" justifyContent="center" alignItems="center">
                                            <Box><AntDesign name="minuscircleo" color="black" /></Box>
                                            <Box><Text fontSize="xs">{m.quantity}</Text></Box>
                                            <Box><AntDesign name="pluscircleo" color="black" /></Box>
                                        </HStack>
                                    </ScrollView>
                                </Box>
                            </HStack>
                        </Box>
                        })
                    }
                </HStack>

            </ScrollView>
        </Box>
    </NativeBaseProvider>
  )
}