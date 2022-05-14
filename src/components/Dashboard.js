import React, { useEffect } from "react";
import "../css/dashboard.css";
import imgpath from "../img/logo.jpg";
import { useNavigate } from "react-router-dom";
// import User from "../../../server/model/userSchema";

const Dashboard = () => {

  // const fetchUser = async () => {
  //   const res = await fetch("https://hostelportalpblsem4.herokuapp.com/userlogin");
  //   const currentUser = await res.json();

  //   console.log(currentUser);
  // }

  // fetchUser();


  const navigate = useNavigate();
  const callDashboard = async () => {
    try {
      const res = await fetch("/userlogin", {
        method: "POST",
        headers: {
          Accept: "application/json", // for cookies
          "Content-Type": "application/json",
        },
        credentials: "include", // for cookies
      });

      const data = await res.json();
      console.log(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      navigate("/login");
    }
  };

  useEffect(() => {
    // callDashboard();
  }, []);
  return (
    <>
      <section style={{ backgroundcolor: "#eee" }}>
        <div className="container py-5">


          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4 photo">
                <div className="card-body text-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle img-fluid"
                    style={{ width: " 150px;" }}
                  ></img>
                  <h5 className="my-3">Test User</h5>

                  <div className="d-flex justify-content-center mb-2">

                  </div>
                </div>
              </div>

            </div>
            <div className="col-lg-8">
              <div className="card mb-4 profile">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Full Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">Johnatan Smith</p>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">example@example.com</p>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Registration ID</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">C2K 234-5678</p>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Mobile</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">(098) 765-4321</p>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Address</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">
                        Bay Area, San Francisco, CA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;