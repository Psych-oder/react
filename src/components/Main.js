
import { useEffect, useState } from 'react';
import ContactList from './ContactList.jsx';
import '../App.css'
import Form from './Form.js';
import { AiFillDelete, AiFillEdit, AiFillEye } from 'react-icons/ai';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import {AiFillDelete} from  'react-icons/ai'
function Main() {
    const [data, setdata] = useState([])
    const [add, setadd] = useState(false);
    const [edit, setedit] = useState("");
    const [show, setshow] = useState("");

    let refresh = () => {
        let data = JSON.parse(localStorage.getItem("cruddata"));
        setdata(data)
    }


    const deletedata = (userId) => {
        let copy = data;
        copy.splice(userId, 1);
        localStorage.setItem("cruddata", JSON.stringify([...copy]))
        console.log(copy);
        refresh();
    }

    let editdata = (index) => {
        let find = data.find((elem) => {
            return index == elem;
        });
        setedit(find);
        setadd(true)
    }

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("cruddata"));
        setdata(data);
        console.log(data);
    }, [add]);

    let showdata = (index) => {

        setshow(data[index]);
        console.log(data[index])
    }

    return (
        <>
            {
                add ? <Form add={setadd} edit={edit} setedit={setedit} /> : <div className="app">
                    <div className='main radius ' >
                        <div className='contacts radius'>
                            <div className='inner-contact'>
                                <h1>All Contacts</h1>
                                {/* <input type="text"  />  */}
                                <span onClick={() => { setadd(true) }}>Icon</span>
                            </div>
                        </div>
                        <div className='listdetail'>
                            {data ? data.map((value, index) => {
                                return (<div className='details'>
                                    <div className="index"> {index + 1}</div>
                                    <div className="icon"> usericon</div>
                                    <div className="index"> {value.name}</div>
                                    <div className="index"> {value.number}</div>
                                    <div className="index" onClick={() => { showdata(index) }}><AiFillEye /></div>
                                    <div className="index" onClick={() => { deletedata(index) }}><AiFillDelete /></div>
                                    <div className="index" onClick={() => { editdata(index) }}><AiFillEdit /></div>

                                </div>)
                            })
                                : <h1> "loading"</h1>}
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            }

            {show ?

                <Card style={{ width: '18rem' }}> 
                 <div onClick={()=>{setshow("")}}> <AiFillDelete /></div>
                    <Card.Body>
                    <Card.Title> {show.name}</Card.Title>
                        <Card.Title>{show.email}</Card.Title>
                        <Card.Text>
                            {show.number}
                        </Card.Text>

                    </Card.Body>
                </Card>
                : ""


            } </>
    )
}
export default Main;
