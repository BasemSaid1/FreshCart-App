import React from "react";
import { Navigate } from "react-router-dom";
import styles from "./ProtectedRoute.module.css";

export default function ProtectedRoute(props) {
  if (localStorage.getItem("userToken")) {
    return props.children;
  } else {
    return <Navigate to="/login" />;
  }
}
