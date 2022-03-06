function App5({clickItm , dat ,equaliz}) {
    return (
      <tr>
        <th colSpan={2} onClick={()=> clickItm(0)}><p>0</p></th>
        <th onClick={()=>dat(".")}><p>.</p></th>
        <th onClick={()=> equaliz()} className='orange'><p>=</p></th>
      </tr>
    )
  }
export default App5  