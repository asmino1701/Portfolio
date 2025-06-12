
import {Anchor, GradientButton} from "../components/Buttons/Button";
export default function Home() {
  return (
    <section id="home-hero" className="min-h-screen flex flex-col items-center justify-center text-center p-6 sm:pt-8 relative overflow-hidden">
        <div className="flex h-screen items-center justify-center bg-gray-900 p-5">
            <div className="items-center gap-10 md:px-10">
            <div className="flex items-center justify-center">
                <img src="/assets/Amino.png" alt="" className="md:size-96 size-72 rounded-full " loading="eager"/>
            </div>
            <div className="max-w-5xl">
                <h1 className="mb-2 text-3xl font-bold text-white"><span className="text-emerald-600">Hi,</span> I'm Full Stack Developer</h1>
                <p className="mb-6 text-white">I'm a front-end developer with over 5 years of experience, passionate about creating beautiful and functional user interfaces. My experience ranges from developing with HTML5, CSS, and JavaScript (Vanilla, ES6+, ReactJS) to working with CMSs like Sitecore and WordPress. I'm currently deepening my knowledge in Tailwind CSS, web accessibility, and performance optimization.</p>
                <div className="flex justify-center space-x-5">
                <Anchor text="Follow me" href="#contact" target="_self" btnClass="hover:text-white relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"/>
                <GradientButton text="Resume" btnClass="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-emerald-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"/>
                </div>
            </div>
            
            </div>
        </div>
    </section>
  );
}