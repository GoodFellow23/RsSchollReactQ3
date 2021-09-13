import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../Style/mainPage.css';
import { Api } from '../../Api/api';
import { API_KEY } from "../../../constants";

export const MainPage = ({ setSearchResult }) => {
    const apiKey = API_KEY;

    const [searchValue, setSearchValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [sortBy, setSortBy] = useState('publishedAt');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [lang, setLang] = useState('en');
    const [pageSize, setPageSize] = useState('10');
    const [page, setPage] = useState('1');
    const [currentPage, setCurrentPage] = useState('0');

    const handleChange = (set) => (event) => {
        set(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        const response = await Api(searchValue, apiKey, startDate, endDate, sortBy, lang, pageSize, page);
        const temp = response.data.totalResults / pageSize;
        const count = temp > Math.trunc(temp) ? Math.trunc(temp) + 1 : Math.trunc(temp);
        setSearchResult(response.data.articles);
        setCurrentPage(count);
        setIsLoading(false);
    }

    return (
        <div className="wrapper">
            <form className="search-result" onSubmit={handleSubmit}>
                <label htmlFor="search">
                    News:
                    <input
                        name="search"
                        type="text"
                        value={searchValue}
                        onChange={handleChange(setSearchValue)}
                        disabled={isLoading}
                    />
                </label>
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'Search'}
                </button>
                <div className="sort-string">
                    <label className="sortBy" htmlFor="sortBy">
                        <p>Sort:</p>
                        <select
                            className="sortBy"
                            name="sortBy"
                            value={sortBy}
                            onChange={handleChange(setSortBy)}
                        >
                            <option>publishedAt</option>
                            <option>relevancy</option>
                            <option>popularity</option>
                        </select>
                    </label>
                    <label className="sortBy" htmlFor="lang">
                        <p>lang:</p>
                        <select
                            className="lang"
                            name="lang"
                            value={lang}
                            onChange={handleChange(setLang)}
                        >
                            <option value="en">English</option>
                            <option value="ru">Russia</option>
                            <option value="fr">France</option>
                        </select>
                    </label>
                    <label className="item" htmlFor="startDate">
                        <p>Start:</p>
                        <DatePicker
                            name="startDate"
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            dateFormat="yyyy-MM-dd"
                        />
                    </label>
                    <label className="item" htmlFor="endDate">
                        <p>End:</p>
                        <DatePicker
                            name="endDate"
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            dateFormat="yyyy-MM-dd"
                        />
                    </label>
                    <label className="sortBy" htmlFor="pageSize">
                        <p>Size:</p>
                        <select
                            className="pageSize"
                            name="pageSize"
                            value={pageSize}
                            onChange={handleChange(setPageSize)}
                        >
                            <option>5</option>
                            <option>10</option>
                            <option>20</option>
                            <option>50</option>
                            <option>100</option>
                        </select>
                    </label>
                    <label className="sortBy" htmlFor="page">
                        <p>Page({currentPage}):</p>
                        <input
                            type="number"
                            className="page"
                            name="page"
                            value={page}
                            onChange={handleChange(setPage)}
                        />
                    </label>
                </div>
            </form>
        </div>
    )
}
