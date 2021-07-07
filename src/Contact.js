import React from 'react'
import Header from './components/Header'

const Contact = () => {
    return (
        <div>
            <Header className='header' />
            <h1 className='shopName'>Riptide Skate Shop</h1>

            <div className='Contact-form'> 
            <p>
                <form>
                    <label>Send Us A Message If You Have Any Questions!! </label>
                    <br/>
                    <input type='text'  placeholder='First Name' style={{width:'250px', height:'20px'}}></input>
                    <input type='text'  placeholder='Last Name' style={{width:'250px', height:'20px'}}></input>
                    <br/>
                    <input type='text'  placeholder='Email' style={{width:'250px', height:'20px'}}></input>
                    <input type='text'  placeholder='Phone Number' style={{width:'250px', height:'20px'}}></input>
                    <br/>
                    <input type='text'  placeholder='Input Message Here, Include Order # if Applicable' style={{width:'509px', height:'140px'}}></input>
                    <br/>
                    <button className='btn' onClick={alert}>Submit</button>

                </form>
                </p>
            </div>
        </div>
    )
}

export default Contact
