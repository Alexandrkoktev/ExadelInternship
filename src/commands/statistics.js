import {
  geStatisticsDone,
  getStatisticsStarting,
  getStatisticsError,
} from '../actions/statistics'
import client from './axios'

export const getStatistics = () => {
  return async function(dispatch) {
    try {
      dispatch(getStatisticsStarting())
      const { data } = await client({
        url: '/api/statistic',
        method: 'get',
      })
      console.log(data)
      dispatch(geStatisticsDone(data))
    } catch (error) {
      dispatch(getStatisticsError(error))
    }
  }
}

export const mapStateToProps = state => state.statistics

export const mapDispatchToProps = dispatch => ({
  requestStatistics: () => dispatch(getStatistics()),
})
