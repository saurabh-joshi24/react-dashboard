import { StyledLi, StyledButton } from "../components/Pagination/Paginations.styles";

//  This generates page numbers array in pagination items
const PageNumbers = ({ currentPage, totalPages, pageLimit, handleClick }) => {
    const pageNumbers = [];

    let startPage = Math.max(1, currentPage - Math.floor(pageLimit / 2));
    let endPage = Math.min(totalPages, startPage + pageLimit - 1);

    if (totalPages > 1) {
        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(
                <StyledLi
                    key={i}
                    active={currentPage === i}
                >
                    <StyledButton
                        active={currentPage === i}
                        onClick={() => handleClick(i)}>
                        {i}
                    </StyledButton>
                </StyledLi>
            );
        }
    }

    return pageNumbers;
};

export { PageNumbers }