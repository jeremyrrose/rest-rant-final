const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def title={data.place.name + " : RESTRant"}>
          <main>
            <h1>{data.place.name}</h1>
            <img src={data.place.pic} alt={data.place.name} />
            <h3>{data.place.showEstablished()}</h3>
            <p>Cuisine: {data.place.cuisines}</p>
            <p>
                <h4>Rating</h4>
                Currently unrated
            </p>
            <div className="edit-controls">
                <a href={`/places/${data.place.id}/edit`} className="btn btn-warning"> 
                    Edit
                </a>     
                <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form> 
            </div>
          </main>
        </Def>
    )
}

module.exports = show
