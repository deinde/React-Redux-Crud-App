
import React,{Component} from 'react';
import {connect} from 'react-redux';
//below using new es6 style shortcut, you no longer need  {bindActionCreators}
// import {bindActionCreators} from 'redux';
import {fetchPosts} from '../actions/index';
import {Link} from 'react-router';


class PostsIndex extends Component{
	//react will automatically call componentWillMount function whenever component
	//is about to be rendered to dom for the first time only first time thats it!! lifecycle method!!
	componentWillMount(){
		this.props.fetchPosts();
		console.log('This would be a good time to call an action creater to fetch post');
	}
	renderPosts(){
		return this.props.posts.map((post) => {
     return(
      <li className='list-group-item' key={post.id}>
       <Link to={'posts/'+post.id}>
       <span className='pull-xs-right'> {post.categories}</span>
       <strong>{post.title}</strong>
       </Link>
      </li>
      )
		});
	}
render(){
	return(
         <div>
          <div className='text-xs-right'>
           <Link to='posts/new' className='btn btn-primary'>
           Add a Post
           </Link>
          </div>
          <h3>Posts</h3>
          <ul className='list-group'>
           {this.renderPosts()}
          </ul>
         </div>
    )
  }

}

function mapStateToProps(state){
	return {posts:state.posts.all}
}
// function mapDispatchToProps(dispatch){
// 	return bindActionCreators({fetchPosts},dispatch);
// }

// export default connect(null,mapDispatchToProps)(PostsIndex);
//below is equivalent to above. No need for mapDispatchToProps or bindActionCreators!!  New shortcut
//export default connect(null, { fetchPosts:fetchPosts } )(PostsIndex);
//or super es6 shortcut
export default connect(mapStateToProps, { fetchPosts } )(PostsIndex);