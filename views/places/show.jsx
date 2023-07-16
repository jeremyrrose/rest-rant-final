const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{data.place.name}</h1>
            <h4>{data.place.city}, {data.place.state}</h4>
            <img src={data.place.pic} alt={data.place.name} />
            <p>Serving: {data.place.cuisines}</p>
            <p>
                <h4>Rating</h4>
                Currently unrated
            </p>
            <div className="edit-controls">
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                Edit
            </a>     
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
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
