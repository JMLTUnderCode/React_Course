import React from 'react';
import { useInitialState } from './hooks/useInitialState';
import { AUTO_LANGUAGE } from './constants';
import { LanguageSelector } from './components/LanguageSelector';
import { SectionType } from './types.d';

import { Container, Row, Col, Button, Form, Stack } from 'react-bootstrap';
import { interchangeIcon } from './components/Icons';

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
  
  return (
    <Container fluid>
      <h1>Google Translate</h1>
      
      <Row>
        <Col>
          <Stack gap={2}>
            <LanguageSelector 
              type={SectionType.FROM}
              value={fromLanguage}
              onChange={setFromLanguage}
            />
            <Form.Control 
              as="textarea"
              placeholder="Enter text" 
              autoFocus
              value={fromText} 
              onChange={(e) => setFromText(e.target.value)} 
            />
           </Stack>
        </Col>
        <Col xs='auto'>
          <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguages}>
            {interchangeIcon()}
          </Button>
        </Col>
        <Col>
          <Stack gap={2}>
            <LanguageSelector 
              type={SectionType.TO}
              value={toLanguage}
              onChange={setToLanguage}
            />
            <Form.Control 
              as="textarea"
              placeholder="Traduction" 
              value={result} 
              onChange={(e) => setResult(e.target.value)} 
            />
          </Stack>
        </Col>
      </Row>
    </Container>
    
  )
}

export default App
