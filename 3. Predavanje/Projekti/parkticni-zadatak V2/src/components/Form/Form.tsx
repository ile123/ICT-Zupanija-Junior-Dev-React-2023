import { useEffect, useRef, useState } from 'react';
import { Card } from 'react-bootstrap';
import Button from '../Button/Button';
import FormDetails from '../FormDetails/FormDetails';
import FormName from '../FormName/FormName';
import styles from './Form.module.css'

export default function Form() {

    const [userData, setUserData] = useState({
        email: '',
        name: '',
        country: '',
        address: '',
        payment: ''
    });

    const [errors, setErrors] = useState({
        email: false,
        name: false,
        address: false
    });

    useEffect(() => {
        if((errors.address) || (errors.email) || (errors.name)) {
            setFormIsValid(false);
            return;
        }
        setFormIsValid(true);
    }, [errors]);

    const [confirmationChecked, setConfirmationChecked] = useState(false);
    const [formIsValid, setFormIsValid] = useState(false);
    const [showUserInformation, setShowUserInformation] = useState(false);

    const submitHandler = (e: any) => {
        e.preventDefault();
        if(!confirmationChecked) {
            alert("You have not aggred to the terms and services!");
            return;
        }
        if(formIsValid && confirmationChecked) {
            setShowUserInformation(true);
        }
        else {
            alert("Please input valid inforamtion into the form!");
        }
    }

    const confirmationHandler = (e:any) => {
        const isChecked = e.target.checked;
        setConfirmationChecked(isChecked);
    }

    const validateInput = (e: any) => {
        const name = e.name;
        const value = e.value;
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let booleanValue = false ;
        switch (name) {
            case "email":
                if(!value.match(emailRegex)) {
                    booleanValue = true;
                }
                break;
            case "name":
                if(value.length < 2) {
                    booleanValue = true;
                }
                break;
            case "address":
                if(value.length < 5) {
                    booleanValue = true;
                }
                break;
            default:
                console.log("ERROR: Input name not valid!");
                break;
        }
        return booleanValue;
    }

    const validationHandler = (e: any) => {
        const newErrors = {...errors};
        const isInvalid = validateInput(e);
        const name = e.name;
        switch (name) {
            case "email":
                newErrors.email = isInvalid;
                break;
            case "name":
                newErrors.name = isInvalid;
                break;
            case "address": 
                newErrors.address = isInvalid;
                break;
            default:
                console.log("ERROR: Input name not valid!");
                break;
        }
        setErrors(newErrors);
    }

    const changeHandler = (e: any) => {
        const name = e.name;
        const value = e.value;
        const newUserData = {...userData};
        switch (name) {
            case "email":
                newUserData.email = value;
                setUserData(newUserData);
                break;
            case "name":
                newUserData.name = value;
                setUserData(newUserData);
                break;
            case "country":
                newUserData.country = value;
                setUserData(newUserData);
                break;
            case "payment":
                newUserData.payment = value;
                setUserData(newUserData);
                break;
            case "address":
                newUserData.address = value;
                setUserData(newUserData);
                break;
            default:
                console.log("ERROR: Name of field not found!");
                break;
        }
    }

    return(
        <>
            <Card id={styles.card}>
                <form onSubmit={submitHandler}>
                    <FormName />
                    <h1 className={styles.label}>Contact</h1>
                    <input type="email" id={styles.emailInput} name='email' placeholder="Email address..." onBlur={e => validationHandler({name: "email",value: e.target.value})} onChange={e => changeHandler({name: "email",value: e.target.value})} />
                    {errors["email"] && <p id={styles.emailError}>ERROR: INVALID EMAIL!</p>}
                    <h1 id={styles.name}>Address</h1>
                    <div id={styles.addressInputs}>
                        <label className={styles.label}>Name: </label>
                        <input type="text" className={styles.inputAddress} onBlur={e => validationHandler({name: "name",value: e.target.value})} onChange={e => changeHandler({name: "name",value: e.target.value})} />
                        {errors["name"] && <p className={styles.error}>ERROR: INVALID NAME!</p>}
                        <label className={styles.label}>Country: </label>
                        <select className={styles.inputAddress} onBlur={e => changeHandler({name: "country",value: e.target.value})}>
                            <option disabled> Select Country </option>
                            <option value="Croatia">Croatia</option>
                            <option value="BiH">Bosnia and Herzegovina</option>
                            <option value="Slovenia">Slovenia</option>
                            <option value="Serbia">Serbia</option>
                        </select>
                        <label className={styles.label}>Address: </label>
                        <input type="text" className={styles.inputAddress} onBlur={e => validationHandler({name: "address",value: e.target.value})} onChange={e => changeHandler({name: "address",value: e.target.value})} />
                        {errors["address"] && <p className={styles.error}>ERROR: INVALID ADDRESS!</p>}
                    </div>
                    <h1 id={styles.paymentName}>Payment</h1>
                    <div id={styles.paymentInputs}>
                        <label>Invoice</label>
                        <input type="radio" name="paymentMethod" value={"Invoice"} onChange={e => changeHandler({name: "payment",value: e.target.value})}/>
                        <label>Card</label>
                        <input type="radio" name="paymentMethod" value={"Card"} onChange={e => changeHandler({name: "payment",value: e.target.value})}/>
                    </div>
                    <div id={styles.orderConfirmation}>
                        <h2>I Accept the terms and conditions</h2>
                        <input type="checkbox" name="accepted"  onChange={confirmationHandler}/>
                    </div>
                    <Button type={"submit"}>Naruči</Button>
                </form>
            </Card>
            {showUserInformation && <FormDetails userData={userData}/>}
        </>
    );
}