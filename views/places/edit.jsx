const React = require('react')
const Def = require('../default')

const states = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];

function edit_form (data) {
    return (
        <Def title={"Editing " + data.place.name + " : RESTRant"}>
          <main>
            <h1>Add a New Place</h1>
            <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
                <div className="form-group">
                    <label htmlFor="name">Place Name</label>
                    <input 
                        className="form-control" 
                        id="name" 
                        name="name" 
                        required
                        defaultValue={data.place.name} 
                        />
                </div>
                <div className="form-group">
                    <label htmlFor="pic">Place Picture</label>
                    <input 
                        className="form-control" 
                        id="pic" 
                        name="pic"
                        defaultValue={data.place.pic} 
                        />
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input 
                        className="form-control" 
                        id="city" 
                        name="city"
                        defaultValue={data.place.city}
                         />
                </div>
                <div className="form-group">
                    <label htmlFor="state">State</label>
                    <select 
                        className="form-control" 
                        id="state" 
                        name="state" 
                        default=""
                        defaultValue={data.place.state}
                        >
                        <option value="">Please select a state</option>
                        {states.map(state => <option key={state} value={state}>{state}</option>)}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="cuisines">Cuisines</label>
                    <input 
                        className="form-control" 
                        id="cuisines" 
                        name="cuisines" 
                        required 
                        defaultValue={data.place.cuisines}
                    />
                </div>
                <div className="edit-controls">
                    <input className="btn btn-primary" type="submit" value="Update Place" />
                </div>
            </form>
          </main>
        </Def>
    )
}

module.exports = edit_form
