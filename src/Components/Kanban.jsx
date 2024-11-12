import React, {useState} from 'react';
import Card from './Card';
import Column from './Column';
import DisplayButton from './DisplayButton';
import ColumnTitle from './ColumnTitle';
import './css/Kanban.css';

const Kanban = ({tickets, users}) => {
    console.log(tickets, users)
    const [selectedGrouping, setSelectedGrouping] = useState('status');
    const [selectedOrdering, setSelectedOrdering] = useState('priority');

    const handleGroupingChange = (event) => {
        setSelectedGrouping(event.target.value);
    };

    const handleOrderingChange = (event) => {
        setSelectedOrdering(event.target.value);
    };

    if (!tickets || tickets.length === 0 || !users || users.length === 0) {
        return <></>;
    }

    const userIdUserMap = users.reduce((result, user) => {
        result[user.id] = user;
        return result;
    }, {});

    let groupedData = {};
    if (selectedGrouping === 'status') {
        groupedData = tickets.reduce((result, card) => {
            if (!result[card.status]) {
                result[card.status] = [];
            }
            result[card.status].push(card);
            return result;
        }, {});
    } else if (selectedGrouping === 'user') {
        groupedData = tickets.reduce((result, card) => {
            if (!result[card.userId]) {
                result[card.userId] = [];
            }
            result[card.userId].push(card);
            return result;
        }, {});
    } else if (selectedGrouping === 'priority') {
        groupedData = tickets.reduce((result, card) => {
            if (!result[card.priority]) {
                result[card.priority] = [];
            }
            result[card.priority].push(card);
            return result;
        }, {});
    }

    const prioritizedData = Object.keys(groupedData).reduce((result, key) => {
        if (selectedOrdering === 'priority') {
            result[key] = groupedData[key].sort((a, b) => b.priority - a.priority);
            return result;
        } else {
            result[key] = groupedData[key].sort((a, b) => a.title.localeCompare(b.title));
            return result;
        }
    }, {});

    return (
        <div className="kanban">
            <div className="dropdown">
                <DisplayButton
                    selectedGrouping={selectedGrouping}
                    selectedOrdering={selectedOrdering}
                    handleGroupingChange={handleGroupingChange}
                    handleOrderingChange={handleOrderingChange}
                >
                    Display
                </DisplayButton>
            </div>
            <div className="columns-container">
                {Object.entries(prioritizedData).map(([key, value]) => (
                    <Column key={key} title={<ColumnTitle id={key} numCards={value.length} grouping={selectedGrouping} userIdUserMap={userIdUserMap} />} grouping={selectedGrouping}>
                        {value.map(card => <Card key={card.id} {...card} user={userIdUserMap[card.userId]}/>)}
                    </Column>
                ))}
            </div>
        </div>
    );
};

export default Kanban;

