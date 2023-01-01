import { Checkbox, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { DataStyle } from "./style";
import React from "react";
import moment from "moment/moment";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../redux/userData";
import { Checklist } from "../../redux/userData";

export default function DataList1() {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);

  const handleDelete = (id) => {
    dispatch(deleteUser({ id }));
  };
  const completeHandler = (user) => {
    let id = user.id;
    dispatch(Checklist({ id }));
  };
  function Checkdate(date) {
    let inputdate = moment(date).format("YYYY-MM-DD");
    let inputtime = moment(date).format("hh:mm A");
    let tomorrow = moment().add(1, "days").format("YYYY-MM-DD");
    let today = moment().format("YYYY-MM-DD");
    if (today == inputdate) {
      return "Today " + inputtime;
    } else if (tomorrow == inputdate) {
      return "Tommorow " + inputtime;
    } else {
      return inputdate + " " + inputtime;
    }
  }
  // console.log(users, "userrrrrr");
  return (
    <Box>
      {users.map((user) => (
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={8} sm={8} md={8} lg={8}>
            <Box mt={2} mb={1}>
              <Typography
                sx={DataStyle.noteSx}
                style={{
                  textDecoration: user.complete ? "line-through" : "none",
                }}
              >
                {user.name}
              </Typography>
              <Typography
                sx={DataStyle.dateSx}
                style={{
                  textDecoration: user.complete ? "line-through" : "none",
                }}
              >
                {Checkdate(user.date)}
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Grid container>
              <Grid item xs={6} sm={6} md={6} lg={6}>
                <Box sx={DataStyle.checkboxSx}>
                  <Checkbox
                    onClick={() => completeHandler(user)}
                    icon={
                      <RadioButtonUncheckedIcon sx={{ color: "#20EEB0 " }} />
                    }
                    checkedIcon={<CheckCircleIcon />}
                  />
                </Box>
              </Grid>
              <Grid
                item
                xs={6}
                sm={6}
                md={6}
                lg={6}
                mt={1}
                display={"flex"}
                justifyContent={"space-around"}
              >
                <DeleteOutlineIcon
                  sx={{ color: "#FF4545" }}
                  onClick={() => handleDelete(user.id)}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
}
