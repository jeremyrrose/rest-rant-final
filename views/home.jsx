const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>RESTrant</h1>
              <h4>Sizzling hot takes!</h4>
              <div>
                <img src="/images/HoganAndre.webp" alt="Hulk and Andre" />
              </div>
          </main>
      </Def>
    )
  }  

module.exports = home
