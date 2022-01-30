import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { useMutation } from 'react-query';
import {
  StyledForm,
  FormTitle,
  MarkedTitle,
  StyledIconPicker,
  ContentInput,
  StyledLabel,
  BoardTitleInput,
  StyledSelect,
  HiddenInput,
  StyledButton,
} from './BoardCreationForm.styled';

const BoardCreationForm = () => {
  const [inputFileText, setInputFileText] = useState('Add board logo...');
  const { register, handleSubmit } = useForm();
  const fileInput = useRef(null);
  const handleButtonClick = () => {
    fileInput.current.click();
  };

  const submitHandler = (data) => {
    const newBoard = {
      id: uuidv4(),
      announcements: [],
      ...data,
    };
    mutate(newBoard);
    // TODO: Dodać przeniesienie na widok nowo utworzonego boarda.
  };

  const { mutate } = useMutation((newBoard) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newBoard),
    };
    return fetch('/boards', requestOptions).then((response) => response.json());
  });

  const handleFileChange = ({ target }) => {
    setInputFileText(target.files[0].name);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submitHandler)}>
      <FormTitle>
        Add new <MarkedTitle>Board</MarkedTitle>
      </FormTitle>
      <StyledLabel htmlFor="boardName">Board name:</StyledLabel>
      <BoardTitleInput
        id="boardName"
        placeholder="Enter board name..."
        {...register('boardName', { required: true })}
      />
      <StyledLabel htmlFor="icon">Icon: </StyledLabel>
      <HiddenInput
        id="icon"
        type="file"
        accept="image/png, image/jpeg"
        onInput={handleFileChange}
        {...register('icon')}
        ref={fileInput}
      />
      <StyledIconPicker onClick={handleButtonClick}>{inputFileText}</StyledIconPicker>
      <StyledLabel htmlFor="accessType">Access type: </StyledLabel>
      <StyledSelect id="accessType" name="accessType" {...register('accessType')}>
        <option default value="private">
          Private
        </option>
        <option value="public">Public</option>
      </StyledSelect>
      <StyledLabel htmlFor="description">Description: </StyledLabel>
      <ContentInput id="description" {...register('description')} />

      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
};

export default BoardCreationForm;
