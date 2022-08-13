import React, { useState, useEffect } from "react";
import "./Todo.css"
import { useSnackbar } from "notistack";
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';



const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 5,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #bbdefb',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#64b5f6',
      boxShadow: '0 0 0 0.2rem #90caf9',
    },
  },
}));

export function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [studentData, setStudentData] = useState([]);
  const { enqueueSnackbar } = useSnackbar();


  useEffect(() => {
    if (localStorage.getItem("localTasks")) {
      const storedList = JSON.parse(localStorage.getItem("localTasks"));
      setTasks(storedList);
    }
  }, [])

  const addTask = (e) => {
    if (task) {
      const newTask = { id: new Date().getTime().toString(), title: task };
      setTasks([...tasks, newTask]);
      localStorage.setItem("localTasks", JSON.stringify([...tasks, newTask]));
      setTask("");
    }
  };

  const handleDelete = (task) => {
    const deleted = tasks.filter((t) => t.id !== task.id);
    setTasks(deleted);
    localStorage.setItem("localTasks", JSON.stringify(deleted))
  }

  const handleClear = () => {
    setTasks([]);
    localStorage.removeItem("localTasks");
  }

  const submitData = (e) => {
    e.preventDefault()
    console.log(studentData);
    localStorage.setItem("newStudent", JSON.stringify(studentData));
    enqueueSnackbar("New student is successfully added", {
      variant: "success",
  });
  }
  return (
    <div className="container row">
      <h1 className="">To-Do App</h1>
      <div className="col-8">
        <input
          name="task"
          type="text"
          value={task}
          placeholder="Write your task..."
          className="form-control"
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <div className="col-4">
        <button
          className=""
          onClick={addTask}
        >
          add
        </button>
      </div>
      <div className="badge">
        You have
        {!tasks.length
          ? " no tasks"
          : tasks.length === 1
            ? " 1 task"
            : tasks.length > 1
              ? ` ${tasks.length} tasks`
              : null}
      </div>
      <div className="form-group">
        <form onSubmit={submitData}>
          <div>
            <FormControl sx={{ m: 1, width: "300px", }} variant="standard">
              <BootstrapInput onChange={(e) => setStudentData({ ...studentData, name: e.target.value })} id="demo-customized-textbox" required placeholder="Write new student's Full Name..." />
            </FormControl>
            <FormControl sx={{ m: 1, width: "300px", }} variant="standard">
              <BootstrapInput onChange={(e) => setStudentData({ ...studentData, fName: e.target.value })} id="demo-customized-textbox" required placeholder="Write new student's Father's Name..." />
            </FormControl>
            <FormControl sx={{ m: 1, width: "300px", }} variant="standard">
              <BootstrapInput onChange={(e) => setStudentData({ ...studentData, age: e.target.value })} id="demo-customized-textbox" required placeholder="Write new student's Age..." />
            </FormControl>
            <FormControl sx={{ m: 1, width: "300px", }} variant="standard">
            <BootstrapInput onChange={(e) => setStudentData({ ...studentData, addres: e.target.value })} id="demo-customized-textbox" required placeholder="Write new student's address..." />
          </FormControl>
          </div>
          <div>
            <FormControl sx={{ m: 1, width: "300px", }} variant="standard">
              <BootstrapInput onChange={(e) => setStudentData({ ...studentData, birthday: e.target.value })} id="demo-customized-textbox" required placeholder="Write new student's birthday..." />
            </FormControl>
            <FormControl sx={{ m: 1, width: "300px", }} variant="standard">
              <BootstrapInput onChange={(e) => setStudentData({ ...studentData, number: e.target.value })} id="demo-customized-textbox" required placeholder="Write new student's Phone Number..." format="+1 (##) ### ## ##" allowedDecimalSeparators mask="_" />
              {/* <NumberFormat sx={{ height: '50%' }} format="+1 (##) ### ## ##" allowedDecimalSeparators mask="_" /> */}
            </FormControl>
          </div>
          {/* <FormControl sx={{ m: 1, width: "300px" }} > */}
          {/* <label className="label-image">
          <InputLabel htmlFor="demo-customized-textbox" sx={{paddingTop: '10px'}} ></InputLabel>
          <BootstrapInput type="file" placeholder="Write new student's birthday..." />
          </label> */}
          {/* <Button variant="outlined" component="label" sx={{ padding: "9px", border: '2px solid #424242', }}> */}
          {/* <PhotoCamera /> */}
          {/* adsdsfd
              <input hidden accept="image/*" multiple type="file" />
            </Button> */}
          {/* </FormControl> */}
          <Button variant="contained" sx={{width: "76%", marginTop: "10px"}} type="submit">Add Student</Button>
        </form>
      </div>
      {
        tasks.map((task) => (
          <React.Fragment key={task.id}>
            <div className="col-11">
              <span className="form-control bg-white btn mt-2"
                style={{ textAlign: "left", fontWeight: "bold" }}>
                {task.title}
              </span>
            </div>

            <div className="col-1">
              <button
                className=" mt-2 btn btn-warning material-icons"
                onClick={() => handleDelete(task)}
              >delete</button>
            </div>
          </React.Fragment>
        ))
      }
      {
        !tasks.length ? null : (
          <div>
            <button className="btn btn-secondary  mt-4 mb-4" onClick={() => handleClear()}>
              Clear
            </button>
          </div>
        )
      }
    </div >
  );
}