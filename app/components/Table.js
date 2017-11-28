import React from 'react';
import Row from './Row.js';

export default ({ data, update }) => {
	 if (!data) { return (<p>Loading...</p>); }

  const orders = data.map((order, index) => {
    return (<Row order={order} index={index} key={`order-${index}`} update={update} />);
  });

	return (
		<table className="table table-striped"> 
        <thead> 
            <tr> <th><input id="checkBox" type="checkbox"/></th> <th>Order №</th> <th>Дата</th> <th>Описание</th> <th>Д-т</th> <th>К-т</th> <th>Currency</th> <th>Rate</th> <th>Exchange</th> <th>Amount</th> <th>$0.00</th> <th>Comment</th><th>Chat</th><th><i className="fa fa-plus-circle" aria-hidden="true"></i></th></tr> 
        </thead> 
        <tbody> 
        	{orders}
        </tbody> 
    </table>
    );
};

