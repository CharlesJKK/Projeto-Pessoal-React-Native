import React from 'react';
import TelaLogin from './Telas/TelaLogin/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenStack } from 'react-native-screens';
import Humores from './Telas/TelaHumores/TelaHumores'
import VisuHumor from './Telas/TelaVisualizarHumor/VisuHumor';
import Opcoes from './Telas/Opções/Opcoes';

const Stack = createNativeStackNavigator()

export default function App(){

  return( 
      <NavigationContainer>
        <Stack.Navigator initialRoute ="Login" >
          <Stack.Screen name = 'Login' 
          component={TelaLogin}
          options={{title: null, headerTransparent: true, headerShown: false,}}
          />
          <Stack.Screen name = 'Humores' component={Humores}
          options={{title: null, headerTransparent: true, headerShown: false}}/>
          <Stack.Screen name = 'VisuHumor' component={VisuHumor}
          options={{title: null, headerTransparent: true, headerShown: false}}
          />
          <Stack.Screen name = 'Opcoes' component={Opcoes}
          options={{title: null, headerTransparent: true, headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
  )
}