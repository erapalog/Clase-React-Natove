import { View, Text } from 'react-native'
import React from 'react'

interface PersonProps  {
    firstName: string;
    secondName: string;
    age: number;

};
export default function Persona(props: PersonProps) {
  return (
    <View>
       <View>
          <Text>Hola mi nombre y edad es  {props.firstName + props.secondName + props.age}!</Text>
    </View>
    </View>
  )
}