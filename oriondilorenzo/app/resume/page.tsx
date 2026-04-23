import Navbar from '../../components/pages/home/Navbar';

export default function ResumePage() {
    return (
        <main className="h-full w-full flex ">
            <iframe
                src="/pdfs/resume.pdf"
                allowFullScreen={true}
                title="Resume PDF"
                className="h-full w-full border-0"
            />
            <div className="min- flex h-[15vw] w-full flex-col items-center justify-between p-2 sm:h-full sm:w-1/5 sm:p-6 text-primary">
                <Navbar projectOnClick={undefined} resumeUrl={undefined} />
            </div>
        </main>
    );
}