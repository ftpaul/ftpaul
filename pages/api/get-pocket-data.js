
export default async (req, res) => {
    try {
      const response = await fetch(`https://getpocket.com/v3/get?access_token=${process.env.NEXT_PUBLIC_POCKET_ACCESS_TOKEN}&consumer_key=${process.env.NEXT_PUBLIC_POCKET_CONSUMER_KEY}&since=1577833200`);
      const data = await response.json();
      console.log(data);
      res.status(200).json(data);
  } catch (error) {
      res.status(500).json({ error: 'Failed to fetch data' });
  }
}