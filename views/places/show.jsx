const React = require('react')
const Def = require('../default')

function show (data) {

    let stars = ''
    let comments = (
        <h3 className="inactive">
          No comments yet!
        </h3>
      )
      if (data.place.comments.length) {
        let averageRating = Math.round(data.place.rating)
        for (let i=0; i < averageRating; i++) {
            stars += "⭐"
        }
        comments = data.place.comments.map((c, index) => {
          return (
            <div key={index} className="border">
              <h2 className="rant">{c.rant ? 'Rant!' : 'Rave!'}</h2>
              <h4>{c.content}</h4>
              <h3>
                <stong>- {c.author}</stong>
              </h3>
              <h4>Rating: {c.stars}</h4>
            </div>
          )
        })
      }

    return (
        <Def title={data.place.name + " : RESTRant"}>
          <main>
            <h1>{data.place.name}</h1>
            <img src={data.place.pic} alt={data.place.name} />
            <h3>{data.place.showEstablished()}</h3>
            <p>Cuisine: {data.place.cuisines}</p>
            <p>
                <h4>Rating</h4>
                {stars} / 5
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
            <form method="POST" action={`/places/${data.place.id}/comment`}>
                <h3>Add a comment</h3>
                <div className="form-group">
                    <input className="form-control" id="author" name="author" placeholder="Your name" />
                </div>
                <div className="form-group">
                    <input type="textarea" className="form-control" id="content" name="content" placeholder="Your review..." />
                </div>
                <div className="form-group">
                    <label htmlFor="start">Star rating (1/5)</label>
                    <input type="range" className="form-range" id="stars" name="stars" defaultValue="2.5" min="0" max="5" />
                </div>
                <div className="form-group">
                    <label htmlFor="state">Rant?</label>
                    <input type="checkbox" id="rant" name="rant" />
                </div>
                <input className="btn btn-primary" type="submit" defaultValue="Add Review" />
            </form>
            <div className="comments">
                <h2>Comments</h2>
                    {comments}
            </div>
          </main>
        </Def>
    )
}

module.exports = show

