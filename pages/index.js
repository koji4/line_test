import Head from 'next/head';

export default function Home() {
  const lineLoginUrl = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${process.env.LINE_CLIENT_ID}&redirect_uri=${process.env.LINE_REDIRECT_URI}&state=random_state&scope=profile`;

  return (
    <div>
      <Head>
        <title>LINE Login Example</title>
        <meta name="description" content="LINE Login Example with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Hello</h1>
        <input type="text" id="textInput" placeholder="Enter text" />
        <button onClick={() => {
          const input = document.getElementById('textInput').value;
          document.getElementById('displayText').innerText = input;
        }}>Submit</button>
        <p id="displayText" style={{ color: 'red' }}></p>
        <a href={lineLoginUrl}>Login with LINE</a>
      </main>
    </div>
  );
}
