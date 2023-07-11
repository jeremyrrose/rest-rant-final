const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                <img src="/images/HoganAndre.webp" alt="Hulk and Andre" />
              </div>
          </main>
      </Def>
    )
  }  

module.exports = home
