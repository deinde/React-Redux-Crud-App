import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchPost} from '../actions/index';



class PostsShow extends  Component{
	componentWillMount(){
		this.props.fetchPost(this.props.params.id);
		console.log('ComponentWillMount working')

	}
	renderPost(){
		return this.props.post.map((post) => {
			return (
			<li className='list-group-item' key={post.id}>
			 <strong>{post.title}</strong>
			 <div>
			  <p>{post.content}</p>
			 </div>
			</li>
			)
		});
	}
	//below is how you implement a spinner when data is not loaded but component attempts to render
	//before ready!!!
	render(){
		 if(!this.props.post){
		 	return <div>Loading....</div>
		 }
		return(
     <div>
      <div> {this.props.params.id}</div>
      <h3>Post</h3>
      ju
     </div>
	 );
	}
}
//single piece of data as opposed to array (it is actually and object)
function mapToStateProps(state){
	return {post:state.posts.post}
}

/*Note 
this.props.params comes from the url!! not from reducer 
you always have access to params no 
*/

export default connect(mapToStateProps,{fetchPost})(PostsShow);