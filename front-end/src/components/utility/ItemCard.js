import React from 'react'
import {Link} from 'react-router-dom';

function ItemCard(props){
    // console.log(props.item);
    const image = props.item.picture
    return(
        <div className="col s3 item-card">
            <Link to={`/items/${props.item.id}`}>
            <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={image} alt="" />
            </div>
            <div className="card-content">
            <span className="card-title activator teal-text text-darken-3">{props.item.name}<i className="material-icons right">more_vert</i></span>
            {/* <p><a href={props.item.url}>eBuy homepage</a></p> */}
            </div>
        </div>
        </Link>        
    </div>
    )
}

export default ItemCard;