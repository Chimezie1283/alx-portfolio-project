import { Link, useNavigate } from 'react-router-dom';

const AboutPage = () => {
    const navigate = useNavigate();

    return (
        <>
        <h2>About Technocrat</h2>
        <p>
            To be honest, Technocrat was not really inpired by just The Holberton School, it is a project I have always had i mind to engage and bring to life.
        </p>
        <p>
            When I first started as a newbie even though some might still argue me to be one, I found out that out of anxiety and curiosity, many newbies want to know the latest happenings around them. Starting from framworks, languages and so on. I have always wanted to create a platform that will address all of these issues.
            <br></br>
            As the opportunity came for me to build a portfolio project, I decided to bring my thoughts and imaginations to reality.
        </p>
        <p>
            Technocrat is a blog site/platform that equips all techies with latest informations and give them the opportunity to be heard. In addition, it gives access to technical knowledge as well.
        </p>

        <h4 class="">Below are links to my different social media platforms:</h4>

        <div className="socials">
            <button><a target="_blank" href="https://www.linkedin.com/in/agbo-chimezie-3a4857179/">LinkedIn</a></button>
            <button><a target="_blank" href="https://github.com/Chimezie1283">GitHub</a></button>
            <button><a target="_blank" href="https://twitter.com/TheEnligthened">X (Twitter)</a></button>
        </div>
        
        <button className="github socials" ><a href="https://github.com/Chimezie1283">Link to the Github Repository of this site</a></button>
        </>
    );
}

export default AboutPage;