import TitleBox from "./titleBox";

const ExampleTittleBox = () => (
  <div className="app-containe">
    <TitleBox
      text="Custom Title"
      textColor="text-primary"
      bgColor="bg-blue-500"
    />
    {/* Default values will be used if props are not provided */}
    <TitleBox />
  </div>
);

export default ExampleTittleBox;
