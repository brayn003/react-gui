import Head from 'next/head';
import Input from '@react-gui/input';

function Home() {
  return (
    <div>
      <Head>React GUI</Head>
      <h1>React GUI</h1>
      <p>Input</p>
      <Input prefix="Beginning of time" suffix="In the End" />
    </div>
  )
}

export default Home;