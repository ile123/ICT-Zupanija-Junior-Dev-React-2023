import { Card } from 'react-bootstrap';
import styles from './WarfrobeFilter.module.css'
import styled from 'styled-components';
import { useRef, useState } from 'react';

const Title = styled.h3`
    font-style: oblique;
    margin-top: 1rem;
    color: rebeccapurple;
`;

export default function WardrobeFilter(props: any) {

    let filterTypePrev = useRef('');
    let filterSizePrev = useRef('');
    const chlothes = props.chlothes;

    const onChangeTypeHandler = (event: any) => {
        filterTypePrev.current = event.target.value;
        filterWardrobe();
    }

    const onChangeSizeHandler = (event: any) => {
        filterSizePrev.current = event.target.value;
        filterWardrobe();
    }

    const filterWardrobe = () => {
        let filterType: string = filterTypePrev.current;
        let filterSize: string = filterSizePrev.current;
        let filteredWardrobe: any;

        if(filterType === "" && filterSize === "") {
            props.onFilterChlothes(chlothes);
            return;
        }
        if(filterType !== "" && filterSize !== "") {
            filteredWardrobe = chlothes.filter((chlothe: any) => chlothe.type === filterType && chlothe.size === filterSize);
        }
        if(filterType === "") {
            filteredWardrobe = chlothes.filter((chlothe: any) => chlothe.size === filterSize);
        }
        if(filterSize === "") {
            filteredWardrobe = chlothes.filter((chlothe: any) => chlothe.type === filterType);
        }
        props.onFilterChlothes(filteredWardrobe);
    }

    return(
        <>
            <Card id={styles.card}>
                <Title>Filter</Title>
                <select name="type" className={styles.select} onChange={onChangeTypeHandler}>
                    <option value="">Sva Odjeća</option>
                    <option value="Hlače">Hlače</option>
                    <option value="Majica">Majica</option>
                    <option value="Suknja">Suknja</option>
                    <option value="Jaketa">Jaketa</option>
                    <option value="Patike">Patike</option>
                    <option value="Čarape">Čarape</option>
                    <option value="Kape">Kape</option>
                </select>
                <select name="size" className={styles.select} onChange={onChangeSizeHandler}>
                    <option value="">Bilo Koja Veličina</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
            </Card>
        </>
    );
}