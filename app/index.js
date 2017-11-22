require('bootstrap/dist/css/bootstrap.min.css');
require("jquery");
require('font-awesome/css/font-awesome.css');
require('./css/style.css');

import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";
import 'font-awesome/css/font-awesome.css';
import './css/style.css';



const table = (
	<div>                        
	<table className="table table-striped"> 
        <thead> 
            <tr> <th><input id="checkBox" type="checkbox"/></th> <th>Order №</th> <th>Дата</th> <th>Описание</th> <th>Д-т</th> <th>К-т</th> <th>Currency</th> <th>Rate</th> <th>Exchange</th> <th>Amount</th> <th>$0.00</th> <th>Comment</th><th>Chat</th><th><i class="fa fa-plus-circle" aria-hidden="true"></i></th></tr> 
        </thead> 
        <tbody> 
        	<tr> <td><input id="checkBox" type="checkbox"/></td> <th>10456</th> <td>10/12/2017</td> <td>Ставлю долар на свой баланс</td> <td>0.00</td> <td>0.00</td><td>UAH</td><td>26.73</td><td>26.68</td><td>10 896 765</td><td>26.68</td><td>Надо сделать сегодня</td><td><i className="fa fa-comments-o" aria-hidden="true"></i></td><td><i className="fa fa-ellipsis-v" aria-hidden="true"></i></td></tr> 
        	<tr> <td><input id="checkBox" type="checkbox"/></td> <th>10456</th> <td>15/12/2017</td> <td>Ставлю долар на свой баланс</td> <td>0.00</td> <td>0.00</td><td>UAH</td><td>26.73</td><td>26.68</td><td>10 896 765</td><td>26.68</td><td>Надо сделать сегодня</td><td><i className="fa fa-comments-o" aria-hidden="true"></i></td><td><i className="fa fa-ellipsis-v" aria-hidden="true"></i></td></tr> 
        	<tr> <td><input id="checkBox" type="checkbox"/></td> <th>10456</th> <td>20/12/2017</td> <td>Ставлю долар на свой баланс</td> <td>0.00</td> <td>0.00</td><td>UAH</td><td>26.73</td><td>26.68</td><td>10 896 765</td><td>26.68</td><td>Надо сделать сегодня</td><td><i className="fa fa-comments-o" aria-hidden="true"></i></td><td><i className="fa fa-ellipsis-v" aria-hidden="true"></i></td></tr> 
        </tbody> 
    </table>
    </div>) ;
ReactDOM.render(
  table,
  document.getElementById('table-block')
);