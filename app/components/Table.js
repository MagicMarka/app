import React from 'react';
import Row from './Row.js';
import { FieldGroup, FormControl} from 'react-bootstrap';
export default ({ data, update }) => {
	 if (!data) { return (<p>Loading...</p>); }

  const orders = data.map((order, index) => {
    return (<Row order={order} index={index} key={`order-${index}`} update={update} />);
  });

	return (
		<table className="table table-striped">
            <thead>
            <tr> <th><input id="checkBox" type="checkbox"/></th> <th>Order <br/> №</th> <th>Дата</th> <th>Описание</th> <th>Статус</th> <th>Д-т</th> <th>К-т</th> <th>Curr<br/>ency</th> <th>Rate</th> <th>Exchange</th> <th>Amount</th> <th>$0.00</th> <th>Comment</th><th>Chat</th><th><i className="fa fa-plus-circle" aria-hidden="true"></i></th></tr>
            </thead>
            <tbody>
        	{orders}
            <tr> <th><input id="checkBox" type="checkbox"/></th> <th><FormControl type="text" /></th> <th><FormControl type="text" /></th> <th><FormControl type="text" /></th> <th><FormControl type="text" /></th> <th><FormControl type="text" /></th> <th><FormControl type="text" /></th> <th><FormControl type="text" /></th> <th><FormControl type="text" /></th> <th><FormControl type="text" /></th> <th><FormControl type="text" /></th> <th><FormControl type="text" /></th> <th><FormControl type="text" /></th><th><FormControl type="text" /></th><th><i className="fa fa-plus-circle" aria-hidden="true"></i></th></tr>
        </tbody> 
    </table>
    );
};

