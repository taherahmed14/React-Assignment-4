import "./GroceryList.css";

export const GroceryList = ({ title, id, deleteList }) => {
    return (
        <div className="mainList">
            <div>
                <li> {title} </li>
                <button onClick={() => deleteList(id)}>Delete</button>
            </div>
        </div>
    );
};