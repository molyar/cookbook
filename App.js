import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

import { setStateFromServer } from './actions'

import { FirebaseStorage } from './config/FirebaseStorage';

import AppNavigator from './navigation/AppNavigator';


var store = createStore(rootReducer, composeWithDevTools());

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <Provider store={store}>
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator/>
      </View>
       </Provider>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    FirebaseStorage.ref('recipe.json').getDownloadURL().then(function(url) {
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.onload = function(event) {
          var json = xhr.response;
          store.dispatch(setStateFromServer(json.recipes));
          // store = createStore(rootReducer, { recipes: json.recipes } )
          console.log("load data successful");
          console.log(json.recipes[0].name);
        };
        xhr.open('GET', url);
        xhr.send();
      }).catch(function(error) {
        // Handle any errors
        console.log("error code = "+ error.code);
      }
    )
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

// function downloadData(setLoadingComplete) {
//   var pathReference = FirebaseStorage.ref('recipe.json');
//   pathReference.getDownloadURL().then(function(url) {
  
//     // This can be downloaded directly:
//     var xhr = new XMLHttpRequest();
//     xhr.responseType = 'blob';
//     xhr.onload = function(event) {
//       var blob = xhr.response;
//       console.log(blob.recipes);
//       setLoadingComplete(true);
//     };
//     xhr.open('GET', url);
//     xhr.send();
  
//   }).catch(function(error) {
//     // Handle any errors
//     console.log("error code = "+ error.code);
//   });
// }

function handleFinishLoading(setLoadingComplete) {
  // downloadData();
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
