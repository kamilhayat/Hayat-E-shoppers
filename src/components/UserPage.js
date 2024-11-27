import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../context/auth_context";

const UserPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) return <div>Loading...</div>;

  return (
    <Wrapper>
      <div className="user-page">
        {user ? (
          <div className="user-info">a
            <h1>User Details</h1>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Display Name:</strong> {user.displayName || "N/A"}</p>
            <p><strong>Provider:</strong> {user.providerId === "google.com" ? "Google" : "Email/Password"}</p>
            <p><strong>User ID:</strong> {user.uid}</p>
            <img
              src={user?.photoURL || "/default-profile.png"} 
              alt="Profile"
              style={{ width: "100px", height: "100px", borderRadius: "50%" }} 
            />

          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
    .user-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height */
  background-color: #f4f4f4; /* Light background color */
}

.user-info {
  background-color: #fff; /* White background for the card */
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center; /* Center the text */
  max-width: 500px;
  width: 100%;
}

.user-info h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.user-info p {
  font-size: 1.2rem;
  margin: 0.5rem 0;
  color: #333;
}

.user-info strong {
  font-weight: 600;
}

`

export default UserPage;
