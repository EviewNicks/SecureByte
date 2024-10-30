import ImageModuleCard from "./ImageModulCard";

const ExampleImageModulCard = () => (
  <div className="app-container flex justify-center">
    <ImageModuleCard
      imageSrc="/assets/img/Modul-1.jpg"
      altText="Specific Module Image"
    />
    {/* If no imageSrc is provided, it will default to "/assets/img/add-image.png" */}
    <ImageModuleCard />
  </div>
);

export default ExampleImageModulCard;
