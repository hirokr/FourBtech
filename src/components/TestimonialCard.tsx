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
        <div className='flex gap-2 '>
          <Image
            src={image}
            width={50}
            height={30}
            alt={name}
            className='bg-red-300'
          />
          <div className=''>
            <h1 className=''>{name}</h1>
            <p className='text-sm text-white/70'>{job}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className='text-sm text-white/70'>&rdquo;{review}&ldquo;</p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
