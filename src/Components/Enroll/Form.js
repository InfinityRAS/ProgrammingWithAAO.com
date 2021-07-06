import React from 'react'

export const Form = ({ loader }) => {
    return (
        <div id="enroll">
            <h2 id="enroll-head">Enroll Student</h2>
            <form action="" className="enroll" method="get">
                <input type="text" id="student_name" name="Student" placeholder="Enter Student's Name" />
                <input type="number" id="contact_no1" name="contact_no1" placeholder="Write Your Contact No. 1 (with Country Code)" />
                <input type="number" id="contact_no2" name="contact_no2" placeholder="Write Your Contact No. 2 (with Country Code)" />
                <input type="email" id="student_email" name="Student_email" placeholder="Write Student's/ Parent's email" />
                <input type="text" id="mother_name" name="mother_name" placeholder="Write Student's mother's name" />
                <input type="text" id="father_name" name="father_name" placeholder="Write Student's father's name" />
                <input type="submit" id="submit_btn" placeholder="Submit" onClick={(e) => { e.preventDefault(); loader() }} value="Submit" />
                <input type="reset" id="reset_btn" placeholder="Reset" onClick={loader} />
            </form>
        </div>
    )
}
