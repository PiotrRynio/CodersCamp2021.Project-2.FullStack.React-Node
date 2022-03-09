import { v4 as uuidv4 } from 'uuid';
import { storage } from '../../firebase/firebase';
import { getDownloadURL, ref, uploadBytesResumable } from '@firebase/storage';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { ErrorMessage } from '@hookform/error-message';
import MapInput from 'components/MapInput/MapInput';
import { REST_API_URL } from '../../constants/restApiPaths';
import {
  StyledForm,
  FormTitle,
  MarkedTitle,
  StyledAvatarPicker,
  ContentInput,
  StyledLabel,
  BoardTitleInput,
  StyledSelect,
  HiddenInput,
  StyledButton,
} from './BoardCreationForm.styled';
import { ErrorText } from '../PostAddingForm/PostAddingForm.styled';

const BoardCreationForm = () => {
  const [avatarAsFile, setAvatarAsFile] = useState();
  const [mapCoordinates, setMapCoordinates] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const fileInput = useRef(null);
  const navigate = useNavigate();

  const { mutate } = useMutation((newBoard) => {
    const uploadFileName = uuidv4();
    const storageRef = ref(storage, `/images/${uploadFileName}`);
    const uploadTask = uploadBytesResumable(storageRef, avatarAsFile);
    uploadTask.on(
      'state_changed',
      () => {},
      (err) => console.log(err),
      () => {
        const returnedFirebaseUrl = getDownloadURL(uploadTask.snapshot.ref).then(
          async (firebaseAvatarUrl) => {
            newBoard.avatarUrl = firebaseAvatarUrl;
            const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(newBoard),
            };
            const postBoardUrl = `${REST_API_URL}/boards`;
            const response = await fetch(postBoardUrl, requestOptions);
            await response.json();
            console.log(response);
            window.alert('Board added correctly!');
            //navigate(`/board/${response.returnedData.id}`);
          },
        );
      },
    );
  });

  const handleButtonClick = () => {
    fileInput.current.click();
  };

  const submitHandler = async (newBoardData) => {
    const newBoard = {
      announcements: [],
      accessType: newBoardData.accessType,
      description: newBoardData.description,
      boardName: newBoardData.boardName,
      mapCoordinates: newBoardData.mapCoordinates,
    };
    newBoard.mapCoordinates = mapCoordinates;
    mutate(newBoard);
  };

  const handleFileChange = ({ target }) => {
    setAvatarAsFile(target.files[0]);
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
          {...register('boardName', {
            required: "This field can't be empty.",
            pattern: {
              value: /.*[^\s].*/,
              message: "This field can't contain only whitespaces",
            },
            minLength: {
              value: 6,
              message: 'Your board title should be at least 5 characters long',
            },
            maxLength: {
              value: 100,
              message: "Your board title shouldn't exceed 100 characters",
            },
          })}
        />
        <ErrorMessage
          errors={errors}
          name="boardName"
          render={({ message }) => <ErrorText>{message}</ErrorText>}
        />
      </StyledLabel>
      <StyledLabel>
        Image:
        <HiddenInput
          type="file"
          accept="image/png, image/jpeg"
          onInput={handleFileChange}
          {...register('avatar', {
            validate: () => avatarAsFile !== undefined,
          })}
          ref={fileInput}
        />
      </StyledLabel>
      <StyledAvatarPicker onClick={handleButtonClick}>
        {!!avatarAsFile ? avatarAsFile.name : 'Select image...'}
      </StyledAvatarPicker>
      {errors.avatar && (
        <ErrorMessage
          message={"Board image can't be empty"}
          errors={errors}
          name="avatar"
          render={({ message }) => <ErrorText>{message}</ErrorText>}
        />
      )}
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
          {...register('description', {
            required: "This field can't be empty.",
            pattern: {
              value: /.*[^\s].*/,
              message: "This field can't contain only whitespaces",
            },
            minLength: {
              value: 5,
              message: 'Your description should be at least 5 characters long',
            },
            maxLength: {
              value: 100,
              message: "Your description shouldn't exceed 100 characters",
            },
          })}
        />
        {errors.description && (
          <ErrorMessage
            errors={errors}
            name="description"
            render={({ message }) => <ErrorText>{message}</ErrorText>}
          />
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
      {errors.mapCoordinates && !mapCoordinates && (
        <ErrorMessage
          message={"Coordinates can't be empty."}
          errors={errors}
          name="mapCoordinates"
          render={({ message }) => <ErrorText>{message}</ErrorText>}
        />
      )}
      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
};

export default BoardCreationForm;
