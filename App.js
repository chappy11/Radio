import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList,TouchableOpacity } from 'react-native';
import WebView from 'react-native-webview';
import { NavigationContainer as Navigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <Navigation>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Radio" component={Radio}/>
      </Stack.Navigator>      
    </Navigation>
    
    // <View style={styles.container}>
    //   <WebView
    //       source={{ uri: 'https://iradioph.com/' }}
    //     style={{ marginTop: 20,flex:1 }}
    //   />
    // </View>
  );
}

const Home = ({navigation}) => {
  const radioList = [
    {
      id:1,
      name: "RYFM Cebu",
      link: "https://ryfmcebu.com/"
    },
    {
      id:2,
      name: "Web Fm",
      link: "https://jamesspiderkaka.com"
    },
    {
      id:3,
      name: "Sandy 101 Online",
      link: "https://sandy101online.com"
    },
    {
      id:4,
      name: "Fresh FM",
      link: "https://freshfmph.com"
    },
    {
      id:5,
      name: "Raul Chito",
      link:"https://raulchito.com/"
    },
    {
      id:6,
      name: "I Fm Cebu",
      link: "https://ifmcebu.iradioph.com/"
    },
    {
      id:7,
      name: "Q FM",
      link:"https://qfm907.com"
    }
  ]

  const handlepress = (item) => {
      navigation.navigate("Radio",{item})
  }

  const renderItem = ({ item, i }) => (
    <TouchableOpacity style={styles.item} onPress={()=>handlepress(item)}>
      <Text>{item.name}</Text>
   </TouchableOpacity>
  )
  return (
    <View>
      <FlatList
        data={radioList}
        renderItem={renderItem}
        keyExtractor={(e)=>e.id}
      />
    </View>
  );
}

const Radio = ({route,navigation}) => {
  const { link } = route.params.item;
  console.log(link);
  return ( 
    <WebView
     source={{uri:link}}
      style={{flex:1}}
    />
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  item: {
    padding: 20,
    backgroundColor: "#fefefe",
    marginVertical:5
  }
});
