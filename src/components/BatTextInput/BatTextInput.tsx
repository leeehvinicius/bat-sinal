import React from 'react';
import {Text,TextInput} from 'react-native';

import { styles } from './BatTextInputStyle';

export function BatTextInput() {

  
  return (
    <>
           
          <TextInput
            style={styles.input}
            placeholder="Nome"
           
          />
          <Text>Telefone</Text>
          <TextInput
            style={styles.input}
            placeholder="Telefone"
            keyboardType="phone-pad"
           
          />
           <Text>Localização Atual</Text>
          <TextInput
            style={styles.input}
            placeholder="Localização Atual"
            
          />
           <Text>Observação</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Observação"
            
            multiline={true}
          />
           <Text>this is you hint</Text>

    </>
  );
}