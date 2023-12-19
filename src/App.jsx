
function App() {
  const users = ["gopika", "radhakrishnan", "maheswari", "ramraj", "lakshmanraj", "sasi praba", "sasi priya", "ratharukmani"]
  return <> {
    users.map((ele)=>{
      return <> 
      <h1>Welcome to {ele}</h1>
      </>
    })
  }
  </>
}

export default App
