import React from 'react';

function Header(props) {
  return (
    <header >

      <div>
      <input type='number' className='budget' placeholder='Your budget' name='budget' value={props.budgetValue} onChange={props.changeBudget}></input>
      <input type="submit" className='sub-budget' value="save" onClick={props.save} />
      </div>
      <div className='budge'>
      <h1>Your budget</h1>
      <div className="total-income">${props.budget}</div>
      </div>
    </header>
  );
}

export default Header;