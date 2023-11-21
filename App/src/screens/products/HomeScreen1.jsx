import React, { useState } from "react";
import { generalStyles } from "../../themes/generalStyles";
import {  Touchable,  TouchableOpacity,  View,  Image,  RefreshControl,} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { bannerData } from "../../Data/bannersData";
import { sliderData } from "../../Data/sliderData";

export const HomeScreen1 = ({ navigation }) => {
  const { navigate } = useNavigation();
  const [refresh, setRefresh] = useState(false);

  const onRefresh = () => {
    setRefresh(true);
    //usar el llamado a un servicio api o a cualquier pantalla que se quiera refresccar
    setTimeout(() => {
      setRefresh(false);
    }, 2000);
  };

  const renderBanner = (item) => {
    return (
      <View
        style={{
          // es el  contenedor de la imagen
          width: 450,
          height: 450,
          padding: 8,
          borderColor: "black",
        }}
      >
        <Image style={{ width: "100%", height: "100%" }} source={item.photo} />
      </View>
    );
  };

  return (
    <View style={generalStyles.container}>
      <View style={generalStyles.headContainer}>
        <View style={generalStyles.head}>
          <View>
            <View style={generalStyles.menuContainer}>
              <TouchableOpacity>
                <Ionicons name="filter-sharp" size={28} color="red" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <FlatList
          //tiene que venir de la base de datos

          refreshControl={
            <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
          }
          data={bannerData}
          renderItem={({ item }) => renderBanner(item)}
          keyExtractor={(item) => item.id}
          horizontal={true}
          initialScrollIndex={1}
        />
      </View>

          {/* <View style={{flex:1}}>
            <FlatList
            data={sliderData}
            renderItem={({item})=>}
            keyExtractor={item=>item.id}
            horizontal={true}
            
            />

          </View> */}







    </View>
  );
};
