 import React from "react"
 import { Navigate } from "react-router-dom"

 export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("username")
  console.log("isLoggedIn",token)
   if (!token) {
     return <Navigate to="/" replace />
   }
   else{
    <Navigate to="/slide" replace />
   }

  return children
}


