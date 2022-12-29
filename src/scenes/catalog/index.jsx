import { Box, Typography, Paper, Popper, Avatar } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { React, useEffect, useState, useRef } from "react";
import { number } from "yup/lib/locale";
import { WrapText } from "@mui/icons-material";



const Catalog = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  const [list, setList] = useState([]);
  useEffect(() => {
    fetch("http://localhost/productlifecycle/catalog.php")
      .then(res => res.json())
      .then(
        (result) => {
          setList(result);
        }
      )
  }, [])

  

  return (
    <Box m="20px">
      <Header
        title="Danh mục sản phẩm"
        subtitle="Quản lý danh mục sản phẩm"
      />
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
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
          
        }}
      >
        <DataGrid
          rows={list}
          columns={columns}
          getRowId={(list) => list.productCode}
          components={{ Toolbar: GridToolbar }}
          rowHeight={200}
          
                    
        />
      </Box>
    </Box>
  );
};

const columns = [
  { field: "productCode", headerName: "ID", flex: 0.5, },
  { field: "productName", headerName: "Tên sản phẩm", },
  {
    field: "productLine",
    headerName: "Dòng sản phẩm",
    flex: 0.5,
    cellClassName: "name-column--cell",
  },
  {
    field: "description",
    headerName: "Mô tả",
    headerAlign: "left",
    align: "left",
    flex: 1,
    width: 300,
    height: 300,
  },
  {
    field: "warrantyTime",
    headerName: "Bảo hành",
    flex: 0.5,
    
  },
  {
    field: "quantityInStock",
    headerName: "Tồn Kho",
    flex: 0.5,
  },
  {
    field: "image",
    headerName: "Hình ảnh",
    // flex: 1,
    width: 150,
    renderCell: (params) => {
      return (
        <>
          <img src={params.value} width={150} />
        </>
      );
    }
    
  }
  
];

export default Catalog;
