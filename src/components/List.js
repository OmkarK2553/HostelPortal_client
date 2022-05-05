import React, { useState } from 'react'
import Single from './Single';

const Users = () => {

    let [boys, setBoys] = useState([]);
    let [girls, setGirls] = useState([]);

    const fetchBoys = async () => {
        const res = await fetch("https://hostelportalpblsem4.herokuapp.com/maleusers")

        const boysData = await res.json();
        // boys = res;
        setBoys(boysData);
        boys = boysData;
        console.log(res);
    }
    const fetchGirls = async () => {
        const girlsF = await fetch("https://hostelportalpblsem4.herokuapp.com/femaleusers")

        const res = await girlsF.json();
        girls = res;
        setGirls(girls);
        console.log(res);
    }
    fetchBoys();
    fetchGirls();



    return (
        <>

            {/* <Single /> */}
            <h1 className='text-center'>Boys Hostel</h1>
            <div className='displayBoys' >
                {/* {boys.map((boy) => {
                    const { fullname, email, mobile, } = boy;
                    return (
                        <article className='singleBoy shadow border-0 mb-4'>
                            <h4 className='name'>{fullname}</h4>
                            <p>{email}</p>
                            <p>{mobile}</p>
                        </article>
                    )
                })} */}
            </div>
        </>
    )
}

export default Users