import React from 'react'
import Layout from '../component/Layout/Layout';
import { Link } from 'react-router-dom';

const Page_Not_Found = () => {
  return (
    <Layout title={"Page Not Found"}>
        <div className='pnf'>
         <h1 className='pnf-title'>404</h1>
         <h2 className='pnf-heading'>Oops ! Page Not Found</h2>
         <Link to="/" className="pnf-btn">Go Back</Link>
        </div>
    </Layout>
  )
}

export default Page_Not_Found;