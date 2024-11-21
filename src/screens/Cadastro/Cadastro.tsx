import React from 'react';
import { View } from 'react-native';
import { BatTextInput } from "../../components/BatTextInput/BatTextInput";
import { BatLogoMini } from "../../components/BatLogoMini/BatLogoMini"

import { styles } from './CadastroStyle';

export function Cadastro() {
  return (
    <>
         <BatLogoMini ></BatLogoMini>
        <BatTextInput/>
        
    </>
  );
}