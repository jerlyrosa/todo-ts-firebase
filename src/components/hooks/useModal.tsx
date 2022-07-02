import React, { useState } from "react";
// import styled, { css } from "styled-components";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
// import { IconClose } from "../components/icons/icons";
// import mq from "../components/styles/mq";
import { Global } from "@emotion/react";
import { IconClose } from "../icons/icons";
import mq from "../mq";

const useModal = () => {
  const [isModal, setCloseModal] = useState(false);

  const closeModal = () => {
    setCloseModal(false);
  };
  const openModal = () => {
    setCloseModal(!isModal);
  };

  const editModal = () => {
    setCloseModal(!isModal);
  };
  type Props = {
    id: string 
  };
  const ModalView = ({id}:Props): JSX.Element => {
    return (
      <Container modal={isModal}>
        {isModal && <Global styles={{ body: { overflowY: "hidden" } }} />}

        <Card>
          <CloseBottom onClick={closeModal}>
            <IconClose />
          </CloseBottom>
          <Form>
         <Label>
             <Title >Update Task {id}</Title>
             </Label>

             <TextInput
                placeholder="Update The Title" 
                value={""}
                // onChange={""}
                required={true}
                
             />
         <TextTarea
         placeholder="Update the Description" 
        //  value={newValueContent} 
        //  onChange={""}
          />
         <div>

         </div>
     </Form>
        </Card>
      </Container>
      
    );
  };

  return {
    ModalView,
    openModal,
  };
};

export { useModal };

type propsStyles = {
  modal: boolean;
};
const Container = styled.div<propsStyles>`
  overflow-y: hidden;

  background: rgba(0, 0, 0, 0.7);
  display: ${(props) => (props.modal ? "flex" : "none")};
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  align-items: baseline;
  justify-content: center;
  position: absolute;
    left: 0;
`;

const Card = styled.div`
  background: #fff;
  margin: 5rem 1rem;
  border-radius: 5px;
  max-width: 65rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  min-width: 85vw;
  word-wrap: break-word;
  ${mq.md} {
    min-width: 40rem;
    margin: 10rem 1rem;
  }
`;

const CloseBottom = styled.button`
  max-height: 4rem;
  background: none;
  border: none;
  box-shadow: none;
  display: flex;
  justify-content: end !important;

  &:hover {
    cursor: pointer;
    svg {
      transform: scale(1.4);
    }
  }
`;





const Form = styled.form`
  background-color: #fff;
  padding: 0 0 0 1rem;
  display: flex;
  align-content: center;
  flex-direction: column;
  padding: 1rem;

`;

const Label = styled.label`
  background-color: #fff;
  display: flex;
  align-content: center;
  flex-direction: column;

`;

const Title = styled.h3`
  margin: 1rem auto;
  color:${props =>  props.color};
  font-weight: 500;
`;

const TextInput = styled.input`
  font-weight: 500;
  margin: 1rem 0;
  padding: 1rem 0 1rem 2rem ;
  border-top: none;
  border-left: none;
  border-right: none;
  border-color: #eeeeee;
  border-width: thin;

`;

// border-bottom-width: thin;
// border-bottom-color


const TextTarea = styled.textarea`
  resize: vertical;
  padding: 2rem 0 0 2rem;
  border-top: none;
  border-left: none;
  border-right: none;
  font-weight: 500;
  border-bottom-color:#eeeeee;


  max-height: 50vh;

  ${mq.md} {
    resize: auto;
    max-width: 45rem;
    min-width: 45rem;
    /* border: revert; */
  }
`;