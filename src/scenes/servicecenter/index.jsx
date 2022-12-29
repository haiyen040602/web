import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useState, useEffect } from "react";

const ServiceCenter = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [list, setList] = useState([]);
  useEffect(() => {
    fetch("http://localhost/productlifecycle/servicecenter.php")
      .then(res => res.json())
      .then(
        (result) => {
          setList(result);
        }
      )
  }, [])

  const columns = [
    { field: "servicecenterID", headerName: "ID" },
    {
      field: "servicecenterName",
      headerName: "Tên",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "servicecenterAddress",
      headerName: "Địa chỉ",
      flex: 1,
    },
    
  ];

  return (
    <Box m="20px">
      <Header title="Trung tâm bảo hành" subtitle="Thống kê các trung tâm bảo hành của Big Corp" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid 
        checkboxSelection 
        rows={list} 
        columns={columns}
        getRowId={(list) => list.servicecenterID}
         />
      </Box>
    </Box>
  );
};

export default ServiceCenter;
