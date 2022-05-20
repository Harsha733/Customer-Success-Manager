import React from 'react';
// import AddCSM from './AddCSM';
import CSMlist from './CSMlist';
import Header from './header';
import './header.css'

function Arrange() {
    const managers = [
        {
            id: '1',
            "name": 'Chilman Mehrotra',
            'role': 'client Manager',
            'email': 'mehrotra@spottanl.com'

        },
        {
            id: '2',
            "name": 'Saboor Sirwal',
            'role': 'Recruitment Success',
            'email': 'sirwal@spottanl.com'

        },
        {
            id: '3',
            "name": 'Smriti wadhwa',
            'role': 'client Manager',
            'email': 'smriti@spottanl.com'

        },
        {
            id: '4',
            "name": 'VaniShri',
            'role': 'client Manager',
            'email': 'vani@spottanl.com'

        },
        {
            id: '5',
            "name": 'Visha N',
            'role': 'Senior Manager',
            'email': 'Vishal@spottanl.com'

        },
        {
            id: '6',
            "name": 'vidya Nagesh',
            'role': 'client Manager',
            'email': 'vidya@spottanl.com'

        }

    ]
    const removeManagerHandler =(id) =>{
        const newManagerList= managers.filter((manager) => {
            return manager.id != id;
        })
    }
    return (
        <div className='ui container'>
            <Header />
            <section id='containers'>
                <div >
                    <h2>Customer Success Managers</h2>
                    <button className='ui button blue'>AddCSM</button>

                    <CSMlist managers={managers} getContactId={removeManagerHandler} />
                </div>
            </section>


        </div>
    );
}

export default Arrange;
