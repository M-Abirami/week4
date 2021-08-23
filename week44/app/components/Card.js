import React from 'react';
import { StyleSheet, Text, SafeAreaView,Platform,StatusBar, View,Button, Image} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../config/colors';
import color from '../config/colors';


function Card({title, subtitle, image}){
    return(
        // <AppText style={styles.title}>{title}</AppText>
        // <AppText style={styles.subtitle}>{subtitle}</AppText>
        <View style={styles.card}>
       
        <Image style={styles.image} source={image} />
        
        <View style={styles.container}>
       
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
</View>
    )
}


const styles = StyleSheet.create({
   card:{
       borderRadius: 1,
       backgroundColor: "white",
       marginTop:35,
       overflow:"hidden",
       width:"150%",
      
   },
   container:{
       padding:20,
      
   },
   image:{
       width:"85%",
       height:200,
       borderTopRightRadius:10,
       borderTopLeftRadius:10
   },
   subtitle:{
       fontWeight:'bold',
       color:colors.secondary
   },
   title:{
       marginBottom:7
   }
})


export default Card;

