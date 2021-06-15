// import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


import { PokemonDetail } from './src/PokemonDetail';
import { PokemonMain } from './src/PokemonMain';
import { PokemonSearch } from './src/PokemonSearch';
import { PokemonList } from './src/PokemonList';
import { pokemonSearchMain } from './src/PokemonSearchMain';
import { PokemonListMain } from './src/PokemonListMain';
import { PokemonListDetail } from './src/PokemonListDetail';
import { PokemonSearchDetail } from './src/PokemonSearchDetail';
import { BadgeContext } from './src/BadgeContext';

export default function App() {

const [badgeContador, setBadgeContador] = useState(5);

  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const StackMain = () => {
    return (

      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#ef5350',
        },
        headerTintColor: 'white',
        headerTitleAlign: 'center'
      }}>
        <Stack.Screen name="Main" component={PokemonMain} options={{
          title: 'Pokémon',
        }} />
        <Stack.Screen name="Detail" component={PokemonDetail} options={{
          title: 'Pokémon detalles',
        }} />
      </Stack.Navigator>

    )
  }

  const StackBuscar = () => {
    return (
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#ef5350',
        },
        headerTintColor: 'white',
        headerTitleAlign: 'center'
      }}>
        <Stack.Screen name="Buscar" component={PokemonSearch} options={{
          title: 'Buscar pokémon',
        }} />
        <Stack.Screen name="SearchMain" component={pokemonSearchMain} options={{
          title: 'Resultados',
        }} />
        <Stack.Screen name="SearchDetail" component={PokemonSearchDetail} options={{
           title: 'Pokémon detalles',
        }}  />
      </Stack.Navigator>
    )
  }

  const StackLista = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#ef5350',
          },
          headerTintColor: 'white',
          headerTitleAlign: 'center'
        }}
      >
        <Stack.Screen name="Lista" component={PokemonList} options={{
          title: 'Lista pokémones',
        }} />
        <Stack.Screen name="ListMain" component={PokemonListMain} options={{
          title: 'Pokémon',
        }} />
        <Stack.Screen name="ListDetail" component={PokemonListDetail} options={{
          title: 'Pokémon detalles',
        }} />
      </Stack.Navigator>
    )
  }

 

  return (
    <NavigationContainer>
    <BadgeContext.Provider value={{
      badgeContador,
      setBadgeContador
    }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name == 'Main') {
              iconName = focused
                ? 'home'
                : 'home'
            } else if (route.name == 'Buscar') {
              iconName = focused
                ? 'search'
                : 'search'
            }
            else if (route.name == 'Lista') {
              iconName = focused
                ? 'list'
                : 'list'
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          }
        })}
        tabBarOptions={{
          activeTintColor: '#ef5350',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Main" component={StackMain} />
        <Tab.Screen name="Buscar" component={StackBuscar} />
        <Tab.Screen name="Lista" component={StackLista} options={{ tabBarBadge: badgeContador }} />
      </Tab.Navigator>
    </BadgeContext.Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300,
    height: 300,
  }
});
