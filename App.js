import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as Font from "expo-font";
import  AppLoading  from "expo-app-loading";
import { Asset } from 'expo-asset';
import { Ionicons } from '@expo/vector-icons';


const cacheImages = (images) => images.map(image =>{
  if(typeof image === "string"){                         //사진이 url 형태라면
    return Image.prefetch(image)                         //url에 가서 사진 다운로드
  } else{
    return Asset.fromModule(image).downloadAsync();
  }
})

const cacheFonts = fonts =>fonts.map(font=> Font.loadAsync(font));

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const loadAssets = ()=>{
    const images = cacheImages(["https://images.unsplash.com/photo-1626275417707-3eedfb40d925?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
      require("./assets/splash.png")]);
    const fonts = cacheFonts([Ionicons.font]);
    return Promise.all([...images, ...fonts]);
  }
  const onFinish = () => setIsReady(true);
  return isReady ? <Text>Caching imgs, fonts</Text>:(
  <AppLoading
    startAsync={loadAssets}
    onFinish={onFinish}
    onError={console.error}
    />);
}

