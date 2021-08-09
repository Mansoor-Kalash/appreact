import React from 'react';
import hornData from "./hornData.json";
import HornedBeast from "./HornedBeast";
class Main extends React.Component{
    render(){
        return(
            <> 
            <h1> First React App</h1>

            {
                hornData.map((item,idx)=>{
                    return(

                    
                    <HornedBeast
                    // key={item.keyword}
                    title={item.title}
                    imgUrl={item.image_url}
                    desciption={item.description}
                    />
                )})
            }
            </>   

        )
    }
}

export default Main;
