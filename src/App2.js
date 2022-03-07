function App2({ clickItm, arithOp }) {

  return (
    <tr>
      <th onClick={() => clickItm(7)}><p>7</p></th>
      <th onClick={() => clickItm(8)}><p>8</p></th>
      <th onClick={() => clickItm(9)}><p>9</p></th>
      <th onClick={() => arithOp("X")} className='orange'><p>X</p></th>
    </tr>
  )
}

export default App2