import { useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
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
  const [inputFileText, setInputFileText] = useState('Add board avatar...');
  const { register, handleSubmit } = useForm();
  const fileInput = useRef(null);
  const navigate = useNavigate();
  const { mutate } = useMutation((newBoard) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newBoard),
    };
    return fetch('/boards', requestOptions)
      .then((response) => response.json())
      .then((res) => navigate(`/board/${res.id}`));
  });

  const handleButtonClick = () => {
    fileInput.current.click();
  };

  const submitHandler = (newBoardData) => {
    const newBoard = {
      announcements: [],
      cords: { latitude: 51 + Math.random(), longitude: 17 + Math.random() },
      ...newBoardData,
    };
    mutate(newBoard);
  };

  const handleFileChange = ({ target }) => {
    setInputFileText(target.files[0].name);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submitHandler)}>
      <FormTitle>
        Add new <MarkedTitle>Board</MarkedTitle>
      </FormTitle>
      <StyledLabel>
        Board name:
        <BoardTitleInput
          placeholder="Enter board name..."
          {...register('boardName', { required: true, minLength: 5, maxLength: 100 })}
        />
      </StyledLabel>
      <StyledLabel>
        Avatar:
        <HiddenInput
          type="file"
          accept="image/png, image/jpeg"
          onInput={handleFileChange}
          {...register('avatar', { required: true })}
          ref={fileInput}
        />
      </StyledLabel>
      <StyledIconPicker onClick={handleButtonClick}>{inputFileText}</StyledIconPicker>
      <StyledLabel>
        Access type:
        <StyledSelect {...register('accessType', { required: true })}>
          <option value="private">Private</option>
          <option value="public">Public</option>
        </StyledSelect>
      </StyledLabel>
      <StyledLabel htmlFor="description">
        Description:
        <ContentInput
          {...register('description', { required: true, minLength: 5, maxLength: 500 })}
        />
      </StyledLabel>
      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
};

export default BoardCreationForm;
