function App3({clickItm, arithOp}) {
    return (
        <tr>
            <th onClick={()=> clickItm(4)}><p>4</p></th>
            <th onClick={()=> clickItm(5)}><p>5</p></th>
            <th onClick={()=> clickItm(6)}><p>6</p></th>
            <th onClick={()=> arithOp("-")} className='orange'><p>-</p></th>
        </tr>
    )
}

export default App3
