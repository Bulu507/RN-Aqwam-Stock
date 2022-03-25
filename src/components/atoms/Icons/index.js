import React from 'react';
import {View} from 'react-native';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconION from 'react-native-vector-icons/Ionicons';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import IconOC from 'react-native-vector-icons/Octicons';

export default function Icons({icon, size, style}) {
  const [iconType, iconName] = icon.split(' ');
  const Icon = () => {
    if (iconType === 'fa') {
      return <IconFA name={iconName} size={size} style={style} />;
    }
    if (iconType === 'ion') {
      return <IconION name={iconName} size={size} style={style} />;
    }
    if (iconType === 'mc') {
      return <IconMC name={iconName} size={size} style={style} />;
    }
    if (iconType === 'mi') {
      return <IconMI name={iconName} size={size} style={style} />;
    }
    if (iconType === 'oc') {
      return <IconOC name={iconName} size={size} style={style} />;
    }
    return <IconFA name={iconName} size={size} style={style} />;
  };

  return (
    <View>
      <Icon />
    </View>
  );
}
