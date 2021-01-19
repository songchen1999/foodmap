import React from 'react'
import { VectorMap } from '@south-paw/react-vector-maps';
import usa from '../../map/usa.json';
import styled from 'styled-components';
import Toolip from './toolip/toolip'

function Map() {

  const [selected, setSelected] = React.useState([]);

  const onClick = ({ target }) => {
    const id = target.attributes.id.value;

    // If selected includes the id already, remove it - otherwise add it
    selected.includes(id)
      ? setSelected(selected.filter(sid => sid !== id))
      : setSelected([...selected, id]);
  }

  const Map = styled.div`
  margin: 1rem auto;
  width: 80%;

  svg {
    stroke: #fff;

    // All layers are just path elements
    path {
      fill: #a82b2b;
      cursor: pointer;
      outline: none;

      // When a layer is hovered
      &:hover {
        fill: rgba(168,43,43,0.83);
      }

      // When a layer is focused.
      &:focus {
        fill: rgba(168,43,43,0.6);
      }

      // When a layer is 'checked' (via checkedLayers prop).
      &[aria-checked='true'] {
        fill: rgba(56,43,168,1);
      }

      // When a layer is 'selected' (via currentLayers prop).
      &[aria-current='true'] {
        fill: rgba(56,43,168,0.83);
      }

      // You can also highlight a specific layer via it's id
      &[id="nz-can"] {
        fill: rgba(56,43,168,0.6);
      }
    }
  }
`;
  
  return (
    <div>
      <Toolip map={usa}/>
    </div>
    
  );
  
}

export default Map;
