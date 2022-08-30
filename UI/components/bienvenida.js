import React from "react";
import { StyleSheet, Text, View, Button } from 'react-native';

class Bienvenida extends React.Component {

    render(){
        return (
          <View>
            <Text>Bienvenido {this.props.profesor}</Text>
            <Button
                title="Ir a mis clases"
                onPress={() =>
                    this.props.navigation.navigate('HomeProfe')
                }
            />
          </View>
    );
    }
}