import Post from './Post';
import NewPost from './NewPost';
import classes from './PostsList.module.css';

function PostsList(){
    return (
       <>
        <NewPost/>
            <ul className={classes.Post}> 
                <Post author="Maximilian" body="React.js is awesome!"/> 
                <Post author="Manuel" body="Check out full course"/>
            </ul>
        </> 
    );
}

export default PostsList;