import React from 'react';

class Post extends React.Component {
    
    render() {
        let item = this.props.item;
        return(
            <div className="col-md-3">
                <div className="Post">
                    <img src={item.picture.large} className="img-fluid"/>
                    <p style={{'textTransform':'capitalize'}}>{item.name.first + ', ' + item.dob.age}</p>
                    <p>{item.cell}</p>
                    <small className="text-white">{item.email}</small>
                    <span style={{'textTransform':'capitalize'}} className="badge badge-light">{item.location.city + ', ' + item.location.state}</span>
                    
                </div>
            </div>
        );
    }

}

export default Post;