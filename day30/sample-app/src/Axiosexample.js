import { useEffect, useState } from "react";
import axios from "axios";
function Axiosexample() {
    // state variables 
    const [students, setStudents] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [newName, setNewName] = useState('');
    const [newEmail, setNewEmail] = useState('');


    //fetch students from the API
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => setStudents(response.data))
            .catch(error => console.error("Error fetching the students", error))
    }, [])


    // add the new student(post)

    const handleAdd = async () => {
        const newStudent = {
            name: newName,
            email: newEmail,
        };

        try {
            const response = await axios.post("https://jsonplaceholder.typicode.com/users", newStudent);
            // add the local state
            setStudents([...students, { id: Date.now(), ...newStudent }]);
            setNewName('');
            setNewEmail('')

        } catch (error) {
            console.log("error adding the students", error)
        }

    }

    // editing the student
    const handleEdit = (student) => {
        setEditingId(student.id);
        setNewName(student.name);
        setNewEmail(student.email)
    }

    // update the student data (PATCH)

    const handleUpdate = async (id) => {
        try {
            await axios.patch(`https://jsonplaceholder.typicode.com/users/${id}`, {
                name: newName,
                email: newEmail
            });

            setStudents(
                students.map(student =>
                    student.id === id ? { ...student, name: newName, email: newEmail } : student
                )
            );

            setEditingId(null);
            setNewName('');
            setNewEmail('');
        } catch (error) {
            console.log("error updating the users")
        }
    }


    // delete the student

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            setStudents(students.filter(student => student.id !== id))
        } catch (error) {
            console.log("error updating the users")
        }
    };


    return (
        <div className="p-6 bg-gray-200 min-h-screen">
            <h1 className="text-3xl font-bold mb-6">Student Management System</h1>
            {/* add the new student form */}

            <div className="bg-white shadow-md rounded-lg p-6 my-6">
                <h2 className="text-xl font-bold mb-4">Add new Student</h2>
                <input
                    type="text"
                    placeholder="Enter your Name"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="border rounded-md p-2 w-full mb-2"
                />
                <input
                    type="email"
                    placeholder="Enter your Email"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    className="border rounded-md p-2 w-full mb-2"
                />
                <button onClick={handleAdd}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                    Add Student
                </button>
            </div>

            {/* student list */}
            <div className="bg-white shadow-md rounded-lg p-6 my-6">
                <h2 className="text-xl font-bold mb-4">Student List</h2>
                <ul>
                    {students.map((student) => (

                        <li key={student.id} className="flex justify-between items-center border-b py-2">
                            {editingId === student.id ? (
                                <>
                                    <input
                                        type="text"
                                        value={newName}
                                        onChange={(e) => setNewName(e.target.value)}
                                        className="border rounded-md p-2 mr-2"
                                    />

                                    <input
                                        type="email"
                                        value={newEmail}
                                        onChange={(e) => setNewEmail(e.target.value)}
                                        className="border rounded-md p-2 mr-2"
                                    />

                                    <button
                                        onClick={() => handleUpdate(student.id)}
                                        className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
                                    >
                                        Save
                                    </button>

                                    <button
                                        onClick={() => setEditingId(null)}
                                        className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
                                    >
                                        Cancel
                                    </button>



                                </>
                            ) : (
                                <>
                                    <span>
                                        <strong>{student.name}</strong>
                                    </span>
                                    <div>
                                        <button
                                            onClick={() => handleEdit(student)}
                                            className="bg-yellow-500 text-white px-4 py-2 rounded-md mr-2"
                                        >
                                            Edit
                                        </button>

                                        <button
                                            onClick={() => handleDelete(student.id)}
                                            className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </>
                            )}
                        </li>

                    ))}


                </ul>

            </div>

        </div>
    )

}

export default Axiosexample