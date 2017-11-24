// import React from 'react';

// function Rate() {
// 	let rate = 0;
// 	let exchange = 0;
// 	$.ajax({
//   		method: 'GET',
//   		url: 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5',
//   		success: function(response) {
//     	var json = JSON.parse(str, function(key, value) {
//   			if ('ccy' == 'USD') {
//   				rate = json.buy;
//   			}
//     	}
//     	);
//     	return (rate);
// },

// export default Rate;