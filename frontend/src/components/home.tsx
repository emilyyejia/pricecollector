import React, { useEffect, useMemo, useState } from "react";
import AxiosInstance from "./axios";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import {
  IconButton,
  Box,
} from '@mui/material';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';
import { Link } from "react-router-dom";
type Item = {
  id: number;
  category: string;
  name: string;
  country: string;
  currency: string;
  price_local: number;
  price_cad: number;
};

const Home: React.FC = () => {
  const [data, setData] = useState<Item[]>([]);

  const GetData = async () => {
    try {
      const res = await AxiosInstance.get<Item[]>(`item/`);
      setData(res.data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    GetData();
  }, []);

  const columns = useMemo<MRT_ColumnDef<Item>[]>(
    () => [
      { accessorKey: "name", header: "Item Name", size: 180 },
      { accessorKey: "category", header: "Category", size: 150 },
      { accessorKey: "country", header: "Country", size: 120 },
      { accessorKey: "currency", header: "Currency", size: 100 },
      { accessorKey: "price_local", header: "Local Price", size: 120 },
      { accessorKey: "price_cad", header: "Price in CAD", size: 120 },
    ],
    []
  );

const table = useMaterialReactTable({
  columns,
  data,
  enableRowActions: true, 
  renderRowActions: ({ row }) => (
    <Box sx={{ display: 'flex', gap: '0.5rem' }}>
      <IconButton component={Link} to ={`edit/${row.original.id}`}>
        <EditIcon />
      </IconButton>
      <IconButton component={Link} to ={`delete/${row.original.id}`}>
        <DeleteIcon />
      </IconButton>
    </Box>
  ),
});

  return (
    <div>
      <MaterialReactTable
        table={table}
      />
    </div>
  );
};

export default Home;
