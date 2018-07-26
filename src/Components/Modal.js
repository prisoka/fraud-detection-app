import React from 'react'
import SingleEventProfile from './SingleEventProfile';

const Modal = ({event}) => {
  return (
    <div>
      <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            {event !== null &&
              <div>
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">{event.name}</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <SingleEventProfile event={event}/>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
