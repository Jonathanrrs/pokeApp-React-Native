import React, { useEffect, useState, useCallback, useContext } from 'react';
import { View, Text, FlatList, StyleSheet, RefreshControl, Image } from 'react-native';
import { ListItem, Avatar, Button } from 'react-native-elements';
import { BadgeContext } from './BadgeContext';



export const PokemonList = ({ navigation }) => {


    const [listaPokemones, setListaPokemones] = useState({
        limit: 4,
        pokemones: [],
        refreshing: false,
        loading: true
    });
    // const [refreshing, setRefreshing] = useState(false);
    // const [contador, setContador] = useState(5);

    const { badgeContador, setBadgeContador } = useContext(BadgeContext);
    console.log(badgeContador);
    // console.log(contador);

    useEffect(() => {
        getPokemones();
    }, [badgeContador])

    const getPokemones = async () => {
        // const {limit} = listaPokemones;
        setListaPokemones({ loading: false })
        try {
            let data = await fetch(`https://pokeapi.co/api/v2/pokemon/?&limit=${badgeContador}`)
            let res = await data.json();
            // let pokemones = res.results
            setListaPokemones(
                {
                    // limit: limit,
                    // ...listaPokemones,
                    pokemones: res.results,
                    refreshing: false,
                    loading: true
                }
            )

        } catch (error) {
            console.log(error);
        }
    }

    const onRefresh = () => {
        // setContador(contador+5)
        setBadgeContador(badgeContador + 5)
    }

    console.log(listaPokemones);
    const keyExtractor = (item, index) => index.toString();

    const renderItem = ({ item }) => (
        <ListItem bottomDivider onPress={() => {
            navigation.navigate('ListMain', { name: item.name })
        }}>
            <Avatar source={require('../assets/pokelista.png')} />
            <ListItem.Content>
                <ListItem.Title>{item.name.toUpperCase()}</ListItem.Title>
                <ListItem.Subtitle>Pokémon</ListItem.Subtitle>
            </ListItem.Content>
            {/* <ListItem.Chevron /> */}
        </ListItem>
    )

    return (
        // <>
        // <FlatList
        //     keyExtractor={keyExtractor}
        //     data={listaPokemones.pokemones}
        //     renderItem={renderItem}
        //     style={{ backgroundColor: 'white' }}
        //     refreshControl={
        //         <RefreshControl
        //             refreshing={listaPokemones.refreshing}
        //             onRefresh={onRefresh}
        //         />
        //     }
        // />
        // </>

        listaPokemones.loading == true
            ?
            <>
                <FlatList
                    keyExtractor={keyExtractor}
                    data={listaPokemones.pokemones}
                    renderItem={renderItem}
                    style={{ backgroundColor: 'white' }}
                    refreshControl={
                        <RefreshControl
                            refreshing={listaPokemones.refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                />
            </>
            :
            <>
                <View style={styles.container}>
                    {/* <Image style={styles.loading} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png' }} /> */}
                    <Image style={styles.loading} source={require('../assets/search.png')} />
                    <Text style={{marginTop: 10, fontSize: 20}}>Cargando...</Text>
                </View>
            </>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loading: {
        width: 300,
        height: 300,
    },
});






