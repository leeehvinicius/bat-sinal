import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {  Text, TextInput, View, Pressable, Alert, Image } from 'react-native';
import { BatLogo } from "../../components/BatLogo/BatLogo";
import { Cadastro } from '../Cadastro/Cadastro';


import styles from './HomeStyles';

export default function Home() {
  const [showForm, setShowForm] = useState(false); // Controla a exibição do formulário


  // Função para enviar os dados do formulário
  const handleSubmit = () => {
    Alert.alert("Formulário Enviado")
   
    setShowForm(false); // Retorna para a tela inicial
  };

  return (
    <View style={styles.container}>
   
      {!showForm ? (
        // Tela inicial com o logo e botão
       
        <View style={styles.logoContainer}>
           
            <BatLogo ></BatLogo>
           
          <Pressable style={styles.button} onPress={() => setShowForm(true)}>
            <Text style={styles.buttonText}>activate bat signal</Text>
          </Pressable>
        </View>
       
      ) : (
        // Formulário
        <View style={styles.formContainer}>         
          
         
          <Cadastro />
         
          <Pressable style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Enviar</Text>
          </Pressable>
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  
  );
}

