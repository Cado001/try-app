import { useState } from "react";

function SingleBeerComponent(props) {
    console.log('prop ->', props)
    return ( 
        <div className="beer-item">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default function Home () {
    const [beerItems, setBeerItems] = useState ()


    const handleBtnClick = () => {
        fetch('https://api.sampleapis.com/beers/stouts')
        .then(res => res.json())
        .then(data => setBeerItems(data))
        .catch(x => console.error(x))
    }

    return (
        <section className="beer-items">
            {!beerItems
                
                        
                     ? <button onClick={() => handleBtnClick()}>Menu List</button>
                    
                

                    : beerItems.map(singleItem => {
                        return (
                            <SingleBeerComponent
                                title={singleItem.title}
                                description={singleItem.description} />
                        )
                    })
            }


        </section>
    )
}
