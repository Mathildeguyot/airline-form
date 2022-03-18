import Layout from "../../components/layout";
import { getAirlineData, getAllAirlinesIds } from "../../lib/airlines";
import Form from "../../components/form";

export async function getStaticProps({ params }) {
  const airlineData = await getAirlineData(params.id)
  console.log(airlineData)
  return {
    props: {
      airlineData
    }
  }
}

export default function editForm({airlineData}) {
  return (
    <Layout>
      <div className="centering">
        <h1>Modifier la compagnie</h1>
      </div>
        <Form id={airlineData.iata}>
          <form method="post" action="/api/edit-airline">
            <label>Nom</label>
            <input type="text" name="name" placeholder={airlineData.name}></input>
            <label>IATA</label>
            <input type="text" name="iata" placeholder={airlineData.iata}></input>
            <label>Européenne</label>
            <input type="checkbox" name="european"></input>
            <input type="hidden" name="currentIata" value={airlineData.iata}></input>
            <input className="submit-button" type="submit"></input>
          </form>
        </Form>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = await getAllAirlinesIds()
  return {
    paths,
    fallback: false
  }
}