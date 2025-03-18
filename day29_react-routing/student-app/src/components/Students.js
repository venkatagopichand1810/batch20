
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Students() {

    const [students, setStudents] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setStudents(data))
    }, []);

    // handle student click
    const handleStudentClick = (student) => {
        navigate(`/students/${student.id}`, {state: {student}})
    }

    return (
        <>
        <div className="students">
            <h2>Students List</h2>
            <div className="student-list">
                {students.map((student) => (
                    <div 
                        key={student.id}
                        className="student-card"
                        onClick={() => handleStudentClick(student)}
                    >
                        <h3>{student.name}</h3>
                        <p>Email: {student.email}</p>
                    </div>
                ))}
            </div>
        </div>
        
        
        </>
    )

}

export default Students