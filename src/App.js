import './App.css';
import { useState } from 'react';
import Modal from './components/Modal';
import Form from './components/Form';

function App() {
    const [showModal, setShowModal] = useState(false)

    const [data, setData]=useState([]) 

    const newData = (person)=>{
      setData((old)=>{
        return[...old, person]
      })
      setShowModal(false)
    }

  

  
  return (
   <>
   {showModal&&<Modal>
      <Form newData={newData} ></Form>
    </Modal>}
   <button onClick={()=>setShowModal(true)}>Show modal</button>

        {data.map((item)=>{
           return(
            <div key={item.id}>
            <h1>{item.person}</h1>
            <p>{item.date}</p>
          </div>
           )
        })}
   </>
  );
}

export default App;
