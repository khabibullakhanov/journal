import React, { useState, useEffect } from "react";
import "./Journal.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useSnackbar } from "notistack";
import { getData } from "../../Companenta/Data/data";



export function Journal() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData()
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const [ball, setBall] = useState([]);
  const [ball2, setBall2] = useState([]);
  const [ball3, setBall3] = useState([]);
  const [ball4, setBall4] = useState([]);
  const [ball5, setBall5] = useState([]);
  const [ball6, setBall6] = useState([]);
  const { enqueueSnackbar } = useSnackbar();



  const res = (e) => {
    e.preventDefault();

    enqueueSnackbar("Students' scores are saved.", {
      variant: "success",
    });
    localStorage.setItem("ball", JSON.stringify(ball));
    localStorage.setItem("ball2", JSON.stringify(ball2));
    localStorage.setItem("ball3", JSON.stringify(ball3));
    localStorage.setItem("ball4", JSON.stringify(ball4));
    localStorage.setItem("ball5", JSON.stringify(ball5));
    localStorage.setItem("ball6", JSON.stringify(ball6));
    // setNewData(...{name:"Muhammadxon"})
  };
  return (
    <>
      <form>
        <TableContainer
          className="main-table-container"
          component={Paper}
          sx={{ width: "95%" }}
        >
          <h1 className="subject-name">Web Dasturlash.</h1>
          <Table sx={myStyle.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "600", marginRight: "20px" }}>
                  №
                </TableCell>
                <TableCell sx={{ fontWeight: "600" }}>Name</TableCell>
                <TableCell sx={{ fontWeight: "600" }} align="center">
                  Mon
                </TableCell>
                <TableCell sx={{ fontWeight: "600" }} align="center">
                  Tue
                </TableCell>
                <TableCell sx={{ fontWeight: "600" }} align="center">
                  Wen
                </TableCell>
                <TableCell sx={{ fontWeight: "600" }} align="center">
                  Thur
                </TableCell>
                <TableCell sx={{ fontWeight: "600" }} align="center">
                  Fri
                </TableCell>
                <TableCell sx={{ fontWeight: "600" }} align="center">
                  Sat
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.fullname}
                  </TableCell>
                  <TableCell align="center">
                    <input
                      type="text"
                      className="ball"
                      maxLength={1}
                      size="100%"
                      
                      onChange={(e) =>
                        setBall({ ...ball, Monday: e.target.value })
                      }
                    />
                  </TableCell>
                  <TableCell align="center">
                    <input
                      type="text"
                      className="ball"
                      maxLength={1}
                      size="100%"
                      onChange={(e) =>
                        setBall2({ ...ball2, Tuesday: e.target.value })
                      }
                    />
                  </TableCell>
                  <TableCell align="center">
                    <input
                      type="text"
                      className="ball"
                      maxLength={1}
                      size="100%"
                      onChange={(e) =>
                        setBall3({ ...ball3, Wednesday: e.target.value })
                      }
                    />
                  </TableCell>
                  <TableCell align="center">
                    <input
                      type="text"
                      className="ball"
                      maxLength={1}
                      size="100%"
                      onChange={(e) => {
                        setBall4({ ...ball4, Thursday: e.target.value });
                      }}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <input
                      type="text"
                      className="ball"
                      maxLength={1}
                      size="100%"
                      onChange={(e) =>
                        setBall5({ ...ball5, Friday: e.target.value })
                      }
                    />
                  </TableCell>
                  <TableCell align="center">
                    <input
                      type="text"
                      className="ball"
                      maxLength={1}
                      size="100%"
                      onChange={(e) =>
                        setBall6({ ...ball6, Saturday: e.target.value })
                      }
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button
          type="submit"
          variant="contained"
          onClick={res}
          className="save-ball"
        >
          Save Balls
        </Button>
      </form>
    </>
  );
}

const myStyle = {
  table: {
    // boxShadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  },
};
