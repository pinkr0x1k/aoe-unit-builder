import React from "react";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import css from "../../styles/AgeTimeline.module.scss";
import {Typography} from "@mui/material";

const TimelineAge = (props) => {
    const age = props;
    console.log(age)
    return (
        <Timeline className={css.timeline} align="alternate">
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color={age.age === "Dark" ? "success" : "secondary"}/>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent className={css.timelineContentContainer}>
                    <Typography className={css.timelineContent}>{age.age === "Dark" ? "Dark" : "---"}</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color={age.age === "Feudal" ? "success" : "secondary"}/>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent className={css.timelineContentContainer}>
                    <Typography className={css.timelineContent}>{age.age === "Feudal" ? "Feudal" : "----"}</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color={age.age === "Castle" ? "success" : "secondary"}/>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent className={css.timelineContentContainer}>
                    <Typography className={css.timelineContent}>{age.age === "Castle" ? "Castle" : "---"}</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color={age.age === "Imperial" ? "success" : "secondary"}/>
                </TimelineSeparator>
                <TimelineContent className={css.timelineContentContainer}>
                    <Typography
                        className={css.timelineContent}>{age.age === "Imperial" ? "Imperial" : "---"}</Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    )
};

export default TimelineAge;