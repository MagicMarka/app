import React from 'react';

function Modal() {

    return (
        <div className="modal fade" id="Modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  			<div className="modal-dialog" role="document">
   				<div className="modal-content">
      				<div className="modal-header">
        			<h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
        			<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      				</div>
      				<div className="modal-body">
        			...
      				</div>
     				<div className="modal-footer">
        			<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      				</div>
   	 			</div>
  			</div>
		</div>
    );
  }

export default Modal;