import React from 'react';

const Project = () =>{
    return(
        <div className='project'>
            <div>
                <h1>Projects</h1>
                <h3>In this section, I showed one-page images of the projects I have done below. You can go to the relevant project by clicking on the image to examine the source codes and the project in detail.</h3>
            </div>
            <div className='project-ustdiv'>
                <div className='project-altdiv mt'><a href="https://github.com/Dellydivane/Js-Ile-Menu-Uygulamasi/tree/main/Menu-Uygulamasi"><img src="asian-menu.png" alt="menu" /></a></div>
                <div className='project-altdiv mt'><a href="https://github.com/Dellydivane/Js-Ile-Menu-Uygulamasi/tree/main/Menu-Uygulamasi"><img src="turkMenu.png" alt="" /></a></div>
                <div className='project-altdiv mt'><a href="https://github.com/Dellydivane/JS-ile-Hava-Durumu-Uygulamasi"><img src="havaDurumu.png" alt="" /></a></div>
                <div className='project-altdiv mt'><a href="https://github.com/Dellydivane/Clock-Application-With-Javascript"><img src="Clock.png" alt="" /></a></div>
            </div>
            <br /><br />
        </div>
    )
    
}

export default Project