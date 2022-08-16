import React from "react";
import style from "./DataInterface.module.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
    wineTemplate,
    wineNumbers,
    objTemplate,
} from "../../services/winelist";
import { updateItem, createItem, deleteItem } from "../../services/server";
import { useState } from "react";

const DataInterface = ({ getData, wineList }) => {
    const [inputs, setInputs] = useState(objTemplate);
    const [selected, setSelected] = useState("Add new wine");

    const handleSubmit = () => {
        const data = {
            ...inputs,
            price: parseInt(inputs.price),
            year: parseInt(inputs.year),
            stock: parseInt(inputs.stock),
        };
        if (selected !== "Add new wine") updateItem("wine", inputs.id, data);
        else {
            createItem("wine", data);
            setInputs(objTemplate);
        }

        getData();
    };

    const handleInputChange = (e) => {
        const updatedWine = { ...inputs };
        updatedWine[e.target.name] = e.target.value;
        setInputs(updatedWine);
    };

    const handleSelect = (e) => {
        if (e.target.value === "Add new wine") return setInputs(objTemplate);
        const selectedWine = wineList.find(
            (wine) => wine.name === e.target.value,
        );
        setInputs(selectedWine);
        setSelected(e.target.value);
    };

    const handleDelete = () => {
        deleteItem("wine", inputs.id);
        getData();
        setInputs(objTemplate);
    };

    return (
        <div className={style.Interface}>
            <div className={style.Select}>
                <select
                    className={style.Select_Options}
                    onChange={handleSelect}>
                    <option>Add new wine</option>
                    {wineList.map((wine) => {
                        return <option key={wine.id}>{wine.name}</option>;
                    })}
                </select>
                <Button
                    variant="danger"
                    onClick={handleDelete}
                    className={style.Select_Delete}>
                    Delete
                </Button>
            </div>
            <Form className={style.Form}>
                {Object.entries(wineTemplate).map((entry, i) => {
                    return (
                        <Form.Group key={i}>
                            <Form.Label>{entry[1]}</Form.Label>
                            <Form.Control
                                value={inputs[entry[0]]}
                                type="text"
                                name={entry[0]}
                                placeholder={`Enter ${entry[0]}`}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                    );
                })}
                {Object.entries(wineNumbers).map((entry, i) => {
                    return (
                        <Form.Group key={i}>
                            <Form.Label>{entry[1]}</Form.Label>
                            <Form.Control
                                value={inputs[entry[0]]}
                                type="number"
                                name={entry[0]}
                                placeholder={`Enter ${entry[0]}`}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                    );
                })}
                <Button variant="primary" type="button" onClick={handleSubmit}>
                    Update
                </Button>
            </Form>
        </div>
    );
};

export default DataInterface;
