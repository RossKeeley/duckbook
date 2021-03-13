import React from 'react';
import '../stylesheets/css/post.css';
import Avatar from '@material-ui/core/Avatar';

function Post() {
 return (
   <div className="post">
     <div className="post__header">
       <Avatar
         className="post__avatar"
         alt="Rosskeeley"
         src="/static/images/avatar/1.jpg"
       />
       <h3>Username</h3>
     </div>
     {/* header - avatar + username */}

     {/* image */}
     <img className="post__image" src="https://www.dailybreeze.com/wp-content/uploads/migration/2014/201408/NEWS_140819552_AR_0_GOLPJJIEGDOP.jpg" alt="" />
     {/* username + caption */}
     <h4 className="post__text"><strong>DuckyMcDuckface</strong> I'M SO BIG!! It's not even funny. I could crush you all. Worship me tiny peasants</h4>
     <input className="post__comment" type="text" name="" value="" placeholder="Quack a comment" />
   </div>
 )
}

export default Post
