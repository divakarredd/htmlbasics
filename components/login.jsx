import React from "react";
import {
  Grid,
  Typography,
  Button,
  Box,
  TextField,
  Select,
  InputLabel,
  FormControl,
  MenuItem,
} from "@mui/material";

const ariaLabel = { "aria-label": "description" };

const Login = () => {
  return (
    <div>
            <Typography variant="h3">Login</Typography>     {" "}
      <Grid container>
               {" "}
        <Grid item xs={4} style={{ marginLeft: "auto", marginRight: "auto" }}>
                   {" "}
          <form
            style={{
              border: "1px solid dark",
              padding: "20px",
              marginTop: "10px",
            }}
          >
                       {" "}
            <Box mb={3}>
                           {" "}
              <TextField
                inputProps={ariaLabel}
                type="email"
                variant="outlined"
                fullWidth
                label="Email"
                name="email"
              />
                         {" "}
            </Box>
                       {" "}
            <Box mb={3}>
                           {" "}
              <TextField
                inputProps={ariaLabel}
                type="password"
                fullWidth
                variant="outlined"
                label="Password"
                name="password"
              />
                         {" "}
            </Box>
                       {" "}
            <FormControl variant="outlined" fullWidth>
                           {" "}
              <InputLabel id="demo-simple-select-outlined-label">
                                Role              {" "}
              </InputLabel>
                           {" "}
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                name="role"
                label="Role"
              >
                               {" "}
                <MenuItem value="">
                                    <em>None</em>               {" "}
                </MenuItem>
                                <MenuItem value="admin">Admin</MenuItem>       
                        <MenuItem value="coder">Coder</MenuItem>             {" "}
              </Select>
                         {" "}
            </FormControl>
                       {" "}
            <Box mt={3}>
                           {" "}
              <Button variant="contained" type="submit" fullWidth>
                                Login              {" "}
              </Button>
                         {" "}
            </Box>
                     {" "}
          </form>
                 {" "}
        </Grid>
             {" "}
      </Grid>
         {" "}
    </div>
  );
};

export default Login;
