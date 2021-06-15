import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Button } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';


export const PokemonSearch = ({ navigation }) => {
    const [buscarName, setBuscarName] = useState('');

    return (
        <KeyboardAwareScrollView style={{ backgroundColor: 'white' }}>
            <View style={styles.container}>
                <Image style={{ width: 350, height: 150 }} source={{ uri: 'https://logos-marcas.com/wp-content/uploads/2020/05/Pokemon-Logo.png' }} />
                <Image style={styles.imgBuscar} source={require('../assets/pokebola.png')} />
                <TextInput style={styles.inputBuscar} placeholder='Buscar' /* value={buscarName} */ onChangeText={(name) => { setBuscarName(name) }} />
                <Button color='#ef5350' title='Buscar' onPress={() => {
                    navigation.navigate('SearchMain', {name: buscarName.toLowerCase()})
                }} />
            </View>
        </KeyboardAwareScrollView>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        //   justifyContent: 'center',
    },
    imgBuscar: {
        width: 300,
        height: 300,
    },
    inputBuscar: {
        backgroundColor: '#ffd700',
        width: 300,
        marginTop: 20,
        borderRadius: 10,
        height: 40,
        marginBottom: 20,
        borderColor: '#00bfff',
        borderWidth: 2,
        textAlign: 'center'
    },

});
