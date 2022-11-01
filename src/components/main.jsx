import Header from "./header";
import {useState} from 'react';
import Income from "./Income";
import Items from "./Items";
import Rest from "./rest";
import Graph from "./graph";
import Swal from 'sweetalert2';

function Main(props){
    const [budget,setBudget] = useState();
    const [incomes,setIncomes] = useState([]);
    const [desc,setDesc] = useState("");
    const [price,setPrice] = useState();
    const [date,setDate] = useState("");
    const [months,setMonth] = useState([
        {price:0,month:"January"},
        {price:0,month:"February"},
        {price:0,month:"March"},
        {price:0,month:"April"},
        {price:0,month:"May"},
        {price:0,month:"June"},
        {price:0,month:"July"},
        {price:0,month:"August"},
        {price:0,month:"September"},
        {price:0,month:"October"},
        {price:0,month:"November"},
        {price:0,month:"December"},
    ])


    const addIncome = ()=>{
        if(incomes.filter(item => item.desc.toUpperCase() === desc.toUpperCase()).length>0){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Income already exist!',
                
              })
        }else{
            const a = date.split("-");
            let b = new Date(a[1]).toLocaleString('default', { month: 'long' }) 
            setIncomes([...incomes,{desc : desc,price : price,date : date,month : b}]);
            

        }
    }
    
    const MonthPrice = ()=>{
        const a = date.split("-");
        let b = new Date(a[1]).toLocaleString('default', { month: 'long' })
        let total = 0;
        incomes.map(item => {if(item.month === b) total += item.price})
        months.map(item=> {if(item.month === b) item.price = total})
    }
    const deleteIncome = (desc)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
                let newTab = incomes.filter(item => item.desc !== desc);
                setIncomes(newTab)
              Swal.fire(
                'Deleted!',
                'Income has been deleted.',
                'success'
              )
            
          })
    }
    const TotalIncomesPrice = () =>{
        let totalPrice =0;
        incomes.map(item => totalPrice += item.price);
        return totalPrice;
    }

    return <div>
        
        <Header budgetValue={budget} changeBudget={(e)=> setBudget(e.target.value)} budget={budget} 
        save={()=>Swal.fire({
            icon: 'success',
            title: 'Budget has been saved',
            showConfirmButton: false,
            timer: 1500
          })}
        />
        <Rest totalIncome={TotalIncomesPrice()} totalRest={budget - TotalIncomesPrice()}/>
        <Income desc={desc} changeDesc={(e)=> setDesc(e.target.value)} 
        price={price} changePrice={(e)=> setPrice(parseInt(e.target.value))}
        date={date} changeDate={(e)=> setDate((e.target.value))}
        addIncome = {addIncome}
        />
        {MonthPrice()}
        <div className="income-list">
            {incomes.map((item,index)=> <Items key={index} desc={item.desc} price={item.price} date={item.date} removeItem={()=>deleteIncome(item.desc)}/>)}
        </div>
        <Graph data={months} data1={incomes}/>
    </div>
}

export default Main;