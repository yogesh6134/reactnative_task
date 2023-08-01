import React, {useRef, useState} from 'react';
import { View, Text } from 'react-native';
import Video from 'react-native-video';
import styles from './styles';
import videoUrls from '../../mock/videourl';

const VideoPlayer = ({ videoUri }) => {
    console.log('video url', videoUri)
    const videoRef = useRef(null);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);


    const onEnd = () => {
        // Play the next video when the current video ends
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoUrls.length);
    };

    return (
        <View style={styles.container}>
            <Video
                ref={videoRef}
                source={{ uri: videoUri }}
                style={styles.video}
                paused={currentVideoIndex !== 0} // Pause all videos except the current one
                resizeMode="cover"
                repeat={true}
                onEnd={onEnd}
            />
            {/* <Text>{videoUri}</Text> */}
        </View>
    );
};

export default VideoPlayer;