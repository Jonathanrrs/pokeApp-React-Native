import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';


export const PokemonSearchDetail = ({ route, navigation }) => {
    let { name } = route.params;
    let { img } = route.params;
    let { habilidad } = route.params;
    let { movimiento } = route.params
    let { especie } = route.params
    let { peso } = route.params

    const [pokemonColor, setPokemonColor] = useState({
        color: ''
    });

    useEffect(() => {
        getPokemonSpecie()
    }, [])

    const getPokemonSpecie = async () => {
        try {
            let data = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}/`)
            let res = await data.json();
            setPokemonColor({
                color: res.color.name
            });
        } catch (error) {
            console.log(error);
        }
    }

    console.log(img);

    let colorBackground = '';
    const getColor = () => {
        switch (pokemonColor.color) {
            case 'black':
                return colorBackground = '#303846';
            case 'blue':
                return colorBackground = '#8ed1fc';
            case 'brown':
                return colorBackground = '#a75639';
            case 'gray':
                return colorBackground = '#abb8c3';
            case 'green':
                return colorBackground = '#99c664';
            case 'pink':
                return colorBackground = '#e965b5';
            case 'purple':
                return colorBackground = '#8161b9';
            case 'red':
                return colorBackground = '#fa2a2a';
            case 'white':
                return colorBackground = '#white';
            case 'yellow':
                return colorBackground = '#ffeb3b';
            default:
                return colorBackground = 'white';
        }
    }

    getColor();

    return (
        <View style={[styles.container, { backgroundColor: colorBackground }]}>
            <Image style={styles.pokeimg} source={{ uri: `${img}` }} />

            <View style={styles.detalles}>
                <Text style={styles.name}>{name.toUpperCase()}</Text>
                <View style={styles.habilidad}>
                    <View>
                        <Image style={{ width: 50, height: 50 }} source={require('../assets/poder.png')} />
                    </View>
                    <View>
                        <Text style={styles.info}>{habilidad.toUpperCase()}</Text>
                        <Text>PODER</Text>
                    </View>
                </View>
                <View style={styles.movimiento}>
                    <View>
                        <Image style={{ width: 50, height: 50 }} source={require('../assets/movimiento.png')} />
                    </View>
                    <View>
                        <Text style={styles.info}>{movimiento.toUpperCase()}</Text>
                        <Text>MOVIMIENTO</Text>
                    </View>
                </View>
                <View style={styles.especie}>
                    <View>
                        <Image style={{ width: 50, height: 50 }} source={require('../assets/especie.png')} />
                    </View>
                    <View>
                        <Text style={styles.info}>{especie.toUpperCase()}</Text>
                        <Text>ESPECIE</Text>
                    </View>

                </View>
                <View style={styles.peso}>
                    <View>
                        <Image style={{ width: 50, height: 50 }} source={require('../assets/peso.png')} />
                    </View>
                    <View>
                        <Text style={styles.info}>{peso}</Text>
                        <Text>PESO</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    name: {
        marginTop: 10,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center'
    },
    pokeimg: {
        width: 280,
        height: 280,

    },
    detalles: {
        // marginTop: 150,
        backgroundColor: 'white',
        // height: 450,
        // width: 420,
        // alignItems: 'stretch',
        alignSelf: 'stretch',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    habilidad: {
        backgroundColor: 'tomato',
        flexDirection: 'row',
        width: 300,
        borderRadius: 10,
    },
    movimiento: {
        flexDirection: 'row',
        backgroundColor: '#00bcd4',
        width: 300,
        flexDirection: 'row',
        borderRadius: 10
    },
    especie: {
        backgroundColor: '#d4c4fb',
        flexDirection: 'row',
        width: 300,
        flexDirection: 'row',
        borderRadius: 10
    },
    peso: {
        backgroundColor: '#ee3d6b',
        flexDirection: 'row',
        width: 300,
        flexDirection: 'row',
        borderRadius: 10,
    },
    info: {
        fontSize: 20,
        letterSpacing: 5,
        borderRadius: 5,
    },
});

