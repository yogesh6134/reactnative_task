import React, { useCallback, useState } from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import styles from "./styles";
import videoUrls from "../../mock/videourl";
import VideoPlayer from "../../component/VideoPlayer";
import Video from 'react-native-video';
import SwiperFlatList from "react-native-swiper-flatlist";

const Homepage = () => {
    const [currentIndex, updateCurrentIndex] = useState(0)

    const renderItem = useCallback(({ item, index }) => {
        return (
            <VideoPlayer
                videoUri={item}
                index={index}
                currentIndex={currentIndex}
            />
        )
    }, [videoUrls, currentIndex])
    console.log('currentIndex', currentIndex)


    const onChangeIndex = useCallback(({ index }) => {
        updateCurrentIndex(index)
    },[currentIndex])

    return (
        <View style={styles.container}>
            <SwiperFlatList
                data={videoUrls}
                vertical
                decelerationRate={0.9}
                onChangeIndex={onChangeIndex}
                renderItem={renderItem}
                keyExtractor={(item, index) => index}
                extraData={currentIndex}
            />
        </View>
    )
}

export default Homepage;