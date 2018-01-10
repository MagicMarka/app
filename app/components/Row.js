import React from 'react';

function Row({ order, update, index })  {

	return (
        <tr><td><input id="checkBox" type="checkbox"/></td>
            <td style={{width: '40px'}}>{order.OrderNumber}</td>
            <td style={{width: '40px'}}>{order.OrderDate}</td>
            <td style={{width: '280px'}}>{order.OrderDescription}</td>
            <td>{order.OrderStatus}</td>
            <td>1000000</td>
            <td>10000000</td>
            <td>UAH</td>
            <td>3%</td>
            <td>26.68</td>
            <td>{order.OrderAmount}</td>
            <td>111</td>
            <td>{order.Comment}</td>
            <td style={{width: '30px'}}><i className="fa fa-comments-o" aria-hidden="true"></i></td>
            <td style={{width: '30px'}}><i className="fa fa-ellipsis-v" aria-hidden="true"></i></td></tr>


    );
}

export default Row;