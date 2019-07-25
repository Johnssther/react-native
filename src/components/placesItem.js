import React from 'react';
import { View, Text } from 'react-native';
import { Card } from "react-native-elements";
 
function PlacesItem(props) {
 const { item } = props;
 
 return (
   <Card>
     <View>
       <Text>{item.sitio_codigo}</Text>
       <Text>{item.sitio_nombre}</Text>
     </View>
   </Card>
 )
}
 
export default PlacesItem
