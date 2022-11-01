function Items(props){
    return <div className="income-item">
    <button className="remove-item" onClick={props.removeItem}>X</button>
    <div className="desc">{props.desc}</div>
    <div className="price">${props.price}</div>
    <div className="date">{props.date}</div>
  </div>
}

export default Items;