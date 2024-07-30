import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Utils/Layout";
import axios from "axios";
import { server } from "../../main";
import "./dashboard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faVideo, faUsers } from '@fortawesome/free-solid-svg-icons';

const AdminDashbord = ({ user }) => {
  const navigate = useNavigate();

  if (user && user.role !== "admin") return navigate("/");

  const [stats, setStats] = useState([]);

  async function fetchStats() {
    try {
      const { data } = await axios.get(`${server}/api/stats`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });

      setStats(data.stats);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchStats();
  }, []);
  return (
    <div>
      <Layout>
        <div className="main-content">
          <div className="box"
           data-aos="flip-right"
           data-aos-duration="1000"
           >
            <p className="box-number">1</p>
            <p className="box-title">Total Courses</p>
            <p className="box-value">{stats.totalCoures}</p>
            <FontAwesomeIcon icon={faBook} className="box-icon" />
          </div>
          <div className="box"
           data-aos="flip-right"
           data-aos-duration="1000"
           >
          <p className="box-number">2</p>
            <p className="box-title">Total Lectures</p>
            <FontAwesomeIcon icon={faVideo} className="box-icon" />

            <p className="box-value">{stats.totalLectures}</p>
          </div>
          <div className="box"
           data-aos="flip-right"
           data-aos-duration="1000"
          >
          <p className="box-number">3</p>
            <p className="box-title">Total Users</p>
            <p className="box-value">{stats.totalUsers}</p>
            <FontAwesomeIcon icon={faUsers} className="box-icon" />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default AdminDashbord;