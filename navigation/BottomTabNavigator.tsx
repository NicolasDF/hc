import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import AltaPacienteScreen from '../screens/AltaPacienteScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import {
  AltaPacienteParamList,
  BottomTabParamList,
  TabConsultasParamList,
  TabTwoParamList
} from '../types';
import TabConsultasScreen from "../screens/TabConsultasScreen";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Alta"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Alta"
        component={TabAltaPaciente}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Consultas"
        component={TabConsultasNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<AltaPacienteParamList>();

function TabAltaPaciente() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="AltaPacienteScreen"
        component={AltaPacienteScreen}
        options={{ headerTitle: 'Nuevo Paciente' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabConsultasStack = createStackNavigator<TabConsultasParamList>();

function TabConsultasNavigator() {
  return (
    <TabConsultasStack.Navigator>
      <TabConsultasStack.Screen
        name="TabConsultasScreen"
        component={TabConsultasScreen}
        options={{ headerTitle: 'Consultas' }}
      />
    </TabConsultasStack.Navigator>
  );
}
