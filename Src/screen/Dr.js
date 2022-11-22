import { Image, StyleSheet, Text, TouchableOpacity, View, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from "react-native-axios";
const Dr = ({ navigation, route }) => {
  console.log("===========", route?.prams);
  const [headerImage, setHeaderImage] = useState([]);
  const [userDataArr, setUserDataArr] = useState([]);
  const [loding, setLoading] = useState(true)
  const { webformatURL,user,likes,downloads,tags } = route.params
  // useEffect(() => {
  //   getBanner();
  // }, []);

  // const getBanner = () => {
  //   axios
  //     .get('https://pixabay.com/api/?key=31422245-3aaef51dfc81d975659f460fb&q=yellow+flowers&image_type=photo')
  //     .then(json => {
  //       console.log('json===========', json.dat.hits[0].likes);
  //       setUserDataArr(json.data?.hits)
  //       setHeaderImage(json?.data);
  //       console.log('setHeaderImage', headerImage);
  //     })
  //     .catch(error => {
  //       setLoading(false);
  //       console.error(
  //         '=====================error======================',
  //         error,
  //       );
  //     });
  // };

  return (
    <ScrollView style={styles.flexView}>
      <View style={{ marginHorizontal: 10, backgroundColor: "00000099" }}>
        <View style={styles.headercontaner}>
          <TouchableOpacity activeOpacity={0.6} onPress={() => { navigation.navigate("Dr2") }}>
            <Image style={{ width: 25, height: 25, tintColor: "white" }}
              source={require('../Image/DrowerMenu.png')} resizeMode='contain' />
          </TouchableOpacity>
          <Text style={styles.wellbest}>WallBest</Text>


          <View style={{}}>
            <View style={{ marginTop: 10 }}>
              <Image style={{ tintColor: '#fff', width: 24, height: 24 }}
                source={require('../Image/Bookmark.png')} resizeMode='contain' />
            </View>
            <View style={styles.notificationcontan}>
              <Text style={styles.notificationtext}>2</Text>
            </View>
          </View>

        </View>

        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: '#000', borderRadius: 20, paddingHorizontal: 10, marginTop: 18, height: 45 }}>
          <TouchableOpacity activeOpacity={0.6} onPress={() => { navigation.goBack() }}
            style={{ backgroundColor: "#404040", borderRadius: 18, alignItems: "center", width: 52, height: 30, justifyContent: "space-around", flexDirection: "row", }}>
            <Image style={[styles.hart, { width: 8, height: 13 }]} source={require("../Image/backicon.png")} />
            <Text style={{ color: '#fff', fontSize: 15, fontWeight: "700" }}>Back</Text>
          </TouchableOpacity>
          <View style={{}}>

            <Text style={[styles.downlodText, { fontSize: 17, fontWeight: "700" }]}>{user} </Text>


          </View>

          <TouchableOpacity activeOpacity={0.6}
            style={{ backgroundColor: "#404040", borderRadius: 18, alignItems: "center", width: 30, height: 30, justifyContent: "center" }}>
            <Image style={styles.hart} source={require("../Image/uploded.png")} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6}
            style={{ backgroundColor: "#404040", borderRadius: 18, alignItems: "center", width: 30, height: 30, justifyContent: "center" }}>
            <Image style={[styles.hart, {}]} source={require("../Image/StarB.png")} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginTop: 10 }}>
        <View style={styles.viewSec} >
          {/* <Image resizeMode="cover" style={[styles.img,{}]} source={item.largeImageURL}/> */}
          <Image style={styles.img} source={{uri:webformatURL}}  />
        </View>
        <View style={styles.Contender}>
          <View style={[styles.HartView, { padding: 4, justifyContent: "space-between", }]}>
            <Image style={[styles.hart, { tintColor: "red" }]} source={require("../Image/likeRex.png")} />
            <Text style={styles.text}>{likes}</Text>
          </View>
          <View style={[styles.HartView, { width: "28%", padding: 4, justifyContent: "space-between", }]}>
            <Image style={styles.hart} source={require("../Image/downlod.png")} />
            <Text style={styles.text}>{downloads}</Text>
          </View>
          <View style={[styles.HartView, { width: "40%", padding: 4, justifyContent: "space-between", }]}>
            <Image style={styles.hart} source={require("../Image/profileww.png")} />
            <Text style={styles.text}>{user}</Text>
          </View>
        </View>
        <View style={styles.FlexCut}>
          <View style={styles.HartView2}>
            <Image style={styles.hart} source={require("../Image/locationn.png")} />
            <Text style={[styles.text, { marginLeft: 10 }]}>{tags}</Text>
          </View>
          <View style={[styles.HartView2, { justifyContent: "space-around", marginLeft: 30 }]}>
            <View style={[styles.HartView, { width: 63, }]}>
              <Text style={styles.text}>Nature</Text>
            </View>
            <View style={[styles.HartView, { marginLeft: 10, width: 42 }]}>
              <Text style={styles.text}>City</Text>
            </View>
          </View>
        </View>
        <View style={styles.FlexCut}>
          <View style={[styles.HartView2]}>
            <Image style={styles.hart} source={require("../Image/clander.png")} />
            <Text style={[styles.text, { marginLeft: 10 }]}>{tags}</Text>
          </View>
          <View style={[styles.HartView2, { justifyContent: "space-around", marginLeft: 30 }]}>
            <View style={[styles.HartView, { width: 40 }]}>
              <Text style={styles.text}>Sea</Text>
            </View>
            <View style={[styles.HartView, { marginLeft: 10, width: 61 }]}>
              <Text style={styles.text}>iphone</Text>
            </View>
          </View>
        </View>
        <View style={styles.FlexCut}>
          <View style={styles.HartView2}>
            <Image style={styles.hart} source={require("../Image/ip12.png")} />
            <Text style={[styles.text, { marginLeft: 10 }]}>{tags}</Text>
          </View>
          <View style={[styles.HartView2, { justifyContent: "space-around", marginLeft: 35 }]}>
            <View style={[styles.HartView, { width: 61 }]}>
              <Text style={styles.text}>Sunset</Text>
            </View>
            <View style={[styles.HartView, { marginLeft: 10, width: 71 }]}>
              <Text style={styles.text}>Summer</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.buttonflex}>
        <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("Dr2") }}>
          <Text style={styles.downlodText}>DOWNLOAD</Text>
        </TouchableOpacity>
      </View>
      
    </ScrollView>
  )
}

