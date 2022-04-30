import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Layout from '../../components/Layout';
import { earthquakes } from '../../data/index';

const Details = () => {
  const { id } = useParams()
  const [earthquake, setEarthquake] = useState();

  useEffect(() => {
    setEarthquake(
      earthquakes.find(item => item.id == id)
    )
  }, [id])

  return (
    <Layout>
      <h5 className='py-2'>{earthquake?.title}</h5>
      <div className='d-flex justify-content-center'>
        <div className='col-5'>
          <div className='row'>
            <div className='col-3'>Title</div>
            <div className='col-9'>{earthquake?.title}</div>
            <div className='col-3'>Magnitude</div>
            <div className='col-9'>{earthquake?.magnitude}</div>
            <div className='col-3'>Time</div>
            <div className='col-9'>{moment(earthquake?.publishedDateTime).format("MMMM Do YYYY, h:mm:ss a")}</div>
            <div className='col-3'>Status</div>
            <div className='col-9'>{earthquake?.status}</div>
            <div className='col-3'>Tsunami</div>
            <div className='col-9'>{earthquake?.tSunami}</div>
            <div className='col-3'>Type</div>
            <div className='col-9'>{earthquake?.type}</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

Details.propTypes = {}

export default Details
