import { React, useEffect, useState } from 'react'
import MainScreen from '../../components/MainScreen'
import { Link, useNavigate } from 'react-router-dom'
import { Card, Badge, Accordion } from 'react-bootstrap';
// import notes from "../../data/notes"
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { deleteNoteAction, listNotes } from '../../actions/notesActions';
import Loading from "../../components/Loading"
import ErrorMessage from "../../components/ErrorMessage"

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

export default function MyNotes({ history=[] }) {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const noteList = useSelector(state => state.noteList)
    const {loading,notes,error} = noteList

    // const [notes, setNotes] = useState([])
    const userLogin = useSelector(state=>state.userLogin)
    const {userInfo} = userLogin;
    
    const noteCreate = useSelector((state) => state.noteCreate);
    const { success : successCreate } = noteCreate;

    const noteUpdate = useSelector((state) => state.noteUpdate);
    const { success : successUpdate } = noteUpdate;

    const noteDelete = useSelector(state => state.noteDelete)
    const {loading:loadingDelete,
        error:errorDelete,
        success:successDelete} = noteDelete;

    const deleteHandler = (id) => {
        if (window.confirm("Are you sure")) {
            dispatch(deleteNoteAction(id));
        }
    };

    // const fetchNotes = async () => {
    //     const { data } = await axios.get('/api/notes');
    //     // console.log(data)
    //     setNotes(data)
    // }

    useEffect(() => {
        dispatch(listNotes())
        if(!userInfo){
            history.push("/");
            navigate("/");
        }
        // fetchNotes();
    }, [dispatch,successCreate,userInfo,successUpdate])

    return (
        <MainScreen title={`Welcome Back ${userInfo.name} ...`}>

            <Link to='/createnote'>
                <button style={{ marginLeft: 10, marginBottom: 6 }}>
                    create New Note
                </button>
            </Link>
            {errorDelete && (
                <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
            )}
            {loadingDelete && <Loading/>}
            {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
            {loading && <Loading></Loading>}
            {
                notes?.reverse().map(note => (
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
                                        <br/>
                                        <footer className="blockquote-footer">
                                            Created on{" "}
                                            <a title="Source Title">
                                                {note.createdAt.substring(0,10)}
                                            </a>
                                            {/* <a>Created On - date</a> */}
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
