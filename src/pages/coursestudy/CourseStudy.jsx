import React, { useEffect } from "react";
import "./coursestudy.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CourseData } from "../../context/CourseContext";
import { server } from "../../main";

const CourseStudy = ({ user }) => {
  const params = useParams();

  const { fetchCourse, course } = CourseData();
  const navigate = useNavigate();

  if (user && user.role !== "admin" && !user.subscription.includes(params.id))
    return navigate("/");

  useEffect(() => {
    fetchCourse(params.id);
  }, []);
  return (
    <>
      {course && (
        <div className="course-study-page">
          <img
                data-aos="zoom-in"
    data-aos-duration="1000"
          src={`${server}/${course.image}`} alt="" width={350} />
          <h2
            data-aos="zoom-in"
    data-aos-duration="1000"
          >{course.title}</h2>
          <p
            data-aos="zoom-in"
    data-aos-duration="1000"
          >{course.description}</p>
          <h5
            data-aos="zoom-in"
    data-aos-duration="1000"
          >by - {course.createdBy}</h5>
          <h5
            data-aos="zoom-in"
    data-aos-duration="1000"
          >Duration - {course.duration} weeks</h5>
          <Link to={`/lectures/${course._id}`}>
          <h2
           data-aos="zoom-in"
    data-aos-duration="1000"
          >
  <span
    style={{
      backgroundImage: "linear-gradient(to right, #4567b7, #6495ed)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    }}
  >
    Lectures
  </span>
</h2>
          </Link>
        </div>
      )}
    </>
  );
};

export default CourseStudy;