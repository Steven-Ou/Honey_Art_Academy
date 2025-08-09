import Image from 'next/image';

export default function About(){
    return(
        <section id="about" className="mb-24 scroll-mt-20">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                    <Image
                        src="https://placehold.co/600x400/FFD54F/333333?text=Honey+Academy" 
                        alt="Honey Academy" 
                        width = {600}
                        height={400}
                        className="rounded-lg shadow-xl"
                        unoptimized
                    />
                </div>
                <div>
                    <h2></h2>
                    <p></p>
                    <p></p>
                    <div>
                        <div>
                            <div>
                                <p></p>
                                <p></p>
                            </div>
                            <div>
                                <p></p>
                                <p></p>
                            </div>
                            <div>
                                <p></p>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}