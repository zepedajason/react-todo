import {useState} from "react";
import {v4 as uuid} from 'uuid';

const NewTodoForm = ({addTodo}) => {
    const [formData, setFormData] = useState("");

    const handleChange = (e) => {
        setFormData(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('form submitted:', formData);
        addTodo({formData, id: uuid()});
        setFormData("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="toDo"></label>
                <input
                    type="text"
                    name="toDo"
                    value={formData}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default NewTodoForm;