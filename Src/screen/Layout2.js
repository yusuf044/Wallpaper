
// import * as React from 'react';

// import { SafeAreaView, Image, StyleSheet, Text, TouchableOpacity, View, TextInput, ScrollView } from 'react-native';
// import ImageLayouts from "react-native-image-layouts"
// const layoutPattern = [2, 1, 2, 2, 1];

// const images = [

//   'https://images.pexels.com/photos/3831823/pexels-photo-3831823.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//   'https://images.pexels.com/photos/704971/pexels-photo-704971.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//   'https://images.pexels.com/photos/2113556/pexels-photo-2113556.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//   'https://images.pexels.com/photos/3850660/pexels-photo-3850660.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//   'https://images.pexels.com/photos/3850925/pexels-photo-3850925.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//   'https://images.pexels.com/photos/3850597/pexels-photo-3850597.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//   'https://images.pexels.com/photos/3622474/pexels-photo-3622474.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//   'https://images.pexels.com/photos/2113556/pexels-photo-2113556.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//   'https://images.pexels.com/photos/3850660/pexels-photo-3850660.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//   'https://images.pexels.com/photos/3850925/pexels-photo-3850925.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//   'https://images.pexels.com/photos/3850597/pexels-photo-3850597.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',

// ];

// export default function Layout3({ navigation }) {
//   function renderItem(item, _index) {
//     return (<TouchableOpacity onPress={() => { navigation.navigate("Dr") }}>
//       <Image source={{ item: item }} style={styles.image} />
//     </TouchableOpacity>
//     )
//   }




