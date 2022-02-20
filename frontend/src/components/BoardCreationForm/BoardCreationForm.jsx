import { useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import MapInput from 'components/MapInput/MapInput';
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
  const [coords, setCords] = useState(null);
  const { register, handleSubmit } = useForm();
  const fileInput = useRef(null);
  const navigate = useNavigate();
  const { mutate } = useMutation((newBoard) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newBoard),
    };
    return (
      fetch('/boards/', requestOptions)
        .then((response) => response.json())
        // TODO obsluzyc mozliwosc blednej odpowiedzi
        .then((res) => navigate(`/board/${res.id}`))
    );
  });

  const handleButtonClick = () => {
    fileInput.current.click();
  };

  const submitHandler = (newBoardData) => {
    if (!coords) {
      return;
    }
    const newBoard = {
      announcements: [],
      coords,
      ...newBoardData,
    };
    console.log('XXXXXXXXXXXXXXXXX');
    console.log(newBoard);

    mutate(newBoard);
  };

  const handleFileChange = ({ target }) => {
    setInputFileText(target.files[0].name);
  };

  const handleMapClick = (selectedCoords) => {
    const [longitude, latitude] = selectedCoords;
    setCords({
      latitude,
      longitude,
    });
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
        Avatar:
        <HiddenInput
          type="file"
          accept="image/png, image/jpeg"
          onInput={handleFileChange}
          {...register('avatar')}
          ref={fileInput}
        />
      </StyledLabel>
      <StyledIconPicker onClick={handleButtonClick}>{inputFileText}</StyledIconPicker>
      <StyledLabel>
        Access type:
        <StyledSelect {...register('accessType')}>
          <option value="private">Private</option>
          <option value="public">Public</option>
        </StyledSelect>
      </StyledLabel>
      <StyledLabel htmlFor="description">
        Description:
        <ContentInput {...register('description')} />
      </StyledLabel>
      <StyledLabel>Place your board: </StyledLabel>
      <MapInput setCoordsCallback={handleMapClick} />
      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
};

export default BoardCreationForm;
