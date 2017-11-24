import React from 'react';

function Row({ order, update, index })  {

	return (
        	 
                <tr><td><input id="checkBox" type="checkbox"/></td> 
                <td>{order.OrderNumber}</td> 
                <td>{order.OrderDate}</td> 
                <td>{order.OrderDescription}</td> 
                <td>0.00</td> 
                <td>0.00</td>
                <td>UAH</td>
                <td>26.73</td>
                <td>26.68</td>
                <td>{order.OrderAmount}</td>
                <td>26.68</td>
                <td>{order.Comment}</td>
                <td><i className="fa fa-comments-o" aria-hidden="true"></i></td>
                <td><i className="fa fa-ellipsis-v" aria-hidden="true"></i></td></tr> 
            
        	
    );
}

export default Row;