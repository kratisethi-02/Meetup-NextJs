import { useRouter } from "next/router";
import NewMeetupForm from "./../../components/meetups/NewMeetupForm";
import Head from "next/head";

function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await response.json();
    console.log(data);
    router.replace("/");
  }

  return (<>
    <Head>
        <title>Add your Meetup</title>
        <meta name="description" content="Plan your meetup and explore new opportunities and ideas"/>
    </Head>
  <NewMeetupForm onAddMeetup={addMeetupHandler} />;
  </>)
}

export default NewMeetupPage;
