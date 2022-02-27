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
  Error,
} from './BoardCreationForm.styled';

const BoardCreationForm = () => {
  const [inputFileText, setInputFileText] = useState('Add board avatar...');
  const [mapCoordinates, setMapCoordinates] = useState(null);
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
    if (!mapCoordinates) {
      return;
    }
    const newBoard = {
      announcements: [],
      mapCoordinates,
      ...newBoardData,
    };
    mutate(newBoard);
  };

  const handleFileChange = ({ target }) => {
    setInputFileText(target.files[0].name);
  };

  const handleMapClick = (selectedCoords) => {
    const [longitude, latitude] = selectedCoords;
    setMapCoordinates({
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
          {...register('boardName', { required: true, minLength: 6, maxLength: 100 })}
        />
        {errors.boardName && (
          <Error>
            Please enter a valid board name. It should contain min. 6 and max. 100 characters.{' '}
          </Error>
        )}
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
      {errors.avatar && <Error>Please pick your board image.</Error>}

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
        {errors.description && (
          <Error>
            Please enter a valid description. It should contain min. 5 and max. 500 characters.
          </Error>
        )}
      </StyledLabel>

      <StyledLabel>Place your board: </StyledLabel>
      <MapInput
        setCoordsCallback={handleMapClick}
        {...register('mapCoordinates', {
          validate: () =>
            mapCoordinates?.latitude !== undefined && mapCoordinates?.longitude !== undefined,
        })}
      />
      {errors.mapCoordinates && <Error>Please set coordinates. </Error>}
      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
};

export default BoardCreationForm;
