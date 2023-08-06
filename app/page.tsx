
const getData = async () =>  {
  const data = await fetch("https://www.reddit.com/.json")
  return data.json()
}

export default async function IndexPage() {

  const data = await getData()
  const post = data.data.children[0].data.title

    return (
      <h1>{post}</h1>
    )
  }