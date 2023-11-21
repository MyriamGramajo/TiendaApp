import React, { useState } from "react";
import { Button, Text, View, Image, RefreshControl } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { bannerData } from "../../Data/bannersData";
import { generalStyles } from "../../themes/generalStyles";

export const HomeScreens = ({ navigation }) => {
  // navigation en  una props

  const [refresh, setRefresh] = useState(false);

  const onRefresh = () => {
    setRefresh(true);
    // usar el llamado a un servicio api o a cualquier cosa que se quiera refreascar
    setTimeout(() => {
      console.log("finalizo refrescando");
      setRefresh(false); // para que no se muestre
    }, 3000);
  };

  const renderBanner = (item) => {
    return (
      <View
        style={{
          // es el  contenedor de la imagen
          width: 400,
          height: 400,
          padding: 0,
          borderColor: 5,
        }}
      >
        <Image style={{ width: "100%", height: "100%" }} source={item.photo} />
      </View>
    );
  };

  return (
    <View
      style={{
        //es el contenedor
        flex: 3,
        flexDirection: "colum",
        alignItems: "center", // en el eje de las x
        justifyContent: "center",

        // ejes de las y
        // backgroundColor:'grey',
      }}
    >
      
      { <FlatList
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
        }
        data={bannerData}
        renderItem={({ item }) => renderBanner(item)}
        keyExtractor={(item) => item.id}
        horizontal={true}
        //initialScrollIndex={2}
        //onPress
      /> }
    </View>
  );
};

//desarrollo del flatlist
