import styled from "styled-components";

export const Container = styled.form``;

export const ContentInput = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 0.5px solid #dce1db;
  margin-bottom: 1rem;
`;

export const ContentInputTitle = styled.strong`
  color: #3b206c;
  font-size: 0.87rem;
  font-weight: 600;
  line-height: 1.375rem;
  margin-bottom: 1rem;
`;

export const ListOptionsInputs = styled.ul`
  display: flex;
  gap: .3rem;
  margin-bottom: 1rem;
`;

export const InputItem = styled.li`
  width: calc((100%/4) - .3rem);

  &.notes{
    width: 100%;

    textarea{
      height: 150px;
      width: 100%;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      padding: 1rem;
      color: #626162;
    }
  }

  span{
    color: ${props => props.theme.colors.primaryPinkMedium};
    font-size: .75rem;
    text-align: center;
  }


`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80px;

  &.active{
    border: 1px solid red;
    padding: 0.4rem;
    border-radius: 100%;
  }

  svg{
    height: 28px;
    width: 28px;
  }

  input{
    &[type="checkbox"], &[type="radio"]{
      opacity: 0;
      height: 0;
    }
  }
`;

export const ContentButton = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const Button = styled.button`
  width: 172px;
  height: 30px;
  background: ${props => props.theme.colors.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: .87rem;
  box-shadow: 0px 2.43762px 2.43762px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 17.0633px 0px;
`;
