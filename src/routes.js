import React from 'react';
import {Route, IndexRoute } from 'react-router';
import App from './components/app';

import Posts from './components/posts_index';
import PostsNew from './components/post_new.js'


export default(
<Route path='/' component={App}>
 <IndexRoute  component={Posts} />
 <Route path='posts/new' component={PostsNew}/>
</Route>
)