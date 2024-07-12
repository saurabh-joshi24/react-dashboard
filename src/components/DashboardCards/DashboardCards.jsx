import { Card } from "../../components/card";
import { StyledDiv } from "./DashboardCards.styles";

const DashboardCards = ({ datalist, renderCardContent }) => {
    return (
        <StyledDiv>
            {
                datalist.map((data, index) => (
                    <Card key={index}>
                        {renderCardContent ? renderCardContent(data) : (
                            <>
                                <h1>{data.title}</h1>
                                <p>{data.description}</p>
                            </>
                        )}
                    </Card>
                ))
            }
        </StyledDiv>
    )
}

export default DashboardCards;