import { MongoClient } from "mongodb";
import MeetupList from "./../components/meetups/MeetupList";
import Head from "next/head";

function HomePage(props) {
  return (
  <>
    <Head>
        <title>React Meetups</title>
        <meta name="description" content="Explore wide variety of meetup happening around the World"/>
    </Head>
  <MeetupList meetups={props.meetups} />;
  </>)
}

// export async function getServerSideProps(context){
//     const req= createLocalRequestContext.req;
//     const res= context.res;

//     //fetch data from api
//     return {
//          props:{
//             meetups:DUMMY_MEETUPS
//          }
//     }
// }
export async function getServerSideProps(context) {
  const client = await MongoClient.connect(
    "mongodb+srv://ksmavask:Tg0JkYumg1VSXWPV@nextjs.3hfy5.mongodb.net/meetups?retryWrites=true&w=majority&appName=nextjs"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      }))
    }
  };
}

export default HomePage;
