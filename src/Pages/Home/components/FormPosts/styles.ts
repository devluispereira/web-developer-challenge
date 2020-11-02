import styled from "styled-components";

export const PostComments = styled.form`
  width: 100%;
  max-width: 516px;
  background: #313131;
  height: 100%;
  max-height: 353px;
  border: solid 1px #3b3b3b;
  border-radius: 3px;
  transition: linear 300ms;
  padding: 20px;
  display: flex;
  margin-top: 120px;
  flex-direction: column;
  justify-content: space-between;
  :hover {
    border: solid 1px #4b4b4b;
  }
  @media (max-width: 560px) {
    max-width: 450px;
  }
  @media (max-width: 400px) {
    max-width: 300px;
  }
`;

export const ImageContainer = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  #image {
    #avatar {
      width: 88px;
      height: 88px;
      border-radius: 40%;

      display: flex;
    }
    #trash {
      position: absolute;
      top: 44px;
      right: 35%;
      height: 24px;
      cursor: pointer;
    }
  }

  #inputUpload {
    width: 88px;
    height: 88px;
    border-radius: 40%;
    background: rgba(0, 0, 0, 0.1);
    border: solid #5f5f5f 1px;
    display: flex;

    align-items: center;
    justify-content: center;
    transition: display 200ms linear;
    cursor: pointer;
    transition: 200ms linear;

    :hover {
      border: solid #6f6f6f 1px;
    }

    input {
      display: none;
    }

    label {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      :hover {
        svg {
          transform: scale(1.1);
        }
      }
    }
  }
`;
export const InputsContainer = styled.div`
  flex: 2;
`;
export const ActionsContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const DiscardButton = styled.button`
  background: none;
  border: none;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: center;
  color: #5f5f5f;
  text-decoration: underline;
  transition: linear 200ms;
  margin-right: 20px;

  :hover {
    color: #fff;
    transform: scale(1.02);
  }
`;

type PublishButton = {
  publish: boolean;
};
export const PublishButton = styled.button<PublishButton>`
  width: 98px;
  height: 41px;
  border-radius: 8px;
  background-color: ${(props) => (props.publish ? "#71bb00" : "#5f5f5f")};
  border: none;
  transition: linear 200ms;
  color: ${(props) => (props.publish ? "#FFF" : "#313131")};

  :hover {
    transform: scale(1.02);
  }
`;
export const Comments = styled.div``;
