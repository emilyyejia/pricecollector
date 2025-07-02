import React from "react";
import { Box, Typography, Container } from "@mui/material";

const About: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          About Price Collector
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Empowering financial literacy through global price comparison
        </Typography>
      </Box>

      <Typography component="p" sx={{ mb: 2 }}>
        Price Collector is an educational tool designed to help users, especially kids and young learners, understand financial concepts by comparing prices of common products across different countries and currencies.
      </Typography>
      <Typography component="p" sx={{ mb: 2 }}>
        By providing both local prices and their equivalents in Canadian dollars, this app fosters awareness of currency values and international market variations, enhancing financial literacy in a practical and interactive way.
      </Typography>
      <Typography component="p" sx={{ mb: 2 }}>
        This platform aims to simplify complex financial ideas, making it easier for learners to grasp the impact of currency exchange rates and price differences globally.
      </Typography>
    </Container>
  );
};

export default About;
