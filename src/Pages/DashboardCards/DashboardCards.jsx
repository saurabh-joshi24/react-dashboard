import { Card } from "../components/card";
import styled from "styled-components";

const SAMPLE_DATA = [
    {
        title: "Title 1",
        description: "lorem ipsum doler set"
    }
    ,
    {
        title: "Title 2",
        description: "lorem ipsum doler set"
    },
    {
        title: "Title 3",
        description: "lorem ipsum doler set"
    },
    {
        title: "Title 4",
        description: "lorem ipsum doler set"
    }
]

const StyledDiv = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 20px;
`


const DashboardCards = () => {
    return (
        <StyledDiv>
            {
                SAMPLE_DATA.map((data) => (
                    <Card key={data.title}>
                        <h1>{data.title}</h1>
                        <p>{data.description}</p>
                    </Card>
                ))
            }
        </StyledDiv>
    )
}

export default DashboardCards;