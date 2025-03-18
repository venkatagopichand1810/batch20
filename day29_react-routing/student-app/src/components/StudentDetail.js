
import { useParams,  useLocation, useNavigate} from "react-router-dom"
function StudentDetail() {

    const {id} = useParams();
    const location = useLocation();
    const navigate = useNavigate()

    const student = location.state?.student;
    console.log(student);

    const handleBack = () => {
        navigate(-1)
    }

    return (
        <div className="student-detail">
            {student ? (
                <>
                    <h2>{student.name} (ID: {id})</h2>
                    <p><strong>Email:</strong> {student.email}</p>
                    <p><strong>Phone:</strong> {student.phone}</p>
                    <p><strong>Company:</strong> {student.company.name}</p>
                    <p><strong>Website:</strong> {student.website}</p>
                    <button onClick={handleBack}>Back</button>
                </>
            ): (
                <p>No Student Data is available</p>
            )}
        </div>
    )


}

export default StudentDetail