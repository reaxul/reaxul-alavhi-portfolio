import bgimage from "../assets/bg.jpg"
const Background = () => {
    return (
        <div className="fixed h-screen w-[100%] top-0 -z-10">
            <img className="h-full w-full bg-cover" src={bgimage} alt="" />
        </div>
    );
};

export default Background;