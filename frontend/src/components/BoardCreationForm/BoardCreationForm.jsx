import { useForm } from 'react-hook-form';
import {
  StyledForm,
  FormTitle,
  MarkedTitle,
  StyledIconPicker,
  ContentInput,
  StyledLabel,
  BoardTitleInput,
  StyledIconPickerLabel,
} from './BoardCreationForm.styled';

const BoardCreationForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    console.log(data);
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
      <StyledIconPickerLabel htmlFor="icon">Icon: </StyledIconPickerLabel>
      <StyledIconPicker
        id="icon"
        type="file"
        accept="image/png, image/jpeg"
        {...register('icon')}
      />
      <StyledLabel>Access type: </StyledLabel>
      <label htmlFor="private">
        <input
          type="radio"
          id="private"
          name="accessType"
          value="private"
          {...register('accessType')}
        />
        Private
      </label>
      <label htmlFor="public">
        <input
          type="radio"
          id="public"
          name="accessType"
          value="public"
          {...register('accessType')}
        />
        Public
      </label>
      <StyledLabel htmlFor="description">Description: </StyledLabel>
      <ContentInput id="description" {...register('description')} />
    </StyledForm>
  );
};

export default BoardCreationForm;
