import {
  geStatisticsDone,
  getStatisticsStarting,
  getStatisticsError,
} from '../actions/statistics'
import client from './axios'

export const getStatistics = (mode, order, name="") => {
  return async function(dispatch) {
    try {
      dispatch(getStatisticsStarting())
      debugger
      const { data } = await client({
        url: `/api/statistic?mode=${mode}&order=${order}&name=${name}`,
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
  order: state.statistics.order,
  name: state.statistics.name
})

export const mapDispatchToProps = dispatch => ({
  requestStatistics: (mode, order, name) => {
    dispatch(getStatistics(mode, order, name))
  },
})
