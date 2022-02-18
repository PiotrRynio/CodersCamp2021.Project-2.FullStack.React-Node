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
  ErrorMessage,
} from './BoardCreationForm.styled';

const BoardCreationForm = () => {
  const [inputFileText, setInputFileText] = useState('Add board avatar...');
  const [coords, setCords] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
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
    if (!coords) {
      return;
    }
    const newBoard = {
      announcements: [],
      coords,
      ...newBoardData,
    };
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
          {...register('boardName', { required: true, minLength: 5, maxLength: 100 })}
        />
        {errors.boardName && <ErrorMessage>Please enter a valid board name.</ErrorMessage>}
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
      {errors.avatar && <ErrorMessage>Please pick your board image.</ErrorMessage>}

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
        {errors.description && <ErrorMessage>Please enter a valid description.</ErrorMessage>}
      </StyledLabel>

      <StyledLabel>Place your board: </StyledLabel>
      <MapInput
        setCoordsCallback={handleMapClick}
        {...register('coords', {
          validate: () => coords?.latitude !== null && coords?.longitude !== null,
        })}
      />
      {errors.coords && errors.coords.message && (
        <ErrorMessage>Please enter your location.</ErrorMessage>
      )}
      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
};

export default BoardCreationForm;
