"use client";

import "./account.css";
import { useEffect, useState } from "react";
import { createAccount } from "../../../../lib/createAccount";
import { useRouter } from "next/navigation"; // ✅ Next.js router

export default function AccountPage() {
  const [userPassword, setUserPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [submitData, setSubmitData] = useState(null);
  const [logNotice, setLogNotice] = useState(false);
  const [errorNotice, setErrorNotice] = useState(false);
  const [passNote, setPassNote] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter(); // ✅ router hook

  useEffect(() => {
    if (!submitData) return;
    setIsLoading(true);
    const { email, password } = submitData;

    const runCreateAccount = async () => {
      const { success, error } = await createAccount(email, password);

      if (error) {
        setErrorNotice(true);
        setIsLoading(false);
      } else if (success) {
        setLogNotice(true);

        // ✅ Redirect after short delay
        setTimeout(() => {
          router.push("/home");
        }, 1000);
      }

      setSubmitData(null);
      setIsLoading(false);
    };

    runCreateAccount();
  }, [submitData, router]);

  const handleAccount = () => {
    if (!userEmail || !userPassword) return;
    setSubmitData({ email: userEmail, password: userPassword });
    setErrorNotice(false);
    setLogNotice(false);
    setUserEmail("");
    setUserPassword("");
  };

  const handleLog = () => {
    setErrorNotice(false);
    setLogNotice(false);
  };

  const handlePassNote = () => {
    if ( userPassword.length < 6) {
      setPassNote(true);
    } else {
      setPassNote(false);
    }
  }

  return (
    <div>
      { isLoading && <section className="loading-container">
        <div className="loading-wrapper">
          <div className="loading-pill">Creating...</div>
        </div>
      </section>}
      <section className="account-form">
        <div className="account-entry">
          <div className="account-name">
            <p>Enter Email</p>
            <input
              type="email"
              className="account-input"
              value={userEmail}
              onChange={(e) => {
                setUserEmail(e.target.value);
                handleLog();
              }}
            />
          </div>

          <div className="account-name">
            <p>Enter Password</p>
            <input
              type="password"
              className="account-input"
              value={userPassword}
              onChange={(e) => {
                setUserPassword(e.target.value);
                handleLog();
                handlePassNote();
              }}
            />
            {passNote && <p className="pass-note">Minimum of 6 characters</p>}
          </div>
        </div>

        <div className={ passNote ? "account-passive" : "account-create"}>
          <p onClick={handleAccount}>Create Account</p>
        </div>
      </section>
      <section className="account-notice">
        <div className="divider">
          <div className="divide"></div>
        </div>

        {errorNotice && (
          <p className="account-notice-text">
            Account Creation Failed, <br /> please try again
          </p>
        )}

        {logNotice && (
          <p className="account-notice-text success">
            Account Created Successfully! Redirecting...
          </p>
        )}
      </section>
    </div>
  );
}
