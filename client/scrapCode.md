<Route path='/SingleSpot/:spotName' render={() => <SingleSpot activeSpot={this.state.activeSpot} />} />

 <Route exact path ='/' render={() => <Info activeSpot={this.state.activeSpot}/> } />
 <Route exact path ='/' render={() => <Map showSpotInfo={this.showSpotInfo}/> } />

   // componentDidMount () {
  //   return getInfo()
  //     .then ()
  // }

  import { getInfo } from '../api-client'