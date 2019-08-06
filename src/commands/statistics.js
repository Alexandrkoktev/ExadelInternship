import {
  geStatisticsDone,
  getStatisticsStarting,
  getStatisticsError,
} from '../actions/statistics'
import client from './axios'

export const getStatistics = (mode, order) => {
  return async function(dispatch) {
    try {
      dispatch(getStatisticsStarting())
      const { data } = await client({
        url: `/api/statistic?mode=${mode}&order=${order}`,
       // url: "/api/statistic",
        method: 'get',
      })
      dispatch(geStatisticsDone(data))
    } catch (error) {
      dispatch(getStatisticsError(error))
    }
  }
}


export const mapStateToProps = state => ({
  statistics: state.statistics.statistics,
  mode: state.statistics.mode,
  order: state.statistics.order
})

export const mapDispatchToProps = dispatch => ({
  requestStatistics: (mode,order) => {dispatch(getStatistics(mode,order))
    console.log("mode = " + mode)},

})
