import React, { useEffect, useState } from 'react'
import Single from './Single';

const Users = () => {

    let [boys, setBoys] = useState([]);
    let [girls, setGirls] = useState([]);

    const fetchBoys = async () => {
        try {
            const res = await fetch("https://hostelportalpblsem4.herokuapp.com/maleusers")

            const boys = await res.json();
            // boys = res;
            setBoys(boys.users);
            // boys = boysData;
            console.log('BOYS:', boys);
        }
        catch (e) {
            console.log(e);
        }

    }
    const fetchGirls = async () => {
        try {
            const res = await fetch("https://hostelportalpblsem4.herokuapp.com/femaleusers")

            const girls = await res.json();
            // boys = res;
            setGirls(girls.users);
            // boys = boysData;
            console.log('GIRLS:', girls);
        }
        catch (e) {
            console.log(e);
        }
    }


    useEffect(() => {
        fetchBoys();
        fetchGirls();
    }, [])



    return (
        <>

            {/* <Single /> */}
            <section>
                <div className="row">
                    <div className="col">
                        <h1 className='text-center'>Boys Hostel</h1>
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    {/* <th scope="col">Sr. No.</th> */}
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                </tr>
                            </thead>
                            <tbody>
                                <div className='displayBoys' >
                                    {boys.map((boy) => {
                                        const { fullname, email, mobile, } = boy;
                                        return (
                                            // <article className='singleBoy shadow border-0 mb-4'>
                                            //     <h4 className='name'>{fullname}</h4>
                                            //     <p>{email}</p>
                                            //     <p>{mobile}</p>
                                            // </article>
                                            <tr>
                                                {/* <th scope="row">1</th> */}
                                                <td>{fullname}</td>
                                                <td>{email}</td>
                                                <td>{mobile}</td>
                                            </tr>
                                        )
                                    })}
                                </div>


                            </tbody>
                        </table>
                    </div>
                    <div className="col">
                        <h1 className='text-center'>Girls Hostel</h1>
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    {/* <th scope="col">Sr. No.</th> */}
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                </tr>
                            </thead>
                            <tbody>
                                <div className='displayBoys' >
                                    {girls.map((girl) => {
                                        const { fullname, email, mobile, } = girl;
                                        return (
                                            // <article className='singleBoy shadow border-0 mb-4'>
                                            //     <h4 className='name'>{fullname}</h4>
                                            //     <p>{email}</p>
                                            //     <p>{mobile}</p>
                                            // </article>
                                            <tr>
                                                {/* <th scope="row">1</th> */}
                                                <td>{fullname}</td>
                                                <td>{email}</td>
                                                <td>{mobile}</td>
                                            </tr>
                                        )
                                    })}
                                </div>


                            </tbody>
                        </table>
                        {/* <div className='displayGirls' >
                            {girls.map((girl) => {
                                const { fullname, email, mobile, } = girl;
                                return (
                                    <article className='singleGirl shadow border-0 mb-4'>
                                        <h4 className='name'>{fullname}</h4>
                                        <p>{email}</p>
                                        <p>{mobile}</p>
                                    </article>
                                )
                            })} */}
                    </div>
                </div>




                {/* <div className='displayBoys' >
                {boys.map((boy) => {
                    const { fullname, email, mobile, } = boy;
                    return (
                        <article className='singleBoy shadow border-0 mb-4'>
                            <h4 className='name'>{fullname}</h4>
                            <p>{email}</p>
                            <p>{mobile}</p>
                        </article>
                    )
                })}
            </div> */}

            </section>
        </>
    )
}

export default Users