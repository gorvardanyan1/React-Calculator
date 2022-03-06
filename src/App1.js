
function App1({ ac }) {
    return (
        <tr>
            <th onClick={() => ac(true)} ><p>AC</p></th>
            <th><p>+/-</p></th>
            <th><p>%</p></th>
            <th className='orange'><p>/</p></th>
        </tr>
    )
}
export default App1