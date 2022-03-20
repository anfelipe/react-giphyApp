
import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categories = ["Dragon Ball", "Kimetsu no yaiba", "Nanatzu no taizay"]
    const [categories, setCategories] = useState(["Dragon Ball"]);

    // const handleAdd = () => {
    //     //setCategories([...categories, 'One Puss Man']);
    //     setCategories(c => [...c, 'One Push Man']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />

            <hr/>

            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                {
                    categories.map( c => (
                        <GifGrid key={c} category={c}/>
                    ))
                }
            </ol>
        </>
    )
}
