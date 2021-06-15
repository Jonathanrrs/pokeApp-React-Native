import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, Button, Pressable } from 'react-native';

export const PokemonMain = ({ navigation }) => {

  const [pokemon, setPokemon] = useState({
    id: 1,
    loading: true,
    name: '',
    img: null,
    habilidad: '',
    movimiento: '',
    especie: '',
    peso: ''

  });

  useEffect(() => {
    getPokemon();
  }, []);


  const getPokemon = async (pokemonNum = 1) => {

    setPokemon({ loading: false })
    try {
      let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNum}`)
      let res = await data.json();
      setPokemon(
        {
          id: res.id,
          loading: true,
          name: res.forms[0].name,
          img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${res.id}.png`,
          habilidad: res.abilities[0].ability.name,
          movimiento: res.moves[0].move.name,
          especie: res.types[0].type.name,
          peso: res.weight
        }
      )

    } catch (error) {
      console.log(error);
    }
  }





  const nextPokemon = () => {
    getPokemon(pokemon.id + 1)
  }



  console.log(pokemon);


  return (
    <View style={styles.container}>
      {
        pokemon.loading == true
          ?
          (
            <>
              <Image style={{ width: 350, height: 150 }} source={{ uri: 'https://logos-marcas.com/wp-content/uploads/2020/05/Pokemon-Logo.png' }} />
              <Pressable onPress={() => {
                navigation.navigate('Detail', { 
                  name: pokemon.name, 
                  img: pokemon.img,  
                  habilidad: pokemon.habilidad,
                  movimiento: pokemon.movimiento,
                  especie: pokemon.especie,
                  peso: pokemon.peso,
                })
              }
              }>
                <Image style={styles.pokeimg} source={{ uri: `${pokemon.img}` }} />
              </Pressable>
              <Text style={styles.nombre}>{pokemon.name.toUpperCase()}</Text>
              <Button color='#ef5350' title="Siguiente" onPress={nextPokemon} />
            </>
          )
          :
          (
            <>

              <Image style={{ width: 350, height: 150 }} source={{ uri: 'https://logos-marcas.com/wp-content/uploads/2020/05/Pokemon-Logo.png' }} />
              <Image style={styles.loading} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png' }} />
            </>
          )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //   justifyContent: 'center',
  },
  pokeimg: {
    width: 400,
    height: 400,
  },
  loading: {
    width: 300,
    height: 300,
  },
  nombre: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 20
  },

});