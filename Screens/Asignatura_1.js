import React, { useState } from 'react'
import { Text, View, TextInput, Button, StyleSheet } from 'react-native'
import Horario from '../Components/Horarios'
import Profesor from '../Components/Profesor'
import Boton from '../Components/Boton'
import '../Styles/Styles.css'

const Asignatura_1 = ({ navigation }) => {
    const [title, setTitle] = useState("hola");
    const [consulta, setConsulta] = useState([]);
    
    function handleChange(event) {
      const value = event.target.value;

      setTitle(value);
    }
    function handleSubmit(e){
      e.preventDefault();
      const newConsult = {
        id: crypto.randomUUID(),
        title: title,
        completed: false
      }
      const list = [...consulta]
      list.unshift(newConsult);
setConsulta(list);
    }
    
  return (
      <div className='body_Materia'>
        <div >
          <div>
          <h2>asignatura</h2>
          </div>
          <div>
            <div>
            <Profesor
                profe= "manuel"
            />
            </div>
          
            <div>
              <Horario
                hora= "9:00 a 10:00"
              />
            </div>
          </div>
        </div>

        <div className='consulta'>
              <form className='createForm' onSubmit={handleSubmit}>
                <input
                onChange={handleChange} 
                className='Inputs' 
                value={title}
                />
                <input 
                 onClick={handleSubmit}
                 type="submit" 
                 value="Enviar Consulta" 
                 className="botonCreate"
                 />
              </form>
             <div className='consulta'>
                {
                  consulta.map((item) => (
                    <div key={item.id}>{item.title}</div>
                  ))}
             </div>

          </div>

           <div className=''> 
           <Boton
      text = "volver a la lista"
        onPress = {() => {
        navigation.navigate('Materia')
        }}
          />
           </div>
        
      
      </div>
    )
  
}

export default Asignatura_1
/*
<TextInput placeholder="Campo a rellenar (Obligatorio) especificando que materiales se lllevan para poder estudiar"/><br/>
   
          
            <Button title="Aceptar" onPress={() => console.log("Enviar")}/>
            
const styles = StyleSheet.create({
  contenedor:{
    fontFamily: 'nunito',
    fontSize: '60px',
 justifyContent: 'center',
 alignItems: 'center',
 backgroundColor: '#b0c4de',
 margin: '20px'
  },
});*/
