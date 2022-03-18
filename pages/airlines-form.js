import Head from "next/head"
import Layout from "../components/layout"
import Form from "../components/form"
import AirlinesTable from "../components/airlines_table"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import React, {useEffect} from "react"
import Link from "next/link"

const displayEditForm = (e) =>  {
  console.log('Free pizza!');
  console.log(e);
  // React.createRef().current.classList.add('blue')
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/airlines`)
  const allAirlinesData = await res.json()

  // Pass allAirlinesData to the page via props
  return { props: { allAirlinesData } }
}

export default function airlinesForm({ allAirlinesData }) {
  return (
    <Layout>
      <Head>
        <title>Formulaire compagnies aériennes</title>
      </Head>
      <div className="centering mb-3">
        <h1>Les compagnies aériennes</h1>
      </div>
      <Form>
        <form method="post" action="/api/create-airlines">
          <h4>Créer une compagnie</h4>
          <label>Nom</label>
          <input type="text" name="name"></input>
          <label>IATA</label>
          <input type="text" name="iata"></input>
          <div className="d-flex justify-space-between align-center">
            <label>Européenne</label>
            <input type="checkbox" name="european"></input>
          </div>
          <input className="submit-button" type="submit" value="et hop !"></input>
        </form>
      </Form>
      <section>
        <AirlinesTable>
          {allAirlinesData.map(({name, iata, european}) => (
            <div className="row" key={iata}>
              <div className="col-sm">
                {name}
              </div>
              <div className="col-sm">
                {iata}
              </div>
              <div className="col-sm">
                {european}
              </div>
              <div className="col-sm">
                <Link href={`/airlines/${iata}`}>
                  <a>
                    <FontAwesomeIcon icon={faPencil} />
                  </a>
                </Link>
              </div>
              <div className="col-sm">
                <a href={`/api/delete-airline?iata=${iata}`}>
                  <FontAwesomeIcon icon={faTrash} />
                </a>
              </div>
            </div>
          ))}
        </AirlinesTable>
      </section>
    </Layout>
  )
}