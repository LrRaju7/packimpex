import MultiLanguage from "./MultiLanguage";

const MultiCountry = ({ countryLanguages }) => {

  return (
    <>
        {countryLanguages &&
            countryLanguages.map((data, index) => (
            <MultiLanguage key={index} languageID={data.id} />
        ))}
    </>
  );
};

export default MultiCountry;


