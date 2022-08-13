import React, { useState, useEffect } from "react";
import "./HeaderTable.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { useDispatch, useSelector } from "react-redux";
import { acStudent } from "../../Redux/Student";
import { getData } from "../Data/data";
import { Navigate, useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  shadows: ["none"],
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(0),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export function HeaderTable() {

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getData()
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const dispatch = useDispatch();

  const navigate = useNavigate();

  return (
    <TableContainer
      className="main-table-container"
      component={Paper}
      sx={{ width: "95%", maxHeight: "89vh" }}
    >
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          sx={{ width: "350px", padding: "10px", color: "black", }}
          placeholder="Search..."
          inputProps={{ "aria-label": "search" }}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </Search>
      <Table sx={myStyle.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "600" }}>№</TableCell>
            <TableCell sx={{ fontWeight: "600" }}>Name </TableCell>
            <TableCell sx={{ fontWeight: "600" }} align="center">
              Father Name
            </TableCell>
            <TableCell sx={{ fontWeight: "600" }} align="center">
              Age
            </TableCell>
            <TableCell sx={{ fontWeight: "600" }} align="center">
              Birthday
            </TableCell>
            <TableCell sx={{ fontWeight: "600" }} align="center">
              Phone
            </TableCell>
            <TableCell sx={{ fontWeight: "600" }} align="center">
              Info
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.filter((value) => {
            if (search === "") {
              return value;
            } else if (
              value.fullname
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase()) ||
              value.fathername
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase())
            ) {
              return value.fullname;
              return value.fathername;
            } else {
            }

            if (search === "") {
              return value;
            } else if (
              value.phone.includes(search) ||
              value.birthday.includes(search)
            ) {
              return value.phone;
              return value.birthday;
            }
          })
            .map((row, index) => {
              return (
                <>
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.fullname}
                    </TableCell>
                    <TableCell align="center">{row.fathername}</TableCell>
                    <TableCell align="center">{row.age}</TableCell>
                    <TableCell align="center">{row.birthday}</TableCell>
                    <TableCell align="center">{row.img}</TableCell>
                    <TableCell align="center">
                      <Button
                        variant="outlined"
                        onClick={() => {
                          navigate("/students")
                          dispatch(acStudent(row))
                        }}
                        sx={{ fontSize: "13px" }}
                      >
                        Read More
                      </Button>
                    </TableCell>
                  </TableRow>
                </>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const myStyle = {
  table: {
    // boxShadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  },
};
