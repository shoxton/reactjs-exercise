import React from 'react';

import Post from '../components/Post';

class PostList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
        
    }

    componentDidMount() {
        fetch('https://randomuser.me/api/?results=20')
            .then(results => {
                return results.json();
            })
            .then(data => {
                console.log(data)
                let posts = data.results.map((post,i) => {
                    return(
                        <div className="col-md-3">
                            <Post key={"post-"+i} item={post} />
                        </div>
                    );
                })
                this.setState({posts: posts});
            });
    }
    
    render() {
        return (
            <div>
                <div className="header container-fluid">
                    <h1>Users</h1>
                </div>
                <div className="container">
                    <div className="row">
                        {this.state.posts}
                    </div>
                </div>
            </div>
        );
    }
}

export default PostList;
