import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutContent from '@/components/AboutContent';

export default function About() {
    return (
        <div className="min-h-screen bg-[#0a103d] text-white">
            <Navbar />
            {/* Add top margin equal to your nav height */}
            <main>
                <AboutContent />
            </main>
            <Footer />
        </div>
    );
}
