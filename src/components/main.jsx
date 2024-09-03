import Nav from "./nav"
import Content from "./content"
import Resume from "./resume"
import Cert from "./cert"
const main = () => {
  return (
    <div>
        <div>
            <Nav/>
        </div>
        <div>
            <Content/>
        </div>
        <div>
            <Resume/>
        </div>
        <div>
            <Cert/>
        </div>
    </div>
  )
}

export default main