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
  StyledIconPicker,
  ContentInput,
  StyledLabel,
  BoardTitleInput,
  StyledSelect,
  HiddenInput,
  StyledButton,
  Error,
} from './BoardCreationForm.styled';
import { ErrorText } from '../PostAddingForm/PostAddingForm.styled';

const BoardCreationForm = () => {
  const [avatarAsFile, setAvatarAsFile] = useState();
  const [avatarAsURL, setAvatarAsURL] = useState();
  const [mapCoordinates, setMapCoordinates] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const fileInput = useRef(null);
  const navigate = useNavigate();
  const { mutate } = useMutation((newBoard) => {
    console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXX');
    console.log('Mutation');

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newBoard),
    };
    //console.log(requestOptions.body);
    const url = `${REST_API_URL}/boards`;

    return fetch(url, requestOptions).then((response) => response.json());

    //.then((res) => navigate(`/board/${res.id}`));
  });

  const handleButtonClick = () => {
    fileInput.current.click();
  };
  const handleFileUpload = async () => {
    console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXX');
    console.log('UPLOADING');
    const storageRef = ref(storage, `/images/${avatarAsFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, avatarAsFile);
    const promise = new Promise((resolve, reject) => {
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const prog = snapshot.bytesTransferred / snapshot.totalBytes;
        },
        (err) => console.log(err),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            console.log(url);
            console.log('FINISH UPLOADING');
            resolve(url);
          });
        },
      );
    });
  };

  const submitHandler = async (newBoardData) => {
    const newBoard = {
      announcements: [],
      ...newBoardData,
    };
    newBoard.mapCoordinates = mapCoordinates;

    const url = await handleFileUpload();
    console.log('RECEIVED URL');
    console.log(url);
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
          {...register('avatar')}
          ref={fileInput}
        />
      </StyledLabel>
      <StyledIconPicker onClick={handleButtonClick}>
        {!!avatarAsFile ? avatarAsFile.name : 'Select image...'}
      </StyledIconPicker>
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
          message={'Please set coordinates.'}
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
