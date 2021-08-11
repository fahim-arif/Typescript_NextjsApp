import NewsletterBox from "./NewsletterBox";

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-wrap justify-center text-left">
          <NewsletterBox />
        </div>
      </div>
      
    </footer>
  );
}
