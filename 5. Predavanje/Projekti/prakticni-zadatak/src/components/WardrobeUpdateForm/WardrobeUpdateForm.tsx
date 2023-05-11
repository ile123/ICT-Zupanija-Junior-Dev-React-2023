import { Card } from 'react-bootstrap';
import styles from './WardrobeUpdateForm.module.css'
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Title = styled.h3`
    margin-top: 1rem;
    margin-bottom: 3rem;
    font-style: oblique;
    color: peru;
`;

const Button = styled.button`
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: inline-block;
    outline: 0;
    border: none;
    cursor: pointer;
    font-weight: 600;
    border-radius: 4px;
    font-size: 13px;
    height: 30px;
    background-color: #5a2ba0;
    color: white;
    padding: 0 20px;
    width: 8rem;
    height: 3rem;
    :hover {
        background-color: #6609f1;
    }
`;

export default function WardrobeUpdateForm(props: any) {
    const [updatedChlothes, setUpdatedChlothes] = useState({
        "id": 0,
        "type": '',
        "size": '',
        "color": '',
        "image": '',
        "date": ''

    });

    useEffect(() => {
        axios.get('http://localhost:3001/chlothes/' + props.id)
            .then((data: any) => setUpdatedChlothes(data.data));
    }, []);

    const changeHandler = (event: any) => {
        const { name, value } = event.target;
        setUpdatedChlothes({ ...updatedChlothes, [name]: value });
    }

    async function submitHandler(event: any) {
        event.preventDefault();
        const result = proccesData(updatedChlothes);        
        await axios.put('http://localhost:3001/chlothes/' + props.id, result);
        await axios.get('http://localhost:3001/chlothes')
            .then((data: any) => props.onChangeChlothes(data.data));
    }

    const proccesData = (data: any) => {
        return {
            "id": Math.floor(Math.random() * 1000),
            "type": data.type,
            "size": data.size,
            "color": data.color,
            "image": data.image,
            "date": data.date
        };
    }

    return(
        <>
        <form onSubmit={submitHandler}>
            <Card id={styles.card}>
                <Title>PROMJENI ROBU</Title>
                <h3>Vrsta</h3>
                <select name="type" className={styles.select} onChange={changeHandler} value={updatedChlothes.type}>
                    <option value="Hlače">Hlače</option>
                    <option value="Majica">Majica</option>
                    <option value="Suknja">Suknja</option>
                    <option value="Jaketa">Jaketa</option>
                    <option value="Patike">Patike</option>
                    <option value="Čarape">Čarape</option>
                    <option value="Kape">Kape</option>
                </select>
                <h3>Veličina</h3>
                <select name="size" className={styles.select} onChange={changeHandler} value={updatedChlothes.size}>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
                <h3>Boja</h3>
                <input type="color" name="color" id={styles.colorPicker} onChange={changeHandler} value={updatedChlothes.color}/>
                <h3>Link Slike</h3>
                <input type="text" name="image" id={styles.imageUrl} onChange={changeHandler} value={updatedChlothes.image}/>
                <h3>Datum Kupnje</h3>
                <input type="date" name="date" id={styles.date}  onChange={changeHandler} value={updatedChlothes.date}/>
                <Button onSubmit={submitHandler}>Spremi Odjeću</Button>
            </Card>
        </form>
        </>
    );
}