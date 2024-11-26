import React, { useEffect, useState } from "react";
import "./users.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../main";
import Layout from "../Utils/Layout";
import toast from "react-hot-toast";

const AdminUsers = ({ user }) => {
  const navigate = useNavigate();

  if (user && user.mainrole !== "superadmin") return navigate("/");

  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    try {
      const { data } = await axios.get(`${server}/api/users`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });

      setUsers(data.users);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  const updateRole = async (id) => {
    if (confirm("are you sure you want to update this user role")) {
      try {
        const { data } = await axios.put(
          `${server}/api/user/${id}`,
          {},
          {
            headers: {
              token: localStorage.getItem("token"),
            },
          }
        );

        toast.success(data.message);
        fetchUsers();
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };

  const deleteUser  = async (id) => {
    if (confirm("Are you sure you want to delete this user?")) {
      try {
        const { data } = await axios.delete(
          `${server}/api/user/${id}`,
          {
            headers: {
              token: localStorage.getItem("token"),
            },
          }
        );
  
        toast.success(data.message);
        fetchUsers();
      } catch (error) {
        // Improved error handling
        const errorMessage =
          error.response && error.response.data && error.response.data.message
            ? error.response.data.message
            : "An error occurred. Please try again.";
        toast.error(errorMessage);
      }
    }
  };
  
  console.log(users);
  return (
    <Layout>
      <div className="users"
       data-aos="zoom-in"
       data-aos-duration="1000"
       >
        <h1>All Users</h1>
        <table border={"black"}>
          <thead>
            <tr>
              <td>#</td>
              <td>name</td>
              <td>email</td>
              <td>role</td>
              <td>update role</td>
              <td>delete User</td>

            </tr>
          </thead>

          {users &&
            users.map((e, i) => (
              <tbody>
                <tr>
                  <td>{i + 1}</td>
                  <td>{e.name}</td>
                  <td>{e.email}</td>
                  <td>{e.role}</td>
                  <td>
                    <button
                      onClick={() => updateRole(e._id)}
                      className="common-btn"
                    >
                      Update Role
                    </button>
                  </td>
                  <td>
                    <button
                    onClick={() => deleteUser(e._id)}
                    className="common-btn"
                    style={{ background: "red" }}

                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
        </table>
      </div>
    </Layout>
  );
};

export default AdminUsers;