import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import Layout from '../../components/Layout';
import { earthquakes } from '../../data/index';

const EarthQuakes = () => {
  return (
    <Layout>
      <h5 className='py-2'>USGS All Earthquakes, Past Hour</h5>
      <div>
        <table className="table">
          <thead>
            <tr className='text-center'>
              <th>Title</th>
              <th>Magnitude</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {
              earthquakes.map((earthquake) => (
                <tr key={earthquake.id} className="">
                  <td>
                    <Link to={`/earthquake/${earthquake.id}`}>
                      {earthquake.title}
                    </Link>
                  </td>
                  <td className='text-center'>{earthquake.magnitude}</td>
                  <td>{moment(earthquake.publishedDateTime).format("MMMM Do YYYY, h:mm:ss a")}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

EarthQuakes.propTypes = {}

export default EarthQuakes
