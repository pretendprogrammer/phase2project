import { Component } from "react"
import CardContainer from './CardContainer'
import ExpandedInfo from "./ExpandedInfo"
import NavBar from "./NavBar"
// import NewProgram from "./NewProgram"
// import NewComparison from "./NewComparison"


// const API = 'http://localhost:3000/'

class CompPage extends Component {

    // state = {
    //     user: 'no user',
    //     programsList: [],
    //     selectedPrograms: [],
    //     filter: ""
    // }

    render() {
        return (
            <div>
                <NavBar setURLPath={this.props.setURLPath} setFilter={this.props.setFilter} setUser={this.props.setUser} user={this.props.user} filter={this.props.filter}/>
                <ExpandedInfo selectedPrograms={this.props.selectedPrograms}/>
                <CardContainer addToSelectedPrograms={this.props.addToSelectedPrograms} programsList={this.props.programsList}/>
            </div>
        )
    }
}


{/* <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router> */}



export default CompPage