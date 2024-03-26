import Card from "@/components/card";
import cardData from "@/data/profile.json";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {cardData.map((data, index) => (
        <Card
          key={index}
          logo={data.imageUrl}
          title={data.title}
          company={data.company}
          location={data.location}
          description={data.description}
          tags={data.relatedTopics.map((tag, tagIndex) => {
            let tagProps = {
              color: "#000000",
              bgColor: "#ffffff",
              border: false, 
            };
            if (tagIndex === 0) {
              tagProps = {
                color: "#56CDAD",
                bgColor: "#e0f5ef",
                border: false,
              };
            } else if (tagIndex === 1) {
              tagProps = { color: "#FFB836", bgColor: "#ffffff", border: true };
            } else if (tagIndex === 2) {
              tagProps = { color: "#4640DE", bgColor: "#ffffff", border: true };
            }
            return { text: tag, ...tagProps };
          })}
        />
      ))}
    </main>
  );
}
