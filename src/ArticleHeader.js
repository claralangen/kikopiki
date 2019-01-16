import React, { Component } from 'react';
import data from './data';
import ArticleHeaderItem from './ArticleHeaderItem';

class ArticleHeader extends Component { 
    render = () => {
        return (
            <header className="ArticleHeader">
                <h2 className="ArticleHeader__title">{this.props.painting.title}</h2>
                <ul className="ArticleHeader__list">
                    <ArticleHeaderItem
                        painting={this.props.painting.inspired_painting}
                    />
                    <ArticleHeaderItem
                        painting={this.props.painting.main_painting}
                    />
                </ul>
            </header>
        )
    }
}

export default ArticleHeader;

