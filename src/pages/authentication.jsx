// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { AuthContext } from '../contexts/AuthContext';
// import { Snackbar } from '@mui/material';



// const defaultTheme = createTheme();

// export default function Authentication() {
//   const [username, setUsername] = React.useState("");
//   const [password, setPassword] = React.useState("");
//   const [name, setName] = React.useState("");
//   const [error, setError] = React.useState("");
//   const [message, setMessage] = React.useState("");

//   const [formState, setFormState] = React.useState(0);
//   const [open, setOpen] = React.useState(false);

//   const { handleRegister, handleLogin } = React.useContext(AuthContext);

//   const handleAuth = async () => {
//     try {
//       if (formState === 0) {
//         // login
//         let result = await handleLogin(username, password);
//         console.log(result);
//       }
//       if (formState === 1) {
//         // register
//         let result = await handleRegister(name, username, password);
//         console.log(result);
//         setUsername("");
//         setPassword("");
//         setName("");
//         setMessage(result);
//         setOpen(true);
//         setError("");
//         setFormState(0);
//       }
//     } catch (err) {
//       console.log(err);
//       const message = err?.response?.data?.message || "Something went wrong";
//       setError(message);
//     }
//   };

//   return (
//     <ThemeProvider theme={defaultTheme}>

//       <Grid container component="main" sx={{ height: "100vh" }}>
//         <CssBaseline />

//         <Grid
//           size={{ xs: false, sm: 4, md: 7 }}
//           sx={{
//             backgroundRepeat: "no-repeat",
//             backgroundColor: (t) =>
//               t.palette.mode === "light"
//                 ? t.palette.grey[50]
//                 : t.palette.grey[900],
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         />
//         <Grid
//           size={{ xs: 12, sm: 8, md: 5 }}
//           component={Paper}
//           elevation={6}
//           square
//         >

//           <Box
//             sx={{
//               my: 8,
//               mx: 4,
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//             }}
//           >
//             <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
//               <LockOutlinedIcon />
//             </Avatar>

//             <div>
//               <Button
//                 variant={formState === 0 ? "contained" : "outlined"}
//                 onClick={() => setFormState(0)}
//                 sx={{ mr: 1 }}
//               >
//                 Sign In
//               </Button>
//               <Button
//                 variant={formState === 1 ? "contained" : "outlined"}
//                 onClick={() => setFormState(1)}
//               >
//                 Sign Up
//               </Button>
//             </div>

//             <Box component="form" noValidate sx={{ mt: 1 }}>
//               {formState === 1 && (
//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   id="fullname"
//                   label="Full Name"
//                   name="fullname"
//                   value={name || ""}
//                   autoFocus
//                   onChange={(e) => setName(e.target.value)}
//                 />
//               )}

//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="username"
//                 label="Username"
//                 name="username"
//                 value={username || ""}
//                 onChange={(e) => setUsername(e.target.value)}
//               />

//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 value={password || ""}
//                 type="password"
//                 onChange={(e) => setPassword(e.target.value)}
//                 id="password"
//               />

//               <Typography color="error" variant="body2">
//                 {error}
//               </Typography>

//               <Button
//                 type="button"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//                 onClick={handleAuth}
//               >
//                 {formState === 0 ? "Login" : "Register"}
//               </Button>
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>

//       <Snackbar
//         open={open}
//         autoHideDuration={4000}
//         message={message}
//         onClose={() => setOpen(false)}
//       />
//     </ThemeProvider>
//   );
// }











import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContext } from '../contexts/AuthContext';
import { Snackbar } from '@mui/material';
import { useNavigate } from "react-router-dom";  // ⬅️ redirect ke liye


const defaultTheme = createTheme();

export default function Authentication() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [error, setError] = React.useState("");
  const [message, setMessage] = React.useState("");

  const [formState, setFormState] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const { handleRegister, handleLogin } = React.useContext(AuthContext);
  const navigate = useNavigate();

  // Middleware check
  React.useEffect(() => {
    const token = localStorage.getItem("token"); // or sessionStorage.getItem("token")
    if (token) {
      setMessage("You are already logged in!");
      setOpen(true);

      setTimeout(() => {
        navigate("/home"); // redirect after 2 sec
      }, 1000);
    }
  }, [navigate]);

  const handleAuth = async () => {
    try {
      if (formState === 0) {
        // login
        let result = await handleLogin(username, password);
        console.log(result);
      }
      if (formState === 1) {
        // register
        let result = await handleRegister(name, username, password);
        console.log(result);
        setUsername("");
        setPassword("");
        setName("");
        setMessage(result);
        setOpen(true);
        setError("");
        setFormState(0);
      }
    } catch (err) {
      console.log(err);
      const message = err?.response?.data?.message || "Something went wrong";
      setError(message);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          size={{ xs: false, sm: 4, md: 7 }}
          sx={{
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          size={{ xs: 12, sm: 8, md: 5 }}
          component={Paper}
          elevation={6}
          square
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>

            <div>
              <Button
                variant={formState === 0 ? "contained" : "outlined"}
                onClick={() => setFormState(0)}
                sx={{ mr: 1 }}
              >
                Sign In
              </Button>
              <Button
                variant={formState === 1 ? "contained" : "outlined"}
                onClick={() => setFormState(1)}
              >
                Sign Up
              </Button>
            </div>

            <Box component="form" noValidate sx={{ mt: 1 }}>
              {formState === 1 && (
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="fullname"
                  label="Full Name"
                  name="fullname"
                  value={name || ""}
                  autoFocus
                  onChange={(e) => setName(e.target.value)}
                />
              )}

              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                value={username || ""}
                onChange={(e) => setUsername(e.target.value)}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                value={password || ""}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                id="password"
              />

              <Typography color="error" variant="body2">
                {error}
              </Typography>

              <Button
                type="button"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleAuth}
              >
                {formState === 0 ? "Login" : "Register"}
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Snackbar
        open={open}
        autoHideDuration={4000}
        message={message}
        onClose={() => setOpen(false)}
      />
    </ThemeProvider>
  );
}
