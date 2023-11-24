import { View } from "react-native";
import * as SecureStore from "expo-secure-store";

import globalCss from "../styles/global.css";
import { useEffect } from "react";
import CustomText from "../customComponents/Text";

const Home = ({navigation}) => {
  useEffect(() => {
    const authUser = async () => {
        await SecureStore.getItemAsync('user-token')
        .then((res) => {
            if (res) {
                console.log(res);
            } else
                navigation.navigate("Login")
        })
    };

    authUser();
  }, []);

  return (
    <View style={globalCss.container}>
      <CustomText>Home</CustomText>
    </View>
  );
};

export default Home;
