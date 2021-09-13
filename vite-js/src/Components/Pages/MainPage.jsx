import React, {useState} from "react";
import {axiosInstance} from "../../Services/api";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../Style/mainPage.css";

export const MainPage = ({setSearchResult}) => {
    const apiKey = '0dce18a8a93245fcae05a3a7149e56e9';

    const [searchValue, setSearchValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [sortBy, setSortBy] = useState('publishedAt');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [lang, setLang] = useState('en');
    const [pageSize, setPageSize] = useState('10');
    const [page, setPage] = useState('1');
    const [currentPage, setCurrentPage] =useState('0');

    const handleChange = (event) => {
        setSearchValue(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        const response = await axiosInstance.get(
            `v2/everything?q=${searchValue}&apiKey=${apiKey}&from=${startDate}&to=${endDate}&sortBy=${sortBy}&language=${lang}&pageSize=${pageSize}&page=${page}`
        );
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
                        onChange={handleChange}
                        disabled={isLoading}
                    />
                </label>
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'Search'}
                </button>
                <div className="sort-string">
                    <label className="sortBy" htmlFor={sortBy}>
                         <p>
                             Sort:
                         </p>
                        <select
                            className="sortBy"
                            name="sortBy"
                            value={sortBy}
                            onChange={(event) => setSortBy(event.target.value)}
                        >
                            <option>publishedAt</option>
                            <option>relevancy</option>
                            <option>popularity</option>
                        </select>
                    </label>
                    <label className="sortBy" htmlFor={lang}>
                        <p>
                            lang:
                        </p>
                        <select
                            className="lang"
                            name="lang"
                            value={lang}
                            onChange={(event) => setLang(event.target.value)}
                        >
                            <option value="en">English</option>
                            <option value="en">Russia</option>
                            <option value="fr">France</option>
                        </select>
                    </label>
                    <label className="item" htmlFor="startDate">
                        <p>
                            Start:
                        </p>
                        <DatePicker name="startDate" selected={startDate} onChange={(date) => setStartDate(date)} dateFormat="yyyy-MM-dd" />
                    </label>
                    <label className="item" htmlFor="endDate">
                        <p>
                            End:
                        </p>
                        <DatePicker name="endDate" selected={endDate} onChange={(date) => setEndDate(date)} dateFormat="yyyy-MM-dd" />
                    </label>
                    <label className="sortBy" htmlFor="pageSize">
                        <p>
                            Size:
                        </p>
                        <select
                            className="pageSize"
                            name="pageSize"
                            value={pageSize}
                            onChange={(event) => {
                                setPageSize(event.target.value);
                                setPage('1');
                            }}
                        >
                            <option>5</option>
                            <option>10</option>
                            <option>20</option>
                            <option>50</option>
                            <option>100</option>
                        </select>
                    </label>
                    <label className="sortBy" htmlFor="page">
                        <p>
                            Page({currentPage}):
                        </p>
                        <input type="number"
                            className="page"
                            name="page"
                            value={page}
                            onChange={(event) => setPage(event.target.value)}
                        />
                    </label>
                </div>
            </form>
        </div>
    )
}