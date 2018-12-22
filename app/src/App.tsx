import {Button} from 'antd';
import * as React from 'react';
import styled from 'styled-components';
import './App.css';

const AppTitle = styled.h1 ``

class App extends React.Component {
  public render() {
    return (
      <div className="App">
          <AppTitle>Welcome to Uicab Email</AppTitle>
          <Button type="primary"> React/ TypeScript / Mobx / Antd / StyledComponents</Button>
      </div>
    );
  }
}

export default App;
