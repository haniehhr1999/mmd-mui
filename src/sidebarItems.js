import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import AppleIcon from '@mui/icons-material/Apple';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import BackHandIcon from '@mui/icons-material/BackHand';

const SIDEITEMS = [
    {
        icon : <AccessTimeFilledIcon />,
        text : "contact us",
        child: [
            {
                icon : <BackHandIcon />,
                text : "child 1",
            },
            {
                icon : <BackHandIcon />,
                text : "child 2",
            },
            {
                icon : <BackHandIcon />,
                text : "child 3",
            },
        ]
    },
    {
        icon : <AnnouncementIcon />,
        text : "about us",
        child: [
            {
                icon : <BackHandIcon />,
                text : "child 4",
            },
            {
                icon : <BackHandIcon />,
                text : "child 5",
            },
            {
                icon : <BackHandIcon />,
                text : "child 6",
            },
            {
                icon : <BackHandIcon />,
                text : "child 7",
            },
            {
                icon : <BackHandIcon />,
                text : "child 8",
            },
        ]
    },
    {
        icon : <AppleIcon />,
        text : "my account",
    },
    {
        icon : <AutoAwesomeMotionIcon />,
        text : "setting",
    },
    {
        icon : <AssignmentTurnedInIcon />,
        text : "profile",
        child: [
            {
                icon : <BackHandIcon />,
                text : "child 9",
            },
            {
                icon : <BackHandIcon />,
                text : "child 10",
            },
            {
                icon : <BackHandIcon />,
                text : "child 11",
            },
            {
                icon : <BackHandIcon />,
                text : "child 12",
            },
            {
                icon : <BackHandIcon />,
                text : "child 13",
            },
        ]
    },
]

export default SIDEITEMS