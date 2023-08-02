import {Dimensions} from 'react-native';

export const DIMENSIONS = {
  WINDOW_HEIGHT: Dimensions.get('window').height,
  WINDOW_WIDTH: Dimensions.get('window').width,
};


export const WIDTH = {
  w0: DIMENSIONS.WINDOW_WIDTH,
  w20: DIMENSIONS.WINDOW_WIDTH / 20,
};

export const HEIGHT = {
  h0: DIMENSIONS.WINDOW_HEIGHT,
  h15: DIMENSIONS.WINDOW_HEIGHT / 80,
  h50: DIMENSIONS.WINDOW_HEIGHT / 15,

};

export const FONTS = {
  f18: DIMENSIONS.WINDOW_HEIGHT * 0.02,
};