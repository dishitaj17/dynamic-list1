import React from 'react'
import { Container,Card,CardBody } from 'react-bootstrap'
import Data from './component/Data'
import './App.css'

export default function App() {
  return (
    <div>
    <Container className=''>
      
<nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div class="container-fluid">
  <a class="navbar-brand" href="#">Developers List</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav px-5 mx-auto">
        <li class="nav-item px-5 fw-bold">
          <a class="nav-link text-white"  href="#">Designer</a>
        </li>
        <li class="nav-item px-5 fw-bold">
          <a class="nav-link text-white" href="#">Attention</a>
        </li>
        <li class="nav-item px-5 fw-bold">
          <a class="nav-link text-white" href="#">Category</a>
        </li>
        <li className=' nav-item text-white fs-4'>Total users is :<span className='bi bi-person'></span><span className='badge badge-sm bg-danger'>{Data.length}</span></li>
      </ul>
    </div>
  </div>
</nav>

      <div className='w-75-lg mx-auto bg-white p-5-lg p-2-md mt-4 card1'>
       
        {Data && Data.map((row)=>{
          return(
            <>
          <Card className='app text-white mt-5'>
          <CardBody className='p-4-lg mt-3'>
            {/* <div className='table-responsive-md'>
            <table className='table '>
              <tr className='card2'>
                
                <td className='fs-4-lg  text-light'>Name:{row.name}</td>
                <td className='fs-5-lg'>Age:{row.age}</td>
                <td className='fs-4-lg text-light'>Occupation:{row.occupation}</td>
                <td className='fs-5-lg'>City:{row.city}</td>
                <td className='fs-5-lg'>Contact:{row.phone}</td>
              </tr>
            </table>
            </div> */}

            
      <div class="container">
         <div class="row">
         <div class="col col-lg-2 fs-4-lg  text-light "><span className='text-dark fw-bolder'>Name:</span>{row.name}</div>
         <div class="col col-lg-2 fs-4-lg  text-light"><span className='text-dark fw-bolder'>Age: </span>{row.age}</div>
         <div class="col col-lg-2 fs-4-lg  text-light"><span className='text-dark fw-bolder'>Occupation:</span>{row.occupation}</div>
         <div class="col col-lg-2 fs-4-lg text-light"><span className='text-dark fw-bolder'>City: </span>{row.city}</div>
         <div class="col fs-4-lg text-light"><span className='text-dark fw-bolder'>Contact: </span>{row.phone}</div>
        </div>
      </div>
          </CardBody>
        </Card>
     
            </>
          )
        })}   
      
      
      </div>

    </Container>
      
    </div>
  )
}