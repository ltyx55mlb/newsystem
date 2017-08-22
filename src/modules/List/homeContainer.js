import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './duck'
import Home from './components'

const mapStateToProps = state => ({
  lists: state.list.lists
})

const mapDispatchToProps = dispatch => (
  bindActionCreators(actions, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
