import React from "react";
import { Box, Typography } from "@mui/material";
import MyTextField from "./forms/MyTextField";
import MySelectField from "./forms/MySelectField";
import { useForm } from "react-hook-form";
import AxiosInstance from "./axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const Edit: React.FC = () => {
  const MyParams = useParams();
  const MyId = MyParams.id;
  const GetData = async () => {
    try {
      const res = await AxiosInstance.get(`item/${MyId}`);
      const item = res.data;
      setValue('name', item.name);
      setValue('country', item.country);
      setValue('currency', item.currency);
      setValue('price_local', item.price_local);
      setValue('price_cad', item.price_cad);
      setValue('category', item.category);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    GetData();
  }, []);
  const navigate = useNavigate();
  const { handleSubmit, reset, setValue, control } = useForm({
    defaultValues: {
      category: "",
      name: "",
      country: "",
      currency: "",
      price_local: "",
      price_cad: "",
    },
  });

  const onSubmit = async (data: any) => {
    try {
      await AxiosInstance.put(`item/${MyId}/`, {
        name: data.name,
        country: data.country,
        category: data.category,
        price_local: Number(data.price_local),
        price_cad: Number(data.price_cad),
        currency: data.currency,
      });
      reset();
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
          Track a Item
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
          <Box>
            <MyTextField
              name="name"
              control={control}
              label="Name"
              placeholder="Provide a commodity"
            />
          </Box>
          <Box>
            <MyTextField
              name="country"
              control={control}
              label="Country"
              placeholder="Provide a country"
            />
          </Box>
          <Box>
            <MyTextField
              name="currency"
              control={control}
              label="Currency"
              placeholder="Provide a currency"
            />
          </Box>
          <Box>
            <MyTextField
              name="price_local"
              control={control}
              label="Price_local"
              placeholder="Provide a local price"
            />
          </Box>
          <Box>
            <MyTextField
              name="price_cad"
              control={control}
              label="Price-cad"
              placeholder="Provide a cad price"
            />
          </Box>

          <Box>
            <MySelectField name="category" control={control} />
          </Box>

          <button type="submit">Submit</button>
        </Box>
      </form>
    </div>
  );
};

export default Edit;
