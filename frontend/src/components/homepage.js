import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import homepageCSS from "../styles/homepage.module.css";

export default function HomePage() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={homepageCSS.container}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          typography: "body1",
        }}
      >
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              textColor="secondary"
              indicatorColor="secondary"
            >
              <Tab label="Register User" value="1" />
              <Tab label="Login User" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <h2>Please Register</h2>
            <form method="POST">
              <label for="email">Email</label>
              <br />
              <input type="text" id="email" name="email" required />
              <br />
              <label for="password">Password</label>
              <br />
              <input type="password" id="password" name="password" required />
              <br />
              <label for="confirm-password">Please Confirm Password</label>
              <br />
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
              />
              <br />
              <input type="submit" value="submit" />
            </form>
          </TabPanel>
          <TabPanel value="2">
            {" "}
            <h2>Login User</h2>
            <form method="GET">
              <label for="email">Email</label>
              <br />
              <input type="text" id="email" name="email" required />
              <br />
              <label for="password">Password</label>
              <br />
              <input type="password" id="password" name="password" required />
              <br />
              <input type="submit" value="submit" />
            </form>
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}
