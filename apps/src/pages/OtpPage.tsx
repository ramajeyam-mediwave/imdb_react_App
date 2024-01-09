import React, { useState, useRef, useEffect } from "react";
// import "../otp.css";
import { otpVerificationApi } from "../services/api";
import { useNavigate, useParams } from "react-router-dom";

function OtpPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [otpValues, setOtpValues] = useState([
    { digit: "" },
    { digit: "" },
    { digit: "" },
    { digit: "" },
    { digit: "" },
    { digit: "" },
  ]);
  const [passError, setPassError] = useState({
    error: "",
    show: false,
  });
  const inputRefs = useRef<HTMLInputElement[]>([]); 

  useEffect(() => {
    const focusNextInput = (index: number) => {
      inputRefs.current[index + 1]?.focus();
    };

    otpValues.forEach((item, index) => {
      if (item.digit !== "" && index < otpValues.length - 1) {
        focusNextInput(index);
      }
    });
  }, [otpValues]);

  const handleChange = (index: number, value: string) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index].digit = value;
    setOtpValues(newOtpValues);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const otpCode = parseInt(otpValues.map((item) => item.digit).join(""));

    console.log("Submitted OTP:", otpCode);
    otpVerification(otpCode, id || "");
  };
  async function otpVerification(otp: number, id: string) {
    try {
      const payload = {
        otp: otp,
      };
      const response = await otpVerificationApi(payload, id);
      navigate(`/setpassword/${id}`);
      console.log(response.data.message);
    } catch (error: any) {
      console.log(error);
      setPassError({
        ...passError,
        error: error.response.data.message,
        show: true,
      });
    }
  }
  return (
    <>
      <div className="otp-page">
        <div className="card">
          <div className="header-text">Two-Factor Verification</div>
          <div className="header-subtext">
            Enter verification code 
          </div>
          <form onSubmit={handleSubmit}>
            <div className="otp-inputs">
              {otpValues.map((item, index) => (
                <input
                  key={index}
                  className="otp-input"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  maxLength={1}
                  value={item.digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  ref={(el) => {
                    if (el) {
                      inputRefs.current[index] = el;
                    }
                  }} 
                />
              ))}
            </div>
            {passError.show && (
              <p style={{ color: "blue" }}>{passError.error}</p>
            )}
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default OtpPage;