import  React,{useState,useEffect} from 'react';
import { SafeAreaView, Image, StyleSheet, Text, TouchableOpacity, View, TextInput, ScrollView } from 'react-native';
import ImageLayouts from "react-native-image-layouts"
import axios from "react-native-axios";
const Layout2 = ({ navigation}) => {
//   const layoutPattern = [2, 1, 2, 2, 1];
//   const images = [

//     'https://images.pexels.com/photos/3831823/pexels-photo-3831823.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//     'https://images.pexels.com/photos/704971/pexels-photo-704971.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//     'https://images.pexels.com/photos/2113556/pexels-photo-2113556.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//     'https://images.pexels.com/photos/3850660/pexels-photo-3850660.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//     'https://images.pexels.com/photos/3850925/pexels-photo-3850925.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//     'https://images.pexels.com/photos/3850597/pexels-photo-3850597.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//     'https://images.pexels.com/photos/3622474/pexels-photo-3622474.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//     'https://images.pexels.com/photos/2113556/pexels-photo-2113556.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//     'https://images.pexels.com/photos/3850660/pexels-photo-3850660.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//     'https://images.pexels.com/photos/3850925/pexels-photo-3850925.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//     'https://images.pexels.com/photos/3850597/pexels-photo-3850597.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',

//   ];
//   function renderItem(uri, _index) {
//     return (<TouchableOpacity onPress={() => { navigation.navigate("wall") }}>
//       <Image source={{ uri: uri }} style={styles.image} />
//     </TouchableOpacity>)
//   };
//   const [headerImage, setHeaderImage] = useState([]);
//   const [userDataArr, setUserDataArr] = useState([]);
//   const [loding, setLoading] = useState(true)
//   useEffect(() => {
//     console.log('banner api run ======================');
//     console.log("setUserDataArr===================", userDataArr);

//     getBanner();

//   }, []);

//   const getBanner = () => {
//     axios
//       .get('https://pixabay.com/api/?key=31422245-3aaef51dfc81d975659f460fb&q=yellow+flowers&image_type=photo')
//       .then(json => {
//         console.log('json===========', json.data?.hits);
//         setUserDataArr(json.data?.hits)
//         setHeaderImage(json?.data.id);
//         console.log('setHeaderImage', headerImage);
//       })
//       .catch(error => {
//         setLoading(false);
//         console.error(
//           '=====================error======================',
//           error,
//         );
//       });
//   };

const layoutPattern = [2, 1, 2, 2, 1];
const [imageList, setImagelist] = useState([])

function renderItem(uri, _index) {
  console.log("_________________________", uri.userImageURL)
  return (<TouchableOpacity onPress={() => {
    navigation.navigate("wall", uri), {
    }
  }}>
    <Image source={{ uri: uri.userImageURL }} style={styles.image} />
  </TouchableOpacity>)
};


const [headerImage, setHeaderImage] = useState([]);
const [userDataArr, setUserDataArr] = useState([]);
const [loding, setLoading] = useState(true)

useEffect(() => {
  getBanner();
}, []);

const getBanner = () => {
  axios
    .get('https://pixabay.com/api/?key=31422245-3aaef51dfc81d975659f460fb&q=yellow+flowers&image_type=photo')
    .then(json => {
      console.log('json===========', json.data?.hits);
      setUserDataArr(json.data?.hits)
      setHeaderImage(json?.data.id);
      setImagelist(json.data?.hits)
      console.log('setHeaderImage', headerImage);
    })
    .catch(error => {
      setLoading(false);
      console.error(
        '=====================error======================',
        error,
      );
    });
};

  return (

    <SafeAreaView style={styles.container}>
      <View style={{ backgroundColor: "#00000099", paddingHorizontal: 12 }}>
        <View style={styles.headercontaner}>
          <TouchableOpacity activeOpacity={0.6}   >
            <Image style={{ width: 25, height: 25, tintColor: "white" }}
              source={require('../Image/DrowerMenu.png')} resizeMode='contain' />
          </TouchableOpacity>
          <Text style={styles.wellbest}>WallBest</Text>

          <View style={{}}>
            <View style={{ marginTop: 10 }}>
              <Image style={{ tintColor: '#fff', width: 35, height: 35 }}
                source={require('../Image/newof.png')} resizeMode='contain' />
            </View>
            <View style={styles.notificationcontan}>
              <Text style={styles.notificationtext}>2</Text>
            </View>
          </View>

        </View>

        
          <View style={{ flexDirection: "row", alignItems: "center",  backgroundColor: '#000', borderRadius: 20, paddingHorizontal: 10, marginTop: 18, height: 45,justifyContent:"space-around" }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
        <View style={{ flexDirection: "row", paddingHorizontal: 5,justifyContent:"space-between",width:380}}>
          <TouchableOpacity activeOpacity={0.6}
            style={{ backgroundColor: "#404040", borderRadius: 18, alignItems: "center", width: 52, height: 30, justifyContent: "center" }}>
            <Text style={{ color: '#fff', fontSize: 13, fontWeight: "700" }}>TOP</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6}
            style={{ backgroundColor: "#404040", borderRadius: 18, alignItems: "center", width: 52, height: 30, justifyContent: "center" }}>
            <Text style={{ color: '#fff', fontSize: 13, fontWeight: "700" }}>TECH</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6}
            style={{ backgroundColor: "#404040", borderRadius: 18, alignItems: "center", width: 52, height: 30, justifyContent: "center" }}>
            <Text style={{ color: '#fff', fontSize: 13, fontWeight: "700" }}>COLORS</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6}
            style={{ backgroundColor: "#404040", borderRadius: 18, alignItems: "center", width: 52, height: 30, justifyContent: "center" }}>
            <Text style={{ color: '#fff', fontSize: 13, fontWeight: "700" }}>B&W</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6}
            style={{ backgroundColor: "#404040", borderRadius: 18, alignItems: "center", width: 52, height: 30, justifyContent: "center" }}>
            <Text style={{ color: '#fff', fontSize: 13, fontWeight: "700" }}>Nature</Text>
          </TouchableOpacity>
          </View>
        </ScrollView>
          </View>
      </View>
      <View style={{ marginTop: 10, paddingHorizontal: 12 }}>
        <ImageLayouts
          data={userDataArr}
          numberOfColumns={2}
          patterns={layoutPattern}
          renderItem={renderItem}
          // borderRadius={10}
        //   renderItem={({item})=>
        //   <TouchableOpacity onPress={()=>{navigation.navigate('Wall'),
        //   {
        //     userImageURL:item.userImageURL
        //   }
          
        //   }}
          dividerPadding={5}
        />
      </View>
      <View style={{ position: "absolute", zIndex: 1, width: "80%", flex: 1, bottom: 8, alignSelf: "center" }}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: '#FFFFFF99', borderRadius: 24, paddingHorizontal: 10, height: 54, marginHorizontal: 13, }}>
          <TouchableOpacity style={{ borderRadius: 30, padding: 3 }} onPress={() => { navigation.navigate("Layout2") }}>
            <Image style={{ width: 35, height: 35 }}
              source={require("../Image/trelgram.png")} resizeMode='contain' />
          </TouchableOpacity>

         
          <TouchableOpacity activeOpacity={0.6} style={{ borderRadius: 30, padding: 3 }}>
            <Image style={{ width: 35, height: 35 }}
              source={require("../Image/scrchh.png")} resizeMode='contain' />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6} style={{ borderRadius: 30, padding: 3 }}>
            <Image style={{ width: 35, height: 35 }}
              source={require("../Image/Downlodd.png")} resizeMode='contain' />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.6} style={{ borderRadius: 30, padding: 3 }}>
            <Image style={{ width: 42, height: 42 }}
              source={require("../Image/srr.png")} resizeMode='contain' />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Layout2;

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: "#353935"
  },
  image: {
    width: '100%',
    height: 185,
    borderRadius:10,elevation:2,
    borderWidth:.5,borderColor:'gray'
  },

  headercontaner: {
    flexDirection: "row", alignItems: 'center',
    justifyContent: "space-between", marginTop: 10
  },
  wellbest: {
    color: '#fff', fontSize: 22, fontWeight: '900'
  },
  notificationcontan: {
    backgroundColor: "#037171", width: 20,
    height: 20, justifyContent: "center",
    alignItems: 'center', borderRadius: 15,
    right: 15, borderWidth: 1, borderColor: '#000',
    position: "absolute", bottom: 12, marginRight: 3

  },
  notificationtext: {
    color: '#fff', fontSize: 13, fontWeight: '700',
  }

});
