export const GET_STATISTICS = 'GET_STATISTICS'
export const GET_STATISTICS_SUCCESS = 'GET_STATISTICS_SUCCESS'
export const GET_STATISTICS_ERROR = 'GET_STATISTICS_ERROR'

export function getStatisticsStarting() {
  return {
    type: GET_STATISTICS,
  }
}

export function geStatisticsDone(statistics) {
  return {
    type: GET_STATISTICS_SUCCESS,
    payload: statistics,
  }
}

export function getStatisticsError(error) {
  return {
    type: GET_STATISTICS_ERROR,
    error,
  }
}
