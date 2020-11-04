import React from 'react';
import { Ellipse, Text1, Text2 } from './Container';
export function ListContent(key, e) {
  return <div key={key} style={{
    display: 'flex',
    flexDirection: 'row',
    height: '34px'
  }}>
  <Ellipse />  
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}>
      <Text1>{e.中}</Text1>
      <Text2>{e.界.length === 0 ? '' : (e.界 + ' | ' + (e.纲.length === 0 ? e.亚纲 : e.纲))}</Text2>
    </div>
    
  </div>;
}
