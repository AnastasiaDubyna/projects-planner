import BugReportIcon from '@mui/icons-material/BugReport';
import BoltIcon from '@mui/icons-material/Bolt';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import React from 'react';

export const defaultModalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const taskTypes = ["bug", "story", "epic"];

export const stages = [
    { keyName: "readyForDev", titleName: "ready for dev" },
    { keyName: "inProgress", titleName: "in progress" },
    { keyName: "codeReview", titleName: "code review" },
    { keyName: "done", titleName: "done" }
];

export const icons = {
    bug: <BugReportIcon color="error"/>, 
    epic: <BoltIcon color="primary"/>, 
    story: <BookmarkIcon color="secondary"/>
};