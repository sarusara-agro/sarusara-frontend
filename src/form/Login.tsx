import { Button, Card, CardContent, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");
  const navigate = useNavigate();

  let handleLogin = async () => {
    try {

      const res = await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/api/user/login",
        {
          username: username,
          password: password,
        }
      );

      console.log(username);
      
      console.log(res);
      
      localStorage.setItem("token", res.data.token);

      if(res.data.user == null){
        toast.error("user cannot be found")
      }
      
      const user = res.data.user;
      console.log(res.data.message);

      if (user.role == "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }

      toast.success("Login successful...");
    } catch (err) {
      console.log(err);
      toast.error("Login failed ");
    }
  };
  return (
    <div
      className="min-h-screen w-full flex items-center justify-end
                 bg-[url('./assets/paddy.jpg')] bg-cover bg-center bg-fixed"
    >

      {/* Login Card */}
      <Card
  sx={{
    backgroundColor: "rgba(255, 255, 255, 0.3)", // semi-transparent
    backdropFilter: "blur(2px)", // blur
    height: "80%",
    width: { xs: "90%", md: "30%" },
    margin: 2,
    borderRadius: "1.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    minWidth:"400px",
    minHeight:"400px",
    marginRight:"100px"
  }}
>
  <CardContent className="flex flex-col items-center w-full">
    <Typography variant="h4" sx={{
      marginBottom:"20px",
      color:"#167A00",
      fontWeight:"Bold"
    }}>
      Login
    </Typography>

    <TextField
      fullWidth
      label="Username"
      variant="outlined"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      className="mb-5"
      required
      sx={{
        marginBottom:"20px",
        color:"#167A00"
      }
      }
    />

    <TextField
      fullWidth
      label="Password"
      type="password"
      variant="outlined"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="mb-5"
      sx={{
        marginBottom:"20px",
        color:"#167A00"
      }}
      required
    />

    <Button
      fullWidth
      variant="contained"
      color="primary"
      className="mt-10"
      onClick={handleLogin}
      sx={{
        marginBottom: "20px",
        background:"#167A00",
        boxShadow:"20px"
      }}
    >
      Login
    </Button>

    {/* Register Link */}
    <Typography variant="body2" className="mt-6">
      If you don't have an account, please{" "}
      <Link to="/register" className="text-blue-700 underline">
        Register
      </Link>
    </Typography>
  </CardContent>
</Card>

    </div>

  )
}

export default Login
