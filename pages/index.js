
import Head from 'next/head';
import clientPromise from '../lib/mongodb'

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </div>
    )
}

// serverless function = `getServerSideProps` will run serverside on every render

export async function getServerSideProps(context) {
    try {
        await clientPromise
        // `await clientPromise` will use the default databse passed in the MONGODB_URI
        // However you can use another database(e.g. myDatabase) by replacing the `await ClientPromise` with the following code:
        //
        // `const client = await clientPromise`
        // `const db = client.db("myDatabase")`
        //
        // Then you can execute queries against your database like so:
        // db.find({}) or any of the MongoDB Node Driver commands

        return {
            props: { isConnected: true },
        }
    } catch (error) {
        console.error(error);
        return {
            props: { isConnected: false }
        }
    }
}