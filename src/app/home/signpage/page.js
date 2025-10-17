"use client";

import "./sign.css";
import { useState, useEffect } from "react";
import { signAccount } from "../../../../lib/signAccount";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignInPage() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [submitData, setSubmitData] = useState(null);
  const [logNotice, setLogNotice] = useState(false);
  const [errorNotice, setErrorNotice] = useState(false);
  const [passNote, setPassNote] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (!submitData) return;
    setIsLoading(true);
    const { email, password } = submitData;

    async function runSignIn() {
      const { success, error } = await signAccount(email, password);

      if (error) {
        console.error("Sign-in error:", error.message);
        setErrorNotice(true);
        setLogNotice(false);
        setIsLoading(false);
        setSubmitData(null);
        setUserEmail("");
        setUserPassword("");
      } else if (success) {
        setLogNotice(true);
        setErrorNotice(false);

        // ✅ Redirect after short delay
        setTimeout(() => {
          router.push("/home");
        }, 1000);
        setIsLoading(false);
      }
    }

    runSignIn();
  }, [submitData, router]);

  const handleSignIn = () => {
    if (!userEmail || !userPassword) return;
    setSubmitData({ email: userEmail, password: userPassword });
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
          <div className="loading-pill">Signing...</div>
        </div>
      </section>}
      <section className="account-form">
        <div className="account-entry">
          <div className="account-name">
            <p>Enter Email</p>
            <input
              type="email"
              value={userEmail}
              onChange={(e) => {
                setUserEmail(e.target.value);
                handleLog();
              }}
              className="account-input"
            />
          </div>

          <div className="account-name">
            <p>Enter Password</p>
            <input
              type="password"
              value={userPassword}
              onChange={(e) => {
                setUserPassword(e.target.value);
                handleLog();
                handlePassNote();
              }}
              className="account-input"
            />
            {passNote && <p className="pass-note">Minimum of 6 characters</p>}
            <p className="pass-note">Forgot Password? Contact <span className="admin-email">info@realmerconsultingagency.ceo</span></p>
          </div>
        </div>
        <div className={ passNote ? "account-passive" : "account-create"}>
          <p onClick={handleSignIn}>Sign In</p>
        </div>
        <p className="register-note">Don't have an account? <Link href="/home/accountpage" className="register-create">Register here</Link></p>
      </section>
      <section className="account-notice">
        <div className="divider">
          <div className="divide"></div>
        </div>

        {logNotice && (
          <p className="account-notice-text success">
            Sign-in successful! Redirecting...
          </p>
        )}

        {errorNotice && (
          <p className="account-notice-text">
            Failed to login <br /> Please check your credentials
          </p>
        )}
      </section>
    </div>
  );
}
