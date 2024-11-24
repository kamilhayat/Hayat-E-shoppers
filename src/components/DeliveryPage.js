import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CheckoutForm = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        pincode: "",
        locality: "",
        address: "",
        city: "",
        state: "",
        landmark: "",
        alternatePhone: "",
        addressType: "home",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Oder Placed");
        navigate("/")
    };

    return (
        <Wrapper>
            <form onSubmit={handleSubmit} className="form-container">
                <div className="form-row">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-row">
                    <label>10-digit mobile number</label>
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-row">
                    <label>Pincode</label>
                    <input
                        type="text"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-row">
                    <label>Locality</label>
                    <input
                        type="text"
                        name="locality"
                        value={formData.locality}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-row">
                    <label>Address (Area and Street)</label>
                    <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-row">
                    <label>City/District/Town</label>
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-row">
                    <label>State</label>
                    <select
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                    >
                        <option value="">--Select State--</option>
                        <option value="state1">Bihar</option>
                        <option value="state2">Delhi</option>
                        <option value="state3">Kolkata</option>
                    </select>
                </div>

                <div className="form-row">
                    <label>Landmark (Optional)</label>
                    <input
                        type="text"
                        name="landmark"
                        value={formData.landmark}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-row">
                    <label>Alternate Phone (Optional)</label>
                    <input
                        type="text"
                        name="alternatePhone"
                        value={formData.alternatePhone}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-row address-type">
                    <label>Address Type</label>
                    <label className="work">
                        <input className="work"
                            type="radio"
                            name="addressType"
                            value="home"
                            checked={formData.addressType === "home"}
                            onChange={handleChange}
                        />
                        Home
                    </label>
                    <label className="work">
                        <input
                            type="radio"
                            name="addressType"
                            value="work"
                            checked={formData.addressType === "work"}
                            onChange={handleChange}
                        />
                        Work
                    </label>
                </div>

                <button type="submit">Proceed</button>
            </form>

        </Wrapper>
    );
};

const Wrapper = styled.section`
.form-container {
    background-color: #f5f5f5;
    max-width: 900px;
    margin: 120px auto;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    }
    
.form-container label {
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 8px;
  display: block;
}

.form-container input,
.form-container select,
.form-container textarea {
  width: 100%;
  padding: 12px 15px;
  margin: 8px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 14px;
  background-color: #fff;
}

.form-container input:focus,
.form-container select:focus,
.form-container textarea:focus {
  border-color: #007bff;
  outline: none;
}

.form-container button {
  background-color: #007bff;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease;
}

.form-container button:hover {
  background-color: #0056b3;
}
 .form-row .work{
    width: 40px;
    display: flex;
    align-items: center;
    gap: 10px; 
  }

@media (min-width: 768px) {
  .form-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  .form-container .half-width {
    grid-column: span 1;
  }
}

.form-container .radio-group {
  display: flex;
  align-items: center;
  gap: 10px;
}

.form-container .radio-group input {
  margin-right: 5px;
}

.form-container .address-field {
  grid-column: span 2; /* Ensures full-width input fields like Address, City, etc. */
}

.form-container select {
  background-color: #f9f9f9;
  font-size: 14px;
  border: 1px solid #ccc;
  padding: 12px;
  border-radius: 5px;
}

.form-container .address-type {
  margin-top: 20px;
}

`;

export default CheckoutForm;
