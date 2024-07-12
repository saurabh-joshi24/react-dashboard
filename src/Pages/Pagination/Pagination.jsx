import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage, setLastIndex, setFirstIndex } from "../../redux/pagination";
import { StyledNav, StyledLi, StyledUl, StyledButton } from "./Paginations.styles";
import { PageNumbers } from "../../utils/pagination";

const Pagination = () => {
    const dispatch = useDispatch();
    const { currentPage, totalPages, pageLimit, itemsPerPage } = useSelector((state) => state.pagination.value);

    useEffect(() => {
        const lastItemIndex = currentPage * itemsPerPage;
        const firstItemIndex = lastItemIndex - itemsPerPage;

        dispatch(setFirstIndex(firstItemIndex));
        dispatch(setLastIndex(lastItemIndex));

    }, [currentPage, itemsPerPage])

    // handles page change on page number click
    const handleClick = (page) => {
        dispatch(setCurrentPage(page));
    };

    // handles next page
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            const nextPage = currentPage + 1;
            dispatch(setCurrentPage(nextPage));
        }
    };

    // handles previous page
    const handlePrevPage = () => {
        if (currentPage > 1) {
            const prevPage = currentPage - 1;
            dispatch(setCurrentPage(prevPage));
        }
    };

    return (
        <StyledNav>
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