export default Dr

const styles = StyleSheet.create({
  flexView: {
    flex: 1, backgroundColor: "#353935"
  },
  img: {
    width: "100%", height: 370, borderRadius: 10
  },
  viewSec: {
    marginHorizontal: 13, elevation: 3
  },
  hart: {
    width: 20, height: 18, tintColor: "#FFF"
  },
  HartView: {
    backgroundColor: "#000000", flexDirection: "row", width: "22%", padding: 2,
    borderRadius: 18, paddingHorizontal: 8, marginTop: 10, justifyContent: "center"
  },
  text: {
    color: "#FFF", fontSize: 16, alignItems: "center"
  },
  Contender: {
    width: "85%", flexDirection: "row", justifyContent: "space-around", alignSelf: "center"
  },
  HartView2: {
    flexDirection: "row", flex: 1
  },
  FlexCut: {
    flexDirection: "row", alignItems: "center", marginHorizontal: 18, marginTop: 8
  },
  button: {
    backgroundColor: "#037171", padding: 17, width: "60%", borderRadius: 40, alignSelf: "center", marginTop: 20, justifyContent: "flex-end",bottom:8
  },
  downlodText: {
    fontSize: 21, color: "#FFF", fontWeight: "bold", textAlign: "center"
  },
  buttonflex: { justifyContent: "flex-end", flex: 0.9 },
  headercontaner: {
    flexDirection: "row", alignItems: 'center',
    justifyContent: "space-between", marginTop: 10,
  },
  wellbest: {
    color: '#fff', fontSize: 28, fontStyle: "italic"
  },
  notificationcontan: {
    backgroundColor: "#037171", width: 20,
    height: 20, justifyContent: "center",
    alignItems: 'center', borderRadius: 15,
    right: 10, borderWidth: 1, borderColor: '#000',
    position: "absolute", bottom: 12, marginRight: 3

  },
  notificationtext: {
    color: '#fff', fontSize: 13, fontWeight: '700',
  }
})