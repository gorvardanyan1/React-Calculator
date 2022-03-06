function App4({clickItm,arithOp}) {
    return (
        <tr>
            <th onClick={()=> clickItm(1)}><p>1</p></th>
            <th onClick={()=> clickItm(2)}><p>2</p></th>
            <th onClick={()=> clickItm(3)}><p>3</p></th>
            <th onClick={()=> arithOp("+")} className='orange'><p>+</p></th>
        </tr>
    )
}
export default App4