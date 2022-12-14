import React, { useContext } from 'react';
import { UidContext } from '../components/AppContext';
import Log from '../components/Log';

const Profil = () => {

  const uid = useContext(UidContext)
  return (
    <div className='profil-page'>
      {uid ? ( 
        <h1>Update Page</h1>
      ) : (
          <div className='log-container'>
              <Log signin={false} signup={true} />
              <div className='img-container'>
                  <img src='./img/log.svg' alt='img-log' />
              </div>
          </div>
        )}
    </div>
  )
}

export default Profil