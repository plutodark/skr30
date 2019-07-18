import React, { useRef, useState, useEffect } from 'react';
import MaterialIcon from 'material-icons-react';
import { map, clamp, trim } from 'lodash';
import Tag from '../Tag';
import useDebounce from '../useDebounce';
import './style.scss';

const Input = (props) => {
  const {
    inputValue,
    placeholder,
    tags,
    handleEvent,
    suggestions,
    isAutoComplete,
  } = props;
  const [keyword, setKeyword] = useState(inputValue);
  const [suggestionIndex, setSuggestionIndex] = useState(-1);
  const [isFocus, setIsFocus] = useState(false);
  const inputEl = useRef(null);
  const onInputFocus = () => {
    inputEl.current.focus();
  };
  // debounce search start
  const debouncedSearchTerm = useDebounce(keyword, 1000);
  useEffect(() => {
    if (debouncedSearchTerm && isAutoComplete) {
      console.log(debouncedSearchTerm);
      handleEvent({ command: 'autoComplete', value: debouncedSearchTerm });
    }
  }, [debouncedSearchTerm, handleEvent, isAutoComplete]);
  // debounce searh end
  const onChange = (event) => {
    const value = event.target.value;
    setKeyword(value);
  };
  const onEnter = (value) => {
    const trimmedValue = trim(value);
    handleEvent({ command: 'enter', value: trimmedValue });
    setSuggestionIndex(-1);
    setKeyword('');
  };
  const onChooseSuggestion = (num) => {
    if (suggestions) {
      const result = clamp(suggestionIndex + num, 0, suggestions.length -1);
      if (suggestionIndex === result) {
        return;
      }
      setKeyword(suggestions[result].label);
      return setSuggestionIndex(result);
    }
  };
  const onKeyUp = (event) => {
    const { keyCode } = event;
    switch (keyCode) {
      // Enter
      case 13: {
        if (keyword) {
          onEnter(keyword);
        }
        break;
      }
      case 38:
        onChooseSuggestion(-1);
        break;
      // down
      case 40:
        onChooseSuggestion(1);
        break;

      // esc
      case 27:
        onEnter('');
        break;
      default:
        break;
    }
  };

  const onTagEvent = ({ command }, value) => {
    if (command === 'close') {
      return handleEvent({ command: 'removeTag', value });
    }
  };
  const renderInputBox = () => (
    <input
      ref={inputEl}
      className={'input--input'}
      value={keyword}
      placeholder={placeholder}
      onKeyUp={onKeyUp}
      onChange={onChange}
      onFocus={() => setIsFocus(true)}
    />
  );

  const renderTag = (tag, key) => {
    const { label, icon } = tag;
    return (
      <Tag
        className={'input--tag'}
        key={key}
        label={label}
        icon={icon}
        handleEvent={props => onTagEvent(props, label)}
      />
    );
  };
  const renderTags = () => {
    return map(tags,renderTag);
  };
  const renderSuggestion = (suggestion, key) => {
    const { label, icon } = suggestion;
    return (
      <div
        className={`input--suggestions--item ${key === suggestionIndex ? 'input--suggestions--item--selected' : ''}`}
        key={key}
        onClick={() => onEnter(label)}
      >
        {icon ? <MaterialIcon icon={icon} /> : <div className={'input--suggestions--empty-icon'} />}
        <div>{label}</div>
      </div>
    );
  };
  const renderSuggestions = () => {
    return (
      <div className={'input--suggestions-container'}>
        {map(suggestions, renderSuggestion)}
      </div>
    );
  };
  const renderSuggestionOverlay = () => (
    <div className={'input--overlay'} onClick={() => setIsFocus(false)} />
  );
  return (
    <div className={'input'}>
      {isFocus && renderSuggestionOverlay()}
      <div
        className={'input--container'}
        onClick={onInputFocus}
      >
        {renderTags()}
        {renderInputBox()}
      </div>
      {isFocus && keyword && suggestions && renderSuggestions()}
    </div>
  );
};
Input.defaultProps = {
  inputValue: '',
};
export default Input;
