import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import ClubDetails from './components/ClubDetails/ClubDetails';
import Clubs from './components/Clubs/Clubs';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';

function App() {

	return (
		<Router>
			<Switch>
				<Route path="/club/:clubId">
					<ClubDetails />
				</Route>
				<Route exact path="/clubs">
					<Header />
					<Clubs />
				</Route>
				<Route exact path="/">
					<Header />
					<Clubs />
				</Route>
				<Route path="*">
					<Header />
					<NotFound />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
