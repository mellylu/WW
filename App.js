
import React, { useState } from 'react';
import Routes from './src/navigations/routes'
import { View, Text } from 'react-native';
import ConnectInternet from './src/components/connectInternet';
import NoConnectionScreen from './src/screens/NoConnectionScreen/NoConnectionScreen';

const App = () => {
  const [connectStatus, setConnectStatus] = useState(false)
  ConnectInternet().then(res => {
    setConnectStatus(res)
  })

  return (
      connectStatus ? (
        <Routes></Routes>
      ) : (<NoConnectionScreen onCheck={ConnectInternet} />)
      
  );
};

export default App;
