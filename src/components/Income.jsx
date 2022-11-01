function Income(props){
    return <div className="form-inner">
      <input type="text" name="desc" id="desc" placeholder="Income Description..." value={props.desc} onChange={props.changeDesc} /> 
      <input type="number" name="price" id="price" placeholder="Price..." value={props.price} onChange={props.changePrice} />
      <input type="date" name="date" id="date" placeholder="Income date..." value={props.date} onChange={props.changeDate} />
      <input type="submit" value="Add Income" onClick={props.addIncome} />
    </div>
  
}

export default Income;