import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/private.css";
import { useNavigate } from "react-router-dom";

export const Private = () => {
  const { store, actions } = useContext(Context);
  const [ email, setEmail ] = useState("")
  const navigate = useNavigate();

  const token = localStorage.getItem("token");


  useEffect(() => {
	const gettingInfo = async () => {
		const response = await fetch(
		  "https://andresmedtr-humble-space-chainsaw-g9wvxp446jr2w4rq-3001.preview.app.github.dev/private",
		  {
			method: "GET",
			headers: {
			  "Content-Type": "application/json",
			  Authorization: `Bearer ${token}`,
			},
		  }
		);

		const data = await response.json();
		setEmail(data.email)
		console.log(data.email, "This is the email of the user")
	  };

	  gettingInfo()
	  }, [])

  return (
    <div className="text-center mt-5">
      {token ? (
        <div>
          <h1>U are now on private {email} </h1>
          <div></div>
        </div>
      ) : (
        navigate("/")
      )}
    </div>
  );
};
