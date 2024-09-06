import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/login/Login'; 
import Menu from './src/menu/Menu';
import CadastroAlunos from './src/cadastro/CadastroAlunos';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ title: 'Login' }} 
        />
        <Stack.Screen 
          name="Menu" 
          component={Menu} 
          options={{ title: 'Menu' }} 
        />
        <Stack.Screen 
          name="CadastroAlunos" 
          component={CadastroAlunos} 
          options={{ title: 'Cadastro de Alunos' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
