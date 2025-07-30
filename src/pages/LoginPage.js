import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import bgImage from "../assets/ai-vs-human-intelligence-debate.webp";
import { useAuth } from "../context/AuthContext";

// ------------------ Styled Components ------------------

const LoginContainer = styled.div`
  background: url(${bgImage}) no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Inter", "Segoe UI", sans-serif;
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  
  @media (max-width: 768px) {
    position: fixed;
    overflow-y: auto;
    min-height: 100vh;
    height: 100vh;
    background-attachment: scroll;
  }
`;

const LoginBox = styled.div`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 48px 40px;
  width: 420px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15), 0 8px 32px rgba(59, 130, 246, 0.1);
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
  animation: slideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4);
    background-size: 200% 100%;
    animation: shimmer 3s ease-in-out infinite;
  }
  
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
`;

const Title = styled.h2`
  font-weight: 800;
  font-size: 28px;
  background: linear-gradient(135deg, #1e293b 0%, #3b82f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 12px;
  animation: fadeInDown 0.6s ease-out 0.2s both;
  
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Subtitle = styled.p`
  font-size: 15px;
  color: #64748b;
  margin-bottom: 32px;
  animation: fadeInDown 0.6s ease-out 0.4s both;
`;

const FormGroup = styled.div`
  position: relative;
  margin: 20px 0;
`;

const FloatingLabel = styled.label`
  position: absolute;
  top: ${({ $focused }) => ($focused ? "2px" : "50%")};
  left: 15px;
  font-size: ${({ $focused }) => ($focused ? "11px" : "14px")};
  color: #5f6c8b;
  background: white;
  padding: 0 5px;
  transform: translateY(-50%);
  transition: all 0.3s ease;
  pointer-events: none;
`;

const Input = styled.input`
  width: 100%;
  padding: 16px 18px;
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 12px;
  font-size: 15px;
  background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
  outline: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: inherit;

  &:hover {
    border-color: #3b82f6;
    background: #ffffff;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.1);
  }

  &:focus {
    border-color: #3b82f6;
    background: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1), 0 8px 25px rgba(59, 130, 246, 0.15);
  }
`;

const TogglePassword = styled.span`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 13px;
  color: #3f51b5;
  cursor: pointer;
  user-select: none;
`;

const RoleSelect = styled.select`
  width: 100%;
  padding: 16px 18px;
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 12px;
  font-size: 15px;
  background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
  outline: none;
  margin-top: 24px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  appearance: none;
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%233b82f6%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13.2-6.4H18.4c-5%200-9.3%201.8-13.2%206.4-3.9%204.5-5.9%209.7-5.9%2015.6s2%2011.1%205.9%2015.6l128%20127.9c3.9%203.9%209.1%205.8%2014.3%205.8s10.4-1.9%2014.3-5.8L287%20100.6c3.9-4.5%205.9-9.7%205.9-15.6s-2-11.1-5.9-15.6z%22%2F%3E%3C%2Fsvg%3E');
  background-repeat: no-repeat;
  background-position: right 18px center;
  background-size: 14px;
  cursor: pointer;
  font-family: inherit;

  &:hover {
    border-color: #3b82f6;
    background: #ffffff;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.1);
  }

  &:focus {
    border-color: #3b82f6;
    background: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1), 0 8px 25px rgba(59, 130, 246, 0.15);
  }
