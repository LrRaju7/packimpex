import { useState, useEffect } from "react";
import { getLanguageData } from "../../api/getData";
import { TAXONOMY_TERM_LANGUAGE } from "../../constants/taxonomyTerms";

const MultiLanguage = ({ languageID }) => {
  const [loading, setLoading] = useState(true);
  const [languageName, setLanguageName] = useState(null);
  const [languageUrl, setLanguageUrl] = useState(null);

  useEffect(() => {
    getLanguageData(setLanguageName, setLanguageUrl, setLoading, languageID, TAXONOMY_TERM_LANGUAGE);
    // eslint-disable-next-line
  }, []);
  return (
    <>
        {loading ? null : (
            <>
                <li>
                    <a href={languageUrl}>{languageName}</a>
                </li>
            </>
        )}
    </>
  );
};

export default MultiLanguage;


