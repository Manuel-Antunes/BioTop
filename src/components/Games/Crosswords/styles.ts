import styled from 'styled-components';


export const Container = styled.ul`

  padding: 3rem;
  display:flex;
  flex-direction:column;
  width: 80vw;
`;
export const Row = styled.div`
  display:flex;
  list-style: none;
  li{ 
    margin: .5rem;
    transition: all 0.2s;
    background-color:white;
    display:flex;
    align-items: center;
    justify-content: center;
    border: solid 2px black;
    @media(max-width:720px){
      width: 2rem;
      height: 2rem;
      font-size: 1rem;
    }

    width: 4rem;
      height: 4rem;
      font-size: 3rem;
    color: black;
    font-weight: bold;
    user-select: none;
  }
`;

export const Table = styled.div`
  border-radius: 5px;
  background-color:white;
  border: 1px solid black;
  padding: 1rem;
  display: flex;
  flex-direction:column;
  span{
    font-weight:bold;
    align-self:center;
    font-size: 2rem;
    text-align: center;
  }
  ul{
    list-style: none;
    li{ 
      font-size: 2rem;
      color: black;
      border-bottom: 1px solid black;
      font-weight: bold;
      user-select: none;
    }
  }
`;

export const List = styled.ul`
    display:flex;
    flex-direction:column;
    justify-content: center;
`;
export const Found = styled.div`
  background-color:white;

  border-radius: 5px;
  border: 1px solid black;
  padding: 1rem;
  display: flex;
  flex-direction:column;
  span{
    font-weight:bold;
    align-self:center;
    font-size: 2rem;
    text-align: center;
  }
  ul{
    list-style: none;
    li{ 
      font-size: 2rem;
      color: black;
      border-bottom: 1px solid black;
      font-weight: bold;
      user-select: none;
    }
  }
`;