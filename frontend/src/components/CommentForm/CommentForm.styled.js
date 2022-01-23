import styled from 'styled-components';

export const CommentFormContainer = styled.div`
  display: flex;
`;

export const AvatarContainer = styled.div`
  > :first-child {
    width: 65px;
    height: 65px;
  }
`;
export const Form = styled.form`
  padding-left: 10px;
  color: rgba(0, 0, 0, 0.52);

  width: 100%;
`;

export const BottomLine = styled.hr`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  border-radius: 10px;
  padding: 5px;
  border-color: rgba(0, 0, 0, 0.52);

  :focus::-webkit-input-placeholder {
    color: transparent;
  }
`;

export const BottomFormSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  border-color: rgba(0, 0, 0, 0.52);
  border-radius: 5px;
  height: 30px;
  width: 100px;
  margin-top: 2px;
`;

export const ErrorText = styled.span`
  color: #f44336;
`;
