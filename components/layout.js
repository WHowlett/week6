import Head from 'next/head';
import Link from 'next/Link';

export default function Layout({children, home}) {
    return (
        <div>
            <Head>
                <title>Name Lists</title>
                <meta name="viewpoint" content="width=device-width, initial-scale=1" />
                </Head>
                <div>
                    <main>{children}</main>
                </div>
                {!home && (
                    <div className='text-center'>
                        <br></br>
                        <Link href="/">
                            <a className="btn btn-outline-info">Click here to return to main page</a>
                        </Link>
                        </div>
                )}
            <br></br>
            <footer className='text-center'>
                Created by Wayne Howlett for assignement week 6 at SRJC 
            </footer>
        </div>
    )
};