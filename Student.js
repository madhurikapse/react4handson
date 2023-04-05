import React from 'react'
import Nav from './Nav'

const Student = () => {
  return (
    <div>
        <Nav/>
        <div className='details'>
        <h1>Students Details</h1>
        <button>Add New Student</button>
        </div>
        <div className='table'>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Course</th>
                    <th>Batch</th>
                    <th>Change</th>
                </thead>
                <tbody>
                    <tr>
                        <td>John</td>
                        <td>26</td>
                        <td>Mern</td>
                        <td>October</td>
                        <td>Edit</td>
                    </tr>
                    <tr>
                        <td>Doe</td>
                        <td>25</td>
                        <td>Mern</td>
                        <td>November</td>
                        <td>Edit</td>
                    </tr>
                    <tr>
                        <td>Biden</td>
                        <td>26</td>
                        <td>Mern</td>
                        <td>September</td>
                        <td>Edit</td>
                    </tr>
                    <tr>
                        <td>Barar</td>
                        <td>22</td>
                        <td>Mern</td>
                        <td>September</td>
                        <td>Edit</td>
                    </tr>
                    <tr>
                        <td>Chris</td>
                        <td>23</td>
                        <td>Mern</td>
                        <td>October</td>
                        <td>Edit</td>
                    </tr>
                    <tr>
                        <td>Flent</td>
                        <td>23</td>
                        <td>Mern</td>
                        <td>November</td>
                        <td>Edit</td>
                    </tr>
                    <tr>
                        <td>Harshita Sharma</td>
                        <td>24</td>
                        <td>Mern</td>
                        <td>October</td>
                        <td>Edit</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Student
