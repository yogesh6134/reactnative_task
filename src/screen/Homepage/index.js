import React, { useCallback } from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import styles from "./styles";
import videoUrls from "../../mock/videourl";
import VideoPlayer from "../../component/VideoPlayer";
import Video from 'react-native-video';
import SwiperFlatList from "react-native-swiper-flatlist";

const Homepage = () => {

    const renderItem = useCallback(({ item }) => {
        console.log(item)
        return (
            <VideoPlayer videoUri={item} />
        )
    }, [videoUrls])


    return (
        <SafeAreaView style={styles.container}>
            <SwiperFlatList
                autoplay
                vertical={true}
                data={videoUrls}
                renderItem={renderItem}

            />
        </SafeAreaView>
    )
}

export default Homepage;