import Card from './components/card';

function App() {


  return (
    <h1 className="h-screen w-screen flex items-center justify-center bg-gray-700">
      <Card
        logo="/logo.svg"
        title="Social Media Assistant"
        company="Young Men Christians Association"
        location="Addis Ababa, Ethiopia"
        description="As a Social Media Assistant, you will work closely with the social media manager or marketing team to execute social media strategies and campaigns. You will be responsible for assisting in the creation and scheduling of engaging content, monitoring social media channels, and interacting with followers."
        tags={[
          { text: "In person", color: "#56CDAD", bgColor: "#e0f5ef" },
          { text: "Education", color: "#FFB836", border: true },
          { text: "IT", color: "#4640DE", border: true },
        ]}
      />
    </h1>

  );
}

export default App;
