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
      debugger
      const { data } = await client({
        url: '/api/statistic',
        method: 'get',
      })
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
