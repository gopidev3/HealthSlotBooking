import React from 'react';
import './Completed.scss';

const Completed = () => {
    return (
        <div className="Completed-root-div">
          <div className = "completed-cont1">
              <span>Completed</span>
          </div>
          <div className = "Completed-Card">
             <h3>Your Recent Tests</h3>
             <table className = "myt2">
                <tr>
                  <th>TestName</th>
                  <th>Age</th>
                  <th>Location</th>
                  <th>Slot Timings</th>
                  <th>X-Ray Details</th>
                  {/* <th>Details</th> */}
                </tr>
                    <tr>
                      <td>Mark</td>
                      <td>26</td>
                      <td>Hyderabad</td>
                      <td>Tue, 17 Nov 2020 / 04:17:18 GMT</td>
                      <td>Sat, 21 Aug 2020</td>
                    </tr>
                    <tr>
                      <td>William</td>
                      <td>26</td>
                      <td>Hyderabad</td>
                      <td>Tue, 17 Nov 2020 / 04:17:18 GMT</td>
                      <td>Sat, 21 Aug 2020</td>
                    </tr>
                    <tr>
                      <td>Joseph</td>
                      <td>25</td>
                      <td>Hyderabad</td>
                      <td>Tue, 17 Nov 2020 / 04:17:18 GMT</td>
                      <td>Sat, 21 Aug 2020</td>
                    </tr>
                    <tr>
                      <td>Micheal</td>
                      <td>24</td>
                      <td>Hyderabad</td>
                      <td>Tue, 17 Nov 2020 / 04:17:18 GMT</td>
                      <td>Sat, 21 Aug 2020</td>
                    </tr>
                    <tr>
                      <td>Tony</td>
                      <td>26</td>
                      <td>Hyderabad</td>
                      <td>Tue, 17 Nov 2020 / 04:17:18 GMT</td>
                      <td>Sat, 21 Aug 2020</td>
                    </tr>
                    <tr>
                      <td>Mark</td>
                      <td>25</td>
                      <td>Hyderabad</td>
                      <td>Tue, 17 Nov 2020 / 04:17:18 GMT</td>
                      <td>Sat, 21 Aug 2020</td>
                    </tr>
               </table>
            </div> 
        </div>

    )
}

export default Completed