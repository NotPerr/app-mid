import React from "react";
//import { View , Text , StyleSheet, Image} from "react-native";
import { Box, Image, Text, ColorMode, useColorMode} from "native-base"
//import { ImageBackground } from "react-native";
import StarRating from 'react-native-star-rating';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const WishScreen = () => {
    const{colorMode} = useColorMode();
    return(
        <Box flex={1} alignItems= "center" _light={{bg:"#fff"}} _dark={{bg:"#121212"}}>
            <Box flexDirection="row" h="90" w="330" mt="15" borderRadius="10" borderColor="#fff" 
            shadow={0.5} 
            _dark={{borderWidth:"1" , borderColor:"#EAE1DF" }} >
                <Image 
                    h="81" w="54" mt="1" ml="16" mr="14" mb="4"
                    source = {require('../img/btn_newbook_5.png')}
                    alt="likebook00"
                />
                <Box >
                    <Text fontSize="16" mt="2">Glasses</Text>
                    <Text fontSize="12" mt="1" color={colorMode== "light" ? "#E9435E" : "#D2C1F3"}>NT350元</Text>
                    <Box mt="2" flexDirection="row">
                        <StarRating
                        disabled={true}
                        maxStars={5}
                        rating={3}
                        fullStarColor={'#E9435E'}
                        emptyStar = {"star"}
                        emptyStarColor={'#EDEDEF'}
                        halfStarEnabled={true}
                        starSize={14}
                        containerStyle={{justifyContent: "center"}}
                        starStyle={{marginRight: 5}}                            
                        />                 
                        <Text mt="-1" color="#949494">  3  </Text>           
                        <Text mt="-1" color="#A6A6FF">(25)</Text>  
                        <Box ml="30" >
                            <MaterialCommunityIcons name="heart" color={colorMode== "light" ? "#E9435E" : "#D2C1F3"} size={18} />
                        </Box>  
                        
                    </Box>

                </Box>                
            </Box>
            <Box flexDirection="row" h="90" w="330" mt="15" borderRadius="10" shadow={1}
            _dark={{borderWidth:"1" , borderColor:"#EAE1DF" }}
            >
                <Image
                    h="81" w="54" mt="1" ml="16" mr="14"
                    source = {require('../img/btn_newbook_0.png')}
                    alt="likebook01"
                />
                <Box >
                    <Text fontSize="16" mt="2">Mau Jiou</Text>
                    <Text fontSize="12" mt="1" color={colorMode== "light" ? "#E9435E" : "#D2C1F3"}>NT510元</Text>
                    <Box mt="2" flexDirection="row">
                        <StarRating
                        
                        disabled={true}
                        maxStars={5}
                        rating={3}
                        fullStarColor={'#E9435E'}
                        emptyStar = {"star"}
                        emptyStarColor={'#EDEDEF'}
                        halfStarEnabled={true}
                        starSize={14}
                        containerStyle={{justifyContent: "center"}}
                        starStyle={{marginRight: 5}}                            
                        />                 
                        <Text mt="-1" color="#949494">  3  </Text>
                        <Text mt="-1" color="#A6A6FF">(25)</Text>       
                        <Box ml="30" >
                            <MaterialCommunityIcons name="heart" color={colorMode== "light" ? "#E9435E" : "#D2C1F3"} size={18} />
                        </Box>  
                    </Box>
                </Box>
            </Box>
        </Box>
        
    );
};

// const styles = StyleSheet.create({
//     contain: {
//         flex: 1,
//         alignItems: "center",
//         backgroundColor: '#fff',
//     },
//     wishimg: {
//         height: 81,
//         width: 54,
//         marginLeft: 16,
//         marginRight: 14,
//         marginTop: 4
//     },
//     wishsection: {
//         flexDirection:"row",
//         height: 90,
//         width: 330,
//         borderRadius: 10,
//         marginTop: 15,
//         elevation: 1,
//     },
//     wishTxtName: {
//         fontSize: 16,
//         marginTop: 12,
//     },
//     wishTxtPrice: {
//         fontSize: 12,
//         marginTop: 5,
//         color: "#E9435E"
//     },
//     wishstar: {
//         flexDirection:"row",
//         marginTop: 5,
//     },
//     wishstarNum: {
//         marginTop: -4,
//         color: "#949494",
//     },
//     wishcommitNum: {
//         marginTop: -4,
//         color: "#A6A6FF",
//     },
// });

export default WishScreen;