import { Button, Form } from 'react-bootstrap';
import { SectionType } from '../types.d';

import './TextArea.css'
import { ClipBoardIcon, SpeakerIcon } from './Icons';

interface TextAreaProps {
  type: SectionType;
  loading?: boolean;
  onChange: (text: string) => void;
  value: string;
};

const getPlaceholder = (type: SectionType, loading?: boolean) => {
  if (type === SectionType.FROM) return 'Enter text';
  if (loading) return 'Translating...';
  return 'Traduction';
};

export function TextArea({ type, loading, onChange, value }: TextAreaProps) {
  const onAutofocus = type === SectionType.FROM;
  
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  const handleClipboardClick = () => {
    navigator.clipboard.writeText(value).catch(() => {});
  };

  const handleSpeak = () => {
    const utterance = new SpeechSynthesisUtterance(value);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className='container-textArea'>
      <Form.Control 
        className={`textArea ${type === SectionType.FROM ? 'from' : 'to'}`}
        as="textarea"
        placeholder={getPlaceholder(type, loading)}
        disabled={type == SectionType.TO}
        value={value}
        autoFocus={onAutofocus} 
        onChange={handleChange} 
      />
      <div className='container-buttons'>
        <Button 
          variant='link' 
          className={`clipboard-button ${value ? 'show' : ''}`}
          onClick={handleClipboardClick}>
            <ClipBoardIcon />
        </Button>
        <Button 
          variant='link' 
          className={`speaker-button ${value ? 'show' : ''}`}
          onClick={handleSpeak}>
            <SpeakerIcon />
        </Button> 
      </div>
    </div>
  )
};