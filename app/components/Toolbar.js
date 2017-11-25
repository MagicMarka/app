import React from 'react';

export default ({ term, data, update }) => {

  const Search = e => {
    const value = e.target.value.toLowerCase();

    const filter = data.filter(order => {
      return order.OrderDescription.toLowerCase().includes(value);
    });

    update({
      data: filter,
      active: 0,
      term: value
    });
    
  };


	return (
            <div className="row">
                 <div className="col-md-12">
                    <div className="row options">
                    <form>
                     <input className="form-control search-options" value={term} type="text" className="form-control" placeholder="Описание" onChange={Search} />
                     <button type="submit" className="search-btn"><i className="fa fa-search" aria-hidden="true"></i></button>
                     </form>
                    <form>
                     <input className="form-control search-options" value={term} type="text" className="form-control" placeholder="Компания" onChange={Search} />
                     <button type="submit" className="search-btn"><i className="fa fa-search" aria-hidden="true"></i></button>
                     </form>       
                       
                        <form>
                            <select className="form-control">
                                <option disabled selected>Статус</option>
                                <option value="1">Принят</option>
                                <option value="2">В обработке</option>
                                <option value="3">Завершен</option>
                            </select>
                        </form> 
                        <form>
                            <input className="form-control search-orders" placeholder="Order №" type="text"/>
                        </form>
                        <form>
                            <select className="form-control">
                                <option disabled selected>Дата с</option>
                                <option value="1">01.01</option>
                                <option value="2">01.02</option>
                                <option value="3">01.02</option>
                            </select>
                        </form> 
                        <form>
                            <select className="form-control">
                                <option disabled selected>Дата по</option>
                                <option value="1">01.01</option>
                                <option value="2">01.02</option>
                                <option value="3">01.02</option>
                            </select>
                        </form>     
                    </div>
                </div>
            </div>
        	
    );
}
