import { Card } from "../components/card";
import { StyledDiv } from "./DashboardCards.styles";

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