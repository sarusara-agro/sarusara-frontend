import { Button, Card, CardContent, FormControl, InputLabel, MenuItem, Select, TextField, ThemeProvider, Typography } from "@mui/material"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { themeInput } from "../theme"
import axios from "axios"
import toast from "react-hot-toast"

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name:"",
    email:"",
    password:"",
    address:"",
    phoneNo:"",
    role: "",
  })


  function handleChange(e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>) {

  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name as string]: value
  });
}


  const handleSubmit = async() =>{
    try{
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user/register`,
        formData
      )

      console.log(res.data);
      setFormData({
        name:"",
        email:"",
        password:"",
        address:"",
        phoneNo:"",
        role: "",
      })

  toast.success("User registered successfully");
  navigate("/login");
      
    }catch(err){
      console.log(err);
      toast.error("User cannot be registered " + err);
    }
  }

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
      color:"#125C00",
      fontWeight:"Bold"
    }}>
      Register
    </Typography>

    <ThemeProvider theme={themeInput}>
      <TextField
      fullWidth
      label="name"
      variant="outlined"
      name="name"
      value={formData.name}
      onChange={handleChange}
      required
      
    />

    <TextField
      fullWidth
      label="email"
      name="email"
      type="email"
      variant="outlined"
      value={formData.email}
      onChange={handleChange}
      required
      
    />

    <TextField
      fullWidth
      label="address"
      variant="outlined"
      name="address"
      value={formData.address}
      onChange={handleChange}
      required
      
    />

    <TextField
      fullWidth
      label="Telephone number"
      variant="outlined"
      name="phoneNo"
      type="number"
      value={formData.phoneNo}
      onChange={handleChange}
      required
      
    />

  <FormControl fullWidth>
    <InputLabel id="role-label" sx={{
      color:"#167A00"
    }}>Role</InputLabel>
    <Select
    labelId="role-label"
    label="Role"
    onChange={(e) =>
      setFormData({ ...formData, role: e.target.value as string })
    }
    name="role"
    value={formData.role}
    fullWidth
    sx={{
      marginBottom:"10px"
    }}
  >
    <MenuItem value="Customer">Customer</MenuItem>
    <MenuItem value="ServiceProvider">Service Provider</MenuItem>
  </Select>
  </FormControl>

    <TextField
      fullWidth
      label="Password"
      type="password"
      variant="outlined"
      onChange={handleChange}
      name="password"
      value={formData.password}
      sx={{
        marginBottom:"10px",
        color:"#167A00",
      }}
      required
    />

    </ThemeProvider>

    <Button
      fullWidth
      variant="contained"
      color="primary"
      className="mt-10"
      onClick={handleSubmit}
      sx={{
        marginBottom: "20px",
        background:"#167A00",
        boxShadow:"20px"
      }}
    >
      Register
    </Button>

    {/* Register Link */}
    <Typography variant="body2" className="mt-6">
      If you already have an account, please{" "}
      <Link to="/login" className="text-blue-900 underline font-bold">
        login
      </Link>
    </Typography>
  </CardContent>
</Card>

    </div>

  )
}

export default Signup