import React,{Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import {createPost} from '../actions/index';
import {Link} from 'react-router';


class PostsNew extends Component{
	/*Notes*
	we need to navigate away from form after submision. How
	we will accomplish this is by using 'contextTypes' We define
	the contextTypes object and this is very similar to Proptypes, but we do not 
	have to explicity do exp data={this.props.router} instead we passivly give the 
	component access to a parent objects functionality 'when it needs it' 
  contextTypes is how we are going to give PostNew access to <Router> object method.
  What happens is when it is called the contexTypes object will search PostNew's parent
  components till it finds 'router' which is equal to Router object router=Router get it?
  But only when it needs it!!!
	*/
	contextTypes = {
		router:PropTypes.object
	}
	render(){
		// const handleSubmit = this.props.handleSubmit;
		// const title = this.props.fields.title
		// const categories = this.props.fields.catagories
		// const content = this.props.fields.content
		// below is es6 equivalent to to above. It is pulling the 'handleSubmit'
		// 'catagories' 'content' helper from reduxForm config 
		const {fields:{title,categories,content} ,handleSubmit} = this.props;
	
		return(
       <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Create A New Post</h3>
        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
         <label>Title</label>
         <input type='text' className='form-control' {...title}/>
          <div>
           {title.touched ? title.error: ''}
          </div>
        </div>
         <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
         <label>Catagories</label>
         <input type='text' className='form-control' {...categories}/>
         <div>
           {title.touched ? categories.error: ''}
          </div> 
        </div> 
         <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
         <label>Content</label>
         <textarea type='text' className='form-control' {...content}/>
         <div>
           {title.touched ? content.error: ''}
          </div> 
        </div> 
        <button type='submit' className='btn btn-primary'>Submit</button>
        <Link to='/' className='btn btn-danger'>Cancel</Link>
     
       </form>
    );
	}
}
//Form validation is done like this with reduxForm
function validate(value){
	const errors={};
	if(!value.title){
		errors.title ='Enter Title'
	}
	if(!value.categories){
		errors.categories ='Enter category'
	}
	if(!value.content){
		errors.content ='Enter Content'
	}		
	return errors;
}


//below is configuring the form for redux form
//you are naming the form 'form:'PostsNewForm' and configuring
//the fields 'fields:['title','catagories','content']' you would like it to watch over and handle
//really whats going on behind the scenes is this redux form is recording user input
//changes to global application state object like this!!!

// state ==={
//  form:{
// 		PostsNewForm:{
// 			title:'blaaaa',
// 			catagories:'whatever',
// 			content:'..yadadaa'
// 		}
// 	}
// }
/* Another thing to understand
just like connect from react-redux, reduxForm takes parameters as well
connect: 1st argument is mapStateToProps, 2nd mapDispatchToProps
reactForm: 1st is config object, 2nd is mapStateToProps, 3rd is mapDispatchToProps
REMEMBER!!!!!! YOU CAN USE SHORT CUT INSTEAD OF mapDispatchToProps see ex post_index.js
just use the action caller short hand {creatPost} instead.
Now, since the form does not use state you can just pass null for second argument
*/

export default reduxForm({
	form:'PostsNewForm',
	fields:['title','categories','content'],
	validate
},null,{createPost})(PostsNew);










