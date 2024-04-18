import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Home from './screen/home/Home';
import Persona from './screen/home/Persona';

export class App extends Component {
  
  render() {
    const name:string="Salidos";
    const IntegerNumber:number=4;
    const RealNumber:number=4.9089088908908080989080890;
    const YesorNo: boolean=false;

    let numberArrayInt: number[] = [1, 2, 3, 4]
    let numberArray: Array<string> = ['uno', 'dos', 'trse']

    interface Person {
      name: string;
      age: number;
      dogs?: boolean;
    }

    const PersonObject: Person = {
      name: 'Erick',
      age: 30,
      dogs: false
    }

    const getFullName = (firstName: string,secondName: string,thirdName: string) => {
      return firstName + ' ' + secondName + ' ' + thirdName;
    };

    const props={firstName:"Eirck",secondName:"Roberto",age:3}
    return (
      <View>

        <Text>Variable String {name}</Text>
        <Text>Variable entera {IntegerNumber}</Text>
        <Text>Variable real {RealNumber}</Text>
        <Text>Variable boolean {YesorNo}</Text>
        {
          numberArrayInt.map((elemento, index) => (
             <Text key={index} >{elemento}</Text>
          ))
        }
        {
          numberArray.map((elemento, index) => (
             <Text key={index} >{elemento}</Text>
          ))
        }

      <Text>Variable String {PersonObject.name}</Text>
      <Text>Variable Varile ente {PersonObject.age}</Text>
      <Text>Variable boolean {PersonObject.dogs?.valueOf()}</Text>

      <Text>Llamando una funcion {getFullName('Rum', 'Tum', 'Tugger')}!</Text>
      <Home> usar este sin nada</Home>

      <Persona firstName="Eirck" secondName="Roberto" age={3}></Persona>
      <Persona {...{firstName:"Eirck",secondName:"Roberto",age:3}}></Persona>
      <Persona {...props}>Esto se llama propagacion</Persona>
      



      </View>
    )
  }
}

export default App