import React from 'react';
import { View , Image ,Pressable ,Text} from 'react-native';
import bat_logo from '../../../assets/bat_logo.png';

import { styles } from './BatLogoStyle';

export function BatLogo() {
  return (
   
    <Image source={bat_logo} style={styles.logo}/>
   
  );
}