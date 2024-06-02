// images
import facebook from '../assets/Images/socialMedias/facebook.svg'
import youtube from '../assets/Images/socialMedias/youtube.svg'
import twitter from '../assets/Images/socialMedias/twitter.svg'
import instagram from '../assets/Images/socialMedias/instagram.svg'
import linkedin from '../assets/Images/socialMedias/linkedin.svg'

const SocialMedias = () => {
    return (
        <section className='flex flow-row justify-between items-center w-1/5'>
            <a className=' hover:brightness-200 transition-all'  href="http://facebook.com" target="_blank">
                <img src={facebook} alt="facebook" />
            </a>
            <a className=' hover:brightness-200 transition-all' href="http://youtube.com" target="_blank">
                <img src={youtube} alt="youtube" />
            </a>
            <a className=' hover:brightness-200 transition-all' href="http://twitter.com" target="_blank">
                <img src={twitter} alt="twitter" />
            </a>
            <a className=' hover:brightness-200 transition-all' href="http://instagram.com" target="_blank">
                <img src={instagram} alt="instagram" />
            </a>
            <a className=' hover:brightness-200 transition-all' href="http://linkedin.com" target="_blank">
                <img src={linkedin} alt="linkedin" />
            </a>
        </section>
    );
};

export default SocialMedias;