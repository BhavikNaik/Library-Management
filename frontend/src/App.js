import React, { useReducer } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Component/HomeComponent';
import Foot from './Component/Foot';
import AddBook from './Component/Addbook';
import UserDetail from './Component/UserDetails';
import Loading from './Component/Loading';
import Books from './Component/Books';
import History from './Component/History';
import Search from './Component/Search';
import RegistrationForm from './Component/Register';
import LoginForm from './Component/Login';
// import Header from './Component/Header';
import { Provider } from './store/Context';
import { initialState, reducer } from './store/userReduce';

function App() {
	const [state,dispatch] = useReducer(reducer,initialState)
return (
	<Provider value={{state,dispatch}}>
	<Router>
	
	<Navbar />
	<Routes>
		<Route exact path='/' element={<Home />} />
		<Route path='/Books' element={<Books />} />
		<Route path='/UserDetails' element={<UserDetail />} />
		<Route path='/Profile' element={<Loading />} />
		<Route path='/Addbook' element={<AddBook />} />
		<Route path='/History' element={<History />} />
		<Route path='/Addbook' element={<Search />} />
		<Route path='/Register' element={<RegistrationForm />} />
		<Route path='/Login' element={<LoginForm />} />
	</Routes>
	
	</Router>
	</Provider>
);
}

export default App;
