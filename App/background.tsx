import React, { ReactNode } from 'react';
import { StyleSheet, ImageBackground, View, ViewStyle } from 'react-native';

type BackgroundProps = {
  children: ReactNode;
  image?: any; // require('./path/to/image.png')
  style?: ViewStyle;
  overlayColor?: string;
};

const Background: React.FC<BackgroundProps> = ({ children, image, style, overlayColor }) => {
  const content = (
    <View style={[styles.container, style]}>
      {overlayColor && <View style={[styles.overlay, { backgroundColor: overlayColor }]} />}
      {children}
    </View>
  );

  if (image) {
    return (
      <ImageBackground source={image} style={styles.image} resizeMode="cover">
        {content}
      </ImageBackground>
    );
  }

  return content;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
  },
});

export default Background;