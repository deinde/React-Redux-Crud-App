
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPosts} from '../actions/index';

class PostsIndex extends Component{
	//react will automatically call componentWillMount function whenever component
	//is about to be rendered to dom for the first time only first time thats it!! lifecycle method!!
	componentWillMount(){
		this.props.fetchPosts();
		console.log('This would be a good time to call an action creater to fetch post');
	}
render(){
	return(
         <div>List of Blog Posts</div>
    )
  }

}
// function mapDispatchToProps(dispatch){
// 	return bindActionCreators({fetchPosts},dispatch);
// }

// export default connect(null,mapDispatchToProps)(PostsIndex);
//below is equivalent to above. No need for mapDispatchToProps New shortcut
//export default connect(null, { fetchPosts:fetchPosts } )(PostsIndex);
//or super es6 shortcut
export default connect(null, { fetchPosts } )(PostsIndex);