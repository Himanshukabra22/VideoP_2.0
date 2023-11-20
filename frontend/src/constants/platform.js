import { Platform } from 'react-native';
import { SCREEN_WIDTH } from './screen';

export const IS_ANDROID = Platform.OS === 'android';
export const IS_IOS = Platform.OS === 'ios';
export const IS_WEB = Platform.OS === 'web';

export const IS_SMALL_SCREEN = SCREEN_WIDTH < 375;
export const IS_MEDIUM_SCREEN = SCREEN_WIDTH < 460;
export const IS_LARGE_SCREEN = SCREEN_WIDTH < 768;
export const IS_XLARGE_SCREEN = SCREEN_WIDTH < 1024;
export const IS_XXLARGE_SCREEN = SCREEN_WIDTH < 1440;
