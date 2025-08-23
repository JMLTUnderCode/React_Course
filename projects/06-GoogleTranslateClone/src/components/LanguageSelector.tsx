import React from 'react';
import { Form } from 'react-bootstrap';
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from '../constants';
import type { FromLanguage, Language } from '../types.d';
import { SectionType } from '../types.d';

type LanguageSelectorProps = 
  | {type: SectionType.FROM, value: FromLanguage, onChange: (lang: FromLanguage) => void;}
  | {type: SectionType.TO, value: Language, onChange: (lang: Language) => void;}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ onChange, type, value }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as FromLanguage | Language);
  };
  return (
    <Form.Select aria-label='Select language' onChange={handleChange} value={value}>
      {type === SectionType.FROM && 
        <option key={AUTO_LANGUAGE} value={AUTO_LANGUAGE}>
          Detect Language
        </option>
      }
      {Object.entries(SUPPORTED_LANGUAGES).map(([key, lang]) => (
        <option key={key} value={key}>
          {lang}
        </option>
      ))}
    </Form.Select>
  );
};
