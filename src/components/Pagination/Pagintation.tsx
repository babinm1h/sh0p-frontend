import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/redux';
import { setPage } from '../../store/reducers/shopSlice';
import "./Pagination.scss"

const Pagintation = () => {
    const dispatch = useDispatch()
    const { limit, totalCount, page } = useAppSelector(state => state.shop)
    const totalPages = Math.ceil(totalCount / limit)

    let pages: number[] = []

    for (let i = 0; i < totalPages; i++) {
        pages.push(i + 1)
    }

    const handleChangePage = (page: number) => {
        dispatch(setPage(page))
    }

    if (!pages.length) {
        return null
    }

    return (
        <div className="pagination">
            <ul className="pagination__list">
                {pages.map(p => <li onClick={() => handleChangePage(p)} key={p}
                    className={page === p ? "pagination__item pagination__item_active"
                        : "pagination__item"}>
                    {p}
                </li>)}
            </ul>
        </div>
    );
};

export default Pagintation;