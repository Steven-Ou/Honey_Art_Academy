import Image from 'next/image';

const TestimonialCard = ({ text, name, role, imgSrc }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-600 mb-4">"{text}"</p>
        <div className="flex items-center">
            <Image src={imgSrc} alt={name} width={50} height={50} className="w-12 h-12 rounded-full mr-4" />
            <div>
                <p className="font-bold">{name}</p>
                <p className="text-sm text-gray-500">{role}</p>
            </div>
        </div>
    </div>
);