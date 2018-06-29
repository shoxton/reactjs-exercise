import React from 'react';

class Post extends React.Component {
    
    render() {
        let item = this.props.item;
        return(
            <div className="Post">
                <img src={item.picture.large} className="img-fluid"/>
                <p style={{'text-transform':'capitalize'}}>{item.name.first + ', ' + item.dob.age}</p>
                <p>{item.cell}</p>
                <small className="text-white">{item.email}</small>
                <span style={{'text-transform':'capitalize'}} className="badge badge-light">{item.location.city + ', ' + item.location.state}</span>
                
            </div>
        );
    }

}

export default Post;