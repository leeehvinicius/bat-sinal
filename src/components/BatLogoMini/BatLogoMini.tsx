import React from 'react';
import { View , Image} from 'react-native';

import { styles } from './BatLogoMiniStyle';

import bat_logo_min from '../../../assets/banner_pequeno.png';

export function BatLogoMini() {
  return (
   <Image source={bat_logo_min}></Image>
  );
}