import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div
    className="app"
    style={{
      width: "100%",
      textAlign: "center"
    }}
  >
    <h1>
      <span
        style={{
          color: "#EF5337"
        }}
      >
        404
      </span>{" "}
      Page Not Found
    </h1>
    <Link to="/">Return to Home Page</Link>
  </div>
);
export default NotFound;
