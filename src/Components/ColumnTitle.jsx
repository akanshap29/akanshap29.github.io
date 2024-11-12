import NoPrioritySVG from '../assets/No-priority.svg';
import LowSVG from '../assets/Img - Low Priority.svg';
import MediumSVG from '../assets/Img - Medium Priority.svg';
import HighSVG from '../assets/Img - High Priority.svg';
import UrgentSVG from '../assets/SVG - Urgent Priority colour.svg';
import AddSVG from '../assets/add.svg';
import ThreeDotsSVG from '../assets/3 dot menu.svg';
import BacklogSVG from '../assets/Backlog.svg';
import InProgressSVG from '../assets/in-progress.svg';
import TodoSVG from '../assets/To-do.svg';
import CancelledSVG from '../assets/Cancelled.svg';
import DoneSVG from '../assets/Done.svg';
import ProfileImageGenerator from './ProfileImage';
import './css/ColumnTitle.css';

const ColumnTitle = ({ id, numCards, grouping, userIdUserMap }) => {
    const addAndThreeIcons = (
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '5px' }}>
            <img src={AddSVG} width="20px" height="20px" />
            <img src={ThreeDotsSVG} width="20px" height="20px" />
        </div>
    );

    const lighterStyle = {
        color: 'grey',
        fontSize: '0.8rem'
    };

    if (grouping === 'status') {
        return (
            <div className="columnTitleBarStyle">
                <div className="columnTitleStyle">
                    {getStatusIcon(id)}
                    <div>{id}</div>
                    <div style={lighterStyle}>{numCards}</div>
                </div>
                {addAndThreeIcons}
            </div>
        );
    } else if (grouping === 'user' && userIdUserMap) {
        const user = userIdUserMap[id];
        return (
            <div className="columnTitleBarStyle">
                <div className="columnTitleStyle">
                    {user && <ProfileImageGenerator user={user} />}
                    {user ? user.name : 'Unknown User'}
                    <div style={lighterStyle}>{numCards}</div>
                </div>
                {addAndThreeIcons}
            </div>
        );
    } else if (grouping === 'priority') {
        return (
            <div className="columnTitleBarStyle">
                <div className="columnTitleStyle">
                    {getPriorityIcon(id)}
                    <div>{getPriorityString(id)}</div>
                    <div style={lighterStyle}>{numCards}</div>
                </div>
                {addAndThreeIcons}
            </div>
        );
    }
    return <></>;
}

function getPriorityString(priority) {
    switch (priority) {
        case "1":
            return 'Low';
        case "2":
            return 'Medium';
        case "3":
            return 'High';
        case "4":
            return 'Urgent';
        default:
            return 'No Priority';
    }
}

function getPriorityIcon(priority) {
    switch (priority) {
        case "1":
            return <img src={LowSVG} width="20px" height="20px" />;
        case "2":
            return <img src={MediumSVG} width="20px" height="20px" />;
        case "3":
            return <img src={HighSVG} width="20px" height="20px" />;
        case "4":
            return <img src={UrgentSVG} width="20px" height="20px" />;
        default:
            return <img src={NoPrioritySVG} width="20px" height="20px" />;
    }
}

function getStatusIcon(status) {
    switch (status) {
        case 'Todo':
            return <img src={TodoSVG} width="20px" height="20px" />;
        case 'In progress':
            return <img src={InProgressSVG} width="20px" height="20px" />;
        case 'Backlog':
            return <img src={BacklogSVG} width="20px" height="20px" />;
        case 'Cancelled':
            return <img src={CancelledSVG} width="20px" height="20px" />;
        case 'Done':
            return <img src={DoneSVG} width="20px" height="20px" />;
        default:
            return <></>;
    }
}

export default ColumnTitle;

