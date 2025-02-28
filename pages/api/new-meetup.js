//api/new-meetup
import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    ////////
    const client = await MongoClient.connect(
      "mongodb+srv://ksmavask:Tg0JkYumg1VSXWPV@nextjs.3hfy5.mongodb.net/meetups?retryWrites=true&w=majority&appName=nextjs"
    );

    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
