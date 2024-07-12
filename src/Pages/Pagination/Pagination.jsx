import React, { useEffect } from "react";
import { StyledNav, StyledLi, StyledUl, StyledButton, StyledInput, StyledLabel, StyledDiv } from "./Paginations.styles";
import { PageNumbers } from "../../utils/pagination";

const Pagination = ({ onChange, ...paginationData }) => {
    const { currentPage, totalPages, pageLimit, itemsPerPage } = paginationData;

    useEffect(() => {
        const lastItemIndex = currentPage * itemsPerPage;
        const firstItemIndex = lastItemIndex - itemsPerPage;

        onChange({
            ...paginationData,
            indexOfFirstItem: firstItemIndex,
            indexOfLastItem: lastItemIndex,
        })

    }, [currentPage, itemsPerPage])

    // handles page change on page number click
    const handleClick = (page) => {
        onChange({
            ...paginationData,
            currentPage: page
        })
    };

    // handles next page
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            const nextPage = currentPage + 1;
            onChange({
                ...paginationData,
                currentPage: nextPage
            })
        }
    };

    // handles previous page
    const handlePrevPage = () => {
        if (currentPage > 1) {
            const prevPage = currentPage - 1;
            onChange({
                ...paginationData,
                currentPage: prevPage
            })
        }
    };

    const handleItemsPerPageChange = (e) => {
        const newItemsPerPage = Number(e.target.value);
        const totalItems = totalPages * itemsPerPage;
        if (newItemsPerPage <= totalItems) {
            onChange({
                ...paginationData,
                itemsPerPage: newItemsPerPage
            })
        }
    }

    return (
        <StyledNav>
            <StyledDiv>
                <StyledLabel htmlFor="resultPer">Results Per Page: </StyledLabel>
                <StyledInput type="number" step="5" id="resultPerPage" value={itemsPerPage} onKeyDown={(e) => e.preventDefault()} onChange={handleItemsPerPageChange} />
            </StyledDiv>
            <StyledUl>
                <StyledLi disabled={currentPage === 1}>
                    <StyledButton onClick={handlePrevPage}>
                        Previous
                    </StyledButton>
                </StyledLi>
                <PageNumbers currentPage={currentPage} totalPages={totalPages} handleClick={handleClick} pageLimit={pageLimit} />
                <StyledLi disabled={currentPage === totalPages}>
                    <StyledButton onClick={handleNextPage}>
                        Next
                    </StyledButton>
                </StyledLi>
            </StyledUl>
        </StyledNav>
    );
};

export default Pagination;
