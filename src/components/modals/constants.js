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