
function App1({ ac, arithOp }) {
    return (
        <tr>
            <th onClick={() => ac(true)} ><p>AC</p></th>
            <th><p></p></th>
            <th><p></p></th>
            <th onClick={() => arithOp("/")} className='orange'><p>/</p></th>
        </tr>
    )
}
export default App1