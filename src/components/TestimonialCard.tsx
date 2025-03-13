import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

const TestimonialCard = ({
  image,
  name,
  job,
  review,
}: {
  image: string;
  name: string;
  job: string;
  review: string;
}) => {
  return (
    <Card className='bg-[#181815]'>
      <CardHeader>
        <div className='flex gap-2 items-center justify-start'>
          <Image
            src={image}
            width={40}
            height={30}
            alt={name}
            className='bg-red-300'
          />
          <div className=''>
            <h1 className='text-[.9rem]'>{name}</h1>
            <p className='text-[.7rem] text-white/70'>{job}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className='text-[.7rem] text-white/70'>&rdquo;{review}&ldquo;</p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
