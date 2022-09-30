import Head from 'next/head';
import Link from 'next/link';
import Layout from "../components/layout"
import { getSortedList } from '../lib/people';

export async function getStaticProps() {
  const itemData = await getSortedList();
  

  return {
    props: {
      itemData
    }
  }
}

export default function Home ({itemData}) {
  return (
    <Layout home>
      <h1 className='text-center'>Hello Visitors!</h1>
      <p className='text-center'>Below is list of small number of family memebers in my family. There is just me, my wife and our 2 sons.</p>
      <p className='text-center'>Here is the list:</p>
      {itemData ?
      itemData.map(({id, name}) => (
        <Link key={itemData.data.id} href={`people/${id}`}>
          <a>{itemData.data.name}</a>
        </Link>
      ))
    :null}
    </Layout>
  )
}