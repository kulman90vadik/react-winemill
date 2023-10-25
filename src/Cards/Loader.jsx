import ContentLoader from "react-content-loader";

const Loader = () => {
  return (
    <ContentLoader 
    speed={2}
    width={240}
    height={357}
    viewBox="0 0 240 357"
    backgroundColor="#737373"
    foregroundColor="#ababab"
    // {...props}
  >
    <rect x="1" y="308" rx="5" ry="5" width="200" height="11" /> 
    <rect x="0" y="326" rx="5" ry="5" width="134" height="11" /> 
    <rect x="7" y="506" rx="3" ry="3" width="178" height="6" /> 
    <rect x="119" y="113" rx="0" ry="0" width="1" height="0" /> 
    <rect x="128" y="106" rx="0" ry="0" width="1" height="0" /> 
    <rect x="0" y="0" rx="20" ry="20" width="240" height="300" /> 
    <rect x="398" y="354" rx="0" ry="0" width="10" height="32" /> 
    <rect x="0" y="345" rx="5" ry="5" width="110" height="11" /> 
    <rect x="130" y="345" rx="5" ry="5" width="50" height="11" />
  </ContentLoader>
  );
};

export default Loader;
