



//component login
var Saludar = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Hola {this.props.nombre}</h1>
            </div>
        );
    }
});

ReactDOM.render(<Saludar nombre="Juan" />, document.getElementById('app'));

//component login
var Login = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder="Usuario" />
                    <input type="password" placeholder="Contraseña" />
                    <button>Iniciar sesión</button>
                </form>
            </div>
        );
    }
});

ReactDOM.render(<Login />, document.getElementById('app'));

//component login
var Login = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder="Usuario" />
                    <input type="password" placeholder="Contraseña" />
                    <button>Iniciar sesión</button>
                </form>
            </div>
        );
    }
});

ReactDOM.render(<Login />, document.getElementById('app'));

//component login
var Login = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder="Usuario" />
                    <input type="password" placeholder="Contraseña" />
                    <button>Iniciar sesión</button>
                </form>
            </div>
        );
    }
});

ReactDOM.render(<Login />, document.getElementById('app'));

//component login
var Login = React.createClass({

=======

//component login
var Saludar = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Hola {this.props.nombre}</h1>
            </div>
        );
    }
});

// Language: javascript
// Path: src\ui\Saludar.js
//component login
var Saludar = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Hola {this.props.nombre}</h1>
            </div>
        );
    }
});

// Language: javascript
// Path: src\ui\Saludar.js
//component login
var Saludar = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Hola {this.props.nombre}</h1>
            </div>
        );
    }
});

// Language: javascript
// Path: src\ui\Saludar.js
//component login
var Saludar = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Hola {this.props.nombre}</h1>
            </div>
        );
    }
});

// Language: javascript
// Path: src\ui\Saludar.js
//component login
var Saludar = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Hola {this.props.nombre}</h1>
            </div>
        );
    }
});

// Language: javascript
// Path: src\ui\Saludar.js
//component login
var Saludar = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Hola {this.props.nombre}</h1>
            </div>
        );
    }
});

// Language: javascript

=======

//component login
var Saludar = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Hola {this.props.nombre}</h1>
            </div>
        );
    }
});

ReactDOM.render(<Saludar nombre="Juan" />, document.getElementById('app'));

//component login
var Login = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder="Usuario" />
                    <input type="password" placeholder="Contraseña" />
                    <button>Ingresar</button>
                </form>
            </div>
        );
    }
});

ReactDOM.render(<Login />, document.getElementById('app'));

//component login
var Login = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder="Usuario" />
                    <input type="password" placeholder="Contraseña" />
                    <button>Ingresar</button>
                </form>
            </div>
        );
    }
});

ReactDOM.render(<Login />, document.getElementById('app'));

//component login
var Login = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder="Usuario" />
                    <input type="password" placeholder="Contraseña" />
                    <button>Ingresar</button>
                </form>
            </div>
        );
    }
});

ReactDOM.render(<Login />, document.getElementById('app'));

//component login
var Login = React.createClass({
    render: function () {

=======

//component login
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saludar } from '../actions/saludar';
import { saludar2 } from '../actions/saludar2';
import { saludar3 } from '../actions/saludar3';
import { saludar4 } from '../actions/saludar4';
import { saludar5 } from '../actions/saludar5';
import { saludar6 } from '../actions/saludar6';
import { saludar7 } from '../actions/saludar7';
import { saludar8 } from '../actions/saludar8';
import { saludar9 } from '../actions/saludar9';
import { saludar10 } from '../actions/saludar10';
import { saludar11 } from '../actions/saludar11';
import { saludar12 } from '../actions/saludar12';
import { saludar13 } from '../actions/saludar13';
import { saludar14 } from '../actions/saludar14';
import { saludar15 } from '../actions/saludar15';
import { saludar16 } from '../actions/saludar16';
import { saludar17 } from '../actions/saludar17';
import { saludar18 } from '../actions/saludar18';
import { saludar19 } from '../actions/saludar19';
import { saludar20 } from '../actions/saludar20';
import { saludar21 } from '../actions/saludar21';
import { saludar22 } from '../actions/saludar22';
import { saludar23 } from '../actions/saludar23';
import { saludar24 } from '../actions/saludar24';

=======

//component login

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { useAuth } from '../../hooks/auth';

const Saludar = () => {
  const { signOut } = useAuth();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenido</Text>
      <TouchableOpacity onPress={() => signOut()}>
        <Feather name="log-out" size={24} color="#4D4D4D" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4D4D4D',
  },
});

=======

//component login
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { useAuth } from '../../hooks/auth';

const Home = () => {
  const { signOut } = useAuth();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/logo.png')} />
        <TouchableOpacity onPress={signOut}>
          <Feather name="log-out" size={28} color="#e82041" />
        </TouchableOpacity>
      </View>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={require('../../assets/avatar.png')}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Vinicius</Text>
          <Text style={styles.subject}>Matemática</Text>
        </View>
      </View>
      <Text style={styles.bio}>
        Este é o seu perfil. Aqui você pode ver o seu progresso na sua área de
        interesse.
      </Text>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Todos os Exercícios</Text>
          <Feather name="arrow-right" size={16} color="#e82041" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f7',

=======

//component login
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import { saludar } from '../actions/saludar';
import { saludar2 } from '../actions/saludar2';
import { saludar3 } from '../actions/saludar3';
import { saludar4 } from '../actions/saludar4';
import { saludar5 } from '../actions/saludar5';
import { saludar6 } from '../actions/saludar6';
import { saludar7 } from '../actions/saludar7';
import { saludar8 } from '../actions/saludar8';
import { saludar9 } from '../actions/saludar9';
import { saludar10 } from '../actions/saludar10';
import { saludar11 } from '../actions/saludar11';
import { saludar12 } from '../actions/saludar12';
import { saludar13 } from '../actions/saludar13';
import { saludar14 } from '../actions/saludar14';
import { saludar15 } from '../actions/saludar15';
import { saludar16 } from '../actions/saludar16';
import { saludar17 } from '../actions/saludar17';
import { saludar18 } from '../actions/saludar18';
import { saludar19 } from '../actions/saludar19';
import { saludar20 } from '../actions/saludar20';
import { saludar21 } from '../actions/saludar21';
import { saludar22 } from '../actions/saludar22';
import { saludar23 } from '../actions/saludar23';
import { saludar24 } from '../actions/saludar24';
import { saludar25 } from '../actions/saludar25';

=======

//component login
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createSwitchNavigator } from 'react-navigation-switch';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createSwitchNavigator } from 'react-navigation-switch';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createSwitchNavigator } from 'react-navigation-switch';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createSwitchNavigator } from 'react-navigation-switch';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
