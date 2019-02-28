import React from 'react';
export default function GameCard (props){
    return(
        <div className="col s3 game-card">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <embed className="activator" src="/images/pithos_recording.mov" pluginSpace="https://support.apple.com/quicktime" controller="true" loop="true" autoplay="true" alt=""></embed>
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
                    <p><a href="/home">This is a link to a movie</a></p>
                </div>
                    <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                </div>
            </div>        
        </div>    
      )
}