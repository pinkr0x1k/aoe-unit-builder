import React, {useEffect} from "react";
import {
    Container,
    Divider,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {
    fetchUnitDetails,
    selectUnitDetailsData,
} from "../features/unitDetailSlice";
import {useParams} from "react-router-dom";
import TimelineAge from "../components/Timeline/TimelineAge";


const UnitDetails = () => {
    const dispatch = useDispatch();
    let data = useSelector(selectUnitDetailsData) || {};
    const {id} = useParams();
    useEffect(() => {
        dispatch(fetchUnitDetails({selectedUnit: parseInt(id, 10)}));
    }, [dispatch, id]);

    return (
        <React.Fragment>
            <Container maxWidth="md" component="main" sx={{pt: 8, pb: 6}}>
                <Container component="div" sx={{pt: 8, pb: 6}}>
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        Units Page
                    </Typography>
                    <Divider light/>
                </Container>
                <Container>
                  <TimelineAge age={data?.age ? data.age : null}/>
                </Container>
                <Container sx={{align: "center"}}>
                    <Table sx={{maxWidth: 700}} aria-label="spanning table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Details</TableCell>
                                <TableCell align="left">Specs</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow key={1} component="tr" scope="row">
                                <TableCell align="left"> ID </TableCell>
                                <TableCell align="left">
                                    {data?.id ? data.id : "NaN ID"}
                                </TableCell>
                            </TableRow>
                            <TableRow key={2} component="tr" scope="row">
                                <TableCell align="left"> Name </TableCell>
                                <TableCell align="left">
                                    {data?.name ? data.name : "NaN Name"}
                                </TableCell>
                            </TableRow>
                            <TableRow key={3} component="tr" scope="row">
                                <TableCell align="left"> Description </TableCell>
                                <TableCell align="left">
                                    {data?.description ? data.description : "NaN Description"}
                                </TableCell>
                            </TableRow>
                            <TableRow key={4} component="tr" scope="row">
                                <TableCell align="left"> Min. Requirement Age </TableCell>
                                <TableCell align="left">
                                    {data?.age ? data.age : "NaN Age"}
                                </TableCell>
                            </TableRow>
                            <TableRow key={5} component="tr" scope="row">
                                <TableCell align="left"> Wood Cost </TableCell>
                                <TableCell align="left">
                                    {data?.cost ? data.cost.Wood : "NaN Wood Cost"}
                                </TableCell>
                            </TableRow>
                            <TableRow key={6} component="tr" scope="row">
                                <TableCell align="left"> Food Cost </TableCell>
                                <TableCell align="left">
                                    {data?.cost ? data.cost.Food : "NaN Food Cost"}
                                </TableCell>
                            </TableRow>
                            <TableRow key={7} component="tr" scope="row">
                                <TableCell align="left"> Gold Cost </TableCell>
                                <TableCell align="left">
                                    {data?.cost ? data.cost.Gold : "NaN Gold Cost"}
                                </TableCell>
                            </TableRow>
                            <TableRow key={8} component="tr" scope="row">
                                <TableCell align="left"> Build Time </TableCell>
                                <TableCell align="left">
                                    {data?.build_time ? data.build_time : "NaN Build Time "}
                                </TableCell>
                            </TableRow>
                            <TableRow key={9} component="tr" scope="row">
                                <TableCell align="left"> Reload Time </TableCell>
                                <TableCell align="left">
                                    {data?.reload_time ? data.reload_time : "NaN Reload Time"}
                                </TableCell>
                            </TableRow>
                            <TableRow key={10} component="tr" scope="row">
                                <TableCell align="left"> Hit Points </TableCell>
                                <TableCell align="left">
                                    {data?.hit_points ? data.hit_points : "NaN Hit Points"}
                                </TableCell>
                            </TableRow>
                            <TableRow key={11} component="tr" scope="row">
                                <TableCell align="left"> Attack </TableCell>
                                <TableCell align="left">
                                    {data?.attack ? data.attack : "NaN Attack"}
                                </TableCell>
                            </TableRow>
                            <TableRow key={12} component="tr" scope="row">
                                <TableCell align="left"> Accuracy </TableCell>
                                <TableCell align="left">
                                    {data?.accuracy ? data.accuracy : "NaN Accuracy"}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Container>
            </Container>
        </React.Fragment>
    );
};

export default UnitDetails;
