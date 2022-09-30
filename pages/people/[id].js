import { getNamesIds, getPeopleData } from "../../lib/people";
import Layout from "../../components/layout";

export async function getStaticPaths() {
    const paths = await getNamesIds();
    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({params}) {
    const itemData = await getPeopleData(params.id);
    return {
        props: {
            itemData
        }
    };
}

export default function Entry ({itemData}) {
    return (
        <Layout>
            <h2 class="text-center text-info">Personal Details:</h2>
        <article className="card col-6 text-center">
            <div className="card-body">
                <h5>{itemData.data.name}</h5>
                <p>{itemData.data.dob}</p>
                <p>{itemData.data.birth}</p>
                {itemData.data.country ? 
            <p>{itemData.data.country}</p>  
            :null  
            }
            </div>
        </article>
        </Layout>
    )
}