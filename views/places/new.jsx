const React = require('react')
const Def = require('../default')

const states = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];

function new_form (data) {
    let message = ""
    if (data.message) {
        message = (
            <h4 className="alert-danger">
                {data.message}
            </h4>
        )
    }
    return (
        <Def title={"Add a Place : RESTRant"}>
          <main>
            <h1>Add a New Place</h1>
            {message}
            <form method="POST" action="/places">
                <div className="form-group">
                    <label htmlFor="name">Place Name</label>
                    <input className="form-control" id="name" name="name" defaultValue={data.prev && data.prev.name || ""} required />
                </div>
                <div className="form-group">
                    <label htmlFor="pic">Place Picture</label>
                    <input className="form-control" id="pic" name="pic" defaultValue={data.prev && data.prev.pic || ""} />
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input className="form-control" id="city" name="city" defaultValue={data.prev && data.prev.city || ""} />
                </div>
                <div className="form-group">
                    <label htmlFor="state">State</label>
                    <select className="form-control" id="state" name="state" defaultValue={data.prev && data.prev.state || ""}>
                        <option value="">Please select a state</option>
                        {states.map(state => <option key={state} value={state}>{state}</option>)}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="cuisines">Cuisines</label>
                    <input className="form-control" id="cuisines" name="cuisines" defaultValue={data.prev && data.prev.cuisines || ""} required />
                </div>
                <div className="form-group">
                    <label htmlFor="founded">Founded Year</label>
                    <input className="form-control" id="founded" name="founded" type="number" defaultValue={data.prev && data.prev.founded || new Date().getFullYear() } />
                </div>
                <input className="btn btn-primary" type="submit" defaultValue="Add Place" />
            </form>
          </main>
        </Def>
    )
}

module.exports = new_form
