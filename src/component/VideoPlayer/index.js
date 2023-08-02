import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Image, TouchableOpacity, View, Text, ActivityIndicator } from 'react-native';
import Video from 'react-native-video';
import styles from './styles';
import { IMAGES } from '../../assets';

const VideoPlayer = ({ videoUri, index, currentIndex }) => {
    // console.log('video url', videoUri, index, currentIndex)
    const videoRef = useRef(null);
    const [mute, setMute] = useState(false);
    const [showBuffer, setShowBuffer] = useState(false);


    const onBuffer = buffer => {
        if (buffer.isBuffering) {
            setShowBuffer(true)
        } else {
            setShowBuffer(false)
        }
    }

    const videoError = error => {
        console.log('error--', error)
    }

    const onMute = useCallback(() => {
        setMute(!mute)
    }, [mute])

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.video} onPress={onMute}>
                <Video
                    ref={videoRef}
                    source={{ uri: videoUri }}
                    muted={mute}
                    paused={currentIndex !== index}
                    repeat={true}
                    controls={false}
                    resizeMode="cover"
                    onBuffer={onBuffer}
                    onError={videoError}
                    style={styles.video}
                />
            </TouchableOpacity>

            {mute && <Image
                source={IMAGES.MuteIcon}
                style={styles.muteIcon}
            />}

            {!showBuffer ?
                <Text style={styles.ImageText}>{videoUri}</Text>
                :
                <View style={styles.loader}>
                    <Text style={styles.loadingText}>Loading...</Text>
                    <ActivityIndicator size={'medium'} />
                </View>}
        </View>
    );
};

export default VideoPlayer;