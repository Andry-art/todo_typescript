import React  from 'react'
import {ITask} from "../Interfaces"

interface Props {
    task: ITask;
    compliteTask(TaskToDelete: string): void;
}

const TodoTask = ({task, compliteTask}: Props) => {
    return (
        <div className="task">
            <div className="content">
                <span>{task.taskName}</span>
                <span>{task.deadline}</span>
            </div>
            <button onClick={()=>compliteTask(task.taskName)}>X</button>
        </div>
    )
}

export default TodoTask;
