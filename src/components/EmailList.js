//import Image from './Image'

const EmailList = () => {
    return (
        <div className='EmailForm'>
            <form  style={{alignItems:'center', alignContent:'center'}}>
                <label >Enter Your Email List for Updates</label>
                <input type='text' placeholder='Enter Email' style={{width:'350px'}}/>
                <button className='btn' >Submit</button>
            </form>
           
            <p>
            <br/>
                Hours:<br/>
                Monday-Thursday: 9AM-6PM<br/>
                Friday-Saturday: 10AM-5PM<br/>
                Sunday: 12PM-5PM<br/>
                <br/>
                Store Location: 80 St Marks Pl, Brooklyn, NY 11217
            </p><br/>
            <div className='logoBox'>
        
            </div>
            
        </div>
    )
}

export default EmailList
