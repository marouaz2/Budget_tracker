function Rest(props){
    return <header >
    <div className='rest-income'>
        <div className='income'>
        <h1>Income </h1>
        <div className="total-rest">${props.totalIncome}</div>
        </div>
        <div className='rest'>
            <h1>Rest</h1>
            <div className="total-rest">${props.totalRest}</div>
        </div>
    </div>
    </header>
}

export default Rest;