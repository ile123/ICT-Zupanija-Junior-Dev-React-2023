import { useEffect, useState } from 'react';
import WardrobeFilter from '../WardrobeFilter/WardrobeFilter';
import WardrobeForm from '../WardrobeForm/WardrobeForm';
import WardrobeTable from '../WardrobeTable/WardrobeTable';
import styles from './WardrobeManager.module.css'
import axios from 'axios';
import WardrobeUpdateForm from '../WardrobeUpdateForm/WardrobeUpdateForm';

export default function WardrobeManager() {
    const [wardrobe, setWardrobe] = useState([]);
    const [chlotheId, setChlotheId] = useState(0);
    const [filteredWardrobe, setFilteredWardrobe] = useState([]);
    const [showUpdateForm, setShowUpdateForm] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:3001/chlothes')
            .then((data: any) => {
                setWardrobe(data.data);
                setFilteredWardrobe(data.data);
            });
    }, []);

    useEffect(() => {
        setFilteredWardrobe(wardrobe)
    }, [wardrobe]);

    const newChlothesAddedHandler = (data: any) => {
        setWardrobe(data);
    }

    const filteredChlothesHandler = (data: any) => {
        setFilteredWardrobe(data);
    }

    const deleteChlotheHandler = (data: any) => {
        setWardrobe(data);
    }

    const updateChlotheHandler = (id: any) => {
        setChlotheId(id);
        setShowUpdateForm(true);
    }

    const closeUpdateChlotheHandler = (data: any) => {
        setChlotheId(0);
        setWardrobe(data);
        setShowUpdateForm(false);
    }

    return(
        <>
            <div id={styles.center}>
                <div id={styles.left}>
                    <WardrobeForm onAddNewChlothes={newChlothesAddedHandler} />
                    {showUpdateForm && <WardrobeUpdateForm id={chlotheId} onChangeChlothes={closeUpdateChlotheHandler} />}
                </div>
                <div id={styles.right}>
                    <WardrobeFilter chlothes={wardrobe} onFilterChlothes={filteredChlothesHandler}/>
                    <WardrobeTable chlothes={filteredWardrobe} onDeleteHandler={deleteChlotheHandler} onUpdateHandler={updateChlotheHandler} />
                </div>
            </div>
        </>
    );
}