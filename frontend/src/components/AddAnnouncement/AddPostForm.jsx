import { useState } from 'react';
import {
  Form,
  Line,
  FormTitle,
  SecondFormRow,
  IconOptions,
  MarkedTitle,
  TitleInput,
  ContentInput,
  BoardOptions,
  Button,
} from 'components/AddAnnouncement/AddPostForm.styled';
import { BottomFormSection, ErrorText } from '../CommentForm/CommentForm.styled';
import { FaBullhorn, FaBolt, FaDog, FaTint } from 'react-icons/fa';
import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';

const AddPostForm = ({ callback }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const iconOptions = [
    { value: 'water', label: <FaTint /> },
    { value: 'electricity', label: <FaBolt /> },
    { value: 'pets', label: <FaDog /> },
    { value: '', label: <FaBullhorn /> },
  ];
  const availableBoards = [
    { value: 'Board 1', label: 'Board 1' },
    { value: 'Board 2', label: 'Board 2' },
    { value: 'Board 3', label: 'Board 3' },
    { value: 'Board 4', label: 'Board 4' },
  ];

  const onSubmit = (data) => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormTitle>
        Add new <MarkedTitle>Announcement</MarkedTitle>
      </FormTitle>
      <Line />
      <Controller
        name="boards"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            styles={BoardOptions}
            options={availableBoards}
            defaultValue={BoardOptions[0]}
          />
        )}
      />
      <SecondFormRow>
        <TitleInput
          type="text"
          placeholder="Enter title..."
          {...register('title', { required: true })}
        />
        <Controller
          name="icons"
          control={control}
          render={({ field }) => <Select {...field} styles={IconOptions} options={iconOptions} />}
        />
      </SecondFormRow>
      <ContentInput
        type="text"
        placeholder="Enter description..."
        {...register('content', { required: true })}
      />
      <BottomFormSection>
        <ErrorText>Temp error</ErrorText>
        <Button type="submit">Add</Button>
      </BottomFormSection>
    </Form>
  );
};

export default AddPostForm;
