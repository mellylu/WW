import React from 'react';
import styled from 'styled-components'

const Middle = (props) => {
  
  return (
    <ViewColor>
      <ViewMiddle>
        {props.children}
      </ViewMiddle>
    </ViewColor>

  );
};

const ViewMiddle = styled.View`
  width: 100%;
  height: 100%;
`

const ViewColor = styled.View`
  background-color: white;
`

export default Middle;