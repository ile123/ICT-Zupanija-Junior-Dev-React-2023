import styled from "styled-components";
import styles from './WardrobeTableRow.module.css'
import axios from "axios";
import { useState } from "react";

const Button = styled.button`
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    display: inline-block;
    outline: 0;
    border: none;
    cursor: pointer;
    font-weight: 600;
    border-radius: 4px;
    font-size: 0.8rem;
    width: 4rem;
    height: 3rem;
    background:${(props)=>props.name === 'red' ? 'red': 'white'};
    color:${(props)=>props.name === 'red' ? 'white':'red'};
    :hover {
        background-color: #772ce8;
    }
    + Button {
        margin-left: 1rem;
    }
`;

export default function WardrobeTableRow(props: any) {

    const [deleteButtonPressed, setDeleteButtonPressed] = useState(false);

    async function deleteHandler() {
        setDeleteButtonPressed(false);
        await axios.delete("http://localhost:3001/chlothes/" + props.id);
        await axios.get("http://localhost:3001/chlothes")
            .then((data: any) => props.onDeleteHandler(data.data));
    }

    const confirmationShowHandler = () => {
        if(!deleteButtonPressed) {
            setDeleteButtonPressed(true);
        } else {
            setDeleteButtonPressed(false);
        }
    }

    const updateHandler = () => {
        props.onUpdateHandler(props.id);
    }

    return(
        <>
            <tr id={styles.row}>
                <th>{props.type}</th>
                <th>{props.size}</th>
                <th><input type="color" value={props.color} id={styles.color} disabled/></th>
                <th><img src={props.src} id={styles.picture} /></th>
                <th>{props.date}</th>
                <th>
                    {!deleteButtonPressed &&
                        <div>
                            <Button name={"white"} onClick={updateHandler}>Edit</Button>
                            <Button name={"red"} onClick={confirmationShowHandler}>Delete</Button>
                        </div>
                    }
                    {deleteButtonPressed && 
                        <div>
                            <p>Are you sure?</p>
                            <Button name={"white"} onClick={deleteHandler}>Yes</Button>
                            <Button name={"red"} onClick={confirmationShowHandler}>No</Button>
                        </div>
                    }
                </th>
            </tr>
        </>
    );
}