import React from 'react';
import { useInitialState } from './hooks/useInitialState';
import { useDebounce } from './hooks/useDebounce';
import { Translate } from './services/Translate';
import { AUTO_LANGUAGE } from './constants';
import { LanguageSelector } from './components/LanguageSelector';
import { SectionType } from './types.d';
import { TextArea } from './components/TextArea';
import { Container, Row, Col, Button, Stack } from 'react-bootstrap';
import { InterchangeIcon } from './components/Icons';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult
  } = useInitialState();
  
  const debouncedFromText = useDebounce(fromText, 250);
  
  React.useEffect(() => {
    if (debouncedFromText === '') return;
    
    Translate({ text: debouncedFromText, fromLanguage, toLanguage })
      .then(res => {
        if (res === '') return;
        setResult(res);
      })
      .catch(() => { setResult('Error') })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedFromText, fromLanguage, toLanguage]);

  return (
    <Container fluid>
      <h1>Google Translate</h1>
      
      <Row>
        <Col>
          <Stack gap={2} className='h-100'>
            <LanguageSelector 
              type={SectionType.FROM}
              value={fromLanguage}
              onChange={setFromLanguage}
            />
            <TextArea
              type={SectionType.FROM}
              value={fromText}
              onChange={setFromText}
            />
           </Stack>
        </Col>
        <Col xs='auto'>
          <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguages}>
            <InterchangeIcon />
          </Button>
        </Col>
        <Col>
          <Stack gap={2} className='h-100'>
            <LanguageSelector 
              type={SectionType.TO}
              value={toLanguage}
              onChange={setToLanguage}
            />
            <TextArea
              type={SectionType.TO}
              loading={loading}
              value={result}
              onChange={setResult}
            />
          </Stack>
        </Col>
      </Row>
    </Container>
    
  )
}

export default App