`;

const LoginButton = styled.button`
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  color: white;
  font-weight: 700;
  padding: 16px 20px;
  width: 100%;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  margin-top: 28px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  font-family: inherit;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s ease;
  }

  &:hover {
    background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(59, 130, 246, 0.4), 0 4px 16px rgba(139, 92, 246, 0.3);
    
    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px);
  }

  &:disabled {
    background: linear-gradient(135deg, #94a3b8 0%, #cbd5e1 100%);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
    
    &::before {
      display: none;
    }
  }
`;

const Error = styled.p`
  color: #e53935;
  font-size: 13px;
  margin-top: 5px;
  animation: shake 0.3s ease-in-out;

  @keyframes shake {
    0% { transform: translateX(0); }
    25% { transform: translateX(-4px); }
    50% { transform: translateX(4px); }
    75% { transform: translateX(-4px); }
    100% { transform: translateX(0); }
  }
`;

// ------------------ Component ------------------

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focusedField, setFocusedField] = useState("");
  const [selectedRole, setSelectedRole] = useState("user"); // Default role
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const navigate = useNavigate();
  const { user: authUser, role: authRole, authError, setAuthError } = useAuth();

  // Redirect if already logged in and role is determined by AuthContext
  React.useEffect(() => {
    if (authUser && authRole && !isLoggingIn) {
      switch (authRole) {
        case "admin":
          navigate("/admin", { replace: true });
          break;
        case "superadmin":
          navigate("/superadmin", { replace: true });
          break;
        case "user":
          navigate("/dashboard", { replace: true });
          break;
        default:
          console.warn("Unknown role after login, redirecting to default dashboard.");
          navigate("/dashboard", { replace: true });
      }
    }
  }, [authUser, authRole, navigate, isLoggingIn]);

  React.useEffect(() => {
    // Clear auth error on component mount and unmount
    return () => {
      if (setAuthError) {
        setAuthError(null);
      }
    };
  }, [setAuthError]);



  const handleLogin = async () => {
    setError("");
    if (setAuthError) {
      setAuthError(null);
    }
    setIsLoggingIn(true);

    if (!email || !password || !selectedRole) {
      setError("Please enter email, password, and select a role.");
      setIsLoggingIn(false);
      return;
    }

    const emailLowerCase = email.toLowerCase();

    try {
      await signInWithEmailAndPassword(auth, emailLowerCase, password);
      
      const userDocRef = doc(db, "Users", emailLowerCase);
      const userDocSnap = await getDoc(userDocRef);

      let foundRole = null;
      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        foundRole = userData.role || "user";
      }

      if (!foundRole) {
        setError("Your account is not configured with a role. Please contact support.");
        await auth.signOut();
        return;
      }

      if (foundRole !== selectedRole) {
        if (setAuthError) {
          setAuthError(`Permission Denied: You are registered as a '${foundRole}'. Please log in with the correct role.`);
        }
        await auth.signOut();
        setIsLoggingIn(false);
        return;
      }

      switch (foundRole) {
        case "admin":
          navigate("/admin");
          break;
        case "superadmin":
          navigate("/superadmin");
          break;
        case "user":
          navigate("/dashboard");
          break;
        default:
          setError("An unexpected error occurred. Please try again.");
          await auth.signOut();
      }

    } catch (err) {
      console.error("Login failed:", err);
      if (err.code === "auth/invalid-email" || err.code === "auth/user-not-found" || err.code === "auth/wrong-password") {
        setError("Invalid email or password.");
      } else if (err.code === "auth/too-many-requests") {
        setError("Too many login attempts. Please try again later.");
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !isLoggingIn) {
      handleLogin();
    }
  };

  const loginButtonText = isLoggingIn
    ? "Logging In..."
    : `Login as ${selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}`;

  return (
    <LoginContainer>
      <LoginBox>
        <Title>Welcome Back</Title>
        <Subtitle>Access your personalized intelligence dashboard</Subtitle>

        <FormGroup>
          <Input
            type="email"
            value={email}
            onFocus={() => setFocusedField("email")}
            onBlur={() => setFocusedField("")}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleKeyDown}
            autoComplete="email"
            required
            disabled={isLoggingIn}
          />
          <FloatingLabel $focused={focusedField === "email" || email}>
            Email
          </FloatingLabel>
        </FormGroup>

        <FormGroup>
          <Input
            type={showPassword ? "text" : "password"}
            value={password}
            onFocus={() => setFocusedField("password")}
            onBlur={() => setFocusedField("")}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyDown}
            autoComplete="current-password"
            required
            disabled={isLoggingIn}
          />
          <FloatingLabel $focused={focusedField === "password" || password}>
            Password
          </FloatingLabel>
          <TogglePassword onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "Hide" : "Show"}
          </TogglePassword>
        </FormGroup>

        <RoleSelect
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
          disabled={isLoggingIn}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
          <option value="superadmin">Superadmin</option>
        </RoleSelect>

        {error && <Error>{error}</Error>}
        {authError && <Error>{authError}</Error>}

        <LoginButton onClick={handleLogin} disabled={isLoggingIn || !email || !password || !selectedRole}>
          {loginButtonText}
        </LoginButton>
      </LoginBox>
    </LoginContainer>
  );
};

export default LoginPage;
