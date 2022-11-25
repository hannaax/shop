import { Button, Navbar, Container, Nav  } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import data from './data.js';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './routes/Detail.js'
import Cart from './routes/Cart.js'

export let Context1 = createContext()

function App() {

  let [shoes] = useState(data)
  let [재고] = useState([10, 11, 12])

  let navigate = useNavigate();

// useEffect 시작

  let [count , setCount] = useState(0)
  let [sale , setSale] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{setSale(false)}, 2000) 
    console.log(1)
  }, [])



  return (
    <div className="App">



      {/*
        sale == true
        ? <div className="alert alert-warning">
           2초 이내 구매시 할인
          </div>
        : null 
      }
      {count}
      <button onClick={()=>{setCount(count+1)}}>버튼</button>

      {/* useEffect 끝 */}

       {/* ajax 시작 */}



       <button className='ajax' onClick={()=>{
        axios.get('https://codingapple1.github.io/shop/data2.jsonㄴㅇㅇㄴ')
        .then((result)=>{
          console.log(result.data)
        })
        .catch(()=>{
          console.log('실패')
        })
       }}>ajax요청</button>

       {/* ajax 끝 */}

      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home" className="brand">FOLDER</Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link
        onClick={()=> navigate('/') } 
        className="link">HOME</Nav.Link>  
        <Nav.Link
        onClick={()=> navigate('/detail') }
        className="link">DETAIL</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
 
      <Routes>
        <Route path="/" element={<Main shoes={shoes}/>} />

        <Route path="/detail/:id" element={
        <Context1.Provider value={{ 재고 }}>
          <Detail shoes={shoes}/>
        </Context1.Provider>
        } />

        <Route path="/cart" element={<Cart/>} />

        <Route path="*" element={<div>404 Not Found</div>} />

        <Route path="/about" element={<About/>}>
          <Route path="member" element={<div>멤버</div>} />
          <Route path="location" element={<div>위치정보</div>} />
        </Route>

       </Routes>


    </div>
  );
}

function About(){
  return (
    <div>
      <h4>about페이지임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Main(props) {

  return (
    <>
<div className="main-bg"></div>

<div className="container">
<div className="row">
    {
      props.shoes.map((shoe, i) => {
        return (
          <ShoesList shoes={props.shoes[i]} i={i}/>
        )
      })
    }
  </div>
</div>
</>
  )
}

function ShoesList(props) {
  return(
    <div className="col-md-4">
    <img src={"https://codingapple1.github.io/shop/shoes" + (props.i+1) + ".jpg"} width="80%"/>
    <h4>{props.shoes.title}</h4>
    <p>{props.shoes.price}</p>
  </div>
  )
}

export default App;
