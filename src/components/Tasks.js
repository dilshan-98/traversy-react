import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <div className="tasks">
            {tasks.map((task) => (
                <Task task={task} key={task.id} onDelete={onDelete} onToggle={onToggle}/>
            ))}
        </div>
    );
}

export default Tasks;