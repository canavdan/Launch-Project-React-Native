import {
    FETCHING_LAUNCHES_FAILURE,
    FETCHING_LAUNCHES_REQUEST,
    FETCHING_LAUNCHES_SUCCESS,
    FAV_LAUNCHES,
    GET_FAV_STATUS
  } from './types'
  import firebaseService from '../components/enviroments/firebase'
  
  export const fetchLaunchesRequest = () => ({
    type: FETCHING_LAUNCHES_REQUEST
  })
  export const fetchLaunchesSuccess = json => ({
    type: FETCHING_LAUNCHES_SUCCESS,
    payload: json
  })
  export const fetchLaunchesFailure = error => ({
    type: FETCHING_LAUNCHES_FAILURE,
    payload: error
  })
  export const favLaunches = () => ({
    type: FAV_LAUNCHES,
  })
  export const getFavStatus = (fav) => ({
    type: GET_FAV_STATUS,
    payload: fav
  })
  
  export const favLaunch = (launch, uid, isFav) => async dispatch => {
    dispatch(favLaunches())
    firebaseService.database().ref('favs').push({
      launchId: launch.id,
      userId: uid,
      isFav: !isFav
    })
  }

  export const favStatus = () => (dispatch) => {
    firebaseService.database().ref('favs').on('value', (snapshot) => { 
        const favs = snapshot.val()     
          dispatch(getFavStatus(favs))
      }, (error) => { console.log(error) })
    }

  export const fetchLaunches = () => async dispatch => {
      dispatch(fetchLaunchesRequest())
      const dateNow = new Date()
      dateNow.setMonth(dateNow.getMonth() - 3)
      const threeMonthsAgo = dateNow.toISOString().slice(0, 10)
      dateNow.setMonth(dateNow.getMonth() + 9)
      const sixMonthsAfter = dateNow.toISOString().slice(0, 10)
      
      try {       
        const apiUrl = `https://launchlibrary.net/1.4/launch/${threeMonthsAgo}?windowend=${sixMonthsAfter}&fields=name,id,windowstart,rocket,missions` 
        const response = await fetch(apiUrl)
        const json = await response.json()
       dispatch(fetchLaunchesSuccess(json.launches.map(processLaunches)))
      } catch (error) {
        dispatch(fetchLaunchesFailure(error))
      }
    }
  

    const processLaunches = launch => ({ 
      name: launch.name,    
      id: launch.id,
      windowsStart: launch.windowstart,
      status: launch.missions[0].description,
      missionsName: launch.missions[0].name,
      typeName: launch.missions[0].typeName,
      rocketId: launch.rocket.id,
      imageUrl: getMinPicture(launch),
      images: launch.rocket.imageSizes.sort((a, b) => a - b)[0]
    })                         
    // eslint-disable-next-line prefer-template
    const getMinPicture = launch => launch.rocket.imageURL.split('_')[0] + '_' + launch.rocket.imageSizes.sort((a, b) => a - b)[0] + '.' + launch.rocket.imageURL.split('_')[1].split('.')[1]
