import * as React from "react";
import {
  TableCell,
  tableCellClasses,
  TableRow,
  styled,
  Grid,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableBody,
  Box,
  Link,
} from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetch,
  selectData,
  selectHasError,
  selectIsFetching,
} from "../features/unitSlice";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  }, // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const UnitTable = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectData);
  const isFetching = useSelector(selectIsFetching);
  const hasError = useSelector(selectHasError);

  useEffect(() => {
    dispatch(fetch());
  }, [dispatch]);

  return (
    <Grid>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="center">Age</StyledTableCell>
              <StyledTableCell align="center">Costs</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody component="tbody">
            {data &&
              data.map(({ id, name, age, cost }) => (
                <StyledTableRow key={id} component="tr" scope="row">
                  <StyledTableCell align="left">{id} </StyledTableCell>
                  <StyledTableCell align="center">
                    <Link href={`/unit/${id}`} underline="none">
                      {name}{" "}
                    </Link>
                  </StyledTableCell>
                  <StyledTableCell align="center">{age} </StyledTableCell>
                  <StyledTableCell align="center">
                    {cost?.Wood ? " Wood: " + cost?.Wood : ""}
                    {cost?.Food ? " Food: " + cost?.Food : ""}
                    {cost?.Gold ? " Gold: " + cost?.Gold : ""}
                    {cost.Wood === 0 &&
                      cost.Food === 0 &&
                      cost.Gold === 0 &&
                      "No Cost"}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {(isFetching || hasError) && (
        <Box sx={{ align: "center" }}> Loading... </Box>
      )}
    </Grid>
  );
};

export default UnitTable;
