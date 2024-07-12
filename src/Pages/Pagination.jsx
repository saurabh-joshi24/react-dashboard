import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage, setLastIndex, setFirstIndex } from "../redux/pagination";
import styled from "styled-components";

const StyledNav = styled.nav`
    display: flex;
    width: 90%;
    justify-content: center;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom:
`

const StyledUl = styled.ul`
    display: flex;
    list-style: none;
    justify-content: center;
`

const StyledLi = styled.li`
    min-width: 30px;
    background: ${props => props.active ? "dodgerblue" : "#fff"};
    border: 1px solid #ddd;
    margin: 0px 5px 0px;
    color: ${props => props.disabled ? 'gray' : 'inherit'};
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    opacity: ${props => props.disabled ? 0.7 : 1};
    pointer-events: ${props => props.disabled ? 'none' : 'auto'};

`

const StyledButton = styled.button`
    width: 100%;
    cursor: pointer;
    padding: 10px;
    background: transparent;
    color: ${props => props.active ? "#fff" : "inherit"};
    border: none;
`

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

    //  This generated page numbers array in pagination items
    const renderPageNumbers = () => {
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

    return (
        <StyledNav>
            <StyledUl>
                <StyledLi disabled={currentPage === 1}>
                    <StyledButton onClick={handlePrevPage}>
                        Previous
                    </StyledButton>
                </StyledLi>
                {renderPageNumbers()}
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
