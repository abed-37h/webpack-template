import DomElement from "../core/domElement";
import { Component } from "./component";
import './footer.css';
import GithubLogo from '../assets/icons/github.svg';

export class Footer extends Component {
    constructor(author, githubUrl) {
        super();
        this.author = author;
        this.githubUrl = githubUrl;
    }

    render() {
        const footer = new DomElement('footer')
            .append(
                new DomElement('p')
                    .setClass('copyright-text')
                    .setText(`\u00A9 ${new Date().getFullYear()} ${this.author}`),
                new DomElement('a')
                    .setAttributes({ href: this.githubUrl, target: '_blank', rel: 'noopener' })
                    .append(
                        new DomElement('img')
                            .setClass('icon github')
                            .setAttributes({ src: GithubLogo, alt: 'Github' })
                    ),
            );

        this._element = footer;
        return this._element;
    }
}