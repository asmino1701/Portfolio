import { IconLinkedIn, IconGitHub, IconTwitter, IconInstagram } from "../components/icons/Icons";

export default function Contact() {
return (
<section id="contact" className="flex flex-col justify-center items-center text-center container mx-auto py-8">
    <div className="max-w-5xl">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="text-gray-700 mb-4 text-white">
            If you want to get in touch with me, you can send me an email here:
            <a href="mailto:andresmino1701@gmail.com" className="text-blue-500 hover:underline">
            </a>
        </p>
        <p className="text-gray-700 mb-4 text-white">
            You can also follow me on my social networks:
        </p>
        <div className="flex justify-center space-x-5 mb-6">
                <a href="" className="flex items-center flex-col text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                    <IconLinkedIn/>
                    LinkedIn
                </a>
                <a href="" className="flex items-center flex-col text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                    <IconGitHub/>
                    GitHub
                </a>
                <a href="" className="flex items-center flex-col text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                    <IconTwitter/>
                    Twitter
                </a>
                <a href="" className="flex items-center flex-col text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                    <IconInstagram/>
                    Instagram
                </a>
        </div>
                
        <p className="text-gray-700 mt-4 text-white">
            I am always open to new opportunities and collaborations. Hope to hear from you soon!
        </p>
    </div>

</section>
);
}