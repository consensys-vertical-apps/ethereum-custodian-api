import React, { useEffect } from "react";
import { Grid, Typography, Box, Button } from "@material-ui/core";
import { Link as GatsbyLink } from "gatsby";
import Link from "@material-ui/core/Link";
import { grey } from "@material-ui/core/colors";

const MyApp: React.FC = () => {
  return (
    <>
      <Grid container alignContent="center" alignItems="center" justify="center" direction="column">
        <img className="logo" alt="logo" src="https://images.ctfassets.net/9sy2a0egs6zh/8u7FzS3aurD7ZpIBNnCBV/0ec2eaee46e0ccc9427badcf21029688/MetaMask-Inst.svg" style={{ paddingTop: "10%", width: "400px" }} />
        <br />
        <Typography variant="h1">Ethereum Custodian API</Typography>
        <Typography gutterBottom style={{ paddingTop: "50px", paddingBottom: "20px" }} variant="inherit">
          The JSON-RPC API for Ethereum Custodians
        </Typography>
        <br />
        <Link
          component={(props: { children: any }) => (
            <GatsbyLink to={"/api-documentation"} style={{ textDecoration: "none", color: grey[500], marginRight: "10px" }} activeStyle={{ color: grey[500] }}>
              {props.children}
            </GatsbyLink>
          )}>
          <Button variant="contained" color="primary">API Playground</Button>
        </Link>
        <br />
        <br />
        <br />
      </Grid>
    </>
  );
};

export default MyApp;
