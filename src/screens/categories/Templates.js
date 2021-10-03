import _ from 'lodash';
import React, {Component,useState,useRef} from 'react';
import {StyleSheet, ScrollView, Dimensions, ScrollViewProps, StatusBar} from 'react-native';
import {Colors, View, Card, CardProps, Button,SafeAreaView, TouchableOpacity, Text, Image} from 'react-native-ui-lib';
// @ts-ignore
import categoriesItems from '../../data/posts';
// import Resizer from "react-image-file-resizer";
import ImageResizer from 'react-native-image-resizer';
// import LoginPage from './User/LoginPage';
// import SignUpPage from './User/SignUp';
import Carousel, { Pagination, CarouselStatic } from 'react-native-snap-carousel';
import { colors } from '../../shared/Colors';
import LinearGradient from 'react-native-linear-gradient';
import {LinearTextGradient} from "react-native-text-gradient";


let ScreenWidth = Dimensions.get("window").width;
let ScreenHeight = Dimensions.get("window").height;

const win = Dimensions.get('window');



export default function Templates({navigation}) {

const [activeIndex, setactiveIndex] = useState(0)


const [slider1ActiveSlide, setSlider1ActiveSlide] = useState(0);


function _renderItem({item,index}){
    return (
        <View style={{}}>
            <LinearTextGradient
            style={{ fontWeight: "bold", fontSize: 24 ,alignSelf:"center"}}
            locations={[0, 1.5]}
            colors={["red", "blue"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            >
                <Text>{item.title}</Text>
            {/* <Text>asfdghfghjfkd</Text> */}
            </LinearTextGradient>
            <Card
            key={index}
            // width={400}
            // height={200}
            style={{elevation:10}}
            // marginH-10
            // marginL-10
            // marginR-10
            onPress={() => {
            navigation.navigate("Category",{items: item}) } }
            >


            {/* 720,1100 */}
                <Card.Section
                    imageSource={item.coverImage}
                    imageStyle={{
                        width:"100%"
                    }}
                />
            </Card>

        </View>

    )
}


const carouselRef = useRef(null);



    return (

        
    <View style={{ flex:1,backgroundColor:colors.background }}>
        <StatusBar barStyle="default" backgroundColor={colors.darkViolet}/>
        <View height={60} backgroundColor={colors.lightViolet}
            row alignItems="center" style={{justifyContent:"space-between"}}>
            <Text color="white" text50 marginL-20>Categories</Text>
        </View> 


        <View center style={{flexDirection:'row',flex:1}}>
            <Carousel
            layout={"default"}
            // centerContent={true}
            inactiveSlideOpacity={0.5}
            // activeSlideAlignment="center"
            // snapToAlignment="center"
            alwaysBounceHorizontal={true}
            // ref={ref => this._sliderRef = ref}
            ref={carouselRef}//nuevo
            data={categoriesItems}
            sliderWidth={ScreenWidth}
            // itemWidth={200}
            itemWidth={ScreenWidth-80}
            renderItem={_renderItem}
            onSnapToItem = { index => setactiveIndex(index) } />
        </View>


        {/* <View style={{}}>
            <Pagination
                dotsLength={categoriesItems.length}
                activeDotIndex={activeIndex}
                // containerStyle={styles.paginationContainer}
                dotColor={'#F05451'}
                // dotStyle={styles.paginationDot}
                inactiveDotColor={'lightgrey'}
                inactiveDotOpacity={0.9}
                inactiveDotScale={0.9}
                carouselRef={carouselRef}
                tappableDots={!!carouselRef}
            />
        </View> */}
    </View>

    );
}
