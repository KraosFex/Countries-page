const Order = () => {

    const onSelectChange = (e) =>{
        return "hola"
    }

    return(
        <div>
            <select onChange={e => onSelectChange(e)} >
                <option value="Order">Order A-Z</option>
                <option value="ASCENDENT">Ascendent</option>
                <option value="DESCENDENT">Descendent</option>
            </select>


            <select onChange={e => onSelectChange(e)} >
                <option value="Order">Order by poblation</option>
                <option value="HIGHPOBLATION">High Poblation</option>
                <option value="LOWPOBLATION">Low Poblation</option>
            </select>
        </div>
    )
}

export default Order;