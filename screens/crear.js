const react = require("react");
import React from "react"; 
import { Button } from 'react-native-elements';



import {View,Text, TextInput,  ScrollView, StyleSheet} from "react-native";
const crear = ()  => {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.titulo}>Nuevo Usuario</Text>
        <View style={styles.wrap}>
          
                <View>
                   <TextInput placeholder="Nombre" style={styles.inputgroup} />
                </View>
                <View>
                   <TextInput placeholder="Email" style={styles.inputgroup} />
                </View>
                  <View>
                  <TextInput placeholder="Telefono" style={styles.inputgroup} />
                </View>
                <View>
                   <Button   title="Save" style={styles.boton} />
                  
                </View>
                
              </View>
        
      </ScrollView>
    );
}


const styles = StyleSheet.create({
container: {
 flex:1,
 padding:10,
 borderStyle:  'solid',
 borderWidth:5,
 backgroundColor:'#A9CCE3',
 margin:5
},  
inputgroup:{
  flex: 1,
  marginTop:15,
  borderBottomWidth:1,
  borderColor: 'black',
   
  height: 40,
  padding:5,
  margin:0,
  fontSize:15,
  color:'blue'
},
boton:{
marginHorizontal:5,
marginVertical :5
},
titulo:{
  fontSize:20,
  fontWeight:'bold',
  marginBottom:5,
  textAlign:'center'
},
wrap:{
  backgroundColor:'#E8F6F3',
  borderStyle:  'solid',
  borderWidth:1,
  borderColor: 'black',
 
}
});

export default crear;