import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { SignInForm } from "../components/SignInForm";
import { AppContext } from "../contexts/AppContext";
import "../styles/App.css";


export function SignInPage() {
    const context = useContext(AppContext);

    function handleSubmit(formData) {
        context.setUsername(formData.username);
        context.setAvatarIndex(formData.avatarIndex);
    }

    if (context.isSignedIn) {
        return <Navigate to="/chat" replace />;
    }

    return (
        <div className="sign-in-page">
            <div className="card">
                <SignInForm onSubmit={handleSubmit} />
                <Link to="/faq">Read the FAQ</Link>
            </div>
        </div>
    );
};
