import './App.css';
import styled from 'styled-components';
// import SportlightSrc from '/images/sportlight.png';
// import WoodTitleSrc from '/images/Wood-Title-Sign.png';
// import ClassCSrc from './images/Class_C-ID_01.png'
import Carousel from './component/Carousel';
import critterData from "./data/critter";
import { useState } from 'react';


const config = "/frontend-test"

const Sportlight = styled.img`
  width: 35%;
  height: 100%;
  margin-left: 15%;
  position: absolute;
  z-index: 1;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  height: inherit;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  position: relative;
  z-index: 10;

  @media (max-width: 768px) {
    
  }
`;

const Section1 = styled.div`

`;

const Section2 = styled.div`
  display: flex;
  gap: 3%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Section3 = styled.div`
  display: flex;
  gap: 18rem;
  margin-top: 8rem;

  @media (max-width: 768px) {
    margin-top: 0rem;
    gap: 0rem;
    flex-direction: column;
    align-items: center;
  }

`;

const Section4 = styled.div`
  position: absolute;
  background-color: #3f3f4680;
  width: 100%;
  height: max-content;
  bottom: 0;
`;

const WoodTitle = styled.img`
  // width: 100%;
`;

const WoodTitleText = styled.h1`
  font-size: 22pt;
  color: white;
  text-shadow: -2px -1px 0px #724a2f, -1px -1px 0px #724a2f, 2px -1px 0px #724a2f, 2px 1px 0px #724a2f, -1px 1px 0px #724a2f;
  position: absolute;
  top: 4.5%;
  left: 47%;
`;

const Critter = styled.img`
  // width: 100%;
`;

const CritterDetail = styled.div`
    width: 400px;
    height: 200px;
    background-color: #5f5fbd57;
    border-radius: 24px;
    padding: 1.5rem;
    color: #ffffff;
    height: 220px;

    @media (max-width: 768px) {
      width: max-content;
    }
`;

const ButtonBox = styled.div`
  width: 130px;
  padding: 3px 3px;
  border-radius: 3em;
  border-width: 2px;
  border-color: red;
  border: 2px solid ${(props)=>props.active ?'rgba(210,141,247,1)': 'rgba(46, 43, 83, 1)'};
  margin-bottom: 10px;
`;

const ClassContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 7%;
  justify-content: center;
  width: 120px;
  padding: 5px 0px;
  border-radius: 3em;
  background: ${(props)=>props.active ? 'linear-gradient(180deg, rgba(210,141,247,1) 50%, rgba(167,67,229,1) 50%)': 'linear-gradient(180deg, rgba(99, 84, 137, 1) 50%, rgba(46, 43, 83, 1) 50%)'
 };
  border: 2px solid ${(props)=>props.active ?'rgba(210,141,247,1)': 'rgba(46, 43, 83, 1)'};
  color: white;
  cursor: pointer;
  // margin-bottom: 10px;
`;

const ClassName = styled.div`
  
 
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6%;
  margin: 0px 0px 8px 0rem;
`;  

const ClassImg = styled.img `

`;

const CharactorName = styled.h1`
  font-size: 22pt;
  text-shadow: -2px -1px 0px #4d335d, -1px -1px 0px #4d335d, 2px -1px 0px #4d335d, 2px 1px 0px #4d335d, -1px 1px 0px #4d335d;
`;

const Vector = styled.div`
  display: flex;
  width: max-content;
  padding: 5px 1rem;
  background-color: #2b1a49;
  border-radius: 40px;
  justify-items: center;
  align-items: center;
  margin: 8px 0px;
`;

const VectorImg = styled.img`

`;

const Detail = styled.div`

`;

function App() {

  const class_data = [
    {
      id:'01',
      className: 'Class S',
      isActive: true,
      activeIcon: '/frontend-test/images/Class v.2.png',
      inActiveIcon: '/frontend-test/images/Class v.2 (4).png'
    },
    {
      id:'02',
      className: 'Class A',
      isActive: false,
      activeIcon: '/frontend-test/images/Class v.2 (1).png',
      inActiveIcon: '/frontend-test/images/Class v.2 (5).png'
    },
    {
      id:'03',
      className: 'Class B',
      isActive: false,
      activeIcon: '/frontend-test/images/Class v.2 (2).png',
      inActiveIcon: '/frontend-test/images/Class v.2 (6).png'
    },
    {
      id:'04',
      className: 'Class C',
      isActive: false,
      activeIcon: '/frontend-test/images/Class v.2 (3).png',
      inActiveIcon: '/frontend-test/images/Class v.2 (7).png'
    },
  ]

  const [classDisplay, setClassDisplay] = useState(class_data[0].activeIcon)
  const [classData, setClassData] = useState(class_data)
  const [critterDisplay, setCritterDisplay] = useState(critterData[0])

  const onSelectClass = (item, index) => {
    setClassData(prevClassData => {
      return prevClassData.map((classItem, i) => {
        return {
          ...classItem,
          isActive: i === index ? true : false
        };
      });
    });
    setClassDisplay(item.activeIcon)
  };

  return (
    <div className="App">
      <div className='bg'>
        <Sportlight src={'/frontend-test/images/sportlight.png'}/>
        <ContentWrapper>
            <Section1>
              <WoodTitle src={'/frontend-test/images/Wood-Title-Sign.png'}/>
              <WoodTitleText>คริตเตอร์</WoodTitleText>
            </Section1>
            <Section2>
              {classData.map((item, index)=>(
                <ButtonBox active ={item.isActive}>
                  <ClassContainer active ={item.isActive} onClick={()=>onSelectClass(item, index)}>
                    <ClassImg src={item.isActive ? item.activeIcon : item.inActiveIcon} width={'25'}></ClassImg>
                    <ClassName>{item.className}</ClassName>
                  </ClassContainer>
                  </ButtonBox>
              ))
              }

            </Section2>
            <Section3>
              <Critter src={critterDisplay.imageUrl}/>
              <CritterDetail>
                <ContentContainer>
                  <ClassImg src={classDisplay}></ClassImg><CharactorName>{critterDisplay.critterName}</CharactorName>
                </ContentContainer>
                <Vector><VectorImg src={`/frontend-test/images/wreath.png`} />  สายเพิ่มรางวัล</Vector>
                <Detail dangerouslySetInnerHTML={{ __html: critterDisplay.description.replace(/(?:\r\n|\r|\n)/g, "<br>") }} />
              </CritterDetail>
            </Section3>
            <Section4>
            <Carousel 
            data={critterData} 
            form={critterDisplay}
            setForm={setCritterDisplay}
            />
            </Section4>
        </ContentWrapper>
        
      </div>
    </div>
  );
}

export default App;
