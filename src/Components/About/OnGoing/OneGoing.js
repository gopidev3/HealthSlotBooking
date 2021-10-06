import React from 'react';
import './OnGoing.scss'

const OnGoing = () => {
    return (
        <div className="OnGoing-root-div">
            <div className="Ongoing-cont1">
                <span>On Going</span>
            </div>
            <div className="Third-Card-main-div">
                <table className="myt">
                    <tr>
                        <th>Test name</th>
                        <th>Age</th>
                        <th>Location</th>
                        <th>Slot Timings</th>
                        <th>X-ray Date</th>
                        <th>Status</th>
                        <th> </th>
                    </tr>
                    <tr>
                        <td>Bharath</td>
                        <td>26</td>
                        <td>Hyderabad</td>
                        <td>Tue,17th Nov 2020/4:17:18 GMT</td>
                        <td>Tue,21 Sep 2020</td>
                        <td>NA</td>
                    </tr>
                    <tr>
                        <td>Vignesh</td>
                        <td>25</td>
                        <td>Guntur</td>
                        <td>Wed,18th Nov 2020/4:17:18 GMT</td>
                        <td>Wed,22 Sep 2020</td>
                        <td>NA</td>
                    </tr>
                </table>
            </div>
        </div>




    )
}

export default OnGoing