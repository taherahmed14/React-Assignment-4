import { nanoid } from "nanoid";
import { useState } from "react";
import { GroceryInput } from "./GroceryInput";
import { GroceryList } from "./GroceryList";

export const Grocery = () => {
    const [list, setList] = useState([]);
    const handleData = (data) => {
        // console.log(data);
        const payload = {
            title: data,
            id: nanoid(7)
        }
        setList([...list, payload]);
    };

    const deleteList = (id) => {
        let newArr = list.filter((item) => item.id!==id);
        setList(newArr);
    };

    return (
        <div>
            <GroceryInput getData={handleData} />
            {list.map((e) => (
                <GroceryList key={e.id} {...e} deleteList={deleteList} />
            ))}
        </div>
    )
};

//Notes:
//getData(inputValue) --> getData={handleData} --> handleData();
//Providing id's because every value must conatin uuid
//Steps : install nanoid --> create a separate object to pass with uuid --> refract in map --> (e) < key={e.id} {...e} /> 
//To pass an argument in a function in html element --> onClick = {() => handleClick(id)}