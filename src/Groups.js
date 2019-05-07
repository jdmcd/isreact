import React, { Component } from 'react';
import AuthedBase from './AuthedBase';
import { Group } from './Group';

class Class extends Component {
    render() {
        return (
            <AuthedBase>
                <h1>Groups</h1>

                <div className="row mb-3">
                    <Group title="Group 1" people={["Person 1", "Person 2", "Person 3"]} />
                    <Group title="Group 2" people={["Person 4", "Person 5", "Person 6"]} />
                    <Group title="Group 3" people={["Person 7", "Person 8", "Person 9"]} />
                </div>
            </AuthedBase>
        );
    }
}

export default Class;