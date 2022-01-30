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
  const [inputFileText, setInputFileText] = useState('Add board logo...');
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
          {...register('boardName', { required: true })}
        />
      </StyledLabel>
      <StyledLabel>
        Icon:
        <HiddenInput
          id="icon"
          type="file"
          accept="image/png, image/jpeg"
          onInput={handleFileChange}
          {...register('icon')}
          ref={fileInput}
        />
      </StyledLabel>
      <StyledIconPicker onClick={handleButtonClick}>{inputFileText}</StyledIconPicker>
      <StyledLabel>
        Access type:
        <StyledSelect id="accessType" name="accessType" {...register('accessType')}>
          <option default value="private">
            Private
          </option>
          <option value="public">Public</option>
        </StyledSelect>
      </StyledLabel>
      <StyledLabel htmlFor="description">
        Description:
        <ContentInput id="description" {...register('description')} />
      </StyledLabel>
      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
};

export default BoardCreationForm;
