import React from "react";
import { Box, Typography } from "@mui/material";
import AxiosInstance from "./axios";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
type Item = {
  id: number;
  category: string;
  name: string;
  country: string;
  currency: string;
  price_local: number;
  price_cad: number;
};

const Delete: React.FC = () => {
    const MyParams = useParams();
    const MyId = MyParams.id;
  const [data, setData] = useState<Item | null>(null);
  const [loading, setloading] = useState(true);
  const GetData = async () => {
    try {
      const res = await AxiosInstance.get(`item/${MyId}`);
      setData(res.data);
      setloading(false);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };
  const { handleSubmit } = useForm();
  useEffect(() => {
    GetData();
  }, []);
  const navigate = useNavigate();

  const onSubmit = async () => {
    try {
      await AxiosInstance.delete(`item/${MyId}/`);
      navigate("/");
    } catch (error: any) {
      console.error(
        "Submission failed:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          background: "white",
          marginBottom: "10px",
          justifyContent: "center",
          alignItems: "center",
          height: 80,
        }}
      >
        <Typography
          sx={{
            color: "limegreen",
            fontSize: "2.5rem",
            fontWeight: "bold",
          }}
        >
          {loading ? "Loading..." : `Delete ${data?.name}`}
        </Typography>
      </Box>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            boxShadow: 3,
            flexDirection: "column",
            marginBottom: "10px",
            gap: 2,
            p: 2,
          }}
        >
          <button type="submit">Delete</button>
        </Box>
      </form>
    </div>
  );
};

export default Delete;
