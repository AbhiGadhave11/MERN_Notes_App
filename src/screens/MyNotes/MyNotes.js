import { React,useEffect, useState } from 'react'
import MainScreen from '../../components/MainScreen'
import { Link } from 'react-router-dom'
import { Card, Badge, Accordion } from 'react-bootstrap';
// import notes from "../../data/notes"
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import axios from 'axios'

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log('totally custom!'),
    );
    return (
      <button type="button" 
    //   style={{ backgroundColor: 'black' }}
      onClick={decoratedOnClick}>
        
        {children}
      </button>
    );
  }

export default function MyNotes() {

        const [notes,setNotes] = useState([])
        const deleteHandler = (id) => {
            if (window.confirm("Are you sure")) {

            }
        };

        const fetchNotes= async()=>{
            const {data} = await axios.get('/api/notes');
            // console.log(data)
            setNotes(data)
        }
        console.log(notes)

        useEffect(()=>{
            fetchNotes();
        }, [])

        return (
            <MainScreen title='Welcome Back Abhijit Gadhave ...'>
                <Link to='createnote'>
                    <button style={{ marginLeft: 10, marginBottom: 6 }}>
                        create New Note
                    </button>
                </Link>
                {
                    notes.map(note => (
                        <Accordion key={note._id}>
                            <Card style={{ margin: 10 }}>
                                <Card.Header style={{ display: "flex" }}>
                                    <span style={{
                                        color: "black",
                                        textDecoration: "none",
                                        flex: 1,
                                        cursor: "pointer",
                                        alignSelf: "center",
                                        fontSize: 18,
                                    }}>

                                        <Card.Header>
                                            <CustomToggle eventKey="0">
                                                 {note.title}
                                            </CustomToggle>
                                        </Card.Header>
                                        {/* <Accordion.Toggle as={Card.Text} variant="link" eventKey="0">
                                            {note.title}
                                        </Accordion.Toggle> */}

                                    </span>
                                    <div>
                                        <button >
                                            <Link to={`/note/${note._id}`}>Edit</Link></button>
                                        <button variant="danger" className='mx-2'
                                            onClick={() => deleteHandler(note._id)}>Delete</button>
                                    </div>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>

                                        <h4>
                                            <Badge variant="success">
                                                Category - {note.category}
                                            </Badge>
                                        </h4>
                                        <blockquote className="blockquote mb-0">
                                            <p>
                                                {note.content}
                                            </p>
                                            <footer className="blockquote-footer">
                                                <a>Created On - date</a>
                                            </footer>
                                        </blockquote>

                                    </Card.Body>
                                </Accordion.Collapse>


                            </Card>
                        </Accordion>

                    ))}





            </MainScreen>
        )
    }
