// // manage category state and on change update dependent dropdown
//
// var React = require('react');
// var Indices = require('../components/Indices')
// var Selections = require('./Selections');
//
// var SelectionsContainer = React.createClass ({
//   getInitialState: function () {
//     return {indices: Indices, categories = Object.keys(Indices).map((index) => index)});
//     return state}
//   })
//   handleChangeCategory: function(evt) {
//     this.setState({classes: Object.keys(state.indices[evt.target.value])});
//   },
//   render: function() {
//     return(
//       <Selections
//       categories=this.state.categories
//       classes=this.state.classes
//       onChangeCategory={this.handleChangeCategory}
//       />
//     )
//   }
// });
