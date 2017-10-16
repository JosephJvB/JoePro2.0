<Route path='/SingleSpot/:spotName' render={() => <SingleSpot activeSpot={this.state.activeSpot} />} />

 <Route exact path ='/' render={() => <Info activeSpot={this.state.activeSpot}/> } />
 <Route exact path ='/' render={() => <Map showSpotInfo={this.showSpotInfo}/> } />

   // componentDidMount () {
  //   return getInfo()
  //     .then ()
  // }

  import { getInfo } from '../api-client'

  Im going to try and wrap map/info in one component, then swap that out for single spot...Will it work? tune in next week.

  I have a weird thing where there is some end }/> showing up on my page and I hate it

   
   // import {match} from 'react-router-dom'

// const SingleSpot = ({match}) => {
   
   
    {/* you are at {match.params.spotName} */}