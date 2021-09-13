import React, { useState } from 'react';
import '../../Style/articles.css';
import uniqid from 'uniqid';

export const Articles = ({ searchResult }) => {
    return (
        <div className="result-wrapper">
            <table className="result-list">
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Author</td>
                        <td>Date</td>
                        <td>Description</td>
                        <td>Image</td>
                    </tr>
                </thead>
                <tbody>
                    {searchResult.map((item) => {
                        return (
                            <tr key={uniqid()}>
                                <td>
                                    <a href={item.url}>{item.title}</a>
                                </td>
                                <td>{item.author}</td>
                                <td>{item.publishedAt}</td>
                                <td>{item.description}</td>
                                <td>
                                    <img
                                        src={item.urlToImage}
                                        alt={item.title}
                                        width="350"
                                    />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
